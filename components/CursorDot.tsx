'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function CursorDot() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let active = false;

    const onMove = (e: MouseEvent) => {
      if (!active) {
        gsap.to([ring, dot], { opacity: 1, duration: 0.3 });
        active = true;
      }
      gsap.set(dot, { x: e.clientX - 3, y: e.clientY - 3 });
      gsap.to(ring, { x: e.clientX - 14, y: e.clientY - 14, duration: 0.15, ease: 'power2.out', overwrite: 'auto' });
    };

    const expand = () => gsap.to(ring, { scale: 2.2, duration: 0.25, ease: 'power2.out' });
    const contract = () => gsap.to(ring, { scale: 1, duration: 0.25, ease: 'power2.out' });

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) expand();
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) contract();
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 28,
          height: 28,
          border: '1px solid oklch(96% 0.25 103 / 0.6)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          backgroundColor: 'oklch(96% 0.25 103)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          willChange: 'transform',
        }}
      />
    </>
  );
}
