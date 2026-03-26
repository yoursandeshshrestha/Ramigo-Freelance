# HubSpot Integration Setup Guide

Complete step-by-step guide to integrate the Remigo website with HubSpot CRM for lead capture.

---

## Prerequisites

- HubSpot account (Free or paid plan)
- Admin access to HubSpot settings
- Access to the Remigo website codebase

---

## Step 1: Create Custom Contact Properties in HubSpot

HubSpot's free plan allows **10 custom properties**. We'll create exactly 10 properties to capture mortgage lead data.

### 1.1 Access Properties Settings

1. Log in to your HubSpot account
2. Click the **Settings** icon (gear icon) in the top navigation bar
3. Navigate to **Data Management** → **Properties**
4. Click **Contact properties**

### 1.2 Create Each Custom Property

Click **"Create property"** and create the following **10 custom properties** with these exact specifications:

---

#### Property 1: Mortgage Type

| Field | Value |
|-------|-------|
| **Label** | Mortgage Type |
| **Internal name** | `mortgage_type` |
| **Description** | Type of mortgage enquiry |
| **Field type** | Dropdown select |
| **Options** | `remortgage`<br>`first-home`<br>`self-employed`<br>`moving-home` |

⚠️ **Important:** Use the exact values shown (lowercase, hyphenated). Click "Add option" for each.

---

#### Property 2: Timeline

| Field | Value |
|-------|-------|
| **Label** | Timeline |
| **Internal name** | `timeline` |
| **Description** | When the customer wants to proceed |
| **Field type** | Dropdown select |
| **Options** | `asap`<br>`1-3-months`<br>`3-6-months`<br>`exploring` |

---

#### Property 3: Property Value

| Field | Value |
|-------|-------|
| **Label** | Property Value |
| **Internal name** | `property_value` |
| **Description** | Estimated property value provided by customer |
| **Field type** | Single-line text |

---

#### Property 4: Source URL

| Field | Value |
|-------|-------|
| **Label** | Source URL |
| **Internal name** | `source_url` |
| **Description** | The page URL where the form was submitted |
| **Field type** | Single-line text |

---

#### Property 5: UTM Source

| Field | Value |
|-------|-------|
| **Label** | UTM Source |
| **Internal name** | `utm_source` |
| **Description** | Marketing campaign source (e.g., google, facebook) |
| **Field type** | Single-line text |

---

#### Property 6: UTM Medium

| Field | Value |
|-------|-------|
| **Label** | UTM Medium |
| **Internal name** | `utm_medium` |
| **Description** | Marketing campaign medium (e.g., cpc, social) |
| **Field type** | Single-line text |

---

#### Property 7: UTM Campaign

| Field | Value |
|-------|-------|
| **Label** | UTM Campaign |
| **Internal name** | `utm_campaign` |
| **Description** | Marketing campaign name |
| **Field type** | Single-line text |

---

#### Property 8: UTM Content

| Field | Value |
|-------|-------|
| **Label** | UTM Content |
| **Internal name** | `utm_content` |
| **Description** | Campaign content or variant identifier |
| **Field type** | Single-line text |

---

#### Property 9: GCLID

| Field | Value |
|-------|-------|
| **Label** | GCLID |
| **Internal name** | `gclid` |
| **Description** | Google Click ID for conversion tracking |
| **Field type** | Single-line text |

---

#### Property 10: Device Type

| Field | Value |
|-------|-------|
| **Label** | Device Type |
| **Internal name** | `device_type` |
| **Description** | Device used to submit the form |
| **Field type** | Dropdown select |
| **Options** | `mobile`<br>`tablet`<br>`desktop` |

---

### 1.3 Verify All Properties Created

1. In **Settings** → **Properties** → **Contact properties**
2. Search for `mortgage_type`
3. You should see all 10 custom properties listed

✅ **Checkpoint:** You should have exactly **10 custom properties** created.

---

## Step 2: Create a Private App for API Access

HubSpot requires authentication to submit data via API. We'll create a Private App to get an access token.

### 2.1 Navigate to Private Apps

1. Go to **Settings** (gear icon)
2. Navigate to **Integrations** → **Private Apps**
3. Click **"Create a private app"**

### 2.2 Configure the Private App

**Basic Info Tab:**

| Field | Value |
|-------|-------|
| **Name** | Remigo Website Integration |
| **Description** | Lead capture from Remigo website contact forms |

**Scopes Tab:**

Enable these permissions (checkboxes):

- ✅ **CRM** → **Contacts**
  - `crm.objects.contacts.read` - Read contacts
  - `crm.objects.contacts.write` - Create and update contacts

