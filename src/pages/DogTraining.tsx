import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const services = [
  {
    name: 'Board & Train',
    price: '$2,900',
    to: '/board-and-train',
    description:
      'Your dog lives at the ranch for three weeks while we do the heavy lifting. Includes a transfer session so you know exactly how to maintain the training at home.',
  },
  {
    name: 'Private Lessons',
    price: '$200/session',
    to: '/private-dog-training',
    description:
      'One-on-one sessions at the ranch with you and your dog. We teach you to train your dog — not just watch someone else do it.',
  },
  {
    name: 'Puppy Training',
    price: 'From $200',
    to: '/puppy-training',
    description:
      'Socialization, potty training, crate training, bite inhibition, leash manners, and recall. Start before adolescence makes everything harder.',
  },
  {
    name: 'Aggressive Dog Training',
    price: '$3,500',
    to: '/aggressive-dog-training',
    description:
      'Behavior rehabilitation for dogs with bite history, dog-directed aggression, or escalating resource guarding. Every dog is evaluated before acceptance.',
  },
  {
    name: 'Reactive Dog Training',
    price: 'From $2,900',
    to: '/reactive-dog-training',
    description:
      'For dogs that bark, lunge, and lose it at the end of the leash. One of the most common — and most fixable — problems we see.',
  },
  {
    name: 'Off-Leash Training',
    price: '$4,500',
    to: '/off-leash-dog-training',
    description:
      'Reliable off-leash obedience in real-world environments. Recall, impulse control, and the kind of trust that lets you drop the leash.',
  },
  {
    name: 'Dog Obedience Training',
    price: 'From $200',
    to: '/dog-obedience-training',
    description:
      'Sit, down, stay, heel, come — the fundamentals done right. We build obedience through relationship, not repetition.',
  },
];

const pricingData = [
  { program: 'Board & Train (3 weeks)', price: '$2,900' },
  { program: 'Puppy Board & Train (6 weeks)', price: '$3,200' },
  { program: 'Behavior Rehabilitation (3 weeks)', price: '$3,500' },
  { program: 'Off-Leash Program (4 weeks)', price: '$4,500' },
  { program: 'Private Lessons (single)', price: '$200' },
  { program: 'Private Lessons (5-pack)', price: '$900' },
  { program: 'Evaluation', price: '$50' },
];

const faqItems = [
  {
    question: 'How do I know which program is right for my dog?',
    answer:
      'Call us. We will ask about your dog, what you are dealing with, and what your goals are. Most of the time the right program is obvious once we understand the situation. If it is not, we will schedule an evaluation so we can see your dog in person before recommending anything.',
  },
  {
    question: 'Do you use e-collars?',
    answer:
      'We use e-collars as one tool among many. They are introduced at low levels after the dog understands what is being asked through marker training. We do not use them as a shortcut and we do not use them on every dog. If your dog does not need one, we will not use one.',
  },
  {
    question: 'What breeds do you work with?',
    answer:
      'All of them. We have trained everything from Chihuahuas to Cane Corsos. We do not turn dogs away based on breed. We evaluate every dog as an individual.',
  },
  {
    question: 'How long does training take?',
    answer:
      'That depends on the dog and the problem. Board & Train programs run three to six weeks depending on the program. Private lessons are ongoing — some people come for five sessions, some come for months. We will give you an honest timeline once we know what we are working with.',
  },
  {
    question: 'Do you guarantee results?',
    answer:
      'No. Anyone who guarantees dog training results is either lying or defining "results" very loosely. What we can tell you is that we have trained over a thousand dogs, we include lifetime support with every program, and we will be honest with you about what to expect before you spend a dollar.',
  },
];

export default function DogTraining() {
  return (
    <>
      <PageHeader
        title="Dog Training in Corona, CA"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Dog Training' },
        ]}
        directAnswer="Floppy Ears Ranch offers dog training programs from $200 per session to $4,500, on five acres in Corona, CA. Board & Train, private lessons, puppy training, aggression rehabilitation, reactivity, and off-leash reliability — every program includes lifetime support."
        trustBar
      />

      {/* Overview */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">What We Train</p>
          <h2>Every Dog Is Different. We Train Them That Way.</h2>
          <p>
            All of our training happens at our five-acre facility in Corona, CA.
            No strip-mall classrooms, no PetSmart parking lots. Your dog trains
            where there is space to move, room to work, and controlled exposure
            to the things that actually matter — other dogs, distractions, real
            environments.
          </p>
          <p>
            We do not run cookie-cutter group classes. Every program is built
            around your dog — their temperament, their history, their specific
            problems, and what you need from them at home. A fearful rescue and a
            high-drive working dog do not need the same program, and we do not
            pretend they do.
          </p>
          <p>
            Whether you are dealing with basic obedience, a puppy who needs
            structure, a reactive dog who makes every walk a disaster, or a
            serious aggression case — we have a program that fits. And every
            program comes with lifetime support, because training does not end
            when your dog comes home.
          </p>
        </div>
      </section>

      {/* Training Services */}
      <section className="section section--paper">
        <div className="container">
          <h2>Training Programs</h2>
          <p>
            Choose the program that fits your dog's needs. Not sure? Call us at{' '}
            <a href="tel:+19514546773">(951) 454-6773</a> and we will point you
            in the right direction.
          </p>
          <div className="grid-3">
            {services.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="link-card"
              >
                <h3>{service.name}</h3>
                <p className="area-tag">{service.price}</p>
                <p>{service.description}</p>
                <ArrowRight size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="section section--bone">
        <div className="container">
          <h2>Pricing at a Glance</h2>
          <p>
            Straightforward pricing. No hidden fees, no upsells mid-program.
          </p>
          <table>
            <thead>
              <tr>
                <th>Program</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row) => (
                <tr key={row.program}>
                  <td>{row.program}</td>
                  <td>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            All Board & Train programs require a deposit to reserve your dog's
            spot. See individual program pages for deposit amounts and details.
          </p>
        </div>
      </section>

      {/* How to Start */}
      <section className="section section--paper">
        <div className="container">
          <h2>How to Get Started</h2>
          <p>Three steps. No pressure, no commitment until you are ready.</p>
          <div className="grid-3">
            <div className="card">
              <h3>1. Free Phone Call</h3>
              <p>
                Call us at <a href="tel:+19514546773">(951) 454-6773</a> or fill
                out our <Link to="/contact">contact form</Link>. Tell us about
                your dog — what is going on, what you have tried, what you want.
                We will tell you honestly whether we can help and which program
                makes sense.
              </p>
            </div>
            <div className="card">
              <h3>2. Evaluation ($50)</h3>
              <p>
                Bring your dog to the ranch. We will spend time with them,
                assess their behavior, and confirm the right program. The
                evaluation fee is credited toward any program you enroll in.
              </p>
            </div>
            <div className="card">
              <h3>3. Training Begins</h3>
              <p>
                Once you are ready, we schedule your start date, collect the
                deposit, and get to work. For Board & Train, your dog moves in.
                For private lessons, we set your first session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Not sure where to start?"
        body="Call us. We'll ask about your dog, talk through what you're dealing with, and tell you honestly whether we can help."
        primaryLabel="Book a Free Call"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
