import React from 'react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';
import { WORKSHOP_GALLERY } from '../data/gallery';
import './StaticPage.css';

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="static-page-hero">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About</span>
            </nav>
          </div>
        </section>
        <About />
        <GallerySection
          slides={WORKSHOP_GALLERY}
          tag="Our Facility"
          title="Inside Johnfield Services"
          subtitle="Take a look at our workshop, equipment, and the team behind the work."
        />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
