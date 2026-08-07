# CONTENT PACK — REVIEWS

**URL:** `/reviews/`
**This is a structural pack. The page frame is finished copy; the review content is not
written and must not be invented.**
`[PHONE]` and `[HOURS]` are config tokens. Never guess values.

**⚠️ HARD CONSTRAINTS — NON-NEGOTIABLE**
- **No `AggregateRating` schema.** Not now, not with a placeholder value. Marking up a
  rating without genuinely displayed on-page reviews is a Google guideline violation and
  carries manual-action risk.
- **No star ratings displayed anywhere** until real reviews are collected and shown.
- **No review counts.** `business-facts.md` records third-party counts (30 on Thumbtack,
  116 on Atly) — those are **not** publishable as on-site claims.
- **No invented reviews, names, dogs, cities, or quotes.** Ever.
- **No "5-star," "top-rated," "#1," "best of," or award language** anywhere on the domain.
- A Google Business Profile was **not found** for this business. There may be nothing to
  embed yet. See `business-facts.md`.

---

## META

**Title:** `Reviews — Floppy Ears Ranch, Corona CA Dog Training`

**Meta description:** `Client reviews and video testimonials for Floppy Ears Ranch, a family owned dog training and boarding facility on 5 acres in Corona, California.`

**Breadcrumb:** Home › Reviews

---

## SECTION 1 — H1 + DIRECT ANSWER

**H1**
# What Our Clients Say

**Direct answer** *(styled `--t-lead`)*

Reviews and video testimonials from clients of Floppy Ears Ranch in Corona, California. Every review on this page is from a real client who agreed to be quoted by name, and every video is posted with the owner's written permission. We don't publish anything we can't stand behind, which is why this page is shorter than some.

**Primary CTA:** Tell Us About Your Dog → `/book-evaluation/`
**Secondary CTA:** Call [PHONE] → `tel:[PHONE]`

---

## SECTION 2 — HOW TO READ A DOG TRAINER'S REVIEWS

**H2**
## How to read a dog trainer's reviews — including ours

Worth saying before you scroll.

**Look for specifics.** "Amazing experience, highly recommend" tells you nothing. "Our shepherd used to lunge at every dog on the block and now we walk past them" tells you what changed. Detail is the signal.

**Look for the problem, not the praise.** A useful review names the behavior the person walked in with. If nobody's reviews mention a problem resembling yours, that's information.

**Be suspicious of unbroken perfection.** Every training business has clients who didn't do the homework, wanted a guarantee, or weren't a fit. A page with nothing but superlatives has been curated.

**Check whether they're verifiable.** Reviews you can trace to a platform, a real name, or a video of the actual dog beat an anonymous block quote on a website.

**Then go look at the dog.** Footage of the same dog and the same owner before and after is worth more than any amount of text.

**Link:** See real training results → `/dog-training-results/`

---

## SECTION 3 — VIDEO TESTIMONIALS

**H2**
## Video testimonials

**Grid of video cards.** Each: thumbnail with a facade, client first name, dog's name, the program, and one line naming the problem.

⚠️ **PLACEHOLDER — no content written.** Requires filmed testimonials and a **signed
client release** for each covering name, dog, footage, and use. Do not populate with
stock, do not populate with invented names, and do not render this section as an empty
grid. Until at least one real video exists, the section is hidden.

**Schema when populated:** `VideoObject` per video with `name`, `description`,
`thumbnailUrl`, `uploadDate`, and `duration`. `Review` markup only when the review text is
genuinely rendered on the page and attributed to a named author.

---

## SECTION 4 — WRITTEN REVIEWS

**H2**
## Written reviews

**Card grid.** Each card: the review text, client first name and last initial, dog's name and breed, city, and the program they booked.

⚠️ **PLACEHOLDER — no content written.** Requires real reviews collected directly from
clients with **written permission to publish**, including permission to use the dog's name
and the client's city. Until those exist, this section is hidden.

**Filter (when there's enough volume to justify it):** All · Board & Train · Aggression ·
Reactivity · Puppy · Boarding · Daycare

---

## SECTION 5 — REVIEWS ON OTHER PLATFORMS

**H2**
## Find us on

Links out to whichever platforms have live, real profiles.

⚠️ **BUILD NOTE — link only to profiles that exist and are current.** `business-facts.md`
records that no Google Business Profile was found for this business, and that all footer
social links on the current site point to bare platform homepages rather than real
profiles. **Verify every destination before it ships.** No dead links, and no embedded
review widget pulling from a profile that doesn't exist.

**Do not display a rating, a star count, or a review total pulled from any of these
platforms.** Linking out is fine. Restating their numbers as an on-site claim is not.

---

## SECTION 6 — LEAVE A REVIEW

**H2**
## Trained or boarded with us?

Tell people what actually happened. The specific version helps somebody in the same situation far more than a generous one — name the behavior you walked in with, what changed, and what didn't.

If you'd be willing to be filmed with your dog, we'd like that even more. Video of a real dog is the most useful thing a prospective client can see, and we'll never post one without your written permission.

**CTA:** Leave a Review → *[review platform link]*
**CTA:** Share Your Dog's Story → `/contact/`

⚠️ **TODO — confirm the review destination.** No Google Business Profile was found. If one
is created, that becomes the primary destination. Until then this CTA points wherever a
real, live profile exists.

**⚠️ Review-gating is prohibited.** Never route happy clients to a public platform and
unhappy ones to a private form. It violates Google's policies and it is the exact behavior
this page's §2 tells people to look out for.

---

## SECTION 7 — FINAL CTA

**H2**
## Tell us about your dog

Reviews are somebody else's dog. Yours is the one you care about — tell us what's going on with them and we'll tell you honestly what we'd do about it. The first conversation is free.

**Primary CTA:** Tell Us About Your Dog → `/book-evaluation/`
**Secondary CTA:** Call [PHONE] → `tel:[PHONE]`

**Beneath:** Floppy Ears Ranch · 21761 Knabe Rd, Corona, CA 92883 · [HOURS]

---

## BUILD NOTES

- One `<h1>`. Everything else H2/H3.
- **Schema: `BreadcrumbList` only, at launch.** No `AggregateRating`. No `Review` markup
  until real, attributed review text is rendered on the page. This is the highest
  manual-action risk on the domain — treat the constraint as absolute.
- **Three placeholder sections (§3, §4, §5) do not render while empty.** Hide them
  entirely rather than shipping empty grids or "coming soon" copy.
- **This page can launch with only §1, §2, §6, and §7.** That is an acceptable and honest
  version of it, and §2 gives the page genuine standalone value in the meantime.
- One ⚠️ TODO: the review destination in §6, pending a Google Business Profile or another
  live platform profile.
- If a Google reviews widget is added later, it must be lazy-loaded behind a facade and
  must not block render.
- Never route negative feedback away from public platforms. No review gating.
- No star imagery, no "5.0," no counts, no badges, no award graphics anywhere on this page
  or in the site footer.
- Sticky mobile CTA bar.

### Sequencing note for the owners

This page is a frame with nothing in it, and that's the correct state today. The order of
operations is: create and verify a Google Business Profile, ask recent clients for reviews
there, film three to five video testimonials with signed releases, then populate §3 and
§4 and add `Review` markup. Reviews and the case studies on `/dog-training-results/`
should be collected in the same push — they need the same release and the same
conversation.
