import Link from 'next/link';
import FaqAccordion from '../components/FaqAccordion';

export const metadata = {
  title: 'FAQ',
};

const faqs = [
  {
    q: 'What services does DigiSolutions offer?',
    a: 'We specialize in digital signage solutions, network deployment and installation, structured cabling and fiber optics, IT infrastructure management, CCTV and security systems, and POS system deployment. We serve businesses across retail, finance, healthcare, hospitality, and corporate sectors.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We are headquartered in Edison, New Jersey and serve clients across the tri-state area and beyond. For larger projects, we can deploy teams nationwide. Contact us to discuss your specific location and requirements.',
  },
  {
    q: 'How do I get a quote for a project?',
    a: 'You can request a free quote through our contact form, by calling us at 908-267-7432, or by emailing Info@digisolutiongroup.com. We will schedule a free site assessment to understand your needs and provide a detailed proposal.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on scope and complexity. A small digital signage installation may take 1-2 weeks, while a full network deployment for a large office could take 4-8 weeks. We provide detailed timelines in every proposal and keep you updated throughout the process.',
  },
  {
    q: 'Do you provide ongoing maintenance and support?',
    a: 'Yes. We offer comprehensive IT infrastructure management and support packages that include 24/7 monitoring, preventive maintenance, emergency repairs, and regular system health checks. Our support team is available around the clock to minimize downtime.',
  },
  {
    q: 'What certifications do your technicians hold?',
    a: 'Our technicians hold industry-recognized certifications from Cisco (CCNA, CCNP), CommScope, Panduit, and Samsung for digital signage. All our cabling work is performed by certified installers and tested to TIA/EIA standards.',
  },
  {
    q: 'What types of cabling do you install?',
    a: 'We install Cat5e, Cat6, Cat6a, and fiber optic cabling (single-mode and multi-mode). Our services include cable routing, termination, labeling, cable management, and certification testing. All installations comply with TIA/EIA-568 standards.',
  },
  {
    q: 'Can you work with our existing IT infrastructure?',
    a: 'Absolutely. We regularly integrate new systems with existing infrastructure. During the site survey, we assess your current setup and design solutions that complement and enhance what you already have, minimizing disruption to your operations.',
  },
  {
    q: 'What is your warranty policy?',
    a: 'We provide a 12-month workmanship warranty on all installations. Equipment and hardware are covered by their respective manufacturer warranties, which we help you register and manage. Extended warranty and support packages are also available.',
  },
  {
    q: 'Do you handle permits and compliance?',
    a: 'Yes. We handle all necessary permits, inspections, and compliance documentation for your installations. This includes building permits, low-voltage electrical permits, and compliance with local building codes and fire safety regulations.',
  },
  {
    q: 'What is your payment structure?',
    a: 'We typically require a deposit before project commencement, with the balance due upon completion. For larger projects, we offer milestone-based payment schedules. All payment terms are clearly outlined in your service agreement before work begins.',
  },
  {
    q: 'Can you provide references from past clients?',
    a: 'Yes. We have over 500 completed projects and 200+ enterprise clients across various industries. We are happy to provide references and case studies relevant to your project type. You can also view some of our work in our portfolio section.',
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Inner Banner */}
      <section className="section inner-banner">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>FAQ</span>
          </div>
          <h1 className="inner-banner-title">Frequently Asked Questions</h1>
          <p className="inner-banner-desc">
            Find answers to common questions about our services, process, and policies. Can&apos;t find what you&apos;re looking for? Reach out to us directly.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-title">Still Have Questions?</h2>
            <p className="cta-desc">
              Our team is ready to help. Get in touch and we&apos;ll get back to you within 24 hours.
            </p>
            <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
