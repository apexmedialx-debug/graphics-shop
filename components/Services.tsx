'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { n: '01', name: 'Brand Identity', desc: 'Logos, marks & full visual identity systems' },
  { n: '02', name: 'Print Design', desc: 'Brochures, cards, stationery & publications' },
  { n: '03', name: 'Large Format', desc: 'Banners, signage, billboards & exhibitions' },
  { n: '04', name: 'Packaging', desc: 'Product packaging, labels & unboxing design' },
  { n: '05', name: 'Digital Assets', desc: 'Social graphics, web visuals, ads & UI' },
  { n: '06', name: 'Motion Graphics', desc: 'Short animations & video assets for social' },
];

const HEADING_WORDS = ['What', 'We', 'Do'];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const headingEl = sectionRef.current?.querySelector('.services-heading-wrap');
    const words = sectionRef.current?.querySelectorAll('.heading-word');
    const rows = sectionRef.current?.querySelectorAll('.service-row');
    const label = sectionRef.current?.querySelector('.section-label');
    if (!words || !rows) return;

    // Heading word reveal
    gsap.fromTo(
      words,
      { y: '110%' },
      {
        y: '0%',
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: headingEl, start: 'top 88%' },
      }
    );

    // Section label fade
    gsap.from(label, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: headingEl, start: 'top 88%' },
      delay: 0.2,
    });

    // Service row reveals
    rows.forEach((row, i) => {
      gsap.fromTo(
        row,
        { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0 0% 0)',
          opacity: 1,
          duration: 0.65,
          ease: 'power3.out',
          delay: i * 0.055,
          scrollTrigger: { trigger: row, start: 'top 92%' },
        }
      );
    });
  }, { scope: sectionRef });

  const onRowEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const row = e.currentTarget;
    row.style.backgroundColor = 'oklch(9% 0.004 0)';
    row.style.paddingLeft = '0.75rem';
    row.style.paddingRight = '0.75rem';
    const arrow = row.querySelector('.row-arrow') as HTMLElement;
    if (arrow) { arrow.style.opacity = '1'; arrow.style.transform = 'translateX(0)'; }
  };

  const onRowLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const row = e.currentTarget;
    row.style.backgroundColor = 'transparent';
    row.style.paddingLeft = '0px';
    row.style.paddingRight = '0px';
    const arrow = row.querySelector('.row-arrow') as HTMLElement;
    if (arrow) { arrow.style.opacity = '0'; arrow.style.transform = 'translateX(-8px)'; }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ paddingTop: '9rem', paddingBottom: '9rem' }}
    >
      {/* Subtle corner image */}
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=50"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '320px',
          height: '420px',
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: 0.07,
          filter: 'grayscale(100%)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <div
          className="services-heading-wrap flex items-end justify-between pb-5"
          style={{ borderBottom: '1px solid oklch(14% 0.004 0)', marginBottom: '0' }}
        >
          {/* Word-split heading */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(36px, 6vw, 88px)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              overflow: 'hidden',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0 0.25em',
              alignItems: 'flex-end',
            }}
          >
            {HEADING_WORDS.map((word) => (
              <span
                key={word}
                style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
              >
                <span className="heading-word" style={{ display: 'inline-block', color: 'oklch(93% 0.005 80)' }}>
                  {word}
                </span>
              </span>
            ))}
          </h2>

          <span
            className="section-label hidden md:block"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: 'oklch(28% 0.005 0)',
              textTransform: 'uppercase',
              paddingBottom: '2px',
            }}
          >
            Services
          </span>
        </div>

        {/* Service rows */}
        <div>
          {SERVICES.map(({ n, name, desc }) => (
            <div
              key={n}
              className="service-row flex items-center gap-6 md:gap-10"
              style={{
                padding: '1.75rem 0',
                borderBottom: '1px solid oklch(11% 0.004 0)',
                transition: 'background-color 0.25s, padding-left 0.25s, padding-right 0.25s',
              }}
              onMouseEnter={onRowEnter}
              onMouseLeave={onRowLeave}
            >
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  color: 'oklch(96% 0.25 103)',
                  letterSpacing: '0.1em',
                  flexShrink: 0,
                  width: '2.2rem',
                }}
              >
                {n}
              </span>
              <h3
                className="flex-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(22px, 3.5vw, 48px)',
                  letterSpacing: '-0.025em',
                  color: 'oklch(93% 0.005 80)',
                  lineHeight: 1.05,
                }}
              >
                {name}
              </h3>
              <p
                className="hidden md:block"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  lineHeight: 1.6,
                  color: 'oklch(38% 0.005 0)',
                  maxWidth: '28ch',
                  textAlign: 'right',
                  flexShrink: 0,
                }}
              >
                {desc}
              </p>
              {/* Hover arrow */}
              <span
                className="row-arrow hidden md:block"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'oklch(96% 0.25 103)',
                  flexShrink: 0,
                  opacity: 0,
                  transform: 'translateX(-8px)',
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
              >
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
