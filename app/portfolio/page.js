import Link from 'next/link';
import Image from 'next/image';

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
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=450&fit=crop',
    cat: 'Network Cabling',
    date: 'November 2024',
    title: 'Data Center Fiber — CloudNine Data Center',
  },
  {
    img: '/hospi/WhatsApp Image 2026-05-12 at 18.59.06.jpeg',
    cat: 'Healthcare Digital Signage',
    date: 'September 2024',
    title: 'Hospital Patient Info Display System',
  },
  {
    img: '/hospi/WhatsApp Image 2026-05-12 at 18.59.07.jpeg',
    cat: 'Hospital Room Displays',
    date: 'July 2024',
    title: 'Patient Bedside Information Displays',
  },
  {
    img: '/pos/WhatsApp Image 2026-05-12 at 18.59.41.jpeg',
    cat: 'POS Installation',
    date: 'March 2024',
    title: 'POS System — Metro Retail Chain Lagos',
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
        <div className="container" style={{ marginTop: '60px' }}>
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1320&h=500&fit=crop"
            alt="DigiSolutions Projects"
            style={{ width: '100%', borderRadius: '16px', objectFit: 'cover' }}
            width={1320}
            height={500}
          />
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
                  <Image src={item.img} alt={item.title} className="portfolio-image" width={600} height={400} />
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

      {/* Work Done Link */}
      <section className="section" style={{ paddingTop: 0, textAlign: 'center' }}>
        <div className="container">
          <Link href="/work-done" className="btn btn-outline">View Our Work Gallery</Link>
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
