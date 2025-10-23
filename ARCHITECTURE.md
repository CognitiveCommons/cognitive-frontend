# Architecture Documentation

This document describes the technical architecture, design patterns, and key technical decisions for the CognitiveCommons.ca frontend application.

## Table of Contents

1. [System Overview](#system-overview)
2. [Frontend Architecture](#frontend-architecture)
3. [Component Architecture](#component-architecture)
4. [API Integration](#api-integration)
5. [Data Flow](#data-flow)
6. [Deployment Architecture](#deployment-architecture)
7. [Design Patterns](#design-patterns)
8. [Security Considerations](#security-considerations)
9. [Performance Optimization](#performance-optimization)
10. [Future Considerations](#future-considerations)

---

## System Overview

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Users                                │
│              (Desktop, Tablet, Mobile)                       │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTPS
                         ▼
┌─────────────────────────────────────────────────────────────┐
│               Cloudflare Pages (CDN)                         │
│          Next.js Static + Server Components                  │
│              www.cognitivecommons.ca                         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ REST API
                         │ /api/courses, /api/blog-posts, etc.
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                 Strapi v5 CMS (K3s)                          │
│              cognitivecommons.ca/api/*                       │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ SQL
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  PostgreSQL 17                               │
│              (Persistent Storage)                            │
└─────────────────────────────────────────────────────────────┘
```

### Key Components

1. **Frontend (This Repository)**: Next.js 15 application deployed to Cloudflare Pages
2. **Backend CMS**: Strapi v5.28.0 running on K3s cluster at cognitivecommons.ca
3. **Database**: PostgreSQL 17 for Strapi content storage
4. **CDN**: Cloudflare's global CDN for static asset delivery
5. **Infrastructure**: Kubernetes (K3s) cluster for Strapi backend

---

## Frontend Architecture

### Next.js 15 App Router

This project uses Next.js 15's **App Router** (not Pages Router), which provides:

- **File-based routing**: `app/courses/page.tsx` → `/courses` route
- **Layouts**: Shared `layout.tsx` files for consistent UI structure
- **Server Components**: Default for better performance
- **Client Components**: Opt-in with `'use client'` directive
- **Nested routes**: `app/blog/[slug]/page.tsx` for dynamic routes

#### Directory Structure

```
app/
├── layout.tsx                    # Root layout (Header + Footer)
├── page.tsx                      # Homepage (/)
├── globals.css                   # Global styles + Tailwind
├── courses/
│   ├── page.tsx                  # /courses (listing)
│   └── [slug]/
│       └── page.tsx              # /courses/[slug] (detail)
├── tools/
│   └── page.tsx                  # /tools
├── about/
│   └── page.tsx                  # /about
├── blog/
│   ├── page.tsx                  # /blog (listing)
│   └── [slug]/
│       └── page.tsx              # /blog/[slug] (article)
└── contact/
    └── page.tsx                  # /contact
```

### Rendering Strategy

**Static Site Generation (SSG)**: All pages are pre-rendered at build time for optimal performance.

- **Static pages**: Homepage, About, Tools, Contact (pure marketing content)
- **Dynamic routes**: Courses and Blog use `generateStaticParams()` to pre-render all possible paths
- **Revalidation**: API calls use `next: { revalidate: 60 }` for ISR (Incremental Static Regeneration)

#### Example: Static Generation with Dynamic Routes

```typescript
// app/courses/[slug]/page.tsx
export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.data.map((course) => ({
    slug: course.attributes.slug,
  }));
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const course = await getCourseBySlug(params.slug);
  return <CourseDetail course={course} />;
}
```

### TypeScript Integration

**Strict TypeScript** is enabled throughout the project:

- All components are typed with TypeScript
- API responses have defined interfaces (see `lib/strapi.ts`)
- Props are typed for all components
- `tsconfig.json` uses strict mode

---

## Component Architecture

### Component Hierarchy

```
app/layout.tsx (Root Layout)
├── Header (Global Navigation)
├── <page content> (Route-specific)
│   ├── Sections (Large page sections)
│   │   ├── Hero
│   │   ├── ThreePillars
│   │   └── ImpactStats
│   └── UI Components (Reusable primitives)
│       ├── Button
│       ├── Card
│       ├── Container
│       └── Section
└── Footer (Global Footer)
```

### Component Categories

#### 1. Layout Components (`components/layout/`)

**Purpose**: Site-wide structural elements that appear on every page.

- **`Header.tsx`**: Top navigation with logo, menu, mobile hamburger
- **`Footer.tsx`**: Bottom footer with links, newsletter, social icons

**Usage**:
```typescript
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

#### 2. Section Components (`components/sections/`)

**Purpose**: Large, self-contained page sections (typically full-width).

- **`Hero.tsx`**: Homepage hero with background pattern, title, CTAs
- **`ThreePillars.tsx`**: Three-pillar strategy cards
- **`ImpactStats.tsx`**: Impact statistics grid

**Characteristics**:
- Own background colors
- Full-width by default (use `Container` inside for content)
- Complex layout with multiple sub-elements
- Page-specific content

**Usage**:
```typescript
// app/page.tsx
export default function HomePage() {
  return (
    <>
      <Hero title="..." subtitle="..." primaryCta="..." />
      <ThreePillars />
      <ImpactStats />
    </>
  );
}
```

#### 3. UI Components (`components/ui/`)

**Purpose**: Reusable, composable building blocks used across multiple pages.

- **`Button.tsx`**: Call-to-action buttons (primary, secondary, outline)
- **`Card.tsx`**: Content card with optional icon, title, description
- **`Container.tsx`**: Max-width content wrapper (1280px)
- **`Section.tsx`**: Vertical padding wrapper for page sections

**Characteristics**:
- Highly reusable
- Accept props for customization
- No page-specific logic
- Consistent styling

**Usage**:
```typescript
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

<Button variant="primary" href="/courses">
  Explore Courses
</Button>

<Card title="SME AI Suite" icon={Briefcase}>
  Affordable AI tools for small business
</Card>
```

### Component Design Principles

1. **Composition over Inheritance**: Build complex UIs by combining simple components
2. **Single Responsibility**: Each component does one thing well
3. **Props for Customization**: Use props instead of creating variations
4. **TypeScript Types**: All props are typed for safety
5. **Consistency**: Follow established patterns for new components

---

## API Integration

### Strapi REST API

The frontend communicates with Strapi via REST API calls defined in `lib/strapi.ts`.

#### API Client Structure

```typescript
// lib/strapi.ts
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://cognitivecommons.ca";

export async function fetchAPI<T>(path: string, options: RequestInit = {}): Promise<StrapiResponse<T>> {
  const url = `${STRAPI_URL}/api${path}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json();
}
```

#### API Functions

- **`getCourses()`**: Fetch all courses with pagination
- **`getCourseBySlug(slug: string)`**: Fetch single course by slug
- **`getCoursesCategories()`**: Fetch course categories for filtering
- **`getBlogPosts()`**: Fetch all blog posts
- **`getBlogPostBySlug(slug: string)`**: Fetch single blog post
- **`getHomepage()`**: Fetch homepage dynamic content
- **`getTools()`**: Fetch AI tools list

#### Strapi Response Format

```typescript
interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiEntity<T> {
  id: number;
  attributes: T;
}
```

#### Example: Fetching Courses

```typescript
// lib/strapi.ts
export async function getCourses(): Promise<StrapiResponse<StrapiEntity<Course>[]>> {
  return fetchAPI<StrapiEntity<Course>[]>(
    "/courses?populate=*&sort=createdAt:desc"
  );
}

// Usage in component
const { data: courses } = await getCourses();
courses.map((course) => (
  <CourseCard
    title={course.attributes.title}
    slug={course.attributes.slug}
    price={course.attributes.price}
  />
));
```

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_STRAPI_URL=https://cognitivecommons.ca
NEXT_PUBLIC_SITE_URL=https://www.cognitivecommons.ca
```

**Security Note**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never put secrets here.

---

## Data Flow

### 1. Build-Time Data Flow (SSG)

```
Build Time:
  Next.js Build Process
    ↓
  generateStaticParams() → Fetch all slugs from Strapi
    ↓
  For each slug: Fetch full content from Strapi
    ↓
  Generate static HTML files
    ↓
  Deploy to Cloudflare Pages (CDN)

Runtime:
  User Request → Cloudflare CDN → Serve pre-rendered HTML
```

### 2. Incremental Static Regeneration (ISR)

```
First Request:
  User → Cloudflare → Cached Static HTML (60s TTL)

After 60 seconds:
  User → Cloudflare → Revalidate in background
    ↓
  Fetch fresh data from Strapi
    ↓
  Generate new HTML
    ↓
  Update cache
    ↓
  Serve updated page to subsequent users
```

### 3. Current State (Mock Data)

**Phase 1 (Current)**: Using mock data embedded in components
- No Strapi calls yet
- Pages render static content
- Allows frontend development without backend dependency

**Phase 2 (Future)**: Replace mock data with Strapi API calls
- Uncomment API calls in `lib/strapi.ts`
- Replace hardcoded data with API responses
- Deploy updated build to Cloudflare

---

## Deployment Architecture

### Cloudflare Pages Deployment

```
GitHub Repository (main branch)
    ↓
  Push/Merge to main
    ↓
Cloudflare Pages Build
  │
  ├─ Install dependencies (npm ci)
  ├─ Build Next.js app (npm run build)
  ├─ Generate static files (.next directory)
  └─ Deploy to global CDN
    ↓
Cloudflare Global Edge Network
  │
  ├─ North America
  ├─ Europe
  ├─ Asia Pacific
  └─ Australia
    ↓
Users (served from nearest edge location)
```

### Build Configuration

```toml
# wrangler.toml
name = "cognitive-frontend"
compatibility_date = "2025-10-23"

[env.production]
routes = [
  { pattern = "cognitivecommons.ca/*", zone_name = "cognitivecommons.ca" }
]

pages_build_output_dir = ".next"
```

### Deployment Environments

- **Production**: www.cognitivecommons.ca (main branch)
- **Preview**: Automatic preview deployments for pull requests
- **Local Development**: localhost:3000 (npm run dev)

---

## Design Patterns

### 1. Container/Presentational Pattern

**Container Components**: Handle data fetching and logic
**Presentational Components**: Receive props and render UI

```typescript
// Container (Page)
export default async function CoursesPage() {
  const courses = await getCourses(); // Data fetching
  return <CoursesList courses={courses} />; // Pass to presentational
}

// Presentational (Component)
export function CoursesList({ courses }: { courses: Course[] }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}
```

### 2. Composition Pattern

Build complex UIs by composing simple components:

```typescript
<Section className="bg-gray-50">
  <Container>
    <h2 className="text-4xl font-bold mb-12">Our Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <Button href={`/courses/${course.slug}`}>Learn More</Button>
        </Card>
      ))}
    </div>
  </Container>
</Section>
```

### 3. Prop Drilling Prevention

For deeply nested components, use React Context or pass props directly:

```typescript
// Option 1: Direct props (preferred for simple cases)
<Header logo={logo} navigation={navigation} />

// Option 2: Context (for deeply shared state - not currently used)
const ThemeContext = React.createContext();
```

### 4. Responsive Design Pattern

Mobile-first with Tailwind responsive classes:

```typescript
<div className="
  grid
  grid-cols-1       // Mobile: 1 column
  md:grid-cols-2    // Tablet: 2 columns
  lg:grid-cols-3    // Desktop: 3 columns
  gap-6
">
  {items.map((item) => <Card {...item} />)}
</div>
```

---

## Security Considerations

### 1. Environment Variables

- **Public variables**: Prefixed with `NEXT_PUBLIC_`, exposed to browser (API URLs only)
- **Private variables**: Server-side only, never exposed (API keys, secrets)
- **Never commit**: `.env.local` is in `.gitignore`

### 2. HTTPS

- All traffic encrypted via Cloudflare SSL
- Automatic redirect from HTTP to HTTPS
- Strict Transport Security (HSTS) enabled

### 3. Content Security

- **Input Validation**: Forms validate user input before submission
- **XSS Prevention**: React automatically escapes content
- **CSRF Protection**: Will be implemented when forms submit to backend

### 4. API Security

- **CORS**: Strapi API configured to only accept requests from cognitivecommons.ca domains
- **Rate Limiting**: Cloudflare provides DDoS protection and rate limiting
- **Authentication**: Future phase will add JWT authentication for user accounts

---

## Performance Optimization

### 1. Static Site Generation (SSG)

- All pages pre-rendered at build time
- Instant page loads (no server-side processing)
- Served from CDN edge locations

### 2. Image Optimization

```typescript
import Image from "next/image";

<Image
  src="/course-thumbnail.jpg"
  alt="AI Bootcamp"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
/>
```

Next.js automatically:
- Resizes images for different screen sizes
- Converts to modern formats (WebP, AVIF)
- Lazy loads images below the fold
- Generates blur placeholders

### 3. Font Optimization

```typescript
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
```

Next.js automatically:
- Self-hosts Google Fonts (no external request)
- Preloads critical font files
- Adds font-display: swap

### 4. Code Splitting

Next.js automatically code-splits by route:
- `/courses` page only loads courses code
- `/blog` page only loads blog code
- Shared code in common chunk

### 5. Bundle Optimization

```typescript
// next.config.ts
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Fast minification with SWC
  images: {
    domains: ["cognitivecommons.ca"], // Allow Strapi images
  },
};
```

### 6. Incremental Static Regeneration (ISR)

```typescript
fetch(url, {
  next: { revalidate: 60 }, // Revalidate every 60 seconds
});
```

- Keeps static pages fresh without full rebuilds
- Background revalidation doesn't slow down users
- Best of both: speed of static + freshness of dynamic

---

## Future Considerations

### 1. User Authentication

When implementing user accounts:
- Use NextAuth.js for authentication
- JWT tokens stored in HTTP-only cookies
- Passwordless OTP via email/phone
- Social login (Google, Apple, Facebook)

### 2. Course Enrollment

When implementing course enrollment:
- User accounts required
- Payment integration (Stripe)
- Progress tracking
- Certificate generation

### 3. Interactive Features

Potential future enhancements:
- Course search with Algolia
- Real-time chat/support (WebSockets)
- Course recommendations (ML)
- User dashboards (progress, certificates)

### 4. Analytics

Track user behavior:
- Google Analytics or Plausible
- Conversion tracking
- Heatmaps (Hotjar)
- Performance monitoring (Vercel Analytics or Cloudflare Web Analytics)

### 5. A/B Testing

For conversion optimization:
- Split testing framework
- Feature flags (LaunchDarkly or Flagsmith)
- Experimentation platform

### 6. Internationalization (i18n)

If expanding beyond Canada:
- Multi-language support (French for Quebec)
- Currency conversion
- Region-specific content

---

## Conclusion

This architecture provides a solid foundation for a high-performance, scalable, and maintainable frontend application. Key strengths:

- **Performance**: Static generation with ISR for speed and freshness
- **Developer Experience**: TypeScript, component library, clear patterns
- **Scalability**: Cloudflare's global CDN handles traffic spikes
- **Maintainability**: Clear component hierarchy and consistent patterns
- **Future-Ready**: Designed for easy addition of authentication, enrollment, and interactive features

For questions or suggestions, see [CONTRIBUTING.md](./CONTRIBUTING.md).

---

**Last Updated**: 2025-10-23
**Maintained By**: CognitiveCommons Development Team
