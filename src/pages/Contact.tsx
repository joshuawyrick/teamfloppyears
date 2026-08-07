import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Mail, FileText, MapPin, Clock, Car, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const contactCards = [
  {
    icon: Phone,
    title: 'Call us',
    desc: 'Talk to a real person. Best for urgent questions or dogs with behavior issues.',
    action: '(951) 454-6773',
    href: 'tel:9514546773',
    isLink: false,
  },
  {
    icon: MessageSquare,
    title: 'Text us',
    desc: 'Same number. Good for quick questions when you can\'t talk.',
    action: '(951) 454-6773',
    href: 'sms:9514546773',
    isLink: false,
  },
  {
    icon: Mail,
    title: 'Email us',
    desc: 'We check email throughout the day and reply within a few hours.',
    action: 'info@floppyearsranch.com',
    href: 'mailto:info@floppyearsranch.com',
    isLink: false,
  },
  {
    icon: FileText,
    title: 'Fill out the form',
    desc: 'Answer a few questions about your dog and we\'ll come back with a recommendation.',
    action: 'Tell Us About Your Dog',
    href: '/book-evaluation',
    isLink: true,
  },
];

const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 4:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 12:00 PM' },
  { day: 'Holidays', time: 'Limited hours — call ahead' },
];

const afterSteps = [
  'We respond within a few hours (usually faster).',
  'We ask about your dog — breed, age, what\'s going on, what you want.',
  'We give you a straight recommendation: which program, what it costs, and when we can start.',
  'If we\'re not the right fit, we\'ll tell you and point you somewhere else.',
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Contact() {
  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader
        title="Contact Floppy Ears Ranch"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact' },
        ]}
        directAnswer="Floppy Ears Ranch is at 21761 Knabe Rd, Corona, CA 92883. Call or text (951) 454-6773. We respond to calls and texts during business hours and to emails within a few hours. The first phone consultation is free — 30 minutes, no sales pitch, just honest answers about your dog."
      />

      {/* ============================================================ */}
      {/* CONTACT CARDS                                                */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Reach us however works for you</h2>

          <div className="grid-2" style={{ marginTop: 'var(--s-6)' }}>
            {contactCards.map((card) => (
              <div className="card" key={card.title}>
                <card.icon
                  size={28}
                  style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-4)' }}
                />
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                {card.isLink ? (
                  <Link
                    to={card.href}
                    className="btn btn--primary"
                    style={{ marginTop: 'var(--s-4)' }}
                  >
                    {card.action}
                    <ArrowRight size={16} />
                  </Link>
                ) : (
                  <a
                    href={card.href}
                    className="btn btn--primary"
                    style={{ marginTop: 'var(--s-4)' }}
                  >
                    {card.action}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHERE WE ARE                                                 */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Where we are</h2>

          <div className="grid-2" style={{ marginTop: 'var(--s-6)' }}>
            <div>
              <div style={{ display: 'flex', gap: 'var(--s-3)', alignItems: 'flex-start', marginBottom: 'var(--s-5)' }}>
                <MapPin size={20} style={{ color: 'var(--evergreen)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontWeight: 600, marginBottom: 'var(--s-1)' }}>
                    Floppy Ears Ranch
                  </p>
                  <p style={{ marginBottom: 'var(--s-1)' }}>
                    21761 Knabe Rd<br />
                    Corona, CA 92883
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--s-3)', alignItems: 'flex-start' }}>
                <Phone size={20} style={{ color: 'var(--evergreen)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <a href="tel:9514546773" style={{ fontWeight: 600 }}>
                    (951) 454-6773
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                background: 'var(--bone)',
                borderRadius: 'var(--radius-lg)',
                minHeight: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--muted)',
                fontSize: 'var(--t-small)',
              }}
            >
              Map placeholder — 21761 Knabe Rd, Corona, CA 92883
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOURS                                                        */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Hours</h2>

          <div className="table-wrap" style={{ marginTop: 'var(--s-5)' }}>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                {hours.map((row) => (
                  <tr key={row.day}>
                    <td style={{ fontWeight: 600 }}>{row.day}</td>
                    <td>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: 'var(--s-5)', fontSize: 'var(--t-small)', color: 'var(--muted)' }}>
            Drop-offs and pick-ups are by appointment. If you're coming for a
            tour or evaluation, please call ahead so we can make sure someone is
            available to walk you through the property.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DRIVING DIRECTIONS                                           */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Driving directions</h2>

          <div className="grid-3" style={{ marginTop: 'var(--s-6)' }}>
            <div className="card">
              <Car
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>From the 91 Freeway</h4>
              <p>
                Exit at Serfas Club Dr/Temescal Canyon Rd. Head south on
                Temescal Canyon Rd, turn right on Knabe Rd. We're on the left,
                about half a mile in.
              </p>
            </div>
            <div className="card">
              <Car
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>From the 15 Freeway</h4>
              <p>
                Take the Cajalco Rd exit. Head west on Cajalco, turn left on
                Temescal Canyon Rd, then right on Knabe Rd. About 10 minutes
                from the freeway.
              </p>
            </div>
            <div className="card">
              <Car
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>From the south (Lake Elsinore / Murrieta)</h4>
              <p>
                Take the 15 north to Temescal Canyon Rd. Head west, then right
                on Knabe Rd. About 20–25 minutes depending on where you're
                starting.
              </p>
            </div>
          </div>

          <p style={{ marginTop: 'var(--s-5)', fontSize: 'var(--t-small)', color: 'var(--muted)' }}>
            Look for the ranch-style property on the left side of Knabe Rd. If
            you pass the curve you've gone too far. Call us if you get lost:{' '}
            <a href="tel:9514546773">(951) 454-6773</a>.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT HAPPENS AFTER YOU REACH OUT                             */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>What happens after you reach out</h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--s-5)',
              marginTop: 'var(--s-6)',
            }}
          >
            {afterSteps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 'var(--s-4)', alignItems: 'flex-start' }}>
                <CheckCircle
                  size={20}
                  style={{ color: 'var(--evergreen)', flexShrink: 0, marginTop: '2px' }}
                />
                <p>{step}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 'var(--s-6)' }}>
            No sales pitch. No pressure. If we're not the right fit for your
            dog, we'll tell you — and if we know someone who is, we'll point you
            there.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                    */}
      {/* ============================================================ */}
      <CTASection
        title="Let's talk about your dog"
        body="The first conversation is free — 30 minutes on the phone with a trainer who will give you a straight answer about what your dog needs."
        primaryLabel="Tell Us About Your Dog"
        primaryTo="/book-evaluation"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:9514546773"
        background="evergreen"
      />
    </>
  );
}
