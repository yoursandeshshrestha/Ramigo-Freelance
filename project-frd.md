REMIGO — Project Overview & Execution Plan
The Brand
Remigo (remortgage + amigo) positions as a friendly, modern, fintech-style mortgage platform. The name implies "your mate in the remortgage process" without being cheesy. It's short, memorable, pronounceable, and works as both a consumer-facing brand and a lead resale platform later. The tone should feel like Monzo meets mortgage advice — trustworthy but not stuffy, digital-first but human when it counts.
What You're Actually Building
Strip away the deliverables list and this project has three distinct workstreams that need to happen in sequence. Here's how I'd approach it:

PHASE 1 — Foundation (Week 1)
This is where most agencies rush and most projects go wrong. Spend the first week getting the groundwork right before touching any design tools.
Start with the onboarding session with Kris. You need his FCA registration details (number, network, appointed rep or DA status), his exact service offering across each product line, his geographic focus if any, his current client profile for each segment, and what his follow-up process looks like today. Record the call.
Simultaneously, do the domain registration. Lock down remigo.co.uk and remigo.com if available. If .com is taken, check remigo.uk as a backup. Register immediately — don't wait.
Run your keyword research across all four audience segments: remortgage, first-time buyer, self-employed mortgage, and protection. Map out the top 50–100 keywords per segment, group them by intent level, and identify the long-tail terms where you can win quickly with lower CPCs. This research shapes everything — the site architecture, the landing page copy, the ad campaign structure, and the SEO content plan. Do it properly now and you won't have to redo it later.
Build out the brand identity. For a fintech feel, think: clean sans-serif typeface (something with character like the Bricolage Grotesque or Satoshi families, not generic Inter), a dark primary palette with a single accent colour that pops, generous whitespace, and a mark/wordmark that works at every scale from favicon to billboard. The brand needs to feel premium enough that a consumer trusts it with their financial details within 5 seconds of landing, but approachable enough that a first-time buyer doesn't feel intimidated.

PHASE 2 — Build (Weeks 2–3)
Now you execute. Three things happening in parallel:
The website. Build this as a performance-first site — fast load, mobile-optimised, minimal JavaScript bloat. The architecture should be:
Homepage — broad proposition, trust signals, single CTA into the form. This is what brand/direct traffic hits.
Remortgage landing page — standalone page with remortgage-specific copy, pain points (deal expiring, SVR trap, equity release), tailored form. This is what Google Ads remortgage traffic hits.
First-time buyer landing page — different tone, more educational, addresses fear and confusion, simpler form. Google Ads and Meta traffic.
Self-employed landing page — speaks directly to contractors, freelancers, directors. Addresses the "banks don't understand my income" frustration. Google Ads.
Protection landing page — life cover, critical illness, income protection. More emotional messaging. Primarily Meta traffic.
Each landing page gets its own multi-step form (like the one we already built) tailored to that audience. The forms should feel like a conversation, not a data capture exercise. Progressive qualification — ask the easy questions first, personal details last.
Every page needs: FCA disclaimer in the footer, Trustpilot widget (set up the profile now even with zero reviews), clear "how it works" steps, and a phone number visible at all times for people who'd rather just call.
The CRM. Set this up in parallel with the site build. I'd recommend GoHighLevel or HubSpot depending on Kris's budget tolerance for CRM costs. The CRM needs:
Lead capture forms integrated with the website (each form tagged by source and audience segment). Instant notification to Kris's phone when a lead comes in — speed to call is everything. Automated email sequence per segment (3–5 emails over 14 days for leads that don't pick up or aren't ready yet). SMS follow-up automation (initial confirmation text, then a check-in at 48 hours if no contact made). Pipeline view so Kris can see leads by stage: new, contacted, qualified, application submitted, completed. Basic reporting dashboard showing leads in, leads contacted, conversion rate.
The ad accounts. Set up Google Ads and Meta Ads under Kris's business ownership with your management access. Build the campaign structure but don't launch yet:
Google Ads — one campaign per audience segment, ad groups organised by keyword theme, 3–4 ad variations per group, all pointing to the relevant landing page. Set up conversion tracking, call tracking, and Google Tag Manager before anything goes live.
Meta Ads — campaign structure by objective (lead generation), ad sets by audience (life events, demographics, interests per segment), 2–3 creative variations per ad set. Install the Meta pixel on the site and set up custom conversion events.

