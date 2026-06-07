'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const QUOTES = [
  {
    id: 1,
    quote:
      'They redesigned our entire brand system in two weeks. Every touchpoint — print, digital, packaging — looked like it cost ten times what we paid.',
    name: 'Marcus Webb',
    company: 'Founder, Volta Coffee',
  },
  {
    id: 2,
    quote:
      'The large-format work for our trade show stopped people cold. We closed four deals at the event. Pure ROI from design.',
    name: 'Sarah Okafor',
    company: 'Head of Marketing, Fieldstone Materials',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const blocks = sectionRef.current?.querySelectorAll('.quote-block');
    if (!blocks) return;

    blocks.forEach((block) => {
      gsap.from(block, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: block, start: 'top 88%' },
      });
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      style={{ paddingTop: '9rem', paddingBottom: '9rem' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-16">
          {QUOTES.map((q) => (
            <div
              key={q.id}
              className="quote-block"
              style={{
                borderTop: '1px solid oklch(14% 0.004 0)',
                paddingTop: '3rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 3.5vw, 48px)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: 'oklch(96% 0.25 103)',
                  maxWidth: '28ch',
                  marginBottom: '2rem',
                }}
              >
                &ldquo;{q.quote}&rdquo;
              </p>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    color: 'oklch(93% 0.005 80)',
                    textTransform: 'uppercase',
                    display: 'block',
                  }}
                >
                  {q.name}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    color: 'oklch(38% 0.005 0)',
                    textTransform: 'uppercase',
                    marginTop: '4px',
                    display: 'block',
                  }}
                >
                  {q.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
