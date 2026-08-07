import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Calendar,
  Award,
  Heart,
  ArrowRight,
  Phone,
  Check,
  ChevronRight,
  Plus,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const helpCards = [
  {
    title: `My dog pulls, jumps, and won't listen`,
    desc: 'Basic obedience that actually holds up outside the living room.',
    to: '/dog-training',
  },
  {
    title: 'My dog barks and lunges at other dogs',
    desc: `Reactivity is common, it's fixable, and it gets worse if you wait.`,
    to: '/reactive-dog-training',
  },
  {
    title: 'My dog has bitten or scared someone',
    desc: 'We take these cases seriously and evaluate every dog individually.',
    to: '/aggressive-dog-training',
  },
  {
    title: 'I have a new puppy',
    desc: 'Get it right the first time instead of undoing it later.',
    to: '/puppy-training',
  },
  {
    title: 'I want my dog reliable off leash',
    desc: 'Real recall, around real distractions, in real places.',
    to: '/off-leash-dog-training',
  },
  {
    title: 'I need somewhere safe for my dog to stay',
    desc: 'Overnight boarding and daycare, run by trainers.',
    to: '/dog-boarding',
  },
]

const boardTrainPrograms = [
  {
    name: 'Off-Leash Reliability',
    duration: 'Custom length',
    price: '$4,500',
    desc: 'Dogs ready for real off-leash freedom. E-collar included.',
  },
  {
    name: 'Behavior Rehabilitation',
    duration: '3 weeks',
    price: '$3,500',
    desc: 'Aggression, bite history, severe reactivity.',
  },
  {
    name: 'Puppy Board & Train',
    duration: '6 weeks',
    price: '$3,200',
    desc: 'Puppies 6 months and under.',
  },
  {
    name: 'Board & Train',
    duration: '3 weeks',
    price: '$2,900',
    desc: 'Dogs 6 months and older.',
  },
]

const includedItems = [
  'Daily photo updates',
  'Video every three days',
  'A mid-program call',
  'The transfer session',
  'Free refresher lessons',
  'Lifetime support',
]

const pricingRows = [
  { service: 'Board & Train', price: 'from $2,900' },
  { service: 'Behavior Rehabilitation', price: '$3,500' },
  { service: 'Off-Leash Reliability', price: '$4,500' },
  { service: 'Private lessons', price: '$200 / 5 for $900' },
  { service: 'Boarding', price: 'from $80 per night' },
  { service: 'Daycare', price: '$40 per day' },
  { service: 'Phone consultation', price: 'Free' },
]

const areaGroups = [
  {
    label: 'Corona and next door — daycare, boarding, and training',
    areas: ['Corona', 'Norco', 'Eastvale', 'Temescal Valley', 'Riverside', 'Home Gardens'],
  },
  {
    label: 'The Inland Empire — training, Board & Train, and boarding',
    areas: ['Ontario', 'Rancho Cucamonga', 'Chino', 'Chino Hills', 'Fontana', 'Jurupa Valley', 'Upland'],
  },
  {
    label: 'Orange County and LA — Board & Train and behavior work',
    areas: ['Yorba Linda', 'Anaheim Hills', 'Brea', 'Fullerton', 'Irvine', 'Tustin', 'Long Beach', 'Whittier'],
  },
]

const faqs = [
  {
    q: 'Where are you located?',
    a: 'Floppy Ears Ranch is at 21761 Knabe Rd, Corona, CA 92883, on five acres in the Temescal Valley area of Corona. We serve Riverside County, the Inland Empire, Orange County, and the surrounding parts of Southern California.',
  },
  {
    q: 'How much does dog training cost?',
    a: `Board & Train programs run $2,900 to $4,500 depending on the program and your dog's needs. Private lessons are $200 per session, or $900 for five. Boarding starts at $80 per night and daycare is $40 per day. The first phone consultation is free.`,
  },
  {
    q: 'What training methods do you use?',
    a: `We build on relationship and marker training first, then add clear corrections so a dog understands both sides of the conversation. We use an e-collar in the Off-Leash Reliability Program, and the equipment is included in the price. We'll explain exactly what we use and why before you commit to anything.`,
  },
  {
    q: 'Do you work with aggressive dogs?',
    a: 'Yes. We run a three-week Behavior Rehabilitation Program for aggression, bite histories, and severe reactivity. Every dog is evaluated individually, because acceptance depends on the specific case.',
  },
  {
    q: 'How long does training take?',
    a: 'Board & Train is three weeks for dogs over six months and six weeks for puppies. Private lesson clients usually see meaningful change in five to twelve weeks depending on how consistently the work happens at home.',
  },
  {
    q: 'Do you serve Orange County?',
    a: `Yes, for Board & Train and behavior work. We're 25 to 40 minutes from Yorba Linda, Anaheim Hills, Brea, and Fullerton, and 40 to 55 from Irvine and Newport. We don't offer daycare or routine boarding at that distance — it's too far to drive daily.`,
  },
  {
    q: `What's the first step?`,
    a: `A free 30-minute phone consultation. Tell us what's going on with your dog and we'll tell you honestly whether we can help.`,
  },
]

