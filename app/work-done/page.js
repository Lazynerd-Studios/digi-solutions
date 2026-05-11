'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GalleryLightbox from '../components/GalleryLightbox';

const workImages = [
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.16.59 (1).jpeg', alt: 'Work done 1' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.16.59 (2).jpeg', alt: 'Work done 2' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.16.59 (3).jpeg', alt: 'Work done 3' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.16.59.jpeg', alt: 'Work done 4' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.00.jpeg', alt: 'Work done 5' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.01.jpeg', alt: 'Work done 6' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.17 (1).jpeg', alt: 'Work done 7' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.17.jpeg', alt: 'Work done 8' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.21.jpeg', alt: 'Work done 9' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.22.jpeg', alt: 'Work done 10' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.23 (1).jpeg', alt: 'Work done 11' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.23.jpeg', alt: 'Work done 12' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.24 (1).jpeg', alt: 'Work done 13' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.24 (2).jpeg', alt: 'Work done 14' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.24 (3).jpeg', alt: 'Work done 15' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.24 (4).jpeg', alt: 'Work done 16' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.24 (5).jpeg', alt: 'Work done 17' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.24 (6).jpeg', alt: 'Work done 18' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.24.jpeg', alt: 'Work done 19' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.25 (1).jpeg', alt: 'Work done 20' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.25.jpeg', alt: 'Work done 21' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.26 (1).jpeg', alt: 'Work done 22' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.26 (2).jpeg', alt: 'Work done 23' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.26 (3).jpeg', alt: 'Work done 24' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.26 (4).jpeg', alt: 'Work done 25' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.26 (5).jpeg', alt: 'Work done 26' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.26 (6).jpeg', alt: 'Work done 27' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.26.jpeg', alt: 'Work done 28' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.27.jpeg', alt: 'Work done 29' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.28 (1).jpeg', alt: 'Work done 30' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.28.jpeg', alt: 'Work done 31' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.29 (1).jpeg', alt: 'Work done 32' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.29.jpeg', alt: 'Work done 33' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.30 (1).jpeg', alt: 'Work done 34' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.30 (2).jpeg', alt: 'Work done 35' },
  { src: '/imgs/WhatsApp Image 2026-05-04 at 12.17.30.jpeg', alt: 'Work done 36' },
];

export default function WorkDonePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      {/* Inner Banner */}
      <section className="section inner-banner" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/portfolio">Projects</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Work Done</span>
          </div>
          <h1 className="inner-banner-title">Work Done</h1>
          <p className="inner-banner-desc">
            A visual gallery of real projects and installations we have completed for our clients.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section gallery" style={{ paddingTop: '60px' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Gallery</span>
            </div>
            <h2 className="section-title center">Real Projects, Real Results</h2>
          </div>
          <div className="gallery-grid">
            {workImages.map((image, i) => (
              <div
                className="gallery-item"
                key={i}
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(i);
                  }
                }}
              >
                <Image src={image.src} alt={image.alt} className="gallery-image" width={600} height={400} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-title">Have a Project in Mind?</h2>
            <p className="cta-desc">
              Let us bring your IT infrastructure vision to life. Get a free consultation and project estimate.
            </p>
            <Link href="/contact" className="btn btn-secondary">Start Your Project</Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <GalleryLightbox
        images={workImages}
        startIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />
    </>
  );
}