⚠️ **Important:** You need BOTH read and write permissions for the integration to work (create new contacts + update existing ones).

### 2.3 Create the App and Get Access Token

1. Click **"Create app"**
2. Confirm the creation
3. **Copy the access token** (starts with `pat-na1-` or `pat-na2-`)

⚠️ **CRITICAL:** This token will only be shown once! Save it immediately.

**Example token format:**
```
pat-na2-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

---

## Step 3: Get Your HubSpot Portal ID

### 3.1 Find Your Portal ID

1. Click your **account name** (top right corner)
2. Go to **"Account & Billing"**
3. Click **"Account Information"**
4. Copy your **Hub ID** (this is your Portal ID)

**Example Portal ID:**
```
245683201
```

---

## Step 4: Configure Environment Variables

### 4.1 Create or Update `.env.local`

In your project root directory, create or update the `.env.local` file:

```bash
# HubSpot Integration
HUBSPOT_ACCESS_TOKEN=your_private_app_token_here
HUBSPOT_PORTAL_ID=your_portal_id_here
```

**Replace with your actual values:**

```bash
# Example (use your own values)
HUBSPOT_ACCESS_TOKEN=pat-na2-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
HUBSPOT_PORTAL_ID=your-portal-id-here
```

⚠️ **Security:** The `.env.local` file is already in `.gitignore` and will NOT be committed to version control.

### 4.2 Restart Development Server

For environment variables to load:

```bash
# Stop the current dev server (Ctrl+C)
# Then restart:
npm run dev
# or
bun run dev
```

---

## Step 5: Test the Integration

### 5.1 Basic Form Submission Test

1. Open your website: `http://localhost:3000`
2. Click any **"Get a free quote"** CTA button
3. Fill out all 4 steps of the form:
   - **Step 1:** Select a mortgage type (e.g., "First home")
   - **Step 2:** Select timeline (e.g., "1–3 months")
   - **Step 3:** Enter property value (e.g., "250000")
   - **Step 4:** Enter your contact details
4. Click **"Get my free quote →"**
5. You should be redirected to `/thank-you` page

### 5.2 Verify in HubSpot

1. Go to **Contacts** in HubSpot
2. You should see a new contact created
3. Click on the contact to view details
4. Verify all custom properties are populated:
   - Mortgage Type
   - Timeline
   - Property Value
   - Source URL
   - Device Type

### 5.3 View Custom Properties in Contacts Table

To see custom properties in the contacts list view:

1. Go to **Contacts**
2. Click **"Edit columns"** (top right)
3. Search for and add:
   - Mortgage Type
   - Timeline
   - Property Value
   - UTM Source
   - Device Type
4. Click **"Save"**

Now you'll see all the data in your contacts table!

### 5.4 Test UTM Tracking

Test with UTM parameters in the URL:

```
http://localhost:3000/?utm_source=google&utm_medium=cpc&utm_campaign=test
```

1. Open the URL above
2. Submit the form with a **different email**
3. Check HubSpot contact
4. Verify UTM fields are populated:
   - UTM Source: `google`
   - UTM Medium: `cpc`
   - UTM Campaign: `test`

### 5.5 Test Duplicate Contact Handling

Submit the form again with the **same email**:

1. Fill out the form with the same email as before
2. Submit
3. Check HubSpot - the existing contact should be **updated** (not duplicated)
4. Verify the properties reflect the latest submission

✅ **Expected behavior:** No duplicate contacts created. Existing contacts are updated with new data.

---

## Step 6: Troubleshooting

### Issue: "Contact already exists" error (409)

**Symptoms:** Form submission fails with 409 error in console

**Cause:** The integration tries to create a contact that already exists

**Solution:** This is now handled automatically! The code will:
1. Try to create a new contact
2. If contact exists (409), it updates the existing contact instead

**Verify the fix:**
- Check `src/services/hubspot.ts` includes update logic
- Submit form with same email twice
- Second submission should succeed and update existing contact

---

### Issue: Custom properties not showing in HubSpot

**Symptoms:** Contact created but custom fields are empty

**Possible causes:**

1. **Properties not created in HubSpot**
   - Go to Settings → Properties → Contact properties
   - Search for `mortgage_type`
   - If not found, go back to Step 1 and create all properties

2. **Internal names don't match**
   - Property internal names MUST be exact:
     - ✅ `mortgage_type` (correct)
     - ❌ `Mortgage Type` (wrong)
     - ❌ `mortgage-type` (wrong)
   - Check each property's internal name in HubSpot
   - Must use underscores, lowercase

3. **Dropdown values don't match**
   - For `mortgage_type`, values must be:
     - `remortgage`, `first-home`, `self-employed`, `moving-home`
   - NOT "Remortgage", "First Home", etc.

