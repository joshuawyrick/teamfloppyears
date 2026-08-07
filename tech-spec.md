# TECHNICAL SPEC — FLOPPY EARS RANCH

Stack, schema, tracking, redirects, and the QA checklist. Applies to
**floppyearsranch.com** unless a section says otherwise.

---

## STACK

| Layer | Choice |
|---|---|
| Framework | **Astro** — static output |
| Styling | Plain CSS with custom properties, or Tailwind. No CSS-in-JS. |
| Hosting | Netlify or Vercel |
| Forms | Netlify Forms or Formspree → email + CRM |
| Booking (boarding/daycare) | Embedded widget — Gingr, Revelation Pets, or Time To Pet |
| Store | **Not on this domain.** Shopify Buy Buttons live on teamfloppyears.com |
| Call tracking | CallRail with dynamic number insertion |
| Analytics | GA4 |
| Language | English at root, Spanish at `/es/` with hreflang |

**Zero JavaScript by default.** Islands only for: mobile navigation, the multi-step intake
form, the results filter, and the YouTube facade.

---

## URL RULES

- Lowercase, hyphenated, no trailing file extensions
- **Trailing slash on every URL**, consistently
- No dates in URLs
- No `/blog/` — resources live at `/resources/`
- Spanish mirrors English structure under `/es/` with localized slugs
- Canonical tag on every page, self-referencing
- Never change a URL after launch without a 301

---

## SCHEMA (JSON-LD)

The current site has **zero** structured data. This is the single biggest technical gap.

### Sitewide — every page

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://floppyearsranch.com/#business",
  "name": "Floppy Ears Ranch",
  "legalName": "Team Floppy Ears, LLC",
  "url": "https://floppyearsranch.com/",
  "telephone": "TODO_CONFIRMED_PHONE",
  "email": "TODO_CONFIRMED_EMAIL",
  "foundingDate": "2019",
  "priceRange": "$$-$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "21761 Knabe Rd",
    "addressLocality": "Corona",
    "addressRegion": "CA",
    "postalCode": "92883",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "TODO", "longitude": "TODO" },
  "openingHoursSpecification": [ "TODO — confirmed hours" ],
  "areaServed": [
    {"@type":"City","name":"Corona"}, {"@type":"City","name":"Norco"},
    {"@type":"City","name":"Eastvale"}, {"@type":"City","name":"Riverside"},
    {"@type":"AdministrativeArea","name":"Riverside County"},
    {"@type":"AdministrativeArea","name":"Orange County"},
    {"@type":"AdministrativeArea","name":"San Bernardino County"}
  ],
  "sameAs": [
    "https://www.instagram.com/teamfloppyears/",
    "https://www.facebook.com/TeamFloppyEars/",
    "https://www.youtube.com/@Teamfloppyears",
    "https://www.tiktok.com/@team.floppyears",
    "https://www.patreon.com/TeamFloppyEars",
    "https://teamfloppyears.com/"
  ]
}
```

> ⚠️ Replace every `TODO` before launch. Do not ship placeholder values.
> Do **not** add `AggregateRating` until real reviews are collected and displayed on-page.

### Per page type

| Page type | Schema |
|---|---|
| Every service page | `Service` with `provider` → `#business`, `areaServed`, `offers` (`Offer` with `price`, `priceCurrency`, `availability`) |
| Any page with an FAQ block | `FAQPage` — questions must match visible on-page text exactly |
| `/meet-the-team/` | `Person` × 3 with `jobTitle`, `worksFor`, `hasCredential` (confirmed credentials only) |
| Any embedded video | `VideoObject` with `name`, `description`, `thumbnailUrl`, `uploadDate`, `duration` |
| Every page except home | `BreadcrumbList` |
| Case studies | `Article` + `VideoObject` |
| Prep guides | `HowTo` |
| Service-area pages | `Service` with the specific `areaServed` |

**FAQ schema rule:** the question and answer text in JSON-LD must be **character-identical**
to what's rendered on the page. Mismatches trigger manual actions.

---

## `robots.txt`

AI crawler access is explicit and deliberate. Roughly 71% of sites blocking an AI
*training* bot accidentally block the *retrieval* bot too, which removes them from AI
search results entirely.

```
User-agent: *
Allow: /
Disallow: /thank-you/

# AI search and retrieval — explicitly allowed
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: CCBot
Allow: /

Sitemap: https://floppyearsranch.com/sitemap-index.xml
```

---

## HEAD — every page

- `<title>` — unique, ≤ 60 chars, primary keyword first, brand last
- `<meta name="description">` — unique, 140–158 chars, includes a CTA
  *(the current site has **none** on any page — Google is writing its own snippets)*
- `<link rel="canonical">` — self-referencing
- `hreflang` — `en-US`, `es-US`, `x-default` on every page with a translation
- Open Graph: `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`
- Twitter: `summary_large_image`
- Favicon set: 32, 180 (apple-touch), 192, 512, `site.webmanifest`
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
  — ⚠️ **no `user-scalable=no`**
- Preload: the two above-the-fold WOFF2 font files, and the LCP hero image

---

## TRACKING

The current site appears to have **no analytics at all**. They have zero visibility.

### GA4 conversion events

