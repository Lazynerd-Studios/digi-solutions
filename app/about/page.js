import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Us',
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
    desc: 'End-to-end digital signage systems from LED walls and interactive kiosks to menu boards and wayfinding displays.',
  },
  {
    num: '02',
    title: 'Network Deployment',
    desc: 'Complete network infrastructure deployment including routers, switches, wireless access points, and firewalls.',
  },
  {
    num: '03',
    title: 'Network Cabling & Fiber',
    desc: 'Professional structured cabling — Cat6, Cat6a, fiber optic installation, cable management, and certification.',
  },
  {
    num: '04',
    title: 'IT Infrastructure Management',
    desc: 'Ongoing monitoring, maintenance, and support for servers, endpoints, cloud services, and network security.',
  },
];

const team = [
  { name: 'David Okonkwo', role: 'CEO & Lead Engineer', img: '/imgs/WhatsApp Image 2026-05-04 at 12.17.24 (3).jpeg' },
  { name: 'Amara Nwosu', role: 'Head of Network Operations', img: '/imgs/WhatsApp Image 2026-05-04 at 12.17.24 (4).jpeg' },
  { name: 'James Adeyemi', role: 'Senior Cabling Specialist', img: '/imgs/WhatsApp Image 2026-05-04 at 12.17.24 (5).jpeg' },
  { name: 'Fatima Bello', role: 'Digital Signage Consultant', img: '/imgs/WhatsApp Image 2026-05-04 at 12.17.24 (6).jpeg' },
];

const awards = [
  { title: 'Cisco Certified Partner', year: '2025' },
  { title: 'CommScope Installation Excellence', year: '2024' },
  { title: 'Best IT Infrastructure Provider — Tech Awards', year: '2024' },
  { title: 'Samsung Digital Signage Certified Installer', year: '2023' },
  { title: 'Panduit Certified Contractor Network', year: '2023' },
];

const whyCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Certified Expertise',
    desc: 'Our technicians hold certifications from Cisco, CommScope, Panduit, and Samsung for guaranteed quality.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'End-to-End Service',
    desc: 'From initial site survey and design to installation, testing, and ongoing maintenance — we handle it all.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Industry Experience',
    desc: 'Over a decade of experience deploying IT infrastructure for retail, finance, hospitality, and enterprise.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '24/7 Support',
    desc: 'Round-the-clock monitoring and rapid response support to keep your systems running without interruption.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Inner Banner */}
      <section className="section inner-banner">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>About Us</span>
          </div>
          <h1 className="inner-banner-title">About DigiSolutions</h1>
          <p className="inner-banner-desc">
            We are a leading IT infrastructure company specializing in digital signage, network deployment, and structured cabling — delivering reliable technology solutions that drive business growth.
          </p>
        </div>
        <div className="container" style={{ marginTop: '60px' }}>
          <Image
            src="/imgs/WhatsApp Image 2026-05-04 at 12.17.25.jpeg"
            alt="DigiSolutions Data Center"
            style={{ width: '100%', borderRadius: '16px', objectFit: 'cover' }}
            width={1320}
            height={500}
          />
        </div>
      </section>

      {/* About Banner / Stats */}
      <section className="section">
        <div className="container">
          <div className="about-banner-grid">
            <div className="about-banner-image-wrapper">
              <Image
                src="/imgs/WhatsApp Image 2026-05-04 at 12.17.25 (1).jpeg"
                alt="DigiSolutions Technicians"
                className="about-banner-image"
                width={600}
                height={700}
              />
            </div>
            <div className="about-banner-content">
              <div className="section-subtitle-wrap">
                <span className="section-subtitle">Who We Are</span>
              </div>
              <h2 className="section-title">Building the Digital Backbone of Modern Business</h2>
              <p className="section-description">
                Since 2014, DigiSolutions has been at the forefront of IT infrastructure deployment across Nigeria. From massive LED video walls in retail malls to enterprise fiber networks in financial institutions, we design, install, and maintain the technology that powers business.
              </p>
              <div className="about-stats-grid">
                <div className="about-stat-card">
                  <div className="about-stat-number">500+</div>
                  <div className="about-stat-label">Projects Completed</div>
                </div>
                <div className="about-stat-card">
                  <div className="about-stat-number">200+</div>
                  <div className="about-stat-label">Enterprise Clients</div>
                </div>
                <div className="about-stat-card">
                  <div className="about-stat-number">12+</div>
                  <div className="about-stat-label">Years Experience</div>
                </div>
                <div className="about-stat-card">
                  <div className="about-stat-number">35+</div>
                  <div className="about-stat-label">Certified Engineers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: 'var(--color-light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Why Choose Us</span>
            </div>
            <h2 className="section-title center">The DigiSolutions Advantage</h2>
          </div>
          <div className="why-choose-grid">
            <div className="why-choose-image-wrapper">
              <Image
                src="/imgs/WhatsApp Image 2026-05-04 at 12.17.26.jpeg"
                alt="Network Cabling"
                className="why-choose-image"
                width={600}
                height={700}
              />
            </div>
            <div className="why-choose-cards">
              {whyCards.map((card, i) => (
                <div className="why-choose-card" key={i}>
                  <div className="why-choose-icon">
                    {card.icon}
                  </div>
                  <div className="why-choose-text">
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
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

      {/* Services Preview */}
      <section className="section services">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Our Services</span>
            </div>
            <h2 className="section-title center">Technology Solutions That Power Business</h2>
            <p className="section-description center">
              From digital displays to network backbones — comprehensive IT infrastructure services tailored to your industry.
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

      {/* Team Members */}
      <section className="section" style={{ backgroundColor: 'var(--color-light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Our Team</span>
            </div>
            <h2 className="section-title center">Our Leadership Team</h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-member-card" key={i}>
                <div className="team-member-image-wrap">
                  <Image src={member.img} alt={member.name} className="team-member-image" width={600} height={400} />
                </div>
                <div className="team-member-info">
                  <div className="team-member-name">{member.name}</div>
                  <div className="team-member-role">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Certifications</span>
            </div>
            <h2 className="section-title center">Industry Recognition & Partnerships</h2>
          </div>
          <div className="awards-list">
            {awards.map((award, i) => (
              <div className="award-item" key={i}>
                <span className="award-title">{award.title}</span>
                <span className="award-year">{award.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
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
