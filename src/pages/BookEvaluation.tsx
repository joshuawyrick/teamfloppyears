import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ArrowLeft, CircleCheck as CheckCircle, MessageSquare, MapPin, Calendar, Send, Info } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FormData {
  // Step 1 — Dog info
  dogName: string;
  breed: string;
  age: string;
  sex: string;
  fixed: string;
  // Step 2 — Behavior
  helpNeeded: string[];
  behaviorDescription: string;
  biteHistory: string;
  desiredResult: string;
  // Step 3 — Contact
  ownerName: string;
  phone: string;
  email: string;
  city: string;
  howSoon: string;
  howHeard: string;
}

const initialFormData: FormData = {
  dogName: '',
  breed: '',
  age: '',
  sex: '',
  fixed: '',
  helpNeeded: [],
  behaviorDescription: '',
  biteHistory: '',
  desiredResult: '',
  ownerName: '',
  phone: '',
  email: '',
  city: '',
  howSoon: '',
  howHeard: '',
};

const helpOptions = [
  'Basic obedience',
  'Leash pulling / walking',
  'Recall / coming when called',
  'Reactivity (barking, lunging)',
  'Aggression',
  'Puppy training',
  'Fear / anxiety',
  'Resource guarding',
  'Separation anxiety',
  'Off-leash reliability',
  'Jumping on people',
  'Potty training',
  'Other',
];

const howSoonOptions = [
  'As soon as possible',
  'Within 2 weeks',
  'Within a month',
  '1–3 months',
  'Just exploring options',
];

const howHeardOptions = [
  'Google search',
  'Facebook',
  'Instagram',
  'Yelp',
  'Referral from a friend',
  'Referral from a vet',
  'Drove by the facility',
  'Other',
];

