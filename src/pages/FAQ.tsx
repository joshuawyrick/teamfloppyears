import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const gettingStartedFaqs = [
  {
    question: "What's the first step?",
    answer:
      "A free 30-minute phone consultation. Tell us what's going on with your dog. We'll be honest about whether we can help and which program makes sense.",
  },
  {
    question: 'Do I need an evaluation?',
    answer:
      "Yes. Every dog gets a $50 facility evaluation before starting any program. We need to meet your dog in person to build the right plan. The evaluation fee is credited toward your program.",
  },
  {
    question: 'How do I book?',
    answer:
      "Call us at (951) 454-6773 or use the contact form on our website. We'll schedule your free phone consultation first.",
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'Board & Train spots fill 2-4 weeks out. Private lessons can usually be scheduled within a week. Call early if you have a specific start date in mind.',
  },
  {
    question: 'Can I tour the facility first?',
    answer:
      "Yes, and we encourage it. We'll show you everything — the kennels, the training areas, the arena. No appointments necessary during business hours, but calling ahead is helpful.",
  },
];

const choosingProgramFaqs = [
  {
    question: 'How do I know which program is right for my dog?',
    answer:
      "Start with the free phone call. We'll ask about your dog's age, behavior, your goals, and your lifestyle. Most people think they need one thing and end up in something different once we understand the full picture.",
  },
  {
    question: "What's the difference between Board & Train and private lessons?",
    answer:
      "Board & Train: your dog lives here, we do the heavy lifting, you get a trained dog back with a transfer session. Private lessons: you do the training with our guidance, one session at a time. Board & Train is faster and more intensive. Private is more hands-on for you.",
  },
  {
    question: 'Is Board & Train worth the cost?',
    answer:
      "If your dog has real behavior problems or you need reliable results quickly, yes. Three weeks of daily professional training covers ground that would take months of weekly private lessons. It's not cheap, but it's effective.",
  },
  {
    question: 'Do you offer group classes?',
    answer:
      "No. Every dog gets individual attention. Group classes are fine for socialization, but they're not an efficient way to train a dog with real goals or real problems.",
  },
];

const costPaymentFaqs = [
  {
    question: 'How much does training cost?',
    answer:
      'Board & Train: $2,900-$4,500. Private lessons: $200 each or $900 for five. Boarding: $80/night. Daycare: $40/day. Behavior Rehabilitation: $3,500. The first phone consultation is always free.',
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      "We require a deposit to reserve your spot, with the balance due at drop-off. We don't currently offer financing, but we can work with you on timing if you need flexibility.",
  },
  {
    question: 'Is the evaluation fee separate?',
    answer:
      "The $50 evaluation fee is credited toward whatever program you choose. If you decide not to proceed, it covers our time for the assessment.",
  },
  {
    question: 'Why are you more expensive than some trainers?',
    answer:
      "Because we do this full-time on a dedicated facility with experienced trainers. You're paying for five acres, climate-controlled kennels, daily one-on-one training, and lifetime support. Cheap training that doesn't work is the most expensive kind.",
  },
];

const boardTrainFaqs = [
  {
    question: 'How long is Board & Train?',
    answer:
      'Three weeks for dogs six months and older. Six weeks for puppies under six months. Behavior Rehabilitation is three weeks. Off-Leash Reliability is custom length based on the dog.',
  },
  {
    question: 'Can I visit my dog during Board & Train?',
    answer:
      "We don't allow visits during the first two weeks. It disrupts the training relationship we're building. You'll get daily photos and video updates. In the third week, we schedule your transfer session.",
  },
  {
    question: 'What does the transfer session include?',
    answer:
      "We spend a full session teaching you everything your dog learned — the commands, the timing, the body language. You leave with a dog who knows the work and the skills to maintain it.",
  },
  {
    question: "What if my dog doesn't improve?",
    answer:
      "We've never had a dog leave without improvement. The degree of improvement depends on the dog, the issue, and the owner's follow-through. We include free refresher lessons and lifetime phone support for exactly this reason.",
  },
];

const boardingDaycareFaqs = [
  {
    question: "What's included in boarding?",
    answer:
      "Climate-controlled indoor kennels, daily outdoor time, feeding on your dog's schedule, medication administration, daily photo updates, and supervised play for appropriate dogs. $80 per night standard, $100 on holidays.",
  },
  {
    question: 'Do you board reactive or aggressive dogs?',
    answer:
      "Yes, at $100 per night. These dogs are housed and handled separately. We're equipped for it because we're trainers, not just boarding staff. See our reactive/aggressive boarding page for details.",
  },
  {
    question: 'What vaccinations are required?',
    answer:
      "DHPP, Bordetella, and Rabies — all current. Flea and tick prevention must be current. We'll ask for records before your dog's stay.",
  },
  {
    question: 'Is daycare available every day?',
    answer:
      'Daycare is available during business hours for dogs in our Ring 1 service area (Corona, Norco, Eastvale). $40 per day. Your dog must pass an evaluation first.',
  },
];

