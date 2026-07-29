import type { CSSProperties, ReactNode } from 'react';
import { Icon } from '@/components/core/Icon';

const TONES = {
  info:    { fg: '#8FB9D6', bg: 'rgba(74,127,168,.10)',  bd: 'rgba(74,127,168,.32)',  icon: 'info' },
  success: { fg: '#7FD3AC', bg: 'rgba(63,169,122,.10)',  bd: 'rgba(63,169,122,.32)',  icon: 'check-circle' },
  warning: { fg: '#E8C86A', bg: 'rgba(217,164,32,.10)',  bd: 'rgba(217,164,32,.32)',  icon: 'alert-triangle' },
  danger:  { fg: '#E79289', bg: 'rgba(198,72,60,.10)',   bd: 'rgba(198,72,60,.32)',   icon: 'alert-octagon' },
};

interface AlertProps {
  tone?: keyof typeof TONES;
  title?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export function Alert({ tone = 'info', title, children, style }: AlertProps) {
  const t = TONES[tone];
  return (
    <div role="status" style={{
      display: 'flex', gap: 'var(--space-4)',
      padding: 'var(--space-4) var(--space-5)',
      borderRadius: 'var(--radius-md)',
      background: t.bg, border: `1px solid ${t.bd}`,
      ...style,
    }}>
      <span style={{ color: t.fg, display: 'inline-flex', marginTop: 2 }}>
        <Icon name={t.icon} size={18} />
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {title && <strong style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)', fontWeight: 700, color: 'var(--text-heading)' }}>{title}</strong>}
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', lineHeight: 1.55, color: 'var(--text-muted)' }}>{children}</span>
      </div>
    </div>
  );
}
