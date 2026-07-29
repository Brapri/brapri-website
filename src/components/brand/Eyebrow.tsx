import type { CSSProperties, ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  tone?: 'accent' | 'muted' | 'heading';
  withRule?: boolean;
  style?: CSSProperties;
}

export function Eyebrow({ children, tone = 'accent', withRule = true, style }: EyebrowProps) {
  const color =
    tone === 'accent' ? 'var(--text-accent)' :
    tone === 'muted' ? 'var(--text-muted)' :
    'var(--text-heading)';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)',
      fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
      color, ...style,
    }}>
      {withRule && <span style={{ width: 28, height: 1, background: 'var(--accent)', opacity: .7 }} />}
      {children}
    </span>
  );
}
