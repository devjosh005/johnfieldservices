import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WhyChooseUs.css';

const REASONS = [
  {
    icon: '👨‍🔧',
    title: 'Experienced Technicians',
    desc: 'Our team brings years of hands-on expertise across all vehicle makes and models — local and imported.',
  },
  {
    icon: '🏅',
    title: 'Quality Parts & Paints',
    desc: 'We only use and sell reputable brands like Sikkens, DYNA, and KAPCI — no compromises on quality.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    desc: 'We respect your time. Most services are completed same-day so you can get back on the road quickly.',
  },
  {
    icon: '🏠',
    title: 'One-Roof Convenience',
    desc: 'Body shop, mechanics, electrics, tyres, batteries — everything in one location. Save time and money.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    desc: 'No hidden charges. We give honest assessments and fair prices before any work begins.',
  },
  {
    icon: '🤝',
    title: 'Customer-First Approach',
    desc: 'We treat every vehicle like our own. Your satisfaction and safety are our top priorities.',
  },
];

export default function WhyChooseUs() {
  const navigate = useNavigate();
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="why-us__header">
          <span className="section-tag" style={{ background: 'rgba(244,137,31,0.2)', color: 'var(--orange-light)' }}>
            Why Choose Us
          </span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            The Johnfield Difference
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)' }}>
            We don't just service vehicles — we build lasting relationships through quality, honesty, and expertise.
          </p>
        </div>

        <div className="why-us__grid">
          {REASONS.map(({ icon, title, desc }) => (
            <div key={title} className="why-card">
              <div className="why-card__icon">{icon}</div>
              <h3 className="why-card__title">{title}</h3>
              <p className="why-card__desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="why-us__cta-row">
          <p className="why-us__cta-text">
            Ready to experience the difference? Book a service today.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/booking')}
          >
            <span>📅</span> Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
