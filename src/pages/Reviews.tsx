import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

export default function Reviews() {
  return (
    <>
      <PageHeader
        title="Reviews"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Reviews' },
        ]}
        directAnswer="We're building out our reviews page. In the meantime, you can read what our clients say about us on Google."
      />

      {/* ============================================================ */}
      {/* OUR REVIEWS                                                   */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Our Reviews</p>
          <h2>We're putting together a proper reviews section</h2>
          <p>
            We're putting together a proper reviews section that does our
            clients' words justice. For now, the best place to read about
            people's experience with Floppy Ears Ranch is our Google Business
            Profile.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ marginTop: 'var(--s-5)' }}
          >
            Read Our Google Reviews
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA                                                           */}
      {/* ============================================================ */}
      <CTASection
        title="Ready to become our next success story?"
        body="Get in touch and let's talk about your dog."
        primaryLabel="Book a Free Call"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
