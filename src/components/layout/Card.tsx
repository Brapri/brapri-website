'use client';
import { useState, type CSSProperties, type ReactNode } from 'react';

const VARIANTS: Record<string, CSSProperties> = {
  default:  { background: 'var(--surface-card)',  border: '1px solid var(--border-hairline)', boxShadow: 'var(--inner-hairline)' },
  elevated: { background: 'var(--surface-raised)', border: '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-md)' },
  glass:    { background: 'var(--glass-fill)',     border: 'var(--glass-border)',              backdropFilter: 'var(--blur-glass)', WebkitBackdropFilter: 'var(--blur-glass)', boxShadow: 'var(--shadow-lg)' },
  accent:   { background: 'var(--surface-card)',   border: '1px solid rgba(192,168,84,.38)',   boxShadow: 'var(--inner-sheen)' },
  quiet:    { background: 'transparent',           border: '1px solid var(--border-hairline)', boxShadow: 'none' },
};

interface CardProps {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  padding?: string;
  interactive?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
}

export function Card({ children, variant = 'default', padding = 'var(--space-8)', interactive = false, style, onClick }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const base = VARIANTS[variant];
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 'var(--radius-lg)', padding,
        transform: interactive && hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'transform var(--dur-base) var(--ease-out-soft), border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
        cursor: interactive ? 'pointer' : 'default',
        ...base,
        ...(interactive && hovered ? { borderColor: 'rgba(192,168,84,.40)' } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
