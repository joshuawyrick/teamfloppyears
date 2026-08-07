import { Link } from 'react-router-dom';
import { Check, X, Sun, Droplets, Shield, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const dailySchedule = [
  'Morning drop-off and settle-in',
  'Play group (organized by size/temperament)',
  'Outdoor time in the arena',
  'Rest period (crate time with water)',
  'Afternoon activity',
  'End-of-day settle',
  'Pickup',
];

const goodFit = [
  'Social dogs who enjoy other dogs',
  'Dogs needing stimulation and exercise during the day',
  'Dogs with basic manners',
  'Dogs in Ring 1 (Corona, Norco, Eastvale, Temescal Valley)',
];

const notRight = [
  'Dogs with dog aggression',
  'Dogs with severe anxiety in group settings',
  'Dogs outside our Ring 1 service area',
  'Dogs without current vaccinations',
];

const pricing = [
  { service: 'Full Day', price: '$40', note: '' },
  { service: 'Half Day', price: '$25', note: '4 hours or less' },
  { service: '10-Day Pack', price: '$360', note: 'Save $40' },
  { service: 'Evaluation', price: '$50', note: 'One-time' },
];

const faqItems = [
  {
    question: 'What vaccinations are required?',
    answer:
      'DHPP, Bordetella, and Rabies — all current. Flea and tick prevention must be current. We require vet records before the first visit.',
  },
  {
    question: 'Can my dog do daycare and training?',
    answer:
      'Yes. Some clients combine daycare with private lessons. Your dog gets socialization and exercise on daycare days and focused training on lesson days.',
  },
  {
    question: 'How many dogs are in a play group?',
    answer:
      'We keep groups small — usually 4-8 dogs depending on size and temperament. Groups are supervised at all times.',
  },
  {
    question: "What if my dog doesn't do well in the evaluation?",
    answer:
      "Not every dog is a daycare dog, and that's okay. We'll let you know what we observed and suggest alternatives — boarding with individual attention, private training, or a different approach.",
  },
  {
    question: 'Do you offer overnight boarding with daycare?',
    answer:
      "Yes. You can combine daycare and boarding. Your dog gets structured daytime activity and sleeps in a climate-controlled kennel at night. Boarding is $80/night.",
  },
];

export default function Daycare() {
  return (
    <>
      <PageHeader
        title="Dog Daycare in Corona, CA"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Daycare' },
        ]}
        directAnswer="Dog daycare at Floppy Ears Ranch is $40 per day. Your dog spends the day on five acres with trainer supervision, structured play, and outdoor time in the Jax Weller Arena. Available for dogs in our Ring 1 service area only — Corona, Norco, Eastvale, and Temescal Valley."
      />

      {/* What Daycare Looks Like */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">A Day at the Ranch</p>
          <p>
            This isn't a warehouse with a concrete floor and 40 dogs. Your dog
            spends the day on five acres with structured play groups, outdoor
            time, and trainer supervision. We limit the number of dogs to keep
            it manageable and safe.
          </p>
        </div>
      </section>

      {/* Jax Weller Arena */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">The Jax Weller Arena</p>
          <p>
            A covered turf arena with cooling, shade structures, and splash
            pools. Usable even in Corona's worst heat. Your dog gets real
            outdoor time without the risk of overheating on a 110-degree day.
          </p>
        </div>
      </section>

      {/* Daily Structure */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Your Dog's Day</p>
          <div className="card" style={{ maxWidth: '600px' }}>
            <ol style={{ paddingLeft: 'var(--s-5)', margin: 0 }}>
              {dailySchedule.map((item) => (
                <li
                  key={item}
                  style={{ marginBottom: 'var(--s-2)', lineHeight: 1.6 }}
                >
                  {item}
                </li>
              ))}
            </ol>
          </div>
          <p style={{ marginTop: 'var(--s-4)' }}>
            We don't just open a gate and let dogs figure it out. Play is
            structured, supervised, and stopped before it gets too amped.
          </p>
        </div>
      </section>

      {/* Assessment Required */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">Every Dog Gets Evaluated</p>
          <p>
            A $50 evaluation is required before your dog's first daycare visit.
            We need to see how your dog handles the group environment, the
            facility, and the structure. Not every dog enjoys group settings —
            and that's fine. We'd rather find out in a controlled evaluation
            than on your dog's first full day.
          </p>
        </div>
      </section>

      {/* Who It's For / Not For */}
      <section className="section section--bone">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <h3>Good Fit</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {goodFit.map((item) => (
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
              <h3>Not the Right Fit</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {notRight.map((item) => (
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

      {/* Pricing */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <div className="card" style={{ maxWidth: '600px', overflow: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: 'var(--s-2) var(--s-3)', borderBottom: '2px solid var(--border)' }}>Service</th>
                  <th style={{ textAlign: 'right', padding: 'var(--s-2) var(--s-3)', borderBottom: '2px solid var(--border)' }}>Price</th>
                  <th style={{ textAlign: 'right', padding: 'var(--s-2) var(--s-3)', borderBottom: '2px solid var(--border)' }}>Note</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row) => (
                  <tr key={row.service}>
                    <td style={{ padding: 'var(--s-2) var(--s-3)', borderBottom: '1px solid var(--border)', fontWeight: 600 }}>{row.service}</td>
                    <td style={{ padding: 'var(--s-2) var(--s-3)', borderBottom: '1px solid var(--border)', textAlign: 'right' }}>{row.price}</td>
                    <td style={{ padding: 'var(--s-2) var(--s-3)', borderBottom: '1px solid var(--border)', textAlign: 'right', color: 'var(--muted)' }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--bone">
        <div className="container">
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Try daycare at the ranch"
        body="Book an evaluation and see if daycare is the right fit for your dog. We'll assess temperament, social comfort, and group readiness in a controlled setting."
        primaryLabel="Book an Evaluation"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