PHASE 3 — Launch & Optimise (Week 4 onward)
Everything goes live. But launch is not "set and forget" — it's the start of the optimisation cycle.
Week 4: Launch all campaigns at conservative budgets. Monitor daily. Focus on data collection, not results. You're looking for which keywords trigger, which ads get clicks, which form steps have drop-off.
Weeks 5–6: First optimisation pass. Pause underperforming keywords, adjust bids, add negative keywords based on search term reports. On Meta, kill the lowest-performing creative and test new variations. On the site, check form completion rates — if there's a big drop-off at a specific step, fix it.
Weeks 7–8: Second optimisation pass. You should have enough conversion data now to see patterns. Shift budget toward the best-performing campaigns and audiences. Start A/B testing landing page headlines and CTA copy. Refine the CRM nurture sequences based on which emails get opens and which get ignored.
Month 3 onward: This is where the flywheel starts turning. SEO content should start being published — blog posts targeting long-tail keywords that drive organic traffic. The paid campaigns are refined enough to be generating leads at a predictable cost. The CRM data tells you which lead sources convert best. You start making the case to Kris for scaling budget toward what works.

Key Principles to Hold Yourself To
Speed to launch matters more than perfection at launch. Get a good site live in 3 weeks rather than a perfect site live in 8 weeks. You can iterate everything once data is flowing.
Every design decision should serve conversion. If something looks pretty but doesn't help a visitor become a lead, cut it. This isn't a portfolio piece — it's a machine.
Track everything from day one. UTM parameters on every ad link, conversion events on every form submission, call tracking on every phone number. If you can't measure it, you can't improve it.
The CRM is as important as the website. A lead that comes in and doesn't get called within 10 minutes is a wasted lead. Build the automation to make sure that never happens.
Write all copy as if you're talking to someone who's slightly stressed about money. Because they are. Clear, reassuring, no jargon, no pressure. The tone should make them feel like they've found someone who'll just sort it for them — which is exactly what Remigo means.


REMIGO — PRODUCT REQUIREMENTS DOCUMENT
========================================

Version: 1.0
Date: March 2026
Author: Levi Eweka, Simple Web Solutions Limited
Status: Ready for development

This document is the single source of truth for the Remigo website build. Everything the developer needs to build, test, and launch is in here. If it's not in this document, it's not in scope.

Framework: Next.js (for SSR/SSG, SEO performance, and structured data support).
Everything else — hosting, CMS, styling, component libraries — is at the developer's discretion.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TABLE OF CONTENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Project Overview
2. Site Architecture
3. Global Components
4. Homepage
5. Service Landing Pages (Organic/SEO)
6. Ad Landing Pages (Paid Traffic)
7. Multi-Step Lead Capture Form
8. Thank You / Confirmation Flow
9. About Page
10. Blog / Content Hub
11. Contact Page
12. Legal Pages
13. CRM Integration
14. Analytics & Tracking
15. SEO Requirements
16. Performance Requirements
17. Accessibility
18. Responsive Behaviour
19. Acceptance Criteria


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. PROJECT OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remigo is a consumer-facing lead generation website for a UK mortgage and protection broker. The site exists to do one thing: convert visitors into qualified leads.

Every design decision, page structure, and interaction should be evaluated against that single objective. If it doesn't help a visitor become a lead, it doesn't belong on the site.

The site serves two types of traffic:

1. Organic / direct traffic — people who find Remigo through Google search, social media, or direct URL. These visitors land on the full website pages (homepage, service pages, blog).

2. Paid ad traffic — people who click a Google Ad or Meta (Facebook/Instagram) ad. These visitors land on stripped-down, high-conversion landing pages that are separate from the main site navigation.

Both traffic types must end up in the same lead capture form and the same CRM.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. SITE ARCHITECTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MAIN SITE PAGES (with navigation):

/                           Homepage
/remortgage                 Remortgage service page
/first-time-buyer           First-time buyer service page
/self-employed-mortgage     Self-employed mortgage service page
/protection                 Protection & insurance service page
/about                      About Remigo / meet the team
/blog                       Blog listing page
/blog/[slug]                Individual blog post
/contact                    Contact page
/privacy-policy             Privacy policy
/terms                      Terms of use
/cookie-policy              Cookie policy
/complaints                 Complaints procedure

