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

const CartoonAvatar = ({ style, skinTone, hairStyle, accessory }) => {
  const skin = skinTone || '#8B5E3C';
  const hairColor = '#1a1a1a';
  const shirtColor = style === 'ceo' ? '#1e3a5f' : style === 'ops' ? '#2d6a4f' : style === 'cable' ? '#e07a2f' : '#6b21a8';

  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Background */}
      <circle cx="100" cy="100" r="100" fill="#f0f4f8" />

      {/* Body / Shirt */}
      <ellipse cx="100" cy="210" rx="70" ry="50" fill={shirtColor} />
      {style === 'ceo' && <><path d="M85 165 L100 185 L115 165" fill="none" stroke="#fff" strokeWidth="2" /><rect x="97" y="170" width="6" height="15" fill="#c0392b" rx="2" /></>}
      {style === 'ops' && <path d="M70 175 Q100 160 130 175" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.5" />}

      {/* Neck */}
      <rect x="88" y="145" width="24" height="25" fill={skin} rx="4" />

      {/* Head */}
      <ellipse cx="100" cy="110" rx="42" ry="48" fill={skin} />

      {/* Hair */}
      {hairStyle === 'short' && (
        <path d="M58 100 Q58 62 100 58 Q142 62 142 100 Q140 80 100 75 Q60 80 58 100Z" fill={hairColor} />
      )}
      {hairStyle === 'natural' && (
        <g fill={hairColor}>
          <ellipse cx="100" cy="72" rx="48" ry="35" />
          <circle cx="60" cy="85" r="12" />
          <circle cx="140" cy="85" r="12" />
          <circle cx="70" cy="68" r="10" />
          <circle cx="130" cy="68" r="10" />
          <circle cx="85" cy="58" r="10" />
          <circle cx="115" cy="58" r="10" />
          <circle cx="100" cy="55" r="10" />
        </g>
      )}
      {hairStyle === 'fade' && (
        <g fill={hairColor}>
          <path d="M58 105 Q58 65 100 60 Q142 65 142 105 Q140 85 100 78 Q60 85 58 105Z" />
          <rect x="56" y="95" width="8" height="15" rx="3" opacity="0.3" />
          <rect x="136" y="95" width="8" height="15" rx="3" opacity="0.3" />
        </g>
      )}
      {hairStyle === 'hijab' && (
        <g fill="#3b5998">
          <ellipse cx="100" cy="95" rx="52" ry="55" />
          <path d="M48 110 Q48 160 100 170 Q152 160 152 110 Q150 95 100 90 Q50 95 48 110Z" />
          <ellipse cx="100" cy="110" rx="40" ry="42" fill={skin} />
        </g>
      )}

      {/* Eyes */}
      <g>
        <ellipse cx="82" cy="110" rx="6" ry="7" fill="#fff" />
        <ellipse cx="118" cy="110" rx="6" ry="7" fill="#fff" />
        <circle cx="83" cy="111" r="3.5" fill="#2c1810" />
        <circle cx="119" cy="111" r="3.5" fill="#2c1810" />
        <circle cx="84" cy="109" r="1.2" fill="#fff" />
        <circle cx="120" cy="109" r="1.2" fill="#fff" />
      </g>

      {/* Eyebrows */}
      <path d="M74 100 Q82 96 90 100" fill="none" stroke={hairColor} strokeWidth="2" strokeLinecap="round" />
      <path d="M110 100 Q118 96 126 100" fill="none" stroke={hairColor} strokeWidth="2" strokeLinecap="round" />

      {/* Nose */}
      <path d="M97 118 Q100 125 103 118" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Mouth / Smile */}
      <path d="M88 132 Q100 142 112 132" fill="none" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M90 132 Q100 138 110 132" fill="#e74c3c" opacity="0.4" />

      {/* Ears */}
      <ellipse cx="58" cy="112" rx="6" ry="8" fill={skin} />
      <ellipse cx="142" cy="112" rx="6" ry="8" fill={skin} />

      {/* Accessories */}
      {accessory === 'glasses' && (
        <g fill="none" stroke="#333" strokeWidth="2">
          <rect x="72" y="104" width="20" height="14" rx="3" />
          <rect x="108" y="104" width="20" height="14" rx="3" />
          <line x1="92" y1="110" x2="108" y2="110" />
          <line x1="72" y1="110" x2="58" y2="108" />
          <line x1="128" y1="110" x2="142" y2="108" />
        </g>
      )}
      {accessory === 'earring' && (
        <g>
          <circle cx="58" cy="124" r="3" fill="#f1c40f" />
          <circle cx="142" cy="124" r="3" fill="#f1c40f" />
        </g>
      )}
      {accessory === 'headset' && (
        <g>
          <path d="M55 95 Q55 60 100 55 Q145 60 145 95" fill="none" stroke="#333" strokeWidth="3" />
          <rect x="48" y="100" width="10" height="18" rx="4" fill="#333" />
          <rect x="142" y="100" width="10" height="18" rx="4" fill="#333" />
          <path d="M148 118 Q155 135 140 140" fill="none" stroke="#333" strokeWidth="2" />
          <circle cx="138" cy="141" r="4" fill="#333" />
        </g>
      )}
    </svg>
  );
};

const team = [
  { name: 'David Okonkwo', role: 'CEO & Lead Engineer', avatarStyle: 'ceo', skinTone: '#8B5E3C', hairStyle: 'short', accessory: 'glasses' },
  { name: 'Amara Nwosu', role: 'Head of Network Operations', avatarStyle: 'ops', skinTone: '#6B4226', hairStyle: 'natural', accessory: 'earring' },
  { name: 'James Adeyemi', role: 'Senior Cabling Specialist', avatarStyle: 'cable', skinTone: '#7B4B2A', hairStyle: 'fade', accessory: null },
  { name: 'Fatima Bello', role: 'Digital Signage Consultant', avatarStyle: 'consultant', skinTone: '#9B6B4A', hairStyle: 'hijab', accessory: null },
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
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1320&h=500&fit=crop"
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
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=700&fit=crop"
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
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=700&fit=crop"
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
                  <CartoonAvatar style={member.avatarStyle} skinTone={member.skinTone} hairStyle={member.hairStyle} accessory={member.accessory} />
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
