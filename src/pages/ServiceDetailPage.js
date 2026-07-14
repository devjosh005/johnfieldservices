import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, getServiceBySlug } from '../data/services';
import Footer from '../components/Footer';
import GallerySection from '../components/GallerySection';
import './ServiceDetailPage.css';

function BookingCTA({ serviceName }) {
  const msg = encodeURIComponent(
    `Hello Johnfield Services, I'd like to book a service.\n\nService: ${serviceName}\n\nPlease confirm availability.`
  );
  return (
    <a
      href={`https://wa.me/2347039588550?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="sdp__wa-cta"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      Book This Service via WhatsApp
    </a>
  );
}

function FAQItem({ q, a, index, isOpen, onToggle }) {
  return (
    <div
      className={`sdp__faq-item ${isOpen ? 'sdp__faq-item--open' : ''}`}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <button
        type="button"
        className="sdp__faq-q"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="sdp__faq-q-text">{q}</span>
        <span className="sdp__faq-chevron">▾</span>
      </button>
      <div className="sdp__faq-answer-wrap">
        <div className="sdp__faq-answer-inner">
          <p className="sdp__faq-a">{a}</p>
        </div>
      </div>
    </div>
  );
}

function renderBody(text) {
  return text.split('\n\n').map((para, i) => {
    if (para.startsWith('**') || para.includes('**')) {
      const parts = para.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="sdp__body-para">
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j}>{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    }
    if (para.startsWith('- ')) {
      const items = para.split('\n').filter(Boolean);
      return (
        <ul key={i} className="sdp__body-list">
          {items.map((item, j) => (
            <li key={j}>{item.replace(/^- /, '')}</li>
          ))}
        </ul>
      );
    }
    return <p key={i} className="sdp__body-para">{para}</p>;
  });
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenFaq(0);
  }, [slug]);

  if (!service) {
    return (
      <>
        <main className="sdp__not-found">
          <div className="container">
            <h1>Service not found</h1>
            <Link to="/services" className="btn btn-navy">← Back to Services</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="sdp">
        {/* Hero */}
        <section className="sdp__hero">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/services">Services</Link>
              <span>/</span>
              <span>{service.shortTitle}</span>
            </nav>

            <div className="sdp__hero-inner">
              <div className="sdp__hero-text">
                <div className="sdp__hero-icon">{service.icon}</div>
                <h1 className="sdp__hero-title">{service.title}</h1>
                <p className="sdp__hero-desc">{service.heroDesc}</p>
                <div className="sdp__tags">
                  {service.tags.map((t) => (
                    <span key={t} className="sdp__tag">{t}</span>
                  ))}
                </div>
                <BookingCTA serviceName={service.shortTitle} />
              </div>

              <div className="sdp__hero-aside">
                <div className="sdp__quick-contact">
                  <h3>Get in Touch</h3>
                  <a href="tel:07039588550" className="sdp__contact-link">
                    <span>📞</span> 07039588550
                  </a>
                  <a href="tel:08067599470" className="sdp__contact-link">
                    <span>📞</span> 08067599470
                  </a>
                  <a href="https://wa.me/2347039588550" target="_blank" rel="noopener noreferrer" className="sdp__contact-link sdp__contact-link--wa">
                    <span>💬</span> WhatsApp Us
                  </a>
                  <div className="sdp__location">
                    <span>📍</span>
                    <span>Eleshin Bus Stop, Ijede Road, Ikorodu, Lagos</span>
                  </div>
                </div>

                <div className="sdp__other-services">
                  <h4>Other Services</h4>
                  <ul>
                    {SERVICES.filter((s) => s.slug !== slug).slice(0, 5).map((s) => (
                      <li key={s.slug}>
                        <Link to={`/services/${s.slug}`}>
                          <span>{s.icon}</span> {s.shortTitle}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link to="/services" className="sdp__all-services-link">View all services →</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        {service.gallery && (
          <GallerySection
            slides={service.gallery}
            tag="Gallery"
            title="See Our Work"
            light
          />
        )}

        {/* Content sections */}
        <section className="section sdp__content">
          <div className="container sdp__content-inner">
            <div className="sdp__sections">
              {service.sections.map((sec) => (
                <div key={sec.title} className="sdp__section">
                  <div className="sdp__section-header">
                    <span className="sdp__section-icon">{sec.icon}</span>
                    <h2 className="sdp__section-title">{sec.title}</h2>
                  </div>
                  <div className="sdp__section-body">
                    {renderBody(sec.body)}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            {service.faqs && (
              <div className="sdp__faq">
                <div className="sdp__faq-header">
                  <span className="sdp__faq-header-icon">❓</span>
                  <h2 className="sdp__faq-title">Frequently Asked Questions</h2>
                </div>
                <div className="sdp__faq-list">
                  {service.faqs.map(({ q, a }, i) => (
                    <FAQItem
                      key={q}
                      q={q}
                      a={a}
                      index={i}
                      isOpen={openFaq === i}
                      onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Book strip */}
            <div className="sdp__book-strip">
              <div>
                <h3>Ready to book {service.shortTitle}?</h3>
                <p>Send us a WhatsApp message — we'll confirm your appointment within minutes.</p>
              </div>
              <BookingCTA serviceName={service.shortTitle} />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
