# PRICING — SINGLE SOURCE OF TRUTH

**Last updated:** August 7, 2026
**Status:** ⚠️ PROVISIONAL — awaiting written confirmation from Chad & Kyla

---

## ⚠️ READ THIS FIRST (instruction to the build agent)

**Every price displayed anywhere on this website must come from this file.**

Do not hard-code a price into a page. Store these values in a single config/data file
(e.g. `src/data/pricing.json` or `src/config/pricing.ts`) and import them into every
page that displays a price. When a price changes, it changes in exactly one place.

Pages that display pricing: `/pricing/`, `/board-and-train/`, `/dog-boarding/`,
`/dog-daycare/`, `/private-dog-training/`, `/off-leash-dog-training/`,
`/aggressive-dog-training/`, `/puppy-training/`, `/boarding-reactive-aggressive-dogs/`,
`/resources/board-and-train-cost/`, plus all `/es/` equivalents, plus `Service` and
`Offer` schema on every service page.

---

## HOW THESE NUMBERS WERE SET

The live site currently publishes **two different prices for seven services** — the
`/board-and-train/` page and the WooCommerce shop disagree. These values resolve every
conflict using the `/board-and-train/` page as canonical, because that set is internally
consistent (holiday and behavior boarding both carry a $20 premium over standard) while
the shop prices read as stale.

| Conflict | Services page | Shop | **Resolved to** | Why |
|---|---|---|---|---|
| Board & Train (adult) | $2,900 | $2,500 | **$2,900** | Services page is canonical; $2,900 also matches Ridgeside K9's 2-week rate and sits correctly for SoCal (20–30% above national average) |
| Standard boarding | $80 | $60 | **$80** | Matches OC Dog Ranch's $70 new-client rate plus a premium for trainer-supervised care |
| Holiday boarding | $100 | $60 | **$100** | Consistent $20 premium |
| Behavior boarding | $100 | $80 | **$100** | Consistent $20 premium |
| Private lessons package | 5 for $900 | not offered | **5 for $900** | Keep the package — it raises average order value |
| Consultation | $50 credited | "free 30 min" | **Both, split** | See note below |
| Daycare | two products, $35 and $40 | same | **One product, $40** | See note below |

### Two resolutions that are judgment calls — flag these for the owners

**1. Consultation — split into two steps.** The site currently promises a free 30-minute
consultation in some places and charges $50 in others. Every major competitor
(Sit Means Sit, Empire K9, Off Leash K9) offers a **free** evaluation or demo, so
charging at first contact is a real conversion barrier. Resolved as:

- **Free 30-minute phone or video consultation** — top of funnel, no barrier to inquiry
- **$50 in-person facility evaluation and assessment** — credited in full toward any program

This keeps the revenue, removes the barrier, and matches how the market operates.

**2. Daycare — consolidate to one product.** The site sells "Doggy Day Care" at $40 and
"Jax Weller Arena (Kennel-Free Daycare)" at $35 — two overlapping products for what
appears to be the same service. Resolved to **one daycare service at $40/day**, with the
Jax Weller Arena presented as *the facility where daycare happens*, not a separate SKU.
Packages added because the current site mentions them without publishing prices.

> Owners: if the $35 and $40 products are genuinely different services, tell me how and
> I'll split them back out.

---

## TRAINING PROGRAMS

| id | Program | Duration | Price | Deposit | Notes |
|---|---|---|---|---|---|
| `bt-adult` | Board & Train — Adult Dogs | 3 weeks | **$2,900** | $500 | Dogs 6 months and older |
| `bt-puppy` | Board & Train — Puppies | 6 weeks | **$3,200** | $500 | Puppies 6 months and under |
| `bt-behavior` | Behavior Rehabilitation Program | 3 weeks | **$3,500** | $750 | Aggression, bite history, severe reactivity. Renamed from "Dangerous Dog Program" — see plan Change 1 |
| `bt-offleash` | Off-Leash Reliability Program | Custom | **$4,500** | $750 | Includes e-collar equipment |
| `private-single` | Private Lesson | 1 session | **$200** | — | |
| `private-pack5` | Private Lesson Package | 5 sessions | **$900** | — | Saves $100 |
| `zoom` | Virtual Consultation | 1 hour | **$139** | — | Anywhere, any behavior |
| `eval-phone` | Phone / Video Consultation | 30 min | **FREE** | — | Top-of-funnel |
| `eval-onsite` | In-Person Facility Evaluation | ~60 min | **$50** | — | **Credited in full toward any program** |

**Included with every Board & Train program:**
lifetime support · free refresher lessons · owner transfer/turnover session ·
daily photo updates · video updates every 3 days · mid-program progress call

---

## BOARDING

