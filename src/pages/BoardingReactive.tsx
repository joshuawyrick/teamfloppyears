import { Link } from 'react-router-dom';
import { Check, X, Shield, TriangleAlert as AlertTriangle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const dogsWeAccept = [
  'Dog-reactive dogs',
  'Dogs with bite history',
  'Fear-aggressive dogs',
  'Resource guarders',
  'Dogs rejected by other facilities',
  'Dogs in our training programs',
];

const dogsMayDecline = [
  'Dogs with severe human-directed aggression posing a handling risk to staff',
  'Dogs with active contagious illness',
  'Dogs needing veterinary supervision beyond our capability',
];

const pricing = [
  { service: 'Reactive/Aggressive Boarding', price: '$100/night', note: '' },
  { service: 'Holiday Rate', price: '$120/night', note: '' },
  { service: 'Multi-dog Discount', price: '-$10/night', note: 'Per additional dog' },
];

const faqItems = [
  {
    question: 'Will my dog interact with other dogs?',
    answer:
      'No. Reactive and aggressive dogs are housed and exercised individually. They never have contact with other client dogs.',
  },
  {
    question: 'How do you handle my dog safely?',
    answer:
      'Our staff is trained specifically in handling reactive and aggressive dogs. We use proper equipment, maintain safe distances, and read body language.',
  },
  {
    question: "Can I board my dog while they're in a training program?",
    answer:
      'Yes. Many clients board their dogs between training sessions or while traveling.',
  },
  {
    question: 'What if my dog is dog-reactive but fine with people?',
    answer:
      "That's the most common case we see. Your dog will be handled by staff they're comfortable with and kept away from other dogs.",
  },
  {
    question: 'Do you offer training during the boarding stay?',
    answer:
      'Not as a standard part of boarding. If you want training, we recommend our Board & Train or Behavior Rehabilitation programs.',
  },
];

export default function BoardingReactive() {
  return (
    <>
      <PageHeader
        title="Boarding for Reactive and Aggressive Dogs"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Dog Boarding', to: '/dog-boarding' },
          { label: 'Boarding for Reactive & Aggressive Dogs' },
        ]}
        directAnswer="Boarding for reactive and aggressive dogs at Floppy Ears Ranch is $100 per night. If every kennel in town has turned you away, we probably haven't. Our facility is built for these dogs, and our staff knows how to handle them."
      />

      {/* Empathetic Opening */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">If You've Been Turned Away</p>
          <p>
            If you're on this page, you've probably called five boarding
            facilities and been told no. Your dog is reactive, has a bite
            history, or can't be around other dogs — and nobody will take them.
          </p>
          <p>We will.</p>
          <p>
            Floppy Ears Ranch was built for dogs like yours. We're trainers, not
            kennel attendants. We know how to read these dogs, house them
            safely, and give them a stress-free stay.
          </p>
        </div>
      </section>

      {/* Assessment */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">How We Decide</p>
          <p>
            A $50 evaluation is required before the first boarding stay. We need
            to meet your dog, understand their triggers, and determine how to
            house and handle them safely. Most dogs are accepted. If we can't
            take yours, we'll be honest about why and help you find an
            alternative.
          </p>
        </div>
      </section>

      {/* Dogs We Accept */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Dogs We Accept</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {dogsWeAccept.map((item) => (
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
        </div>
      </section>

      {/* Dogs We May Decline */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">Dogs We May Decline</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {dogsMayDecline.map((item) => (
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
      </section>

      {/* Housing */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">How They're Housed</p>
          <p>
            Reactive and aggressive dogs are housed in a separate area from our
            general boarding population. Each dog gets an individual,
            climate-controlled kennel. There is no group play. Outdoor time is
            supervised and individual — your dog goes out alone with a handler,
            never with other dogs.
          </p>
        </div>
      </section>

      {/* Important Note */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">Boarding Is Management, Not Treatment</p>
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--s-3)' }}>
              <AlertTriangle size={24} style={{ color: 'var(--rust)', flexShrink: 0, marginTop: 2 }} />
              <div>
                <p>
                  Boarding keeps your dog safe and cared for while you're away,
                  but it doesn't fix behavior. If your dog is reactive or
                  aggressive and you want to change that, boarding alone won't
                  do it.
                </p>
                <p>
                  We recommend our{' '}
                  <Link to="/aggressive-dog-training">
                    Behavior Rehabilitation program ($3,500)
                  </Link>{' '}
                  or{' '}
                  <Link to="/reactive-dog-training">
                    Board &amp; Train for reactive dogs ($2,900)
                  </Link>
                  . Both programs address the root behavior, not just manage it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section section--bone">
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
            <p style={{ marginTop: 'var(--s-4)', color: 'var(--muted)' }}>
              $50 evaluation required before first boarding stay.
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
        title="We'll take your dog"
        body="If you've been turned away everywhere else, call us. We'll evaluate your dog, explain how we house and handle reactive dogs, and give you a straight answer."
        primaryLabel="Request an Assessment"
        primaryTo="/book-evaluation"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
