import { Link } from 'react-router-dom';
import {
  Heart,
  ArrowRight,
  Phone,
  ChevronRight,
  Dog,
  Users,
  TreePine,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const beliefs = [
  {
    icon: ShieldCheck,
    title: 'Honesty over sales',
    desc: 'If we don\'t think we can help your dog, we\'ll say so. If private lessons would serve you better than a $2,900 Board & Train, we\'ll tell you that too. We\'d rather lose a sale than take your money for something that won\'t work.',
  },
  {
    icon: Users,
    title: 'The owner is half the equation',
    desc: 'A trained dog with an untrained owner goes back to being an untrained dog. That\'s why every program includes a transfer session, refreshers, and lifetime support. We don\'t just train dogs — we teach people.',
  },
  {
    icon: Dog,
    title: 'Every dog gets evaluated individually',
    desc: 'We don\'t run cookie-cutter programs. A fearful dog needs something different than a pushy dog, and a puppy needs something different than a three-year-old with bite history. The evaluation tells us what your dog actually needs.',
  },
  {
    icon: Heart,
    title: 'Pit bulls deserve better',
    desc: 'We\'ve rescued, rehabilitated, and rehomed more than 200 pit bulls since 2019. The breed isn\'t the problem. Bad breeding, bad ownership, and bad information are the problem. We take the cases other places won\'t.',
  },
  {
    icon: Lightbulb,
    title: 'Transparency is not optional',
    desc: 'We publish our prices. We show you the facility before you book. We send daily photos and regular video. If a trainer won\'t let you see where your dog stays or won\'t tell you what it costs until you\'re on the phone, ask yourself why.',
  },
];

const services = [
  { name: 'Board & Train', price: 'from $2,900', link: '/board-and-train' },
  { name: 'Behavior Rehabilitation', price: '$3,500', link: '/aggressive-dog-training' },
  { name: 'Off-Leash Reliability', price: '$4,500', link: '/off-leash-dog-training' },
  { name: 'Puppy Board & Train', price: '$3,200', link: '/puppy-training' },
  { name: 'Private lessons', price: '$200/session', link: '/private-dog-training' },
  { name: 'Dog boarding', price: 'from $80/night', link: '/dog-boarding' },
  { name: 'Dog daycare', price: '$40/day', link: '/dog-daycare' },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader
        title="About Floppy Ears Ranch"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'About' },
        ]}
        directAnswer="Floppy Ears Ranch is a five-acre dog training and boarding facility in Corona, California, founded in 2019 by Chad and Kyla Gabriel. It started with a shelter dog named Jax — a pit bull nobody wanted — and grew into a full-service operation that's trained and boarded more than a thousand dogs. We specialize in Board & Train, behavior rehabilitation, and working with dogs other places won't take."
      />

      {/* ============================================================ */}
      {/* IT STARTED WITH A DOG                                        */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>It started with a dog nobody wanted</h2>
          <p>
            In 2012, Kyla walked into a shelter and adopted a pit bull named Jax.
            He was scheduled to be euthanized. He was also a mess — reactive,
            fearful, and completely untrained. She didn't know any of that when
            she signed the paperwork.
          </p>
          <p>
            What followed was two years of figuring it out: hiring trainers,
            reading everything, learning what worked and what didn't, and slowly
            turning a dog nobody wanted into a dog who could actually be lived
            with. The process changed Kyla's career. She went from working in
            social and behavioral sciences to working with dogs full-time.
          </p>
          <p>
            Jax lived a full, good life and passed away in 2020. The Jax Weller
            Arena — our kennel-free daycare facility — is named after him.
            Everything we do started because of that one dog.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW THE RANCH CAME TOGETHER                                  */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>How the ranch came together</h2>
          <p>
            Chad played professional baseball for a decade. He was drafted into
            a St. Louis Cardinals affiliate in 2004, then played six seasons in
            Brisbane, Australia. When that career ended, he brought the same
            discipline and structure to dog training — and it turned out the
            skills transfer better than you'd think.
          </p>
          <p>
            Kyla holds a Penn State degree in Social and Behavioral Sciences, is
            a professional member of the International Association of Canine
            Professionals (IACP), and is a certified AKC Canine Good Citizen
            Evaluator. Her background in human behavior gave her an edge in
            understanding what makes dogs tick — and what makes their owners
            tick.
          </p>
          <p>
            They founded Floppy Ears Ranch in 2019 on five acres in Corona's
            Temescal Valley. The name came from the dogs — most of the pit bulls
            they rescued had floppy ears, and it stuck. What started as rescue
            work grew into a full training and boarding operation that now serves
            Riverside County, the Inland Empire, Orange County, and the
            surrounding area.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THE PIT BULL WORK                                            */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>The pit bull work</h2>
          <p>
            We've rescued, rehabilitated, and rehomed more than 200 pit bulls
            since 2019. Most of them came from shelters where they were out of
            time. Some came from situations worse than that.
          </p>
          <p>
            The breed gets a bad reputation, and some of it is earned — not
            because there's something wrong with the breed, but because pit
            bulls attract irresponsible owners at a higher rate than most other
            dogs. The result is a shelter system overflowing with pit bulls who
            were never socialized, never trained, and never given a fair chance.
          </p>
          <p>
            We take the ones we can. We evaluate them honestly, we train them
            properly, and we place them in homes that are prepared for the dog
            they're getting — not the dog they wish they were getting. Not every
            dog is adoptable, and we don't pretend otherwise. But the ones who
            are deserve better than a concrete run and a countdown.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT WE BELIEVE                                              */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>What we believe</h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--s-7)',
              marginTop: 'var(--s-6)',
            }}
          >
            {beliefs.map((belief) => (
              <div key={belief.title} style={{ display: 'flex', gap: 'var(--s-5)', alignItems: 'flex-start' }}>
                <belief.icon
                  size={28}
                  style={{ color: 'var(--evergreen)', flexShrink: 0, marginTop: '2px' }}
                />
                <div>
                  <h3>{belief.title}</h3>
                  <p>{belief.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT WE DO                                                   */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>What we do</h2>
          <p>
            Everything under one roof — training, boarding, and daycare — run by
            the same people on the same property.
          </p>

          <div className="table-wrap" style={{ marginTop: 'var(--s-5)' }}>
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.name}>
                    <td>
                      <Link to={s.link} style={{ fontWeight: 600 }}>
                        {s.name}
                      </Link>
                    </td>
                    <td className="price">{s.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link
            to="/pricing"
            className="btn btn--secondary"
            style={{ marginTop: 'var(--s-6)' }}
          >
            Full Pricing
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FIVE ACRES IN CORONA                                         */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Five acres in Corona</h2>
          <p>
            We're at 21761 Knabe Rd, Corona, CA 92883 — in the Temescal Valley
            area, right off the 91/15 interchange. The property includes:
          </p>
          <ul style={{ marginTop: 'var(--s-4)' }}>
            <li>Climate-controlled indoor kennels</li>
            <li>The Jax Weller Arena — kennel-free daycare with cooled turf, shade, pools, and elevated beds</li>
            <li>Open training grounds for obedience and off-leash work</li>
            <li>Secure, fenced perimeter</li>
            <li>Separate areas for dogs who need space from other dogs</li>
          </ul>
          <p style={{ marginTop: 'var(--s-5)', fontWeight: 600 }}>
            Come see it. Tours are free and we'd rather you walk the property
            before you commit.{' '}
            <Link to="/facility">See the facility</Link> or{' '}
            <Link to="/contact">schedule a visit</Link>.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHO WE'RE NOT FOR                                            */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Who we're NOT for</h2>
          <p>
            We'd rather be upfront about this than waste your time:
          </p>
          <ul style={{ marginTop: 'var(--s-4)' }}>
            <li>
              <strong>People who want a quick fix with no follow-through.</strong>{' '}
              Board &amp; Train works, but only if you maintain it at home. If you
              plan to go back to zero structure the day your dog comes home,
              save your money.
            </li>
            <li>
              <strong>People who want purely positive, treat-only training.</strong>{' '}
              We use positive reinforcement heavily, but we also use fair, clear
              corrections. If you're looking for a trainer who will never say
              "no" to a dog, we're not the right fit.
            </li>
            <li>
              <strong>People shopping purely on price.</strong>{' '}
              We're competitively priced for what we include, but we're not the
              cheapest option in the area and we're not trying to be. If price
              is the only factor, you'll find someone less expensive.
            </li>
            <li>
              <strong>People who won't do the evaluation.</strong>{' '}
              We evaluate every dog before accepting them into a program. That
              protects your dog, our dogs, and our team. It's not optional.
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                    */}
      {/* ============================================================ */}
      <CTASection
        title="Still have questions?"
        body="Call us, come visit, or tell us about your dog. The first conversation is always free, and we'll give you an honest answer about whether we're the right fit."
        primaryLabel="Tell Us About Your Dog"
        primaryTo="/book-evaluation"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:9514546773"
        background="evergreen"
      />
    </>
  );
}