AD LANDING PAGES (no main navigation):

/get/remortgage             Remortgage ad landing page
/get/first-time-buyer       First-time buyer ad landing page
/get/self-employed          Self-employed ad landing page
/get/protection             Protection ad landing page

UTILITY:

/thank-you                  Post-submission confirmation page
/sitemap.xml                Auto-generated XML sitemap
/robots.txt                 Robots file


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. GLOBAL COMPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HEADER (main site pages only):
- Remigo logo (mark + wordmark) — links to homepage
- Navigation links: Remortgage, First-Time Buyer, Self-Employed, Protection, About
- Phone number — click-to-call on mobile, displayed as text on desktop
- Primary CTA button: "Get your free quote" — opens the multi-step form modal
- Sticky on scroll (becomes compact after scrolling past the hero)
- Mobile: hamburger menu with slide-out drawer

FOOTER (all pages):
- Remigo logo
- Navigation links (same as header)
- Contact: phone number, email address
- Social links: Facebook, Instagram, LinkedIn
- Legal links: Privacy Policy, Terms, Cookie Policy, Complaints
- FCA disclaimer paragraph: "Remigo is a trading name of [Legal Entity]. Authorised and regulated by the Financial Conduct Authority. FCA registration number: [XXXXXX]. Your home may be repossessed if you do not keep up repayments on your mortgage."
- Company registration: "[Legal Entity], registered in England and Wales. Company number: [XXXXXXXX]. Registered office: [Address]."
- Copyright line

COOKIE CONSENT BANNER:
- GDPR-compliant cookie consent banner
- Must load before any analytics or tracking scripts fire
- Options: Accept All, Reject Non-Essential, Manage Preferences
- Cookie preferences must be stored and respected
- Analytics and Meta pixel must not fire until consent is given

FORM MODAL:
- The multi-step lead capture form (detailed in section 7) opens as a full-screen modal overlay
- Can be triggered from any CTA button on any page
- The form must accept a URL parameter to pre-select the mortgage type (e.g. if triggered from the remortgage page, step 1 should have "Remortgage" pre-selected)
- Close button always visible — clicking outside the modal also closes it
- Form state persists if the modal is closed and reopened during the same session


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. HOMEPAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

URL: /
Purpose: Broad entry point for brand/direct traffic. Establishes trust and drives visitors into the form.

HERO SECTION:
- Headline (H1): Primary value proposition — short, benefit-led, no jargon
- Subheadline: One or two sentences expanding on the headline — what Remigo does and who it's for
- Primary CTA button: "Get your free quote →" — opens form modal
- Supporting text below CTA: "Takes 60 seconds · No credit check"
- Trust signals near the CTA: FCA regulated badge, Trustpilot rating, number of lenders
- The hero layout should be asymmetric — headline and CTA on the left, trust/stat elements on the right

HOW IT WORKS SECTION:
- 3 or 4 steps explaining the process
- Step 1: Answer a few quick questions (60 seconds)
- Step 2: We compare deals from 90+ lenders
- Step 3: A mortgage expert calls you within the hour
- Step 4: We handle everything through to completion
- Each step gets a number, a short title, and one line of description
- Secondary CTA at the bottom of this section

SERVICE CARDS SECTION:
- Four cards linking to each service page: Remortgage, First-Time Buyer, Self-Employed, Protection
- Each card: icon/visual, headline, one sentence description, link arrow
- Clicking a card goes to the relevant service page

SOCIAL PROOF SECTION:
- Trustpilot review widget or manually placed testimonials (minimum 3)
- Client testimonials with name, location, and service type
- If Trustpilot isn't set up yet, build the section with placeholder content that's easy to swap in later

STATS BAR:
- Key numbers displayed prominently: number of lenders, clients helped, Trustpilot rating, broker fee (£0)
- These should be visually distinct — large numbers with small labels

FAQ SECTION:
- 6–8 frequently asked questions with expandable answers
- Questions should target common search queries for SEO value
- Examples: "How long does remortgaging take?", "Do I need a deposit as a first-time buyer?", "Can I get a mortgage if I'm self-employed?"
- Implement as structured data (FAQ schema) for rich snippet eligibility

