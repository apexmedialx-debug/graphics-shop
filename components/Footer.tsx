export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid oklch(11% 0.004 0)',
        padding: '1.5rem 0',
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 flex items-center justify-between"
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '12px',
            letterSpacing: '0.2em',
            color: 'oklch(96% 0.25 103)',
            textTransform: 'uppercase',
          }}
        >
          Graphics Shop
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: 'oklch(25% 0.005 0)',
          }}
        >
          &copy; {year} — All rights reserved
        </span>
      </div>
    </footer>
  );
}
