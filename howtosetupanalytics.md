# Analytics & Tracking Setup Guide

Complete step-by-step guide to set up Google Tag Manager, Google Analytics 4, Google Ads conversion tracking, and Meta Pixel for the Remigo website.

---

## Overview

This guide will help you implement:
1. **Google Tag Manager (GTM)** - Central tag management
2. **Google Analytics 4 (GA4)** - Page views and custom events
3. **Google Ads Conversion Tracking** - Track form submissions as conversions
4. **Meta Pixel** - Facebook/Instagram ad tracking

---

## Part 1: Google Tag Manager Setup

### Step 1.1: Create GTM Account & Container

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Click **"Create Account"**
3. **Account Setup:**
   - Account Name: `Remigo`
   - Country: `United Kingdom`
4. **Container Setup:**
   - Container Name: `Remigo Website`
   - Target platform: **Web**
5. Click **"Create"**
6. Accept Terms of Service

### Step 1.2: Get Your GTM Container ID

1. After creation, you'll see your GTM Container ID (format: `GTM-XXXXXXX`)
2. **Copy this ID** - you'll need it for the website

### Step 1.3: Add GTM ID to Environment Variables

1. Open `/Users/sandeshshrestha/Desktop/Milktree/Ramigo/.env.local`
2. Replace `GTM-XXXXXXX` with your actual GTM ID:
   ```bash
   NEXT_PUBLIC_GTM_ID=GTM-ABC1234
   ```
3. **Restart your dev server:**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

### Step 1.4: Verify GTM Installation

1. Open your website: `http://localhost:3000`
2. Open browser DevTools (F12)
3. Go to **Console** tab
4. You should see `dataLayer` initialized
5. Type `dataLayer` in console - should show an array

✅ **GTM is now installed!**

---

## Part 2: Google Analytics 4 (GA4) Setup

### Step 2.1: Create GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **Admin** (gear icon, bottom left)
3. Click **"Create Property"**
4. **Property Setup:**
   - Property name: `Remigo Website`
   - Reporting time zone: `United Kingdom`
   - Currency: `Pound Sterling (£)`
5. Click **"Next"**
6. **Business Details:**
   - Industry: `Finance`
   - Business size: Select your size
7. Click **"Next"**
8. Select objectives (choose relevant ones)
9. Click **"Create"**
10. Accept Terms of Service

### Step 2.2: Get Your GA4 Measurement ID

1. In GA4, go to **Admin** → **Data Streams**
2. Click **"Add stream"** → **Web**
3. **Stream Setup:**
   - Website URL: `https://remigo.co.uk` (use your actual domain)
   - Stream name: `Remigo Website`
4. Click **"Create stream"**
5. **Copy your Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 2.3: Add GA4 Tag in GTM

