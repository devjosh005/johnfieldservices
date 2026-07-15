import React, { useState, useEffect, useCallback } from 'react';
import './ImageCarousel.css';

export default function ImageCarousel({ slides, autoPlay = true, interval = 4500 }) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const goTo = useCallback((i) => setIndex((i + count) % count), [count]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (!autoPlay || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, count]);

  if (!count) return null;

  return (
    <div className="img-carousel">
      <div
        className="img-carousel__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className="img-carousel__slide" key={slide.caption || i}>
            {slide.image ? (
              <img
                src={slide.image}
                srcSet={slide.srcSet}
                sizes={slide.srcSet ? '(max-width: 700px) 100vw, 1200px' : undefined}
                alt={slide.caption || ''}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="img-carousel__img"
              />
            ) : (
              <div className="img-carousel__placeholder">
                <span className="img-carousel__icon">{slide.icon || '🖼️'}</span>
              </div>
            )}
            {slide.caption && (
              <div className="img-carousel__caption">{slide.caption}</div>
            )}
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button className="img-carousel__arrow img-carousel__arrow--prev" onClick={prev} aria-label="Previous image">
            ‹
          </button>
          <button className="img-carousel__arrow img-carousel__arrow--next" onClick={next} aria-label="Next image">
            ›
          </button>

          <div className="img-carousel__dots">
            {slides.map((slide, i) => (
              <button
                key={slide.caption || i}
                className={`img-carousel__dot ${i === index ? 'img-carousel__dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
