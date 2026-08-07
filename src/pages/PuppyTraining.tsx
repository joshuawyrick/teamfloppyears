import { Link } from 'react-router-dom';
import { Users, Hop as Home, Scissors, Hand, Footprints, PhoneCall } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const skills = [
  {
    icon: Users,
    title: 'Socialization',
    description:
      'Safe, controlled exposure to people, dogs, sounds, surfaces, and novel environments. We introduce your puppy to the world in a way that builds confidence, not fear. This is the single most important thing you can do for a young dog.',
  },
  {
    icon: Home,
    title: 'Potty Training',
    description:
      'Structure and schedule that actually works. We establish a routine, manage access, and reward the right behavior until your puppy understands where to go. No gimmicks, no pads — just consistency.',
  },
  {
    icon: Scissors,
    title: 'Crate Training',
    description:
      'The crate becomes a safe place, not a punishment. We teach your puppy to settle in the crate willingly, which makes house training easier, prevents destructive behavior, and gives your puppy a space that is entirely theirs.',
  },
  {
    icon: Hand,
    title: 'Bite Inhibition',
    description:
      'Teaching your puppy that teeth on skin means the fun stops. Puppies explore with their mouths — that is normal. But they need to learn pressure control and that biting people is not how they get what they want.',
  },
  {
    icon: Footprints,
    title: 'Leash Manners',
    description:
      'Walking without pulling from day one. We do not wait until your puppy is 60 pounds and dragging you down the street. Leash manners are easier to teach at 12 weeks than at 12 months.',
  },
  {
    icon: PhoneCall,
    title: 'Recall',
    description:
      'Coming when called, even when they do not want to. Recall is the most important command your dog will ever learn, and it starts with building a foundation where coming to you is always the best option.',
  },
];

const faqItems = [
  {
    question: 'How old does my puppy need to be?',
    answer:
      'We start working with puppies as young as 8 weeks old for private lessons. For the Puppy Board & Train, we recommend starting between 10 and 16 weeks — early enough to take full advantage of the socialization window, and old enough that the puppy can handle being away from home. If your puppy is older than 6 months, we may recommend a different program. Call us and we will figure out the best fit.',
  },
  {
    question: 'Is Board & Train safe for puppies?',
    answer:
      'Yes. Our facility is set up to handle puppies safely. They are housed separately from adult dogs, supervised at all times during socialization and play, and their daily routine is designed around the needs of a developing dog — shorter training sessions, more rest, age-appropriate expectations. We have put hundreds of puppies through this program.',
  },
  {
    question: 'What vaccines does my puppy need?',
    answer:
      'Your puppy needs to be current on their age-appropriate vaccinations. At minimum, they should have started their DHPP series and be current on their Bordetella. Rabies is required once they are old enough (typically 12-16 weeks depending on your vet). We will ask for vaccination records before your puppy arrives. If you are unsure about your puppy\'s vaccination schedule, check with your vet — we are happy to work around the schedule as long as the basics are covered.',
  },
  {
    question: 'Will my puppy be with other dogs?',
    answer:
      'Yes, but only in supervised, controlled settings with dogs that are appropriate matches. Socialization with other dogs is a key part of puppy training, but we do not throw puppies into a group and hope for the best. We match by size, age, and temperament, and a trainer is present for every interaction.',
  },
  {
    question: 'What if my puppy already has behavior problems?',
    answer:
      'Puppies under 6 months rarely have true behavior problems — what they have are normal puppy behaviors that have not been addressed yet. Biting, jumping, barking, chewing, and ignoring you are all standard puppy stuff. If your puppy is showing early signs of fear, anxiety, or aggression, that is actually more reason to start now while the brain is still developing and most receptive to change. Call us and describe what you are seeing — we will tell you whether puppy training covers it or if your dog needs a different approach.',
  },
];

