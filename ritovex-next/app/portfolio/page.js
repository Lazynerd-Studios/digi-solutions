import Link from 'next/link';

export const metadata = {
  title: 'Portfolio',
};

const portfolioItems = [
  {
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=450&fit=crop',
    cat: 'Digital Signage',
    date: 'March 2025',
    title: 'Retail LED Video Wall — Metro Mall Lagos',
  },
  {
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=450&fit=crop',
    cat: 'Network Deployment',
    date: 'January 2025',
    title: 'Enterprise Network — FinTrust Headquarters',
  },
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=450&fit=crop',
    cat: 'Network Cabling',
    date: 'November 2024',
    title: 'Data Center Fiber — CloudNine Data Center',
  },
  {
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=450&fit=crop',
    cat: 'CCTV & Security',
    date: 'October 2024',
    title: 'Surveillance System — Horizon Towers Estate',
  },
  {
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop',
    cat: 'Digital Signage',
    date: 'August 2024',
    title: 'Interactive Kiosks — Airport Terminal 2',
  },
  {
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=450&fit=crop',
    cat: 'Network Cabling',
    date: 'June 2024',
    title: 'Structured Cabling — University Campus Expansion',
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Inner Banner */}
      <section className="section inner-banner" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Projects</span>
          </div>
          <h1 className="inner-banner-title">Our Projects</h1>
          <p className="inner-banner-desc">
            A showcase of IT infrastructure projects we have delivered across digital signage, network deployment, structured cabling, and security systems.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section portfolio" style={{ paddingTop: '60px' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Projects</span>
            </div>
            <h2 className="section-title center">Infrastructure We Have Built</h2>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item, i) => (
              <Link href="/portfolio" className="portfolio-card" key={i}>
                <div className="portfolio-image-wrap">
                  <img src={item.img} alt={item.title} className="portfolio-image" />
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

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-title">Have a Project in Mind?</h2>
            <p className="cta-desc">
              Let us bring your IT infrastructure vision to life. Get a free consultation and project estimate.
            </p>
            <Link href="/contact" className="btn btn-secondary">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
