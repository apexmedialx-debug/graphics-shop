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
    priceNum: 499,
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
    priceNum: 1299,
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
    priceNum: null,
    unit: 'retainer or campaign',
    highlight: false,
    features: [
      'Ongoing design partnership',
      'Motion & large format',
      'Dedicated account manager',
      'Monthly design credits',
      'Same-day turnaround',
    ],
    cta: "Let's Talk",
  },
];

const HEADING_WORDS = ['Pricing'];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const headingEl = sectionRef.current?.querySelector('.pricing-heading-wrap');
    const words = sectionRef.current?.querySelectorAll('.heading-word');
    const cols = sectionRef.current?.querySelectorAll('.pricing-col');
    const priceEls = sectionRef.current?.querySelectorAll('.price-num');

    // Heading word reveal
    if (words?.length) {
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
    }

    // Card stagger
    cols?.forEach((col, i) => {
      gsap.from(col, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay: i * 0.12,
        scrollTrigger: { trigger: col, start: 'top 88%' },
      });
    });

    // Price counter animation
    priceEls?.forEach((el) => {
      const num = parseInt(el.getAttribute('data-value') || '', 10);
      if (isNaN(num)) return;

      el.textContent = '£0';
      const proxy = { n: 0 };
      gsap.to(proxy, {
        n: num,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%' },
        onUpdate() {
          const v = Math.round(proxy.n);
          el.textContent = `£${v >= 1000 ? v.toLocaleString('en-GB') : v}`;
        },
        onComplete() {
          el.textContent = num >= 1000 ? `£${num.toLocaleString('en-GB')}` : `£${num}`;
        },
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
          className="pricing-heading-wrap flex items-end justify-between pb-5"
          style={{ borderBottom: '1px solid oklch(14% 0.004 0)', marginBottom: '4rem' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(36px, 6vw, 88px)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0 0.25em',
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
            className="hidden md:block"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: 'oklch(28% 0.005 0)',
              textTransform: 'uppercase',
              paddingBottom: '2px',
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
                backgroundColor: plan.highlight ? 'oklch(5% 0.004 0)' : 'oklch(9% 0.004 0)',
                outline: plan.highlight ? '1px solid oklch(96% 0.25 103)' : 'none',
                outlineOffset: '-1px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  color: plan.highlight ? 'oklch(96% 0.25 103)' : 'oklch(38% 0.005 0)',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                }}
              >
                {plan.name}
              </p>

              <div
                style={{
                  marginBottom: '2rem',
                  paddingBottom: '2rem',
                  borderBottom: '1px solid oklch(14% 0.004 0)',
                }}
              >
                {plan.priceNum !== null ? (
                  <span
                    className="price-num"
                    data-value={plan.priceNum}
                    suppressHydrationWarning
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
                ) : (
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
                )}
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

              <ul className="flex-1" style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
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
                        color: plan.highlight ? 'oklch(96% 0.25 103)' : 'oklch(28% 0.005 0)',
                      }}
                    >
                      —
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

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
                  backgroundColor: plan.highlight ? 'oklch(96% 0.25 103)' : 'transparent',
                  color: plan.highlight ? 'oklch(5% 0.004 0)' : 'oklch(93% 0.005 80)',
                  border: plan.highlight ? 'none' : '1px solid oklch(20% 0.005 0)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (plan.highlight) {
                    e.currentTarget.style.backgroundColor = 'oklch(100% 0 0)';
                  } else {
                    e.currentTarget.style.borderColor = 'oklch(38% 0.005 0)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.highlight) {
                    e.currentTarget.style.backgroundColor = 'oklch(96% 0.25 103)';
                  } else {
                    e.currentTarget.style.borderColor = 'oklch(20% 0.005 0)';
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
