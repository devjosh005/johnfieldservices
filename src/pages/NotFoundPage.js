import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <>
      <main className="not-found">
        <div className="container not-found__inner">
          <div className="not-found__icon">🔍</div>
          <h1 className="not-found__title">Page Not Found</h1>
          <p className="not-found__desc">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <div className="not-found__actions">
            <Link to="/" className="btn btn-primary">Go Home</Link>
            <Link to="/services" className="btn btn-navy">View Services</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
