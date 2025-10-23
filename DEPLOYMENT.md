# Cloudflare Pages Deployment Guide

## Prerequisites

- Cloudflare account with access to Pages
- GitHub repository: https://github.com/CognitiveCommons/cognitive-frontend
- Domain: cognitivecommons.ca (or subdomain)

## Option 1: Deploy via Cloudflare Dashboard (Recommended)

### Step 1: Create Cloudflare Pages Project

1. Go to https://dash.cloudflare.com
2. Navigate to **Workers & Pages**
3. Click **Create Application** → **Pages** → **Connect to Git**
4. Select **CognitiveCommons/cognitive-frontend** repository
5. Configure build settings:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: (leave empty)
   - **Node version**: 20

### Step 2: Set Environment Variables

In the Cloudflare Pages project settings, add:

```
NEXT_PUBLIC_STRAPI_URL=https://cognitivecommons.ca
NEXT_PUBLIC_SITE_URL=https://www.cognitivecommons.ca
```

### Step 3: Deploy

- Click **Save and Deploy**
- Cloudflare will build and deploy automatically
- You'll get a `*.pages.dev` URL for preview

### Step 4: Configure Custom Domain

1. In project settings, go to **Custom domains**
2. Add: `www.cognitivecommons.ca` or `frontend.cognitivecommons.ca`
3. Cloudflare will provide DNS instructions
4. Wait for DNS propagation (usually < 5 minutes)

## Option 2: Deploy via CLI

### Requirements

Cloudflare API Token with permissions:
- Account - Cloudflare Pages - Edit
- Zone - DNS - Edit
- User - User Details - Read

### Commands

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy .next --project-name=cognitive-frontend --branch=main

# Or with specific account
npx wrangler pages deploy .next --project-name=cognitive-frontend --branch=main --account-id=YOUR_ACCOUNT_ID
```

## Option 3: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_STRAPI_URL: https://cognitivecommons.ca
          NEXT_PUBLIC_SITE_URL: https://www.cognitivecommons.ca

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: cognitive-frontend
          directory: .next
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

Required GitHub Secrets:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## DNS Configuration

### If using subdomain (e.g., frontend.cognitivecommons.ca):

Add CNAME record:
```
Type: CNAME
Name: frontend
Content: cognitive-frontend.pages.dev
Proxy: Enabled (Orange cloud)
```

### If using www subdomain:

Add CNAME record:
```
Type: CNAME
Name: www
Content: cognitive-frontend.pages.dev
Proxy: Enabled (Orange cloud)
```

## Architecture Note

Current setup:
- **Backend (Strapi)**: cognitivecommons.ca → K3s deployment
  - Admin: /admin
  - API: /api/*
- **Frontend (Next.js)**: www.cognitivecommons.ca → Cloudflare Pages
  - All marketing/public pages

The Next.js app fetches data from the Strapi API via `https://cognitivecommons.ca/api/*`.

## Verification Steps

After deployment:

1. **Check Homepage**: Visit www.cognitivecommons.ca
2. **Test Navigation**: All links work (courses, tools, about, blog, contact)
3. **Check Build**: No console errors
4. **Test Mobile**: Responsive on all screen sizes
5. **Verify API**: Strapi connection working (when content is added)

## Troubleshooting

### Build Fails

- Check Node version (must be 20)
- Verify all dependencies installed
- Check build logs in Cloudflare dashboard

### 404 Errors

- Ensure `.next` directory is the build output
- Check Framework preset is set to Next.js

### API Connection Issues

- Verify `NEXT_PUBLIC_STRAPI_URL` environment variable
- Check CORS settings in Strapi if needed
- Test Strapi API directly: https://cognitivecommons.ca/api/courses

### DNS Not Resolving

- Wait up to 24 hours for DNS propagation
- Use `dig www.cognitivecommons.ca` to check DNS records
- Verify CNAME record points to Pages URL

## Performance

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Support

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Next.js on Pages: https://developers.cloudflare.com/pages/framework-guides/nextjs/