| id | Service | Price | Notes |
|---|---|---|---|
| `board-standard` | Standard Boarding | **$80** / night | |
| `board-holiday` | Holiday Boarding | **$100** / night | See holiday list below |
| `board-behavior` | Behavior / Reactive Dog Boarding | **$100** / night | Requires assessment |
| `board-multi` | Additional dog, same household | **−$10** / night per extra dog | |
| `board-alumni` | Board & Train alumni rate | **$70** / night | ⚠️ NEW — see note |

> ⚠️ **`board-alumni` is a recommendation, not an existing service.** OC Dog Ranch prices
> alumni boarding at $60 vs $70 for new clients. Boarding is the retention annuity on a
> $2,900 training sale — a discounted alumni rate turns one-time training clients into
> recurring revenue. **Confirm with owners before publishing.**

**Holiday dates (define with owners):** New Year's Eve/Day · Memorial Day weekend ·
July 4th · Labor Day weekend · Thanksgiving week · Dec 20 – Jan 2

**Boarding requirements:** current rabies, DHPP, and Bordetella · canine influenza
recommended · assessment required for new clients · drop-off and pickup 8:00am–8:00pm

---

## DAYCARE

| id | Service | Price | Notes |
|---|---|---|---|
| `daycare-day` | Full Day Daycare | **$40** / day | Up to 12 hours |
| `daycare-5` | 5-Day Package | **$180** | $36/day — saves $20 |
| `daycare-10` | 10-Day Package | **$340** | $34/day — saves $60 |
| `daycare-monthly` | Monthly Unlimited | **$650** | ⚠️ NEW — see note |
| `daycare-referral` | Referral credit | **$10** | Existing offer |

> ⚠️ **Package prices are recommendations.** The current site advertises that 1-day, 5-day,
> 10-day, and monthly unlimited packages exist but publishes no prices for them. These are
> standard market-rate discount tiers. **Confirm with owners.**

Daycare operates in the **Jax Weller Arena** — kennel-free, cooled turf, shade structures,
multiple pools, elevated beds. 12 hours a day, 7 days a week. Assessment required for new
clients.

---

## DISCOUNTS

| id | Discount | Amount | Status |
|---|---|---|---|
| `disc-military` | Military / veteran | **10%** | ⚠️ Recommended — confirm |
| `disc-responder` | Police / fire / EMS | **10%** | ⚠️ Recommended — confirm |
| `disc-multidog` | Multi-dog household (boarding) | $10/night per extra dog | Existing |
| `disc-referral` | Daycare referral credit | $10 | Existing |

> Corona and Riverside County have large veteran and first-responder populations, and
> **every** significant competitor offers this discount (Better K9 15%, OC Dog Ranch,
> Dream Dogs 10%). In this market it reads as expected, not generous.

---

## FINANCING

⚠️ **Not currently offered — recommended.** At $2,900–$4,500, published financing
measurably widens the funnel. Competitor Better K9 accepts All Pet Card.

Options to evaluate: **Scratchpay** · **Sunbit** · **CareCredit** · **Affirm**

If adopted, display on `/pricing/`, `/board-and-train/`, and
`/resources/board-and-train-cost/` as: *"Financing available — as low as $X/month."*

---

## PAYMENT METHODS

Cash · Check · Credit card · PayPal · Venmo · Zelle
*(Per their Thumbtack profile. Confirm still accurate.)*

---

## PRICING DISPLAY RULES (for the build agent)

1. **Always show real numbers.** Never "Call for pricing." Publishing price is a
   competitive advantage here — roughly half this market hides it and loses every
   cost-intent search as a result.
2. **Anchor high to low.** On any page listing multiple programs, order most expensive
   first. $4,500 makes $2,900 feel reasonable.
3. **Price is never the headline.** Outcome first, price second. The hero says what the
   dog will be able to do, not what it costs.
4. **Every price gets context.** "$2,900 for 3 weeks — includes lifetime support, free
   refresher lessons, and a transfer session" converts. A bare "$2,900" does not.
5. **Deposits stated wherever a program price is stated.** Clarity reduces perceived risk.
6. **Never mark up a price in schema that isn't visible on the page.**
7. **Cheapest is a negative signal in this market.** Informed board-and-train buyers read
   sub-$800 two-week programs as incomplete or unsafe. Do not compete on price.

---

## CHANGE LOG

| Date | Change | By |
|---|---|---|
| 2026-08-07 | Initial provisional pricing set. Resolved 7 live contradictions. Renamed Dangerous Dog → Behavior Rehabilitation. Split consultation into free phone + $50 on-site. Consolidated two daycare SKUs into one. Added recommended alumni rate, daycare packages, and discounts (all flagged). | Claude |
