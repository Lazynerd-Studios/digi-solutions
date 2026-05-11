import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'DigiSolutions - IT Services & Digital Infrastructure',
};

const companyNames = [
  'Shoprite', 'FinTrust Bank', 'Grandview Hospital', 'Metro Retail',
  'Horizon Towers', 'CloudNine Data', 'Capital Trust', 'Shoprite Nigeria',
  'University of Lagos',
];

const services = [
  {
    num: '01',
    title: 'Digital Signage Solutions',
    desc: 'End-to-end digital signage systems from LED walls and video walls to interactive kiosks and menu boards — designed, installed, and managed for maximum impact.',
  },
  {
    num: '02',
    title: 'Network Deployment & Installation',
    desc: 'Complete network infrastructure deployment including routers, switches, access points, and wireless networks — configured for speed, security, and scalability.',
  },
  {
    num: '03',
    title: 'Network Cabling & Fiber Optics',
    desc: 'Professional structured cabling solutions — Cat6, Cat6a, fiber optic installation, cable management, and certification testing for enterprise-grade performance.',
  },
  {
    num: '04',
    title: 'IT Infrastructure Management',
    desc: 'Ongoing monitoring, maintenance, and support for your entire IT ecosystem — servers, endpoints, cloud services, and network security.',
  },
];

const portfolio = [
  {
    img: '/imgs/WhatsApp Image 2026-05-04 at 12.17.26 (4).jpeg',
    cat: 'Digital Signage',
    date: 'March 2025',
    title: 'Retail LED Video Wall Deployment',
  },
  {
    img: '/imgs/WhatsApp Image 2026-05-04 at 12.17.26 (5).jpeg',
    cat: 'Network Deployment',
    date: 'January 2025',
    title: 'Enterprise Office Network Overhaul',
  },
  {
    img: '/imgs/WhatsApp Image 2026-05-04 at 12.17.26 (6).jpeg',
    cat: 'Network Cabling',
    date: 'November 2024',
    title: 'Data Center Fiber Optic Installation',
  },
  {
    img: '/imgs/WhatsApp Image 2026-05-04 at 12.17.27.jpeg',
    cat: 'Healthcare Digital Signage',
    date: 'September 2024',
    title: 'Hospital Patient Info Display System',
  },
  {
    img: '/imgs/WhatsApp Image 2026-05-04 at 12.17.28.jpeg',
    cat: 'Medical Menu Boards',
    date: 'July 2024',
    title: 'Clinic Digital Menu Board Installation',
  },
  {
    img: '/imgs/WhatsApp Image 2026-05-04 at 12.17.28 (1).jpeg',
    cat: 'Medical Displays',
    date: 'May 2024',
    title: 'Diagnostic Display Screens — Grandview Hospital',
  },
];

const processSteps = [
  { num: '01', title: 'Site Survey & Assessment', desc: 'We evaluate your premises, understand your requirements, and design a tailored solution that fits your space and budget.' },
  { num: '02', title: 'Design & Engineering', desc: 'Our engineers create detailed system designs, cable routing plans, and network topology maps for seamless implementation.' },
  { num: '03', title: 'Deployment & Handover', desc: 'Certified technicians install, test, and commission every component — with full documentation and staff training included.' },
];

