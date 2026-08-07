import { Link } from 'react-router-dom';
import {
  Check,
  DollarSign,
  CreditCard,
  Percent,
  Users,
  Gift,
  Shield,
  BadgeCheck,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const trainingPricing = [
  { service: 'Off-Leash Reliability', price: '$4,500', deposit: '$750', duration: 'Custom' },
  { service: 'Behavior Rehabilitation', price: '$3,500', deposit: '$750', duration: '3 weeks' },
  { service: 'Puppy Board & Train', price: '$3,200', deposit: '$500', duration: '6 weeks' },
  { service: 'Board & Train', price: '$2,900', deposit: '$500', duration: '3 weeks' },
  { service: 'Private lessons (5-pack)', price: '$900', deposit: '—', duration: '5 sessions' },
  { service: 'Private lesson (single)', price: '$200', deposit: '—', duration: '1 session' },
  { service: 'Facility evaluation', price: '$50', deposit: '—', duration: '1 visit' },
  { service: 'Follow-up / refresher lesson', price: 'Free', deposit: '—', duration: 'Ongoing' },
  { service: 'Phone consultation', price: 'Free', deposit: '—', duration: '30 min' },
];

const includedItems = [
  'Daily photo updates',
  'Training video every three days',
  'Mid-program phone call',
  'The transfer session (60–90 min)',
  'Written training notes and instructions',
  'Free refresher lessons after the program',
  'Lifetime phone and email support',
  'All training equipment used during the stay',
  'Climate-controlled indoor kennels',
  'Structured play and socialization',
];

const boardingRates = [
  { type: 'Standard boarding', rate: '$80/night', note: '' },
  { type: 'Holiday boarding', rate: '$100/night', note: 'Major holidays and holiday weekends' },
  { type: 'Behavior boarding', rate: '$100/night', note: 'Reactive or aggressive dogs (evaluation required)' },
  { type: 'Multi-dog discount', rate: '−$10/night', note: 'Per additional dog from the same household' },
];

const daycareRates = [
  { type: 'Single day', rate: '$40/day' },
  { type: '5-day package', rate: '$180' },
  { type: '10-day package', rate: '$340' },
];

const discounts = [
  { icon: Shield, label: 'Military', detail: '10% off any program' },
  { icon: BadgeCheck, label: 'First responder', detail: '10% off any program' },
  { icon: Users, label: 'Multi-dog', detail: 'Discount on second dog from same household' },
  { icon: Gift, label: 'Referral', detail: '$10 off your next service for every referral' },
];

const paymentMethods = [
  'Cash',
  'Check',
  'Credit card (Visa, Mastercard, Amex)',
  'PayPal',
  'Venmo',
  'Zelle',
];

const pricingFaqs = [
  {
    question: 'Is the $50 evaluation fee separate from the program cost?',
    answer:
      'No. The $50 facility evaluation fee is credited in full toward any program you book. If you book Board & Train at $2,900, you pay $2,900 total — not $2,950. The evaluation only costs you money if you decide not to move forward.',
  },
  {
    question: 'When is the deposit due?',
    answer:
      'The deposit is due when you reserve your drop-off date. It holds your spot and is applied toward the total program cost. The remaining balance is due at drop-off.',
  },
  {
    question: 'Is the deposit refundable?',
    answer:
      'Yes, if you cancel at least 7 days before your scheduled drop-off. Cancellations within 7 days forfeit the deposit because we\'ve held the spot and turned other dogs away.',
  },
  {
    question: 'Do you offer payment plans or financing?',
    answer:
      'We don\'t offer formal financing, but we can usually split the balance into two payments if you need to. Talk to us — we\'re flexible when we can be.',
  },
  {
    question: 'Are refresher lessons really free?',
    answer:
      'Yes, for every Board & Train program. If your dog needs a tune-up six months later, bring them back. No charge. This is part of the lifetime support we include with every program.',
  },
  {
    question: 'Do daycare packages expire?',
    answer:
      'Daycare packages are valid for 90 days from purchase. We don\'t offer extensions because daycare works best as a consistent routine — if you\'re spacing visits months apart, single-day rates make more sense.',
  },
  {
    question: 'Is boarding more expensive for large dogs?',
    answer:
      'No. Boarding is $80 per night regardless of size. The only surcharges are for holidays ($100/night) and dogs that require behavior boarding ($100/night, evaluation required).',
  },
  {
    question: 'Why don\'t you charge more for aggressive dogs in Board & Train?',
    answer:
      'The Behavior Rehabilitation program at $3,500 does cost more than the standard Board & Train at $2,900, because those dogs require more time, more precaution, and more expertise per session. We price based on what the work actually takes.',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Pricing() {
  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader
        title="Dog Training & Boarding Pricing"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Pricing' },
        ]}
        directAnswer="Board & Train programs at Floppy Ears Ranch in Corona, California run $2,900 to $4,500 depending on the program. Private lessons are $200 per session or $900 for a package of five. Boarding starts at $80 per night and daycare is $40 per day. The first 30-minute phone consultation is free, and the $50 in-person facility evaluation is credited in full toward any program you book."
      />

      {/* ============================================================ */}
      {/* TRAINING PROGRAMS                                            */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Training programs</h2>

          <div className="table-wrap" style={{ marginTop: 'var(--s-5)' }}>
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Duration</th>
                  <th>Price</th>
                  <th>Deposit</th>
                </tr>
              </thead>
              <tbody>
                {trainingPricing.map((row) => (
                  <tr key={row.service}>
                    <td style={{ fontWeight: 600 }}>{row.service}</td>
                    <td>{row.duration}</td>
                    <td className="price">{row.price}</td>
                    <td>{row.deposit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT'S INCLUDED                                              */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>What's included in every Board &amp; Train — at no extra cost</h2>

          <ul className="included-list" style={{ marginTop: 'var(--s-5)' }}>
            {includedItems.map((item) => (
              <li key={item}>
                <Check size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BOARDING RATES                                               */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Boarding rates</h2>

          <div className="table-wrap" style={{ marginTop: 'var(--s-5)' }}>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Rate</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {boardingRates.map((row) => (
                  <tr key={row.type}>
                    <td style={{ fontWeight: 600 }}>{row.type}</td>
                    <td className="price">{row.rate}</td>
                    <td style={{ fontSize: 'var(--t-small)', color: 'var(--muted)' }}>
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DAYCARE RATES                                                */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Daycare rates</h2>

          <div className="table-wrap" style={{ marginTop: 'var(--s-5)' }}>
            <table>
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                {daycareRates.map((row) => (
                  <tr key={row.type}>
                    <td style={{ fontWeight: 600 }}>{row.type}</td>
                    <td className="price">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: 'var(--s-5)', fontSize: 'var(--t-small)', color: 'var(--muted)' }}>
            Packages are valid for 90 days from purchase. All new daycare dogs
            require a temperament assessment before their first visit.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DISCOUNTS                                                    */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Discounts</h2>

          <div className="grid-2" style={{ marginTop: 'var(--s-5)' }}>
            {discounts.map((d) => (
              <div className="card" key={d.label}>
                <d.icon
                  size={24}
                  style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
                />
                <h4>{d.label}</h4>
                <p style={{ fontSize: 'var(--t-small)', color: 'var(--muted)' }}>
                  {d.detail}
                </p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 'var(--s-5)', fontSize: 'var(--t-small)', color: 'var(--muted)' }}>
            Discounts cannot be combined. Military and first responder discounts
            require valid ID.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PAYMENT                                                      */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Payment methods</h2>
          <p>We make it easy to pay however works for you:</p>

          <ul style={{ marginTop: 'var(--s-4)' }}>
            {paymentMethods.map((method) => (
              <li key={method}>{method}</li>
            ))}
          </ul>

          <p style={{ marginTop: 'var(--s-5)', fontSize: 'var(--t-small)', color: 'var(--muted)' }}>
            Deposits reserve your spot and are applied toward the total program
            cost. The remaining balance is due at drop-off.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY WE PUBLISH PRICES                                        */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Why we publish our prices</h2>
          <p>
            About half the dog trainers in Southern California make you call or
            fill out a form before they'll tell you what anything costs. We've
            never understood why. You should be able to look at a price, compare
            it to your budget, and decide whether to pick up the phone — without
            sitting through a sales pitch first.
          </p>
          <p>
            Our prices are our prices. They don't change based on how the phone
            call goes, and we don't negotiate. That's not because we think we're
            special — it's because we think you deserve to know what you're
            paying before we start talking.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* IS THIS EXPENSIVE?                                           */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Is this expensive?</h2>
          <p>
            Depends on what you're comparing it to. Southern California dog
            training runs 20–30% above national averages because of cost of
            living, facility overhead, and insurance. Here's what the market
            looks like:
          </p>

          <div className="table-wrap" style={{ marginTop: 'var(--s-5)' }}>
            <table>
              <thead>
                <tr>
                  <th>Program type</th>
                  <th>SoCal market range</th>
                  <th>Our price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Board &amp; Train (2–3 weeks)</td>
                  <td>$2,500–$6,000</td>
                  <td className="price">$2,900</td>
                </tr>
                <tr>
                  <td>Behavior / aggression program</td>
                  <td>$3,000–$7,500</td>
                  <td className="price">$3,500</td>
                </tr>
                <tr>
                  <td>Off-leash program</td>
                  <td>$4,000–$8,000</td>
                  <td className="price">$4,500</td>
                </tr>
                <tr>
                  <td>Private lesson (single)</td>
                  <td>$150–$350</td>
                  <td className="price">$200</td>
                </tr>
                <tr>
                  <td>Overnight boarding</td>
                  <td>$60–$150/night</td>
                  <td className="price">$80/night</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: 'var(--s-6)', fontWeight: 600 }}>
            We're at the bottom of every one of those ranges — and we include
            the transfer session, refresher lessons, and lifetime support that
            most facilities charge extra for or don't offer at all.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                          */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Pricing FAQ</h2>
          <div style={{ marginTop: 'var(--s-5)' }}>
            <FAQSection items={pricingFaqs} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                    */}
      {/* ============================================================ */}
      <CTASection
        title="Know what you need?"
        body="Book a free phone consultation or tell us about your dog. We'll recommend the right program and give you a straight answer on cost — no surprises."
        primaryLabel="Tell Us About Your Dog"
        primaryTo="/book-evaluation"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:9514546773"
        background="evergreen"
      />
    </>
  );
}
