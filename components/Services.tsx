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

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const heading = sectionRef.current?.querySelector('.services-heading');
    const rows = sectionRef.current?.querySelectorAll('.service-row');
    if (!heading || !rows) return;

    gsap.from(heading, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: heading,
        start: 'top 88%',
      },
    });

    rows.forEach((row, i) => {
      gsap.fromTo(
        row,
        { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0 0% 0)',
          opacity: 1,
          duration: 0.65,
          ease: 'power3.out',
          delay: i * 0.06,
          scrollTrigger: {
            trigger: row,
            start: 'top 90%',
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ paddingTop: '9rem', paddingBottom: '9rem' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="services-heading flex items-baseline justify-between pb-5"
          style={{ borderBottom: '1px solid oklch(14% 0.004 0)', marginBottom: '0' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(36px, 6vw, 88px)',
              letterSpacing: '-0.03em',
              color: 'oklch(93% 0.005 80)',
            }}
          >
            What We Do
          </h2>
          <span
            className="hidden md:block"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: 'oklch(28% 0.005 0)',
              textTransform: 'uppercase',
            }}
          >
            Services
          </span>
        </div>

        <div>
          {SERVICES.map(({ n, name, desc }) => (
            <div
              key={n}
              className="service-row flex items-baseline gap-6 md:gap-10"
              style={{
                padding: '1.75rem 0',
                borderBottom: '1px solid oklch(11% 0.004 0)',
              }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
