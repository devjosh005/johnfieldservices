import React from 'react';
import { Link } from 'react-router-dom';
import Booking from '../components/Booking';
import Footer from '../components/Footer';
import './StaticPage.css';

export default function BookingPage() {
  return (
    <>
      <main>
        <section className="static-page-hero">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Book a Service</span>
            </nav>
          </div>
        </section>
        <Booking />
      </main>
      <Footer />
    </>
  );
}
