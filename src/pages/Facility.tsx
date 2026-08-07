import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const facilityFaqs = [
  {
    question: 'Can I tour before committing?',
    answer:
      "Yes, and we want you to. Walk the property, see the kennels, watch training if it's in progress. No appointment necessary during business hours, but calling ahead helps us make sure someone's available to walk you through.",
  },
  {
    question: 'Is the facility air conditioned?',
    answer:
      "The kennels are fully climate-controlled year-round. The Jax Weller Arena has cooling systems, shade structures, and splash pools. We don't cancel or skip training because of heat — the facility is built for Corona summers.",
  },
  {
    question: 'How are dogs separated?',
    answer:
      'Every dog has their own kennel space. Reactive and aggressive dogs are housed in a separate area and handled individually. Dogs are never left unsupervised together. Socialization and group play only happen with evaluated, compatible dogs.',
  },
  {
    question: 'Where is the facility located?',
    answer:
      "21761 Knabe Rd, Corona, CA 92883. We're in the Temescal Valley area, about 10 minutes from the 15 freeway. Easy access from Corona, Norco, Eastvale, and the surrounding Inland Empire.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Facility() {
  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader
        title="Our Facility"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Facility' },
        ]}
        directAnswer="Floppy Ears Ranch sits on five acres in the Temescal Valley area of Corona, CA. Climate-controlled kennels, a covered training arena, and enough open space that your dog can actually learn in real-world conditions — not a parking lot with cones."
        trustBar
      />

      {/* ============================================================ */}
      {/* THE PROPERTY                                                  */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>The property</h2>
          <p>
            Five acres in Corona's Temescal Valley. This is not a strip mall
            training center. It's real property with room for dogs to work —
            open fields, controlled training areas, and enough variety that a
            dog trained here can handle anything they'll face in the real world.
          </p>
          <p>
            We built this facility around what dogs need, not what a landlord
            would rent us.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* KENNELS                                                       */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">WHERE YOUR DOG SLEEPS</p>
          <h2>Kennels</h2>
          <p>
            Climate-controlled, indoor. Each dog has their own space.
            Temperature is maintained year-round — critical when Corona summers
            push past 100 degrees. Kennels are cleaned daily. Reactive and
            aggressive dogs are housed in a separate area, managed individually,
            and never put in situations that set them up to fail.
          </p>
          <p>
            Your dog sleeps inside, in air conditioning, every night.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* JAX WELLER ARENA                                              */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">WHERE THE WORK HAPPENS</p>
          <h2>The Jax Weller Arena</h2>
          <p>
            Covered arena with cooled turf, shade structures, and splash pools.
            Named for Jax, the dog who changed everything for Kyla — and the
            reason this facility exists at all.
          </p>
          <p>
            The arena is usable year-round, including during Corona's brutal
            summers. Dogs train on real turf in a covered, cooled environment
            where heat and weather never interrupt the work.
          </p>
          <p>
            We don't cancel training because it's hot. We built a facility
            where heat doesn't matter.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TRAINING GROUNDS                                              */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Training grounds</h2>
          <p>
            Multiple outdoor training areas with different surfaces and
            environments. Open fields for distance work and recall. Controlled
            areas for socialization and exposure work. Varied terrain so dogs
            learn to generalize commands across different settings.
          </p>
          <p>
            A dog trained in a sterile environment performs in a sterile
            environment. We train in conditions that match real life.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COME SEE IT                                                   */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">BOOK A TOUR</p>
          <h2>Come see it</h2>
          <p>
            We want you to see where your dog will be. Walk the property, see
            the kennels, watch training in progress. No appointment necessary
            during business hours, but calling ahead helps us make sure someone
            is available to walk you through everything.
          </p>
          <p>
            Tours are free. Come with questions. We'll answer all of them.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                           */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Facility FAQ</h2>
          <div style={{ marginTop: 'var(--s-5)' }}>
            <FAQSection items={facilityFaqs} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                     */}
      {/* ============================================================ */}
      <CTASection
        title="Come see it for yourself"
        body="Walk the property, see the kennels, watch training in progress. Tours are free and we encourage them."
        primaryLabel="Book a Tour"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
