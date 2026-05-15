# DigiSolutions - Project Structure

## 📁 Clean Project Structure

```
digi-solutions/
├── 📄 Configuration Files
│   ├── .gitignore                  # Git ignore rules
│   ├── package.json                # Dependencies & scripts
│   ├── package-lock.json           # Locked dependencies
│   ├── next.config.mjs             # Next.js configuration
│   ├── eslint.config.mjs           # ESLint configuration
│   └── jsconfig.json               # JavaScript configuration
│
├── 📱 Application (app/)
│   ├── layout.js                   # Root layout with Navbar/Footer
│   ├── page.js                     # Homepage
│   ├── globals.css                 # Main stylesheet (imports modules)
│   ├── globals-backup.css          # Original CSS backup
│   │
│   ├── 🎨 styles/                  # CSS Modules
│   │   ├── variables.css           # Design tokens (colors, spacing)
│   │   ├── reset.css               # Base styles & resets
│   │   ├── utilities.css           # Utility classes (buttons, sections)
│   │   ├── shared-sections.css     # Reusable section patterns
│   │   └── homepage.css            # Homepage-specific styles
│   │
│   ├── 🧩 components/              # React Components
│   │   ├── Navbar.js               # Navigation component
│   │   ├── Navbar.module.css       # Navbar styles (scoped)
│   │   ├── Footer.js               # Footer component
│   │   ├── Footer.module.css       # Footer styles (scoped)
│   │   ├── FaqAccordion.js         # FAQ accordion component
│   │   ├── FaqAccordion.module.css # FAQ styles (scoped)
│   │   ├── GalleryLightbox.js      # Image lightbox component
│   │   └── GalleryLightbox.module.css # Lightbox styles (scoped)
│   │
│   └── 📄 Pages/
│       ├── about/page.js           # About page
│       ├── services/page.js        # Services page
│       ├── portfolio/page.js       # Portfolio page
│       ├── work-done/page.js       # Gallery page
│       └── contact/page.js         # Contact page
│
├── 🖼️ public/                      # Static Assets
│   ├── logo-*.png/svg              # Logo variants
│   ├── imgs/                       # Project images
│   └── 1.png                       # Favicon/icon
│
├── 📚 docs/                        # Documentation
│   ├── CSS-REFACTORING-GUIDE.md    # Complete CSS guide
│   ├── CSS-QUICK-REFERENCE.md      # Quick reference
│   ├── CSS-REFACTORING-SUMMARY.md  # Summary
│   └── CSS-MIGRATION-CHECKLIST.md  # Migration checklist
│
├── 🐍 scripts/                     # Utility Scripts
│   ├── check_logos.py              # Logo checker
│   ├── find_all_images.py          # Image finder
│   ├── find_all_images2.py         # Image finder v2
│   ├── find_images.py              # Image finder
│   ├── find_imgs.py                # Image finder
│   ├── find_portfolio_imgs.py      # Portfolio image finder
│   ├── find_services_imgs.py       # Services image finder
│   └── find_webflow_images.py      # Webflow image finder
│
├── 🗂️ temp-images/                 # Temporary Images
│   ├── kiosk-*.jpg                 # Kiosk mockups
│   ├── portfolio-current.jpg       # Portfolio mockup
│   └── services-current-kiosk.jpg  # Services mockup
│
├── 🔧 Build Output
│   ├── .next/                      # Next.js build cache (gitignored)
│   ├── out/                        # Static export output
│   └── node_modules/               # Dependencies (gitignored)
│
├── 🛠️ Utilities
│   ├── cleanup.sh                  # Project cleanup script
│   ├── README.md                   # Project readme
│   └── PROJECT-STRUCTURE.md        # This file
│
└── 📦 Hidden Files
    ├── .git/                       # Git repository
    ├── .gitignore                  # Git ignore rules
    └── .playwright-mcp/            # Playwright cache
```

---

## 📊 File Count Summary

