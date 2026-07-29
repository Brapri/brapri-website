import type { CSSProperties, ReactNode } from 'react';
import { Icon } from './Icon';

const TONES = {
  accent:  { bg: 'var(--accent-quiet)', fg: 'var(--text-accent)', bd: 'rgba(192,168,84,.35)' },
  neutral: { bg: 'rgba(255,255,255,.06)', fg: 'var(--text-body)', bd: 'var(--border-subtle)' },
  success: { bg: 'rgba(63,169,122,.14)', fg: '#7FD3AC', bd: 'rgba(63,169,122,.36)' },
  warning: { bg: 'rgba(217,164,32,.14)', fg: '#E8C86A', bd: 'rgba(217,164,32,.36)' },
  danger:  { bg: 'rgba(198,72,60,.14)',  fg: '#E79289', bd: 'rgba(198,72,60,.36)' },
  info:    { bg: 'rgba(74,127,168,.14)', fg: '#8FB9D6', bd: 'rgba(74,127,168,.36)' },
};

interface BadgeProps {
  children: ReactNode;
  tone?: keyof typeof TONES;
  icon?: string;
  dot?: boolean;
  style?: CSSProperties;
}

export function Badge({ children, tone = 'neutral', icon, dot = false, style }: BadgeProps) {
  const t = TONES[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      height: 24, padding: '0 10px', borderRadius: 'var(--radius-pill)',
      background: t.bg, color: t.fg, border: `1px solid ${t.bd}`,
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', fontWeight: 600, letterSpacing: '.02em',
      ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: 'currentColor' }} />}
      {icon && <Icon name={icon} size={13} />}
      {children}
    </span>
  );
}
