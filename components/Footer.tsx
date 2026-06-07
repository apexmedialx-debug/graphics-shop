export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid oklch(11% 0.004 0)', padding: '1.5rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '-0.02em',
            color: 'oklch(96% 0.25 103)',
          }}
        >
          FORGE
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '9px',
              letterSpacing: '0.3em',
              color: 'oklch(28% 0.005 0)',
              textTransform: 'uppercase',
              marginLeft: '6px',
              verticalAlign: 'middle',
            }}
          >
            STUDIO
          </span>
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: 'oklch(22% 0.005 0)',
          }}
        >
          &copy; {year}
        </span>
      </div>
    </footer>
  );
}
