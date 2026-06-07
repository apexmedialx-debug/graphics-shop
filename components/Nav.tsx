'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const LINKS = ['Work', 'Services', 'Pricing', 'Contact'];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2,
    });
  }, { scope: navRef });

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'oklch(5% 0.004 0 / 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid oklch(14% 0.004 0)',
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 flex items-center justify-between"
        style={{ height: '68px' }}
      >
        {/* Brand */}
        <a
          href="#work"
          style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '1px', lineHeight: 1 }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '22px',
              letterSpacing: '-0.04em',
              color: 'oklch(96% 0.25 103)',
              lineHeight: 1,
            }}
          >
            FORGE
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '8px',
              letterSpacing: '0.35em',
              color: 'oklch(35% 0.005 0)',
              textTransform: 'uppercase',
            }}
          >
            STUDIO
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  letterSpacing: '0.22em',
                  color: 'oklch(38% 0.005 0)',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(93% 0.005 80)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(38% 0.005 0)')}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
