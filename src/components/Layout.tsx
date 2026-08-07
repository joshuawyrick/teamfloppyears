import { useState, useEffect, useRef } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const trainingLinks = [
  { label: 'Board & Train', to: '/board-and-train' },
  { label: 'Private Training', to: '/private-dog-training' },
  { label: 'Puppy Training', to: '/puppy-training' },
  { label: 'Aggression', to: '/aggressive-dog-training' },
  { label: 'Reactivity', to: '/reactive-dog-training' },
  { label: 'Obedience', to: '/dog-obedience-training' },
  { label: 'Off-Leash', to: '/off-leash-dog-training' },
];

const boardingLinks = [
  { label: 'Dog Boarding', to: '/dog-boarding' },
  { label: 'Daycare', to: '/dog-daycare' },
  { label: 'Reactive/Aggressive Boarding', to: '/boarding-reactive-aggressive-dogs' },
];

const aboutLinks = [
  { label: 'About', to: '/about' },
  { label: 'Team', to: '/meet-the-team' },
  { label: 'Facility', to: '/facility' },
  { label: 'Methods', to: '/training-methods' },
  { label: 'Safety', to: '/safety-and-care' },
  { label: 'Results', to: '/dog-training-results' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'FAQ', to: '/faq' },
];

interface DropdownProps {
  label: string;
  links: { label: string; to: string }[];
}

function DesktopDropdown({ label, links }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  function handleEnter() {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="nav-dropdown-trigger"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
        type="button"
      >
        {label}
        <ChevronDown size={14} aria-hidden="true" />
      </button>
      {open && (
        <div className="nav-dropdown-menu">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-dropdown-item"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

interface MobileAccordionProps {
  label: string;
  links: { label: string; to: string }[];
  onClose: () => void;
}

function MobileAccordion({ label, links, onClose }: MobileAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-accordion">
      <button
        className="mobile-accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        type="button"
      >
        {label}
        <ChevronDown
          size={16}
          aria-hidden="true"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform var(--duration) var(--ease)',
          }}
        />
      </button>
      {open && (
        <div className="mobile-accordion-links">
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={onClose}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      {/* Header */}
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <div className="container site-header-inner">
          <Link to="/" className="site-logo" onClick={closeMobile}>
            Floppy Ears Ranch
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <DesktopDropdown label="Training" links={trainingLinks} />
            <DesktopDropdown label="Boarding" links={boardingLinks} />
            <NavLink to="/pricing">Pricing</NavLink>
            <DesktopDropdown label="About" links={aboutLinks} />
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/service-areas">Service Areas</NavLink>
          </nav>

          {/* Desktop Actions */}
          <div className="header-actions">
            <a href="tel:9514546773" className="header-phone">
              <Phone size={16} />
              (951) 454-6773
            </a>
            <Link to="/book-evaluation" className="btn btn--clay">
              Tell Us About Your Dog
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileOpen && (
          <div
            className="mobile-nav-overlay"
            onClick={closeMobile}
            onKeyDown={(e) => e.key === 'Escape' && closeMobile()}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
          />
        )}

        {/* Mobile Nav */}
        <nav
          className={`mobile-nav${mobileOpen ? ' mobile-nav--open' : ''}`}
          aria-label="Mobile navigation"
        >
          <MobileAccordion label="Training" links={trainingLinks} onClose={closeMobile} />
          <MobileAccordion label="Boarding" links={boardingLinks} onClose={closeMobile} />
          <NavLink to="/pricing" onClick={closeMobile}>
            Pricing
          </NavLink>
          <MobileAccordion label="About" links={aboutLinks} onClose={closeMobile} />
          <NavLink to="/resources" onClick={closeMobile}>
            Resources
          </NavLink>
          <NavLink to="/service-areas" onClick={closeMobile}>
            Service Areas
          </NavLink>
          <div className="mobile-nav-cta">
            <a href="tel:9514546773" className="header-phone">
              <Phone size={16} />
              (951) 454-6773
            </a>
            <Link
              to="/book-evaluation"
              className="btn btn--clay"
              onClick={closeMobile}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Tell Us About Your Dog
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><Link to="/board-and-train">Board & Train</Link></li>
                <li><Link to="/private-dog-training">Private Training</Link></li>
                <li><Link to="/puppy-training">Puppy Training</Link></li>
                <li><Link to="/aggressive-dog-training">Aggression Training</Link></li>
                <li><Link to="/reactive-dog-training">Reactivity Training</Link></li>
                <li><Link to="/dog-obedience-training">Obedience Training</Link></li>
                <li><Link to="/off-leash-dog-training">Off-Leash Training</Link></li>
                <li><Link to="/dog-boarding">Dog Boarding</Link></li>
                <li><Link to="/dog-daycare">Daycare</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/meet-the-team">Meet the Team</Link></li>
                <li><Link to="/facility">Facility</Link></li>
                <li><Link to="/training-methods">Training Methods</Link></li>
                <li><Link to="/safety-and-care">Safety & Care</Link></li>
                <li><Link to="/dog-training-results">Results</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/resources">Resource Center</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/service-areas">Service Areas</Link></li>
                <li><Link to="/book-evaluation">Book Evaluation</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <address>
                <p>
                  21761 Knabe Rd<br />
                  Corona, CA 92883
                </p>
                <p>
                  <a href="tel:9514546773">(951) 454-6773</a>
                </p>
                <p>
                  Mon&ndash;Sat: 8 am&ndash;6 pm<br />
                  Sun: By appointment
                </p>
              </address>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Team Floppy Ears, LLC. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="sticky-cta">
        <a href="tel:9514546773">
          <Phone size={18} aria-hidden="true" />
          Call Now &mdash; (951) 454-6773
        </a>
      </div>
    </>
  );
}