const steps = [
  {
    title: 'Free phone consultation',
    desc: `Tell us what's going on. Thirty minutes, no charge, no pressure. We'll tell you whether we think we can help.`,
  },
  {
    title: 'Facility evaluation — $50',
    desc: 'Bring your dog out. We assess behavior, you see the property, and we recommend a program. The $50 comes off whatever you book.',
  },
  {
    title: 'Training',
    desc: 'Your dog starts. You get photo updates daily, video every three days, and a call partway through.',
  },
  {
    title: 'Going home',
    desc: 'The transfer session, where we hand the dog back to you and teach you to keep it. Then free refreshers and lifetime support, for good.',
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* ============================================================ */}
      {/* 1 · HERO                                                     */}
      {/* ============================================================ */}
      <section className="hero">
        <div className="hero-content">
          <h1>Dog Training &amp; Boarding in Corona, California</h1>
          <p className="hero-subhead">
            Real-world training for puppies, family dogs, and serious behavior
            problems — on five acres in Corona.
          </p>
          <p className="hero-services">
            Board &amp; Train · Aggression &amp; Reactivity · Puppy Training ·
            Private Lessons · Boarding &amp; Daycare
          </p>
          <div className="cta-buttons" style={{ justifyContent: 'flex-start' }}>
            <Link to="/book-evaluation" className="btn btn--primary btn--lg">
              Tell Us About Your Dog
              <ArrowRight size={18} />
            </Link>
            <a href="tel:9514546773" className="btn btn--secondary btn--lg">
              <Phone size={18} />
              Call (951) 454-6773
            </a>
          </div>
          <p className="hero-trust">
            Family owned and operated in Corona, CA. Serving Riverside County,
            the Inland Empire, Orange County, and the surrounding area.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2 · TRUST BAR                                                */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <div className="trust-bar">
            <div className="trust-item">
              <MapPin size={20} />
              <span>5 acres in Corona, CA</span>
            </div>
            <div className="trust-item">
              <Calendar size={20} />
              <span>Family owned since 2019</span>
            </div>
            <div className="trust-item">
              <Award size={20} />
              <span>IACP member · AKC CGC Evaluator on staff</span>
            </div>
            <div className="trust-item">
              <Heart size={20} />
              <span>Lifetime support on every program</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3 · WHAT DO YOU NEED HELP WITH?                              */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>What do you need help with?</h2>
          <p>
            Most people find us because something specific is going wrong. Start
            where it hurts.
          </p>

          <div className="grid-3" style={{ marginTop: 'var(--s-6)' }}>
            {helpCards.map((card) => (
              <Link to={card.to} className="link-card" key={card.to}>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <ArrowRight size={18} className="card-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4 · BOARD & TRAIN                                            */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">OUR FLAGSHIP PROGRAM</p>
          <h2>Board &amp; Train</h2>
          <p>
            Your dog moves in with us and trains every day. No squeezing
            sessions into an already full week, no waiting for progress between
            appointments. Most dogs are here for three weeks. Puppies stay six.
          </p>
          <p>
            We work on the things that make a dog livable — walking on a loose
            leash, coming when called, settling down, staying out of trouble —
            and we build it on relationship and clear communication rather than
            repetition drills.
          </p>
          <p>
            When your dog goes home, you get a transfer session where we teach
            you to handle everything they learned. Then you have us for life.
            Questions, refreshers, tune-ups a year later. That doesn't expire.
          </p>

          <div className="grid-4" style={{ marginTop: 'var(--s-6)' }}>
            {boardTrainPrograms.map((prog) => (
              <div className="program-card" key={prog.name}>
                <h4>{prog.name}</h4>
                <p className="program-duration">{prog.duration}</p>
                <p className="program-price">{prog.price}</p>
                <p className="program-desc">{prog.desc}</p>
              </div>
            ))}
          </div>

          <ul
            className="included-list"
            style={{ marginTop: 'var(--s-6)', marginBottom: 'var(--s-6)' }}
          >
            {includedItems.map((item) => (
              <li key={item}>
                <Check size={16} />
                {item}
              </li>
            ))}
          </ul>

          <Link to="/board-and-train" className="btn btn--primary">
            See Board &amp; Train Programs
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5 · AGGRESSION & REACTIVITY                                  */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">BEHAVIOR WORK</p>
          <h2>When it's more than obedience</h2>
          <p>
            If your dog lunges at every dog on the block, guards the couch, or
            has put teeth on someone, you already know this isn't a manners
            problem. You've probably also been told by somebody that your dog is
            a lost cause.
          </p>
          <p>
            We don't start there. We start with an evaluation, because
            aggression and reactivity have different causes, different triggers,
            and different answers. A dog who's terrified needs something
            different than a dog who's never been told no.
          </p>
          <p>
            We'll tell you honestly what we think we can do — and if we don't
            think we're the right fit, we'll say that too.
          </p>

          <div className="grid-2" style={{ marginTop: 'var(--s-6)' }}>
            <Link to="/reactive-dog-training" className="link-card">
              <h3>Reactive Dog Training</h3>
              <p>
                Barking, lunging, pulling, and losing it at the sight of a
                trigger.
              </p>
              <ArrowRight size={18} className="card-arrow" />
            </Link>
            <Link to="/aggressive-dog-training" className="link-card">
              <h3>Aggressive Dog Training</h3>
              <p>
                Dogs who have bitten or are on their way there. Bite histories
                evaluated individually.
              </p>
              <ArrowRight size={18} className="card-arrow" />
            </Link>
          </div>

          <p style={{ marginTop: 'var(--s-5)', fontSize: 'var(--t-small)' }}>
            Not sure which one describes your dog?{' '}
            <Link to="/resources">Start here</Link>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6 · PUPPY TRAINING                                           */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">START RIGHT</p>
          <h2>Puppy training</h2>
          <p>
            Everything is easier now than it will be in a year. Socialization,
            potty training, crate training, biting, leash manners, and learning
            that you're worth paying attention to — all of it lands faster
            before habits set.
          </p>
          <p>
            We also talk to you about the part nobody warns new owners about:
            somewhere between six and twelve months, your well-behaved puppy
            will appear to forget everything. That's normal. It's also where
            most people give up.
          </p>

          <div className="grid-2" style={{ marginTop: 'var(--s-6)' }}>
            <div className="program-card">
              <h4>Puppy Board &amp; Train</h4>
              <p className="program-duration">6 weeks</p>
              <p className="program-price">$3,200</p>
              <p className="program-desc">
                Your puppy lives here and gets it done.
              </p>
            </div>
            <div className="program-card">
              <h4>Private Puppy Lessons</h4>
              <p className="program-duration">$200/session, 5 for $900</p>
              <p className="program-price">$200</p>
              <p className="program-desc">
                You do the training, we coach you through it.
              </p>
            </div>
          </div>

          <Link
            to="/puppy-training"
            className="btn btn--primary"
            style={{ marginTop: 'var(--s-6)' }}
          >
            Puppy Training
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7 · BOARDING & DAYCARE                                       */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">WHILE YOU'RE AWAY</p>
          <h2>Boarding &amp; daycare</h2>
          <p>
            Your dog stays on five acres with people who train dogs for a
            living. That's the whole difference. Everyone here reads dog body
            language all day — so problems get caught early, and dogs who need
            space get space.
          </p>
          <p>
            Kennels are climate-controlled and indoors. Daycare runs
            kennel-free in the Jax Weller Arena, on cooled turf with shade,
            pools, and elevated beds.
          </p>

          <div className="grid-2" style={{ marginTop: 'var(--s-6)' }}>
            <Link to="/dog-boarding" className="link-card">
              <h3>Dog Boarding</h3>
              <p className="badge" style={{ marginBottom: 'var(--s-3)' }}>
                from $80/night
              </p>
              <p>
                Overnight, climate-controlled, trainer-supervised. Reactive and
                aggressive dogs evaluated individually.
              </p>
              <ArrowRight size={18} className="card-arrow" />
            </Link>
            <Link to="/dog-daycare" className="link-card">
              <h3>Dog Daycare</h3>
              <p className="badge" style={{ marginBottom: 'var(--s-3)' }}>
                $40/day
              </p>
              <p>
                Kennel-free, up to 12 hours, seven days a week. Assessment
                required for new dogs.
              </p>
              <ArrowRight size={18} className="card-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8 · RESULTS                                                  */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">PROOF</p>
          <h2>See it for yourself</h2>
          <p>
            Anybody can write "life-changing results" on a website. Here's what
            it actually looks like — real dogs, real owners, filmed before and
            after.
          </p>

          <div className="grid-3" style={{ marginTop: 'var(--s-6)' }}>
            {[1, 2, 3].map((n) => (
              <div
                className="card"
                key={n}
                style={{
                  minHeight: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bone)',
                  color: 'var(--muted)',
                  fontSize: 'var(--t-small)',
                }}
              >
                Case study coming soon
              </div>
            ))}
          </div>

          <Link
            to="/dog-training-results"
            className="btn btn--primary"
            style={{ marginTop: 'var(--s-6)' }}
          >
            See All Results
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9 · MEET THE TRAINERS                                        */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">WHO YOU'RE TRUSTING</p>
          <h2>The people your dog will be with</h2>
          <p>
            You're leaving your dog with strangers for three to six weeks. You
            should know exactly who they are.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--s-8)',
              marginTop: 'var(--s-6)',
            }}
          >
            {/* Chad */}
            <div className="trainer-card">
              <div className="trainer-photo" aria-hidden="true">
                <span style={{ fontSize: 'var(--t-h2)' }}>CG</span>
              </div>
              <div>
                <h3 style={{ marginBottom: 'var(--s-1)' }}>Chad Gabriel</h3>
                <p
                  style={{
                    fontSize: 'var(--t-small)',
                    color: 'var(--muted)',
                    marginBottom: 'var(--s-3)',
                  }}
                >
                  Owner &amp; Head Trainer
                </p>
                <p>
                  Played professional baseball for a decade — drafted into a St.
                  Louis Cardinals affiliate in 2004, then six seasons in
                  Brisbane, Australia. He's handled more than a thousand dogs.
                  Obedience and fear-and-aggression rehab are his specialty.
                </p>
              </div>
            </div>

            {/* Kyla */}
            <div className="trainer-card">
              <div className="trainer-photo" aria-hidden="true">
                <span style={{ fontSize: 'var(--t-h2)' }}>KG</span>
              </div>
              <div>
                <h3 style={{ marginBottom: 'var(--s-1)' }}>Kyla Gabriel</h3>
                <p
                  style={{
                    fontSize: 'var(--t-small)',
                    color: 'var(--muted)',
                    marginBottom: 'var(--s-3)',
                  }}
                >
                  Co-Owner &amp; Trainer
                </p>
                <p>
                  Adopted a shelter dog named Jax in 2012. His behavior problems
                  sent her career a completely different direction. She holds a
                  Penn State degree in Social and Behavioral Sciences, is a
                  professional member of the IACP, and is a certified AKC Canine
                  Good Citizen Evaluator.
                </p>
              </div>
            </div>

            {/* Jose */}
            <div className="trainer-card">
              <div className="trainer-photo" aria-hidden="true">
                <span style={{ fontSize: 'var(--t-h2)' }}>J</span>
              </div>
              <div>
                <h3 style={{ marginBottom: 'var(--s-1)' }}>Jose</h3>
                <p
                  style={{
                    fontSize: 'var(--t-small)',
                    color: 'var(--muted)',
                    marginBottom: 'var(--s-3)',
                  }}
                >
                  Training Assistant &amp; Kennel Technician
                </p>
                <p>
                  Left the medical field in 2021 to work with dogs full-time.
                  Runs daily care and assists training.
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/meet-the-team"
            className="btn btn--primary"
            style={{ marginTop: 'var(--s-6)' }}
          >
            Meet the Team
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10 · FACILITY                                                */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">WHERE IT HAPPENS</p>
          <h2>Five acres in Corona</h2>
          <p>
            Not a strip-mall training room. Not somebody's backyard. Five acres
            with climate-controlled indoor kennels, open ground to work dogs on,
            and the Jax Weller Arena for kennel-free daycare.
          </p>
          <p>
            Come see it. We'd rather you walk the property before you commit
            than take our word for any of this — and if a facility won't let you
            tour, that tells you something.
          </p>
          <div className="cta-buttons" style={{ justifyContent: 'flex-start', marginTop: 'var(--s-6)' }}>
            <Link to="/facility" className="btn btn--primary">
              Tour the Facility
              <ChevronRight size={18} />
            </Link>
            <Link to="/book-evaluation" className="btn btn--secondary">
              Book a Tour
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11 · HOW IT WORKS                                            */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>How to get started</h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--s-7)',
              marginTop: 'var(--s-6)',
            }}
          >
            {steps.map((step, i) => (
              <div className="step" key={i}>
                <div className="step-number">{i + 1}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12 · PRICING PREVIEW                                         */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>What it costs</h2>
          <p>
            We publish our prices. About half the trainers in this area make you
            call to find out, and we've never understood why.
          </p>

          <div className="table-wrap" style={{ marginTop: 'var(--s-6)' }}>
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.service}>
                    <td>{row.service}</td>
                    <td className="price">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link
            to="/pricing"
            className="btn btn--primary"
            style={{ marginTop: 'var(--s-6)' }}
          >
            Full Pricing
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 13 · AREAS SERVED                                            */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Where our clients come from</h2>
          <p>
            We're on the 91/15 interchange in Corona, which puts us closer to
            most of Orange County than people assume — 25 to 40 minutes to Yorba
            Linda, Anaheim Hills, Brea, and Fullerton.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--s-6)',
              marginTop: 'var(--s-6)',
            }}
          >
            {areaGroups.map((group) => (
              <div key={group.label}>
                <h4>{group.label}</h4>
                <ul className="area-tags">
                  {group.areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: 'var(--t-small)',
              color: 'var(--muted)',
              marginTop: 'var(--s-6)',
            }}
          >
            Daycare and overnight boarding are for dogs close enough to drive in
            regularly. Board &amp; Train clients come from all over Southern
            California — it's a drop-off, not a commute.
          </p>

          <Link
            to="/service-areas"
            className="btn btn--primary"
            style={{ marginTop: 'var(--s-6)' }}
          >
            All Service Areas
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 14 · FAQ                                                     */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Frequently asked questions</h2>

          <div style={{ marginTop: 'var(--s-5)' }}>
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <button
                  className="faq-question"
                  aria-expanded={openFaq === i}
                  onClick={() => toggleFaq(i)}
                >
                  {faq.q}
                  <Plus size={20} />
                </button>
                {openFaq === i && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 15 · FINAL CTA                                               */}
      {/* ============================================================ */}
      <section className="section section--evergreen">
        <div className="container text-center">
          <h2>Tell us about your dog</h2>
          <p>
            Answer a few questions and we'll come back with a straight
            recommendation — including whether we think a different approach
            would serve you better. The first conversation is free either way.
          </p>
          <div className="cta-buttons" style={{ marginTop: 'var(--s-6)' }}>
            <Link
              to="/book-evaluation"
              className="btn btn--lg"
              style={{
                background: 'white',
                color: 'var(--evergreen)',
                borderColor: 'white',
              }}
            >
              Tell Us About Your Dog
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:9514546773"
              className="btn btn--lg"
              style={{
                background: 'transparent',
                color: 'white',
                borderColor: 'rgba(255,255,255,0.4)',
              }}
            >
              <Phone size={18} />
              Call (951) 454-6773
            </a>
          </div>
          <p
            style={{
              fontSize: 'var(--t-small)',
              marginTop: 'var(--s-6)',
              opacity: 0.7,
            }}
          >
            21761 Knabe Rd, Corona, CA 92883
          </p>
        </div>
      </section>
    </>
  )
}
