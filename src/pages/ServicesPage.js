import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import Footer from '../components/Footer';
import './ServicesPage.css';

export default function ServicesPage() {
  return (
    <>
      <main className="services-page">
        {/* Page Hero */}
        <section className="services-page__hero">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Services</span>
            </nav>
            <span className="section-tag">Our Services</span>
            <h1 className="services-page__title">Everything Your Vehicle Needs</h1>
            <p className="services-page__subtitle">
              From body restoration to precision diagnostics — all services available at our
              workshop at Eleshin Bus Stop, Ijede Road, Ikorodu, Lagos.
            </p>
          </div>
        </section>

        {/* Services Submenu */}
        <nav className="services-submenu" aria-label="Jump to a service">
          <div className="container services-submenu__inner">
            {SERVICES.map((svc) => (
              <Link key={svc.slug} to={`/services/${svc.slug}`} className="services-submenu__item">
                <span>{svc.icon}</span> {svc.shortTitle}
              </Link>
            ))}
          </div>
        </nav>

        {/* Services Grid */}
        <section className="section services-page__grid-section">
          <div className="container">
            <div className="services-page__grid">
              {SERVICES.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className={`sp-card ${svc.featured ? 'sp-card--featured' : ''}`}
                >
                  {svc.featured && <div className="sp-card__badge">⭐ Featured</div>}
                  <div className="sp-card__icon">{svc.icon}</div>
                  <h2 className="sp-card__title">{svc.shortTitle}</h2>
                  <p className="sp-card__tagline">{svc.tagline}</p>
                  <div className="sp-card__tags">
                    {svc.tags.slice(0, 3).map((t) => (
                      <span key={t} className="sp-card__tag">{t}</span>
                    ))}
                  </div>
                  <span className="sp-card__cta">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="services-page__cta-strip">
          <div className="container services-page__cta-inner">
            <div>
              <h3>Ready to book a service?</h3>
              <p>Fill in our quick form and we'll confirm via WhatsApp within minutes.</p>
            </div>
            <Link to="/booking" className="btn btn-primary">
              📅 Book a Service
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
