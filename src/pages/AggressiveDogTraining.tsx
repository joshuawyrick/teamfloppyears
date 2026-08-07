import { Link } from 'react-router-dom';
import { Check, TriangleAlert as AlertTriangle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const dogsWeAccept = [
  'Dog-directed aggression — this is the most common case we see. Dogs that cannot be around other dogs without a fight.',
  'Resource guarding that has escalated — growling over food is one thing. Biting someone who walks past the food bowl is another.',
  'Fear-based aggression with bite history — dogs who bite out of fear when cornered, handled, or approached by strangers.',
  'Leash reactivity that has crossed into aggression — what started as barking and lunging has turned into contact or bites.',
  'Dogs who have bitten but whose owners are committed to long-term management — we need owners who will follow through.',
];

const dogsWeDecline = [
  'Dogs with predatory aggression toward small animals or children where the management risk is too high — some situations are not safe to work with outside a clinical setting.',
  'Owners who are not willing to follow through on management protocols — the training only works if the owner maintains it. If the plan will not be followed, the dog is not set up to succeed.',
  'Situations where the home environment will undo the training — if the dog is going back to the same conditions that created the problem, we will be honest about that.',
  'Dogs with underlying medical issues causing the aggression — pain, neurological problems, thyroid issues. We will refer you to a veterinary behaviorist first.',
];

const faqItems = [
  {
    question: 'Will my dog be cured?',
    answer:
      'No. Aggression is managed, not cured. In most cases, the behavior improves significantly and the dog can live a safe, reasonable life with proper management. But we will not tell you the problem disappears entirely. Anyone who promises that is not being honest with you.',
  },
  {
    question: 'Do you use punishment?',
    answer:
      'We use whatever the dog needs. That includes positive reinforcement, marker training, structured routines, and in some cases, fair corrections with an e-collar at appropriate levels. We do not rely on punishment alone, and we do not use methods that make a fearful dog more afraid. The approach depends on the dog.',
  },
  {
    question: 'What if my dog has bitten a person?',
    answer:
      'We work with dogs that have bite history. It is one of the most common reasons people come to us. During the evaluation, we will assess the severity, the context, and the risk. If there is an active bite quarantine or legal proceeding, we will need to know about that upfront.',
  },
  {
    question: 'Can I visit during training?',
    answer:
      'Not during the first two weeks. Your dog needs to build a relationship with the trainer and settle into the structure of the program without the emotional disruption of seeing you and then watching you leave. During the third week, we bring you in for transfer sessions where you learn to handle your dog with the new training.',
  },
  {
    question: 'What happens after the three weeks?',
    answer:
      'You get a transfer session where we teach you everything your dog has learned and how to maintain it. After that, you have free refresher lessons — come back anytime your dog needs a tune-up. You also have lifetime phone support. Call us at any point if something comes up.',
  },
  {
    question: 'Do you work with dogs that have been deemed dangerous?',
    answer:
      'It depends on the situation. If your dog has been declared dangerous or vicious by animal control, there may be legal requirements around housing and handling that affect whether we can take them. Call us and tell us the full picture. We have worked with these cases before and we will tell you honestly whether we can help.',
  },
];

export default function AggressiveDogTraining() {
  return (
    <>
      <PageHeader
        title="Aggressive Dog Training in Corona, CA"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Dog Training', to: '/dog-training' },
          { label: 'Aggressive Dog Training' },
        ]}
        directAnswer="Our Behavior Rehabilitation Program is $3,500 for a three-week board and train. Every aggressive dog is evaluated individually before acceptance. This is not a program you can sign up for online — we need to meet your dog first."
      />

      {/* Empathetic Opening */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">If You're Reading This Page</p>
          <p>
            If you are on this page, you are probably scared, embarrassed, or
            both. Your dog may have bitten someone, lunged at a child, or
            attacked another dog. You may have been told to put your dog down.
          </p>
          <p>
            We hear this every week. You are not alone, and your dog is not
            necessarily hopeless.
          </p>
          <p>
            But we will not lie to you either — not every case has a happy
            ending, and the work is hard. What we can promise is that we will be
            straight with you from the first phone call. If we think we can help,
            we will tell you what that looks like. If we do not think we can, we
            will tell you that too.
          </p>
        </div>
      </section>

      {/* What We Do First */}
      <section className="section section--paper">
        <div className="container">
          <h2>What We Do First</h2>
          <p>
            Before anything else, we need to meet your dog. The evaluation is
            $50 and takes place at the ranch.
          </p>
          <p>
            Chad or Kyla will spend time with your dog — observing their body
            language, assessing their triggers, identifying their threshold, and
            getting a read on the dog as a whole. We are not running your dog
            through a checklist. We are looking at whether this dog can be helped
            safely, not whether it fits neatly into a program.
          </p>
          <p>
            During the evaluation, we will also talk with you. How long has this
            been going on? What have you tried? What does the behavior look like
            at home versus in public? The more honest you are, the better we can
            help.
          </p>
          <p>
            If we accept your dog, the $50 evaluation fee is credited toward the
            program cost.
          </p>
        </div>
      </section>

      {/* Dogs We Typically Accept */}
      <section className="section section--bone">
        <div className="container">
          <h2>Dogs We Typically Accept</h2>
          <ul>
            {dogsWeAccept.map((item) => (
              <li key={item}>
                <Check size={16} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dogs We May Decline */}
      <section className="section section--paper">
        <div className="container">
          <h2>Dogs We May Decline</h2>
          <p>
            We do not accept every dog. That is not a limitation — it is
            responsibility. Taking on a case we cannot help does not serve the
            dog or the owner.
          </p>
          <ul>
            {dogsWeDecline.map((item) => (
              <li key={item}>
                <AlertTriangle size={16} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What the Program Looks Like */}
      <section className="section section--bone">
        <div className="container">
          <h2>What the Program Looks Like</h2>
          <p>
            The Behavior Rehabilitation Program is three weeks at the ranch.
            Your dog lives here full-time and works with our trainers every day.
          </p>
          <h3>Relationship Building</h3>
          <p>
            The first several days are about trust. Your dog needs to feel safe
            with the trainer before any real work can begin. For aggressive dogs,
            this step cannot be rushed. We build a relationship through
            structured routines, consistent handling, and low-pressure
            interaction.
          </p>
          <h3>Desensitization and Counter-Conditioning</h3>
          <p>
            Once the relationship is established, we begin structured exposure to
            the dog's triggers — at a distance and intensity the dog can handle.
            We pair the presence of the trigger with positive outcomes. Over
            time, the dog's emotional response changes from reactive to neutral.
          </p>
          <h3>Controlled Exposure</h3>
          <p>
            Our five-acre facility allows us to control distance, intensity, and
            duration of trigger exposure in ways that are not possible in a
            neighborhood or a public park. We use helper dogs, staged scenarios,
            and real-world setups to teach your dog to make better choices under
            pressure.
          </p>
          <h3>E-Collar Conditioning</h3>
          <p>
            When appropriate, we introduce e-collar work at low levels after the
            dog has a clear understanding of what is being asked through marker
            training. The e-collar is a communication tool, not a punishment
            device. Not every dog in this program needs one. If yours does not,
            we will not use one.
          </p>
          <h3>Transfer Work</h3>
          <p>
            This is where you come in. During the final phase, we spend
            extensive time teaching you how to handle your dog with the new
            training. You will learn the equipment, the commands, the timing, and
            the management protocols that keep your dog and everyone around them
            safe. The training is only as good as the person holding the leash.
          </p>
        </div>
      </section>

      {/* What It Costs */}
      <section className="section section--paper">
        <div className="container">
          <h2>What It Costs</h2>
          <div className="card">
            <h3>Behavior Rehabilitation Program</h3>
            <p className="area-tag">$3,500 — 3 Weeks</p>
            <ul>
              <li>Evaluation credit ($50 applied to program cost)</li>
              <li>Daily training with professional behavior trainers</li>
              <li>Transfer session with the owner</li>
              <li>Free refresher lessons for life</li>
              <li>Lifetime phone support</li>
            </ul>
            <p>
              <strong>$500 deposit</strong> required to reserve your dog's spot.
              The balance is due at drop-off.
            </p>
          </div>
          <p>
            We do not run sales or discounts. The price is the price. This work
            is intensive, it is skilled, and it is worth what we charge for it.
          </p>
        </div>
      </section>

      {/* What We Won't Promise */}
      <section className="section section--bone">
        <div className="container">
          <h2>What We Won't Promise</h2>
          <p>
            We will not guarantee that your dog will never bite again. Anyone who
            makes that promise is lying.
          </p>
          <p>
            What we can tell you is that in most cases, the behavior improves
            significantly, management becomes realistic, and the dog can live a
            reasonable life. Some dogs improve dramatically. Some improve enough.
            A very small number do not.
          </p>
          <p>
            We will be honest with you about where your dog falls on that
            spectrum — before the program, during it, and after. You deserve to
            know what you are working with.
          </p>
        </div>
      </section>

      {/* Chad's Background */}
      <section className="section section--paper">
        <div className="container">
          <h2>Who's Working with Your Dog</h2>
          <p>
            Chad Gabriel has worked with over 1,000 dogs, including hundreds of
            aggression cases. He has turned away dogs he did not think he could
            help, and he has been honest with owners when the prognosis was poor.
            That honesty is the reason people trust us.
          </p>
          <p>
            Chad does not approach aggression with a one-size-fits-all method. He
            reads the dog in front of him and adapts. Some dogs need patience and
            counter-conditioning. Some need clear boundaries and structure. Most
            need both. The skill is knowing which to use and when.
          </p>
          <p>
            Kyla works alongside Chad and handles many of the evaluations and
            daily training sessions. Between the two of them, your dog is in
            experienced hands every day of the program.
          </p>
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
        title="Take the first step"
        body="Request an assessment. We'll meet your dog, give you an honest evaluation, and tell you what we think is possible."
        primaryLabel="Request an Assessment"
        primaryTo="/book-evaluation"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
