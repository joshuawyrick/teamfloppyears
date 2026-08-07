# CONTENT PACK — CONTACT

**URL:** `/contact/`
**Implement verbatim.** `[PHONE]`, `[EMAIL]`, and `[HOURS]` are config tokens.
**Never guess values.**

**⚠️ This page fixes the single biggest failure of the current site, which hides its
contact information.** Phone, address, and hours must be visible above the fold, in plain
text, selectable and tappable — not baked into an image, not behind a form, not only in
the footer.

**⚠️ THE PHONE NUMBER IS A LAUNCH BLOCKER.** Two numbers are in circulation —
`562-544-2965` on their site and `(951) 454-6773` on a directory listing.
`business-facts.md` marks it UNCONFIRMED. The 951 area code is local to Riverside County
and is the better choice if both work. **Nothing publishes until one number is confirmed.**

---

## META

**Title:** `Contact Floppy Ears Ranch — Corona, CA Dog Training & Boarding`

**Meta description:** `Call, text, or email Floppy Ears Ranch at 21761 Knabe Rd, Corona, CA 92883. Directions from the 91 and the 15, hours, and a form that gets a real answer.`

**Breadcrumb:** Home › Contact

---

## SECTION 1 — H1 + DIRECT ANSWER

**H1**
# Contact Floppy Ears Ranch

**Direct answer** *(styled `--t-lead`)*

Floppy Ears Ranch is at 21761 Knabe Rd, Corona, CA 92883, in the Temescal Valley area of Riverside County. Call or text [PHONE], email [EMAIL], or send the form below. Drop-off and pickup run 8:00am to 8:00pm. We answer inquiries within one business day and usually the same day — there are three of us and one of us will get back to you personally.

**Primary CTA:** Call [PHONE] → `tel:[PHONE]`
**Secondary CTA:** Text Us → `sms:[PHONE]`

---

## SECTION 2 — HOW TO REACH US

**H2**
## How to reach us

**Four contact cards, equal height, no icons-only. Every value is real text, tappable.**

**Call**
[PHONE]
Fastest way to get an answer. A person picks up.
→ `tel:[PHONE]`

**Text**
[PHONE]
Same number. Good for quick questions, photos of your dog, and scheduling.
→ `sms:[PHONE]`

**Email**
[EMAIL]
Best for vaccination records and anything with an attachment.
→ `mailto:[EMAIL]`

**Form**
Tell us about your dog and we'll come back with a recommendation.
→ `/book-evaluation/`

⚠️ **TODO — email address is unconfirmed.** `business-facts.md` marks it UNCONFIRMED. A
real, monitored address must exist before launch — it also populates the `email` field in
`LocalBusiness` schema, which currently reads `TODO_CONFIRMED_EMAIL` in `tech-spec.md`.

---

## SECTION 3 — WHERE WE ARE

**H2**
## Where we are

**Floppy Ears Ranch**
**21761 Knabe Rd**
**Corona, CA 92883**
Temescal Valley · Riverside County

*Legal entity: Team Floppy Ears, LLC*

**Embedded map**, lazy-loaded with a static image facade so it doesn't cost you the page speed.

**Buttons beneath the map:**
Get Directions in Google Maps · Open in Apple Maps · Copy Address

**Image:** The ranch entrance and signage from the road.
*Alt: "The entrance and sign at Floppy Ears Ranch, 21761 Knabe Rd, Corona, California"*

---

## SECTION 4 — HOURS

**H2**
## Hours

| | |
|---|---|
| **Drop-off and pickup** | 8:00am – 8:00pm |
| **Daycare** | 12 hours a day, 7 days a week |
| **Office and phone** | [HOURS] |
| **Tours** | Free, about 20 minutes, most days — call ahead so someone's free to walk you around |

⚠️ **TODO — general business hours are unconfirmed.** `business-facts.md` notes that the
8:00am–8:00pm drop-off/pickup window is the only published hours information anywhere.
Confirm real office and phone hours before launch — they populate
`openingHoursSpecification` in schema and the Google Business Profile, which must match
byte for byte.

---

## SECTION 5 — DRIVING DIRECTIONS

**H2**
## How to get here

We're in the Temescal Valley area of Corona, off the 15 and south of the 91/15 interchange. If you've only driven through Corona on the 91, this is a few minutes further south than you're picturing.

**H3**
### Coming from the 91 — Riverside, Norco, Eastvale, Orange County

Take the **91 to the 15 South**. Stay on the 15 South through Corona and past the Cajalco Road exits into Temescal Valley, then exit for Knabe Rd.

