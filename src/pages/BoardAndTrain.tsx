import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Check, Clock, Sun, Coffee, Moon, Camera, Video, PhoneCall, MapPin, Car, Shield, Hop as Home, Dog, Thermometer, TreePine } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import ProgramCards from '../components/ProgramCards';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const programs = [
  {
    name: 'Off-Leash Reliability',
    price: '$4,500',
    duration: 'Custom',
    deposit: '$750',
    description:
      'Full off-leash obedience around real-world distractions. E-collar conditioning, proofing in public environments, and reliable recall under pressure. Equipment included.',
    bestFor:
      'Dogs whose owners want true off-leash freedom in parks, trails, and unfenced areas.',
    link: '/off-leash-dog-training',
  },
  {
    name: 'Behavior Rehabilitation',
    price: '$3,500',
    duration: '3 weeks',
    deposit: '$750',
    description:
      'Intensive work on aggression, severe reactivity, bite histories, resource guarding, and fear-based behavior. Every case is evaluated before acceptance.',
    bestFor:
      'Dogs with aggression, bite history, or reactivity serious enough that normal life has become difficult.',
    link: '/aggressive-dog-training',
  },
  {
    name: 'Puppy Board & Train',
    price: '$3,200',
    duration: '6 weeks',
    deposit: '$500',
    description:
      'Puppies six months and under. Socialization, crate training, potty training, foundational obedience, and impulse control — all built before bad habits form.',
    bestFor:
      'Puppies under six months whose owners want a strong foundation from the start.',
    link: '/puppy-training',
  },
  {
    name: 'Board & Train',
    price: '$2,900',
    duration: '3 weeks',
    deposit: '$500',
    description:
      'Core obedience for dogs six months and older. Loose-leash walking, recall, place, down-stay, and real-world manners built through daily professional training.',
    bestFor:
      'Dogs over six months who need solid obedience and better manners without a behavior problem.',
    link: '/board-and-train',
  },
];

const dailySchedule = [
  { time: 'Morning', activity: 'Potty break, health check, breakfast' },
  { time: 'Mid-morning', activity: 'First training session (30–45 min)' },
  { time: 'Late morning', activity: 'Structured play, socialization, or decompression' },
  { time: 'Midday', activity: 'Rest and crate time' },
  { time: 'Afternoon', activity: 'Second training session (30–45 min)' },
  { time: 'Late afternoon', activity: 'Free play, enrichment, exposure work' },
  { time: 'Evening', activity: 'Final potty break, dinner, settle in for the night' },
];

