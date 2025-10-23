# Custom Domain Configuration - COMPLETE ✅

**Date**: October 23, 2025
**Domain**: www.cognitivecommons.ca
**Status**: ✅ Configured (Verification in progress)

---

## ✅ Configuration Completed via Cloudflare API

### Step 1: Added Custom Domain to Pages Project ✅

**API Request**:
```bash
POST /accounts/2179b73e421f9d5f7a7f1be83ec59004/pages/projects/cognitive-frontend/domains
```

**Response**:
```json
{
  "id": "5e7edee0-1423-48a8-b23d-1d2860788494",
  "name": "www.cognitivecommons.ca",
  "status": "initializing",
  "zone_tag": "6ab141bed7b4e5e516438a8b7297ae43",
  "certificate_authority": "google",
  "created_on": "2025-10-23T08:59:10.964534Z"
}
```

✅ **Result**: Custom domain added to Pages project

### Step 2: Updated DNS CNAME Record ✅

**Zone**: cognitivecommons.ca (6ab141bed7b4e5e516438a8b7297ae43)

**Previous DNS Record**:
```
Type: A
Name: www.cognitivecommons.ca
Content: 135.181.179.38 (K3s server)
Proxied: Yes
```

**New DNS Record**:
```
Type: CNAME
Name: www.cognitivecommons.ca
Content: cognitive-frontend.pages.dev
Proxied: Yes
TTL: Auto
Modified: 2025-10-23T08:59:32.240674Z
```

✅ **Result**: DNS record updated successfully

---

## 🔄 Current Status

### Domain Verification
- **Status**: Pending (automatic verification in progress)
- **Verification Method**: HTTP validation
- **Certificate Authority**: Google
- **Expected Time**: 1-10 minutes

### DNS Propagation
- **CNAME Target**: cognitive-frontend.pages.dev
- **Cloudflare Proxy**: Enabled (orange cloud)
- **Propagation Time**: 1-5 minutes typically

---

## 🎯 What Happens Next (Automatic)

1. **Domain Verification** (1-5 minutes)
   - Cloudflare verifies domain ownership
   - HTTP validation completes automatically
   - Status changes from "pending" to "active"

2. **SSL Certificate Provisioning** (1-2 minutes)
   - Google Trust Services issues certificate
   - Certificate installed automatically
   - HTTPS enabled

3. **DNS Propagation** (1-5 minutes)
   - www.cognitivecommons.ca resolves to Pages
   - Cloudflare routes traffic to deployment
   - Site becomes accessible

---

## 🌐 URL Structure (Final)

| URL | Destination | Purpose |
|-----|-------------|---------|
| https://cognitivecommons.ca | Strapi Backend (135.181.179.38) | CMS Admin + API |
| https://www.cognitivecommons.ca | Cloudflare Pages | Next.js Frontend |
| https://6980830f.cognitive-frontend.pages.dev | Cloudflare Pages | Preview URL (always works) |

---

## ✅ Verification Commands

### Check DNS Resolution
```bash
dig www.cognitivecommons.ca
# Should show CNAME to cognitive-frontend.pages.dev
```

### Check Domain Status
```bash
curl -s -X GET \
  "https://api.cloudflare.com/client/v4/accounts/2179b73e421f9d5f7a7f1be83ec59004/pages/projects/cognitive-frontend/domains" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" | jq '.result[] | {name, status}'
```

### Test Custom Domain
```bash
curl -sI https://www.cognitivecommons.ca
# Should return 200 OK after verification completes
```

### Alternative: Test Preview URL (Always Works)
```bash
curl -sI https://6980830f.cognitive-frontend.pages.dev
# Should return 200 OK immediately
```

---

## ⏱️ Timeline

| Time | Action | Status |
|------|--------|--------|
| 08:59:10 UTC | Custom domain added to Pages | ✅ Complete |
| 08:59:32 UTC | DNS CNAME record updated | ✅ Complete |
| 08:59:32+ UTC | Domain verification started | 🔄 In Progress |
| ~09:05 UTC (est.) | Verification complete | ⏳ Pending |
| ~09:05 UTC (est.) | SSL certificate issued | ⏳ Pending |
| ~09:05 UTC (est.) | Site live at custom domain | ⏳ Pending |

---

## 🔍 Monitoring Verification

The domain verification happens automatically. You can monitor progress:

```bash
# Check status every 30 seconds
watch -n 30 'curl -s -X GET \
  "https://api.cloudflare.com/client/v4/accounts/2179b73e421f9d5f7a7f1be83ec59004/pages/projects/cognitive-frontend/domains" \
  -H "Authorization: Bearer _dIlvZNGyUhrS1rEENGzLDqZnYCmSoQPxIvlRJx4" | jq ".result[] | {name, status, verification: .verification_data.status, validation: .validation_data.status}"'
```

**Expected Status Progression**:
1. `pending` → Domain verification in progress
2. `active` → Domain verified and live

---

## 🚨 Troubleshooting

### Issue: "Status still pending after 10 minutes"
**Solutions**:
- DNS may still be propagating to Cloudflare's edge
- Run: `dig www.cognitivecommons.ca` to verify CNAME is resolving
- Check Cloudflare Dashboard for any error messages
- Verification typically completes within 5 minutes

### Issue: "HTTP 522 Error"
**Cause**: Connection timeout between Cloudflare and origin
**Status**: Normal during verification process
**Solution**: Wait for verification to complete

### Issue: "DNS still shows old IPs"
**Cause**: Local DNS cache or ISP cache
**Solutions**:
- Flush DNS cache: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` (Mac)
- Wait 5-10 minutes for global propagation
- Test with: `dig @1.1.1.1 www.cognitivecommons.ca`

---

## 📊 Configuration Summary

### Cloudflare Account
- **Account**: Scribes and Shekel - Main
- **Account ID**: 2179b73e421f9d5f7a7f1be83ec59004

### Zone Details
- **Zone**: cognitivecommons.ca
- **Zone ID**: 6ab141bed7b4e5e516438a8b7297ae43
- **Status**: Active

### Pages Project
- **Project**: cognitive-frontend
- **Deployment ID**: 6980830f-044e-43df-877a-5f5eee640326
- **Production Branch**: main
- **Custom Domain**: www.cognitivecommons.ca
- **Domain ID**: 5e7edee0-1423-48a8-b23d-1d2860788494

### DNS Record
- **Record ID**: d8a4152637c85b9b82943b52c7b534ad
- **Type**: CNAME
- **Name**: www.cognitivecommons.ca
- **Content**: cognitive-frontend.pages.dev
- **Proxied**: Yes
- **TTL**: Auto (1 = automatic)

---

## 🎉 Success Criteria

✅ Custom domain added to Pages project
✅ DNS CNAME record configured
✅ Cloudflare proxy enabled
⏳ Domain verification (automatic, in progress)
⏳ SSL certificate provisioning (automatic)
⏳ Site accessible at www.cognitivecommons.ca

---

## 🔗 Quick Links

- **Live Site (Preview)**: https://6980830f.cognitive-frontend.pages.dev (working now)
- **Custom Domain**: https://www.cognitivecommons.ca (will work after verification)
- **Strapi Backend**: https://cognitivecommons.ca
- **Pages Dashboard**: https://dash.cloudflare.com/2179b73e421f9d5f7a7f1be83ec59004/pages/view/cognitive-frontend
- **DNS Dashboard**: https://dash.cloudflare.com/6ab141bed7b4e5e516438a8b7297ae43/dns

---

## 🚀 Next Steps

### 1. Wait for Verification (5-10 minutes)
The domain will automatically verify. No action needed.

### 2. Test Custom Domain
Once verification completes:
```bash
curl https://www.cognitivecommons.ca
# Should return Next.js frontend HTML
```

### 3. Set Environment Variables in Cloudflare (Optional but Recommended)
After domain is live, set env vars in Pages project:
```bash
# Via Dashboard: Settings → Environment variables
NEXT_PUBLIC_STRAPI_URL=https://cognitivecommons.ca
NEXT_PUBLIC_SITE_URL=https://www.cognitivecommons.ca
```

Then redeploy:
```bash
cd /Users/ikenna/repo/cognitive-commons/cognitive-frontend
npx wrangler pages deploy .next --project-name=cognitive-frontend --branch=main
```

### 4. Populate Strapi Content
Follow `/CONTENT_GUIDE.md` to add:
- 6 courses ($49-$499)
- Blog posts
- Team members

### 5. Connect Frontend to Strapi API
Edit `lib/strapi.ts`:
- Uncomment API functions
- Replace mock data with real API calls

### 6. Run Testing Checklist
Follow `/TESTING_CHECKLIST.md`

---

**Configuration Status**: ✅ COMPLETE (Verification in progress)
**Estimated Time to Live**: 5-10 minutes
**Preview URL**: https://6980830f.cognitive-frontend.pages.dev (working now)
