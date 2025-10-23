# Contributing to CognitiveCommons Frontend

Thank you for your interest in contributing to CognitiveCommons! This document provides guidelines and standards for contributing to the frontend application.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Development Workflow](#development-workflow)
3. [Code Style Guidelines](#code-style-guidelines)
4. [Component Guidelines](#component-guidelines)
5. [Commit Message Format](#commit-message-format)
6. [Pull Request Process](#pull-request-process)
7. [Testing Requirements](#testing-requirements)
8. [Writing Tone Guidelines](#writing-tone-guidelines)

---

## Getting Started

### Prerequisites

Before you begin, ensure you have:

- **Node.js**: 20.x or higher
- **npm**: 10.x or higher
- **Git**: For version control
- **Code Editor**: VS Code recommended (with extensions below)

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### Initial Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/CognitiveCommons/cognitive-frontend.git
   cd cognitive-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create environment file**:
   ```bash
   cp .env.example .env.local
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**:
   Navigate to http://localhost:3000

---

## Development Workflow

### Branch Naming

Use descriptive branch names following this pattern:

```
<type>/<short-description>

Examples:
feature/course-filtering
fix/mobile-nav-bug
docs/architecture-updates
chore/dependency-updates
```

**Types**:
- `feature/`: New features
- `fix/`: Bug fixes
- `docs/`: Documentation changes
- `chore/`: Maintenance tasks (dependencies, configs)
- `refactor/`: Code improvements without behavior changes
- `style/`: Code formatting only

### Development Process

1. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Write code following [Code Style Guidelines](#code-style-guidelines)
   - Test your changes locally
   - Run linter: `npm run lint`

3. **Commit frequently** with [proper commit messages](#commit-message-format):
   ```bash
   git add .
   git commit -m "feat(courses): add filtering by category"
   ```

4. **Push your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request** following [PR Process](#pull-request-process)

### Keep Your Branch Updated

```bash
# Fetch latest changes from main
git fetch origin main

# Rebase your branch onto main
git rebase origin/main

# Force push if needed (only on your feature branch)
git push --force-with-lease origin feature/your-feature-name
```

---

## Code Style Guidelines

### TypeScript

- **Always use TypeScript**: No plain JavaScript files
- **Type all props**: No `any` types unless absolutely necessary
- **Use interfaces for props**: Prefer `interface` over `type` for component props
- **Export types**: Export types that might be used elsewhere

```typescript
// Good
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
}

export function Button({ children, variant = "primary", href, onClick }: ButtonProps) {
  // Implementation
}

// Bad
export function Button({ children, variant, href, onClick }: any) {
  // Implementation
}
```

### React Components

- **Use functional components**: No class components
- **Use arrow functions**: `const Component = () => {}`
- **Use TypeScript for props**: Define interface for all props
- **Destructure props**: In function signature
- **Export at definition**: `export function Component() {}`

```typescript
// Good
export function CourseCard({ title, price, duration }: CourseCardProps) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>${price}</p>
      <span>{duration}</span>
    </Card>
  );
}

// Bad
function CourseCard(props) {
  return (
    <Card>
      <h3>{props.title}</h3>
      <p>${props.price}</p>
      <span>{props.duration}</span>
    </Card>
  );
}
export default CourseCard;
```

### Tailwind CSS

- **Use Tailwind classes**: Prefer Tailwind over custom CSS
- **Mobile-first**: Start with base (mobile) styles, add responsive classes
- **Consistent spacing**: Use Tailwind spacing scale (4, 6, 8, 12, 16, etc.)
- **Group related classes**: Visual grouping with line breaks (optional)

```typescript
// Good
<div className="
  flex flex-col gap-4
  p-6
  bg-white rounded-lg shadow-lg
  hover:shadow-xl transition-shadow
">
  {children}
</div>

// Avoid (custom CSS)
<div className="custom-card">
  {children}
</div>
/* globals.css */
.custom-card { /* ... */ }
```

### File Organization

- **One component per file**: File name matches component name
- **Co-locate related files**: Keep components near where they're used
- **Use consistent imports**: Absolute imports with `@/` alias

```typescript
// Good
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getCourses } from "@/lib/strapi";

// Bad
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { getCourses } from "../../lib/strapi";
```

### Naming Conventions

- **Components**: PascalCase (`Button`, `CourseCard`, `Header`)
- **Files**: PascalCase for components (`Button.tsx`, `CourseCard.tsx`)
- **Variables**: camelCase (`courseList`, `isLoading`, `handleClick`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`, `MAX_COURSES`)
- **Types/Interfaces**: PascalCase (`ButtonProps`, `Course`, `StrapiResponse`)

---

## Component Guidelines

### Component Structure

Follow this structure for all components:

```typescript
// 1. Imports
import { type ReactNode } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

// 2. Type definitions
interface ComponentProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

// 3. Component definition
export function Component({ title, description, children }: ComponentProps) {
  // 4. Early returns
  if (!title) return null;

  // 5. Event handlers
  const handleClick = () => {
    console.log("Clicked");
  };

  // 6. Render
  return (
    <div className="...">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}
```

### Creating New Components

#### 1. UI Components (`components/ui/`)

For reusable, generic components used across multiple pages:

```typescript
// components/ui/Badge.tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-200 text-green-800",
    warning: "bg-yellow-200 text-yellow-800",
    error: "bg-red-200 text-red-800",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}>
      {children}
    </span>
  );
}
```

#### 2. Section Components (`components/sections/`)

For large, page-specific sections:

```typescript
// components/sections/Testimonials.tsx
interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <Section className="bg-gray-50">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <p className="mb-4">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

#### 3. Layout Components (`components/layout/`)

For site-wide structural elements (Header, Footer, Sidebar):

- Should be added to `app/layout.tsx`
- Appear on every page
- Handle global state (e.g., mobile menu open/closed)

### Component Checklist

Before committing a new component:

- [ ] TypeScript props interface defined
- [ ] Component follows naming conventions
- [ ] Tailwind classes used (no custom CSS)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Accessible (proper ARIA labels, keyboard navigation)
- [ ] Reusable (no hardcoded page-specific logic in UI components)
- [ ] Documented (JSDoc comments if complex)

---

## Commit Message Format

### Structure

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting (no logic changes)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process, dependencies, configs

### Scope

The area of the codebase affected:

- `courses`: Courses pages or components
- `blog`: Blog pages or components
- `tools`: Tools page
- `api`: API client or integration
- `ui`: UI components
- `layout`: Header, Footer, or layout components
- `deps`: Dependencies
- `config`: Configuration files

### Subject

- Use imperative mood ("add" not "added" or "adds")
- No period at the end
- Max 70 characters
- Lowercase after `<type>(<scope>):`

### Body (Optional)

- Explain **what** and **why**, not **how**
- Wrap at 72 characters
- Use bullet points for multiple changes

### Footer (Optional)

- Reference issues: `Fixes #123`, `Closes #456`
- Breaking changes: `BREAKING CHANGE: description`

### Examples

```
feat(courses): add filtering by price range

Added min/max price range slider to courses listing page
- Created PriceRangeFilter component
- Integrated with existing filter state
- Updated CoursesList to filter by price

Impact: Users can now filter courses by their budget, improving
discoverability of affordable courses.
```

```
fix(mobile-nav): prevent scroll when menu is open

Fixed issue where page content scrolled behind open mobile menu

Fixes #234
```

```
docs(readme): update installation instructions

Clarified Node.js version requirement and added troubleshooting
section for common npm install errors
```

---

## Pull Request Process

### Before Opening a PR

1. **Test your changes**: Run `npm run dev` and test locally
2. **Run linter**: `npm run lint` should pass with no errors
3. **Build successfully**: `npm run build` should complete without errors
4. **Update documentation**: If you changed APIs, update relevant docs
5. **Clean commit history**: Squash work-in-progress commits if needed

### PR Title

Use the same format as commit messages:

```
feat(courses): add filtering by price range
fix(mobile-nav): prevent scroll when menu is open
docs(architecture): update deployment section
```

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Changes
- Specific change 1
- Specific change 2
- Specific change 3

## Testing
How to test these changes:
1. Step 1
2. Step 2
3. Expected result

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
- [ ] Build passes (`npm run build`)
- [ ] Lint passes (`npm run lint`)
```

### Review Process

1. **Automated checks**: PR must pass linting and build checks
2. **Code review**: At least one approval required
3. **Testing**: Reviewer will test changes locally
4. **Feedback**: Address all review comments
5. **Approval**: Reviewer approves PR
6. **Merge**: Maintainer merges to `main`

### After Merge

- Delete your feature branch (both locally and remotely)
- Verify deployment to production (Cloudflare Pages auto-deploys)

---

## Testing Requirements

### Manual Testing

Before submitting a PR, manually test:

1. **Visual regression**: Does the page look correct?
2. **Responsive design**: Test on mobile (375px), tablet (768px), desktop (1280px+)
3. **Browser compatibility**: Test in Chrome and one other browser (Firefox or Safari)
4. **Accessibility**: Tab through interactive elements, check focus states
5. **Console**: No JavaScript errors in browser console

### Testing Checklist

Use the comprehensive checklist in [TESTING_CHECKLIST.md](./TESTING_CHECKLIST.md) for major changes.

### Future: Automated Tests

(To be added in future)
- Unit tests with Jest
- E2E tests with Playwright
- Visual regression tests with Percy

---

## Writing Tone Guidelines

All content (marketing copy, course descriptions, blog posts) should follow the **GlobalFoodBook.com warm, conversational tone**.

### Do's ✅

- Start with warm greetings ("Hey there!", "Hi friend!")
- Use first person ("I'm thrilled you're here", "I built this tool...")
- Address pain points directly ("Feeling overwhelmed by AI?")
- Use conversational language with parentheticals ("yes, really!")
- Keep paragraphs short and scannable (2-3 sentences max)
- Include personal anecdotes and stories
- Use "you and I" language to build connection

### Don'ts ❌

- Corporate jargon ("leverage synergies", "best-in-class solutions")
- Overly formal language ("The platform facilitates...")
- Third-person distance ("CognitiveCommons offers...")
- Buzzwords without explanation ("paradigm shift", "revolutionary")
- Long, dense paragraphs
- Passive voice ("The course is designed to...")

### Examples

**Good** 💚:
```
Hey there! I'm thrilled you're here. Running a small business in Canada?
Feeling like AI is this massive, expensive thing only tech giants can afford?
I hear you—and that's exactly why we built this bootcamp.

Over two days, we'll demystify AI together. You'll discover practical tools
you can use Monday morning (yes, really!), learn how to automate tedious
tasks, and connect with other SME owners facing the same challenges.
```

**Bad** ❌:
```
CognitiveCommons offers a comprehensive two-day AI training program designed
to facilitate the adoption of artificial intelligence technologies by small
and medium enterprises. Participants will gain knowledge of industry-standard
AI tools and best practices for implementation in their business operations.
```

For complete writing guidelines with more examples, see [CONTENT_GUIDE.md](./CONTENT_GUIDE.md).

---

## Questions or Issues?

- **GitHub Issues**: [Report bugs or request features](https://github.com/CognitiveCommons/cognitive-frontend/issues)
- **Discussions**: [Ask questions or share ideas](https://github.com/CognitiveCommons/cognitive-frontend/discussions)
- **Email**: [hello@cognitivecommons.ca](mailto:hello@cognitivecommons.ca)

---

## License

By contributing to CognitiveCommons, you agree that your contributions will be licensed under the project's proprietary license.

---

**Thank you for contributing to democratizing AI for all Canadians!** 🇨🇦