const boardTrainFaqs = [
  {
    question: 'How long does Board & Train take?',
    answer:
      'Three weeks for dogs six months and older. Six weeks for puppies under six months. The Off-Leash Reliability program runs on a custom timeline based on the dog. We don\'t cut programs short and we don\'t extend them to pad revenue — the timeline is whatever the dog actually needs.',
  },
  {
    question: 'Will my dog forget everything when they come home?',
    answer:
      'Not if you do the transfer session and follow through at home. The transfer session exists specifically to teach you how to handle what your dog learned. We also give you free refresher lessons and lifetime support, so if something starts slipping you bring the dog back and we tune it up at no charge.',
  },
  {
    question: 'Can I visit my dog during the program?',
    answer:
      'We ask that you don\'t visit during the first week. After that, visits are fine with some notice. Frequent visits can slow progress because the dog has to re-settle each time — but we\'ll never tell you that you can\'t see your own dog.',
  },
  {
    question: 'What training methods do you use?',
    answer:
      'We start with relationship and marker training — building engagement, teaching the dog that paying attention to you is the best option. Then we add clear, fair corrections so the dog understands both sides of the conversation. We use e-collars in the Off-Leash program. We\'ll explain exactly what we use and why before you commit.',
  },
  {
    question: 'Do you take aggressive dogs?',
    answer:
      'Yes, through the Behavior Rehabilitation program at $3,500. Every aggressive dog is evaluated individually before acceptance because the specifics matter — what triggers the aggression, the severity, the history. We don\'t take every case, and we\'ll tell you upfront if we don\'t think we\'re the right fit.',
  },
  {
    question: 'What if my dog has a medical condition?',
    answer:
      'We can usually accommodate dogs with medical needs as long as we know about them upfront. We\'ll need vet records and any medication protocols before drop-off. If a dog needs veterinary attention during the stay, we\'ll contact you immediately and take the dog to our local vet.',
  },
  {
    question: 'Is the deposit refundable?',
    answer:
      'The deposit is refundable if you cancel at least 7 days before your scheduled drop-off date. Cancellations within 7 days forfeit the deposit because we\'ve held the spot and turned other dogs away.',
  },
  {
    question: 'What do I need to bring at drop-off?',
    answer:
      'Your dog\'s current food (enough for the full stay), any medications, vaccination records, and your dog\'s own leash and collar. We provide everything else — crate, bedding, bowls, training equipment. Don\'t bring toys or beds from home; they tend to cause resource guarding issues in a multi-dog environment.',
  },
  {
    question: 'How is Board & Train different from boot camp programs?',
    answer:
      'Most "boot camp" programs are a week or two. That\'s enough to start behaviors but not enough to proof them. Our three-week minimum gives us time to build a behavior, proof it against distractions, and make sure it holds before the dog goes home. We also include the transfer session, refreshers, and lifetime support — most boot camps hand the dog back and wish you luck.',
  },
  {
    question: 'Do you offer financing or payment plans?',
    answer:
      'We don\'t offer formal financing, but we\'re flexible. The deposit reserves your spot, and the balance is due at drop-off. If you need to split the balance across two payments, talk to us — we can usually work something out.',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function BoardAndTrain() {
  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader
        title="Board & Train Dog Training in Corona, CA"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Dog Training', to: '/dog-training' },
          { label: 'Board & Train' },
        ]}
        directAnswer="Board & Train is a program where your dog lives at our five-acre facility in Corona, California and trains every day with a professional trainer. Programs run three weeks for adult dogs and six weeks for puppies, and cost $2,900 to $4,500 depending on what your dog needs. Every program includes a transfer session where we teach you to handle what your dog learned, free refresher lessons, and lifetime support."
        trustBar
      />

      {/* ============================================================ */}
      {/* WHAT IS BOARD & TRAIN?                                       */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>What is Board &amp; Train?</h2>
          <p>
            Board &amp; Train means your dog lives at our facility and works with
            a trainer every single day. No scheduling around your work week, no
            trying to practice for fifteen minutes before dinner, no gaps between
            sessions where bad habits creep back in. Your dog gets concentrated,
            daily, professional training in a structured environment.
          </p>
          <p>
            Most dogs stay three weeks. That's enough time to build a behavior,
            proof it against real distractions, and make sure it holds under
            pressure — not just in a quiet room with treats. Puppies stay six
            weeks because their brains need more repetition and their bodies need
            more nap time.
          </p>
          <p>
            When your dog comes home, we don't just hand you the leash and wish
            you luck. You get a transfer session where we teach you everything
            your dog learned — every command, every expectation, every piece of
            equipment. Then you get free refresher lessons and lifetime support.
            If something slips six months from now, bring the dog back. No
            charge.
          </p>

          <div style={{ marginTop: 'var(--s-7)' }}>
            <h3>What Board &amp; Train is not</h3>
            <p>
              It is not a magic fix. Your dog will come home trained, but you
              still have to follow through. If you go back to the same routine —
              no structure, no expectations, no practice — the training will
              erode. That's not a flaw in the program. That's how dogs work.
            </p>
            <p>
              It is also not a replacement for your relationship with your dog.
              We build the skills. You maintain them. The transfer session and
              ongoing support exist specifically to make that transition work.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* IS THIS RIGHT FOR YOUR DOG?                                  */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Is Board &amp; Train right for your dog?</h2>

          <div className="grid-2" style={{ marginTop: 'var(--s-6)' }}>
            <div>
              <h3>Board &amp; Train is usually the right call when:</h3>
              <ul>
                <li>You don't have time to train consistently on your own</li>
                <li>Your dog needs more structure than your daily life allows</li>
                <li>You've tried group classes or YouTube and nothing stuck</li>
                <li>Your dog has a behavior problem that's beyond basic obedience</li>
                <li>You want a strong foundation built by a professional before you take over</li>
                <li>You need results faster than weekly private lessons can deliver</li>
              </ul>
            </div>
            <div>
              <h3>Private lessons are probably the better fit when:</h3>
              <ul>
                <li>Your dog's issues are mild and you have time to practice daily</li>
                <li>You want to learn the training yourself from day one</li>
                <li>Your dog has separation anxiety severe enough that boarding would make it worse</li>
                <li>Budget is tight and you're willing to put in the daily work</li>
              </ul>
            </div>
          </div>

          <p style={{ marginTop: 'var(--s-6)', fontWeight: 600 }}>
            We'll tell you which one we think you need. If private lessons would
            serve you better than a $2,900 program, we'll say so. Call{' '}
            <a href="tel:9514546773">(951) 454-6773</a> or{' '}
            <Link to="/book-evaluation">tell us about your dog</Link>.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROGRAMS                                                     */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">CHOOSE YOUR PROGRAM</p>
          <h2>Programs</h2>

          <ProgramCards programs={programs} />

          <p
            style={{
              marginTop: 'var(--s-6)',
              fontSize: 'var(--t-small)',
              color: 'var(--muted)',
            }}
          >
            All deposits are applied toward the total program cost. The
            remaining balance is due at drop-off. We accept cash, check, credit
            card, PayPal, Venmo, and Zelle.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT YOUR DOG LEARNS                                         */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>What your dog learns</h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--s-8)',
              marginTop: 'var(--s-6)',
            }}
          >
            {/* The Foundation */}
            <div>
              <h3>The foundation</h3>
              <p>
                Before we teach a single command, we build engagement. Your dog
                learns to check in with you, to want to pay attention, and to
                understand that good things come from working with you — not from
                ignoring you.
              </p>
              <ul>
                <li>
                  <strong>Engagement</strong> — Your dog learns that you are the
                  most interesting thing in the environment.
                </li>
                <li>
                  <strong>Marker training</strong> — A clear "yes" that tells
                  your dog exactly which behavior earned the reward.
                </li>
                <li>
                  <strong>Clear communication</strong> — Your dog understands
                  what you're asking, what earns a reward, and what doesn't.
                </li>
              </ul>
            </div>

            {/* The Obedience */}
            <div>
              <h3>The obedience</h3>
              <p>
                The commands your dog will know and respond to reliably:
              </p>
              <ul>
                <li>Sit and down (on command, from a distance)</li>
                <li>Place (go to a bed or cot and stay there)</li>
                <li>Come / recall</li>
                <li>Heel (structured walk at your side)</li>
                <li>Loose-leash walking</li>
                <li>Leave it</li>
                <li>Off</li>
                <li>Extended down-stay and sit-stay</li>
              </ul>
            </div>

            {/* The Real-World Part */}
            <div>
              <h3>The real-world part</h3>
              <p>
                A "sit" in a quiet living room means nothing if it falls apart at
                PetSmart. We proof every behavior against real distractions —
                other dogs, people, noise, movement, food on the ground, open
                doors. We take dogs off-property to train in public spaces so the
                obedience generalizes beyond our facility.
              </p>
            </div>

            {/* The Living-With-You Part */}
            <div>
              <h3>The living-with-you part</h3>
              <p>
                The behaviors that make your dog easy to live with day to day:
              </p>
              <ul>
                <li>Waiting at doors instead of bolting through</li>
                <li>Settling on a place bed while you eat dinner</li>
                <li>Ignoring food on counters and tables</li>
                <li>Greeting people without jumping</li>
                <li>Riding calmly in the car</li>
                <li>Crate manners — going in willingly and staying quiet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* A TYPICAL DAY                                                */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>What a day here actually looks like</h2>
          <p>
            Dogs thrive on routine. Here's what a typical training day looks
            like at Floppy Ears Ranch:
          </p>

          <div className="table-wrap" style={{ marginTop: 'var(--s-6)' }}>
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                {dailySchedule.map((row) => (
                  <tr key={row.time}>
                    <td style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>
                      {row.time}
                    </td>
                    <td>{row.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: 'var(--s-5)', fontSize: 'var(--t-small)', color: 'var(--muted)' }}>
            Training sessions are short and focused — 30 to 45 minutes — because
            that's when dogs learn best. The rest of the day is structure,
            enrichment, and rest. We don't drill dogs for hours.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHERE YOUR DOG STAYS                                         */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Where your dog stays</h2>

          <div className="grid-3" style={{ marginTop: 'var(--s-6)' }}>
            <div className="card">
              <Thermometer
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>Climate-controlled indoor kennels</h4>
              <p>
                Every dog sleeps inside in a clean, temperature-controlled kennel.
                No outdoor runs, no exposed elements, no exceptions.
              </p>
            </div>
            <div className="card">
              <TreePine
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>Five acres of working space</h4>
              <p>
                Open ground for training, proofing, and off-leash work. This
                isn't a strip-mall training room — there's actual space to work a
                dog properly.
              </p>
            </div>
            <div className="card">
              <Dog
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>The Jax Weller Arena</h4>
              <p>
                Cooled turf, shade structures, pools, and elevated beds for
                kennel-free daycare and socialization. Named after the dog who
                started all of this.
              </p>
            </div>
          </div>

          <p style={{ marginTop: 'var(--s-6)', fontWeight: 600 }}>
            Come see it before you book. Tours are free.{' '}
            <Link to="/contact">Schedule a visit</Link> or just call{' '}
            <a href="tel:9514546773">(951) 454-6773</a>.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMMUNICATION DURING TRAINING                                */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>You won't be left wondering</h2>
          <p>
            Leaving your dog somewhere for three weeks is hard. We make sure
            you always know what's happening.
          </p>

          <div className="grid-3" style={{ marginTop: 'var(--s-6)' }}>
            <div className="card">
              <Camera
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>Daily photos</h4>
              <p>
                A photo of your dog every day so you can see how they're doing,
                what they're working on, and that they're happy.
              </p>
            </div>
            <div className="card">
              <Video
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>Video every three days</h4>
              <p>
                Training video showing real progress — what your dog can do now
                that they couldn't do three days ago.
              </p>
            </div>
            <div className="card">
              <PhoneCall
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>Mid-program call</h4>
              <p>
                A phone call halfway through to discuss progress, talk about
                what's coming, and answer any questions you have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHEN YOUR DOG COMES HOME                                     */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>When your dog comes home</h2>
          <p>
            The training doesn't end at pick-up. Here's what happens when your
            dog is ready to go home:
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--s-6)',
              marginTop: 'var(--s-6)',
            }}
          >
            <div className="step">
              <div className="step-number">
                <Home size={18} />
              </div>
              <div className="step-content">
                <h3>The transfer session</h3>
                <p>
                  We spend 60–90 minutes with you and your dog, going through
                  every command, every tool, every expectation. You leave knowing
                  exactly how to maintain what your dog learned. This is not
                  optional — it's the most important part of the program.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <Check size={18} />
              </div>
              <div className="step-content">
                <h3>Free refresher lessons</h3>
                <p>
                  If something starts to slip — or you just want a tune-up —
                  bring your dog back for a refresher session. No charge. This
                  is included with every Board &amp; Train program.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <Shield size={18} />
              </div>
              <div className="step-content">
                <h3>Lifetime support</h3>
                <p>
                  Call us in six months. Call us in two years. If you have a
                  question about your dog's behavior, we're here. This doesn't
                  expire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRICING TABLE                                                */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Board &amp; Train pricing</h2>

          <div className="table-wrap" style={{ marginTop: 'var(--s-5)' }}>
            <table>
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Duration</th>
                  <th>Price</th>
                  <th>Deposit</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.name}>
                    <td style={{ fontWeight: 600 }}>{p.name}</td>
                    <td>{p.duration}</td>
                    <td className="price">{p.price}</td>
                    <td>{p.deposit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            style={{
              marginTop: 'var(--s-5)',
              fontSize: 'var(--t-small)',
              color: 'var(--muted)',
            }}
          >
            Deposits are applied toward the total cost. Balance due at drop-off.
            We accept cash, check, credit card, PayPal, Venmo, and Zelle.
          </p>

          <Link
            to="/pricing"
            className="btn btn--secondary"
            style={{ marginTop: 'var(--s-5)' }}
          >
            See All Pricing
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DRIVING IN                                                   */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Coming from Orange County or LA?</h2>
          <p>
            We're right at the 91/15 interchange in Corona, which makes us
            closer than most people expect:
          </p>

          <div className="grid-3" style={{ marginTop: 'var(--s-6)' }}>
            <div className="card">
              <Car
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>From Orange County</h4>
              <p>
                25–40 minutes from Yorba Linda, Anaheim Hills, Brea, and
                Fullerton. 40–55 from Irvine and Newport Beach.
              </p>
            </div>
            <div className="card">
              <Car
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>From LA / Long Beach</h4>
              <p>
                45–60 minutes depending on traffic. Board &amp; Train is a
                drop-off — you make the drive twice, not daily.
              </p>
            </div>
            <div className="card">
              <Car
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>From the Inland Empire</h4>
              <p>
                10–25 minutes from Norco, Eastvale, Riverside, Ontario, and
                Rancho Cucamonga.
              </p>
            </div>
          </div>

          <p style={{ marginTop: 'var(--s-5)' }}>
            <MapPin
              size={16}
              style={{
                display: 'inline',
                verticalAlign: 'middle',
                marginRight: 'var(--s-2)',
              }}
            />
            21761 Knabe Rd, Corona, CA 92883
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW TO GET STARTED                                           */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>How to get started</h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--s-6)',
              marginTop: 'var(--s-6)',
            }}
          >
            {[
              {
                title: 'Tell us about your dog',
                desc: 'Fill out the form or call (951) 454-6773. Takes about two minutes.',
              },
              {
                title: 'Free phone consultation',
                desc: 'Thirty minutes, no charge, no pressure. We\'ll ask about your dog and tell you honestly whether we can help.',
              },
              {
                title: 'Facility evaluation — $50',
                desc: 'Bring your dog to the ranch. We assess behavior, you see the property, and we recommend a program. The $50 credits toward whatever you book.',
              },
              {
                title: 'Pick a program and reserve your spot',
                desc: 'Pay the deposit ($500 or $750 depending on the program) and we\'ll lock in your drop-off date.',
              },
              {
                title: 'Drop-off day',
                desc: 'Bring your dog, their food, medications, and vaccination records. We handle the rest.',
              },
              {
                title: 'Training begins',
                desc: 'Daily photos, video every three days, a mid-program call. You\'ll always know what\'s happening.',
              },
              {
                title: 'Transfer session and going home',
                desc: 'We teach you everything your dog learned. Then free refreshers and lifetime support — for good.',
              },
            ].map((step, i) => (
              <div className="step" key={i}>
                <div className="step-number">{i + 1}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-buttons" style={{ justifyContent: 'flex-start', marginTop: 'var(--s-7)' }}>
            <Link to="/book-evaluation" className="btn btn--primary btn--lg">
              Tell Us About Your Dog
              <ArrowRight size={18} />
            </Link>
            <a href="tel:9514546773" className="btn btn--secondary btn--lg">
              <Phone size={18} />
              Call (951) 454-6773
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                          */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Board &amp; Train FAQ</h2>
          <div style={{ marginTop: 'var(--s-5)' }}>
            <FAQSection items={boardTrainFaqs} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                    */}
      {/* ============================================================ */}
      <CTASection
        title="Ready to get started?"
        body="Answer a few questions about your dog and we'll come back with a straight recommendation — including whether we think a different program would serve you better. The first conversation is always free."
        primaryLabel="Tell Us About Your Dog"
        primaryTo="/book-evaluation"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:9514546773"
        background="evergreen"
      />
    </>
  );
}
