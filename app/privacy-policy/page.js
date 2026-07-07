import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Inner Banner */}
      <section className="section inner-banner">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Privacy Policy</span>
          </div>
          <h1 className="inner-banner-title">Privacy Policy</h1>
          <p className="inner-banner-desc">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information. Last updated: July 2026.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>

          <div className="legal-section">
            <h2 className="legal-heading">1. Information We Collect</h2>
            <p className="legal-text">We collect information that you provide directly to us, including:</p>
            <ul className="legal-list">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you submit a quote request or contact form.</li>
              <li><strong>Project Information:</strong> Details about your project requirements, site location, and technical specifications you share with us.</li>
              <li><strong>Communication Data:</strong> Any messages, files, or documents you send through our contact forms or email.</li>
            </ul>
            <p className="legal-text">We also automatically collect certain technical information when you visit our website:</p>
            <ul className="legal-list">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website addresses</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">2. How We Use Your Information</h2>
            <p className="legal-text">We use the information we collect to:</p>
            <ul className="legal-list">
              <li>Respond to your inquiries and provide quotes for services</li>
              <li>Execute and manage IT infrastructure projects</li>
              <li>Communicate with you about project updates, schedules, and deliverables</li>
              <li>Send invoices and process payments</li>
              <li>Provide ongoing support and maintenance services</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Comply with legal obligations and resolve disputes</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">3. Information Sharing</h2>
            <p className="legal-text">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="legal-list">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our business (e.g., payment processors, email services), bound by confidentiality agreements.</li>
              <li><strong>Equipment Manufacturers:</strong> Limited technical details necessary for warranty registration or manufacturer support.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental regulation.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of company assets.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">4. Data Security</h2>
            <p className="legal-text">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted communications, secure data storage, access controls, and regular security assessments. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">5. Data Retention</h2>
            <p className="legal-text">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Project records and client communications are typically retained for 7 years after project completion for warranty, legal, and accounting purposes.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">6. Cookies and Tracking</h2>
            <p className="legal-text">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. We do not track your personal browsing activity across third-party websites.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">7. Third-Party Links</h2>
            <p className="legal-text">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">8. Your Rights</h2>
            <p className="legal-text">You have the right to:</p>
            <ul className="legal-list">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information (subject to legal obligations)</li>
              <li>Opt out of non-essential communications</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p className="legal-text">
              To exercise any of these rights, please contact us using the details provided below.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">9. Children&apos;s Privacy</h2>
            <p className="legal-text">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child, we will take steps to delete that information promptly.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">10. Changes to This Policy</h2>
            <p className="legal-text">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new &quot;Last updated&quot; date.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">11. Contact Us</h2>
            <p className="legal-text">
              For privacy-related questions or requests, please contact us at:
            </p>
            <p className="legal-text">
              <strong>DigiSolutions</strong><br />
              6 Kilmer Rd, Edison, New Jersey, 08817<br />
              Phone: <a href="tel:908-267-7432" style={{ color: 'var(--color-secondary)' }}>908-267-7432</a><br />
              Email: <a href="mailto:Info@digisolutiongroup.com" style={{ color: 'var(--color-secondary)' }}>Info@digisolutiongroup.com</a>
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-title">Questions About Our Privacy Practices?</h2>
            <p className="cta-desc">
              We&apos;re transparent about how we handle your data. Get in touch anytime.
            </p>
            <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
