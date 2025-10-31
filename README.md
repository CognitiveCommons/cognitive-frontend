# CognitiveCommons.ca - Frontend

The official website for **CognitiveCommons**, a Canadian non-profit organization democratizing AI for all Canadians. This is the frontend Next.js application that serves the public-facing marketing site and course platform.

## Overview

CognitiveCommons makes artificial intelligence accessible, affordable, and ethical for Canadian SMEs and communities—not just tech elites. This website showcases our mission, AI tools, training courses, and consulting services.

**Live Site**: [www.cognitivecommons.ca](https://www.cognitivecommons.ca)
**Backend API**: [cognitivecommons.ca](https://cognitivecommons.ca)
**GitHub**: [CognitiveCommons/cognitive-frontend](https://github.com/CognitiveCommons/cognitive-frontend)

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router with React Server Components)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **CMS Backend**: [Strapi v5.28.0](https://strapi.io/) (Headless CMS at cognitivecommons.ca)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## Features

### Public Pages
- **Homepage**: Hero section, capability gap data, ACCESS/AGENCY/ASSURANCE pillars, governance structure
- **Three Pillars**: Detailed explanation of practical tools, capacity building, and trust mechanisms
- **What We Will Not Do**: Explicit constraints (no lock-in, no bypassing consent, human-in-loop, evidence over hype)
- **Governance & Transparency**: Partner Council, Community Tech Stewards, Privacy Official
- **Standards Integration**: HSDS, 360Giving, FixMyStreet, Alaveteli, GOV.UK Notify patterns
- **Privacy Policy**: PIPEDA/CASL compliance details, data residency, consent mechanisms
- **Terms of Service**: User agreements and acceptable use policies

### Design Features
- Evidence-based design (capability gap data, success metrics)
- WCAG 2.2 AA accessibility compliance (release gate)
- Fully responsive (mobile-first design)
- Canadian-themed colors with aurora and maple accents
- Bold typography using Inter font family
- Consistent component library for rapid development
- Low-bandwidth optimized for underserved communities

## Getting Started

### Prerequisites

- **Node.js**: 20.x or higher
- **npm**: 10.x or higher
- **Git**: For version control

### Installation

```bash
# Clone the repository
git clone https://github.com/CognitiveCommons/cognitive-frontend.git
cd cognitive-frontend

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Strapi API URL (backend)
NEXT_PUBLIC_STRAPI_URL=https://cognitivecommons.ca

# Site URL (used for meta tags and canonical URLs)
NEXT_PUBLIC_SITE_URL=https://www.cognitivecommons.ca
```

### Development

```bash
# Start development server
npm run dev

# Open browser to http://localhost:3000
```

The app will automatically reload when you make changes to the code.

### Build & Preview

```bash
# Create production build
npm run build

# Preview production build locally
npm run start
```

### Linting & Formatting

```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint --fix
```

## Project Structure

```
cognitive-frontend/
├── app/                          # Next.js 15 App Router
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout (Header + Footer)
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── courses/
│   │   ├── page.tsx              # Courses listing
│   │   └── [slug]/page.tsx       # Individual course detail
│   ├── tools/page.tsx            # AI tools showcase
│   ├── about/page.tsx            # About/mission page
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Individual blog post
│   └── contact/page.tsx          # Contact form
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Site-wide navigation header
│   │   └── Footer.tsx            # Site-wide footer
│   ├── sections/
│   │   ├── Hero.tsx              # Homepage hero section
│   │   ├── ThreePillars.tsx      # Three-pillar strategy section
│   │   └── ImpactStats.tsx       # Impact statistics section
│   └── ui/
│       ├── Button.tsx            # Reusable button component
│       ├── Card.tsx              # Reusable card component
│       ├── Container.tsx         # Content container with max-width
│       └── Section.tsx           # Page section wrapper
├── lib/
│   ├── strapi.ts                 # Strapi API client and TypeScript types
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets (images, fonts, etc.)
├── docs/                         # Additional documentation
│   ├── ARCHITECTURE.md           # System architecture and design patterns
│   ├── CONTRIBUTING.md           # Development guidelines
│   ├── DEPLOYMENT.md             # Cloudflare deployment guide
│   ├── CONTENT_GUIDE.md          # Strapi content population guide
│   └── TESTING_CHECKLIST.md      # Comprehensive QA checklist
├── .env.local                    # Environment variables (not committed)
├── .env.example                  # Environment variables template
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## Key Directories Explained

- **`app/`**: Next.js App Router structure. Each `page.tsx` is a route.
- **`components/`**: Reusable React components organized by type (layout, sections, UI primitives).
- **`lib/`**: Utility functions and API clients (e.g., Strapi integration).
- **`public/`**: Static files served directly (images, fonts, etc.).

## Deployment

This application is deployed to **Cloudflare Pages** with automatic deployments from the `main` branch.

For detailed deployment instructions, see:
- **[DEPLOYMENT.md](./DEPLOYMENT.md)**: Cloudflare Pages deployment guide
  - Option 1: Deploy via Cloudflare Dashboard (recommended)
  - Option 2: Deploy via Wrangler CLI
  - Option 3: Deploy via GitHub Actions

### Quick Deploy

```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy .next --project-name=cognitive-frontend --branch=main
```

## Content Management

Content is managed via **Strapi v5.28.0** running at `cognitivecommons.ca`.

- **Strapi Admin**: [https://cognitivecommons.ca/admin](https://cognitivecommons.ca/admin)
- **API Docs**: [https://cognitivecommons.ca/api/documentation](https://cognitivecommons.ca/api/documentation)

For content population instructions, see:
- **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)**: Step-by-step guide to populating Strapi with courses, blog posts, and content in GlobalFoodBook tone

## Testing

Run the comprehensive testing checklist before deployment:

- **[TESTING_CHECKLIST.md](./TESTING_CHECKLIST.md)**: Full QA checklist covering:
  - Build verification
  - Page rendering
  - Responsive design (mobile/tablet/desktop)
  - Browser compatibility (Chrome, Firefox, Safari)
  - Accessibility (keyboard navigation, screen readers, contrast)
  - Performance (Lighthouse scores, Core Web Vitals)
  - SEO (meta tags, semantic HTML)
  - Functionality (links, forms, CTAs)
  - Content review
  - Security
  - Cross-device testing

## Documentation

- **[README.md](./README.md)** (this file): Project overview and getting started
- **[ARCHITECTURE.md](./ARCHITECTURE.md)**: System architecture, design patterns, and technical decisions
- **[CONTRIBUTING.md](./CONTRIBUTING.md)**: Development workflow, code style, and contribution guidelines
- **[DEPLOYMENT.md](./DEPLOYMENT.md)**: Cloudflare Pages deployment instructions
- **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)**: Strapi content population guide with GlobalFoodBook writing style
- **[TESTING_CHECKLIST.md](./TESTING_CHECKLIST.md)**: Comprehensive pre-deployment QA checklist

## Design System

### Colors
- **Primary**: Black (`#000000`)
- **Accent**: Purple to Blue gradient (`#9333ea` to `#3b82f6`)
- **Background**: Gray shades (`gray-50`, `gray-100`, `gray-900`)

### Typography
- **Font**: Inter (Google Font)
- **Headings**: Bold, large scale (4xl to 7xl)
- **Body**: Regular, readable (base to lg)

### Components
All components follow consistent patterns:
- `Button`: Primary, secondary, outline variants
- `Card`: White background, rounded corners, shadow on hover
- `Container`: Max-width content wrapper (1280px)
- `Section`: Vertical padding wrapper

## Writing Tone

All content follows the **GlobalFoodBook.com warm, conversational tone**:

✅ **DO**:
- Start with warm greetings ("Hey there!", "Hi friend!")
- Use first person ("I'm thrilled you're here")
- Address pain points directly
- Use conversational language ("yes, really!")
- Include parenthetical asides
- Short, scannable paragraphs
- Personal anecdotes
- "You and I" language (build connection)

❌ **DON'T**:
- Corporate jargon ("leverage synergies")
- Overly formal language
- Third-person distance ("The platform offers...")
- Buzzwords without explanation

See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for complete writing style guide with examples.

## Three-Pillar Framework: ACCESS → AGENCY → ASSURANCE

CognitiveCommons operates on three interconnected pillars:

1. **ACCESS**: Practical Digital Services
   - Interoperable, modular tools addressing real friction points
   - Community Notify, Service Navigator (HSDS), Grants Studio (360Giving), Report & Route (FixMyStreet), Housing Access
   - Sector tools: TideWatch (fisheries), AgriSmart (agriculture), RetailEdge (retail)
   - Success metrics: ≥45% message open rates, ≥85% directory freshness, ≥70% SLA compliance

2. **AGENCY**: Building Capacity
   - Teacher Support Network with workshops and peer circles
   - SME Quick-Wins cohorts (4-week implementation sprints)
   - Community Tech Stewards training for local data governance
   - Success metrics: ≥30% time saved per task, ≥60% adoption persistence at 90 days

3. **ASSURANCE**: Earning Trust Through Transparency
   - WCAG 2.2 AA accessibility as release gate
   - CASL/PIPEDA compliance (consent tracking, audit logs, DPIAs)
   - Canadian data residency (encrypted in transit & at rest)
   - Open standards integration (HSDS, 360Giving, FixMyStreet, Alaveteli)
   - Quarterly impact notes and annual replication reports

## Target Audience

- **Primary**: 1.2M Canadian SMEs (businesses with <500 employees)
- **Secondary**: Educators, community leaders, non-profit organizations
- **Geography**: Canada-focused with special attention to underserved regions

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for:
- Development setup
- Code style guidelines
- Component creation standards
- Commit message format
- Pull request process

## Support & Contact

- **Website**: [www.cognitivecommons.ca](https://www.cognitivecommons.ca)
- **Email**: [hello@cognitivecommons.ca](mailto:hello@cognitivecommons.ca)
- **GitHub Issues**: [Report a bug or request a feature](https://github.com/CognitiveCommons/cognitive-frontend/issues)

## License

This project is proprietary software owned by CognitiveCommons. All rights reserved.

---

**Built with ❤️ by CognitiveCommons**
*Democratizing AI for All Canadians*
