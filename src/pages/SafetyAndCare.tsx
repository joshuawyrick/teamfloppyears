import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const facilityCards = [
  'Climate-controlled kennels — temperature maintained year-round',
  'Daily cleaning and sanitation',
  'Secure fencing on all outdoor areas',
  'Covered arena for heat protection',
  'Separate housing for reactive/aggressive dogs',
  '24/7 supervision during Board & Train programs',
];

const healthRequirements = [
  'Current DHPP vaccination',
  'Current Bordetella vaccination',
  'Current Rabies vaccination',
  'Current flea and tick prevention',
];

const faqItems = [
  {
    question: 'What happens if my dog gets hurt?',
    answer:
      "We contact you immediately, assess the situation, and take your dog to our emergency vet if needed. We carry liability insurance and we take injuries seriously.",
  },
  {
    question: 'Are aggressive dogs kept separate?',
    answer:
      'Yes. Aggressive and reactive dogs are housed in a separate area and handled only by experienced trainers. They are never in contact with other client dogs.',
  },
  {
    question: 'Do you have cameras?',
    answer:
      "We have security cameras on the property. We don't offer live streaming — it tends to cause more anxiety than it relieves — but we send daily photo and video updates.",
  },
  {
    question: "What if my dog doesn't eat while boarding?",
    answer:
      "Some dogs skip a meal or two when they first arrive. That's normal. If your dog consistently refuses food, we'll try different approaches and let you know. In our experience, most dogs settle in within 24-48 hours.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SafetyAndCare() {
  return (
    <>
      <PageHeader
        title="Safety and Care"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Safety & Care' },
        ]}
        directAnswer="Your dog's safety is the baseline, not a selling point. Here's how we make sure every dog in our care is healthy, supervised, and handled properly."
      />

      {/* ============================================================ */}
      {/* HOW WE KEEP DOGS SAFE                                         */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Our Standards</p>
          <h2>How we keep dogs safe</h2>
          <p>
            Every dog at Floppy Ears Ranch is supervised. Dogs are never left
            unattended in yards, arenas, or common areas. Reactive and
            aggressive dogs are housed separately and handled only by
            experienced trainers. Play groups are organized by size,
            temperament, and energy level — we don't throw 20 dogs in a yard
            and hope for the best.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FACILITY STANDARDS                                            */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">The Physical Space</p>
          <h2>Facility standards</h2>
          <div className="grid-2" style={{ marginTop: 'var(--s-6)' }}>
            {facilityCards.map((item, i) => (
              <div key={i} className="card">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HEALTH REQUIREMENTS                                           */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Before Your Dog Arrives</p>
          <h2>Health requirements</h2>
          <p>All dogs must have:</p>
          <ul style={{ marginTop: 'var(--s-4)' }}>
            {healthRequirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
          <p style={{ marginTop: 'var(--s-5)' }}>
            We ask for vet records before your dog's stay. This protects your
            dog and every other dog on the property.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EMERGENCY PROCEDURES                                          */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">If Something Goes Wrong</p>
          <h2>Emergency procedures</h2>
          <p>
            We have a relationship with a local emergency vet and a plan for
            every scenario. If your dog gets sick or injured, we contact you
            immediately and get your dog to the vet. We keep emergency contact
            information for every dog on-site. In a genuine emergency, we act
            first and call second.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STAFF TRAINING                                                */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Who's Handling Your Dog</p>
          <h2>Staff training</h2>
          <p>
            Every person who handles your dog at Floppy Ears Ranch is trained
            by Chad Gabriel directly. We don't use volunteers or part-time
            kennel workers. Our team understands dog body language, stress
            signals, and safe handling protocols. This is especially critical
            for aggression and reactivity cases.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                           */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Frequently asked questions</h2>
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA                                                           */}
      {/* ============================================================ */}
      <CTASection
        title="Questions about your dog's care?"
        body="We're happy to walk you through our safety protocols, show you the facility, or answer anything else."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
