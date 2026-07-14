import React, { useState } from 'react';
import './Booking.css';

const SERVICES_LIST = [
  'Vehicle Body Shop — Painting & Baking',
  'Paint Product Sales (Sikkens / DYNA / KAPCI)',
  'Battery Sales (Tubular & Lithium)',
  'Wheel Balancing',
  'Wheel Alignment (Digital & Analogue)',
  'Auto Mechanics',
  'Auto Electric Wiring',
  'Tyre Inflation with N₂ (Nitrogen) Gas',
];

const TIMES = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM',
];

const INITIAL = {
  name: '', phone: '', email: '', service: '',
  date: '', time: '', notes: '',
};

export default function Booking() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your full name';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    if (!form.service) e.service = 'Please select a service';
    if (!form.date) e.date = 'Please select a preferred date';
    if (!form.time) e.time = 'Please select a preferred time';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    const notesText = form.notes.trim() ? `Notes: ${form.notes.trim()}` : 'Notes: None';
    const emailText = form.email.trim() ? ` | Email: ${form.email.trim()}` : '';

    const msg = [
      `Hello Johnfield Services, I'd like to book a service.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}${emailText}`,
      `Service: ${form.service}`,
      `Preferred Date: ${form.date}`,
      `Preferred Time: ${form.time}`,
      notesText,
    ].join('\n');

    const url = `https://wa.me/2347039588550?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="section booking">
      <div className="container booking__grid">
        {/* Info panel */}
        <div className="booking__info">
          <span className="section-tag">Book a Service</span>
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="booking__info-body">
            Fill in the form and we'll receive your booking request instantly via WhatsApp.
            Our team will confirm your appointment and answer any questions.
          </p>

          <div className="booking__contact-list">
            <a href="tel:07039588550" className="booking__contact-item">
              <span className="booking__contact-icon">📞</span>
              <div>
                <span className="booking__contact-label">Call Us</span>
                <span className="booking__contact-value">07039588550 / 08067599470</span>
              </div>
            </a>
            <a href="https://wa.me/2347039588550" target="_blank" rel="noopener noreferrer" className="booking__contact-item">
              <span className="booking__contact-icon">💬</span>
              <div>
                <span className="booking__contact-label">WhatsApp</span>
                <span className="booking__contact-value">Chat with us directly</span>
              </div>
            </a>
            <div className="booking__contact-item">
              <span className="booking__contact-icon">📍</span>
              <div>
                <span className="booking__contact-label">Find Us</span>
                <span className="booking__contact-value">Eleshin Bus Stop, Ijede Road, Ikorodu</span>
              </div>
            </div>
            <div className="booking__contact-item">
              <span className="booking__contact-icon">🕐</span>
              <div>
                <span className="booking__contact-label">Working Hours</span>
                <span className="booking__contact-value">Mon – Sat: 8:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <form className="booking__form" onSubmit={handleSubmit} noValidate>
          <div className="booking__form-header">
            <h3>Booking Request</h3>
            <p>We'll confirm via WhatsApp within minutes.</p>
          </div>

          <div className="form-row form-row--2">
            <div className="form-group">
              <label htmlFor="name">Full Name <span className="req">*</span></label>
              <input
                id="name" name="name" type="text"
                placeholder="e.g. Chidi Okonkwo"
                value={form.name} onChange={handleChange}
                className={errors.name ? 'input--error' : ''}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number <span className="req">*</span></label>
              <input
                id="phone" name="phone" type="tel"
                placeholder="e.g. 08012345678"
                value={form.phone} onChange={handleChange}
                className={errors.phone ? 'input--error' : ''}
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address <span className="opt">(optional)</span></label>
            <input
              id="email" name="email" type="email"
              placeholder="e.g. you@example.com"
              value={form.email} onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Needed <span className="req">*</span></label>
            <select
              id="service" name="service"
              value={form.service} onChange={handleChange}
              className={errors.service ? 'input--error' : ''}
            >
              <option value="">— Select a service —</option>
              {SERVICES_LIST.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.service && <span className="form-error">{errors.service}</span>}
          </div>

          <div className="form-row form-row--2">
            <div className="form-group">
              <label htmlFor="date">Preferred Date <span className="req">*</span></label>
              <input
                id="date" name="date" type="date"
                min={today}
                value={form.date} onChange={handleChange}
                className={errors.date ? 'input--error' : ''}
              />
              {errors.date && <span className="form-error">{errors.date}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="time">Preferred Time <span className="req">*</span></label>
              <select
                id="time" name="time"
                value={form.time} onChange={handleChange}
                className={errors.time ? 'input--error' : ''}
              >
                <option value="">— Select a time —</option>
                {TIMES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              {errors.time && <span className="form-error">{errors.time}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Additional Notes / Message</label>
            <textarea
              id="notes" name="notes" rows="3"
              placeholder="Describe your issue or any special requirements..."
              value={form.notes} onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn booking__submit-btn">
            <span>💬</span> Send Booking via WhatsApp
          </button>

          <p className="booking__note">
            Clicking the button opens WhatsApp with your booking details pre-filled — no database, instant messaging.
          </p>
        </form>
      </div>
    </section>
  );
}
