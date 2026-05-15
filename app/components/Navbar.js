'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(`.${styles.navbar}`);
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.06)';
        } else {
          navbar.style.boxShadow = 'none';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Projects' },
    { href: '/work-done', label: 'Work Done' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navbarWrapper}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo-blackp.png"
            alt="DigiSolutions Logo"
            className={styles.logoImg}
            width={150}
            height={36}
          />
        </Link>
        <div className={`${styles.navMenu}${menuOpen ? ' ' + styles.open : ''}`} id="navMenu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink}${pathname === link.href ? ' ' + styles.active : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className={styles.navActions}>
          <Link href="/contact" className="btn btn-primary" onClick={closeMenu}>
            Get a Free Quote
          </Link>
          <button
            className={`${styles.mobileMenuBtn}${menuOpen ? ' ' + styles.open : ''}`}
            id="mobileMenuBtn"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
