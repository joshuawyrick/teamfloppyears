import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function MeetTheTeam() {
  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader
        title="Meet the Team"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Meet the Team' },
        ]}
      />

      {/* ============================================================ */}
      {/* INTRO                                                         */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p>
            Floppy Ears Ranch is a family business. Chad and Kyla Gabriel
            started this in 2019 because they couldn't find training they
            trusted for their own dogs. Five years later, they've worked with
            over 1,000 dogs and built a facility that matches their standards.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAD GABRIEL                                                  */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <div className="card" style={{ padding: 'var(--s-7)' }}>
            <p className="eyebrow">HEAD TRAINER &amp; OWNER</p>
            <h2>Chad Gabriel</h2>
            <p>
              Chad is the head trainer and the person most clients meet first.
              He evaluates every dog that comes through the gate, designs every
              training program, and handles the majority of the aggression and
              behavior cases.
            </p>
            <p>
              Before dogs, Chad spent 15 years in construction management. He
              brings the same approach to training — build it right, test it
              under pressure, don't cut corners.
            </p>
            <p>
              Chad holds IACP (International Association of Canine
              Professionals) membership and is an AKC Canine Good Citizen
              evaluator. He has worked with over 1,000 dogs, including hundreds
              of aggression cases, and he will tell you honestly if he can't
              help yours.
            </p>
            <p>
              His training philosophy is straightforward: build a relationship
              first, be clear about expectations, be fair with corrections, and
              never ask a dog to do something it doesn't understand yet.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* KYLA GABRIEL                                                  */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <div className="card" style={{ padding: 'var(--s-7)' }}>
            <p className="eyebrow">CO-OWNER &amp; TRAINER</p>
            <h2>Kyla Gabriel</h2>
            <p>
              Kyla runs the boarding operations, handles training clients, and
              manages the business side of the ranch. She is also the reason
              the facility exists at all.
            </p>
            <p>
              Kyla's journey into dog training started with a dog named Jax — a
              rescue with severe reactivity who couldn't walk down a street
              without losing his mind. After years of failed training attempts,
              working with bad trainers, and being told the dog was hopeless,
              she decided to learn how to do it herself.
            </p>
            <p>
              That experience shapes everything about how Floppy Ears Ranch
              operates. The Jax Weller Arena — the covered, climate-controlled
              training space at the heart of the facility — is named for him.
            </p>
            <p>
              Kyla understands what it's like to be the owner of a "difficult"
              dog. She knows the embarrassment, the frustration, and the fear.
              When she talks to clients, it's not from a textbook — it's from
              lived experience.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* JOSE                                                          */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <div className="card" style={{ padding: 'var(--s-7)' }}>
            <p className="eyebrow">TRAINER</p>
            <h2>Jose</h2>
            <p>
              Jose handles daily training sessions, manages the kennel
              operations, and works closely with Chad on Board &amp; Train
              dogs. He has been with Floppy Ears Ranch since the early days and
              has trained alongside Chad through hundreds of cases.
            </p>
            <p>
              Jose is reliable, patient, and good with nervous dogs. The dogs
              trust him, which is the only credential that matters in this
              work.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                     */}
      {/* ============================================================ */}
      <CTASection
        title="Work with our team"
        body="Book a free phone consultation to tell us about your dog. We'll be honest about whether we can help and which program makes sense."
        primaryLabel="Book a Free Call"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
