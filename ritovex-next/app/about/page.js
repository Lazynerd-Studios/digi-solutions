import Link from 'next/link';

export const metadata = {
  title: 'About Us',
};

const companyLogos = [
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea28b177a0c8132c731_Company%20Logo1.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea22e58f4023f2c407c_Company%20Logo2.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea220a133701403500a_Company%20Logo3.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea240be0a12a1e31114_Company%20Logo4.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea28ac1cfc6ba5420ef_Company%20Logo5.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea22e65e6c572cff62d_Company%20Logo6.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea2d98edc9135c707e4_Company%20Logo7.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea28c5d930779c479fd_Company%20Logo8.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea240486de39f0c518e_Company%20Logo9.svg',
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
  { name: 'David Okonkwo', role: 'CEO & Lead Engineer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
  { name: 'Amara Nwosu', role: 'Head of Network Operations', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face' },
  { name: 'James Adeyemi', role: 'Senior Cabling Specialist', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face' },
  { name: 'Fatima Bello', role: 'Digital Signage Consultant', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face' },
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
    icon: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68781451c1b2ec734bdb1f89_About%20Us%20Card%20Icon1.svg',
    title: 'Certified Expertise',
    desc: 'Our technicians hold certifications from Cisco, CommScope, Panduit, and Samsung for guaranteed quality.',
  },
  {
    icon: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/6878145183772d0cdf6005e8_About%20Us%20Card%20Icon2.svg',
    title: 'End-to-End Service',
    desc: 'From initial site survey and design to installation, testing, and ongoing maintenance — we handle it all.',
  },
  {
    icon: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68781451e9e825ffe70ac4af_About%20Us%20Card%20Icon3.svg',
    title: 'Industry Experience',
    desc: 'Over a decade of experience deploying IT infrastructure for retail, finance, hospitality, and enterprise.',
  },
  {
    icon: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68781451954bf1b86c600b25_About%20Us%20Card%20Icon4.svg',
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
          <h1 className="inner-banner-title">About Ritovex</h1>
          <p className="inner-banner-desc">
            We are a leading IT infrastructure company specializing in digital signage, network deployment, and structured cabling — delivering reliable technology solutions that drive business growth.
          </p>
        </div>
      </section>

      {/* About Banner / Stats */}
      <section className="section">
        <div className="container">
          <div className="about-banner-grid">
            <div className="about-banner-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=700&h=500&fit=crop"
                alt="Ritovex Technicians"
                className="about-banner-image"
              />
            </div>
            <div className="about-banner-content">
              <div className="section-subtitle-wrap">
                <span className="section-subtitle">Who We Are</span>
              </div>
              <h2 className="section-title">Building the Digital Backbone of Modern Business</h2>
              <p className="section-description">
                Since 2014, Ritovex has been at the forefront of IT infrastructure deployment across Nigeria. From massive LED video walls in retail malls to enterprise fiber networks in financial institutions, we design, install, and maintain the technology that powers business.
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
            <h2 className="section-title center">The Ritovex Advantage</h2>
          </div>
          <div className="why-choose-grid">
            <div className="why-choose-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=500&fit=crop"
                alt="Network Cabling"
                className="why-choose-image"
              />
            </div>
            <div className="why-choose-cards">
              {whyCards.map((card, i) => (
                <div className="why-choose-card" key={i}>
                  <div className="why-choose-icon">
                    <img src={card.icon} alt={card.title} />
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
                {[...companyLogos, ...companyLogos].map((logo, i) => (
                  <div className="ticker-item" key={i}>
                    <img src={logo} alt="Partner Logo" className="company-logo" />
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
            <h2 className="section-title center">Meet the Experts Behind Your Infrastructure</h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-member-card" key={i}>
                <div className="team-member-image-wrap">
                  <img src={member.img} alt={member.name} className="team-member-image" />
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