export default function PuppyTraining() {
  return (
    <>
      <PageHeader
        title="Puppy Training in Corona, CA"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Dog Training', to: '/dog-training' },
          { label: 'Puppy Training' },
        ]}
        directAnswer="Start your puppy right with private lessons at $200 per session or our Puppy Board & Train at $3,200 for six weeks. We cover socialization, potty training, crate training, biting, leash manners, and recall — everything a puppy needs before adolescence makes it harder."
      />

      {/* Why Start Now */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">The Clock Is Ticking</p>
          <h2>Why Start Now</h2>
          <p>
            The socialization window closes around 16 weeks. During this period,
            your puppy's brain is wired to accept new experiences — new people,
            new dogs, new sounds, new surfaces — with relatively low stress.
            After that window closes, everything unfamiliar becomes something to
            be cautious about instead of curious about.
          </p>
          <p>
            Habits formed now — good and bad — are the ones that stick. The
            puppy who learns to sit before being fed at 10 weeks keeps that
            habit at two years. The puppy who learns that jumping gets attention
            at 10 weeks is still jumping at two years, except now they weigh 70
            pounds.
          </p>
          <p>
            Every week you wait makes the work a little harder. Not impossible,
            just harder. The investment you make now pays off for the lifetime of
            your dog.
          </p>
        </div>
      </section>

      {/* What We Work On */}
      <section className="section section--paper">
        <div className="container">
          <h2>What We Work On</h2>
          <div className="grid-3">
            {skills.map((skill) => (
              <div key={skill.title} className="card">
                <skill.icon size={24} />
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Options */}
      <section className="section section--bone">
        <div className="container">
          <h2>Two Ways to Get Started</h2>
          <div className="grid-2">
            <div className="card">
              <h3>Puppy Board & Train</h3>
              <p className="area-tag">$3,200 — 6 Weeks</p>
              <p>
                Best for puppies under 6 months. Your puppy lives at the ranch
                and gets daily socialization, daily training, and the kind of
                consistent structure that builds a solid foundation.
              </p>
              <ul>
                <li>Daily socialization with people, dogs, and environments</li>
                <li>Daily training sessions — short, age-appropriate, and fun</li>
                <li>Potty training and crate training on a real schedule</li>
                <li>Transfer session so you know how to maintain everything</li>
                <li>Free refresher lessons for life</li>
                <li>Lifetime phone support</li>
              </ul>
              <p>
                Six weeks is longer than our adult Board & Train because puppies
                need more repetition, more socialization exposure, and more time
                to develop. You cannot rush a puppy's brain.
              </p>
            </div>
            <div className="card">
              <h3>Private Lessons</h3>
              <p className="area-tag">$200/session or $900 for 5</p>
              <p>
                Best for owners who want to do the training themselves with
                professional guidance. You and your puppy come to the ranch for
                60-minute sessions where we teach you the skills, the timing,
                and the approach.
              </p>
              <ul>
                <li>One-on-one with a trainer — no group classes</li>
                <li>60-minute sessions at the ranch</li>
                <li>You learn to train your own dog</li>
                <li>Homework between sessions to keep the progress going</li>
                <li>Flexible scheduling</li>
              </ul>
              <p>
                Private lessons work well for owners with the time and
                consistency to practice between sessions. If your schedule is
                unpredictable or you want the heavy lifting done for you, Board
                & Train is the better option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Adolescence Warning */}
      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">About Months 6 Through 12</p>
          <h2>The Adolescence Warning</h2>
          <p>
            Your sweet puppy is going to turn into a teenager. They will test
            boundaries, "forget" things they knew, and generally make you
            question your life choices. This is normal.
          </p>
          <p>
            Adolescence in dogs is a real developmental phase, not a myth. Your
            puppy's brain is being remodeled. Impulse control gets worse before
            it gets better. Previously learned behaviors may seem to vanish.
            Your puppy may suddenly become fearful of things they were fine with
            before.
          </p>
          <p>
            This is also why the work you do now matters — it gives you a
            foundation to fall back on when the teenage brain kicks in. A puppy
            who spent six weeks in a structured program with hundreds of
            repetitions is going to come through adolescence in much better
            shape than a puppy who never had that foundation.
          </p>
          <p>
            And when the teenage phase hits, remember: you have lifetime
            refresher lessons. Use them. This is exactly what they are for.
          </p>
        </div>
      </section>

      {/* Socialization Window */}
      <section className="section section--bone">
        <div className="container">
          <h2>The Socialization Window</h2>
          <p>
            Between 3 and 16 weeks of age, your puppy is in what behaviorists
            call the critical socialization period. During this time, the brain
            is primed to accept new experiences as normal. A puppy who meets 100
            different people, walks on 20 different surfaces, and hears dozens
            of different sounds during this window grows up to be a confident,
            adaptable adult dog.
          </p>
          <p>
            A puppy who spends this window in a backyard seeing the same four
            walls every day is more likely to become fearful, reactive, or
            anxious as an adult. Not guaranteed — but the odds go up
            significantly.
          </p>
          <p>
            After 16 weeks, your puppy can still learn. Socialization does not
            stop entirely. But the window for easy, low-stress socialization
            starts to close. This is biology, not opinion. The research on
            canine socialization windows is well-established and consistent.
          </p>
          <p>
            If your puppy is already past 16 weeks, do not panic. Start now.
            The second-best time to begin is today.
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
        title="Get your puppy started"
        body="The earlier you start, the easier everything is. Give us a call or fill out the form, and we'll talk through what makes sense for your puppy."
        primaryLabel="Book a Free Call"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
