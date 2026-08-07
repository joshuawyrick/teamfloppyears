import { Link } from 'react-router-dom';
import { Hop as Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="section section--bone" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1>Page not found</h1>
        <p style={{ fontSize: 'var(--t-lg)', color: 'var(--muted)', marginBottom: 'var(--s-8)' }}>
          The page you're looking for doesn't exist or has been moved. If you're trying to find information about our training programs, start from the home page.
        </p>
        <Link to="/" className="btn btn--primary btn--lg">
          <Home size={18} />
          Back to Home
        </Link>
        <p style={{ marginTop: 'var(--s-6)', color: 'var(--muted)' }}>
          Or call us at{' '}
          <a href="tel:+19514546773" style={{ color: 'var(--evergreen)', fontWeight: 600 }}>
            (951) 454-6773
          </a>
        </p>
      </div>
    </section>
  );
}
