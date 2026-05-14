'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GalleryLightbox from '../components/GalleryLightbox';

const workImages = [
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610339/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.30_p7t383.jpg', alt: 'Work done 1' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610337/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.30_2_gsldau.jpg', alt: 'Work done 2' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610335/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.30_1_gkwups.jpg', alt: 'Work done 3' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610330/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.29_hpchtv.jpg', alt: 'Work done 4' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610328/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.29_1_b3gcec.jpg', alt: 'Work done 5' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610326/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.28_wcgtbz.jpg', alt: 'Work done 6' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610324/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.28_1_w4vtjw.jpg', alt: 'Work done 7' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610322/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.27_wkvfki.jpg', alt: 'Work done 8' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610321/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.26_pp047d.jpg', alt: 'Work done 9' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610320/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.26_6_q3oicr.jpg', alt: 'Work done 10' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610317/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.26_5_g9kymh.jpg', alt: 'Work done 11' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610315/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.26_4_sbqegt.jpg', alt: 'Work done 12' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610313/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.26_3_rvcao7.jpg', alt: 'Work done 13' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610313/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.26_2_ydkjkx.jpg', alt: 'Work done 14' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610310/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.26_1_e3zlod.jpg', alt: 'Work done 15' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610309/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.25_ov9cdm.jpg', alt: 'Work done 16' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610308/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.25_1_lnqe3m.jpg', alt: 'Work done 17' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610306/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.24_wishle.jpg', alt: 'Work done 18' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610303/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.24_6_by2g2n.jpg', alt: 'Work done 19' },
  { src: 'https://res.cloudinary.com/lazynerd/image/upload/v1778610302/digi/gallery/WhatsApp_Image_2026-05-04_at_12.17.24_5_nmfxjf.jpg', alt: 'Work done 20' },
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