FINAL CTA SECTION:
- Full-width section with a strong closing headline and CTA button
- Repeat the primary CTA: "Get your free quote →"


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. SERVICE LANDING PAGES (ORGANIC / SEO)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are four service pages. Each follows the same structure but with content tailored to the specific audience. These pages live within the main site navigation and are designed to rank organically for relevant search terms.

STRUCTURE (applies to all four):

HERO:
- H1 headline specific to the service (e.g. "Remortgage to a better deal" or "First-time buyer? Let's get you on the ladder")
- 2–3 sentences of supporting copy addressing the audience's specific pain point
- Primary CTA: "Get your free quote →" — opens form modal with the relevant mortgage type pre-selected
- Trust signals: FCA regulated, number of lenders, £0 fees

THE PROBLEM:
- A section that acknowledges what the visitor is dealing with
- Written in second person ("you") — empathetic, not salesy
- For remortgage: "Your fixed rate's ending and you're about to land on the SVR..."
- For first-time buyer: "You've saved the deposit but the process feels overwhelming..."
- For self-employed: "You've been told your income is 'too complicated'..."
- For protection: "You know you should have cover but you've been putting it off..."

HOW WE HELP:
- 3–4 specific points about how Remigo helps this particular audience
- Each point: bold headline + one sentence explanation
- Specific to the service — not generic "we compare deals" copy

THE PROCESS:
- Same how-it-works steps as the homepage but with service-specific language
- CTA after the steps

ELIGIBILITY / REQUIREMENTS:
- What does the visitor need to qualify?
- Remortgage: minimum equity, remaining term considerations
- First-time buyer: deposit requirements, income requirements
- Self-employed: years of accounts, SA302s, company accounts
- Protection: health declarations, typical cover amounts
- Written as helpful guidance, not gatekeeping

FAQ:
- 6–8 questions specific to that service
- Each page should have unique questions — no duplication across pages
- Implemented as FAQ schema

TESTIMONIALS:
- 2–3 testimonials specific to that service type if available
- If not available yet, build the component and we'll populate later

FINAL CTA:
- Full-width closing section with CTA

PAGE-SPECIFIC DETAILS:

/remortgage
- Target keywords: remortgage, remortgage advice, remortgage broker, switch mortgage deal, remortgage calculator
- Key messages: save money, avoid SVR, release equity, hassle-free switch
- Mention: early repayment charges, timing (typically 6 months before deal ends), product transfer vs remortgage

/first-time-buyer
- Target keywords: first-time buyer mortgage, first-time buyer advice, how much can I borrow, mortgage for first-time buyers
- Key messages: guidance through every step, jargon-free, deposit advice, agreement in principle
- Mention: Help to Buy legacy, shared ownership, 95% mortgages, stamp duty relief for FTBs

/self-employed-mortgage
- Target keywords: self-employed mortgage, contractor mortgage, freelancer mortgage, mortgage with one year accounts, limited company director mortgage
- Key messages: we understand non-standard income, specialist lenders, not all lenders are the same
- Mention: SA302, company accounts, day rate contracts, retained profits, multiple income streams

/protection
- Target keywords: life insurance, critical illness cover, income protection, mortgage protection
- Key messages: protect your family, affordable cover, tailored to your circumstances
- Mention: decreasing term vs level term, waiver of premium, family income benefit
- Note: protection pages should have a slightly different emotional tone — less transactional, more about peace of mind


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. AD LANDING PAGES (PAID TRAFFIC)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These are stripped-down, conversion-focused pages for visitors arriving from Google Ads and Meta Ads. They are completely separate from the main site.

KEY DIFFERENCES FROM MAIN SITE PAGES:
- NO main navigation header — only the Remigo logo and phone number
- NO links to other pages (except legal/privacy in the footer — required by Google Ads policy)
- NO distractions — every element exists to drive the visitor toward the form
- The ONLY action available is: fill in the form or call the phone number
- These pages must load extremely fast — they are the first thing an ad clicker sees

STRUCTURE (applies to all four ad landing pages):

