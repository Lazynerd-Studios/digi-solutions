import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`section ${styles.footer}`}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <Link href="/" className={styles.footerLogo}>
                <Image
                  src="/logo-whitep.png"
                  alt="DigiSolutions Logo"
                  className={styles.footerLogoImg}
                  width={150}
                  height={36}
                />
              </Link>
              <p className={styles.footerTagline}>
                IT infrastructure experts specializing in digital signage, network deployment, and structured cabling for modern businesses.
              </p>
            </div>
            <div className={styles.footerLinksGrid}>
              <div className={styles.footerLinksCol}>
                <h4 className={styles.footerLinksTitle}>Services</h4>
                <ul className={styles.footerLinksList}>
                  <li><Link href="/services">Digital Signage</Link></li>
                  <li><Link href="/services">Network Deployment</Link></li>
                  <li><Link href="/services">Network Cabling</Link></li>
                  <li><Link href="/services">CCTV & Security</Link></li>
                  <li><Link href="/services">IT Management</Link></li>
                </ul>
              </div>
              <div className={styles.footerLinksCol}>
                <h4 className={styles.footerLinksTitle}>Company</h4>
                <ul className={styles.footerLinksList}>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/portfolio">Projects</Link></li>
                </ul>
              </div>
              <div className={styles.footerLinksCol}>
                <h4 className={styles.footerLinksTitle}>Contact</h4>
                <ul className={styles.footerLinksList}>
                  <li>14B Adetokunbo Ademola St</li>
                  <li>Victoria Island, Lagos</li>
                  <li>+234 800 123 4567</li>
                  <li>info@digisolutions.ng</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.footerCopyright}>&copy; 2025 DigiSolutions. All rights reserved.</p>
            <div className={styles.footerSocial}>
              <a href="#" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
