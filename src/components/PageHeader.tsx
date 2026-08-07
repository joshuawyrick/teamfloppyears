import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import TrustBar from './TrustBar';

interface Breadcrumb {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  directAnswer?: string;
  trustBar?: boolean;
}

export default function PageHeader({
  title,
  breadcrumbs,
  directAnswer,
  trustBar = false,
}: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <span key={index} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--s-2)' }}>
                {index > 0 && <ChevronRight size={14} aria-hidden="true" />}
                {crumb.to && !isLast ? (
                  <Link to={crumb.to}>{crumb.label}</Link>
                ) : (
                  <span aria-current={isLast ? 'page' : undefined}>
                    {crumb.label}
                  </span>
                )}
              </span>
            );
          })}
        </nav>
        <h1>{title}</h1>
        {directAnswer && (
          <p className="direct-answer">{directAnswer}</p>
        )}
        {trustBar && (
          <div style={{ marginTop: 'var(--s-7)' }}>
            <TrustBar />
          </div>
        )}
      </div>
    </section>
  );
}
