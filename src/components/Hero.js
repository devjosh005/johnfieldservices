import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();
  const goToBooking = () => navigate('/booking');
  const goToServices = () => navigate('/services');

  return (
    <section id="home" className="hero">
      <div className="hero__bg-overlay" />

      {/* Animated decorative blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Serving Ikorodu, Lagos
        </div>

        <h1 className="hero__title">
          Complete Auto Care,<br />
          <span className="hero__title-accent">Done Right.</span>
        </h1>

        <p className="hero__subtitle">
          Your trusted one-stop automotive partner in Ikorodu. From expert body painting and
          battery solutions to digital wheel alignment — we keep your vehicle in peak condition.
        </p>

        <div className="hero__actions">
          <button className="btn btn-primary hero__cta" onClick={goToBooking}>
            <span>📅</span> Book a Service
          </button>
          <button className="btn btn-outline" onClick={goToServices}>
            Our Services
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">7+</span>
            <span className="hero__stat-label">Services</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">RC</span>
            <span className="hero__stat-label">1147998</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">24/7</span>
            <span className="hero__stat-label">WhatsApp</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span className="hero__scroll-arrow" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