| Event | Fires on |
|---|---|
| `tel_click` | Any `tel:` link |
| `sms_click` | Any `sms:` link |
| `form_start` | First field focus on the intake form |
| `form_submit` | Successful intake submission |
| `booking_widget_open` | Boarding/daycare booking widget opened |
| `booking_complete` | Reservation confirmed |
| `tour_request` | Tour booking submitted |
| `pricing_view` | `/pricing/` reaches 50% scroll |
| `video_play` | Any video facade clicked |

### Also required

- Google Search Console — verified
- **Bing Webmaster Tools — verified** (non-negotiable; ChatGPT's local answers lean on Bing)
- CallRail — dynamic number insertion, SMS capture, call recording where legal
  (California is a two-party consent state — announce recording)
- Meta Pixel — they have a real social audience worth retargeting

---

## FORMS

### Training / behavior intake — the primary lead form

Multi-step, 3 steps, progress indicator.

**Step 1 — Your dog**
Dog's name · Breed · Age · Sex · Spayed/neutered (Y/N/Unsure)

**Step 2 — What's going on**
What would you like help with? *(multi-select: Board & Train · Aggression ·
Reactivity · Puppy training · Obedience · Private training · Off-leash · Not sure)*
What behaviors are you experiencing? *(textarea)*
Has your dog ever bitten a person or another dog? *(Yes / No / Not sure — required)*
What result would you most like to achieve? *(textarea)*

**Step 3 — You**
Name · Phone · Email · City · How soon would you like to begin?
*(Immediately / 1–2 weeks / 1 month / Just researching)* ·
How did you hear about us? · Photo of your dog *(optional)*

**Submit button: "Get My Training Recommendation"** — never "Submit."

### Boarding / daycare
Not a form — the embedded reservation widget with a **real date picker**.

> The current site sells boarding by "add quantity = number of nights" with no dates at
> all. A customer can buy five nights without ever saying which nights.

### All forms
- Honeypot field, hidden via CSS — **no CAPTCHA**
- Client + server validation, inline errors
- Redirect to `/thank-you/` (noindex) for clean conversion tracking
- Email to the business + autoresponder to the customer
- The bite-history question is required and routes flagged submissions to a priority queue

---

## 301 REDIRECT MAP

Service content moves off `teamfloppyears.com`. Every retired URL redirects to its
counterpart on the ranch site. **Required before launch.**

| From (teamfloppyears.com) | To (floppyearsranch.com) |
|---|---|
| `/board-and-train/` | `/board-and-train/` |
| `/board-train/` | `/board-and-train/` |
| `/service-requests/` | `/book-evaluation/` |
| `/contact-us/` | `/contact/` |
| `/meet-the-team/` | `/meet-the-team/` |
| `/dog-boarding-contract/` | `/boarding-contract/` |
| `/jax-weller-arena/` | `/jax-weller-arena/` |
| `/private-lessons/` | `/private-dog-training/` |
| `/group-classes/` | `/dog-training/` |
| `/learn-on-zoom/` | `/private-dog-training/` |
| `/shop/<service products>` | matching service page |
| `/product-category/boarding/` | `/dog-boarding/` |
| `/forms/` *(currently 404s)* | `/contact/` |

**Stays on teamfloppyears.com:** `/`, `/tfe/`, `/apparel/`, `/shop/` (merch only), `/cart/`,
`/my-account/`, `/team-floppy-ears-exclusive/`

---

## PRE-LAUNCH QA CHECKLIST

**Technical**
- [ ] Every `TODO` in schema replaced with confirmed values
- [ ] Lighthouse ≥ 95 / 100 / 100 / 100 on mobile
- [ ] CLS < 0.05 on every template
- [ ] `width` and `height` on every image and embed
- [ ] No `user-scalable=no`
- [ ] `sitemap-index.xml` generated and submitted to Google + Bing
- [ ] `robots.txt` allows all AI crawlers
- [ ] All 301 redirects tested
- [ ] Custom 404 with links to money pages
- [ ] `/thank-you/` is `noindex`
- [ ] HTTPS everywhere, HSTS on
- [ ] Broken-link crawl: zero 404s

**SEO**
- [ ] Unique title and meta description on every page
- [ ] Exactly one `<h1>` per page, correct heading order
- [ ] Every image has descriptive alt text — no `"0"`, no `"unnamed"`, no keyword stuffing
- [ ] Schema validated in Google Rich Results Test
- [ ] FAQ schema text matches visible page text exactly
- [ ] hreflang correct and reciprocal on all EN/ES pairs
- [ ] Canonical on every page
- [ ] Open Graph image renders correctly in a Facebook and iMessage share test

**Content**
- [ ] Every price matches `pricing.md`
- [ ] Zero claims contradicting `business-facts.md`
- [ ] No `AggregateRating` schema without displayed reviews
- [ ] No unconfirmed credentials published
- [ ] Ring 3 service-area pages do **not** claim daycare or boarding
- [ ] Phone, address, and hours in header and footer on every page
- [ ] Every social icon links to a real profile

**Conversion**
- [ ] Sticky mobile call bar on every page
- [ ] `tel:` links work on mobile
- [ ] Intake form submits, emails, and redirects correctly
- [ ] Booking widget loads and accepts dates
- [ ] All GA4 events fire (verify in DebugView)
- [ ] CallRail number swaps correctly
- [ ] No dead or empty buttons anywhere

**Accessibility**
- [ ] axe DevTools: zero critical issues
- [ ] Full keyboard navigation, visible focus states
- [ ] Contrast verified on every color pair
- [ ] Screen reader pass on homepage and one service page
