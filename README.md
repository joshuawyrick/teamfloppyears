# Floppy Ears Ranch — Website Build

Source of truth for **floppyearsranch.com**, the website for Floppy Ears Ranch
(legally Team Floppy Ears, LLC), a dog training and boarding facility on 5 acres in
Corona, California.

This repository is imported into **bolt.new** and built phase by phase.

---

## ⚠️ BUILD AGENT: START HERE

1. Read **`build-spec.md`** — the phased build order. Follow it exactly.
2. Read every file listed below before writing any code.
3. **If `design-direction.md` is missing from this repo, STOP and say so.**
4. Build **one phase per message.** Report and wait after each.

---

## Files

| File | What it governs |
|---|---|
| `build-spec.md` | **Start here.** 9-phase build order. |
| `design-direction.md` | ⚠️ *Josh uploads this.* The design constitution — supreme authority. |
| `design-spec.md` | Concrete tokens, type scale, components. Sits under the constitution. |
| `business-facts.md` | Every factual claim. Never invent a fact. |
| `pricing.md` | Every price. Single source of truth. |
| `tech-spec.md` | Stack, schema, tracking, redirects, QA checklist. |
| `page-specs/01-money-pages.md` | The 9 revenue pages, fully specified. |
| `page-specs/02-supporting-pages.md` | Services, trust pages, service areas, resources, Spanish, legal. |
| `content/en/` | Final English copy — **implement verbatim.** |
| `content/es/` | Final Spanish copy — **implement verbatim.** |

---

## The five rules

1. **Never invent a fact.** Statistics, reviews, ratings, awards, credentials — if it isn't
   in `business-facts.md`, it doesn't go on the site. Leave a `TODO:` comment instead.
2. **Content packs are implemented verbatim.** Don't rewrite, shorten, or "improve" them.
   The copy is engineered for SEO, AI extraction, and conversion at the same time.
3. **Every price comes from one config file.** Never hard-code a price into a page.
4. **No emoji, no gradients, no stock photos, no carousels, no CAPTCHA.**
5. **One `<h1>` per page.**

---

## Two domains — know which one you're building

| | **floppyearsranch.com** ← THIS REPO | **teamfloppyears.com** |
|---|---|---|
| Purpose | The business — convert local searchers | The brand — serve the national audience |
| Content | All services, service areas, pricing, results, facility | YouTube, Patreon, advocacy, merch |
| NAP | Full, sitewide | **None** |
| Services / pricing / city pages | Yes | **Never** |
| Store | **No** | Yes — Shopify Buy Buttons |
| GBP links to | **This site** | Never |

No duplicated content between them. Not a paragraph.

---

## Outstanding blockers

These must be resolved before launch. The build agent should leave `TODO:` comments and
report them, not guess.

| # | Blocker | Blocks |
|---|---|---|
| 1 | **Phone number** — `562-544-2965` vs `(951) 454-6773` | Every page, schema, GBP |
| 2 | **Business hours** — never published publicly | Footer, schema, GBP |
| 3 | **Email address** | Contact page, schema |
| 4 | **Does a Google Business Profile exist?** None found. | The entire local ranking strategy |
| 5 | **Credentials** — a directory claims CPDT-KA and IAABC-CDBC; unverified | `/meet-the-team/`, `Person` schema |
| 6 | **What does "Weller" mean?** | `/jax-weller-arena/` — cannot be built |
| 7 | **Pricing sign-off** — provisional values resolve 7 live contradictions | Every price on the site |
| 8 | **Overnight staffing** — copy claims both "24/7" and "12 hours a day" | `/safety-and-care/`, `/dog-boarding/` |
| 9 | **Insurance / licensing / bonding** | Trust blocks |
| 10 | **Partner veterinary clinic** | `/safety-and-care/` |
| 11 | **Photography** — 80–150 originals needed | Every page |
| 12 | **Client releases** for case studies | `/dog-training-results/` |
| 13 | **Reservation system** — Gingr / Revelation Pets / Time To Pet? | Boarding and daycare booking |

---

## Site map

**English (39 pages)**

```
/
/dog-training/  ·  /board-and-train/  ·  /aggressive-dog-training/
/reactive-dog-training/  ·  /puppy-training/  ·  /private-dog-training/
/dog-obedience-training/  ·  /off-leash-dog-training/
/dog-boarding/  ·  /dog-daycare/  ·  /boarding-reactive-aggressive-dogs/
/pricing/  ·  /dog-training-results/ (+5 case studies)  ·  /reviews/
/service-areas/ (+ norco, eastvale, riverside, inland-empire,
                 orange-county, san-bernardino-county)
/resources/ (+7 articles)
/facility/  ·  /jax-weller-arena/  ·  /training-methods/  ·  /safety-and-care/
/meet-the-team/  ·  /about/  ·  /faq/  ·  /contact/  ·  /book-evaluation/
/privacy-policy/  ·  /terms/  ·  /accessibility/  ·  /boarding-contract/
/thank-you/ (noindex)  ·  /404/
```

**Spanish (9 pages)** — `/es/` — see `page-specs/02-supporting-pages.md`

---

## Status

| Phase | Status |
|---|---|
| Research & audit | ✅ Complete |
| Strategy & architecture | ✅ Complete |
| Foundation specs | ✅ Complete |
| English content packs | 🔄 In progress |
| Spanish content packs | ⬜ Not started |
| Bolt build | ⬜ Not started |
| Off-site (GBP, citations, reviews) | ⬜ Not started |
