import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__header">
          <span className="section-tag">Contact Us</span>
          <h2 className="section-title">Find Us in Ikorodu</h2>
          <p className="section-subtitle">
            Visit us at our workshop, call, or send a WhatsApp message — we're always here to help.
          </p>
        </div>

        <div className="contact__grid">
          {/* Details */}
          <div className="contact__details">
            <div className="contact__detail-card">
              <div className="contact__detail-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>Eleshin Bus Stop, Ijede Road,<br />Ikorodu, Lagos, Nigeria</p>
              </div>
            </div>

            <div className="contact__detail-card">
              <div className="contact__detail-icon">📞</div>
              <div>
                <h4>Phone Numbers</h4>
                <a href="tel:07039588550" className="contact__link">07039588550</a>
                <a href="tel:08067599470" className="contact__link">08067599470</a>
              </div>
            </div>

            <div className="contact__detail-card">
              <div className="contact__detail-icon">✉️</div>
              <div>
                <h4>Email Address</h4>
                <a href="mailto:johnfieldservicesltd@gmail.com" className="contact__link">
                  johnfieldservicesltd@gmail.com
                </a>
              </div>
            </div>

            <div className="contact__detail-card">
              <div className="contact__detail-icon">💬</div>
              <div>
                <h4>WhatsApp</h4>
                <a
                  href="https://wa.me/2347039588550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link contact__link--whatsapp"
                >
                  Chat with us on WhatsApp →
                </a>
              </div>
            </div>

            <div className="contact__hours">
              <h4>Working Hours</h4>
              <div className="contact__hours-grid">
                <span>Monday – Friday</span><span>8:00 AM – 6:00 PM</span>
                <span>Saturday</span><span>8:00 AM – 5:00 PM</span>
                <span>Sunday</span><span className="closed">Closed</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="contact__map-wrap">
            <iframe
              title="Johnfield Services Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.097959!2d3.5055!3d6.6194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4ec9c7a3e45%3A0x1b4e23a3b7c6d08f!2sIjede%20Rd%2C%20Ikorodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://maps.google.com/?q=Eleshin+Bus+Stop,+Ijede+Road,+Ikorodu,+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__map-btn"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
