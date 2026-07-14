import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import './ServicesOverview.css';

export default function ServicesOverview() {
  return (
    <section id="services" className="section bg-light services-overview">
      <div className="container">
        <div className="services-overview__header">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Everything Your Vehicle Needs</h2>
          <p className="section-subtitle">
            From body restoration to precision diagnostics — all under one roof at Eleshin Bus Stop, Ikorodu.
          </p>
        </div>

        <div className="so-grid">
          {SERVICES.map((svc) => (
            <Link
              key={svc.slug}
              to={`/services/${svc.slug}`}
              className={`so-card ${svc.featured ? 'so-card--featured' : ''}`}
            >
              {svc.featured && <div className="so-card__badge">⭐ Featured</div>}
              <div className="so-card__icon">{svc.icon}</div>
              <h3 className="so-card__title">{svc.shortTitle}</h3>

              {svc.featured ? (
                <div className="so-card__sub">
                  <div className="so-sub">
                    <span className="so-sub__icon">🔫</span>
                    <div>
                      <strong>Painting & Baking</strong>
                      <p>Factory-finish spray painting and oven baking for all vehicles.</p>
                    </div>
                  </div>
                  <div className="so-sub">
                    <span className="so-sub__icon">🛒</span>
                    <div>
                      <strong>Paint Sales</strong>
                      <p>Authorised supplier of Sikkens, DYNA & KAPCI automotive paints.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="so-card__tagline">{svc.tagline}</p>
              )}

              <div className="so-card__tags">
                {svc.tags.slice(0, 3).map((t) => (
                  <span key={t} className="so-tag">{t}</span>
                ))}
              </div>

              <span className="so-card__link">Learn More →</span>
            </Link>
          ))}
        </div>

        <div className="services-overview__footer">
          <Link to="/services" className="btn btn-navy">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
