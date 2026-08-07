import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const skills = [
  {
    name: 'Sit and Down',
    desc: 'On command, at distance, with duration.',
  },
  {
    name: 'Stay',
    desc: 'In place until released, even with distractions.',
  },
  {
    name: 'Recall',
    desc: 'Coming when called, every time.',
  },
  {
    name: 'Leash Manners',
    desc: 'Walking without pulling.',
  },
  {
    name: 'Place Command',
    desc: 'Go to a bed/mat and stay there.',
  },
  {
    name: 'Door Manners',
    desc: 'No bolting, wait at thresholds.',
  },
  {
    name: 'Impulse Control',
    desc: 'Waiting for food, not jumping, settling on command.',
  },
];

const faqItems = [
  {
    question: 'How long does obedience training take?',
    answer:
      'Board & Train covers it in three weeks. Private lessons depend on the dog and how consistently you practice — most clients see solid results in 5-10 sessions.',
  },
  {
    question: 'Is my dog too old for obedience training?',
    answer:
      "No. We've trained dogs from 8 weeks to 10 years. Older dogs can learn. It might take a little longer, but the idea that old dogs can't learn new tricks is a myth.",
  },
  {
    question: 'What if my dog already knows basic commands?',
    answer:
      "Most dogs 'know' sit at home but fall apart in the real world. We train for reliability under distraction. If your dog already has a foundation, we build on it.",
  },
  {
    question: 'Do you offer group obedience classes?',
    answer:
      'No. Every dog gets individual attention. Group classes are socialization events, not effective obedience training.',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function DogObedience() {
  return (
    <>
      <PageHeader
        title="Dog Obedience Training in Corona, CA"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Dog Training', to: '/dog-training' },
          { label: 'Obedience Training' },
        ]}
        directAnswer="Obedience training at Floppy Ears Ranch starts at $200 per session for private lessons or $2,900 for our three-week Board & Train. We teach real-world obedience that holds up outside the living room — sit, down, stay, recall, leash manners, place, and door manners."
      />

      {/* ============================================================ */}
      {/* WHAT OBEDIENCE TRAINING IS                                    */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Real-World Obedience</p>
          <h2>What obedience training is</h2>
          <p>
            Obedience training isn't about tricks. It's about your dog
            understanding the rules and following them reliably — at home, on
            walks, at the park, and around distractions. We train for the
            real world, not a quiet training room.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT'S COVERED                                                */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">What We Teach</p>
          <h2>What's covered</h2>
          <div className="grid-2" style={{ marginTop: 'var(--s-6)' }}>
            {skills.map((skill) => (
              <div key={skill.name} className="card">
                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROGRAM OPTIONS                                               */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Two Paths</p>
          <h2>Program options</h2>
          <div className="grid-2" style={{ marginTop: 'var(--s-6)' }}>
            <div className="card">
              <h3>Board & Train</h3>
              <p className="price" style={{ fontSize: 'var(--t-lg)', fontWeight: 700 }}>
                $2,900 / 3 weeks
              </p>
              <p>
                We do the work. Your dog lives at the ranch and gets trained
                daily. Transfer session included so you learn how to maintain
                the results. Best for fast, reliable results.
              </p>
              <Link
                to="/board-and-train"
                className="btn btn--primary"
                style={{ marginTop: 'var(--s-4)' }}
              >
                Learn About Board & Train
              </Link>
            </div>
            <div className="card">
              <h3>Private Lessons</h3>
              <p className="price" style={{ fontSize: 'var(--t-lg)', fontWeight: 700 }}>
                $200/session or $900 for 5
              </p>
              <p>
                You do the training with our guidance. 60-minute sessions,
                one-on-one with a trainer. Good for owners who want to be
                hands-on.
              </p>
              <Link
                to="/private-dog-training"
                className="btn btn--primary"
                style={{ marginTop: 'var(--s-4)' }}
              >
                Learn About Private Lessons
              </Link>
            </div>
          </div>
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
        title="Ready to start obedience training?"
        body="Call us for a free consultation. We'll talk through your dog's behavior, recommend the right program, and answer any questions."
        primaryLabel="Book a Free Call"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