1. Go back to [tagmanager.google.com](https://tagmanager.google.com)
2. Click **"Tags"** → **"New"**
3. **Tag Configuration:**
   - Click tag configuration area
   - Choose **"Google Analytics: GA4 Configuration"**
   - **Measurement ID:** Paste your `G-XXXXXXXXXX` ID
4. **Triggering:**
   - Click triggering area
   - Choose **"All Pages"**
5. **Name the tag:** `GA4 - Configuration`
6. Click **"Save"**

### Step 2.4: Create GA4 Custom Events

Now we'll create tags for each custom event.

#### Event 1: Form Open

1. **Tags** → **New**
2. **Tag Configuration:**
   - Type: **Google Analytics: GA4 Event**
   - Configuration Tag: `GA4 - Configuration`
   - Event Name: `form_open`
   - **Event Parameters:** Add these:
     - Parameter Name: `source_page` | Value: `{{Page Path}}`
     - Parameter Name: `mortgage_type` | Value: `{{DLV - mortgage_type}}`
3. **Triggering:**
   - **Triggers** → **New**
   - Trigger Type: **Custom Event**
   - Event name: `form_open`
   - Name: `CE - Form Open`
   - Save trigger
4. **Name tag:** `GA4 - Event - Form Open`
5. **Save**

#### Event 2: Form Step Complete

1. **Tags** → **New**
2. **Tag Configuration:**
   - Type: **Google Analytics: GA4 Event**
   - Configuration Tag: `GA4 - Configuration`
   - Event Name: `form_step_complete`
   - **Event Parameters:**
     - `step_number` | `{{DLV - step_number}}`
     - `step_name` | `{{DLV - step_name}}`
     - `mortgage_type` | `{{DLV - mortgage_type}}`
3. **Triggering:**
   - **New Trigger**
   - Type: **Custom Event**
   - Event name: `form_step_complete`
   - Name: `CE - Form Step Complete`
4. **Name tag:** `GA4 - Event - Form Step Complete`
5. **Save**

#### Event 3: Form Submit (Conversion)

1. **Tags** → **New**
2. **Tag Configuration:**
   - Type: **Google Analytics: GA4 Event**
   - Configuration Tag: `GA4 - Configuration`
   - Event Name: `form_submit`
   - **Mark as conversion:** ✅ Check this box
   - **Event Parameters:**
     - `mortgage_type` | `{{DLV - mortgage_type}}`
     - `timeline` | `{{DLV - timeline}}`
     - `property_value` | `{{DLV - property_value}}`
3. **Triggering:**
   - **New Trigger**
   - Type: **Custom Event**
   - Event name: `form_submit`
   - Name: `CE - Form Submit`
4. **Name tag:** `GA4 - Event - Form Submit`
5. **Save**

#### Event 4: Phone Click

1. **Tags** → **New**
2. **Tag Configuration:**
   - Type: **Google Analytics: GA4 Event**
   - Configuration Tag: `GA4 - Configuration`
   - Event Name: `phone_click`
   - **Event Parameters:**
     - `click_location` | `{{DLV - click_location}}`
3. **Triggering:**
   - **New Trigger**
   - Type: **Custom Event**
   - Event name: `phone_click`
   - Name: `CE - Phone Click`
4. **Name tag:** `GA4 - Event - Phone Click`
5. **Save**

#### Event 5: CTA Click

1. **Tags** → **New**
2. **Tag Configuration:**
   - Type: **Google Analytics: GA4 Event**
   - Configuration Tag: `GA4 - Configuration`
   - Event Name: `cta_click`
   - **Event Parameters:**
     - `button_location` | `{{DLV - button_location}}`
     - `button_text` | `{{DLV - button_text}}`
3. **Triggering:**
   - **New Trigger**
   - Type: **Custom Event**
   - Event name: `cta_click`
   - Name: `CE - CTA Click`
4. **Name tag:** `GA4 - Event - CTA Click`
5. **Save**

### Step 2.5: Create Data Layer Variables (DLV)

These variables capture event data from the dataLayer.

For each variable below, go to **Variables** → **User-Defined Variables** → **New**:

| Variable Name | Type | Data Layer Variable Name |
|---------------|------|-------------------------|
| DLV - mortgage_type | Data Layer Variable | `mortgage_type` |
| DLV - timeline | Data Layer Variable | `timeline` |
| DLV - property_value | Data Layer Variable | `property_value` |
| DLV - step_number | Data Layer Variable | `step_number` |
| DLV - step_name | Data Layer Variable | `step_name` |
| DLV - click_location | Data Layer Variable | `click_location` |
| DLV - button_location | Data Layer Variable | `button_location` |
| DLV - button_text | Data Layer Variable | `button_text` |

**To create each one:**
1. Click **"New"**
2. Variable Type: **Data Layer Variable**
3. Data Layer Variable Name: (from table above)
4. Name: (from table above)
5. **Save**

---

## Part 3: Google Ads Conversion Tracking

### Step 3.1: Create Conversion Action in Google Ads

1. Log in to [ads.google.com](https://ads.google.com)
2. Click **Tools & Settings** (wrench icon)
3. Go to **Measurement** → **Conversions**
4. Click **"+ New conversion action"**
5. Choose **Website**
6. **Conversion Goal:**
   - Category: **Submit lead form**
   - Goal name: `Mortgage Lead Form Submission`
   - Value: Select **"Use the same value for each conversion"**
   - Value amount: `10` (or your estimated lead value)
   - Count: **One** (count each conversion once)
7. **Conversion window:**
   - Click-through: `30 days`
   - View-through: `1 day`
8. Click **"Create and continue"**
9. **Tag Setup:** Choose **"Use Google Tag Manager"**
10. **Copy the Conversion ID and Label**
    - Format: `AW-123456789/AbC-DefGhIjKlMnO`
    - Save these for next step

### Step 3.2: Add Google Ads Conversion Tag in GTM

1. Go to GTM → **Tags** → **New**
2. **Tag Configuration:**
   - Type: **Google Ads Conversion Tracking**
   - **Conversion ID:** `123456789` (numbers after AW-)
   - **Conversion Label:** `AbC-DefGhIjKlMnO` (part after /)
   - Transaction ID: `{{DLV - transaction_id}}`
   - Conversion Value: `10`
   - Currency Code: `GBP`
3. **Triggering:**
   - Use existing: `CE - Form Submit`
4. **Name:** `Google Ads - Conversion - Form Submit`
5. **Save**

### Step 3.3: Set Up Enhanced Conversions

Enhanced conversions send hashed user data (email, phone) to improve accuracy.

1. In the same Google Ads Conversion tag
2. Check **"Enable enhanced conversions"**
3. **User-Provided Data:**
   - Add variables for email and phone (we'll create these)

**Create Enhanced Conversion Variables:**

1. **Variables** → **User-Defined Variables** → **New**
2. Variable Name: `DLV - email`
3. Type: **Data Layer Variable**
4. Data Layer Variable Name: `email`
5. Save

Repeat for `DLV - phone_number` (Data Layer Variable: `phone_number`)

Now add to your conversion tag:
- Email: `{{DLV - email}}`
- Phone: `{{DLV - phone_number}}`

---

## Part 4: Meta Pixel (Facebook/Instagram Ads)

### Step 4.1: Create Meta Pixel

1. Go to [business.facebook.com](https://business.facebook.com)
2. Go to **Events Manager**
3. Click **"Connect Data Sources"** → **Web** → **Meta Pixel**
4. **Name your pixel:** `Remigo Website`
5. **Optional:** Enter your website URL
6. Click **"Create Pixel"**
7. **Copy your Pixel ID** (a 15-16 digit number)

### Step 4.2: Add Meta Pixel Base Code in GTM

1. GTM → **Tags** → **New**
2. **Tag Configuration:**
   - Type: **Custom HTML**
   - Paste this code (replace `YOUR_PIXEL_ID`):
   ```html
   <script>
   !function(f,b,e,v,n,t,s)
   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
   n.queue=[];t=b.createElement(e);t.async=!0;
   t.src=v;s=b.getElementsByTagName(e)[0];
   s.parentNode.insertBefore(t,s)}(window, document,'script',
   'https://connect.facebook.net/en_US/fbevents.js');
   fbq('init', 'YOUR_PIXEL_ID');
   fbq('track', 'PageView');
   </script>
   ```
3. **Triggering:** `All Pages`
4. **Name:** `Meta Pixel - Base Code`
5. **Save**

### Step 4.3: Add Meta Lead Event

1. **Tags** → **New**
2. **Tag Configuration:**
   - Type: **Custom HTML**
   - Code:
   ```html
   <script>
   fbq('track', 'Lead', {
     content_name: {{DLV - mortgage_type}},
     content_category: 'mortgage_enquiry',
     value: 1.0,
     currency: 'GBP'
   });
   </script>
   ```
3. **Triggering:** Use `CE - Form Submit`
4. **Name:** `Meta Pixel - Lead Event`
5. **Save**

---

## Part 5: Publish & Test

### Step 5.1: Preview Mode in GTM

1. In GTM, click **"Preview"** (top right)
2. Enter your website URL: `http://localhost:3000`
3. Click **"Connect"**
4. Your website will open with GTM debugger attached

### Step 5.2: Test Events

**Test Form Submission Flow:**

1. On your website, click a CTA to open the form
2. In GTM Preview, you should see:
   - ✅ `form_open` event fired
3. Fill out each step and check:
   - ✅ `form_step_complete` fired for each step
4. Submit the form:
   - ✅ `form_submit` event fired
   - ✅ Google Ads conversion tag fired
   - ✅ Meta Lead event fired
5. Go to thank you page, click phone number:
   - ✅ `phone_click` event fired

### Step 5.3: Verify in GA4 Real-Time

1. Go to GA4 → **Reports** → **Realtime**
2. You should see:
   - Active users
   - Event count by Event name
   - All your custom events appearing

### Step 5.4: Publish GTM Container

1. Click **"Submit"** (top right in GTM)
2. **Version Name:** `Initial Setup - GA4, Google Ads, Meta Pixel`
3. **Version Description:** `Set up all tracking tags and events`
4. Click **"Publish"**

✅ **All tracking is now live!**

---

## Part 6: Production Deployment

### Step 6.1: Deploy to Production

Your GTM container is the same for development and production. The GTM ID in your `.env.local` will work in production too.

**For Vercel/Netlify:**
1. Add environment variable in your hosting platform:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-ABC1234
   ```
2. Redeploy your site

### Step 6.2: Test on Production

1. Visit your live site
2. Use GTM Preview mode on production URL
3. Verify all events fire correctly
4. Check GA4 Realtime reports
5. Submit a test form and verify conversion in Google Ads (may take a few hours to show)

---

## Part 7: Monitoring & Optimization

### Daily Checks

**GA4 Dashboard:**
- Go to **Reports** → **Realtime** → Check active users and events
- Go to **Reports** → **Engagement** → **Events** → Review event counts

**Google Ads:**
- Go to **Campaigns** → Check conversion data
- **Tools** → **Conversions** → Verify conversions are tracking

**Meta Events Manager:**
- Check **Events** tab for Pixel activity
- Verify **Lead** events are firing

### Weekly Reviews

1. **GA4 Analysis:**
   - Which mortgage types get most interest?
   - What's the form completion rate by step?
   - Which UTM sources drive most conversions?

2. **Google Ads Performance:**
   - Cost per conversion
   - Conversion rate by campaign
   - Adjust bids based on performance

3. **Meta Ads Performance:**
   - Lead event cost
   - Compare Facebook vs Instagram performance

---

## Troubleshooting

### GTM Not Loading

**Symptoms:** No dataLayer in console, tags not firing

**Solutions:**
1. Check `.env.local` has correct `NEXT_PUBLIC_GTM_ID`
2. Restart dev server after changing env variables
3. Clear browser cache and hard reload (Cmd+Shift+R / Ctrl+Shift+R)
4. Verify GTM container is published

---

### Events Not Firing

**Symptoms:** Events don't appear in GTM Preview or GA4

**Solutions:**
1. Open browser console, check for JavaScript errors
2. Type `dataLayer` in console - should show events
3. In GTM Preview, check if trigger conditions are met
4. Verify custom event names match exactly (case-sensitive)
5. Check Data Layer Variables are configured correctly

---

### GA4 Events Not Showing

**Symptoms:** Events fire in GTM but don't appear in GA4

**Solutions:**
1. Wait 24-48 hours for data to appear (real-time should show immediately though)
2. Check GA4 Measurement ID is correct in GTM tag
3. Verify GA4 Configuration tag fires on All Pages
4. In GA4 → **Admin** → **Data Streams** → Click your stream → Check "Enhanced measurement" is ON

---

### Google Ads Conversions Not Tracking

**Symptoms:** Form submits but no conversions in Google Ads

**Solutions:**
1. Verify Conversion ID and Label are correct
2. Check conversion tag fires in GTM Preview when form submits
3. In Google Ads → **Tools** → **Conversions** → Check conversion status is "Active"
4. Conversions can take 3-24 hours to appear in reporting
5. Use Google Ads Tag Assistant Chrome extension to debug

---

### Meta Pixel Issues

**Symptoms:** Pixel not firing or events not tracked

**Solutions:**
1. Install Meta Pixel Helper Chrome extension
2. Check if Pixel Base Code fires on all pages
3. Verify Pixel ID is correct (15-16 digits)
4. In Meta Events Manager → **Test Events** → Enter your website URL → Test manually
5. Check browser console for `fbq` errors

---

## Appendix: Event Reference

### All Events Tracked

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `form_open` | Modal opens | source_page, mortgage_type |
| `form_step_complete` | Each step completed | step_number, step_name, mortgage_type, timeline, property_value |
| `form_submit` | Form submitted | mortgage_type, timeline, property_value, source_page |
| `phone_click` | Phone number clicked | click_location |
| `cta_click` | CTA button clicked | button_location, button_text |

### Custom Dimensions to Create in GA4

For better reporting, create these custom dimensions in GA4:

1. **Admin** → **Custom Definitions** → **Custom Dimensions** → **Create custom dimension**

| Dimension Name | Scope | Event Parameter |
|----------------|-------|----------------|
| Mortgage Type | Event | mortgage_type |
| Timeline | Event | timeline |
| Property Value | Event | property_value |
| Form Step | Event | step_name |
| Source Page | Event | source_page |

---

## Support Resources

- **GTM Help:** https://support.google.com/tagmanager
- **GA4 Help:** https://support.google.com/analytics
- **Google Ads Help:** https://support.google.com/google-ads
- **Meta Business Help:** https://www.facebook.com/business/help

---

**Document Version:** 1.0
**Last Updated:** March 26, 2026
**Integration Status:** ✅ Complete and ready to implement