const testimonials = [
  {
    quote: 'DigiSolutions transformed our retail spaces with stunning digital signage. Their team handled everything from design to installation flawlessly. Sales increased by 30%.',
    name: 'David Okonkwo',
    role: 'Operations Director, Metro Retail Group',
    avatar: '/imgs/WhatsApp Image 2026-05-04 at 12.17.29.jpeg',
  },
  {
    quote: 'The network deployment across our 12-branch office was executed on time and within budget. Zero downtime, and the new fiber backbone is incredibly fast.',
    name: 'Amara Nwosu',
    role: 'CTO, FinTrust Financial Services',
    avatar: '/imgs/WhatsApp Image 2026-05-04 at 12.17.29 (1).jpeg',
  },
  {
    quote: 'Their structured cabling work in our new headquarters was impeccable. Every cable labeled, tested, and certified. The clean cable management is a work of art.',
    name: 'James Adeyemi',
    role: 'Facilities Manager, Horizon Towers',
    avatar: '/imgs/WhatsApp Image 2026-05-04 at 12.17.30.jpeg',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Banner / Hero */}
      <section className="section banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-typography">
              <div className="banner-subtitle-wrapper">
                <span className="banner-subtitle">IT Infrastructure Experts</span>
              </div>
              <h1 className="banner-title">Digital Signage, Networks & Cabling Done Right</h1>
              <p className="banner-description-text">
                We design, deploy, and maintain cutting-edge digital signage systems, enterprise networks, and structured cabling infrastructure — delivering reliable technology that powers your business.
              </p>
              <div className="banner-button-wrapper">
                <Link href="/contact" className="btn btn-primary">Get a Free Quote</Link>

              </div>
            </div>
            <div className="banner-image-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=700&fit=crop"
                alt="Network Infrastructure"
                className="banner-image"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Ticker */}
      <section className="section company-section">
        <div className="container">
          <div className="company-subtitle-wrapper">
            <div className="company-subtitle-line"></div>
            <div className="company-subtitle">Trusted by Leading Brands Across Industries</div>
            <div className="company-subtitle-line"></div>
          </div>
          <div className="sponsors-ticker-wrapper">
            <div className="sponsors-ticker">
              <div className="ticker-track">
                {[...companyNames, ...companyNames].map((name, i) => (
                  <div className="ticker-item" key={i}>
                    <span className="company-name">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="section about-us" id="about">
        <div className="container">
          <div className="about-us-grid">
            <div className="about-us-image-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=600&h=700&fit=crop"
                alt="IT Technician at Work"
                className="about-us-image"
                width={600}
                height={700}
              />
            </div>
            <div className="about-us-content">
              <div className="section-subtitle-wrap">
                <span className="section-subtitle">About Us</span>
              </div>
              <h2 className="section-title">Your Trusted IT Infrastructure Partner</h2>
              <p className="section-description">
                DigiSolutions is a leading IT services company specializing in digital signage solutions, network deployment, and structured cabling. We help businesses modernize their technology infrastructure with reliable, scalable, and future-proof solutions.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="about-feature-text">
                    <h4>Certified Technicians</h4>
                    <p>Our team holds industry certifications from Cisco, CommScope, and Panduit for quality assurance.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="about-feature-text">
                    <h4>On-Time, Every Time</h4>
                    <p>We deliver projects on schedule with minimal disruption to your daily operations.</p>
                  </div>
                </div>
              </div>
              <div className="about-bottom-row">
                <Link href="/about" className="btn btn-primary">More About Us</Link>
                <a href="tel:+2348001234567" className="contact-link">
                  <span className="contact-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="contact-text">
                    <span className="contact-label">Call Us Now</span>
                    <span className="contact-number">+234 800 123 4567</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Our Services</span>
            </div>
            <h2 className="section-title center">Technology Solutions That Power Business</h2>
            <p className="section-description center">
              From digital displays to network backbones — we deliver comprehensive IT infrastructure services tailored to your industry and scale.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <Link href="/services" className="services-card" key={s.num}>
                <div className="services-card-header">
                  <span className="services-number">{s.num}</span>
                  <span className="services-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </span>
                </div>
                <h3 className="services-card-title">{s.title}</h3>
                <p className="services-card-desc">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Wide Office / Operations Center */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Image
            src="/imgs/WhatsApp Image 2026-05-04 at 12.17.26 (3).jpeg"
            alt="DigiSolutions Operations Center"
            style={{ width: '100%', borderRadius: '16px', objectFit: 'cover' }}
            width={1320}
            height={500}
          />
        </div>
      </section>

      {/* Portfolio */}
      <section className="section portfolio" id="portfolio">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Projects</span>
            </div>
            <h2 className="section-title center">Infrastructure We Have Built</h2>
          </div>
          <div className="portfolio-grid">
            {portfolio.map((item, i) => (
              <Link href="/portfolio" className="portfolio-card" key={i}>
                <div className="portfolio-image-wrap">
                  <Image src={item.img} alt={item.title} className="portfolio-image" width={600} height={400} />
                  <div className="portfolio-overlay">
                    <span className="portfolio-view-btn">View Project</span>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <span className="portfolio-category">{item.cat}</span>
                  <span className="portfolio-date">{item.date}</span>
                </div>
                <h3 className="portfolio-card-title">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="section working-process">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Our Process</span>
            </div>
            <h2 className="section-title center">How We Deliver Excellence</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((step) => (
              <div className="process-card" key={step.num}>
                <div className="process-number">{step.num}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="process-cta">
            <Link href="/contact" className="btn btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonial">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Testimonials</span>
            </div>
            <h2 className="section-title center">What Our Clients Say</h2>
            <p className="section-description center">
              Businesses across retail, finance, hospitality, and corporate sectors trust DigiSolutions for their IT infrastructure needs.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <Image src={t.avatar} alt={t.name} width={100} height={100} />
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta" id="contact">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-title">Ready to Upgrade Your Infrastructure?</h2>
            <p className="cta-desc">
              Get a free site assessment and quote for your digital signage, network, or cabling project.
            </p>
            <Link href="/contact" className="btn btn-secondary">Get a Free Quote</Link>
          </div>
        </div>
      </section>

    </>
  );
}
