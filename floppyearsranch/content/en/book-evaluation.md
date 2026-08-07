# CONTENT PACK — BOOK AN EVALUATION

**URL:** `/book-evaluation/`
**The primary lead form on the domain. The form is the page.**
**Implement verbatim.** `[PHONE]` and `[HOURS]` are config tokens. Never guess values.
**Submit button reads "Get My Training Recommendation."** Never "Submit."
**NO CAPTCHA.** Honeypot field only, hidden via CSS. See `tech-spec.md`.

---

## META

**Title:** `Request a Free Dog Training Evaluation | Floppy Ears Ranch`

**Meta description:** `Tell us about your dog and get a straight training recommendation. Free 30-minute phone consultation, no obligation. Corona, CA — serving Southern California.`

**Breadcrumb:** Home › Request an Evaluation

---

## SECTION 1 — H1 + DIRECT ANSWER

**H1**
# Tell Us About Your Dog

**Direct answer** *(styled `--t-lead`)*

Answer a few questions about your dog and we'll come back with a straight recommendation — which program we'd suggest, what it would cost, and roughly how long it would take. The first conversation is a free 30-minute phone or video consultation. Nothing is booked and nothing is charged until you decide to move forward.

**Takes about three minutes. Three short steps.**

---

## SECTION 2 — WHAT HAPPENS AFTER YOU SUBMIT

**H2**
## What happens after you hit send

**1. You hear from us within one business day.** Usually the same day. It's Chad, Kyla, or Jose — there's no call center and nobody is selling your information to a lead service.

**2. We book your free consultation.** Thirty minutes, phone or video, no charge and no obligation. You tell us what's happening, what you've tried, and what you want to be different. We ask about history, health, and your household.

**3. You get an honest recommendation.** Including when the honest answer is a cheaper program than the one you asked about, or a different trainer entirely. A client who books the wrong thing is a bad outcome for both of us.

**4. If it's a fit, you come out.** A $50 in-person evaluation at the ranch — about an hour. We assess your dog, you walk the five acres and meet everyone, and you leave with a specific program and a specific price. The $50 comes off whatever you book.

That's the whole funnel. No sales sequence, no drip campaign, no pressure.

---

## SECTION 3 — THE FORM

**H2**
## Start here

**3-step form with a progress indicator. Full field list in `tech-spec.md`.**

**Step 1 — Your dog**
*Tell us who we're talking about.*
Dog's name · Breed · Age · Sex · Spayed or neutered (Yes / No / Not sure)

**Step 2 — What's going on**
*Be specific. The messier the truth, the more useful our answer.*
What would you like help with? *(multi-select: Board & Train · Aggression · Reactivity · Puppy training · Obedience · Private training · Off-leash · Not sure)*
What behaviors are you experiencing? *(textarea)*
**Has your dog ever bitten a person or another dog?** *(Yes / No / Not sure — required)*
What result would you most like to achieve? *(textarea)*

**Step 3 — You**
*So we can get back to you.*
Name · Phone · Email · City · How soon would you like to begin? *(Immediately / 1–2 weeks / 1 month / Just researching)* · How did you hear about us? · Photo of your dog *(optional)*

**Submit button: Get My Training Recommendation**

**Beneath the button:**
Free 30-minute consultation · No obligation · We answer within one business day
Prefer to talk now? Call or text [PHONE] → `tel:[PHONE]`

---

## SECTION 4 — ABOUT THE BITE QUESTION

**H2**
## About the bite history question

We ask it directly and it's required, so here's why.

Answer it honestly. A yes doesn't disqualify your dog — it routes your inquiry to a priority queue and it tells us to plan the evaluation differently, with the right handling and the right safety in place from the first minute. We run a program specifically for these cases.

What causes problems is finding out later. A dog with an undisclosed bite history is a safety risk to our staff, to other dogs on the property, and to the dog themselves, because we'll have assessed them wrong.

Nobody here is going to judge you. A large share of the dogs that come through this facility have bitten someone. That's the work.

**Link:** Aggression and bite history cases → `/aggressive-dog-training/`

---

## SECTION 5 — WHAT THIS ISN'T

**H2**
## What you're not signing up for

- **You're not booking anything.** The form starts a conversation.
- **You're not paying anything.** The consultation is free.
- **You're not going on a list.** We don't run a drip campaign and we don't sell or share your information.
- **You won't get a sales pitch.** You'll get a recommendation, and sometimes that recommendation is "you don't need us."

---

## SECTION 6 — TESTIMONIALS

**Three short testimonials, directly below the form.**

⚠️ **PLACEHOLDER — do not publish invented testimonials.** Three real quotes go here, each
with a first name, the dog's name, and the program. **A signed client release is required
for every one.** Until releases exist, this section does not render — build it, leave it
empty, and ship the page without it.

**Do not add star ratings, review counts, or `AggregateRating` schema anywhere on this
page.** See `business-facts.md`.

**Link:** Reviews → `/reviews/`

---

## SECTION 7 — OTHER WAYS TO START

**H2**
## Or skip the form

**Call or text [PHONE].** Fastest route to an answer.
**Book a tour.** Free, about twenty minutes, no commitment. Come walk the five acres and see where your dog would stay.
**Booking boarding or daycare instead?** That's a reservation, not an evaluation → *[booking system]*

**Beneath:** Floppy Ears Ranch · 21761 Knabe Rd, Corona, CA 92883 · Drop-off and pickup 8:00am–8:00pm · [HOURS]

---

## BUILD NOTES

- One `<h1>`. Everything else H2/H3.
- **The form is above the fold on desktop and immediately reachable on mobile.** Section 2
  sits beside it on desktop, beneath it on mobile — never above it.
- **Submit button text is "Get My Training Recommendation."** Not "Submit," not "Send."
- **No CAPTCHA.** Honeypot field hidden via CSS only. A CAPTCHA on the primary lead form
  of a small local business costs more real submissions than it blocks spam.
- Client and server validation with inline errors. The bite-history question is required
  and a `Yes` or `Not sure` routes the submission to a priority queue.
- Multi-step behavior is the only JavaScript island on this page. **The form must still
  submit with JavaScript disabled** — degrade to a single long form rather than a dead page.
- Redirect to `/thank-you/` (`noindex`) on success, for clean conversion tracking.
- Email to the business plus an autoresponder to the customer confirming the one-business-day
  response window.
- GA4: `form_start` on first field focus, `form_submit` on success, `tour_request` if the
  tour path is used.
- File upload on the optional dog photo: images only, size-capped, and never required.
- `ContactPage` + `BreadcrumbList` schema. **No `FAQPage` on this page** — keep the
  conversion path clean.
- Testimonial block (§6) stays unrendered until signed releases exist. Never invent one.
- 301 target for `teamfloppyears.com/service-requests/`, per `tech-spec.md`.
- Sticky mobile CTA bar reading "Call [PHONE]" — on this page the sticky bar is the phone,
  not the form, since the form is already the page.
