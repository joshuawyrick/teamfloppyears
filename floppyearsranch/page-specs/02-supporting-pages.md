# PAGE SPECIFICATION — SUPPORTING PAGES

Services, trust pages, service areas, resources, and utility pages. All follow the same
12-part commercial skeleton from `01-money-pages.md` unless noted.

---

# REMAINING SERVICE PAGES

## `/dog-obedience-training/`
**Primary:** dog obedience training Corona CA
**Secondary:** obedience classes Riverside County · basic obedience training near me · dog commands training Corona · obedience school for dogs Inland Empire
**Title:** `Dog Obedience Training in Corona, CA | Floppy Ears Ranch`
**Meta:** `Obedience training in Corona, CA — sit, down, stay, heel, place, recall, and loose-leash walking. Board & Train or private lessons. Request a free evaluation.`
**H1:** Dog Obedience Training in Corona, CA
**Words:** 1,400–1,700 · **CTA:** Request a Free Evaluation

```
H2  What Obedience Training Covers
    H3 Sit, down, stay   H3 Place   H3 Heel and loose-leash walking
    H3 Recall   H3 Leave it   H3 Door manners   H3 Impulse control
H2  Why Obedience Fixes More Than You'd Expect
H2  How We Teach It — Marker Training
H2  Obedience Through Board & Train
H2  Obedience Through Private Lessons
H2  Results   H2  Pricing   H2  FAQ   H2  CTA
```

## `/off-leash-dog-training/`
**Primary:** off leash dog training Corona CA
**Secondary:** e collar training Corona CA · off leash training Southern California · reliable recall training Riverside County · remote collar training near me · is e collar training safe
**Title:** `Off-Leash Dog Training in Corona, CA — $4,500 | Floppy Ears Ranch`
**Meta:** `Off-leash reliability training in Corona, CA. Rock-solid recall and obedience around real-world distractions. E-collar included. See if your dog qualifies.`
**H1:** Off-Leash Dog Training & Reliable Recall
**Words:** 1,600–2,000 · **CTA:** See If Your Dog Is Ready

```
H2  What Off-Leash Reliability Actually Means
H2  Is Your Dog a Candidate?
H2  What We Train
    H3 Recall under distraction   H3 Heel off leash   H3 Distance commands
    H3 Place and stay at a distance   H3 Public environments
H2  How We Use an E-Collar — Honestly
    [state it plainly. Own the keywords. Show video.]
H2  Is E-Collar Training Safe?      ← key AEO question
H2  California Leash Laws — What Off-Leash Does and Doesn't Mean
    [legal honesty; builds trust and earns links]
H2  The Off-Leash Reliability Program — $4,500
H2  Results   H2  FAQ   H2  CTA
```

## `/dog-daycare/`
**Primary:** dog daycare Corona CA
**Secondary:** doggy daycare Norco · dog daycare Eastvale · kennel free daycare Corona · dog daycare near me · doggy day care Riverside County
**Title:** `Dog Daycare in Corona, CA — $40/Day | Floppy Ears Ranch`
**Meta:** `Kennel-free dog daycare in Corona, CA. Cooled turf, shade, pools, and trainer supervision, 12 hours a day, 7 days a week. $40/day. Check availability.`
**H1:** Dog Daycare in Corona, California
**Words:** 1,200–1,500 · **CTA:** Check Availability
**⚠️ Ring 1 geography only** — Corona, Norco, Eastvale, Temescal Valley, west Riverside, Jurupa Valley. Do **not** target Irvine or anywhere in Ring 3.

```
H2  Kennel-Free Daycare in the Jax Weller Arena
H2  What a Day Looks Like
H2  Why Trainer-Run Daycare Is Different
H2  The Assessment
H2  Who Daycare Is Right For — And Who It Isn't
H2  Rates and Packages
H2  Vaccination Requirements
H2  Areas We Serve for Daycare
H2  FAQ   H2  Check Availability
```

## `/boarding-reactive-aggressive-dogs/`
**Primary:** boarding for aggressive dogs near Corona CA
**Secondary:** reactive dog boarding Riverside County · where to board an aggressive dog · dog boarding that accepts reactive dogs · boarding for dogs that don't like other dogs
**Title:** `Boarding for Reactive & Aggressive Dogs Near Corona, CA | Floppy Ears Ranch`
**Meta:** `Most boarding facilities turn reactive and aggressive dogs away. We evaluate each dog individually to determine whether we can board them safely. Corona, CA.`
**H1:** Dog Boarding for Reactive & Aggressive Dogs
**Words:** 1,200–1,500 · **CTA:** Request an Assessment

Specialty page and a genuine three-way funnel — routes to specialty boarding, aggression training, and Board & Train. Very low competition, high desperation, high intent.

