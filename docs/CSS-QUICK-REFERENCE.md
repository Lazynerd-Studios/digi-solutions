# CSS Quick Reference - DigiSolutions

## 🎨 CSS Variables (Design Tokens)

```css
/* Colors */
--color-primary: #141414
--color-gray: #494852
--color-light-gray: #f6f6f9
--color-white: #ffffff
--color-secondary: #ff7a52

/* Spacing */
--section-gap: 110px
--container-max: 1200px

/* Border Radius */
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 24px
--radius-full: 100px

/* Transitions */
--transition-base: all 0.3s ease
```

## 🔧 Utility Classes

### Layout
```html
<div class="container">         <!-- Max-width container -->
<section class="section">       <!-- Standard section padding -->
```

### Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
```

### Section Headers
```html
<div class="section-header">
  <div class="section-subtitle-wrap center">
    <span class="section-subtitle">Subtitle</span>
  </div>
  <h2 class="section-title center">Title</h2>
  <p class="section-description center">Description</p>
</div>
```

## 📦 Component CSS Modules

### Navbar
```javascript
import styles from './Navbar.module.css';

<nav className={styles.navbar}>
  <div className={styles.navbarWrapper}>
    <div className={styles.navMenu}>
      <a className={styles.navLink}>Link</a>
    </div>
  </div>
</nav>
```

### Footer
```javascript
import styles from './Footer.module.css';

<footer className={styles.footer}>
  <div className={styles.footerWrapper}>
    <div className={styles.footerTop}>
      <!-- content -->
    </div>
  </div>
</footer>
```

### FAQ Accordion
```javascript
import styles from './FaqAccordion.module.css';

<div className={styles.faqList}>
  <div className={`${styles.faqItem} ${active ? styles.active : ''}`}>
    <button className={styles.faqQuestion}>Question</button>
    <div className={styles.faqAnswer}>Answer</div>
  </div>
</div>
```

### Gallery Lightbox
```javascript
import styles from './GalleryLightbox.module.css';

<div className={styles.lightboxOverlay}>
  <div className={styles.lightboxContent}>
    <button className={styles.lightboxClose}>×</button>
    <button className={`${styles.lightboxNav} ${styles.lightboxPrev}`}>‹</button>
    <div className={styles.lightboxImageWrap}>
      <img className={styles.lightboxImage} />
    </div>
    <button className={`${styles.lightboxNav} ${styles.lightboxNext}`}>›</button>
  </div>
</div>
```

## 🎯 Common Patterns

### Grid Layouts
```css
/* 3-column grid */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Responsive */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

### Card Hover Effect
```css
.card {
  transition: var(--transition-base);
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(20, 20, 20, 0.1);
}
```

### Image Zoom on Hover
```css
.imageWrap {
  overflow: hidden;
}

.image {
  transition: transform 0.5s ease;
}

.imageWrap:hover .image {
  transform: scale(1.05);
}
```

## 📱 Responsive Breakpoints

```css
/* Desktop First */
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Small Mobile */ }

/* Mobile First (Recommended) */
@media (min-width: 768px)  { /* Tablet and up */ }
@media (min-width: 1024px) { /* Desktop */ }
```

## 🎨 Color Usage

```css
/* Text */
color: var(--color-primary);    /* Headings */
color: var(--color-gray);       /* Body text */

/* Backgrounds */
background-color: var(--color-white);
background-color: var(--color-light-gray);
background-color: var(--color-primary);

/* Accents */
color: var(--color-secondary);  /* Highlights, CTAs */
```

## 🔤 Typography Scale

```css
/* Headings */
.banner-title { font-size: 60px; }      /* Hero */
.inner-banner-title { font-size: 56px; } /* Page headers */
.section-title { font-size: 48px; }     /* Section headers */
.cta-title { font-size: 48px; }         /* CTA */
.services-card-title { font-size: 28px; } /* Cards */
.process-title { font-size: 24px; }     /* Process steps */

/* Body */
body { font-size: 18px; }               /* Base */
.section-description { font-size: 18px; } /* Descriptions */
.services-card-desc { font-size: 16px; } /* Card text */
.nav-link { font-size: 15px; }          /* Navigation */
```

## 🎭 Animation Examples

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Ticker Scroll */
@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

## 📋 Checklist for New Components

- [ ] Create `ComponentName.module.css`
- [ ] Import in component: `import styles from './ComponentName.module.css'`
- [ ] Use scoped classes: `className={styles.className}`
- [ ] Use CSS variables for colors/spacing
- [ ] Add hover states with transitions
- [ ] Make it responsive (mobile-first)
- [ ] Test on all breakpoints
- [ ] Add comments for complex styles

## 🚀 Performance Tips

1. **Use CSS Modules** - Automatic code splitting
2. **Minimize specificity** - Avoid deep nesting
3. **Use CSS variables** - Better than inline styles
4. **Avoid @import in CSS** - Use in globals.css only
5. **Optimize animations** - Use transform/opacity
6. **Lazy load images** - Use Next.js Image component
7. **Remove unused CSS** - Regular audits

## 📚 File Organization

```
app/
├── styles/              # Global styles
│   ├── variables.css
│   ├── reset.css
│   ├── utilities.css
│   ├── shared-sections.css
│   └── [page-name].css
├── components/
│   ├── Component.js
│   └── Component.module.css
└── globals.css          # Main entry point
```

---

**Pro Tip**: Use browser DevTools to inspect CSS variables:
```javascript
// In browser console
getComputedStyle(document.documentElement).getPropertyValue('--color-primary')
```