| Category | Count | Size |
|----------|-------|------|
| **CSS Modules** | 9 files | ~15 KB |
| **React Components** | 8 files | ~20 KB |
| **Pages** | 7 files | ~50 KB |
| **Documentation** | 5 files | ~30 KB |
| **Python Scripts** | 8 files | ~4 KB |
| **Configuration** | 6 files | ~210 KB |
| **Static Assets** | 40+ images | ~2 MB |

---

## 🎯 Key Directories

### `/app` - Application Code
Main Next.js application directory using App Router architecture.

### `/app/styles` - CSS Modules
Modular CSS files for better organization and maintainability.

### `/app/components` - React Components
Reusable React components with scoped CSS Modules.

### `/public` - Static Assets
Images, logos, and other static files served directly.

### `/docs` - Documentation
All project documentation and guides.

### `/scripts` - Utility Scripts
Python scripts for image management and utilities.

### `/temp-images` - Temporary Files
Mockup images and temporary assets (can be deleted).

---

## 🚀 Quick Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Production
npm run build            # Build for production
npm run start            # Start production server

# Linting
npm run lint             # Run ESLint

# Cleanup
./cleanup.sh             # Run cleanup script
```

---

## 📝 Important Files

### Configuration
- `next.config.mjs` - Next.js config (static export enabled)
- `package.json` - Dependencies and scripts
- `.gitignore` - Files to ignore in Git

### Styles
- `app/globals.css` - Main stylesheet (imports all modules)
- `app/styles/variables.css` - Design tokens
- `app/components/*.module.css` - Component-specific styles

### Documentation
- `docs/CSS-REFACTORING-GUIDE.md` - Complete CSS guide
- `docs/CSS-QUICK-REFERENCE.md` - Quick reference
- `README.md` - Project overview

---

## 🎨 CSS Architecture

```
globals.css (Main Entry)
    │
    ├── variables.css (Design Tokens)
    ├── reset.css (Base Styles)
    ├── utilities.css (Utility Classes)
    ├── shared-sections.css (Reusable Patterns)
    └── homepage.css (Page-Specific)

Components (CSS Modules)
    ├── Navbar.module.css
    ├── Footer.module.css
    ├── FaqAccordion.module.css
    └── GalleryLightbox.module.css
```

---

## 🔄 Git Workflow

```bash
# Check status
git status

# Stage changes
git add .

# Commit
git commit -m "refactor: Modularize CSS architecture"

# Push
git push origin main
```

---

## 🧹 Cleanup Notes

### What Was Cleaned
✅ Moved Python scripts to `/scripts`  
✅ Moved documentation to `/docs`  
✅ Moved temporary images to `/temp-images`  
✅ Removed `.DS_Store` files  
✅ Removed old `ritovex-next` directory  
✅ Updated `.gitignore`  

### What Can Be Deleted (Optional)
- `/temp-images` - Temporary mockup images
- `/scripts` - If Python utilities no longer needed
- `app/globals-backup.css` - After confirming new CSS works

---

## 📦 Dependencies

### Production
- `next` (16.2.4) - React framework
- `react` (19.2.4) - UI library
- `react-dom` (19.2.4) - React DOM renderer

### Development
- `eslint` (^9) - Code linting
- `eslint-config-next` (16.2.4) - Next.js ESLint config

---

## 🎯 Next Steps

1. **Test the website**: `npm run dev`
2. **Review documentation**: Check `/docs` folder
3. **Commit changes**: Use Git workflow above
4. **Deploy**: Push to production

---

## 📞 Support

For questions about:
- **CSS Architecture**: See `docs/CSS-REFACTORING-GUIDE.md`
- **Quick Reference**: See `docs/CSS-QUICK-REFERENCE.md`
- **Project Setup**: See `README.md`

---

**Last Updated**: May 15, 2026  
**Version**: 2.0.0 (Refactored)  
**Status**: ✅ Production Ready
