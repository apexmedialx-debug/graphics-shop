'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PLANS = [
  {
    name: 'Starter',
    price: '£499',
    unit: 'per project',
    highlight: false,
    features: [
      '1 core deliverable',
      'Up to 2 revision rounds',
      'Print-ready files',
      '5-day turnaround',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Studio',
    price: '£1,299',
    unit: 'per project',
    highlight: true,
    features: [
      'Full brand system or campaign',
      'Unlimited revisions',
      'Print + digital files',
      'Dedicated designer',
      'Priority 3-day delivery',
    ],
    cta: 'Start a Project',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    unit: 'retainer or campaign',
    highlight: false,
    features: [
      'Ongoing design partnership',
      'Motion & large format',
      'Dedicated account manager',
      'Monthly design credits',
      'Same-day turnaround',
    ],
    cta: 'Let\'s Talk',
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const heading = sectionRef.current?.querySelector('.pricing-heading');
    const cols = sectionRef.current?.querySelectorAll('.pricing-col');
    if (!heading || !cols) return;

    gsap.from(heading, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: heading, start: 'top 88%' },
    });

    cols.forEach((col, i) => {
      gsap.from(col, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay: i * 0.12,
        scrollTrigger: { trigger: col, start: 'top 88%' },
      });
    });
  }, { scope: sectionRef });

  return (
    <section
      id="pricing"
      ref={sectionRef}
      style={{
        paddingTop: '9rem',
        paddingBottom: '9rem',
        backgroundColor: 'oklch(9% 0.004 0)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="pricing-heading flex items-baseline justify-between pb-5"
          style={{ borderBottom: '1px solid oklch(14% 0.004 0)', marginBottom: '4rem' }}
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
            Pricing
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
            Simple &amp; Transparent
          </span>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '1px', backgroundColor: 'oklch(14% 0.004 0)' }}
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="pricing-col flex flex-col"
              style={{
                padding: '2.5rem',
                backgroundColor: plan.highlight
                  ? 'oklch(5% 0.004 0)'
                  : 'oklch(9% 0.004 0)',
                outline: plan.highlight
                  ? '1px solid oklch(96% 0.25 103)'
                  : 'none',
                outlineOffset: '-1px',
              }}
            >
              {/* Tier name */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  color: plan.highlight
                    ? 'oklch(96% 0.25 103)'
                    : 'oklch(38% 0.005 0)',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid oklch(14% 0.004 0)' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'clamp(36px, 4vw, 56px)',
                    letterSpacing: '-0.04em',
                    color: 'oklch(93% 0.005 80)',
                    lineHeight: 1,
                    display: 'block',
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    color: 'oklch(28% 0.005 0)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginTop: '6px',
                    display: 'block',
                  }}
                >
                  {plan.unit}
                </span>
              </div>

              {/* Features */}
              <ul
                className="flex-1"
                style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}
              >
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      lineHeight: 1.7,
                      color: 'oklch(55% 0.005 0)',
                      paddingLeft: '1.2em',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: plan.highlight
                          ? 'oklch(96% 0.25 103)'
                          : 'oklch(28% 0.005 0)',
                      }}
                    >
                      —
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '14px 24px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  backgroundColor: plan.highlight
                    ? 'oklch(96% 0.25 103)'
                    : 'transparent',
                  color: plan.highlight
                    ? 'oklch(5% 0.004 0)'
                    : 'oklch(93% 0.005 80)',
                  border: plan.highlight
                    ? 'none'
                    : '1px solid oklch(20% 0.005 0)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (plan.highlight) {
                    e.currentTarget.style.backgroundColor = 'oklch(100% 0 0)';
                  } else {
                    e.currentTarget.style.borderColor = 'oklch(38% 0.005 0)';
                    e.currentTarget.style.color = 'oklch(100% 0 0)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.highlight) {
                    e.currentTarget.style.backgroundColor = 'oklch(96% 0.25 103)';
                  } else {
                    e.currentTarget.style.borderColor = 'oklch(20% 0.005 0)';
                    e.currentTarget.style.color = 'oklch(93% 0.005 80)';
                  }
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
