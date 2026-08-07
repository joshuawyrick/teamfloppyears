# CONTENT PACK — DOG TRAINING RESULTS

**URL:** `/dog-training-results/`
**The highest-differentiation asset on the site. No competitor in this market has one.**
`[PHONE]` and `[HOURS]` are config tokens. Never guess values.

**⚠️ EVERY CASE STUDY REQUIRES A SIGNED CLIENT RELEASE** covering the dog's name, breed,
the owner's city, the footage, and the written account. The five case study stubs below
are **clearly marked placeholders with no invented content**. Do not invent a dog name, a
breed, a city, a behavior history, or an outcome — not "as an example," not "to show the
layout." A fabricated case study on a page whose entire purpose is proof is the single
most damaging thing that could ship on this domain.

**⚠️ No star ratings, review counts, or `AggregateRating` schema on this page.**
**⚠️ No guaranteed outcomes stated anywhere, especially on aggression cases.**

---

## META

**Title:** `Real Dog Training Results | Floppy Ears Ranch, Corona CA`

**Meta description:** `Before and after dog training results from Floppy Ears Ranch in Corona, CA — real dogs, real owners, filmed. Aggression, reactivity, puppies, obedience, off-leash.`

**Breadcrumb:** Home › Results

---

## SECTION 1 — H1 + DIRECT ANSWER

**H1**
# Real Dog Training Results

**Direct answer** *(styled `--t-lead`)*

Case studies from dogs trained at Floppy Ears Ranch in Corona, California — filmed before and after, same dog, same owner, same house. Each one names the problem the dog walked in with, the program they went through, what changed, and what didn't. Every dog on this page is here with their owner's written permission.

**Primary CTA:** Tell Us About Your Dog → `/book-evaluation/`
**Secondary CTA:** Call [PHONE] → `tel:[PHONE]`

---

## SECTION 2 — WHY THIS PAGE EXISTS

**H2**
## Why we built this page

Anybody can write "life-changing results" on a website. It costs nothing and it proves nothing.

What's harder to fake is footage. A dog on day one, the same dog three weeks later, the same owner holding the same leash in the same neighborhood. If the dog can't do it, the video shows you.

So that's what this is. Not highlight reels — working footage, including the parts where a dog gets it wrong. Every case study names the specific behavior the family came in with and what their life actually looks like now.

**Three things we'll be honest about:**

**These are the dogs whose owners said yes.** Filming and publishing your dog requires a release, and plenty of people would rather not. This page is a sample, not a scorecard.

**Not every case goes this way.** Some dogs improve less than the family hoped. Some homes can't hold the standard after the dog goes home. Some cases we turn down at the evaluation because we don't believe we can make them safe. A results page that reads as though every dog is a triumph is a results page that's been edited.

**Nothing here is a promise about your dog.** Different history, different genetics, different household. What these show you is what the work looks like and what kind of change is possible — not what you're owed.

---

## SECTION 3 — FILTER

**H2**
## Browse by problem

**Filter bar. Seven options. Client-side, no page reload.**

**All** · **Aggression** · **Reactivity** · **Puppies** · **Obedience** · **Off-Leash** · **Board & Train**

**Beneath the filter:** Looking for something specific? Most people start with the problem, not the program.

---

## SECTION 4 — CASE STUDIES

**H2**
## Case studies

**Card grid, 3 across on desktop, 1 on mobile, equal height.**

**Each card shows:** before/after video thumbnail or paired stills · dog's name · breed and age · the problem in one line · the program · the owner's city · a link to the full case study.

**Individual case study URLs:** `/dog-training-results/{dog-slug}/`
Slug format: `reactive-german-shepherd-luna` · `aggressive-rescue-max` ·
`puppy-board-and-train-bella`. **No city in the slug.**

**Five at launch, one per category.**

---

### ⚠️ PLACEHOLDER 1 — AGGRESSION

**Category:** Aggression
**Program:** Behavior Rehabilitation Program — 3 weeks, $3,500
**Status:** ⚠️ Awaiting client selection and signed release. **No content written.**

**Needed from the owners:** the client and dog, a signed release, before footage, after footage, and the trainer's account of the case.
**Needed on the card:** dog name · breed · age · one-line problem · owner's city.
**Needed on the detail page:** the full template in Section 5.

> **Do not populate this stub with an example.** No dog name, no breed, no city, no bite
> history, no outcome. If no aggression case with a release exists at launch, this
> category renders empty and the filter option is hidden.

---

### ⚠️ PLACEHOLDER 2 — REACTIVITY

**Category:** Reactivity
**Program:** ⚠️ To be confirmed with the case
**Status:** ⚠️ Awaiting client selection and signed release. **No content written.**

> Before footage for a reactivity case should be filmed on the walk where the behavior
> actually happens, not on the property. That contrast is the entire value of the case
> study. Do not invent a dog, a trigger, or a neighborhood.

---

### ⚠️ PLACEHOLDER 3 — PUPPIES

**Category:** Puppies
**Program:** Puppy Board & Train — 6 weeks, $3,200
**Status:** ⚠️ Awaiting client selection and signed release. **No content written.**

