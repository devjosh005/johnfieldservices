import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import ServicesOverview from '../components/ServicesOverview';
import WhyChooseUs from '../components/WhyChooseUs';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';
import { WORKSHOP_GALLERY } from '../data/gallery';
import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <ServicesOverview />

        <GallerySection
          slides={WORKSHOP_GALLERY}
          title="Take a Look Around Our Workshop"
          subtitle="A glimpse of our facility, equipment, and the work we do every day at Eleshin Bus Stop, Ikorodu."
          light
        />

        <WhyChooseUs />

        {/* Booking teaser */}
        <section className="section booking-teaser">
          <div className="container booking-teaser__inner">
            <div>
              <span className="section-tag">Book a Service</span>
              <h2 className="section-title">Ready to Get Started?</h2>
              <p className="section-subtitle">
                Fill in our quick form and we'll confirm your appointment via WhatsApp within minutes.
              </p>
            </div>
            <Link to="/booking" className="btn btn-primary">
              <span>📅</span> Book a Service
            </Link>
          </div>
        </section>

        {/* Contact teaser */}
        <section className="section bg-light contact-teaser">
          <div className="container contact-teaser__inner">
            <div>
              <span className="section-tag">Contact Us</span>
              <h2 className="section-title">Find Us in Ikorodu</h2>
              <p className="section-subtitle">
                Eleshin Bus Stop, Ijede Road, Ikorodu, Lagos — visit, call, or WhatsApp us.
              </p>
            </div>
            <Link to="/contact" className="btn btn-navy">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
