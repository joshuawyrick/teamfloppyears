import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const ring1Cities = [
  'Corona',
  'Norco',
  'Eastvale',
  'Temescal Valley',
  'Home Gardens',
  'El Cerrito',
];

const ring2Cities = [
  'Ontario',
  'Rancho Cucamonga',
  'Chino',
  'Chino Hills',
  'Fontana',
  'Jurupa Valley',
  'Upland',
  'Riverside',
  'Moreno Valley',
  'Lake Elsinore',
  'Menifee',
  'Murrieta',
  'Temecula',
  'Perris',
  'Beaumont',
  'Hemet',
];

const ring3OC = [
  'Yorba Linda',
  'Anaheim Hills',
  'Brea',
  'Fullerton',
  'Irvine',
  'Tustin',
  'Orange',
  'Mission Viejo',
  'Lake Forest',
];

const ring3LA = [
  'Long Beach',
  'Whittier',
  'Downey',
  'Pomona',
  'West Covina',
  'Pasadena',
];

const ring3SB = ['San Bernardino', 'Redlands', 'Highland'];

const driveTimeRows = [
  { city: 'Corona', time: '5 min', services: 'All' },
  { city: 'Norco', time: '8 min', services: 'All' },
  { city: 'Eastvale', time: '12 min', services: 'All' },
  { city: 'Ontario', time: '20 min', services: 'Training / B&T / Boarding' },
  {
    city: 'Rancho Cucamonga',
    time: '25 min',
    services: 'Training / B&T / Boarding',
  },
  {
    city: 'Riverside',
    time: '18 min',
    services: 'Training / B&T / Boarding',
  },
  {
    city: 'Chino Hills',
    time: '25 min',
    services: 'Training / B&T / Boarding',
  },
  {
    city: 'Temecula',
    time: '35 min',
    services: 'Training / B&T / Boarding',
  },
  { city: 'Yorba Linda', time: '30 min', services: 'B&T / Behavior' },
  { city: 'Anaheim Hills', time: '35 min', services: 'B&T / Behavior' },
  { city: 'Irvine', time: '45 min', services: 'B&T / Behavior' },
  { city: 'Long Beach', time: '55 min', services: 'B&T / Behavior' },
];

const faqItems = [
  {
    question: 'Do you travel to my location?',
    answer:
      'No. All training happens at our facility. For clients outside Ring 1, we offer virtual sessions at $139 as a supplement.',
  },
  {
    question: "I'm in Orange County. Is it worth the drive?",
    answer:
      "For Board & Train, absolutely. You drive out once to drop off, once to pick up. For private lessons, it depends on your commitment. Some OC clients make the weekly drive. Most choose Board & Train.",
  },
  {
    question: "Can I do daycare if I'm in Ring 2?",
    answer:
      "We don't recommend it. The daily drive would be 30-80 minutes round trip. That's hard on you and your dog. Boarding for a few days might be a better option.",
  },
  {
    question: 'Do you serve San Diego?',
    answer:
      "Occasionally, for Board & Train only. It's a 90+ minute drive. We have a few clients who've made it work, but it's at the outer edge of our range.",
  },
  {
    question: 'What about Los Angeles?',
    answer:
      'Board & Train and Behavior Rehabilitation, yes. We regularly take dogs from Long Beach, Whittier, and the eastern LA suburbs. Central and west LA is possible but a long haul.',
  },
];

/* ------------------------------------------------------------------ */
/*  Helper                                                             */
/* ------------------------------------------------------------------ */

function CityTags({ cities }: { cities: string[] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--s-2)', marginTop: 'var(--s-4)' }}>
      {cities.map((city) => (
        <span key={city} className="area-tag">
          {city}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ServiceAreas() {
  return (
    <>
      <PageHeader
        title="Areas We Serve"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Service Areas' },
        ]}
        directAnswer="We serve three geographic tiers from our facility in Corona, CA. What's available depends on how far you are. Board & Train is available to everyone. Daycare is only practical if you're close."
        trustBar
      />

      {/* ============================================================ */}
      {/* HOW IT WORKS                                                  */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Three Rings</p>
          <h2>How it works</h2>
          <p>
            Not every service makes sense at every distance. Daycare requires
            a daily drive. Board & Train only requires two trips. We've
            organized our service area into three rings based on drive time
            from the ranch.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* RING 1                                                        */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">Everything We Offer</p>
          <h3>Ring 1 — All Services</h3>
          <p>
            0-15 minutes from the ranch. All services available: Board &
            Train, private lessons, boarding, daycare, evaluations. Roughly
            375,000 people live in this ring.
          </p>
          <CityTags cities={ring1Cities} />
          <p style={{ marginTop: 'var(--s-5)' }}>
            If you're in this ring, you can use every service we offer,
            including daycare and routine boarding.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* RING 2                                                        */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Training, Board & Train, and Boarding</p>
          <h3>Ring 2 — Training & Boarding</h3>
          <p>15-40 minutes from the ranch. All services except daycare.</p>
          <CityTags cities={ring2Cities} />
          <p style={{ marginTop: 'var(--s-5)' }}>
            Private lessons work at this distance if you can commit to weekly
            visits. Board & Train is the more practical option for most people
            in Ring 2.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* RING 3                                                        */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">Board & Train and Behavior Only</p>
          <h3>Ring 3 — Board & Train Only</h3>
          <p>
            40-90 minutes from the ranch. At this distance, the only thing
            that makes sense is dropping your dog off for a multi-week
            program.
          </p>

          <h4 style={{ marginTop: 'var(--s-6)' }}>Orange County</h4>
          <CityTags cities={ring3OC} />

          <h4 style={{ marginTop: 'var(--s-6)' }}>LA Area</h4>
          <CityTags cities={ring3LA} />

          <h4 style={{ marginTop: 'var(--s-6)' }}>San Bernardino</h4>
          <CityTags cities={ring3SB} />

          <p style={{ marginTop: 'var(--s-5)' }}>
            At this distance, the only thing that makes sense is dropping your
            dog off for a multi-week program.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DRIVE TIMES TABLE                                             */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Drive times</h2>
          <div className="table-wrap" style={{ marginTop: 'var(--s-5)' }}>
            <table>
              <thead>
                <tr>
                  <th>City</th>
                  <th>Drive Time</th>
                  <th>Available Services</th>
                </tr>
              </thead>
              <tbody>
                {driveTimeRows.map((row) => (
                  <tr key={row.city}>
                    <td>{row.city}</td>
                    <td>{row.time}</td>
                    <td>{row.services}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY WE DRAW THE LINE                                          */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Why we draw the line</h2>
          <p>
            We'd rather say no than do it badly. Daycare for a dog 45 minutes
            away means 90 minutes of driving every day. That's not fair to
            you or your dog. Board & Train works at any distance because it's
            a one-time trip each way.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                           */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Frequently asked questions</h2>
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA                                                           */}
      {/* ============================================================ */}
      <CTASection
        title="Find out what we can do for you"
        body="Tell us where you are and we'll let you know what services make sense for your situation."
        primaryLabel="Book a Free Call"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
