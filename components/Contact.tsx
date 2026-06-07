'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const left = sectionRef.current?.querySelector('.contact-left');
    const right = sectionRef.current?.querySelector('.contact-right');
    if (!left || !right) return;

    gsap.from(left, {
      x: -40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
    gsap.from(right, {
      x: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      delay: 0.15,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
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
          {/* Left: heading */}
          <div className="contact-left">
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.3em',
                color: 'oklch(96% 0.25 103)',
                textTransform: 'uppercase',
                marginBottom: '2rem',
              }}
            >
              Get in Touch
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(40px, 6vw, 88px)',
                letterSpacing: '-0.035em',
                lineHeight: 1.0,
                color: 'oklch(93% 0.005 80)',
                marginBottom: '2rem',
              }}
            >
              Let&rsquo;s Build<br />Something.
            </h2>
            <p
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
                marginBottom: '0',
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
