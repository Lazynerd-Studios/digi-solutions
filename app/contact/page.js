import Link from 'next/link';

export const metadata = {
  title: 'Contact Us',
};

export default function ContactPage() {
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
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1320&h=500&fit=crop"
            alt="Contact DigiSolutions"
            style={{ width: '100%', borderRadius: '16px', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Contact Form & Image */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2 className="contact-form-title">Request a Free Quote</h2>
              <form action="#" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="John Adeyemi" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="john@company.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-input" placeholder="+234 800 123 4567" />
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
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Request</button>
              </form>
            </div>
            <div className="contact-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=700&fit=crop"
                alt="DigiSolutions Office"
              />
            </div>
          </div>
        </div>
      </section>

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
              <p className="contact-detail-text">14B Adetokunbo Ademola Street, Victoria Island, Lagos, Nigeria</p>
            </div>
            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="contact-detail-title">Phone</h3>
              <p className="contact-detail-text">+234 800 123 4567<br />+234 700 987 6543</p>
            </div>
            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="contact-detail-title">Email</h3>
              <p className="contact-detail-text">info@digisolutions.ng<br />projects@digisolutions.ng</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