ABOVE THE FOLD — everything needed to convert without scrolling:
- Remigo logo (small, top left)
- Phone number (top right, click-to-call)
- H1 headline — matches the ad copy as closely as possible (message match is critical for Google Ads quality score)
- 1–2 sentences of supporting copy — benefit-focused, addresses the specific pain
- Primary CTA button: "Get your free quote →" — opens form modal with type pre-selected
- Trust signals immediately visible: FCA regulated, Trustpilot, number of lenders, £0 fees

BELOW THE FOLD (for visitors who scroll before converting):
- 3 bullet points — "Why Remigo?" — short, sharp, benefit-led
- 2–3 testimonials relevant to that service type
- "How it works" in 3 steps — ultra-brief
- Second CTA button
- Minimal footer with required legal links and FCA disclaimer

PAGE-SPECIFIC:

/get/remortgage
- Headline variations to test: "Your fixed rate is ending — don't default to the SVR" / "Compare remortgage deals from 90+ lenders in 60 seconds" / "Remortgage and save — free, expert advice"
- Pain point: deal ending, SVR anxiety, wanting to save money
- Build at least 2 headline variants that can be swapped via URL parameter or A/B test

/get/first-time-buyer
- Headline variations: "Buying your first home? Let's find you the right mortgage" / "First-time buyer mortgage — compare 90+ lenders, free advice" / "Get on the ladder — expert mortgage advice in 60 seconds"
- Pain point: overwhelm, not knowing where to start, fear of rejection

/get/self-employed
- Headline variations: "Self-employed? Your mortgage shouldn't be complicated" / "Contractor, freelancer, or director — we speak your language" / "Self-employed mortgage advice — specialists, not generalists"
- Pain point: being told they're too complicated, previous rejections, frustration with standard lenders

/get/protection
- Headline variations: "Protect your family for less than you think" / "Life cover, critical illness, income protection — tailored to you" / "Mortgage protection — because your home is worth protecting"
- Pain point: procrastination, not knowing what they need, assuming it's expensive

IMPORTANT — A/B TESTING SUPPORT:
- The developer should build the ad landing pages so that the H1 headline can be swapped dynamically via a URL parameter (e.g. /get/remortgage?v=2)
- This allows us to test different headlines from the ad platform without redeploying code
- Minimum: support for 3 headline variants per page, controlled by query parameter


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. MULTI-STEP LEAD CAPTURE FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is the most important component on the entire site. It must feel like onboarding into a premium app — not filling in a form.

FORM BEHAVIOUR:
- Opens as a full-screen modal overlay with backdrop blur
- Progress bar at the top showing which step the user is on
- Step counter ("Step 1 of 4")
- Back button on steps 2–4
- Close button always visible
- Smooth slide transition between steps
- Pre-select mortgage type if triggered from a service page or ad landing page
- Form state persists within the session if the modal is closed and reopened

STEP 1 — MORTGAGE TYPE:
Field: Single select (card-style buttons, not a dropdown)
Options:
  - Remortgage — "Switch to a better deal"
  - First home — "Get on the ladder"
  - Self-employed — "We speak freelance"
  - Moving home — "Take your mortgage with you"
Behaviour: Selecting an option auto-advances to step 2 after a brief delay (200–300ms)
Pre-selection: If the form is opened from a service page or ad landing page, this step should have the relevant option pre-selected but still visible (so the user can change it if needed). Auto-advance should NOT happen on pre-selection — only on user click.

STEP 2 — TIMELINE:
Field: Single select (pill/grid buttons)
Options:
  - ASAP
  - 1–3 months
  - 3–6 months
  - Just exploring
Behaviour: Selecting an option auto-advances to step 3

STEP 3 — PROPERTY VALUE:
Field: Text input with £ prefix
Placeholder: "250,000"
Validation: Numbers only. Auto-format with commas as the user types (e.g. "250,000" not "250000")
Supporting text: "A rough estimate is fine — we'll confirm the details later"
Button: "Continue →" — enabled only when a value is entered
Behaviour: Button click advances to step 4

STEP 4 — CONTACT DETAILS:
Fields:
  - Full name (text, required)
  - Phone number (tel, required)
  - Email address (email, optional — label should say "Email (optional)")
Button: "Get my free quote →" — enabled only when name and phone are filled
Supporting text below button: "FCA regulated · £0 fees · We'll call within the hour"

