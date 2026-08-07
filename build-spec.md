# BUILD SPEC — FLOPPY EARS RANCH

**Read this first. This is the build order for bolt.new.**

---

## READ BEFORE PHASE 1

You are building **floppyearsranch.com** — the website for Floppy Ears Ranch
(legally Team Floppy Ears, LLC), a dog training and boarding facility on 5 acres in
Corona, California.

**Files in this repository. Read all of them before writing any code.**

| File | What it governs |
|---|---|
| `design-direction.md` | **The design constitution. Supreme authority.** |
| `design-spec.md` | Concrete tokens, type, components. Sits under the constitution. |
| `business-facts.md` | Every factual claim. Never invent a fact. |
| `pricing.md` | Every price. Single source of truth. |
| `tech-spec.md` | Stack, schema, tracking, redirects, QA |
| `page-specs/` | Per-page specification: keywords, titles, outlines, schema |
| `content/en/` | Final English page copy — **implement verbatim** |
| `content/es/` | Final Spanish page copy — **implement verbatim** |

### Hard rules

1. **If `design-direction.md` is missing from this repo, STOP and say so.** Do not build
   without it.
2. **Content packs are implemented verbatim.** Do not rewrite, summarize, shorten, or
   "improve" the copy. It is written for SEO, AI extraction, and conversion simultaneously.
3. **Never invent a fact, statistic, review, rating, award, or credential.** If it isn't in
   `business-facts.md`, it does not go on the site. Leave a `TODO:` comment instead.
4. **Every price comes from a single config file** imported from `pricing.md` values.
   Never hard-code a price into a page.
5. **No emoji. No gradients (except the hero photo scrim). No stock photos. No carousels.**
6. **One `<h1>` per page.** The current site has none on its most important pages.
7. Report at the end of each phase and **wait** before continuing. Do not run phases
   back to back.

### Placeholder policy

Real photography does not exist yet. Use neutral gray placeholder blocks at the exact
correct dimensions with `width` and `height` set, and a `TODO:` comment naming the required
shot from the `design-spec.md` shot list. **Never use a stock photo, an AI-generated image,
or a photo of a different business's facility.**

---

## PHASE 1 — Foundation and design system

Build only. No content pages yet.

- Astro project, static output, TypeScript off unless it helps
- Design tokens from `design-spec.md` as CSS custom properties
- Self-hosted Fraunces + Manrope, WOFF2, Latin subset, preloaded
- Base layout: skip link, header, main, footer
- **Header:** logo, primary nav with dropdowns, the phone panel, `GET STARTED` button
- **Mobile:** hamburger nav (island) + sticky bottom bar `CALL | TRAINING | BOARDING`
- **Footer:** four columns (Training · Boarding · Areas Served · Company), NAP block with
  hours and map link, real social profile links, one link to teamfloppyears.com
- Reusable components: Button, Card, ProgramCard, FAQAccordion, CTABlock, Breadcrumb,
  DirectAnswer, TrustBar, VideoFacade, ImagePlaceholder
- `LocalBusiness` + `Organization` schema in the base layout
- `robots.txt`, `sitemap-index.xml`, favicon set, `site.webmanifest`
- Custom 404
- `/thank-you/` with `noindex`

**Navigation (exact):**

```
TRAINING ▾      Board & Train · Puppy Training · Private Training ·
                Obedience Training · Off-Leash Training
BEHAVIOR ▾      Aggressive Dog Training · Reactive Dog Training
BOARDING ▾      Dog Boarding · Dog Daycare · Reactive & Aggressive Dog Boarding
RESULTS         → /dog-training-results/
PRICING         → /pricing/
ABOUT ▾         About · Meet the Team · Facility · Jax Weller Arena ·
                Training Methods · Reviews
                [ GET STARTED ]  → /book-evaluation/
                [ phone panel ]
```

**Deliverable:** working layout, empty page shell, Lighthouse ≥ 95.
**STOP. Report and wait.**

---

## PHASE 2 — Homepage

Build `/` from `content/en/home.md` and `page-specs/`.

Section order:

1. Hero — H1, subhead, two CTAs, full-width photo placeholder
2. Trust bar
3. "What do you need help with?" — routing selector, 6 cards
4. Board & Train
5. Aggression & reactivity
6. Puppy training
7. Boarding & daycare
8. Results — before/after preview
9. Meet the trainers
10. The facility
11. How training works — 4 steps
12. Pricing preview
13. Areas served
14. FAQ
15. Final CTA

**Deliverable:** homepage complete, desktop and mobile screenshots.
**STOP. Josh reviews design here before anything else is built.**

---

## PHASE 3 — The money pages

Eight pages. Build in this order:

1. `/board-and-train/` ← highest value on the domain
2. `/dog-training/`
3. `/dog-boarding/`
4. `/aggressive-dog-training/`
5. `/reactive-dog-training/`
6. `/puppy-training/`
7. `/private-dog-training/`
8. `/pricing/`

Every one uses the 12-part commercial skeleton in `page-specs/`.
`Service` + `FAQPage` schema on each.