const behaviorFaqs = [
  {
    question: 'Do you work with aggressive dogs?',
    answer:
      'Yes. Our Behavior Rehabilitation Program is $3,500 for three weeks. Every dog is evaluated individually — acceptance depends on the specific case, the severity, and whether we believe we can help safely.',
  },
  {
    question: 'Can reactivity be fixed?',
    answer:
      "In most cases, yes. Reactivity is one of the most treatable behavior problems we see. The degree of improvement depends on the severity, the dog's history, and how consistently the owner follows through.",
  },
  {
    question: 'My dog has bitten someone. Can you help?',
    answer:
      "Possibly. We need to evaluate the situation — the circumstances of the bite, the severity, the dog's overall behavior. Some bite cases are very workable. Others have risks we won't take. Call us and we'll be straight with you.",
  },
  {
    question: 'What about separation anxiety?',
    answer:
      "We can help with mild to moderate separation anxiety through structured training. Severe separation anxiety sometimes needs veterinary support alongside training. We'll tell you if we think medication should be part of the plan.",
  },
];

const methodsFaqs = [
  {
    question: 'What training methods do you use?',
    answer:
      "Balanced training. We start with relationship and marker-based training — teaching the dog what TO do. When the dog understands the command, we add fair corrections so they understand both sides of the conversation. We use what works for each individual dog.",
  },
  {
    question: 'Do you use e-collars?',
    answer:
      "Yes, in the Off-Leash Reliability Program and some behavior cases. The e-collar is a communication tool, not a punishment device. We condition every dog to the e-collar gradually and never use it on a dog who doesn't understand what's being asked.",
  },
  {
    question: 'Do you use prong collars?',
    answer:
      "When appropriate, yes. Prong collars distribute pressure evenly and give us clear communication with strong dogs. We'll show you exactly how and why we use them. If you're uncomfortable with any tool, we'll talk about it.",
  },
  {
    question: 'Are your methods humane?',
    answer:
      "Yes. Our dogs are treated well, trained fairly, and never abused. Balanced training means the dog gets clear information about what's right and what's not. A trained dog is a happier dog — they understand the rules and they get more freedom because of it.",
  },
];

const facilityFaqs = [
  {
    question: 'What does the facility look like?',
    answer:
      "Five acres in the Temescal Valley area of Corona. Climate-controlled indoor kennels, the Jax Weller Arena (covered turf with cooling, shade, and splash pools), multiple outdoor training areas, and open space. You're welcome to tour anytime.",
  },
  {
    question: 'Is the facility safe?',
    answer:
      'Yes. The property is fully fenced, kennels are climate-controlled, and dogs are always supervised. Aggressive and reactive dogs are housed and managed separately. We have emergency vet protocols in place.',
  },
  {
    question: 'Where exactly are you?',
    answer:
      "21761 Knabe Rd, Corona, CA 92883. We're in the Temescal Valley area, about 10 minutes from the 15 freeway. Easy access from Corona, Norco, Eastvale, and the surrounding Inland Empire.",
  },
];

const locationFaqs = [
  {
    question: 'Do you serve Orange County?',
    answer:
      "Yes, for Board & Train and behavior work. We're 25-40 minutes from Yorba Linda, Anaheim Hills, Brea, and Fullerton. We don't offer daycare or boarding at that distance — the daily drive doesn't make sense.",
  },
  {
    question: 'How far do you travel for private lessons?',
    answer:
      "We don't travel. All training happens at our facility in Corona. For owners who can't make the drive, we offer virtual sessions at $139 per session.",
  },
  {
    question: 'What areas do you serve?',
    answer:
      'Ring 1 (0-15 min): Corona, Norco, Eastvale — all services. Ring 2 (15-40 min): Ontario, Rancho Cucamonga, Chino, Riverside — training and boarding. Ring 3 (40-90 min): Orange County, LA — Board & Train and behavior only.',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FAQ() {
  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader
        title="Frequently Asked Questions"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'FAQ' },
        ]}
        directAnswer="Straight answers to the questions we hear most. If yours isn't here, call us at (951) 454-6773 — we'd rather talk to you than make you dig through a website."
      />

      {/* ============================================================ */}
      {/* GETTING STARTED                                               */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Getting Started</h2>
          <div style={{ marginTop: 'var(--s-5)' }}>
            <FAQSection items={gettingStartedFaqs} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHOOSING A PROGRAM                                            */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Choosing a Program</h2>
          <div style={{ marginTop: 'var(--s-5)' }}>
            <FAQSection items={choosingProgramFaqs} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COST & PAYMENT                                                */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Cost &amp; Payment</h2>
          <div style={{ marginTop: 'var(--s-5)' }}>
            <FAQSection items={costPaymentFaqs} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BOARD & TRAIN                                                 */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Board &amp; Train</h2>
          <div style={{ marginTop: 'var(--s-5)' }}>
            <FAQSection items={boardTrainFaqs} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BOARDING & DAYCARE                                            */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Boarding &amp; Daycare</h2>
          <div style={{ marginTop: 'var(--s-5)' }}>
            <FAQSection items={boardingDaycareFaqs} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BEHAVIOR PROBLEMS                                             */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Behavior Problems</h2>
          <div style={{ marginTop: 'var(--s-5)' }}>
            <FAQSection items={behaviorFaqs} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR METHODS                                                   */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Our Methods</h2>
          <div style={{ marginTop: 'var(--s-5)' }}>
            <FAQSection items={methodsFaqs} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THE FACILITY                                                  */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>The Facility</h2>
          <div style={{ marginTop: 'var(--s-5)' }}>
            <FAQSection items={facilityFaqs} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LOCATION                                                      */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Location</h2>
          <div style={{ marginTop: 'var(--s-5)' }}>
            <FAQSection items={locationFaqs} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                     */}
      {/* ============================================================ */}
      <CTASection
        title="Still have questions?"
        body="We'd rather answer your questions on the phone than make you read another paragraph."
        primaryLabel="Call Us"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
