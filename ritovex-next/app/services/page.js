import Link from 'next/link';
import FaqAccordion from '../components/FaqAccordion';

export const metadata = {
  title: 'Services',
};

const servicesImages = [
  {
    num: '01',
    title: 'Web Design',
    desc: 'Focuses on the aesthetic and user experience of a website, creating visually appealing and intuitive layouts.',
    img: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a8c652faddc427986bc208_Services%20Image1.jpg',
  },
  {
    num: '02',
    title: 'Web Development',
    desc: 'Involves the coding and programming that makes a website functional and interactive. This includes front-end and back-end.',
    img: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a8c652c1e25073a0538410_Services%20Image2.jpg',
  },
  {
    num: '03',
    title: 'Branding',
    desc: 'The process of creating a unique identity for a company or product, encompassing its name, logo, messaging, and overall image.',
    img: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a8c6521cb67e81661aaad8_Services%20Image3.jpg',
  },
  {
    num: '04',
    title: 'Product Design',
    desc: 'Encompasses the entire process of creating a new product, from conceptualization and research to prototyping and final execution.',
    img: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a8c652566a0be2eda8c9c1_Services%20Image4.jpg',
  },
];

const techStack = ['Figma', 'Sketch', 'Adobe XD', 'Webflow', 'Framer', 'React', 'Next.js', 'Node.js', 'WordPress', 'Shopify'];

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'On-Time Delivery',
    desc: 'We prioritize timely completion without compromising quality.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Tailored Solutions',
    desc: 'Every solution is customized to fit your unique goals and challenges.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Modern Tech Stack',
    desc: 'We use modern, reliable technologies to craft fast, user-friendly digital experiences.',
  },
];

const faqs = [
  { q: 'What services does Ritovex offer?', a: 'We offer a comprehensive range of digital services including web design, web development, branding, and product design. Our team specializes in creating tailored solutions that align with your business goals.' },
  { q: 'How long does a typical project take?', a: 'Project timelines vary based on scope and complexity. A typical website project takes 4-8 weeks, while larger branding or product design projects may take 8-12 weeks.' },
  { q: 'Do you offer ongoing support after launch?', a: 'Yes, absolutely. We believe in building long-term relationships with our clients. Our ongoing support packages ensure your digital products remain up-to-date, secure, and performing at their best.' },
  { q: 'What is your pricing structure?', a: 'We offer flexible pricing based on project requirements. Contact us for a custom quote tailored to your specific needs and budget.' },
  { q: 'Can you work with international clients?', a: 'Definitely! We work with clients from all around the world. Our team is experienced in remote collaboration and we use modern tools to ensure seamless communication across time zones.' },
];

const testimonials = [
  {
    quote: 'Was initially hesitant about the project, but the team quickly put my mind at ease. Their expertise and professionalism are unmatched.',
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68790f3cb5c24b5842bcae38_Testimonial%20Avatar1.jpg',
  },
  {
    quote: 'I came to them with a vague idea, and they helped me refine it into a concrete plan. Throughout the entire process, communication was excellent.',
    name: 'Michael Chen',
    role: 'Founder, InnovateLab',
    avatar: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68790f3cf57d94f7ac49f9b6_Testimonial%20Avatar2.jpg',
  },
  {
    quote: 'The results speak for themselves. Our conversion rates increased by 150% after the redesign. Truly exceptional work from start to finish.',
    name: 'Emily Davis',
    role: 'Marketing Director, Bloom Co.',
    avatar: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68790f3cb5c24b5842bcae3c_Testimonial%20Avatar3.jpg',
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
          <h1 className="inner-banner-title">Creative Solutions</h1>
          <p className="inner-banner-desc">
            We deliver innovative, tailor-made strategies that solve problems, spark ideas, and bring your vision to life—efficiently and effectively.
          </p>
        </div>
      </section>

      {/* Services with Images */}
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

      {/* CMS Technology */}
      <section className="section" style={{ backgroundColor: 'var(--color-light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Technology</span>
            </div>
            <h2 className="section-title center">Tools We Use to Build Great Products</h2>
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
            <h2 className="section-title center">Why Choose Our Services</h2>
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
            <p style={{ marginBottom: '16px' }}>Still Have More Questions?</p>
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
            <h2 className="section-title center">What Our Clients are Saying</h2>
            <p className="section-description center">
              Hear directly from our clients about their experiences and the results we&apos;ve delivered.
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