> ⚠️ **This is not a promise to accept every dog.** Copy must state clearly that acceptance depends on an individual assessment.

---

# TRUST & CONVERSION PAGES

## `/book-evaluation/` — the primary lead form
**Title:** `Request a Free Dog Training Evaluation | Floppy Ears Ranch`
**H1:** Tell Us About Your Dog
**Words:** 400–600 (form is the page)

3-step form per `tech-spec.md`. Submit button: **"Get My Training Recommendation."**
Above the form: what happens after you submit, response time, and that the phone consult is free. Below: 3 short testimonials.
**No CAPTCHA.** Honeypot only.

## `/contact/`
**Primary:** dog trainer Corona CA contact
**Title:** `Contact Floppy Ears Ranch — Corona, CA Dog Training & Boarding`
**H1:** Contact Floppy Ears Ranch
Full NAP, embedded map, hours, driving directions from the 91 and the 15, phone, text, email, form. **Everything the current site hides.**

## `/dog-training-results/` — case study index
**Primary:** dog training before and after
**Title:** `Real Dog Training Results | Floppy Ears Ranch, Corona CA`
**H1:** Real Dog Training Results
Filter: All · Aggression · Reactivity · Puppies · Obedience · Off-Leash · Board & Train

**This is the highest-differentiation asset on the site.** No competitor in this market has it.

### Individual case studies — `/dog-training-results/{dog-slug}/`
Slug format: `reactive-german-shepherd-luna`, `aggressive-rescue-max`, `puppy-board-and-train-bella`. **No cities in slugs.**

Each page: Dog · Breed · Age · Owner location · Problem · Program · Before · Assessment · Training plan · Video · Progress · Transfer session · Result · Follow-up · Trainer commentary
**Schema:** `Article` + `VideoObject`
**⚠️ Requires a signed client release** for name, breed, city, and footage.

Five at launch, one per category.

## `/reviews/`
**Title:** `Reviews — Floppy Ears Ranch, Corona CA Dog Training`
**H1:** What Our Clients Say
Embedded Google reviews + video testimonials + written reviews with dog name and city.
**⚠️ No `AggregateRating` schema until real reviews are displayed on-page.**

## `/facility/`
**Primary:** dog training facility Corona CA
**H1:** Our 5-Acre Facility in Corona, California
Photo-led. Grounds, kennels, arena, training areas, climate control, safety, cleaning protocol, tour booking CTA. Links to `/jax-weller-arena/`.

## `/jax-weller-arena/`
**Primary:** kennel free dog daycare Corona CA
**H1:** The Jax Weller Arena
**⚠️ BLOCKED — do not build until `business-facts.md` explains what "Weller" means.**

Memorial + facility page. Jax's full story: Kyla's 2012 shelter adoption, the dog whose behavior problems started the business, AKC CGC certified, service medical alert dog, TFE training assistant, died in April. Then the arena built in his honor and what it offers today.

This is the most emotionally powerful asset the business owns and it currently gets one sentence inside a shop listing. Link-worthy, shareable, strong E-E-A-T.

## `/meet-the-team/`
**H1:** Meet the Team
Chad, Kyla, Jose — full bios from `business-facts.md`.
**Schema:** `Person` × 3 with `hasCredential`.
**⚠️ Confirmed credentials only** — IACP member and AKC CGC Evaluator. Nothing else.

## `/about/`
**H1:** About Floppy Ears Ranch
Founded 2019. Family owned. The Jax origin. 200+ pit bull rescues. What they believe. Why the ranch exists.

## `/training-methods/`
**Primary:** balanced dog training Riverside County
**Secondary:** e collar training Corona CA · is e collar training cruel · prong collar vs e collar · marker training explained · balanced vs positive reinforcement training
**H1:** How We Train
**Words:** 1,400–1,800

State the position plainly: relationship building first, marker training foundation, corrections used with clear communication, e-collar in the off-leash program. Explain when, why, and what the alternative is. Show video.

> Both training camps convert. **Hiding which camp you're in is what destroys trust** — and produces refunds and one-star reviews when a client finds out mid-program.

## `/safety-and-care/`
**H1:** Safety, Health & Daily Care
Staff-to-dog ratio · overnight coverage (⚠️ resolve the 24/7-vs-12-hour contradiction) · vaccination requirements · emergency vet protocol and partner clinic · feeding and medication · cleaning and sanitization · heat safety (Inland Empire summers) · insurance status (⚠️ if confirmed)

## `/faq/`
**H1:** Frequently Asked Questions
Sitewide FAQ, categorized. `FAQPage` schema. Questions must not duplicate service-page FAQs verbatim — cross-link instead.