---

### Issue: API authentication error (401)

**Symptoms:** "Unauthorized" or 401 error

**Possible causes:**

1. **Access token not set**
   - Check `.env.local` file exists
   - Check `HUBSPOT_ACCESS_TOKEN` is set
   - Restart dev server after changing `.env.local`

2. **Invalid access token**
   - Token may have been revoked
   - Go to Settings → Integrations → Private Apps
   - Regenerate token if needed

3. **Insufficient permissions**
   - Go to your Private App settings
   - Verify BOTH scopes are enabled:
     - `crm.objects.contacts.read`
     - `crm.objects.contacts.write`

---

### Issue: Form submits but no redirect to thank you page

**Symptoms:** Form submits successfully but stays on current page

**Possible causes:**

1. **JavaScript error in browser console**
   - Open browser DevTools (F12)
   - Check Console tab for errors
   - Fix any JavaScript errors shown

2. **Thank you page doesn't exist**
   - Navigate to `http://localhost:3000/thank-you`
   - Should show success page
   - If 404, check file exists: `src/app/thank-you/page.tsx`

---

### Issue: UTM parameters not captured

**Symptoms:** UTM fields are empty in HubSpot

**Possible causes:**

1. **UTM parameters not in URL**
   - URL must include UTM params: `?utm_source=google&utm_campaign=test`
   - Parameters persist for 30 days in localStorage

2. **UTM properties not created in HubSpot**
   - Verify `utm_source`, `utm_medium`, `utm_campaign` properties exist
   - Check internal names are correct (lowercase, underscore)

---

## Step 7: Production Deployment

### 7.1 Set Environment Variables in Production

When deploying to production (Vercel, Netlify, etc.):

1. Go to your hosting platform's dashboard
2. Navigate to **Environment Variables** settings
3. Add:
   ```
   HUBSPOT_ACCESS_TOKEN=pat-na2-your-token-here
   HUBSPOT_PORTAL_ID=your-portal-id-here
   ```
4. Redeploy your application

### 7.2 Test in Production

1. Submit a form on your live website
2. Verify contact created in HubSpot
3. Check all custom properties populated
4. Test with UTM parameters from real ad campaigns

---

## Step 8: Monitoring and Maintenance

### 8.1 Failed Submission Recovery

If HubSpot API is down or fails after 3 retries, submissions are stored locally in the browser:

**To recover failed submissions:**

1. Open browser DevTools (F12)
2. Go to **Application** → **Local Storage**
3. Look for key: `remigo_failed_submissions`
4. Copy the JSON data
5. Manually create contacts in HubSpot from this data

**Server logs:**

Check your server logs for:
```
=== FAILED LEAD SUBMISSION ===
```

These logs show submissions that failed after all retries.

### 8.2 Monitor HubSpot API Limits

**HubSpot Free Plan Limits:**
- 250 API calls per day
- 100 requests per 10 seconds

**If you exceed limits:**
- Consider upgrading to paid plan
- Optimize API calls (already implemented: create/update in single call)

### 8.3 Regular Checks

**Weekly:**
- Review new contacts in HubSpot
- Verify all custom properties populated correctly
- Check UTM tracking is working

**Monthly:**
- Review failed submission logs
- Monitor API usage in HubSpot settings
- Update property dropdown values if needed (e.g., new mortgage types)

---

## Appendix: Complete Property Reference

Quick reference table of all 10 custom properties:

| # | Label | Internal Name | Type | Values |
|---|-------|---------------|------|--------|
| 1 | Mortgage Type | `mortgage_type` | Dropdown | remortgage, first-home, self-employed, moving-home |
| 2 | Timeline | `timeline` | Dropdown | asap, 1-3-months, 3-6-months, exploring |
| 3 | Property Value | `property_value` | Text | - |
| 4 | Source URL | `source_url` | Text | - |
| 5 | UTM Source | `utm_source` | Text | - |
| 6 | UTM Medium | `utm_medium` | Text | - |
| 7 | UTM Campaign | `utm_campaign` | Text | - |
| 8 | UTM Content | `utm_content` | Text | - |
| 9 | GCLID | `gclid` | Text | - |
| 10 | Device Type | `device_type` | Dropdown | mobile, tablet, desktop |

---

## Support

If you encounter issues not covered in this guide:

1. Check HubSpot API documentation: https://developers.hubspot.com/docs/api/crm/contacts
2. Review server logs for detailed error messages
3. Check browser console for client-side errors
4. Verify all environment variables are set correctly

---

**Document Version:** 1.0
**Last Updated:** March 26, 2026
**Integration Status:** ✅ Complete and tested
