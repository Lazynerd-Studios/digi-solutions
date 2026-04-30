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
    title: 'Web Design',
    desc: 'Focuses on the aesthetic and user experience of a website, creating visually appealing and intuitive layouts.',
  },
  {
    num: '02',
    title: 'Web Development',
    desc: 'Involves the coding and programming that makes a website functional and interactive.',
  },
  {
    num: '03',
    title: 'Branding',
    desc: 'The process of creating a unique identity for a company or product, encompassing its name, logo, messaging, and overall image.',
  },
  {
    num: '04',
    title: 'Product Design',
    desc: 'Encompasses the entire process of creating a new product, from conceptualization and research to prototyping and final execution.',
  },
];

const team = [
  { name: 'James Wilson', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
  { name: 'Sarah Johnson', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face' },
  { name: 'Michael Chen', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face' },
  { name: 'Emily Davis', role: 'Marketing Lead', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face' },
];

const awards = [
  { title: 'Awwwards Site of the Day', year: '2025' },
  { title: 'CSS Design Awards - Best UI', year: '2024' },
  { title: 'Webby Awards - Best Agency', year: '2024' },
  { title: 'FWA of the Month', year: '2023' },
  { title: 'Digital Agency Network - Top 100', year: '2023' },
];

const whyCards = [
  {
    icon: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68781451c1b2ec734bdb1f89_About%20Us%20Card%20Icon1.svg',
    title: 'Innovation First',
    desc: 'Foster creativity and embrace innovation to stay ahead of the competition.',
  },
  {
    icon: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/6878145183772d0cdf6005e8_About%20Us%20Card%20Icon2.svg',
    title: 'Maximum Efficiency',
    desc: 'Streamline processes and resources to maximize efficiency and profitability.',
  },
  {
    icon: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68781451e9e825ffe70ac4af_About%20Us%20Card%20Icon3.svg',
    title: 'Strong Relationships',
    desc: 'Build meaningful relationships with customers through exceptional service.',
  },
  {
    icon: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68781451954bf1b86c600b25_About%20Us%20Card%20Icon4.svg',
    title: 'Scalable Growth',
    desc: 'Expand your business by implementing structured, scalable plans.',
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
          <h1 className="inner-banner-title">About Us</h1>
          <p className="inner-banner-desc">
            We&apos;re a creative agency fueled by passion and purpose. We partner with brands to craft unforgettable experiences and meaningful connections.
          </p>
        </div>
      </section>

      {/* About Banner / Stats */}
      <section className="section">
        <div className="container">
          <div className="about-banner-grid">
            <div className="about-banner-image-wrapper">
              <img
                src="https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68aa0b473008cdec5ec19e1d_About%20Us%20Banner%20Image.jpg"
                alt="Our Team"
                className="about-banner-image"
              />
            </div>
            <div className="about-banner-content">
              <div className="section-subtitle-wrap">
                <span className="section-subtitle">Who We Are</span>
              </div>
              <h2 className="section-title">Award-Winning Work, Trusted Results</h2>
              <p className="section-description">
                We have happy Clients worldwide. We&apos;re dedicated to helping you achieve your goals with a simple, user-friendly experience.
              </p>
              <div className="about-stats-grid">
                <div className="about-stat-card">
                  <div className="about-stat-number">150+</div>
                  <div className="about-stat-label">Projects Completed</div>
                </div>
                <div className="about-stat-card">
                  <div className="about-stat-number">80+</div>
                  <div className="about-stat-label">Happy Clients</div>
                </div>
                <div className="about-stat-card">
                  <div className="about-stat-number">12+</div>
                  <div className="about-stat-label">Years Experience</div>
                </div>
                <div className="about-stat-card">
                  <div className="about-stat-number">25+</div>
                  <div className="about-stat-label">Team Members</div>
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
            <h2 className="section-title center">Your Success, Our Priority.</h2>
          </div>
          <div className="why-choose-grid">
            <div className="why-choose-image-wrapper">
              <img
                src="https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68aa0d4927a7a2c37c2d4733_Why%20Chooses%20Us%20Image.png"
                alt="Why Choose Us"
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
            <div className="company-subtitle">Trusted Partners Worldwide for Success</div>
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
            <h2 className="section-title center">Your Needs, Our Expertise</h2>
            <p className="section-description center">
              Your Vision, Our Expertise — Together, we bring ideas to life with tailored solutions that deliver real results.
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
            <h2 className="section-title center">Meet Our Expert Members</h2>
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
              <span className="section-subtitle">Awards</span>
            </div>
            <h2 className="section-title center">Recognition & Honors</h2>
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
            <h2 className="cta-title">Let&apos;s Start Talk</h2>
            <p className="cta-desc">
              Ready to transform your digital presence? Let&apos;s discuss how we can help your business grow.
            </p>
            <Link href="/contact" className="btn btn-secondary">Connect With Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
