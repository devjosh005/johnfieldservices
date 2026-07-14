import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES } from '../data/services';
import logo from '../images/johnfield_logo.png';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Book', to: '/booking' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isServicesActive = location.pathname.startsWith('/services');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const isActive = (link) => {
    if (link.to === '/') return location.pathname === '/';
    return location.pathname.startsWith(link.to);
  };

  return (
    <header className={`navbar ${scrolled || !isHome ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Johnfield Services Ltd." className="navbar__logo-img" />
        </Link>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <Link
            to="/"
            className={`navbar__link ${isActive(NAV_LINKS[0]) ? 'navbar__link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`navbar__link ${isActive(NAV_LINKS[1]) ? 'navbar__link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <div className="navbar__dropdown" ref={dropdownRef}>
            <button
              type="button"
              className={`navbar__link navbar__dropdown-toggle ${isServicesActive ? 'navbar__link--active' : ''}`}
              onClick={() => setServicesOpen((o) => !o)}
              aria-expanded={servicesOpen}
            >
              Services <span className={`navbar__caret ${servicesOpen ? 'navbar__caret--open' : ''}`}>▾</span>
            </button>
            <div className={`navbar__dropdown-menu ${servicesOpen ? 'navbar__dropdown-menu--open' : ''}`}>
              <Link to="/services" className="navbar__dropdown-item navbar__dropdown-item--all">
                All Services
              </Link>
              {SERVICES.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className="navbar__dropdown-item"
                >
                  <span>{svc.icon}</span> {svc.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/booking"
            className={`navbar__link ${isActive(NAV_LINKS[2]) ? 'navbar__link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Book
          </Link>
          <Link
            to="/contact"
            className={`navbar__link ${isActive(NAV_LINKS[3]) ? 'navbar__link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <a href="tel:07039588550" className="navbar__call-btn">
            <span>📞</span> 07039588550
          </a>
        </nav>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
