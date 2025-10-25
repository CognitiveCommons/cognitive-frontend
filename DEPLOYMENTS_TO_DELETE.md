# Cloudflare Pages Deployments Cleanup

**Project**: cognitivecommons
**Account ID**: 2179b73e421f9d5f7a7f1be83ec59004

## Current Production (KEEP THIS ONE)

✅ **09c39782-d9f3-4db3-9978-7c15cfb24c6c**
- URL: https://09c39782.cognitivecommons.pages.dev
- Age: 11 minutes (latest)
- Status: Connected to cognitivecommons.ca
- Features: Includes Google Analytics (G-S5L49TG1ZJ)
- **ACTION: DO NOT DELETE**

---

## Deployments to Delete (24 total)

Delete these via: https://dash.cloudflare.com/2179b73e421f9d5f7a7f1be83ec59004/pages/view/cognitivecommons

### Recent (less than 1 hour)

1. **fa410a6e-ba4a-4a69-9694-f4f5b9b35ddb** (15 minutes ago)
   - https://fa410a6e.cognitivecommons.pages.dev

2. **b5236747-dd5b-4163-83ce-35d6ea04bf35** (33 minutes ago)
   - https://b5236747.cognitivecommons.pages.dev

3. **e2678491-0045-47fd-91ac-2e857168fde3** (44 minutes ago)
   - https://e2678491.cognitivecommons.pages.dev

4. **17644c80-3adb-4a39-a696-e4e99b9d167d** (58 minutes ago)
   - https://17644c80.cognitivecommons.pages.dev

### 1-8 hours old

5. **694ccebc-d1f4-4ac5-ac39-d13c3459a4a9** (1 hour ago)
   - https://694ccebc.cognitivecommons.pages.dev

6. **4de4d9eb-9412-4b49-a73c-b0fccb2174bc** (5 hours ago)
   - https://4de4d9eb.cognitivecommons.pages.dev

7. **fa0f50d2-c671-4de2-914a-05c34f6d9d3c** (6 hours ago)
   - https://fa0f50d2.cognitivecommons.pages.dev

8. **b644dd3f-8392-4327-be44-94b19b41fd68** (6 hours ago)
   - https://b644dd3f.cognitivecommons.pages.dev

9. **165063a0-87d7-41bc-ac39-7668ba5abcdf** (6 hours ago)
   - https://165063a0.cognitivecommons.pages.dev

10. **a90585f8-f0ef-427a-a11e-da3088707c74** (7 hours ago)
    - https://a90585f8.cognitivecommons.pages.dev

11. **2f67b55e-079c-4186-8636-215982e19efa** (7 hours ago)
    - https://2f67b55e.cognitivecommons.pages.dev

12. **3f8f253d-65d0-4f7a-b8be-06b8331b9ca9** (7 hours ago)
    - https://3f8f253d.cognitivecommons.pages.dev

13. **617ca2d5-d9cc-45f2-82b5-298339dda6f6** (8 hours ago)
    - https://617ca2d5.cognitivecommons.pages.dev

### 15-18 hours old

14. **c997f6b3-cf0a-4cb2-abd3-55f583d0feb7** (15 hours ago) ⚠️ **SPECIFICALLY MENTIONED**
    - https://c997f6b3.cognitivecommons.pages.dev

15. **462ccd45-390d-46a7-b6b5-43eb87a8cc11** (15 hours ago)
    - https://462ccd45.cognitivecommons.pages.dev

16. **42b2447a-7861-4fe9-8561-2220d1ee013b** (15 hours ago)
    - https://42b2447a.cognitivecommons.pages.dev

17. **1d8a6a5e-dd47-40b3-92d6-1f79968238db** (16 hours ago)
    - https://1d8a6a5e.cognitivecommons.pages.dev

18. **a3b8aa7b-2cf1-44e9-aac1-e08a369e4f9d** (17 hours ago)
    - https://a3b8aa7b.cognitivecommons.pages.dev

19. **834c1a16-5032-4caa-9a99-4d083cd15623** (17 hours ago)
    - https://834c1a16.cognitivecommons.pages.dev

20. **f671187a-04f2-429c-9e58-85d43f8aeefd** (17 hours ago)
    - https://f671187a.cognitivecommons.pages.dev

21. **9c37b5e4-998f-445c-88c2-ef65bd3ce0b4** (18 hours ago)
    - https://9c37b5e4.cognitivecommons.pages.dev

22. **6efa25c6-b008-4da7-87e8-a35a8da25271** (18 hours ago)
    - https://6efa25c6.cognitivecommons.pages.dev

23. **08d6f51d-8f3b-4e1c-a4fd-b3116265e1d0** (18 hours ago)
    - https://08d6f51d.cognitivecommons.pages.dev

24. **c6a28b60-391f-49db-8e37-48b4d5f1b86e** (18 hours ago)
    - https://c6a28b60.cognitivecommons.pages.dev

---

## Manual Deletion Steps

1. **Open Cloudflare Dashboard**
   - Navigate to: https://dash.cloudflare.com/2179b73e421f9d5f7a7f1be83ec59004/pages/view/cognitivecommons

2. **For each deployment listed above**:
   - Click on the deployment in the list
   - Look for the "Delete" or "..." menu option
   - Confirm deletion
   - **DO NOT delete 09c39782** (current production)

3. **Verify after deletion**:
   ```bash
   cd /Users/ikenna/repo/cognitive-commons/cognitive-frontend
   npx wrangler pages deployment list --project-name=cognitivecommons
   ```
   Should show only 1 deployment: 09c39782

---

## Why Manual Deletion is Required

- **Wrangler CLI**: No `wrangler pages deployment delete` command exists
- **Cloudflare API**: Current API token lacks delete permissions (error code 10000)
- **Alternative**: Create new API token with "Cloudflare Pages - Edit" permission, but manual deletion is simpler for one-time cleanup

---

## After Deletion

Only this deployment should remain:

```
09c39782-d9f3-4db3-9978-7c15cfb24c6c → https://09c39782.cognitivecommons.pages.dev
└── Connected to cognitivecommons.ca (Production)
```
