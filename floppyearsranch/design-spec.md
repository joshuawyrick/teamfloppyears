# DESIGN SPEC — FLOPPY EARS RANCH

**This is the concrete spec layer. It sits UNDER `design-direction.md`.**

`design-direction.md` (Josh's Universal High-End Website Aesthetic Direction) is the
constitution and governs everything. Where the two disagree, **`design-direction.md` wins.**
This file supplies the specific tokens, type scale, and component rules for this build.

> ⚠️ **Build agent: if `design-direction.md` is not present in this repository, STOP and
> say so before building anything.** Do not proceed on this file alone. On the previous
> build, a missing design constitution produced a first pass the client described as
> "AI generated and cheap."

---

## THE ONE-SENTENCE BRIEF

A working ranch that happens to be run by professionals — warm, grounded, and unhurried,
with the visual restraint of a high-end veterinary practice and the photography of an
outdoor lifestyle brand.

---

## WHAT WE ARE DESIGNING AGAINST

Every competitor in this market looks the same: red-white-and-blue, drop shadows,
stock photography of golden retrievers, badge clip-art, and at least one starburst.
Off Leash K9, Sit Means Sit, Empire K9, Chino's Caring Kennel — all of them.

**Our advantage is restraint.** A calm, confident, well-typeset site with real photography
of a real 5-acre facility will read as more expensive and more trustworthy than anything
else in the Inland Empire. That is the entire visual strategy.

---

## COLOR

Warm neutral base, single deep accent. No second accent color. No gradients anywhere.

```css
/* Base */
--warm-white:     #FBFAF7;   /* page background */
--paper:          #FFFFFF;   /* cards, elevated surfaces */
--bone:           #F2EFE9;   /* alternating section bands */
--line:           #E3DFD7;   /* borders, dividers, 1px rules */

/* Text */
--graphite:       #1C1B19;   /* headings, primary text */
--slate:          #4A4844;   /* body text */
--muted:          #7A776F;   /* captions, metadata, labels */

/* Accent — ONE color, used sparingly */
--evergreen:      #2E4739;   /* primary accent: buttons, links, active states */
--evergreen-deep: #1F3227;   /* hover state */
--evergreen-tint: #EDF1EE;   /* accent backgrounds, subtle fills */

/* Signal — utility only, never decorative */
--clay:           #A8582F;   /* urgent CTA accents ONLY, used maybe twice per site */
--success:        #3F6B4A;
--error:          #8C3A32;
```

**Rules:**
- **Evergreen is the only accent.** Not blue. Every pet business in this market is blue.
  A deep, muted green reads outdoorsy, calm, and premium, and nobody else here uses it.
- Accent color appears on: primary buttons, text links, active nav, icon strokes,
  section eyebrows. That's it.
- **No gradients. No drop shadows.** Elevation comes from a 1px `--line` border and
  generous whitespace.
- Body text is `--slate`, not pure black. Headings are `--graphite`.
- `--clay` is reserved for the sticky mobile call bar and nothing else.

---

## TYPOGRAPHY

Two families. No third.

```css
--font-display: 'Fraunces', Georgia, serif;        /* headings */
--font-body:    'Manrope', system-ui, sans-serif;  /* everything else */
```

**Fraunces** for headings — a warm, slightly editorial serif with real character. It
carries the "ranch" and "family-owned" feeling without being folksy, and it instantly
separates this site from the sans-serif sameness of every competitor. Use optical size and
a soft weight; avoid the extreme wonk settings.

**Manrope** for body — clean, highly legible, excellent at small sizes, neutral enough to
disappear.

### Scale

| Token | Desktop | Mobile | Family | Weight | Use |
|---|---|---|---|---|---|
| `--t-hero` | 60px / 1.05 | 36px / 1.1 | Fraunces | 500 | H1, homepage only |
| `--t-h1` | 46px / 1.1 | 32px / 1.15 | Fraunces | 500 | Page H1 |
| `--t-h2` | 34px / 1.2 | 26px / 1.25 | Fraunces | 500 | Section headings |
| `--t-h3` | 24px / 1.3 | 20px / 1.3 | Fraunces | 500 | Subsections |
| `--t-h4` | 19px / 1.4 | 17px / 1.4 | Manrope | 600 | Card titles |
| `--t-lead` | 21px / 1.6 | 18px / 1.6 | Manrope | 400 | Direct-answer paragraphs |
| `--t-body` | 17px / 1.7 | 16px / 1.7 | Manrope | 400 | Body copy |
| `--t-small` | 15px / 1.6 | 14px / 1.6 | Manrope | 400 | Captions, fine print |
| `--t-eyebrow` | 13px / 1.2 | 12px / 1.2 | Manrope | 600 | Section labels, `letter-spacing: 0.08em`, uppercase |

**Rules:**
- Body copy max width: **68 characters**. Never full-bleed paragraphs.
- **Never center a paragraph.** Center headings and eyebrows only, and rarely.
- **Never justify text.**
- No all-caps except eyebrows and buttons.
- Direct-answer paragraphs (the AEO paragraph under each H1) use `--t-lead` — visually
  distinct, so it reads as the answer.

---

## SPACING

8px base grid.

```css
--s-1: 4px;    --s-2: 8px;    --s-3: 12px;   --s-4: 16px;
--s-5: 24px;   --s-6: 32px;   --s-7: 48px;   --s-8: 64px;
--s-9: 96px;   --s-10: 128px;
```

- Section vertical padding: **96px desktop / 56px mobile** minimum.
- Content max-width: **1200px**. Text-only blocks: **720px**.
- Gutters: 24px mobile, 48px desktop.
- **Whitespace is the primary luxury signal.** When in doubt, add more. Cramped cards were
  the specific complaint on the last build.

---

## COMPONENTS

### Buttons

```
Primary    → evergreen fill, warm-white text, 6px radius, 16px/28px padding, weight 600
Secondary  → transparent, 1px evergreen border, evergreen text
Tertiary   → text only, evergreen, 1px underline offset 4px
```

- Radius: **6px everywhere.** Not pills. Not sharp corners.
- Transition: `180ms ease` on background and border only. Never scale or bounce.
- **Every button says what happens next.** "Request an Evaluation," "Check Availability,"
  "Book a Tour." Never "Submit," "Learn More," or "Click Here."
- Maximum **one primary button per viewport**.

### Cards

- `--paper` background, 1px `--line` border, 6px radius, **no shadow**
- Internal padding: 32px desktop / 24px mobile
- Hover: border darkens to `--evergreen-tint`. Nothing else moves.
- Cards in a grid must be **equal height**. Ragged card bottoms were a specific complaint
  on the previous build.

### Icons

**Lucide only.** 1.5px stroke, `--evergreen` or `--slate`, 20px or 24px.

- ❌ **No emoji anywhere on this site.** Not in headings, not in lists, not in cards.
- ❌ No icon fonts, no clip-art badges, no illustrated mascots.

### The Phone Panel — signature element

The phone number is treated as a designed object, not a line of text. It appears:

- **Desktop header:** right-aligned, `--t-h4`, Manrope 600, with a small Lucide phone icon,
  set on a `--evergreen-tint` panel with 6px radius
- **Mobile:** sticky bottom bar, `--clay` background — `CALL` | `TRAINING` | `BOARDING`
- **Footer:** large, `--t-h3`, with hours directly beneath
- **Every service page:** once in the mid-page CTA block

This is the one element allowed to be visually loud. It is the primary conversion action
and the current site hides it on a single orphaned page.

### Forms

- Single column. Never side-by-side fields except First/Last name.
- Labels **above** inputs, always visible. No placeholder-as-label.
- Inputs: `--paper` background, 1px `--line`, 6px radius, 14px padding, `--t-body`
- Focus: 2px `--evergreen` ring, no glow
- **Honeypot spam protection only.** ❌ No CAPTCHA, no math questions. The current site
  has a math captcha *and* a second CAPTCHA on its only working intake path — that is a
  conversion disaster.
- Required fields marked with a `--muted` "Required", never a red asterisk
- Multi-step forms show progress ("Step 2 of 3")

---

## PHOTOGRAPHY — the most important visual decision

This site lives or dies on real photography of a real facility. **No stock photos. Ever.**
A single stock golden retriever undoes the entire strategy.

**Treatment:**
- Warm, natural light. Shot outdoors or near windows wherever possible.
- Slightly desaturated, warm-shifted. Consistent grade across the whole library.
- ❌ No heavy filters, no vignettes, no HDR, no black-and-white mixed with color.
- Aspect ratios: 3:2 (standard), 16:9 (hero), 1:1 (team, cards). Pick per context and
  stay consistent within a grid.

**Required shot list — 80–150 images:**

| Category | Shots |
|---|---|
| Facility | Exterior, entrance and sign, the 5 acres wide, training grounds, climate-controlled kennels (clean and empty), outdoor runs, Jax Weller Arena, pools, shade structures |
| People | Chad training, Kyla training, Jose working, all three together, candid and posed |
| Working dogs | Loose-leash walking, recall, place command, heel, off-leash work, e-collar work (shown honestly), impulse control |
| Program life | Feeding, kennel time, supervised play, rest, a dog being bathed |
| Client moments | Turnover/transfer session, owner reuniting with dog, handshake at pickup |
| Case studies | Before and after for each featured dog |
| Detail | Leashes on a hook, a name card on a kennel, equipment, the gate |

**Alt text rule:** describe the actual photograph in plain language.

- ✅ `"Chad working on loose-leash walking with a German Shepherd at Floppy Ears Ranch in Corona"`
- ❌ `"best dog trainer corona board and train near me orange county california"`

Descriptive alt text happens to be search-relevant *because it describes the image.*
The current site's alt text is literally `"0"`, `"0-1"`, and `"unnamed"`.

**Technical:** WebP with JPG fallback · responsive `srcset` at 400/800/1200/1600px ·
`width` and `height` attributes on every image to prevent layout shift ·
`loading="lazy"` on everything below the fold · **never** lazy-load the LCP hero image.

---

## LAYOUT PATTERNS

### Hero (homepage)
Full-width photograph, warm gradient scrim from bottom-left for text legibility (this is
the **only** permitted gradient, and it's a scrim, not decoration). H1 + one-line
subhead + primary CTA + secondary CTA. Trust bar directly beneath the fold.

❌ **The hero must not have an empty or dead button.** That was a specific failure on the
previous build.

### Service page hero
No photo hero. Eyebrow (breadcrumb) → H1 → direct-answer paragraph at `--t-lead` →
two CTAs → then the first content section. Gets people to the answer immediately.

### Section rhythm
Alternate `--warm-white` and `--bone` backgrounds down the page. Never three consecutive
sections on the same background — the page reads as one undifferentiated wall.

### Program cards
3-up desktop, 1-up mobile. Each card: program name, duration, price, 4–6 bullet
inclusions, one CTA. **Equal height, always.** Ordered most expensive first.

### Footer
**Light** — `--bone` background, `--graphite` text. Not a dark slab. Four columns:
Training · Boarding · Areas Served · Company. NAP block with map link and hours. Social
icons linked to **real profiles**. One link to teamfloppyears.com.

---

## MOTION

Almost none.

- Fade-up on scroll, 200ms, 8px travel, **once**. Nothing repeats on re-scroll.
- Hover: color transitions only, 180ms.
- ❌ No parallax, no counters, no carousels, no auto-playing sliders, no typewriter
  effects, no scroll-jacking.
- `prefers-reduced-motion` fully respected — disables all of the above.

> The current site's homepage is a Slider Revolution carousel. It is being removed
> deliberately. Carousels reduce conversion and hurt Core Web Vitals.

---

## ACCESSIBILITY — non-negotiable

- WCAG 2.2 AA minimum
- Contrast: 4.5:1 body, 3:1 large text. Verify every accent-on-background pair.
- **`viewport` must NOT contain `user-scalable=no`.** The current site blocks pinch-zoom —
  an accessibility failure Lighthouse flags.
- Visible focus states on every interactive element. Never `outline: none` without a
  replacement.
- Semantic HTML: one `<h1>` per page, correct heading order, real `<button>` and `<a>`
  elements, `<nav>`/`<main>`/`<footer>` landmarks.
- All images have meaningful alt text; decorative images get `alt=""`.
- Forms: every input has an associated `<label>`. Errors announced to screen readers.
- Full keyboard navigability. Skip-to-content link.
- Target size minimum 44×44px on touch.

---

## PERFORMANCE TARGETS

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 mobile |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| LCP | < 2.0s |
| CLS | **< 0.05** |
| INP | < 200ms |
| Total JS | < 100KB gzipped |

**How:**
- Astro, static output, zero JS by default. Islands only where genuinely interactive
  (forms, mobile nav, results filter).
- Self-host Fraunces and Manrope as WOFF2, subset to Latin, `font-display: swap`,
  preload the two files used above the fold.
- **Explicit `width`/`height` on every image and embed.** CLS was the specific problem on
  a previous build.
- YouTube embeds are **facades** — a static poster image that loads the iframe on click.
  Never embed a live iframe on page load.
- No jQuery. No Bootstrap. No icon fonts. No analytics beyond GA4 and CallRail.

---

## RESPONSIVE BREAKPOINTS

```css
/* mobile-first */
--bp-sm:  640px;
--bp-md:  768px;
--bp-lg:  1024px;
--bp-xl:  1280px;
```

**Mobile is the primary design target.** The majority of "dog trainer near me" searches
happen on a phone, often by someone standing in a yard with a dog that just did something
alarming. The sticky call bar and the direct-answer paragraph are the two most important
elements on the page.

---

## HARD BANS

| ❌ Never | Why |
|---|---|
| Emoji as icons | Reads as AI-generated and cheap |
| Gradients (except the hero photo scrim) | Dates instantly |
| Drop shadows | Use borders and whitespace |
| Stock photography | Destroys the entire trust strategy |
| Carousels / auto-sliders | Kills conversion and CWV |
| Pill-shaped buttons | Not the register we're in |
| Dark footer slab | Constitution specifies light |
| More than two type families | |
| A second accent color | |
| Invented statistics, awards, or ratings | See `business-facts.md` |
| "Submit" / "Learn More" / "Click Here" buttons | Say what happens |
| CAPTCHA on any form | Honeypot only |
| `user-scalable=no` | Accessibility failure |
| Empty or dead buttons | Previous build failure |
| Ragged card heights in a grid | Previous build failure |
