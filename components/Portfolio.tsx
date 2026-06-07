'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WORKS = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    alt: 'Brand identity design project',
    label: 'Brand Identity',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=700&q=80',
    alt: 'Abstract colorful design artwork',
    label: 'Digital',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80',
    alt: 'Design workspace overhead view',
    label: 'Print',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=700&q=80',
    alt: 'Colorful design tools',
    label: 'Packaging',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=700&q=80',
    alt: 'Typography and print materials',
    label: 'Typography',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=700&q=80',
    alt: 'Design concept on tablet',
    label: 'Large Format',
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const heading = sectionRef.current?.querySelector('.portfolio-heading');
    const items = sectionRef.current?.querySelectorAll('.portfolio-item');
    if (!heading || !items) return;

    gsap.from(heading, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: heading, start: 'top 88%' },
    });

    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0% 0 0 0)',
          opacity: 1,
          duration: 0.9,
          ease: 'power4.out',
          delay: (i % 3) * 0.08,
          scrollTrigger: {
            trigger: item,
            start: 'top 92%',
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      style={{ paddingTop: '9rem', paddingBottom: '9rem' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="portfolio-heading flex items-baseline justify-between pb-5"
          style={{ borderBottom: '1px solid oklch(14% 0.004 0)', marginBottom: '3px' }}
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
            The Work
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
            Portfolio
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3px',
          }}
        >
          {WORKS.map((work) => (
            <div
              key={work.id}
              className="portfolio-item relative group"
              style={{ aspectRatio: '4/3', overflow: 'hidden' }}
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.7s ease',
                }}
                className="group-hover:scale-105"
              />
              {/* Hover label */}
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    'linear-gradient(to top, oklch(5% 0.004 0 / 0.75) 0%, transparent 60%)',
                  transition: 'opacity 0.3s',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    color: 'oklch(96% 0.25 103)',
                    textTransform: 'uppercase',
                  }}
                >
                  {work.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
