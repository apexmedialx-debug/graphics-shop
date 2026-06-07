## 2026-06-07 — Initial build: Graphics Shop

### Project setup
- Scaffolded Next.js 16.2.7 with TypeScript and Tailwind v4
- Resolved pnpm 10 `allowBuilds` config (fix: used YAML object format `sharp: true`)
- Installed GSAP 3.15.0 + @gsap/react 2.1.2
- Pushed to GitHub: https://github.com/apexmedialx-debug/graphics-shop
- Deployed to Vercel: https://graphics-shop.vercel.app

### Design system
- Fonts: Space Grotesk 700 (display) + IBM Plex Mono (body/mono) via next/font/google
- Palette: oklch(5%) void black + oklch(96% 0.25 103) neon yellow + oklch(93%) chalk
- Zero corner radius throughout
- ONE container: max-w-7xl mx-auto px-6 on every section

### Sections built
- Nav: fixed translucent, Space Grotesk brand mark, IBM Plex Mono nav links
- Hero: GSAP text scramble headline (1.6s), magnetic hover CTA button
- Services: 6 numbered line items with clip-path scroll reveal
- Portfolio: 3×2 grid, 6 Unsplash images, clip-path reveal + hover label
- Pricing: 3 tiers (Starter / Studio / Enterprise), neon yellow highlight on Studio
- Testimonials: 2 large quotes in neon yellow
- Contact: 2-column layout with line-based form
- Footer: single-line with brand mark + year
