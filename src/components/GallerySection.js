import React from 'react';
import ImageCarousel from './ImageCarousel';
import './GallerySection.css';

export default function GallerySection({
  slides,
  tag = 'Gallery',
  title = 'Take a Look Around',
  subtitle,
  light = false,
}) {
  return (
    <section className={`section gallery-section ${light ? 'bg-light' : ''}`}>
      <div className="container">
        <div className="gallery-section__header">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        <ImageCarousel slides={slides} />
      </div>
    </section>
  );
}