---

# SERVICE AREAS

**Hard rule:** Ring 3 pages (Orange County, San Bernardino County) offer **Board & Train and behavior work only**. No daycare. No boarding. Nobody drives 90 minutes daily.

Each page: 900–1,300 words. Genuinely localized — real landmarks, real freeway routes, real drive times, real local context. **Not a template with the city name swapped.** That's what gets a page classified as a doorway.

## `/service-areas/` — hub
**H1:** Dog Training Service Areas in Southern California
Map, ring explanation, links to all six, plus a note on which services reach how far.

## `/service-areas/norco/` — Ring 1, all services
**Primary:** dog training Norco CA · **Secondary:** dog trainer Norco · board and train Norco CA · dog boarding Norco CA · dog daycare Norco
**H1:** Dog Training & Boarding in Norco, CA
Angle: Norco is Horsetown USA — a genuinely horse-and-dog town with large properties and working-animal culture. Drive time ~10 min. Lean into the shared rural-property context.

## `/service-areas/eastvale/` — Ring 1, all services
**Primary:** dog training Eastvale CA · **Secondary:** dog trainer Eastvale · board and train Eastvale · dog boarding Eastvale CA · puppy training Eastvale
**H1:** Dog Training & Boarding in Eastvale, CA
Angle: young, affluent, family-heavy, lots of new-family puppies. Emphasize puppy training and family-dog manners. ~15 min.

## `/service-areas/riverside/` — Ring 1–2, all services
**Primary:** dog training Riverside CA · **Secondary:** dog trainer Riverside CA · board and train Riverside CA · dog boarding Riverside County · aggressive dog training Riverside
**H1:** Dog Training & Boarding Near Riverside, CA
Largest city in the county, most competitive term. Deepest page of the service-area set.

## `/service-areas/inland-empire/` — Ring 2
**Primary:** dog training Inland Empire · **Secondary:** board and train Inland Empire · dog trainer Ontario CA · dog training Rancho Cucamonga · dog training Chino Hills · dog training Fontana
**H1:** Dog Training & Board and Train in the Inland Empire
Sections for Ontario, Rancho Cucamonga, Fontana, Chino, Chino Hills, Upland, Jurupa Valley. Competitor Empire K9 explicitly targets the regional phrase, which confirms it's commercially useful.

## `/service-areas/orange-county/` — Ring 3, ⚠️ B&T + behavior ONLY
**Primary:** board and train Orange County · **Secondary:** dog trainer Orange County · aggressive dog training Orange County · dog training Yorba Linda · dog training Anaheim Hills · board and train Irvine
**H1:** Board & Train and Behavior Training for Orange County
**Angle — lead with this:** Corona sits on the 91/15 interchange. 25–40 minutes to Yorba Linda, Anaheim Hills, Brea, and Fullerton; 40–55 to Irvine and Newport. For a program you drop off and pick up twice, that's nothing — and you get 5 acres instead of a strip-mall training room.
Sections for: Yorba Linda · Anaheim Hills · Brea · Fullerton · Placentia · Orange · Irvine · Tustin · Costa Mesa · Newport Beach · Huntington Beach · Mission Viejo
**Explicit line required:** daycare and routine boarding are not offered at this distance.

## `/service-areas/san-bernardino-county/` — Ring 3, ⚠️ B&T + behavior ONLY
**Primary:** board and train San Bernardino County · **Secondary:** dog trainer San Bernardino · dog training Redlands · dog training Upland · board and train Rancho Cucamonga
**H1:** Board & Train and Behavior Training for San Bernardino County

### Expansion rule
Build a dedicated city page **only** when Search Console shows a specific query with real impressions and a position outside the top 10. Example: `board and train yorba linda` at 1,800 impressions, position 17 → build `/service-areas/yorba-linda/`. Data-driven, never speculative.

---

# RESOURCES

Seven articles at launch. Every one supports a money page. No general-interest blogging.

| URL | H1 | Primary keyword | Supports | Words |
|---|---|---|---|---|
| `/resources/board-and-train-cost/` | How Much Does Board & Train Cost in Southern California? | board and train cost California | `/board-and-train/` | 1,800–2,200 |
| `/resources/is-board-and-train-worth-it/` | Is Board & Train Worth It? An Honest Answer | is board and train worth it | `/board-and-train/` | 1,600–2,000 |
| `/resources/reactive-vs-aggressive-dog/` | Reactive Dog vs. Aggressive Dog: What's the Difference? | reactive vs aggressive dog | `/reactive-dog-training/` + `/aggressive-dog-training/` | 1,600–2,000 |
| `/resources/how-to-choose-a-dog-trainer/` | How to Choose a Dog Trainer (Including the Red Flags) | how to choose a dog trainer | `/book-evaluation/` | 1,800–2,200 |
| `/resources/boarding-a-reactive-dog/` | Can You Board a Reactive Dog? | boarding a reactive dog | `/boarding-reactive-aggressive-dogs/` | 1,200–1,500 |
| `/resources/what-vaccinations-does-my-dog-need-for-boarding/` | What Vaccinations Does My Dog Need for Boarding in California? | dog boarding vaccination requirements California | `/dog-boarding/` | 1,000–1,300 |
| `/resources/what-to-expect-board-and-train/` | What to Expect from Board & Train: A Complete Prep Guide | what to expect board and train | `/board-and-train/` | 1,400–1,800 |