const afterSteps = [
  {
    icon: Phone,
    title: 'We call you',
    desc: 'Within one business day — usually within a few hours. It\'s a free, 30-minute consultation.',
  },
  {
    icon: MessageSquare,
    title: 'We talk about your dog',
    desc: 'What\'s going on, how long it\'s been happening, what you\'ve tried. No scripts, just a real conversation.',
  },
  {
    icon: Calendar,
    title: 'We recommend a program',
    desc: 'Or we tell you private lessons would be a better fit. Or we tell you we\'re not the right place. Straight answers.',
  },
  {
    icon: MapPin,
    title: 'You come see the facility',
    desc: 'The $50 evaluation — bring your dog, tour the property, and we\'ll assess behavior in person. The fee credits toward any program.',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function BookEvaluation() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 3;

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function toggleHelpNeeded(option: string) {
    setFormData((prev) => {
      const current = prev.helpNeeded;
      const updated = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, helpNeeded: updated };
    });
  }

  function nextStep() {
    if (step < totalSteps) setStep(step + 1);
  }

  function prevStep() {
    if (step > 1) setStep(step - 1);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In a real app, this would send the data to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <>
        <PageHeader
          title="We Got It"
          breadcrumbs={[
            { label: 'Home', to: '/' },
            { label: 'Book Evaluation', to: '/book-evaluation' },
            { label: 'Submitted' },
          ]}
          directAnswer="Your information has been submitted. We'll call you within one business day — usually within a few hours — for a free 30-minute consultation."
        />
        <section className="section section--bone">
          <div className="container text-center">
            <CheckCircle
              size={48}
              style={{ color: 'var(--success)', marginBottom: 'var(--s-5)' }}
            />
            <h2>Thank you, {formData.ownerName || 'there'}!</h2>
            <p>
              We've received your information about {formData.dogName || 'your dog'}.
              A trainer will call you within one business day for a free,
              30-minute phone consultation.
            </p>
            <p>
              If you need to reach us sooner, call{' '}
              <a href="tel:9514546773">(951) 454-6773</a>.
            </p>
            <Link
              to="/"
              className="btn btn--primary"
              style={{ marginTop: 'var(--s-6)' }}
            >
              Back to Home
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader
        title="Tell Us About Your Dog"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Book Evaluation' },
        ]}
        directAnswer="Fill out a few questions and we'll call you within one business day for a free 30-minute consultation — no charge, no commitment. We'll tell you what we think your dog needs and what it costs. If we're not the right fit, we'll say so."
      />

      {/* ============================================================ */}
      {/* WHAT HAPPENS AFTER                                           */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>What happens after you submit this</h2>
          <div className="grid-2" style={{ marginTop: 'var(--s-6)' }}>
            {afterSteps.map((item) => (
              <div className="card" key={item.title}>
                <item.icon
                  size={24}
                  style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
                />
                <h4>{item.title}</h4>
                <p style={{ fontSize: 'var(--t-small)', color: 'var(--muted)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THE FORM                                                     */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container" style={{ maxWidth: '720px' }}>
          {/* Progress bar */}
          <div className="form-progress">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`form-progress-step${s <= step ? ' active' : ''}`}
              />
            ))}
          </div>

          <p
            style={{
              fontSize: 'var(--t-small)',
              color: 'var(--muted)',
              marginBottom: 'var(--s-6)',
              textAlign: 'center',
            }}
          >
            Step {step} of {totalSteps}:{' '}
            {step === 1
              ? 'About your dog'
              : step === 2
              ? 'What you need help with'
              : 'How to reach you'}
          </p>

          <form onSubmit={handleSubmit}>
            {/* --------------------------------- */}
            {/* STEP 1 — Dog Info                  */}
            {/* --------------------------------- */}
            {step === 1 && (
              <>
                <div className="form-group">
                  <label htmlFor="dogName">Dog's name *</label>
                  <input
                    id="dogName"
                    type="text"
                    value={formData.dogName}
                    onChange={(e) => updateField('dogName', e.target.value)}
                    required
                    placeholder="e.g., Max"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="breed">Breed *</label>
                  <input
                    id="breed"
                    type="text"
                    value={formData.breed}
                    onChange={(e) => updateField('breed', e.target.value)}
                    required
                    placeholder="e.g., German Shepherd, Mixed, Pit Bull"
                  />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label htmlFor="age">Age (in years) *</label>
                    <input
                      id="age"
                      type="number"
                      min="0"
                      max="20"
                      step="0.5"
                      value={formData.age}
                      onChange={(e) => updateField('age', e.target.value)}
                      required
                      placeholder="e.g., 2"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="sex">Sex *</label>
                    <select
                      id="sex"
                      value={formData.sex}
                      onChange={(e) => updateField('sex', e.target.value)}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="fixed">Spayed / Neutered? *</label>
                  <select
                    id="fixed"
                    value={formData.fixed}
                    onChange={(e) => updateField('fixed', e.target.value)}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="unsure">Not sure</option>
                  </select>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--s-6)' }}>
                  <button
                    type="button"
                    className="btn btn--primary"
                    onClick={nextStep}
                  >
                    Next: Behavior
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {/* --------------------------------- */}
            {/* STEP 2 — Behavior                  */}
            {/* --------------------------------- */}
            {step === 2 && (
              <>
                <div className="form-group">
                  <label>What do you need help with? (check all that apply) *</label>
                  <div className="checkbox-group">
                    {helpOptions.map((option) => (
                      <label className="checkbox-label" key={option}>
                        <input
                          type="checkbox"
                          checked={formData.helpNeeded.includes(option)}
                          onChange={() => toggleHelpNeeded(option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="behaviorDescription">
                    Tell us what's going on *
                  </label>
                  <textarea
                    id="behaviorDescription"
                    value={formData.behaviorDescription}
                    onChange={(e) =>
                      updateField('behaviorDescription', e.target.value)
                    }
                    required
                    placeholder="Describe the behavior in your own words — when it happens, how long it's been going on, what you've tried."
                  />
                </div>

                <div className="form-group">
                  <label>Has your dog ever bitten a person or another animal? *</label>
                  <div className="radio-group">
                    {['Yes', 'No', 'Not sure'].map((option) => (
                      <label className="radio-label" key={option}>
                        <input
                          type="radio"
                          name="biteHistory"
                          value={option.toLowerCase().replace(' ', '-')}
                          checked={
                            formData.biteHistory ===
                            option.toLowerCase().replace(' ', '-')
                          }
                          onChange={(e) =>
                            updateField('biteHistory', e.target.value)
                          }
                          required
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="desiredResult">
                    What does success look like for you?
                  </label>
                  <textarea
                    id="desiredResult"
                    value={formData.desiredResult}
                    onChange={(e) =>
                      updateField('desiredResult', e.target.value)
                    }
                    placeholder="e.g., I want to walk my dog without it lunging at every dog we pass. I want to trust my dog off leash at the park."
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 'var(--s-6)',
                  }}
                >
                  <button
                    type="button"
                    className="btn btn--secondary"
                    onClick={prevStep}
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>
                  <button
                    type="button"
                    className="btn btn--primary"
                    onClick={nextStep}
                  >
                    Next: Your Info
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {/* --------------------------------- */}
            {/* STEP 3 — Contact Info              */}
            {/* --------------------------------- */}
            {step === 3 && (
              <>
                <div className="form-group">
                  <label htmlFor="ownerName">Your name *</label>
                  <input
                    id="ownerName"
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => updateField('ownerName', e.target.value)}
                    required
                    placeholder="First and last name"
                  />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      required
                      placeholder="(___) ___-____"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      required
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => updateField('city', e.target.value)}
                    required
                    placeholder="e.g., Corona, Yorba Linda, Riverside"
                  />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label htmlFor="howSoon">How soon are you looking to start? *</label>
                    <select
                      id="howSoon"
                      value={formData.howSoon}
                      onChange={(e) => updateField('howSoon', e.target.value)}
                      required
                    >
                      <option value="">Select...</option>
                      {howSoonOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="howHeard">How did you hear about us?</label>
                    <select
                      id="howHeard"
                      value={formData.howHeard}
                      onChange={(e) => updateField('howHeard', e.target.value)}
                    >
                      <option value="">Select...</option>
                      {howHeardOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 'var(--s-6)',
                  }}
                >
                  <button
                    type="button"
                    className="btn btn--secondary"
                    onClick={prevStep}
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>
                  <button type="submit" className="btn btn--primary btn--lg">
                    <Send size={18} />
                    Get My Training Recommendation
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ABOUT THE BITE HISTORY QUESTION                              */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <div style={{ display: 'flex', gap: 'var(--s-5)', alignItems: 'flex-start' }}>
            <Info
              size={28}
              style={{ color: 'var(--evergreen)', flexShrink: 0, marginTop: '2px' }}
            />
            <div>
              <h2>About the bite history question</h2>
              <p>
                We ask because it changes the recommendation. A dog with bite
                history needs a different program than a dog who pulls on the
                leash — and if there's a bite history, we need to know the
                details so we can evaluate the case properly.
              </p>
              <p>
                Answering "yes" does not disqualify your dog. We work with
                aggressive dogs regularly through our Behavior Rehabilitation
                program. It just means we'll ask a few more questions so we can
                tell you honestly whether we can help.
              </p>
              <p>
                If you're not sure whether something counts as a bite, select
                "Not sure" and we'll talk through it on the phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT THIS ISN'T                                              */}
      {/* ============================================================ */}
      <section className="section section--paper">
        <div className="container">
          <h2>What this isn't</h2>
          <div className="grid-2" style={{ marginTop: 'var(--s-5)' }}>
            <div>
              <ul>
                <li>
                  <strong>This is not a booking.</strong> You're not committing
                  to anything by filling out this form.
                </li>
                <li>
                  <strong>This is not a payment.</strong> No credit card, no
                  deposit, nothing.
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <strong>This is not a mailing list.</strong> We'll contact you
                  about your dog and that's it. No newsletters, no spam.
                </li>
                <li>
                  <strong>There is no sales pitch.</strong> We'll tell you what
                  we think and what it costs. If we're not the right fit, we'll
                  say so.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OTHER WAYS TO START                                          */}
      {/* ============================================================ */}
      <section className="section section--bone">
        <div className="container">
          <h2>Other ways to get started</h2>
          <p>Forms not your thing? That's fine.</p>

          <div className="grid-3" style={{ marginTop: 'var(--s-6)' }}>
            <div className="card">
              <Phone
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>Call us</h4>
              <p>
                <a href="tel:9514546773">(951) 454-6773</a>
              </p>
              <p style={{ fontSize: 'var(--t-small)', color: 'var(--muted)' }}>
                Talk to a trainer directly.
              </p>
            </div>
            <div className="card">
              <MapPin
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>Tour the facility</h4>
              <p>
                <Link to="/facility">See the property</Link>
              </p>
              <p style={{ fontSize: 'var(--t-small)', color: 'var(--muted)' }}>
                Come walk the five acres before you decide.
              </p>
            </div>
            <div className="card">
              <Calendar
                size={24}
                style={{ color: 'var(--evergreen)', marginBottom: 'var(--s-3)' }}
              />
              <h4>Book through our system</h4>
              <p>
                <Link to="/contact">Contact us</Link>
              </p>
              <p style={{ fontSize: 'var(--t-small)', color: 'var(--muted)' }}>
                If you already know what you want and you're ready to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                    */}
      {/* ============================================================ */}
      <CTASection
        title="Still thinking about it?"
        body="Call (951) 454-6773 for a free 30-minute consultation. No form, no commitment — just a conversation about your dog."
        primaryLabel="Call (951) 454-6773"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:9514546773"
        background="evergreen"
      />
    </>
  );
}
