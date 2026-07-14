import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './StaticPage.css';

export default function ContactPage() {
  return (
    <>
      <main>
        <section className="static-page-hero">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </nav>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
