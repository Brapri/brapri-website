import type { CSSProperties, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  tone?: 'page' | 'sunken' | 'veil';
  style?: CSSProperties;
}

export function Section({ children, tone = 'page', style }: SectionProps) {
  const bg =
    tone === 'sunken' ? 'var(--surface-sunken)' :
    tone === 'veil' ? 'var(--gradient-page-veil), var(--surface-page)' :
    'var(--surface-page)';
  return (
    <section style={{ padding: 'var(--section-y) var(--gutter)', background: bg, ...style }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>{children}</div>
    </section>
  );
}
