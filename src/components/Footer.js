import React from 'react';
import { Link } from 'react-router-dom';
import { PAINT_BRANDS } from '../data/brands';
import logo from '../images/johnfield_logo.png';
import './Footer.css';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Book a Service', to: '/booking' },
  { label: 'Contact', to: '/contact' },
];

const SERVICE_LINKS = [
  { label: 'Vehicle Body Shop', slug: 'body-shop' },
  { label: 'Battery Sales', slug: 'battery-sales' },
  { label: 'Wheel Balancing', slug: 'wheel-balancing' },
  { label: 'Wheel Alignment', slug: 'wheel-alignment' },
  { label: 'Auto Mechanics', slug: 'auto-mechanics' },
  { label: 'Auto Electric Wiring', slug: 'auto-electric-wiring' },
  { label: 'Tyre Inflation (N₂)', slug: 'tyre-inflation' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logo} alt="Johnfield Services Ltd. — RC: 1147998" className="footer__logo-img" />
            </div>
            <p className="footer__tagline">
              Your trusted one-stop automotive partner in Ikorodu, Lagos. Quality service, honest pricing, experienced hands.
            </p>
            <div className="footer__social">
              <a
                href="https://wa.me/2347039588550"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn footer__social-btn--wa"
                aria-label="WhatsApp"
              >
                💬 WhatsApp
              </a>
              <button className="footer__social-btn" aria-label="Facebook (coming soon)" title="Facebook (coming soon)">📘 Facebook</button>
              <button className="footer__social-btn" aria-label="Instagram (coming soon)" title="Instagram (coming soon)">📸 Instagram</button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__list">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer__list-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__list">
              {SERVICE_LINKS.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="footer__list-link">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Info</h4>
            <ul className="footer__contact-list">
              <li>
                <span>📍</span>
                <span>Eleshin Bus Stop, Ijede Road, Ikorodu, Lagos</span>
              </li>
              <li>
                <span>📞</span>
                <a href="tel:07039588550">07039588550</a>
              </li>
              <li>
                <span>📞</span>
                <a href="tel:08067599470">08067599470</a>
              </li>
              <li>
                <span>✉️</span>
                <a href="mailto:johnfieldservicesltd@gmail.com">johnfieldservicesltd@gmail.com</a>
              </li>
            </ul>

            <div className="footer__paint-brands">
              <p className="footer__brands-label">Authorised Paint Supplier</p>
              <div className="footer__chips">
                {PAINT_BRANDS.map((brand) => (
                  <span key={brand.name} className="footer__chip">
                    <img src={brand.logo} alt={brand.name} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Johnfield Services Ltd. — RC 1147998. All rights reserved.</p>
          <p className="footer__disclaimer">
            Located at Eleshin Bus Stop, Ijede Road, Ikorodu, Lagos, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
