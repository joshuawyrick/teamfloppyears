import { Link } from 'react-router-dom';
import { Check, X, Zap, Footprints, Compass, Shield, DoorOpen, Dog } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const skills = [
  {
    icon: <Compass size={24} />,
    title: 'Reliable recall',
    desc: 'Comes when called, every time, around any distraction.',
  },
  {
    icon: <Footprints size={24} />,
    title: 'Off-leash heel',
    desc: 'Walks beside you without a leash in public.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Distance commands',
    desc: 'Sit, down, place from 50+ feet.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Distraction proofing',
    desc: 'Responds reliably around dogs, people, bikes, wildlife.',
  },
  {
    icon: <Dog size={24} />,
    title: 'E-collar fluency',
    desc: 'Understands and responds to e-collar communication.',
  },
  {
    icon: <DoorOpen size={24} />,
    title: 'Threshold control',
    desc: 'Doors, gates, car exits without bolting.',
  },
];

const goodCandidates = [
  'Dogs who have completed Board & Train or equivalent',
  'Well-socialized dogs with solid basics',
  'Dogs whose owners want real off-leash freedom',
];

const needWorkFirst = [
  'Dogs with zero obedience foundation',
  'Aggressive or severely reactive dogs',
  'Dogs under 6 months old',
];

const faqItems = [
  {
    question: 'How long does the program take?',
    answer:
      "It depends on the dog. Most dogs need 3-5 weeks. Some need longer. We don't rush this program — the dog goes home when they're ready, not when the calendar says so.",
  },
  {
    question: 'Will the e-collar hurt my dog?',
    answer:
      "At the levels we use, no. Most dogs work between level 5 and 15 out of 100+. The sensation is a muscle stimulation, not a shock. We condition every dog gradually and never use it in a way that scares the dog.",
  },
  {
    question: 'Can any dog learn off-leash reliability?',
    answer:
      "Most dogs can, but not all are candidates right away. Dogs need a solid obedience foundation first. We'll tell you during the evaluation whether your dog is ready or needs foundation work first.",
  },
  {
    question: 'Do I get to keep the e-collar?',
    answer:
      "Yes. The e-collar and transmitter are included in the price. We'll train you on proper use during the transfer session.",
  },
  {
    question: 'What if my dog already had Board & Train with you?',
    answer:
      "Great — they probably have the foundation needed. We'll evaluate where they are and build from there. Some Board & Train graduates move into the off-leash program after a few weeks at home.",
  },
];

const includes = [
  'E-collar and transmitter',
  'Daily training',
  'Extensive transfer session',
  'Free refresher lessons',
  'Lifetime support',
];

export default function OffLeash() {
  return (
    <>
      <PageHeader
        title="Off-Leash Dog Training in Corona, CA"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Dog Training', to: '/dog-training' },
          { label: 'Off-Leash Training' },
        ]}
        directAnswer="Our Off-Leash Reliability Program is $4,500 and includes an e-collar. This is our most advanced program — your dog learns to respond reliably without a leash, around real distractions, in real environments. Not every dog is a candidate."
      />

      {/* What This Program Is */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">True Off-Leash Freedom</p>
          <p>
            Off-leash reliability means your dog responds to commands without a
            leash, around other dogs, people, wildlife, and distractions. It
            means recall that works when it matters — not just in the backyard.
          </p>
          <p>
            This is the highest level of training we offer, and it requires a
            solid foundation to build on.
          </p>
        </div>
      </section>

      {/* The E-Collar */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">Let's Talk About the E-Collar</p>
          <p>
            This program uses an e-collar (electronic collar). We're going to be
            straight with you about it because there's a lot of misinformation
            online.
          </p>
          <p>
            The e-collar is a communication tool. Modern e-collars have over 100
            stimulation levels. Most dogs work between level 5 and 15 — a
            sensation comparable to a TENS unit, noticeable but not painful.
          </p>
          <p>
            We condition every dog to the e-collar gradually: the dog learns
            what the stimulation means before we ever use it as a correction.
          </p>
          <p>
            The e-collar is included in the program price. You'll go home with
            it, trained on how to use it properly. We'll never put an e-collar
            on a dog who doesn't understand what's being asked of them first.
          </p>
        </div>
      </section>

      {/* What Your Dog Learns */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Skills</p>
          <div className="grid-2">
            {skills.map((skill) => (
              <div className="card" key={skill.title}>
                <div style={{ marginBottom: 'var(--s-3)', color: 'var(--evergreen)' }}>
                  {skill.icon}
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidacy */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">Not Every Dog Is Ready</p>
          <p>
            This program requires a foundation. Your dog needs to understand
            basic commands before we can make them reliable off-leash. If your
            dog doesn't have basics, we'll start with our standard{' '}
            <Link to="/board-and-train">Board &amp; Train</Link> first.
          </p>
          <div className="grid-2" style={{ marginTop: 'var(--s-6)' }}>
            <div className="card">
              <h3>Good Candidates</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {goodCandidates.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--s-2)',
                      marginBottom: 'var(--s-2)',
                    }}
                  >
                    <Check size={18} style={{ color: 'var(--evergreen)', flexShrink: 0, marginTop: 3 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Need Other Work First</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {needWorkFirst.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--s-2)',
                      marginBottom: 'var(--s-2)',
                    }}
                  >
                    <X size={18} style={{ color: 'var(--rust)', flexShrink: 0, marginTop: 3 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What It Costs */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Investment</p>
          <div className="card" style={{ maxWidth: '600px' }}>
            <h2 style={{ marginBottom: 'var(--s-1)' }}>$4,500</h2>
            <p style={{ color: 'var(--muted)', marginBottom: 'var(--s-4)' }}>
              Custom length — your dog goes home when they're ready
            </p>
            <h3>Includes:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {includes.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--s-2)',
                    marginBottom: 'var(--s-2)',
                  }}
                >
                  <Check size={18} style={{ color: 'var(--evergreen)', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 'var(--s-4)', fontWeight: 600 }}>
              $500 deposit to reserve your spot.
            </p>
            <p style={{ color: 'var(--muted)' }}>
              We don't run sales or discounts.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--paper">
        <div className="container">
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Find out if your dog is a candidate"
        body="Book an evaluation and we'll assess your dog's foundation, temperament, and readiness for off-leash work. If they're not ready yet, we'll tell you what needs to happen first."
        primaryLabel="Book an Evaluation"
        primaryTo="/book-evaluation"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
