import Link from 'next/link';
import FaqAccordion from '../components/FaqAccordion';
import Image from 'next/image';

export const metadata = {
  title: 'Services',
};

const servicesImages = [
  {
    num: '01',
    title: 'Digital Signage Solutions',
    desc: 'Complete digital signage ecosystems — LED video walls, LCD displays, interactive kiosks, menu boards, and wayfinding systems. We handle design, procurement, installation, content management, and ongoing maintenance.',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
  },
  {
    num: '02',
    title: 'Network Deployment & Installation',
    desc: 'Full-scale network infrastructure deployment — LAN/WAN setup, wireless networks, access points, firewall configuration, VPN implementation, and network security hardening for offices, campuses, and multi-site organizations.',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
  },
  {
    num: '03',
    title: 'Network Cabling & Fiber Optics',
    desc: 'Professional structured cabling installation — Cat5e, Cat6, Cat6a, fiber optic backbone, cable tray and ladder rack installation, patch panel termination, and full certification testing with documentation.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
  },
  {
    num: '04',
    title: 'CCTV & Security Systems',
    desc: 'Surveillance and access control solutions — IP camera systems, NVR/DVR setup, video analytics, biometric access control, and integrated security management platforms for complete peace of mind.',
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop',
  },
  {
    num: '05',
    title: 'POS & Payment Systems',
    desc: 'Point of Sale system setup including touchscreen terminals, receipt printers, barcode scanners, cash drawers, and payment gateway integration for retail and hospitality.',
    img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop',
  },
  {
    num: '06',
    title: 'Interactive Kiosk Solutions',
    desc: 'Interactive kiosk deployment — self-service, wayfinding, check-in, and information kiosks for retail, healthcare, and hospitality environments.',
    img: 'https://images.unsplash.com/photo-1764795849878-59b546cfe9c7?w=600&h=400&fit=crop',
  },
];

const specializedServices = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Video Conferencing',
    desc: 'Professional video conference room setup with HD cameras, microphones, displays, and integration with Zoom, Teams, and Google Meet.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Meeting / Board Room',
    desc: 'Complete boardroom technology — smart displays, wireless presentation systems, room scheduling panels, and automated lighting/AV control.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'POS Installation',
    desc: 'Point of Sale system setup including terminals, receipt printers, barcode scanners, cash drawers, and payment gateway integration.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Menu Boards',
    desc: 'Digital menu board installation for restaurants, cafes, and fast food — including wall-mounted, hanging, and outdoor drive-thru displays.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    title: 'Kiosk Installation',
    desc: 'Interactive kiosk deployment — self-service, wayfinding, check-in, and information kiosks for retail, healthcare, and hospitality.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    title: 'CCTV Cameras',
    desc: 'IP camera installation — indoor/outdoor, dome, bullet, PTZ, and 4K cameras with remote monitoring and mobile app access.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Access Points',
    desc: 'Enterprise Wi-Fi access point installation — site survey, heatmap design, ceiling/wall mounting, and seamless roaming setup.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Network Cabling',
    desc: 'Structured cabling for offices, warehouses, and data centers — Cat6, fiber optic, patch panels, cable management, and certification.',
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
    quote: 'DigiSolutions deployed a 12-screen video wall across our retail chain in under three weeks. The quality of work and attention to cable management was outstanding.',
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
    quote: 'We needed a complete network overhaul for our new hospital wing. DigiSolutions delivered on time, within budget, and with zero disruption to patient services.',
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
        <div className="container" style={{ marginTop: '60px' }}>
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1320&h=500&fit=crop"
            alt="Network Infrastructure"
            style={{ width: '100%', borderRadius: '16px', objectFit: 'cover' }}
            width={1320}
            height={500}
          />
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
                  <Image src={s.img} alt={s.title} width={600} height={400} />
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

      {/* Specialized Services */}
      <section className="section" style={{ backgroundColor: 'var(--color-light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">What We Install</span>
            </div>
            <h2 className="section-title center">Specialized Installations</h2>
            <p className="section-description center">
              From video conferencing rooms to POS systems — we handle the specific technology your business needs.
            </p>
          </div>
          <div className="specialized-grid">
            {specializedServices.map((service, i) => (
              <div className="specialized-card" key={i}>
                <div className="specialized-icon">{service.icon}</div>
                <h3 className="specialized-title">{service.title}</h3>
                <p className="specialized-desc">{service.desc}</p>
              </div>
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
            <h2 className="section-title center">Why Clients Choose DigiSolutions</h2>
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
              Businesses across retail, finance, healthcare, and hospitality trust DigiSolutions for their IT infrastructure.
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
