import Link from 'next/link';

export const metadata = {
  title: 'Ritovex - Creative Agency',
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
    desc: 'Focuses on the aesthetic and user experience of a website, creating visually appealing and intuitive interfaces.',
  },
  {
    num: '02',
    title: 'Web Development',
    desc: 'Involves the coding and programming that makes a website functional and interactive. This includes front-end and back-end.',
  },
  {
    num: '03',
    title: 'Branding',
    desc: 'The process of creating a unique identity for a business, including logo design, color palettes, and messaging.',
  },
  {
    num: '04',
    title: 'Product Design',
    desc: 'Encompasses the entire process of creating a product, from initial concept and prototyping to final production.',
  },
];

const portfolio = [
  {
    img: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68790a0db5c24b5842b874f3_Portfolio%20Image1.jpg',
    cat: 'Web Development',
    date: 'August 23, 2025',
    title: 'SmartCity Traffic Solution',
  },
  {
    img: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68790a0d3a4ccd16c17f9d0e_Portfolio%20Image2.jpg',
    cat: 'Web Development',
    date: 'August 23, 2025',
    title: 'ShopEasy E-Commerce Platform',
  },
  {
    img: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68790a0d0ff0062c7583db97_Portfolio%20Image3.jpg',
    cat: 'Web Development',
    date: 'August 23, 2025',
    title: 'MedTrack Healthcare App',
  },
];

const processSteps = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We dive deep into understanding your brand, audience, and goals to craft a winning strategy.' },
  { num: '02', title: 'Design & Development', desc: 'Our team brings concepts to life with cutting-edge design and robust development practices.' },
  { num: '03', title: 'Launch & Optimize', desc: 'We launch with precision and continuously optimize for peak performance and growth.' },
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

const tools = ['Figma', 'Sketch', 'Adobe XD', 'Webflow', 'Framer', 'React', 'Next.js', 'Node.js'];

const blogs = [
  {
    img: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/6879134c3a4ccd16c183a7b6_Blog%20Image1.jpg',
    cat: 'Design',
    title: 'Simple Tips for Better Website Design',
    excerpt: 'Learn easy ways to improve your website\'s look and feel. Easy steps for you.',
  },
  {
    img: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/6879134c6a63c2b04aedfc16_Blog%20Image2.jpg',
    cat: 'Development',
    title: 'How to Speed Up Your Website Fast Loading',
    excerpt: 'Quick fixes to make your site load faster. How great user experience boosts your business.',
  },
  {
    img: 'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/6879134ce6eb407be03b017e_Blog%20Image3.jpg',
    cat: 'Security',
    title: 'Essential Tips for Website Security',
    excerpt: 'Keep your site safe with simple security tips. Best tools to build apps easily and quickly.',
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
                <span className="banner-subtitle">Creative Agency</span>
              </div>
              <h1 className="banner-title">World&apos;s Best Creative Agency Team</h1>
              <p className="banner-description-text">
                World&apos;s best creative agency team — crafting legendary brands through bold ideas, strategic genius, and design that drives results.
              </p>
              <div className="banner-button-wrapper">
                <Link href="/contact" className="btn btn-primary">Get Started</Link>
                <button className="btn btn-video">
                  <span className="video-icon">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                      <path d="M13.5 7.13397C14.1667 7.51888 14.1667 8.48112 13.5 8.86602L1.5 15.7942C0.833332 16.1791 0 15.698 0 14.9282L0 1.0718C0 0.301996 0.833332 -0.179129 1.5 0.205771L13.5 7.13397Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="video-text">Watch Demo</span>
                </button>
              </div>
            </div>
            <div className="banner-image-wrapper">
              <img
                src="https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/687809ff2e58f4023f2a0ba4_Banner%20Image.png"
                alt="Creative Team"
                className="banner-image"
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

      {/* About Us */}
      <section className="section about-us" id="about">
        <div className="container">
          <div className="about-us-grid">
            <div className="about-us-image-wrapper">
              <img
                src="https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780a91eb80257eb8eee0cc_About%20Image.png"
                alt="About Us"
                className="about-us-image"
              />
            </div>
            <div className="about-us-content">
              <div className="section-subtitle-wrap">
                <span className="section-subtitle">About Us</span>
              </div>
              <h2 className="section-title">Who We Are. Learn About us</h2>
              <p className="section-description">
                We are a dynamic team of innovators, storytellers, and visionaries dedicated to transforming ideas into extraordinary experiences.
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
                    <h4>We deliver great work always</h4>
                    <p>Consistently exceeding expectations with every project we undertake.</p>
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
                    <h4>Experience you can count on</h4>
                    <p>Years of industry expertise backing every creative decision.</p>
                  </div>
                </div>
              </div>
              <div className="about-bottom-row">
                <Link href="/about" className="btn btn-primary">More About Us</Link>
                <a href="tel:22003567890" className="contact-link">
                  <span className="contact-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="contact-text">
                    <span className="contact-label">Get free Quote</span>
                    <span className="contact-number">22 (00) 356 7890</span>
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
            <h2 className="section-title center">Your Needs, Our Expertise</h2>
            <p className="section-description center">
              Your Vision, Our Expertise — Together, we bring ideas to life with tailored solutions that deliver real impact.
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

      {/* Portfolio */}
      <section className="section portfolio" id="portfolio">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Portfolio</span>
            </div>
            <h2 className="section-title center">Explore Our Real Works</h2>
          </div>
          <div className="portfolio-grid">
            {portfolio.map((item, i) => (
              <Link href="/portfolio" className="portfolio-card" key={i}>
                <div className="portfolio-image-wrap">
                  <img src={item.img} alt={item.title} className="portfolio-image" />
                  <div className="portfolio-overlay">
                    <span className="portfolio-view-btn">View</span>
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
              <span className="section-subtitle">Working Process</span>
            </div>
            <h2 className="section-title center">Explore Our 3 Step Working Process</h2>
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
            <Link href="/contact" className="btn btn-primary">Start Projects</Link>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section services-tools">
        <div className="container">
          <div className="tools-content">
            <h2 className="section-title center">Tools We Use to Deliver Excellence</h2>
            <div className="tools-grid">
              {tools.map((tool) => (
                <div className="tool-item" key={tool}>
                  <span className="tool-name">{tool}</span>
                </div>
              ))}
            </div>
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
      <section className="section cta" id="contact">
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

      {/* Blog */}
      <section className="section blog" id="blog">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Our Blog</span>
            </div>
            <h2 className="section-title center">Read Our Recent Articles</h2>
          </div>
          <div className="blog-grid">
            {blogs.map((blog, i) => (
              <Link href="/" className="blog-card" key={i}>
                <div className="blog-image-wrap">
                  <img src={blog.img} alt={blog.title} className="blog-image" />
                </div>
                <div className="blog-content">
                  <span className="blog-category">{blog.cat}</span>
                  <h3 className="blog-card-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="blog-cta">
            <Link href="/" className="btn btn-outline">Browse All Articles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
