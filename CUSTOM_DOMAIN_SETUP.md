# Custom Domain Setup - www.cognitivecommons.ca

**Status**: ⚠️ Domain not yet configured
**Current**: Preview URL only (https://6980830f.cognitive-frontend.pages.dev)
**Target**: https://www.cognitivecommons.ca

---

## 🎯 Current Situation

### DNS Status
- ✅ **cognitivecommons.ca** → Points to Strapi backend (172.67.182.8, 104.21.59.179)
- ⚠️ **www.cognitivecommons.ca** → Points to same Strapi backend (needs to be changed)
- ✅ **Pages Deployment** → Live at 6980830f.cognitive-frontend.pages.dev

### Architecture (Desired)
```
cognitivecommons.ca          → Strapi Backend (API + Admin)
www.cognitivecommons.ca      → Cloudflare Pages (Next.js Frontend)
```

---

## 📋 Step-by-Step Setup Instructions

### Step 1: Add Custom Domain to Cloudflare Pages (5 minutes)

1. **Go to Cloudflare Dashboard**
   - URL: https://dash.cloudflare.com/
   - Login with your Cloudflare account

2. **Navigate to Pages Project**
   - Click **Workers & Pages** in the left sidebar
   - Click on **cognitive-frontend** project
   - Or direct URL: https://dash.cloudflare.com/2179b73e421f9d5f7a7f1be83ec59004/pages/view/cognitive-frontend

3. **Go to Custom Domains**
   - Click the **Custom domains** tab at the top

4. **Add Custom Domain**
   - Click **Set up a custom domain** button
   - Enter: `www.cognitivecommons.ca`
   - Click **Continue**

5. **Review DNS Instructions**
   - Cloudflare will show you what DNS records to create
   - **Expected instructions**:
     - Type: CNAME
     - Name: www
     - Target: cognitive-frontend.pages.dev
     - Proxy: Enabled (orange cloud)

### Step 2: Configure DNS Records (5 minutes)

Since `cognitivecommons.ca` is already in Cloudflare, setting up DNS is easy:

1. **Go to DNS Settings**
   - In Cloudflare Dashboard, go to **DNS** → **Records**
   - Or: https://dash.cloudflare.com/[your-zone-id]/dns

2. **Find the www Record**
   - Look for existing `www` CNAME or A record
   - Current target: Same as root domain (Strapi backend)

3. **Update the www Record**
   - Click **Edit** on the `www` record
   - Change:
     - **Type**: CNAME
     - **Name**: www
     - **Target**: `cognitive-frontend.pages.dev`
     - **Proxy status**: Proxied (orange cloud icon)
     - **TTL**: Auto
   - Click **Save**

### Step 3: Wait for DNS Propagation (1-5 minutes)

Cloudflare DNS updates are typically instant, but can take up to 5 minutes:

```bash
# Check DNS propagation
dig www.cognitivecommons.ca

# Should eventually show CNAME to cognitive-frontend.pages.dev
```

### Step 4: Verify Custom Domain (2 minutes)

1. **Test in Browser**
   - Visit: https://www.cognitivecommons.ca
   - Should show your Next.js frontend (not Strapi)

2. **Check SSL Certificate**
   - Cloudflare automatically provisions SSL/TLS certificate
   - Should show green padlock in browser

3. **Verify All Pages Load**
   - Homepage: https://www.cognitivecommons.ca/
   - Courses: https://www.cognitivecommons.ca/courses
   - About: https://www.cognitivecommons.ca/about
   - Tools: https://www.cognitivecommons.ca/tools
   - Blog: https://www.cognitivecommons.ca/blog
   - Contact: https://www.cognitivecommons.ca/contact

---

## 🔧 Alternative: Quick Command-Line Check

You can verify the Pages project status:

```bash
cd /Users/ikenna/repo/cognitive-commons/cognitive-frontend

# Check deployment status
npx wrangler pages deployment list --project-name=cognitive-frontend

# Check project details
npx wrangler pages project list | grep cognitive
```

---

## ⚠️ Important Notes

### Domain Architecture
- **Root domain (cognitivecommons.ca)**: Keep pointing to Strapi backend
- **www subdomain (www.cognitivecommons.ca)**: Point to Cloudflare Pages frontend
- **Why?**: Next.js frontend needs to call Strapi API at cognitivecommons.ca/api

### Strapi Backend (500 Error)
Your Strapi backend at cognitivecommons.ca is currently returning 500 errors. You may want to check:
- Strapi service status
- Database connection
- Server logs
- K3s pod status (if running on K3s)

### Environment Variables
After custom domain is working, set these in Cloudflare Pages settings:

1. Go to **Settings** → **Environment variables** in Pages project
2. Add:
   ```
   NEXT_PUBLIC_STRAPI_URL=https://cognitivecommons.ca
   NEXT_PUBLIC_SITE_URL=https://www.cognitivecommons.ca
   ```
3. Click **Save**
4. **Redeploy** for changes to take effect:
   ```bash
   npx wrangler pages deploy .next --project-name=cognitive-frontend --branch=main
   ```

---

## 🚨 Troubleshooting

### Issue 1: "www.cognitivecommons.ca still shows Strapi"
**Cause**: DNS not updated or not propagated yet
**Solution**:
- Wait 5-10 minutes
- Clear browser cache (Cmd+Shift+R on Mac)
- Check DNS: `dig www.cognitivecommons.ca`
- Should show CNAME to cognitive-frontend.pages.dev

### Issue 2: "Custom domain shows 'Not Found'"
**Cause**: Custom domain not added to Pages project
**Solution**: Complete Step 1 above (add domain in Dashboard)

### Issue 3: "SSL Certificate Error"
**Cause**: Cloudflare is provisioning the certificate
**Solution**: Wait 1-2 minutes, SSL is automatic

### Issue 4: "API calls failing from frontend"
**Cause**: Strapi backend is down (500 error)
**Solution**:
- Check Strapi service status
- Check K3s pods if running on K3s
- Review backend logs

---

## 📊 DNS Configuration Summary

### Current DNS (Before Changes)
```
cognitivecommons.ca     → A/CNAME → 172.67.182.8, 104.21.59.179 (Strapi)
www.cognitivecommons.ca → A/CNAME → 172.67.182.8, 104.21.59.179 (Strapi)
```

### Target DNS (After Changes)
```
cognitivecommons.ca     → A/CNAME → 172.67.182.8, 104.21.59.179 (Strapi Backend)
www.cognitivecommons.ca → CNAME   → cognitive-frontend.pages.dev (Next.js Frontend)
```

---

## ✅ Verification Checklist

After completing the setup:

- [ ] Custom domain added in Cloudflare Pages Dashboard
- [ ] DNS CNAME record created for www subdomain
- [ ] DNS propagated (dig shows CNAME to Pages)
- [ ] https://www.cognitivecommons.ca loads frontend
- [ ] SSL certificate valid (green padlock)
- [ ] All pages accessible (/, /courses, /about, etc.)
- [ ] Environment variables set in Pages settings
- [ ] Redeployed to use new environment variables

---

## 🎯 Quick Start

**If you want me to do this for you, I cannot access the Cloudflare Dashboard UI.**

You need to:
1. Open https://dash.cloudflare.com/
2. Go to Workers & Pages → cognitive-frontend → Custom domains
3. Add: www.cognitivecommons.ca
4. Update DNS: www CNAME cognitive-frontend.pages.dev

**Estimated Time**: 10-15 minutes total
**Difficulty**: Easy (mostly clicking through UI)

---

## 📞 Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Verify DNS with `dig www.cognitivecommons.ca`
3. Check Cloudflare Dashboard for any errors
4. Review Cloudflare Pages documentation: https://developers.cloudflare.com/pages/configuration/custom-domains/

---

**Current Status**: ⚠️ Waiting for custom domain configuration
**Preview URL**: https://6980830f.cognitive-frontend.pages.dev (working)
**Target URL**: https://www.cognitivecommons.ca (not configured yet)
