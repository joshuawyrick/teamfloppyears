import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const outcomes = [
  'Walk past other dogs without losing it',
  'Settle when triggers appear instead of exploding',
  'Look to you instead of reacting',
  'Handle novel environments — new places, new people, new situations',
  'Reliable recall even with distractions present',
];

const faqItems = [
  {
    question: 'Is reactivity curable?',
    answer:
      'In most cases, reactivity improves dramatically with the right training and management. Some dogs reach the point where they can walk calmly past their triggers without a reaction. Others get to a manageable level where the owner can redirect them easily. Very few dogs show zero improvement. "Curable" is the wrong word — "manageable" and "significantly improved" are the honest ones.',
  },
  {
    question: 'Does my dog need the $3,500 program?',
    answer:
      'Not necessarily. Most reactive dogs do well in the standard Board & Train at $2,900. The Behavior Rehabilitation Program at $3,500 is for severe cases — dogs that have caused injury, dogs that cannot be walked at all, or dogs whose reactivity has crossed into actual aggression. We will tell you which program fits during the evaluation. We are not going to upsell you.',
  },
  {
    question: 'Will my dog be around other dogs?',
    answer:
      'Yes — in controlled, structured ways. That is the whole point. Your dog needs to learn how to exist near other dogs without falling apart. We control the distance, the intensity, and the duration of every exposure. Your dog is never thrown into a situation they cannot handle.',
  },
  {
    question: 'What methods do you use for reactivity?',
    answer:
      'Structured exposure at sub-threshold distances, marker training to reward the behavior we want, confidence-building exercises, impulse control work, and in some cases, e-collar conditioning at appropriate levels. We are not purely positive and we are not purely correction-based. We use what works for the individual dog.',
  },
  {
    question: 'How do I know if it\'s reactivity or aggression?',
    answer:
      'Reactive dogs are loud and dramatic — barking, lunging, spinning at the end of the leash — but they are usually not trying to cause harm. They are overwhelmed. Aggressive dogs show intent — stiff body, hard stare, calm and deliberate approach before a bite. If your dog has bitten or shows quiet, focused threat behavior, that is likely aggression and we have a separate program for it. If you are not sure, call us. We can usually get a sense from a phone conversation and confirm during the evaluation.',
  },
];