ON SUBMISSION:
- Send all form data to the CRM via API (see section 13)
- Fire conversion tracking events (see section 14)
- Redirect to thank you page OR show inline confirmation (see section 8)
- If the API call fails, store the submission locally and retry — the lead must never be lost

DATA CAPTURED PER SUBMISSION:
- mortgage_type (remortgage / first-home / self-employed / moving-home)
- timeline (asap / 1-3-months / 3-6-months / exploring)
- property_value (string, as entered)
- full_name (string)
- phone (string)
- email (string, may be empty)
- source_url (the page URL the form was opened from)
- utm_source (from URL parameters)
- utm_medium (from URL parameters)
- utm_campaign (from URL parameters)
- utm_content (from URL parameters)
- utm_term (from URL parameters)
- gclid (Google click ID, from URL parameters)
- fbclid (Facebook click ID, from URL parameters)
- submission_timestamp (ISO 8601)
- device_type (mobile / tablet / desktop — derived from user agent)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. THANK YOU / CONFIRMATION FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After form submission, the user needs to know what happens next.

OPTION A — INLINE CONFIRMATION (preferred):
- The form modal content transitions to a confirmation screen
- Shows: checkmark animation, personalised message using their first name ("Nice one, [Name]"), clear next step ("One of our mortgage specialists will call you within the hour"), reassurance ("No pressure, no jargon — just straight answers")
- A "Close" button that returns them to the page

OPTION B — REDIRECT TO THANK YOU PAGE:
- URL: /thank-you
- Same confirmation content as above
- This page must fire the conversion tracking events if they haven't already been fired in the modal
- IMPORTANT: This page must NOT be indexable — add noindex meta tag and exclude from sitemap

Use Option A as the primary flow. Option B exists as a fallback and for tracking redundancy — some ad platforms track conversions more reliably on a unique thank-you page URL.

The developer should implement both and we'll configure which one to use per traffic source.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
9. ABOUT PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

URL: /about
Purpose: Build trust. Show there are real people behind Remigo.

CONTENT:
- Brief brand story: what Remigo is, why it exists, what makes it different
- Photo and short bio of Kris (and any other advisers)
- Qualifications and experience
- FCA registration details
- "Our approach" — how Remigo works differently from comparison sites and traditional brokers
- CTA at the bottom driving to the form


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10. BLOG / CONTENT HUB
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

URL: /blog and /blog/[slug]
Purpose: SEO content targeting long-tail keywords. Not needed at launch but the infrastructure must be built.

LISTING PAGE (/blog):
- Grid or list layout of blog posts
- Each post card: title, excerpt (2 lines max), date, category tag, featured image
- Category filtering (e.g. Remortgage, First-Time Buyers, Self-Employed, Protection, Guides)
- Pagination or infinite scroll

POST PAGE (/blog/[slug]):
- Full article content with proper heading hierarchy (H1 title, H2/H3 subheadings)
- Author name and date
- Category tag
- Table of contents for longer posts (auto-generated from headings)
- Related posts section at the bottom (3 posts from the same category)
- CTA banner within the article body (after approximately 40% of the content) and at the end
- Social sharing buttons (optional, low priority)
- Proper Open Graph and Twitter Card meta tags for social sharing

The blog should be manageable via a headless CMS or markdown files — whatever the developer prefers. We will be publishing content regularly so the workflow for adding new posts needs to be straightforward.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
11. CONTACT PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

URL: /contact
Purpose: Alternative contact method for people who don't want to use the form.

CONTENT:
- Phone number (click-to-call)
- Email address (mailto link)
- Office hours
- Simple contact form: name, email, phone, message, submit button
- This is NOT the lead capture form — it's a general enquiry form
- General enquiry submissions go to a separate CRM pipeline or email inbox
- Address (if applicable)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
12. LEGAL PAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Three legal pages required at launch:

/privacy-policy
- UK GDPR compliant privacy policy
- Must cover: what data we collect, how we use it, who we share it with, how long we keep it, user rights, cookie usage, third-party services (Google Analytics, Meta Pixel, CRM)
- Must reference the ICO registration number

/terms
- Terms of use for the website
- Standard web terms covering use of the site, intellectual property, limitation of liability, governing law

/cookie-policy
- List of all cookies used on the site with their purpose and duration
- Must align with the cookie consent banner categories

