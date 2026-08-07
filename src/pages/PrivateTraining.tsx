import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const skillsList = [
  'Leash manners',
  'Recall',
  'Place command',
  'Door manners',
  'Impulse control',
  'Basic obedience (sit, down, stay)',
  'Socialization',
  'Reactivity (mild cases)',
];

const pricingRows = [
  {
    name: 'Single Session',
    price: '$200',
    duration: '60 minutes',
    note: '',
  },
  {
    name: '5-Session Pack',
    price: '$900',
    duration: '$180/session',
    note: 'Save $100',
  },
  {
    name: 'Virtual Session',
    price: '$139',
    duration: '60 minutes',
    note: 'Via video call',
  },
];

const privateFaqs = [
  {
    question: 'How many sessions will my dog need?',
    answer:
      'It depends on the dog, the issues, and how much you practice between sessions. Some dogs make dramatic progress in three to four sessions. Others need eight to ten. We won\'t drag it out longer than necessary, and we\'ll tell you when we think you\'re ready to go it alone.',
  },
  {
    question: 'Can I bring my family to sessions?',
    answer:
      'Yes, and we encourage it — especially if other family members will be handling the dog at home. Everyone needs to be on the same page with commands and expectations. Kids are welcome as long as they can follow instructions.',
  },
  {
    question: 'Do you train at my house?',
    answer:
      'No. All sessions happen at our facility in Corona. The ranch gives us controlled environments, distractions we can dial up or down, and space to work. For owners who can\'t make the drive, we offer virtual sessions at $139.',
  },
  {
    question: 'What if my dog has aggression?',
    answer:
      'Mild reactivity is workable in private lessons. Serious aggression — lunging, biting, or anything that puts people or dogs at risk — needs our Behavior Rehabilitation Program ($3,500, three weeks). We\'ll be honest about which one your dog needs after the evaluation.',
  },
  {
    question: "What's the difference between private lessons and Board & Train?",
    answer:
      'Private lessons: you do the training with our guidance, one hour at a time, once a week. Board & Train: your dog lives here and trains every day with a professional. Private is more hands-on for you and costs less overall. Board & Train is faster and more intensive. We\'ll recommend the right one for your situation.',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function PrivateTraining() {
  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader
        title="Private Dog Training in Corona, CA"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Dog Training', to: '/dog-training' },
          { label: 'Private Training' },
        ]}
        directAnswer="Private dog training lessons at Floppy Ears Ranch are $200 per session, or $900 for a five-pack. Sessions are 60 minutes at our facility in Corona, CA. We also offer virtual sessions at $139 for owners who can't make the drive."
      />

      {/* ============================================================ */}
      {/* WHAT PRIVATE LESSONS ARE                                      */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>What private lessons are</h2>
          <p>
            One trainer, one dog, one hour. Sessions happen at the ranch. Every
            minute is focused on your specific goals.
          </p>
          <p>
            This isn't a group class where your dog sits in a circle and you
            hope for the best. It's you, your dog, and a trainer who's paying
            attention to nothing else.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHEN PRIVATE IS THE RIGHT CHOICE                              */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>When private is the right choice</h2>

          <div className="grid-2" style={{ marginTop: 'var(--s-6)' }}>
            <div>
              <h3>Private lessons are right when:</h3>
              <ul>
                <li>You want to be the one training your dog</li>
                <li>
                  Your dog's issues are moderate — pulling, jumping, basic
                  obedience
                </li>
                <li>You can commit to practicing between sessions</li>
                <li>You're local enough to come weekly</li>
              </ul>
            </div>
            <div>
              <h3>Board &amp; Train is better when:</h3>
              <ul>
                <li>You need faster results</li>
                <li>Your dog has serious behavior issues</li>
                <li>You can't commit to weekly sessions</li>
                <li>You want the heavy lifting done for you</li>
              </ul>
            </div>
          </div>

          <p style={{ marginTop: 'var(--s-6)', fontWeight: 600 }}>
            Not sure which one you need?{' '}
            <Link to="/contact">Call us</Link> and we'll tell you straight.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT A SESSION LOOKS LIKE                                     */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>What a session looks like</h2>

          <ol style={{ marginTop: 'var(--s-5)' }}>
            <li>Arrive at the ranch</li>
            <li>Brief check-in on what's happened since last time</li>
            <li>Warm-up exercises</li>
            <li>Work on the current focus area</li>
            <li>Introduce new concepts</li>
            <li>Homework for the week</li>
          </ol>

          <p style={{ marginTop: 'var(--s-5)' }}>
            We adjust every session based on where your dog actually is, not
            where a curriculum says they should be.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT WE WORK ON                                               */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>What we work on</h2>

          <div className="grid-2" style={{ marginTop: 'var(--s-6)' }}>
            {skillsList.map((skill) => (
              <div
                key={skill}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--s-3)',
                }}
              >
                <Check
                  size={20}
                  style={{ color: 'var(--evergreen)', flexShrink: 0 }}
                />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRICING                                                       */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Pricing</h2>

          <div className="table-wrap" style={{ marginTop: 'var(--s-5)' }}>
            <table>
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Price</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.name}>
                    <td style={{ fontWeight: 600 }}>{row.name}</td>
                    <td className="price">{row.price}</td>
                    <td>
                      {row.duration}
                      {row.note && (
                        <span
                          style={{
                            marginLeft: 'var(--s-3)',
                            fontSize: 'var(--t-small)',
                            color: 'var(--muted)',
                          }}
                        >
                          {row.note}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            style={{
              marginTop: 'var(--s-5)',
              fontSize: 'var(--t-small)',
              color: 'var(--muted)',
            }}
          >
            All sessions at the ranch. $50 evaluation required before first
            session. Evaluation fee credited toward your first session or
            package.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                           */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Private training FAQ</h2>
          <div style={{ marginTop: 'var(--s-5)' }}>
            <FAQSection items={privateFaqs} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                     */}
      {/* ============================================================ */}
      <CTASection
        title="Ready to get started?"
        body="Book a private training session at Floppy Ears Ranch. One trainer, one dog, one hour of focused work on what your dog actually needs."
        primaryLabel="Book a Session"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
