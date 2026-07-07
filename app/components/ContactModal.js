'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactModal({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_GENERAL_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'EmailJS is not configured. Please try again later or contact us directly.',
      });
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      formRef.current.reset();
      setShowSuccess(true);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email us directly at Info@digisolutiongroup.com.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowSuccess(false);
    setStatus({ type: '', message: '' });
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="btn btn-secondary">
        {title || 'Contact Us'}
      </button>

      {isOpen && (
        <div className="contact-modal-overlay" onClick={handleClose}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="contact-modal-close" onClick={handleClose} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {showSuccess ? (
              /* Success State */
              <div className="contact-modal-success">
                <div className="contact-modal-success-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="contact-modal-success-title">Message Sent</h3>
                <p className="contact-modal-success-text">
                  Thank you for reaching out! We&apos;ll get back to you within 24 business hours.
                </p>
                <button type="button" className="btn btn-primary" onClick={handleClose}>
                  Close
                </button>
              </div>
            ) : (
              /* Form State */
              <>
                <h3 className="contact-modal-title">
                  {description || 'Have a question? Send us a message and we\'ll get back to you shortly.'}
                </h3>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="contact-modal-field">
                    <label htmlFor="modal-name">Full Name</label>
                    <input type="text" id="modal-name" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="contact-modal-field">
                    <label htmlFor="modal-email">Email Address</label>
                    <input type="email" id="modal-email" name="email" placeholder="john@company.com" required />
                  </div>
                  <div className="contact-modal-field">
                    <label htmlFor="modal-message">Message</label>
                    <textarea id="modal-message" name="message" placeholder="Your question or comment..." required></textarea>
                  </div>
                  {status.type === 'error' && status.message && (
                    <div className="contact-modal-error">{status.message}</div>
                  )}
                  <button type="submit" className="btn btn-primary contact-modal-submit" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