/complaints
- FCA-required complaints procedure
- How to complain, who to contact, escalation to the Financial Ombudsman Service
- Must include FOS contact details

These pages will be provided as content — the developer just needs to build the templates.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
13. CRM INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The website must send lead data to the CRM in real time on form submission.

REQUIREMENTS:
- All form fields listed in section 7 must be passed to the CRM
- The submission must include all UTM parameters and click IDs captured from the URL
- The submission must include the source URL (which page/landing page the form was opened from)
- The API call must happen server-side or via a secure endpoint — not a direct client-side POST to the CRM API with exposed credentials
- If the CRM API call fails, the submission must be queued and retried automatically — no lead should ever be lost
- A fallback email notification should fire if the CRM API fails after 3 retries, sending the lead data directly to a specified email address

The CRM platform and API details will be provided once confirmed. Build the integration as an abstracted service layer so we can swap the CRM provider without rewriting the form logic.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
14. ANALYTICS & TRACKING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GOOGLE TAG MANAGER:
- GTM container installed on all pages
- All tracking scripts loaded through GTM — nothing hardcoded into the site
- GTM must respect cookie consent — no tags fire until consent is given

GOOGLE ANALYTICS 4:
- GA4 property configured via GTM
- Page view tracking on all pages
- Custom events:
    form_open — fired when the lead capture form modal opens (with parameter: source_page)
    form_step_complete — fired on each step completion (with parameter: step_number, mortgage_type)
    form_submit — fired on successful form submission (with parameters: mortgage_type, timeline, source_page)
    phone_click — fired when the phone number is clicked
    cta_click — fired when any CTA button is clicked (with parameter: button_location)

GOOGLE ADS CONVERSION TRACKING:
- Google Ads conversion tag fired on form submission
- Enhanced conversions enabled — pass hashed email and phone number
- The conversion must fire on both the inline confirmation AND the /thank-you page (to catch both flows)
- Google Ads remarketing tag on all pages

META PIXEL:
- Meta (Facebook) pixel installed via GTM
- Standard events:
    PageView — all pages
    Lead — on form submission
    ViewContent — on service pages and ad landing pages
- Custom conversions can be set up later in Meta Business Manager based on URL rules

UTM PARAMETER CAPTURE:
- On page load, capture all UTM parameters (utm_source, utm_medium, utm_campaign, utm_content, utm_term) and click IDs (gclid, fbclid) from the URL
- Store them in session storage so they persist across page navigation
- Pass them with every form submission
- If a visitor arrives with UTMs, navigates to other pages, then fills in the form — the original UTMs must still be attached to the submission

