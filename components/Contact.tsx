'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HEADING_LINES = [
  ['Let’s', 'Build'],
  ['Something.'],
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const headingEl = sectionRef.current?.querySelector('.contact-heading');
    const words = sectionRef.current?.querySelectorAll('.heading-word');
    const label = sectionRef.current?.querySelector('.contact-label');
    const desc = sectionRef.current?.querySelector('.contact-desc');
    const right = sectionRef.current?.querySelector('.contact-right');

    if (!words) return;

    gsap.from(label, {
      opacity: 0,
      y: 8,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: { trigger: headingEl, start: 'top 88%' },
    });

    gsap.fromTo(
      words,
      { y: '110%' },
      {
        y: '0%',
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.07,
        scrollTrigger: { trigger: headingEl, start: 'top 88%' },
        delay: 0.1,
      }
    );

    gsap.from(desc, {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: headingEl, start: 'top 88%' },
      delay: 0.5,
    });

    gsap.from(right, {
      x: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      delay: 0.2,
    });
  }, { scope: sectionRef });

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        paddingTop: '9rem',
        paddingBottom: '9rem',
        backgroundColor: 'oklch(9% 0.004 0)',
        borderTop: '1px solid oklch(14% 0.004 0)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {/* Left */}
          <div>
            <p
              className="contact-label"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.3em',
                color: 'oklch(96% 0.25 103)',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Get in Touch
            </p>

            {/* Word-split heading */}
            <h2
              className="contact-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(40px, 6vw, 88px)',
                letterSpacing: '-0.035em',
                lineHeight: 1.0,
                marginBottom: '2rem',
              }}
            >
              {HEADING_LINES.map((line, li) => (
                <span
                  key={li}
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.25em' }}
                >
                  {line.map((word) => (
                    <span
                      key={word}
                      style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
                    >
                      <span
                        className="heading-word"
                        style={{ display: 'inline-block', color: 'oklch(93% 0.005 80)' }}
                      >
                        {word}
                      </span>
                    </span>
                  ))}
                </span>
              ))}
            </h2>

            <p
              className="contact-desc"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                lineHeight: 1.7,
                color: 'oklch(38% 0.005 0)',
                maxWidth: '38ch',
              }}
            >
              Tell us what you&rsquo;re building and we&rsquo;ll tell you how we&rsquo;d make it hit harder.
              Most projects start with a short call.
            </p>
          </div>

          {/* Right: form */}
          <div className="contact-right flex flex-col gap-0">
            <input
              type="text"
              placeholder="Your name"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                letterSpacing: '0.05em',
                color: 'oklch(93% 0.005 80)',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid oklch(20% 0.005 0)',
                padding: '1rem 0',
                outline: 'none',
                width: '100%',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'oklch(96% 0.25 103)')}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'oklch(20% 0.005 0)')}
            />
            <input
              type="email"
              placeholder="Email address"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                letterSpacing: '0.05em',
                color: 'oklch(93% 0.005 80)',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid oklch(20% 0.005 0)',
                padding: '1rem 0',
                outline: 'none',
                width: '100%',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'oklch(96% 0.25 103)')}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'oklch(20% 0.005 0)')}
            />
            <textarea
              placeholder="Tell us about the project"
              rows={4}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                letterSpacing: '0.05em',
                color: 'oklch(93% 0.005 80)',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid oklch(20% 0.005 0)',
                padding: '1rem 0',
                outline: 'none',
                width: '100%',
                resize: 'none',
                marginBottom: '2.5rem',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'oklch(96% 0.25 103)')}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'oklch(20% 0.005 0)')}
            />
            <button
              type="button"
              style={{
                alignSelf: 'flex-start',
                padding: '16px 36px',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                backgroundColor: 'oklch(96% 0.25 103)',
                color: 'oklch(5% 0.004 0)',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'oklch(100% 0 0)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'oklch(96% 0.25 103)')}
            >
              Send It →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