export default function ReactiveDogTraining() {
  return (
    <>
      <PageHeader
        title="Reactive Dog Training in Corona, CA"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Dog Training', to: '/dog-training' },
          { label: 'Reactive Dog Training' },
        ]}
        directAnswer="Reactivity — barking, lunging, losing it at the end of the leash — is one of the most common problems we see. It's also one of the most fixable. Our Board & Train starts at $2,900 for three weeks, or $3,500 for our Behavior Rehabilitation Program for severe cases."
      />

      {/* What Reactivity Looks Like */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Your Dog Isn't Bad</p>
          <h2>What Reactivity Looks Like</h2>
          <p>
            Barking and lunging at other dogs. Losing it when a bicycle goes by.
            Pulling so hard you can barely hold the leash. Exploding at the
            window every time someone walks past the house. Crossing the street
            to avoid every dog in the neighborhood. Dreading walks because you
            know what is going to happen.
          </p>
          <p>
            This is reactivity. It is exhausting, embarrassing, and isolating.
            It makes you feel like you are the only person in the world whose dog
            cannot act normal.
          </p>
          <p>
            You are not. This is one of the most common behavior problems we see.
            And here is the thing most people do not hear enough: this is not
            dominance. It is usually fear, frustration, or overstimulation. Your
            dog is overwhelmed, not disobedient. They are not trying to be
            difficult — they genuinely do not know how to handle what they are
            feeling.
          </p>
        </div>
      </section>

      {/* Reactivity vs Aggression */}
      <section className="section section--paper">
        <div className="container">
          <h2>Reactivity vs. Aggression</h2>
          <p>
            People use these words interchangeably, but they are not the same
            thing. The difference matters because it changes the program, the
            timeline, and the expectations.
          </p>
          <div className="grid-2">
            <div className="card">
              <h3>Reactivity</h3>
              <p>
                Reactive dogs are loud and dramatic. They bark, lunge, spin, and
                make a scene. But they are usually reacting out of fear,
                frustration, or overexcitement — not intent to harm. If they got
                off the leash, most reactive dogs would not actually engage.
                They are performing, not hunting.
              </p>
            </div>
            <div className="card">
              <h3>Aggression</h3>
              <p>
                Aggressive dogs show intent. A hard stare, a stiff body, a calm
                and deliberate approach. They are not panicking — they are
                making a decision. Aggression often looks quieter than
                reactivity, which is part of what makes it more dangerous.
              </p>
            </div>
          </div>
          <p>
            If your dog has bitten or shows calm, deliberate threat behavior,
            that is aggression — and we have a{' '}
            <Link to="/aggressive-dog-training">
              separate program for it
            </Link>
            . If you are not sure which camp your dog falls into, call us. We
            can usually get a sense from a conversation and confirm during the
            evaluation.
          </p>
        </div>
      </section>

      {/* What We Do About It */}
      <section className="section section--bone">
        <div className="container">
          <h2>What We Do About It</h2>
          <p>
            We do not just tell your dog to stop. We teach your dog that the
            trigger is not something to worry about.
          </p>
          <p>
            The work starts with structured exposure — putting your dog in the
            presence of their triggers at a distance and intensity they can
            handle. From there, we use marker training to reinforce calm,
            confident behavior. We build impulse control so your dog can think
            before they react. We work on confidence so they do not feel the
            need to react in the first place.
          </p>
          <p>
            Threshold management is the core of this work. If your dog is over
            threshold — meaning they are already fired up and past the point of
            learning — no amount of correction or treats is going to change
            anything. We work below threshold, where the dog can still think,
            and we build from there. Over time, the threshold moves. What used
            to set your dog off at 50 feet stops being a problem at 10.
          </p>
          <p>
            Our five-acre facility gives us the space to control distance in ways
            that are impossible on a sidewalk. We use helper dogs, staged
            scenarios, and real-world setups. By the time your dog leaves, they
            have practiced being calm around triggers hundreds of times in
            dozens of different contexts.
          </p>
        </div>
      </section>

      {/* Program Options */}
      <section className="section section--paper">
        <div className="container">
          <h2>Program Options</h2>
          <div className="grid-2">
            <div className="card">
              <h3>Board & Train</h3>
              <p className="area-tag">$2,900 — 3 Weeks</p>
              <p>
                For moderate reactivity — dogs who bark and lunge but have not
                bitten. Your dog lives at the ranch, trains daily, and gets
                structured exposure to triggers in controlled settings.
              </p>
              <ul>
                <li>Daily training sessions</li>
                <li>Structured trigger exposure</li>
                <li>Transfer session with owner</li>
                <li>Free refresher lessons</li>
                <li>Lifetime phone support</li>
              </ul>
            </div>
            <div className="card">
              <h3>Behavior Rehabilitation</h3>
              <p className="area-tag">$3,500 — 3 Weeks</p>
              <p>
                For severe reactivity — dogs who have caused injury, dogs who
                cannot be walked at all, or dogs whose reactivity has crossed
                into aggression. More intensive daily work and additional
                management protocols.
              </p>
              <ul>
                <li>Intensive daily training</li>
                <li>Advanced behavior modification</li>
                <li>Extended transfer session with owner</li>
                <li>Free refresher lessons</li>
                <li>Lifetime phone support</li>
              </ul>
            </div>
          </div>
          <p>
            Not sure which program your dog needs? Call us. We will ask about
            the behavior and help you figure it out. If we need to see the dog
            in person before deciding, we will schedule an evaluation ($50,
            credited toward the program).
          </p>
        </div>
      </section>

      {/* What Your Dog Learns */}
      <section className="section section--bone">
        <div className="container">
          <h2>What Your Dog Learns</h2>
          <p>
            By the end of the program, most dogs can reliably do the following:
          </p>
          <ul>
            {outcomes.map((item) => (
              <li key={item}>
                <Check size={16} /> {item}
              </li>
            ))}
          </ul>
          <p>
            Results vary by dog. Some dogs are walking calmly past triggers
            within two weeks. Others need the full three weeks and continued
            practice at home. We will be honest about where your dog is
            throughout the process.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--paper">
        <div className="container">
          <h2>Timeline and Expectations</h2>
          <p>
            Most reactive dogs show significant improvement within the
            three-week program. You will see a different dog at the transfer
            session than the one you dropped off.
          </p>
          <p>
            But here is the part people do not always want to hear: transfer to
            the owner is where the real work begins. Your dog learned to be calm
            around triggers with a trainer who knows what they are doing. Now
            your dog needs to do the same thing with you.
          </p>
          <p>
            We spend as much time teaching you as we do teaching your dog. The
            transfer session covers equipment, timing, body language, leash
            handling, and what to do when things do not go perfectly. And they
            will not always go perfectly — that is normal.
          </p>
          <p>
            After the program, you have free refresher lessons and lifetime
            phone support. Use them. The owners who get the best long-term
            results are the ones who come back for tune-ups and call when
            something comes up instead of waiting until it becomes a problem
            again.
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
        title="Let's talk about your dog"
        body="Every reactive dog is different. Call us, tell us what's going on, and we'll help you figure out the right path forward."
        primaryLabel="Book a Free Call"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
