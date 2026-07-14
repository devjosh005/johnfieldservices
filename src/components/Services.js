import React from 'react';
import './Services.css';

const SERVICES = [
  {
    id: 'body-shop',
    icon: '🎨',
    title: 'Vehicle Body Shop',
    featured: true,
    sub: [
      {
        icon: '🔫',
        name: 'Painting & Baking',
        desc: 'Professional spray painting with oven baking for a flawless, factory-finish look. We restore your vehicle\'s exterior to showroom condition using industry-grade booths and precision colour-matching.',
      },
      {
        icon: '🛒',
        name: 'Paint Sales',
        desc: 'Johnfield Services is an authorised supplier of premium automotive paint brands — Sikkens, DYNA, and KAPCI. Whether you\'re a workshop or individual, we stock and sell these trusted brands.',
      },
    ],
    tags: ['Sikkens', 'DYNA', 'KAPCI'],
  },
  {
    id: 'battery',
    icon: '🔋',
    title: 'Battery Sales',
    desc: 'Quality tubular and lithium batteries for all vehicle types. We stock reliable brands that deliver long-lasting performance and come with warranty coverage.',
    tags: ['Tubular', 'Lithium', 'All Vehicles'],
  },
  {
    id: 'balancing',
    icon: '⚙️',
    title: 'Wheel Balancing',
    desc: 'Eliminate vibrations and extend tyre life with precision wheel balancing. Our state-of-the-art equipment ensures a smooth, safe ride every time.',
    tags: ['All Tyre Sizes', 'Fast Service'],
  },
  {
    id: 'alignment',
    icon: '🎯',
    title: 'Wheel Alignment',
    desc: 'Digital and analogue wheel alignment to prevent uneven tyre wear and poor handling. Proper alignment saves fuel and protects your suspension components.',
    tags: ['Digital', 'Analogue'],
  },
  {
    id: 'mechanics',
    icon: '🔧',
    title: 'Auto Mechanics',
    desc: 'Comprehensive mechanical services — engine diagnostics, servicing, brake repairs, suspension, and more. Our skilled technicians diagnose and fix issues right the first time.',
    tags: ['Engine', 'Brakes', 'Suspension'],
  },
  {
    id: 'electric',
    icon: '⚡',
    title: 'Auto Electric Wiring',
    desc: 'Expert automotive electrical diagnosis and wiring. From faulty sensors and alternators to complete electrical rewires, we handle all modern vehicle electronics.',
    tags: ['Diagnosis', 'Rewiring', 'Sensors'],
  },
  {
    id: 'nitrogen',
    icon: '💨',
    title: 'Tyre Inflation (N₂)',
    desc: 'Nitrogen gas tyre inflation for improved fuel efficiency, better pressure retention, and cooler running tyres. Switch to N₂ for a noticeably smoother drive.',
    tags: ['Nitrogen', 'All Tyre Types'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-light services">
      <div className="container">
        <div className="services__header">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Everything Your Vehicle Needs</h2>
          <p className="section-subtitle">
            From body restoration to precision diagnostics — all under one roof at Eleshin Bus Stop, Ikorodu.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className={`service-card ${svc.featured ? 'service-card--featured' : ''}`}
            >
              {svc.featured && (
                <div className="service-card__featured-badge">⭐ Featured</div>
              )}

              <div className="service-card__icon">{svc.icon}</div>
              <h3 className="service-card__title">{svc.title}</h3>

              {svc.featured ? (
                <div className="service-card__sub-services">
                  {svc.sub.map((s) => (
                    <div key={s.name} className="sub-service">
                      <div className="sub-service__header">
                        <span className="sub-service__icon">{s.icon}</span>
                        <h4 className="sub-service__name">{s.name}</h4>
                      </div>
                      <p className="sub-service__desc">{s.desc}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="service-card__desc">{svc.desc}</p>
              )}

              {svc.tags && (
                <div className="service-card__tags">
                  {svc.tags.map((t) => (
                    <span key={t} className="service-tag">{t}</span>
                  ))}
                </div>
              )}

              <button
                className="btn btn-navy service-card__cta"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
