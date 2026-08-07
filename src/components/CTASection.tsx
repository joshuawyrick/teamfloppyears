import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  body: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  background?: 'bone' | 'evergreen' | 'paper';
}

export default function CTASection({
  title,
  body,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryHref,
  background = 'bone',
}: CTASectionProps) {
  const sectionClass = `section section--${background}`;
  const isEvergreen = background === 'evergreen';
  const primaryBtnClass = isEvergreen
    ? 'btn btn--clay btn--lg'
    : 'btn btn--primary btn--lg';
  const secondaryBtnClass = isEvergreen
    ? 'btn btn--secondary btn--lg'
    : 'btn btn--secondary btn--lg';

  return (
    <section className={sectionClass}>
      <div className="container cta-section">
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="cta-buttons">
          <Link to={primaryTo} className={primaryBtnClass}>
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <a href={secondaryHref} className={secondaryBtnClass}>
              {secondaryLabel}
            </a>
          )}
        </div>
        <p
          style={{
            fontSize: 'var(--t-small)',
            color: isEvergreen ? 'rgba(255,255,255,0.7)' : 'var(--muted)',
            marginTop: 'var(--s-6)',
          }}
        >
          21761 Knabe Rd, Corona, CA 92883
        </p>
      </div>
    </section>
  );
}
