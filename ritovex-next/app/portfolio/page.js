import Link from 'next/link';

export const metadata = {
  title: 'Portfolio',
};

const portfolioItems = [
  {
    img: 'https://cdn.prod.website-files.com/688a6c3373e0fdb14fbef689/68a8d02d50c1399d195e2285_Work%20Thumbnail4.jpg',
    cat: 'Web Development',
    date: 'August 23, 2025',
    title: 'SmartCity Traffic Solution',
  },
  {
    img: 'https://cdn.prod.website-files.com/688a6c3373e0fdb14fbef689/68b35ad3c1cd99f5b1a47999_Portfolios%20Image2.jpg',
    cat: 'Web Development',
    date: 'August 23, 2025',
    title: 'ShopEasy E-Commerce Platform',
  },
  {
    img: 'https://cdn.prod.website-files.com/688a6c3373e0fdb14fbef689/68a8ce8b7d0302aff8503cf5_Work%20Thumbnail2.jpg',
    cat: 'Web Development',
    date: 'August 23, 2025',
    title: 'MedTrack Healthcare App',
  },
  {
    img: 'https://cdn.prod.website-files.com/688a6c3373e0fdb14fbef689/68a8ce127eb5a6e00915f3c7_Work%20Thumbnail1.jpg',
    cat: 'Product Design',
    date: 'July 15, 2025',
    title: 'FinTech Dashboard',
  },
  {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop',
    cat: 'Branding',
    date: 'June 28, 2025',
    title: 'CloudSync SaaS Platform',
  },
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop',
    cat: 'Web Design',
    date: 'May 10, 2025',
    title: 'DataViz Analytics Tool',
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
            <span>Portfolio</span>
          </div>
          <h1 className="inner-banner-title">Our Portfolios</h1>
          <p className="inner-banner-desc">
            From groundbreaking technological innovations to impactful community development initiatives, our work reflects our commitment to excellence.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section portfolio" style={{ paddingTop: '60px' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle-wrap center">
              <span className="section-subtitle">Portfolio</span>
            </div>
            <h2 className="section-title center">Explore Our Real Works</h2>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item, i) => (
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
