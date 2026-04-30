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
          <h1 className="inner-banner-title">Contact Us</h1>
          <p className="inner-banner-desc">
            We&apos;d love to hear from you. Reach out and let&apos;s start a conversation about your next big idea.
          </p>
        </div>
      </section>

      {/* Contact Form & Image */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2 className="contact-form-title">Send Your Message</h2>
              <form action="#" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="Thomas Alison" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="example@domain.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-input" placeholder="+91 123 456789" />
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Your Budget</label>
                  <input type="text" id="budget" name="budget" className="form-input" placeholder="Type Your Budget" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" className="form-textarea" placeholder="Write your message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
            <div className="contact-image-wrapper">
              <img
                src="https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68b0ab92d1331d9fc99cba90_Contact%20Us%20Image.jpg"
                alt="Contact Us"
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
              <h3 className="contact-detail-title">Our Location</h3>
              <p className="contact-detail-text">1234 Elm Street, Suite 567, Springfield, IL 62704</p>
            </div>
            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="contact-detail-title">Phone Number</h3>
              <p className="contact-detail-text">+91 123 456789</p>
            </div>
            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="contact-detail-title">Email Address</h3>
              <p className="contact-detail-text">Suport@example.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
