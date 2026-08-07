import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const placeholderCases = [
  'Aggression Rehabilitation',
  'Reactive Dog Turnaround',
  'Puppy Board & Train',
  'Off-Leash Reliability',
  'Severe Reactivity',
  'Rescue Dog Transformation',
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Results() {
  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader
        title="Dog Training Results"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Results' },
        ]}
        directAnswer="We're building out our results page with detailed case studies, before-and-after documentation, and client stories. Every case study requires a signed release from the client, and we're working through that process now."
      />

      {/* ============================================================ */}
      {/* COMING SOON EXPLANATION                                       */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">WHAT'S COMING</p>
          <h2>Real cases, real results</h2>
          <p>
            This page will feature real case studies with real dogs — the
            problem, the approach, the outcome, and what happened after the dog
            went home. We believe in showing the work, not just talking about
            it.
          </p>
          <p>
            We're collecting client permissions and putting together
            documentation that does these dogs justice. In the meantime, you
            can see our reviews from real clients or call us and we'll connect
            you with past clients who are willing to share their experience.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PLACEHOLDER GRID                                              */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Case studies</h2>
          <div className="grid-3" style={{ marginTop: 'var(--s-6)' }}>
            {placeholderCases.map((label) => (
              <div
                key={label}
                className="card"
                style={{
                  textAlign: 'center',
                  padding: 'var(--s-8) var(--s-6)',
                  opacity: 0.55,
                  border: '2px dashed var(--border, #ccc)',
                }}
              >
                <p
                  className="area-tag"
                  style={{
                    marginBottom: 'var(--s-4)',
                    display: 'inline-block',
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontSize: 'var(--t-small)',
                    color: 'var(--muted)',
                    margin: 0,
                  }}
                >
                  Case Study Coming Soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                     */}
      {/* ============================================================ */}
      <CTASection
        title="See our work firsthand"
        body="Book a tour of the facility or call us to speak with past clients."
        primaryLabel="Book a Tour"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
