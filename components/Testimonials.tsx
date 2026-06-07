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
      const wordInners = block.querySelectorAll('.q-word-inner');
      const attr = block.querySelector('.quote-attr');
      const openQuote = block.querySelector('.open-quote');
      const mark = block.querySelector('.quote-mark');

      gsap.from(mark, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: block, start: 'top 88%' },
      });

      gsap.fromTo(
        wordInners,
        { y: '115%' },
        {
          y: '0%',
          duration: 0.52,
          ease: 'power2.out',
          stagger: 0.022,
          scrollTrigger: { trigger: block, start: 'top 88%' },
          delay: 0.15,
        }
      );

      gsap.from(attr, {
        y: 18,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: block, start: 'top 88%' },
        delay: 0.5,
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
              style={{ borderTop: '1px solid oklch(14% 0.004 0)', paddingTop: '3rem' }}
            >
              {/* Opening mark */}
              <span
                className="quote-mark"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '80px',
                  lineHeight: 0.7,
                  color: 'oklch(96% 0.25 103 / 0.25)',
                  marginBottom: '1rem',
                  letterSpacing: '-0.05em',
                }}
              >
                &ldquo;
              </span>

              {/* Word-by-word quote */}
              <p
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  columnGap: '0.32em',
                  rowGap: '0.15em',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(22px, 3vw, 42px)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.2,
                  color: 'oklch(96% 0.25 103)',
                  maxWidth: '32ch',
                  marginBottom: '2rem',
                }}
              >
                {q.quote.split(' ').map((word, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-block',
                      overflow: 'hidden',
                      verticalAlign: 'bottom',
                      lineHeight: 1.25,
                    }}
                  >
                    <span className="q-word-inner" style={{ display: 'inline-block' }}>
                      {word}
                    </span>
                  </span>
                ))}
              </p>

              {/* Attribution */}
              <div className="quote-attr">
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
