# Champions HR Consultancy - React Application

A faithful 1:1 React recreation of [Champions HR Consultancy Limited](https://6a3ea579ecd2f7007d30e43d--cosmic-crostata-11643d.netlify.app/).

## Overview

This application faithfully reproduces the complete DOM structure, layout, typography (Inter & Oswald fonts), exact SVG icons, colors, sections, responsive behaviors, and content from the original website into a modern, component-driven React architecture.

### Included Sections & Components:
1. **Navbar** (`src/components/Navbar.jsx`):
   - Brand logo with highlighted HR styling (`#FF6B35`).
   - Active scroll-spy navigation tracking all sections (`#home`, `#services`, `#who-we-are`, `#about`, `#why-choose`, `#team`, `#careers`, `#contact`).
   - Responsive mobile navigation burger menu with animated drawer toggle.
   - Dynamic shadow on scroll.
2. **Hero Section** (`src/components/Hero.jsx`):
   - Full-bleed background with overlay and downloaded hero imagery.
   - Exact title, subtitle, and primary/secondary call-to-action buttons.
   - Animated statistics counters (Years of HR Excellence, Successful Placements, Client Retention, Corporate Clients).
3. **Services Section** (`src/components/Services.jsx`):
   - All 14 HR services complete with their custom SVG icons, titles, and descriptions:
     1. Recruitment and Talent Acquisition
     2. Executive Search and Headhunting
     3. HR Outsourcing Services
     4. Performance Management Systems
     5. Employee Relations and Conflict Resolution
     6. Training and Development Programs
     7. HR Policy and Procedure Development
     8. Compensation and Benefits Management
     9. Payroll Administration Support
     10. Organizational Development and Restructuring
     11. HR Compliance and Labor Law Advisory
     12. Employee Engagement and Retention Strategies
     13. HR Audits and Workforce Planning
     14. Business Development and HR Advisory Services
4. **Executive Insight (About)** (`src/components/About.jsx`):
   - Strategic overview with leadership insights, SVG graphic illustration, and core value badges.
5. **Why Choose Us** (`src/components/WhyChoose.jsx`):
   - Value proposition with highlight cards.
6. **Who We Are** (`src/components/WhoWeAre.jsx`):
   - Mission statement and company profile.
7. **Team Section** (`src/components/Team.jsx`):
   - Leadership profiles:
     - Kevin Chahenza (CEO)
     - Kallah Stephen Nzyoka (Managing Director)
     - Antony Kimani (Lead Recruiter)
     - Bonfas Othina (IT Manager)
8. **Careers Section** (`src/components/Careers.jsx`):
   - Career opportunities and company culture overview.
9. **Contact Section** (`src/components/Contact.jsx`):
   - Location (Nairobi, Kenya), email (info@championshr.co.ke), and phone (0141209499).
   - Functional interactive form with validation, submission state, and response alerts.
10. **Footer** (`src/components/Footer.jsx`):
    - Company branding, quick links, services directory, social links (LinkedIn, Twitter, Facebook), and copyright notice.

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
The optimized static build will be in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