### `/resources/board-and-train-cost/` — the single highest-ROI asset

Nobody local owns the cost keywords. Sit Means Sit and World of Dog Training rank on cost content but neither is Corona-local.

**Must include a real price comparison table** — these get lifted verbatim into AI answers:

| Program length | SoCal market range | Floppy Ears Ranch |
|---|---|---|
| 2 weeks | $2,400–$4,000 | — |
| 3 weeks | $2,900–$5,500 | **$2,900** |
| 6 weeks (puppy) | $3,200–$7,500 | **$3,200** |
| Aggression / behavior | $3,500–$7,500 | **$3,500** |
| Off-leash | $4,000–$8,000 | **$4,500** |

Then: what drives the price · what's included vs. what usually isn't · why SoCal runs 20–30% above national averages · **why a sub-$800 two-week program is a red flag** · financing · what you're actually buying.

Also cover: how much a dog trainer costs per hour · aggressive dog training cost · daycare and boarding rates · payment plans.

### `/resources/how-to-choose-a-dog-trainer/` — the AEO workhorse

Written as a genuinely useful buyer's guide, not a pitch. Cover: certifications and what each actually means (CPDT-KA, CDBC, IACP CDT, AKC CGC Evaluator) · the fact that dog training is unlicensed in the US · methods transparency · **can you tour the facility unannounced** (the #1 red flag if not) · where dogs sleep · update cadence · what happens at handoff · staff-to-dog ratio · overnight coverage · vaccination requirements · vet protocol · insurance · deposit and cancellation terms · reviews · red flags · **questions to ask before you write a check**.

Then a short, factual "here's how we answer each of these" section — only where true.

This page is the one most likely to be cited by ChatGPT, Perplexity, and Claude when someone asks how to pick a trainer.

---

# SPANISH LAYER — `/es/`

Nine pages. **Natively authored, not translated.** `usted` register throughout. Zero competitors in this market have Spanish content and Riverside County is majority Hispanic — this is the most uncontested opportunity in the plan.

| Spanish URL | English equivalent | Primary keyword |
|---|---|---|
| `/es/` | `/` | entrenamiento de perros Corona CA |
| `/es/adiestramiento-canino/` | `/dog-training/` | adiestramiento canino Corona CA |
| `/es/entrenamiento-con-hospedaje/` | `/board-and-train/` | entrenamiento de perros con hospedaje |
| `/es/entrenamiento-perros-agresivos/` | `/aggressive-dog-training/` | entrenamiento para perros agresivos |
| `/es/entrenamiento-perros-reactivos/` | `/reactive-dog-training/` | entrenamiento para perros reactivos |
| `/es/entrenamiento-de-cachorros/` | `/puppy-training/` | entrenamiento de cachorros Corona |
| `/es/hospedaje-para-perros/` | `/dog-boarding/` | hospedaje para perros Corona CA |
| `/es/guarderia-canina/` | `/dog-daycare/` | guardería canina Corona CA |
| `/es/precios/` | `/pricing/` | precios entrenamiento de perros |
| `/es/contacto/` | `/contact/` | contacto entrenador de perros Corona |

**Requirements:** reciprocal `hreflang` (`en-US`, `es-US`, `x-default`) · header language switcher linking to the translated equivalent, not the ES homepage · Spanish titles, meta descriptions, and schema · Spanish form labels and error messages · **someone who speaks Spanish must be able to answer the phone**, or the page must say when Spanish-speaking staff are available.

---

# UTILITY & LEGAL

| URL | Notes |
|---|---|
| `/privacy-policy/` | **Currently 404s on the live site.** Legally required for GA4, Meta Pixel, Google Ads. |
| `/terms/` | Standard |
| `/accessibility/` | ADA exposure is real for California service businesses |
| `/boarding-contract/` | Keep the e-signature flow. Move the address and hours **out** of here and onto public pages. |
| `/thank-you/` | `noindex`. Required for clean conversion tracking. |
| `/404/` | Custom, links to the money pages |
