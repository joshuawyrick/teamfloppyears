import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const tools = [
  {
    name: 'E-Collar',
    desc: 'A remote training collar that delivers a low-level electronic stimulation. We use it primarily in the Off-Leash Reliability Program. The dog is conditioned to the e-collar gradually — we start at the lowest perceptible level and pair it with commands the dog already knows. Modern e-collars have 100+ levels, and most dogs work at levels between 5 and 15 out of 100.',
  },
  {
    name: 'Prong Collar',
    desc: 'A collar with blunted metal links that distribute pressure evenly around the neck. We use prong collars for leash communication with strong dogs. They\'re more precise than a flat collar and safer than a choke chain. We fit every prong collar properly and teach owners how to use them correctly.',
  },
  {
    name: 'Slip Lead',
    desc: 'A simple leash-and-collar combination. Good for transitions and calm walking.',
  },
  {
    name: 'Long Line',
    desc: 'A 15-30 foot leash for practicing recall and distance work before the dog earns off-leash freedom.',
  },
];

const faqItems = [
  {
    question: "Isn't positive-only training better?",
    answer:
      "Positive-only training works for some dogs in some situations. It doesn't work reliably for dogs with serious behavior problems, dogs who need off-leash reliability, or dogs who have learned to ignore treats. We use positive reinforcement as our foundation and add corrections where they're needed. We'd rather have a trained dog than a philosophical debate.",
  },
  {
    question: 'Will the e-collar hurt my dog?',
    answer:
      "At the levels we use, no. Modern e-collars have over 100 levels. Most dogs work between 5 and 15. The sensation is a muscle stimulation, like a TENS unit — noticeable but not painful. We condition every dog to the e-collar slowly and never use it in a way that scares the dog.",
  },
  {
    question: 'Can I choose which tools are used?',
    answer:
      "You can raise any concern and we'll address it honestly. If there's a tool you're uncomfortable with, we'll explain why we recommend it and discuss alternatives. In some cases, alternatives work fine. In others, the tool is the most effective and humane option for your dog's specific situation.",
  },
  {
    question: 'Do you certify dogs?',
    answer:
      "We are AKC Canine Good Citizen evaluators and can test your dog for the CGC certification. We don't issue our own certifications — we focus on real-world results, not certificates.",
  },
];

const dontDoList = [
  "We don't hang dogs from leashes.",
  "We don't 'alpha roll' dogs.",
  "We don't kick, hit, or intimidate.",
  "We don't use shock as punishment.",
  "We don't correct a dog who doesn't understand.",
  "We don't rush the process to save time.",
  "We don't use tools on a dog without explaining them to the owner first.",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function TrainingMethods() {
  return (
    <>
      <PageHeader
        title="Our Training Methods"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Training Methods' },
        ]}
        directAnswer="We use balanced training — a combination of positive reinforcement and fair corrections. We start by teaching the dog what to do. Once the dog understands, we add accountability. We use markers, e-collars, prong collars, and leashes. We'll explain exactly what we use on your dog and why."
      />

      {/* ============================================================ */}
      {/* WHAT BALANCED TRAINING MEANS                                  */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Our Approach</p>
          <h2>What balanced training means</h2>
          <p>
            Balanced training means the dog gets information from both sides —
            they learn what earns reward and what doesn't meet the standard. We
            don't rely exclusively on treats, and we don't rely exclusively on
            corrections. We use whatever communication is clearest for that dog
            in that moment.
          </p>
          <p>
            Some dogs respond beautifully to food and praise alone. Some dogs
            need a clearer "no." Most dogs need both, applied thoughtfully.
          </p>
          <p>
            The word "balanced" gets a lot of heat on the internet. We're not
            interested in arguing about it. We're interested in results that
            hold up outside the training facility.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MARKERS AND RELATIONSHIP FIRST                                */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">Where We Start</p>
          <h2>Markers and relationship first</h2>
          <p>
            Every dog starts with marker training and relationship building. We
            use a verbal marker ("yes") to tell the dog the exact moment they
            did something right, followed by a reward. This gives the dog clear
            information — they understand what earned the reward, so they can
            repeat it.
          </p>
          <p>
            No corrections happen until the dog understands the command. We're
            not going to correct a dog for breaking a "stay" if the dog doesn't
            know what "stay" means yet. That's not training, that's confusion.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHEN AND WHY CORRECTIONS                                      */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">The Other Side of the Conversation</p>
          <h2>When and why corrections</h2>
          <p>
            Once a dog understands a command — genuinely understands it, not
            just got lucky once — we add corrections. A correction is a
            consequence for a choice the dog made with full understanding.
            It's not anger. It's not punishment for confusion. It's
            information: "That choice wasn't right, try again."
          </p>
          <p>
            Corrections are proportional. A stubborn sit refusal from a Lab
            doesn't get the same correction as a dangerous lunge from a
            reactive dog. We match the correction to the dog, the behavior,
            and the context.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TOOLS WE USE                                                  */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">Our Equipment</p>
          <h2>Tools we use</h2>
          <div className="grid-2" style={{ marginTop: 'var(--s-6)' }}>
            {tools.map((tool) => (
              <div key={tool.name} className="card">
                <h3>{tool.name}</h3>
                <p>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT WE DON'T DO                                              */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Our Lines</p>
          <h2>What we don't do</h2>
          <ul style={{ marginTop: 'var(--s-4)' }}>
            {dontDoList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                           */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Frequently asked questions</h2>
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA                                                           */}
      {/* ============================================================ */}
      <CTASection
        title="See our methods in action"
        body="Book a tour and watch us work. No pressure, no sales pitch — just an honest look at how we train."
        primaryLabel="Book a Tour"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
