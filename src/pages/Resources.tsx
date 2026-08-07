import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

const trainingArticles = [
  {
    title: 'Understanding Reactivity vs. Aggression',
    desc: 'The difference matters. One is a communication problem. The other is a safety problem.',
  },
  {
    title: 'What Balanced Training Actually Means',
    desc: "It's not what the internet thinks it is.",
  },
  {
    title: "The E-Collar: What It Is and What It Isn't",
    desc: 'Honest answers about a controversial tool.',
  },
];

const puppyArticles = [
  {
    title: 'The Socialization Window: What You Need to Know',
    desc: "You have about 16 weeks. Here's how to use them.",
  },
  {
    title: 'Surviving Puppy Adolescence',
    desc: "Your sweet puppy is about to become a teenager. Here's what to expect.",
  },
];

const livingArticles = [
  {
    title: 'What to Expect After Board & Train',
    desc: 'Your dog comes home trained. Now what?',
  },
  {
    title: 'Management vs. Training: Why Both Matter',
    desc: "Sometimes the answer isn't more training. It's better management.",
  },
];

const comingSoonBadge = {
  background: 'var(--bone)',
  padding: '4px 12px',
  borderRadius: '100px',
  fontSize: 'var(--t-small)',
  color: 'var(--muted)',
  display: 'inline-block',
  marginTop: 'var(--s-3)',
};

function ArticleCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <span style={comingSoonBadge}>Coming Soon</span>
    </div>
  );
}

export default function Resources() {
  return (
    <>
      <PageHeader
        title="Resources"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Resources' },
        ]}
        directAnswer="Guides, articles, and information about dog training, behavior, and care. Written by our trainers, based on what we actually see and do — not SEO filler."
      />

      {/* Philosophy */}
      <section className="section section--bone">
        <div className="container">
          <p className="eyebrow">Why These Exist</p>
          <p>
            We're not a content farm. We don't publish articles to game Google.
            Everything here is written because clients kept asking the same
            questions and we got tired of repeating ourselves.
          </p>
          <p>
            If something here is useful to you, great. If you'd rather just call
            us, that works too.
          </p>
        </div>
      </section>

      {/* Training & Behavior */}
      <section className="section section--paper">
        <div className="container">
          <h2>Training &amp; Behavior</h2>
          <div className="grid-3">
            {trainingArticles.map((article) => (
              <ArticleCard
                key={article.title}
                title={article.title}
                desc={article.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Puppy & Prevention */}
      <section className="section section--bone">
        <div className="container">
          <h2>Puppy &amp; Prevention</h2>
          <div className="grid-3">
            {puppyArticles.map((article) => (
              <ArticleCard
                key={article.title}
                title={article.title}
                desc={article.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Living With Your Dog */}
      <section className="section section--paper">
        <div className="container">
          <h2>Living With Your Dog</h2>
          <div className="grid-3">
            {livingArticles.map((article) => (
              <ArticleCard
                key={article.title}
                title={article.title}
                desc={article.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Rather talk to a trainer?"
        body="Skip the reading. Book a free call and talk to us directly about your dog."
        primaryLabel="Book a Free Call"
        primaryTo="/contact"
        secondaryLabel="Call (951) 454-6773"
        secondaryHref="tel:+19514546773"
        background="evergreen"
      />
    </>
  );
}
