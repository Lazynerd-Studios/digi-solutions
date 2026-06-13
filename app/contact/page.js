'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'EmailJS is not configured. Please add your EmailJS credentials to .env.local.',
      });
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      formRef.current.reset();
      setShowSuccessModal(true);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly by phone/email.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Inner Banner */}
      <section className="section inner-banner">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Contact Us</span>
          </div>
          <h1 className="inner-banner-title">Get In Touch</h1>
          <p className="inner-banner-desc">
            Ready to upgrade your IT infrastructure? Reach out for a free site assessment, quote, or consultation.
          </p>
        </div>
        <div className="container" style={{ marginTop: '60px' }}>
          <Image
            src="/portfolio/modern-office.jpg"
            alt="DigiSolutions office"
            style={{ width: '100%', maxHeight: '350px', borderRadius: '16px', objectFit: 'cover' }}
            width={1320}
            height={350}
          />
        </div>
      </section>

      {/* Contact Form & Image */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2 className="contact-form-title">Request a Free Quote</h2>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="john@company.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-input" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" name="service" className="form-input" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option value="digital-signage">Digital Signage Solutions</option>
                    <option value="network-deployment">Network Deployment & Installation</option>
                    <option value="network-cabling">Network Cabling & Fiber Optics</option>
                    <option value="cctv">CCTV & Security Systems</option>
                    <option value="it-management">IT Infrastructure Management</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea id="message" name="message" className="form-textarea" placeholder="Tell us about your project — location, size, timeline, and any specific requirements." required></textarea>
                </div>
                {status.type === 'error' && status.message && (
                  <div
                    className="form-status"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      marginBottom: '16px',
                      backgroundColor: '#fee2e2',
                      color: '#991b1b',
                    }}
                  >
                    {status.message}
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Request'}
                </button>
              </form>
            </div>
            <div className="contact-image-wrapper">
              <Image
                src="/portfolio/it-engineer.jpg"
                alt="DigiSolutions engineer at work"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
          }}
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '40px',
              maxWidth: '420px',
              width: '100%',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#d1fae5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#1a1a1a' }}>
              Submitted Successfully
            </h3>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '28px', lineHeight: 1.6 }}>
              Thank you for reaching out! We have received your request and will get back to you soon.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowSuccessModal(false)}
              style={{ minWidth: '140px' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Contact Details */}
      <section className="section" style={{ backgroundColor: 'var(--color-light-gray)', paddingTop: 0 }}>
        <div className="container">
          <div className="contact-details-grid">
            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="contact-detail-title">Head Office</h3>
              <p className="contact-detail-text">6 Kilmer Rd, Edison, New Jersey, 08817</p>
            </div>
            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="contact-detail-title">Phone</h3>
              <p className="contact-detail-text">908-267-7432</p>
            </div>
            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="contact-detail-title">Email</h3>
              <p className="contact-detail-text">Info@digisolutiongroup.com<br />Support@digisolutiongroup.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