CALL TRACKING (if implemented):
- If we're using a call tracking service, the phone number displayed on the site should be dynamically swapped based on the traffic source
- The developer should build the phone number as a component that can accept a dynamic value
- Implementation details will be provided if/when a call tracking provider is chosen


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
15. SEO REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TECHNICAL SEO:
- Server-side rendering or static generation for all main site pages (this is why we're using Next.js)
- Unique, descriptive title tags on every page (provided in content)
- Unique meta descriptions on every page (provided in content)
- Proper heading hierarchy — one H1 per page, H2s for sections, H3s for subsections
- Clean URL structure — no trailing slashes, no query parameters in canonical URLs
- Canonical tags on all pages
- XML sitemap at /sitemap.xml — auto-generated, excludes /thank-you and /get/* pages
- robots.txt allowing all main pages, blocking /get/* from organic indexing
- Ad landing pages (/get/*) must have: <meta name="robots" content="noindex, nofollow">
- Internal linking between service pages and relevant blog posts
- 301 redirects configured if any URLs change post-launch
- Custom 404 page with navigation and a CTA

STRUCTURED DATA (JSON-LD):
- Organization schema on all pages (name, logo, URL, contact info, social profiles)
- LocalBusiness schema on the homepage (if applicable to a geographic area)
- FAQPage schema on every page that has an FAQ section
- BreadcrumbList schema on service pages and blog posts
- Article schema on blog posts (headline, author, datePublished, dateModified, image)
- The structured data must be valid — test with Google's Rich Results Test before launch

OPEN GRAPH & SOCIAL META:
- og:title, og:description, og:image, og:url, og:type on all pages
- twitter:card, twitter:title, twitter:description, twitter:image on all pages
- Default social sharing image (1200x630px) — we will provide this asset

IMAGE OPTIMISATION:
- All images served in WebP format with fallbacks
- Lazy loading on all images below the fold
- Proper alt text on all images (provided in content)
- Responsive image sizes using srcset


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
16. PERFORMANCE REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These are hard targets — not aspirational. Ad landing pages in particular must be fast because page speed directly impacts Google Ads quality score and cost per click.

CORE WEB VITALS TARGETS:
- Largest Contentful Paint (LCP): under 2.0 seconds
- Cumulative Layout Shift (CLS): under 0.1
- Interaction to Next Paint (INP): under 200ms

ADDITIONAL:
- Time to First Byte (TTFB): under 400ms
- Total page weight for ad landing pages: under 500KB (excluding cached assets)
- Total page weight for main site pages: under 1.5MB
- No render-blocking JavaScript in the critical path
- Fonts loaded with font-display: swap to prevent invisible text during load
- All third-party scripts (analytics, pixel) loaded asynchronously and deferred


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
17. ACCESSIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- WCAG 2.1 Level AA compliance minimum
- All interactive elements keyboard-navigable
- Focus indicators visible on all interactive elements
- Proper ARIA labels on the form modal, close button, and navigation
- Sufficient colour contrast ratios (4.5:1 for body text, 3:1 for large text)
- Form inputs have associated labels (not just placeholders)
- Error states on form validation are announced to screen readers
- Skip-to-content link on all pages
- Alt text on all images


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
18. RESPONSIVE BEHAVIOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The site must work flawlessly across all devices. More than 60% of mortgage-related searches happen on mobile.

BREAKPOINTS (minimum):
- Mobile: 0–767px
- Tablet: 768–1023px
- Desktop: 1024px+

MOBILE-SPECIFIC REQUIREMENTS:
- Phone number in the header must be tap-to-call
- Form modal must be full-screen on mobile with no horizontal overflow
- Form inputs must not zoom the viewport on focus (set font-size to 16px minimum on inputs)
- CTA buttons must be minimum 48px height for touch targets
- Stat cards / trust signals should stack vertically on mobile
- Navigation becomes a hamburger menu with drawer
- Ad landing pages must have the CTA visible without scrolling on common mobile viewports (375px width, 667px height)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
19. ACCEPTANCE CRITERIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The build is considered complete when all of the following are true:

FUNCTIONALITY:
- All pages listed in section 2 are built and accessible
- The multi-step form works end-to-end with validation on all required fields
- Form submissions successfully reach the CRM (or a test endpoint until CRM is configured)
- UTM parameters and click IDs are captured and passed with form submissions
- Cookie consent banner works correctly and blocks tracking until consent is given
- Phone number is click-to-call on mobile
- All internal links work — no 404s
- Blog infrastructure is in place and a test post can be published

DESIGN:
- The site matches the brand guidelines provided by the design team
- Dark theme is implemented on the homepage, service pages, and ad landing pages
- The form modal matches the design spec
- Responsive behaviour is correct across mobile, tablet, and desktop
- No horizontal scrolling on any viewport

SEO:
- All structured data validates with Google's Rich Results Test
- XML sitemap is accessible and includes all indexable pages
- robots.txt is correctly configured
- Ad landing pages are noindexed
- All pages have unique title tags and meta descriptions
- Canonical tags are present on all pages

PERFORMANCE:
- Core Web Vitals pass on both mobile and desktop (measured via PageSpeed Insights)
- Ad landing pages load in under 2 seconds on a 3G connection

TRACKING:
- GTM container is installed and loading
- GA4 is receiving page views
- Custom events (form_open, form_step_complete, form_submit, phone_click) are firing correctly
- Google Ads conversion tag fires on form submission
- Meta Pixel fires PageView and Lead events correctly
- All tracking respects cookie consent

LEGAL:
- FCA disclaimer is present in the footer of every page
- Privacy policy, terms, cookie policy, and complaints pages are live
- Cookie consent banner is functional
- "Your home may be repossessed" warning appears on all pages that reference mortgages


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
END OF DOCUMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Questions or ambiguity? Ask Levi before building — don't assume.

