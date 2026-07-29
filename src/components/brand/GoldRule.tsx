import type { CSSProperties } from 'react';

interface GoldRuleProps {
  variant?: 'gradient' | 'solid' | 'neutral';
  width?: string;
  style?: CSSProperties;
}

export function GoldRule({ variant = 'gradient', width = '100%', style }: GoldRuleProps) {
  const bg =
    variant === 'gradient' ? 'var(--gradient-gold-hairline)' :
    variant === 'solid' ? 'var(--accent)' :
    'var(--border-hairline)';
  return (
    <span role="separator" style={{ display: 'block', width, height: 1, background: bg, border: 0, ...style }} />
  );
}