From **Yorba Linda, Anaheim Hills, Brea, or Fullerton**, typically 25 to 40 minutes. From **Riverside or Norco**, 15 to 25. From **Long Beach, Whittier, or the San Gabriel Valley**, about an hour depending on traffic.

**H3**
### Coming from the 15 — Ontario, Rancho Cucamonga, Fontana, Chino

Take the **15 South** through Corona, past the 91 interchange, and keep going south into Temescal Valley. Exit for Knabe Rd. From **Ontario or Rancho Cucamonga**, usually 30 to 45 minutes.

**H3**
### Coming from the south — Lake Elsinore, Murrieta, Temecula

Take the **15 North** through Lake Elsinore into Temescal Valley and exit for Knabe Rd. Roughly 15 to 20 minutes from Lake Elsinore, 35 to 45 from Temecula.

**H3**
### When you arrive

Stay in your vehicle until someone comes out to meet you, especially with a dog. **Leash on before the door opens** — a parking area is where dogs get loose, and it's the one part of a visit we're rigid about.

⚠️ **TODO — confirm the specific exit and the last turn onto Knabe Rd with the owners,
and confirm the parking and arrival procedure.** The freeway routing above is accurate at
the county level. The final approach and on-site arrival instructions should be verified
against how they actually direct clients, and drive times should be sanity-checked.

**Link:** All service areas and drive times → `/service-areas/`

---

## SECTION 6 — WHAT HAPPENS WHEN YOU REACH OUT

**H2**
## What happens after you contact us

You'll hear back within one business day, usually the same day. There's no call center and no lead-routing service — it's Chad, Kyla, or Jose.

If you're inquiring about training, the next step is a **free 30-minute phone or video consultation**. Nothing is booked on that call and nothing is charged. If your dog has bitten a person or another dog, say so when you reach out — those go into a priority queue rather than the ordinary one.

**CTA:** Tell Us About Your Dog → `/book-evaluation/`
**Link:** Book a boarding or daycare reservation → *[booking system]*

---

## SECTION 7 — FIND US ELSEWHERE

**H2**
## Find us elsewhere

Instagram · Facebook · YouTube · TikTok · Patreon

⚠️ **BUILD NOTE — every social icon must link to the real profile URL in
`business-facts.md`.** The current site's footer icons all point at bare platform
homepages, which reaches nobody. TikTok is not linked anywhere on the current site and
should be. The Twitter/X and Pinterest icons link nowhere real — **find the profiles or
remove the icons.** No dead icons ship.

---

## SECTION 8 — FINAL CTA

**H2**
## Tell us about your dog

Whatever's going on, start by telling us about it. The first conversation is free and there's nothing to commit to.

**Primary CTA:** Tell Us About Your Dog → `/book-evaluation/`
**Secondary CTA:** Call [PHONE] → `tel:[PHONE]`

**Beneath:** Floppy Ears Ranch · Team Floppy Ears, LLC · 21761 Knabe Rd, Corona, CA 92883 · Drop-off and pickup 8:00am–8:00pm · [HOURS]

---

## BUILD NOTES

- One `<h1>`. Everything else H2/H3.
- **NAP must be byte-identical** to `business-facts.md`, the footer, the Google Business
  Profile, Bing Places, Apple Business Connect, Yelp, and Facebook. Inconsistency here is
  the most common reason AI search engines skip a local business. Do not abbreviate
  "Road," do not add a suite, do not reformat the ZIP.
- Address, phone, and hours render as **selectable plain text** — never inside an image,
  never behind a form, never JavaScript-only.
- `ContactPage` + `LocalBusiness` (reference `#business`) + `BreadcrumbList` schema, with
  `telephone`, `email`, `address`, `geo`, and `openingHoursSpecification` populated from
  confirmed values only.
- **Map is a static-image facade** that loads the real embed on click. A raw Google Maps
  iframe on a contact page is usually the largest single performance cost on the site.
- `tel:` and `sms:` links must both work on mobile and both fire GA4 `tel_click` and
  `sms_click` events. CallRail dynamic number insertion applies here.
- **Four ⚠️ TODO blockers before launch:** the phone number (page header — hard blocker),
  the email address (§2), business hours (§4), and the final approach, drive times, and
  arrival procedure (§5).
- Every social icon points at a real profile URL or is removed. No bare platform
  homepages.
- Add `/contact/` as the 301 target for `teamfloppyears.com/contact-us/` and
  `teamfloppyears.com/forms/`, per `tech-spec.md`.
- Sticky mobile call bar, as on every page.
