import Link from 'next/link';
import FaqAccordion from '../components/FaqAccordion';

export const metadata = {
  title: 'Services',
};

const servicesImages = [
  {
    num: '01',
    title: 'Digital Signage Solutions',
    desc: 'Complete digital signage ecosystems — LED video walls, LCD displays, interactive kiosks, menu boards, and wayfinding systems. We handle design, procurement, installation, content management, and ongoing maintenance.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
  },
  {
    num: '02',
    title: 'Network Deployment & Installation',
    desc: 'Full-scale network infrastructure deployment — LAN/WAN setup, wireless networks, firewall configuration, VPN implementation, and network security hardening for offices, campuses, and multi-site organizations.',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
  },
  {
    num: '03',
    title: 'Network Cabling & Fiber Optics',
    desc: 'Professional structured cabling installation — Cat5e, Cat6, Cat6a, fiber optic backbone, cable tray and ladder rack installation, patch panel termination, and full certification testing with documentation.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
  },
  {
    num: '04',
    title: 'CCTV & Security Systems',
    desc: 'Surveillance and access control solutions — IP camera systems, NVR/DVR setup, video analytics, biometric access control, and integrated security management platforms for complete peace of mind.',
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop',
  },
];

const techStack = ['Samsung', 'LG', 'NEC', 'Cisco', 'Ubiquiti', 'Aruba', 'Hikvision', 'Dahua', 'CommScope', 'Panduit', 'Leviton', 'Belden'];

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'On-Time Delivery',
    desc: 'We prioritize timely project completion without compromising quality or safety standards.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Tailored Solutions',
    desc: 'Every project is customized to your specific space, budget, performance requirements, and growth plans.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Certified Equipment',
    desc: 'We use enterprise-grade equipment from Samsung, Cisco, CommScope, and other industry-leading manufacturers.',
  },
];

const faqs = [
  { q: 'What types of digital signage do you install?', a: 'We install LED video walls, LCD displays, interactive touch kiosks, menu boards, wayfinding displays, and outdoor digital billboards. We work with top brands like Samsung, LG, and NEC and provide full content management solutions.' },
  { q: 'How long does a typical network deployment take?', a: 'Project timelines vary based on scope. A small office network can be completed in 3-5 days, while large enterprise deployments across multiple locations may take 4-8 weeks. We provide detailed timelines during the planning phase.' },
  { q: 'Do you offer warranties on cabling and installation work?', a: 'Yes. All our structured cabling installations come with a 25-year system warranty backed by manufacturers like CommScope and Panduit. Network equipment carries standard manufacturer warranties, and we offer extended maintenance packages.' },
  { q: 'Can you work with existing infrastructure or do we need a complete overhaul?', a: 'We can integrate with your existing infrastructure where possible. Our site assessment identifies what can be reused, what needs upgrading, and the most cost-effective path forward.' },
  { q: 'Do you provide ongoing maintenance and support?', a: 'Absolutely. We offer SLA-based maintenance contracts, 24/7 remote monitoring, on-call technician support, and preventive maintenance schedules to ensure your systems operate at peak performance.' },
];

const testimonials = [
  {
    quote: 'Ritovex deployed a 12-screen video wall across our retail chain in under three weeks. The quality of work and attention to cable management was outstanding.',
    name: 'Chinedu Eze',
    role: 'IT Director, Shoprite Nigeria',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote: 'Their fiber optic installation across our 8-floor office building was flawless. Every cable labeled, tested, and certified. The network performance is incredible.',
    name: 'Ngozi Obi',
    role: 'CTO, Capital Trust Bank',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote: 'We needed a complete network overhaul for our new hospital wing. Ritovex delivered on time, within budget, and with zero disruption to patient services.',
    name: 'Dr. Ibrahim Musa',
    role: 'Facilities Director, Grandview Hospital',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Inner Banner */}
      <section className="section inner-banner">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Services</span>
          </div>
          <h1 className="inner-banner-title">Our Services</h1>
          <p className="inner-banner-desc">
            Comprehensive IT infrastructure solutions — from digital signage and network deployment to structured cabling and security systems.
          </p>
        </div>
      </section>

      {/* Services with Images */}
      <section className="section services">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">What We Do</span>
            </div>
            <h2 className="section-title center">IT Infrastructure Services</h2>
            <p className="section-description center">
              We design, deploy, and maintain the technology systems that keep modern businesses connected, visible, and secure.
            </p>
          </div>
          <div className="services-image-grid">
            {servicesImages.map((s) => (
              <Link href="/services" className="services-image-card" key={s.num}>
                <div className="services-image-wrap">
                  <img src={s.img} alt={s.title} />
                </div>
                <div className="services-image-content">
                  <div className="services-image-header">
                    <span className="services-number">{s.num}</span>
                    <span className="services-arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="services-card-title">{s.title}</h3>
                  <p className="services-card-desc">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="section" style={{ backgroundColor: 'var(--color-light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Partners</span>
            </div>
            <h2 className="section-title center">Brands & Technologies We Work With</h2>
          </div>
          <div className="cms-tech-grid">
            {techStack.map((tech) => (
              <div className="cms-tech-item" key={tech}>{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Benefits</span>
            </div>
            <h2 className="section-title center">Why Clients Choose Ritovex</h2>
          </div>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div className="benefit-card" key={i}>
                <div className="benefit-icon">{b.icon}</div>
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ backgroundColor: 'var(--color-light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">FAQ</span>
            </div>
            <h2 className="section-title center">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion faqs={faqs} />
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ marginBottom: '16px' }}>Still have questions about our services?</p>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
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
              Businesses across retail, finance, healthcare, and hospitality trust Ritovex for their IT infrastructure.
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
                    <img src={t.avatar} alt={t.name} />
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
