import { Link } from 'react-router-dom';
import {
  Sun,
  UtensilsCrossed,
  Pill,
  Camera,
  Users,
  Check,
  X,
  ArrowRight,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const includedItems = [
  {
    icon: Sun,
    title: 'Daily Outdoor Time',
    description:
      'Every dog gets daily time in our outdoor areas. Fresh air, room to move, and the kind of physical activity that keeps dogs calm and happy indoors.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Feeding on Your Schedule',
    description:
      'Bring your dog\'s food and we will feed them on the schedule they are used to. Same food, same times, no digestive surprises.',
  },
  {
    icon: Pill,
    title: 'Medications Administered',
    description:
      'If your dog is on medication, we will administer it on schedule. Just bring it labeled with clear instructions.',
  },
  {
    icon: Camera,
    title: 'Daily Photo Updates',
    description:
      'You will get photos of your dog during their stay. No news is good news, but we know you want to see them anyway.',
  },
  {
    icon: Users,
    title: 'Supervised Play Groups',
    description:
      'For dogs with appropriate temperaments, we offer supervised group play. Dogs are matched by size, energy, and play style. Not every dog is a candidate — we assess first.',
  },
];

const pricingData = [
  {
    type: 'Standard Boarding',
    price: '$80/night',
    note: '',
  },
  {
    type: 'Holiday Boarding',
    price: '$100/night',
    note: 'Thanksgiving, Christmas, New Year\'s, Fourth of July, Memorial Day, Labor Day',
  },
  {
    type: 'Behavior Dog Boarding',
    price: '$100/night',
    note: 'For reactive or aggressive dogs that need extra handling and separate management',
  },
  {
    type: 'Multi-Dog Discount',
    price: '-$10/night',
    note: 'Per additional dog from the same household',
  },
];

const greatFit = [
  'Dogs who do well in structured environments',
  'Dogs whose owners travel for work or vacation',
  'Dogs who need routine and consistency',
  'Well-socialized dogs who enjoy being around people',
];

const considerAlternatives = [
  'Dogs with severe separation anxiety who cannot settle in any new environment',
  'Dogs with contagious illness',
  'Dogs who have not been evaluated at our facility',
];

const faqItems = [
  {
    question: 'What do I need to bring for my dog\'s stay?',
    answer:
      'Bring your dog\'s food (portioned or with clear feeding instructions), any medications with dosing instructions, and their vaccination records if we do not already have them on file. You are welcome to bring a bed or blanket from home, but we have bedding available. We do not recommend bringing toys — we have plenty and it avoids resource guarding issues between dogs.',
  },
  {
    question: 'Can I tour the facility before booking?',
    answer:
      'Yes. Call us at (951) 454-6773 to schedule a tour. We want you to see where your dog will be staying before you commit. We are proud of this facility and we are happy to show it off.',
  },
  {
    question: 'What happens if my dog gets sick or injured?',
    answer:
      'We will contact you immediately. If we cannot reach you, we will contact your emergency contact. For urgent situations, we will take your dog to the nearest emergency vet and notify you as soon as possible. We ask for emergency vet authorization and an emergency contact when you book.',
  },
  {
    question: 'Do you offer training during boarding stays?',
    answer:
      'Standard boarding is boarding — it does not include formal training sessions. If you want your dog trained while they board, that is our Board & Train program, which is a separate service with its own pricing and structure. We will not upsell you on training add-ons during a boarding stay.',
  },
  {
    question: 'What are your drop-off and pick-up times?',
    answer:
      'Drop-off is between 7:00 AM and 10:00 AM. Pick-up is between 3:00 PM and 6:00 PM. If you need to arrange times outside these windows, call us and we will do our best to accommodate you.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'For holiday weekends and summer, book at least two to three weeks in advance. We fill up fast during peak times. For regular stays, a week\'s notice is usually fine, but calling ahead is always a good idea.',
  },
];

export default function DogBoarding() {
  return (
    <>
      <PageHeader
        title="Dog Boarding in Corona, CA"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Dog Boarding' },
        ]}
        directAnswer="Dog boarding at Floppy Ears Ranch starts at $80 per night. Your dog stays on five acres in Corona, supervised by professional trainers — not kennel attendants. Climate-controlled indoor kennels, daily outdoor time, and the kind of structured routine most boarding facilities can't offer."
        trustBar
      />

      {/* What Makes This Different */}
      <section className="section section--bone">
        <div className="container">
          <h2>What Makes This Different</h2>
          <p>
            Most boarding kennels are run by people who like dogs. Ours is run by
            people who train them.
          </p>
          <p>
            Every staff member at Floppy Ears Ranch is a professional trainer.
            That means your dog is not just being watched — they are being
            managed by people who understand body language, stress signals, and
            how to keep a group of dogs safe and calm. Your dog gets structure
            during their stay, not just a kennel and a yard.
          </p>
          <p>
            Dogs do better with routine. We provide that. Consistent feeding
            times, scheduled outdoor time, and staff who know the difference
            between a dog who is excited and a dog who is anxious. That matters
            more than you might think.
          </p>
        </div>
      </section>

      {/* The Facility */}
      <section className="section section--paper">
        <div className="container">
          <h2>The Facility</h2>
          <div className="grid-2">
            <div>
              <h3>Climate-Controlled Kennels</h3>
              <p>
                Indoor kennels are climate-controlled year-round. Southern
                California summers hit triple digits, and our dogs stay
                comfortable. Each kennel is cleaned daily and sized appropriately
                for your dog.
              </p>
            </div>
            <div>
              <h3>Jax Weller Arena</h3>
              <p>
                Our covered arena features cooled turf, shade structures, and
                splash pools. Dogs get supervised time here daily. It is the
                centerpiece of the ranch and a space most boarding facilities
                cannot match.
              </p>
            </div>
            <div>
              <h3>Outdoor Areas</h3>
              <p>
                Five acres of property with multiple fenced outdoor areas. Dogs
                rotate through different spaces throughout the day. There is room
                to run, room to sniff, and room to just be a dog.
              </p>
            </div>
            <div>
              <h3>Separate Management Areas</h3>
              <p>
                Dogs who need separate handling — reactive dogs, anxious dogs, or
                dogs who simply do better on their own — have their own spaces.
                We do not force every dog into the same routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section section--bone">
        <div className="container">
          <h2>What's Included</h2>
          <p>
            Every boarding stay includes the following at no extra charge.
          </p>
          <div className="grid-3">
            {includedItems.map((item) => (
              <div key={item.title} className="card">
                <item.icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section section--paper">
        <div className="container">
          <h2>Boarding Rates</h2>
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Rate</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row) => (
                <tr key={row.type}>
                  <td>{row.type}</td>
                  <td>{row.price}</td>
                  <td>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            Pricing is per night. Check-in day and check-out day each count as
            one night. No hidden fees, no surprise charges.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="section section--bone">
        <div className="container">
          <h2>Boarding Requirements</h2>
          <p>
            We keep these requirements for the safety of every dog at the
            facility.
          </p>
          <ul>
            <li>
              <strong>Current vaccinations:</strong> DHPP, Bordetella, and
              Rabies. Bring records or have your vet send them to us.
            </li>
            <li>
              <strong>Spay/neuter:</strong> Preferred but not required. Intact
              dogs may need separate management, which we handle.
            </li>
            <li>
              <strong>Temperament evaluation:</strong> Every dog must be
              evaluated at the ranch before their first stay. The evaluation is
              $50 and takes about an hour. This is non-negotiable — we need to
              know your dog before they board here.
            </li>
            <li>
              <strong>Flea and tick prevention:</strong> Must be current. We will
              not board a dog with an active flea or tick problem.
            </li>
          </ul>
        </div>
      </section>

      {/* Who It's For / Not For */}
      <section className="section section--paper">
        <div className="container">
          <h2>Is This the Right Fit?</h2>
          <div className="grid-2">
            <div className="card">
              <h3>Great Fit</h3>
              <ul>
                {greatFit.map((item) => (
                  <li key={item}>
                    <Check size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Consider Alternatives</h3>
              <ul>
                {considerAlternatives.map((item) => (
                  <li key={item}>
                    <X size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reactive/Aggressive Boarding */}
      <section className="section section--bone">
        <div className="container">
          <Link to="/boarding-reactive-aggressive-dogs" className="link-card">
            <h3>Boarding for Reactive and Aggressive Dogs</h3>
            <p>
              If your dog is reactive or has a history of aggression, we still
              board them — but it is handled differently. Separate housing,
              individual outdoor time, and management by trainers who specialize
              in behavior cases. Behavior Dog Boarding runs $100 per night and
              requires an evaluation before acceptance.
            </p>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--paper">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to book?"
        body="Give us a call or fill out the form. We'll get your dog's stay set up."
        primaryLabel="Book Boarding"
        primaryTo="/contact"
        background="evergreen"
      />
    </>
  );
}