> Split this phase if it runs long. The previous Bolt session crashed after ~1 hour of
> continuous building. Four pages, report, then four more is safer than eight straight.

**STOP. Report and wait.**

---

## PHASE 4 — Conversion and trust

- `/book-evaluation/` — the 3-step intake form (island), honeypot, no CAPTCHA
- `/contact/` — NAP, map, hours, form, directions
- `/dog-training-results/` — filterable case study index (island)
- 5 case study pages at `/dog-training-results/{slug}/`
- `/reviews/`
- `/facility/`
- `/jax-weller-arena/` ⚠️ **only if `business-facts.md` has been updated to explain
  "Weller." If it still says UNCONFIRMED, skip this page and report it.**
- `/meet-the-team/` — `Person` schema, confirmed credentials only
- `/about/`
- `/training-methods/` — state e-collar use plainly
- `/safety-and-care/`
- `/faq/`

**STOP. Report and wait.**

---

## PHASE 5 — Remaining services and service areas

Services:
- `/dog-obedience-training/`
- `/off-leash-dog-training/`
- `/dog-daycare/`
- `/boarding-reactive-aggressive-dogs/`

Service areas:
- `/service-areas/` hub
- `/service-areas/norco/` — all services
- `/service-areas/eastvale/` — all services
- `/service-areas/riverside/` — all services
- `/service-areas/inland-empire/` — training, B&T, boarding
- `/service-areas/orange-county/` — ⚠️ **Board & Train and behavior work ONLY**
- `/service-areas/san-bernardino-county/` — ⚠️ **Board & Train and behavior work ONLY**

> **Hard rule:** Orange County and San Bernardino County pages must not mention daycare or
> boarding as available services. Nobody drives that distance daily. Claiming otherwise is
> the mismatch signal that damages trust and AI citation.

**STOP. Report and wait.**

---

## PHASE 6 — Resources

- `/resources/` hub
- `/resources/board-and-train-cost/` ← highest-ROI content asset on the site
- `/resources/is-board-and-train-worth-it/`
- `/resources/reactive-vs-aggressive-dog/`
- `/resources/how-to-choose-a-dog-trainer/`
- `/resources/boarding-a-reactive-dog/`
- `/resources/what-vaccinations-does-my-dog-need-for-boarding/`
- `/resources/what-to-expect-board-and-train/` — `HowTo` schema

Each: `Article` schema, question-shaped H2s with 2–4 sentence direct answers, a real price
or comparison table where relevant, and internal links to the money pages they support.

**STOP. Report and wait.**

---

## PHASE 7 — Spanish layer

Nine pages from `content/es/`, implemented **verbatim**. Native-authored, `usted` register.
Not machine translation — do not re-translate or adjust the copy.

```
/es/
/es/adiestramiento-canino/
/es/entrenamiento-con-hospedaje/
/es/entrenamiento-perros-agresivos/
/es/entrenamiento-perros-reactivos/
/es/entrenamiento-de-cachorros/
/es/hospedaje-para-perros/
/es/guarderia-canina/
/es/precios/
/es/contacto/
```

Plus:
- Reciprocal `hreflang` on every EN/ES pair (`en-US`, `es-US`, `x-default`)
- Language switcher in the header — links to the **translated equivalent**, not the ES
  homepage
- `/es/` pages in the sitemap
- Spanish page titles, meta descriptions, and schema — not English ones

**STOP. Report and wait.**

---

## PHASE 8 — Legal, integrations, launch prep

- `/privacy-policy/` — required for GA4 and Meta Pixel
- `/terms/`
- `/accessibility/`
- `/boarding-contract/`
- GA4 with all conversion events from `tech-spec.md`
- CallRail dynamic number insertion
- Meta Pixel
- Booking widget embed (boarding/daycare)
- 301 redirect map configured
- Open Graph images generated

**STOP. Report and wait.**

---

## PHASE 9 — Self-audit

Run the full QA checklist in `tech-spec.md` and report results as a table with
pass/fail per item.

Then specifically verify and report:

1. Every page has exactly one `<h1>`
2. Every page has a unique title and meta description
3. No image alt text is empty, `"0"`, `"unnamed"`, or keyword-stuffed
4. Every price on the site matches `pricing.md`
5. No claim on the site contradicts `business-facts.md`
6. No `AggregateRating` schema anywhere
7. No unconfirmed credentials published
8. Orange County and San Bernardino pages don't offer daycare or boarding
9. Every `TODO` still outstanding, listed
10. Lighthouse scores for 5 representative pages
11. Every social link resolves to a real profile
12. Zero dead or empty buttons
13. `robots.txt` allows all AI crawlers
14. hreflang reciprocal on all 9 EN/ES pairs

**Output a written report. Do not fix anything without approval.**

---

## SESSION MANAGEMENT

- **One phase per message.** Never chain phases.
- Keep runs short — a previous session crashed after ~1 hour of continuous building.
- If a phase exceeds ~10 pages, split it and report in between.
- On crash: reopen the project (files persist in GitHub), ask for a status report, resume
  from the last completed phase.
- Commit to GitHub at the end of every phase.