> Puppy cases benefit from a follow-up filmed six to twelve months later, through
> adolescence — that's the period owners are most worried about and the one nobody
> documents. Flag it as a second shoot when the case is chosen. Do not invent a puppy.

---

### ⚠️ PLACEHOLDER 4 — OBEDIENCE / BOARD & TRAIN

**Category:** Obedience · Board & Train
**Program:** Board & Train — 3 weeks, $2,900
**Status:** ⚠️ Awaiting client selection and signed release. **No content written.**

> This is the highest-volume program and should be the easiest release to obtain. Choose
> an ordinary family dog with ordinary problems — pulling, jumping, no recall — rather
> than the most dramatic case available. Prospective clients need to see themselves.

---

### ⚠️ PLACEHOLDER 5 — OFF-LEASH

**Category:** Off-Leash
**Program:** Off-Leash Reliability Program — $4,500
**Status:** ⚠️ Awaiting client selection and signed release. **No content written.**

> Off-leash footage should show real distraction at real distance, and the transmitter
> level should be visible on camera. That single detail answers the "is an e-collar cruel"
> question more effectively than any paragraph on `/training-methods/`. Do not invent a
> dog or a location.

---

## SECTION 5 — CASE STUDY DETAIL TEMPLATE

**Structure for every `/dog-training-results/{dog-slug}/` page. Not rendered on the index.**

| Block | Contents |
|---|---|
| **H1** | Dog's name and the problem — e.g. the format `[Dog], the [breed] who [behavior]` |
| **The dog** | Name · breed · age · sex · spayed/neutered · owner's city |
| **The problem** | What the family was living with, in their words where possible |
| **History** | How long it had been going on, what triggered it, what they'd already tried |
| **The evaluation** | What we saw at the assessment and what we thought was driving it |
| **The plan** | Program, length, and the specific approach — including which tools and why |
| **Before video** | `VideoObject` schema |
| **Week by week** | What changed and when, including what was harder than expected |
| **After video** | `VideoObject` schema |
| **The transfer session** | How the handoff went and what the owner had to learn |
| **Where they are now** | Follow-up at a stated interval, honest about what still slips |
| **Trainer commentary** | Chad or Kyla, in their own voice, on what made this case what it was |
| **CTA** | Tell Us About Your Dog |

**Schema:** `Article` + `VideoObject` × 2 + `BreadcrumbList`.

**Rules for every detail page:**
- **No guaranteed outcomes**, and none implied. Especially on aggression.
- **Name what didn't fully resolve.** A case study with no residual issues reads as
  marketing and converts worse than an honest one.
- **A management-based outcome is a real outcome.** "This dog will always need a muzzle in
  public and the family is fine with that" is a legitimate, publishable result.
- No city in the URL slug. City appears in the body only, with the release covering it.

---

## SECTION 6 — WHAT WE MEASURE

**H2**
## What "results" means here

Not obedience trophies. Whether the family's daily life changed.

**Can you walk the dog?** Down your own street, past other dogs, without bracing for it.
**Can you have people over?** Without a bedroom door and an apology.
**Can you leave the room?** Without the trash, the counter, or the couch paying for it.
**Can you call your dog and have them come?** The first time, when it matters.
**Can you relax around your own dog?** That's the one people describe last and feel first.

If those changed, the program worked. If your dog can heel beautifully and you still can't have your sister over, it didn't.

---

## SECTION 7 — FINAL CTA

**H2**
## Tell us about your dog

Whatever's on this page, your dog is the one that matters. Tell us what's happening and we'll tell you honestly what we think we can do about it — including if the answer is that we're not the right fit.

The first conversation is free.

**Primary CTA:** Tell Us About Your Dog → `/book-evaluation/`
**Secondary CTA:** Call [PHONE] → `tel:[PHONE]`

**Beneath:** Floppy Ears Ranch · 21761 Knabe Rd, Corona, CA 92883 · [HOURS]

---

## BUILD NOTES

- One `<h1>`. Everything else H2/H3.
- **Index schema:** `CollectionPage` + `BreadcrumbList`. Detail pages get `Article` +
  `VideoObject`. **No `AggregateRating` anywhere.**
- **Filter is a JavaScript island** — one of only four on the site per `tech-spec.md`. It
  must degrade gracefully: with JS off, all case studies render in one list and the filter
  bar is hidden.
- **A filter category with zero published case studies is hidden**, not shown empty.
- If **no** case studies have releases at launch, the page ships with §1, §2, §6, and §7
  only, and §4 is hidden. That's an honest page. An invented one is not.
- All video uses a facade, not an autoloaded embed. `width` and `height` on every
  thumbnail. Lazy-load below the fold.
- Before/after stills need real descriptive alt text naming what the photo shows —
  e.g. *"[Dog name] lunging at the end of the leash during the initial evaluation"* — never
  `"before"`, `"after"`, or a keyword string.
- Prices on cards import from the pricing config. Never hard-coded.
- **Five ⚠️ PLACEHOLDER blocks in §4**, each requiring a signed client release before any
  content is written. This is the gating item for the whole page.
- Collect releases in the same push as `/reviews/` — same clients, same conversation, same
  paperwork.
- Linked from `/` §8, `/board-and-train/` §11, and every service page's results section.
- Sticky mobile CTA bar.
