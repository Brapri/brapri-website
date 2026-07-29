import type { CSSProperties } from 'react';

interface StatBlockProps {
  value: string;
  label: string;
  suffix?: string;
  align?: 'left' | 'center';
  style?: CSSProperties;
}

export function StatBlock({ value, label, suffix, align = 'left', style }: StatBlockProps) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style,
    }}>
      <span style={{
        display: 'inline-flex', alignItems: 'baseline', gap: 2,
        fontFamily: 'var(--font-display)', fontWeight: 300,
        fontSize: 'var(--text-h1)', lineHeight: 1,
        letterSpacing: 'var(--ls-h1)', color: 'var(--text-heading)',
      }}>
        {value}
        {suffix && <span style={{ fontSize: '.5em', fontWeight: 500, color: 'var(--text-accent)' }}>{suffix}</span>}
      </span>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', letterSpacing: '.01em' }}>{label}</span>
    </div>
  );
}
