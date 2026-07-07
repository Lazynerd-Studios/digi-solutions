import Link from 'next/link';
import ContactModal from '../components/ContactModal';

export const metadata = {
  title: 'Terms of Service',
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Inner Banner */}
      <section className="section inner-banner">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Terms of Service</span>
          </div>
          <h1 className="inner-banner-title">Terms of Service</h1>
          <p className="inner-banner-desc">
            Please read these terms carefully before using our services. Last updated: July 2026.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>

          <div className="legal-section">
            <h2 className="legal-heading">1. Acceptance of Terms</h2>
            <p className="legal-text">
              By accessing or using the services provided by DigiSolutions (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, clients, and users of our website and services.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">2. Services Description</h2>
            <p className="legal-text">
              DigiSolutions provides IT infrastructure services including, but not limited to:
            </p>
            <ul className="legal-list">
              <li>Digital signage design, installation, and maintenance</li>
              <li>Network deployment and installation (routers, switches, access points)</li>
              <li>Structured cabling and fiber optic installation</li>
              <li>IT infrastructure management and support</li>
              <li>CCTV and security system installation</li>
              <li>POS system deployment and configuration</li>
            </ul>
            <p className="legal-text">
              Specific deliverables, timelines, and costs for each project will be outlined in individual service agreements or proposals.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">3. Service Agreements</h2>
            <p className="legal-text">
              For project-based work, a separate service agreement or statement of work (SOW) will be provided. In the event of any conflict between these Terms and a specific service agreement, the service agreement shall prevail for that particular project.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">4. Payment Terms</h2>
            <ul className="legal-list">
              <li>A deposit may be required before project commencement, as specified in your proposal.</li>
              <li>Invoices are due within 30 days of issuance unless otherwise agreed.</li>
              <li>Late payments may incur a charge of 1.5% per month on outstanding balances.</li>
              <li>All prices are quoted in USD unless otherwise stated.</li>
              <li>Additional work requested outside the original scope will be billed separately.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">5. Client Responsibilities</h2>
            <p className="legal-text">You agree to:</p>
            <ul className="legal-list">
              <li>Provide accurate information necessary for project execution.</li>
              <li>Ensure site access and readiness as agreed in the project timeline.</li>
              <li>Obtain any necessary permits or approvals for work on your premises.</li>
              <li>Review and approve design proposals and change orders in a timely manner.</li>
              <li>Maintain appropriate backups of any data stored on systems we install or configure.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">6. Warranties</h2>
            <p className="legal-text">
              DigiSolutions warrants that all work will be performed in a professional manner consistent with industry standards. Equipment and hardware installed by us are covered by their respective manufacturer warranties. Our workmanship is guaranteed for a period of 12 months from project completion. This warranty does not cover damage caused by misuse, unauthorized modifications, or natural disasters.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">7. Limitation of Liability</h2>
            <p className="legal-text">
              To the maximum extent permitted by law, DigiSolutions shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or business interruption. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">8. Intellectual Property</h2>
            <p className="legal-text">
              All designs, diagrams, network topology plans, and documentation created by DigiSolutions as part of a project remain our intellectual property until full payment is received. Upon full payment, the client receives a license to use these materials for the specific project. We retain the right to showcase completed projects in our portfolio unless otherwise agreed in writing.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">9. Termination</h2>
            <p className="legal-text">
              Either party may terminate a service agreement with 30 days written notice. In the event of termination, the client is responsible for payment of all work completed up to the termination date. DigiSolutions reserves the right to suspend services for non-payment after 15 days past due.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">10. Confidentiality</h2>
            <p className="legal-text">
              Both parties agree to keep confidential any proprietary information shared during the course of a project. This includes network configurations, security setups, business processes, and any other sensitive information disclosed by either party.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">11. Governing Law</h2>
            <p className="legal-text">
              These Terms of Service are governed by the laws of the State of New Jersey, United States. Any disputes arising from these terms or our services shall be resolved in the courts of Middlesex County, New Jersey.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">12. Changes to Terms</h2>
            <p className="legal-text">
              We reserve the right to update or modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">13. Contact Us</h2>
            <p className="legal-text">
              If you have questions about these Terms of Service, please contact us at:
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
            <h2 className="cta-title">Have Questions About Our Terms?</h2>
            <p className="cta-desc">
              Reach out to us and we&apos;ll be happy to clarify anything.
            </p>
            <ContactModal title="Contact Us" description="Have a question about our terms or services? Send us a message and we'll get back to you shortly." />
          </div>
        </div>
      </section>
    </>
  );
}
