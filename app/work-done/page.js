'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GalleryLightbox from '../components/GalleryLightbox';

const workImages = [
  { src: '/portfolio/conference-display.jpg', alt: 'Conference room video wall installation' },
  { src: '/portfolio/network-tech.jpg', alt: 'Network technician installing access point' },
  { src: '/portfolio/cabling-room.jpg', alt: 'Structured cabling system deployment' },
  { src: '/portfolio/server-rack.jpg', alt: 'Server rack and network infrastructure' },
  { src: '/portfolio/pos-retail.jpg', alt: 'Retail POS system installation' },
  { src: '/portfolio/hospital-interior.jpg', alt: 'Hospital digital display system' },
  { src: '/portfolio/server-room.jpg', alt: 'Enterprise server room' },
  { src: '/portfolio/data-center.jpg', alt: 'Modern data center workspace' },
  { src: '/portfolio/control-room.jpg', alt: 'Network monitoring dashboard' },
  { src: '/portfolio/it-engineer.jpg', alt: 'IT infrastructure engineering' },
  { src: '/portfolio/tech-workspace.jpg', alt: 'Technology workspace setup' },
  { src: '/portfolio/modern-office.jpg', alt: 'Modern office IT deployment' },
  { src: '/portfolio/office-interior.jpg', alt: 'Office interior network setup' },
  { src: '/portfolio/network-hardware.jpg', alt: 'Network hardware installation' },
  { src: '/portfolio/fiber-optic.jpg', alt: 'Fiber optic cable infrastructure' },
  { src: '/portfolio/security-camera.jpg', alt: 'CCTV and security system installation' },
  { src: '/portfolio/patch-panel.jpg', alt: 'Network patch panel cabling' },
  { src: '/portfolio/office-workspace.jpg', alt: 'IT management workspace' },
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
                <Image src={image.src} alt={image.alt} className="gallery-image" width={600} height={400} loading="lazy" />
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
        key={lightboxIndex}
        images={workImages}
        startIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />
    </>
  );
}
