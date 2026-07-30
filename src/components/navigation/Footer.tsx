import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { GoldRule } from '@/components/brand/GoldRule';

interface FooterLink { label: string; href: string; }
interface FooterColumn { title: string; links: FooterLink[]; }

interface FooterProps {
  columns?: FooterColumn[];
  legal?: string;
}

export function Footer({ columns = [], legal }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      padding: 'var(--space-20) var(--gutter) var(--space-10)',
      background: 'var(--surface-sunken)',
      borderTop: '1px solid var(--border-hairline)',
    }}>
      <div
        className="footer-grid"
        style={{
          maxWidth: 'var(--content-max)', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: `1.4fr repeat(${Math.max(columns.length, 1)}, 1fr)`,
          gap: 'var(--space-16)',
        }}
      >
        <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
          <Logo height={101} />
          {legal && (
            <p style={{
              margin: 0, fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-caption)', lineHeight: 1.7,
              color: 'var(--text-faint)', whiteSpace: 'pre-line',
            }}>{legal}</p>
          )}
        </div>
        {columns.map((col) => (
          <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)',
              fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
              color: 'var(--text-accent)',
            }}>{col.title}</span>
            {col.links.map((l) => (
              <Link key={l.label} href={l.href} style={{
                fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)',
                color: 'var(--text-muted)', textDecoration: 'none', cursor: 'pointer',
              }}>{l.label}</Link>
            ))}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', paddingTop: 'var(--space-10)' }}>
        <GoldRule variant="neutral" />
        <p style={{
          marginTop: 'var(--space-5)',
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', color: 'var(--text-faint)',
        }}>
          © {year} BRAPRI TECNOLOGIA LTDA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
