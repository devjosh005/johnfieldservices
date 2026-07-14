import React from 'react';
import { PAINT_BRANDS } from '../data/brands';
import './About.css';

const PILLARS = [
  { icon: '🏭', title: 'RC Registered', desc: 'RC Number 1147998 — a fully registered, credible Nigerian business entity.' },
  { icon: '🔧', title: 'Full-Service Shop', desc: 'Body work, mechanics, electrics, tyres, batteries — everything under one roof.' },
  { icon: '🎨', title: 'Premium Paint Brands', desc: 'Authorised supplier and applicator of Sikkens, DYNA & KAPCI automotive paints.' },
  { icon: '📍', title: 'Ikorodu Based', desc: 'Conveniently located at Eleshin Bus Stop, Ijede Road — serving Lagos mainland and beyond.' },
];

export default function About() {
  return (
    <section id="about" className="section section--textured about">
      <span className="section-glow about__glow about__glow--1" />
      <span className="section-glow about__glow about__glow--2" />
      <div className="container about__grid">
        {/* Visual side */}
        <div className="about__visual">
          <div className="about__img-wrap">
            <div className="about__img-placeholder">
              <span className="about__img-icon">🚗</span>
              <span className="about__img-text">Johnfield Workshop</span>
            </div>
            <div className="about__badge-float">
              <span className="about__badge-num">RC</span>
              <span className="about__badge-label">1147998</span>
            </div>
          </div>

          <div className="about__paint-brands">
            <p className="about__brands-label">Authorised Paint Brands</p>
            <div className="about__brand-chips">
              {PAINT_BRANDS.map((brand) => (
                <span key={brand.name} className="about__chip">
                  <img src={brand.logo} alt={brand.name} className="about__chip-logo" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="about__text">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">
            Your Trusted One-Stop<br />Auto Service Partner
          </h2>
          <p className="about__body">
            Johnfield Services Ltd. is a fully registered automotive company (RC 1147998) based in
            Ikorodu, Lagos. We provide comprehensive vehicle care — from precision body painting and
            baking to digital wheel alignment, battery solutions, and full mechanical services.
          </p>
          <p className="about__body">
            What sets us apart is our commitment to quality: we use and supply industry-recognised
            paint brands — <strong>Sikkens, DYNA, and KAPCI</strong> — ensuring your vehicle receives a
            factory-finish result every time. Whether you need a quick service or a full restoration,
            our experienced technicians treat every vehicle with care.
          </p>

          <div className="about__pillars">
            {PILLARS.map(({ icon, title, desc }) => (
              <div key={title} className="about__pillar">
                <span className="about__pillar-icon">{icon}</span>
                <div>
                  <h4 className="about__pillar-title">{title}</h4>
                  <p className="about__pillar-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="tel:07039588550" className="btn btn-navy" style={{ marginTop: '0.5rem' }}>
            <span>📞</span> Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
