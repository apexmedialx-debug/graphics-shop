'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%&*';
const HEADLINE = 'GRAPHICS THAT HIT HARD.';

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaWrapRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const el = headlineRef.current;
    if (!el) return;

    const text = el.textContent || '';
    gsap.set(el, { opacity: 0 });
    gsap.set([subRef.current, ctaWrapRef.current, lineRef.current], { opacity: 0 });
    gsap.set(labelRef.current, { opacity: 0, y: 8 });

    const tl = gsap.timeline({ delay: 0.35 });

    tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });

    const proxy = { n: 0 };
    tl.set(el, { opacity: 1 });
    tl.to(
      proxy,
      {
        n: text.length,
        duration: 1.6,
        ease: 'power1.inOut',
        onUpdate() {
          const revealed = Math.floor(proxy.n);
          let out = '';
          for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
              out += ' ';
            } else if (i < revealed) {
              out += text[i];
            } else {
              out += CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }
          el.textContent = out;
        },
        onComplete() {
          el.textContent = text;
        },
      },
      '-=0.1'
    );

    tl.to(lineRef.current, { opacity: 1, duration: 0.4 }, '-=0.4');
    tl.to(subRef.current, { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2');
    tl.to(ctaWrapRef.current, { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3');
  });

  const onMouseMove = (e: React.MouseEvent) => {
    const btn = ctaRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    gsap.to(btn, {
      x: (e.clientX - cx) * 0.35,
      y: (e.clientY - cy) * 0.35,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const onMouseLeave = () => {
    gsap.to(ctaRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  return (
    <section
      id="work"
      className="relative flex flex-col justify-end"
      style={{ minHeight: '100dvh', paddingTop: '80px', paddingBottom: '8vh' }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <p
          ref={labelRef}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: 'oklch(96% 0.25 103)',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
          }}
        >
          Premium Graphics &amp; Print
        </p>

        <h1
          ref={headlineRef}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(52px, 11.5vw, 168px)',
            letterSpacing: '-0.035em',
            lineHeight: 1.0,
            color: 'oklch(93% 0.005 80)',
            marginBottom: '3rem',
          }}
        >
          {HEADLINE}
        </h1>

        <div
          ref={lineRef}
          style={{
            height: '1px',
            backgroundColor: 'oklch(14% 0.004 0)',
            marginBottom: '2.5rem',
          }}
        />

        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <p
            ref={subRef}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              letterSpacing: '0.15em',
              color: 'oklch(38% 0.005 0)',
              textTransform: 'uppercase',
            }}
          >
            Print · Digital · Brand Identity · Packaging
          </p>

          <div
            ref={ctaWrapRef}
            style={{ display: 'inline-flex', padding: '40px', margin: '-40px' }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            <a
              ref={ctaRef}
              href="#portfolio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 32px',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                backgroundColor: 'oklch(96% 0.25 103)',
                color: 'oklch(5% 0.004 0)',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = 'oklch(100% 0 0)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'oklch(96% 0.25 103)')
              }
            >
              See the Work
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
