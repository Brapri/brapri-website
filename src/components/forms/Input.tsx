'use client';
import { useState, type CSSProperties, type InputHTMLAttributes } from 'react';
import { Icon } from '@/components/core/Icon';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  icon?: string;
  invalid?: boolean;
  size?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
}

export function Input({ icon, invalid = false, size = 'md', style, ...rest }: InputProps) {
  const [focused, setFocused] = useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)';
  return (
    <span style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
      height: h, padding: '0 16px', borderRadius: 'var(--radius-sm)',
      background: rest.disabled ? 'transparent' : 'rgba(255,255,255,.04)',
      border: `1px solid ${invalid ? 'rgba(198,72,60,.7)' : focused ? 'var(--border-accent)' : 'var(--border-subtle)'}`,
      boxShadow: focused ? '0 0 0 3px var(--focus-ring)' : 'none',
      color: 'var(--text-muted)', transition: 'var(--transition-control)',
      opacity: rest.disabled ? .5 : 1,
      ...style,
    }}>
      {icon && <Icon name={icon} size={16} />}
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          flex: 1, minWidth: 0, background: 'transparent', border: 0, outline: 'none',
          color: 'var(--text-heading)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)',
        }}
        {...rest}
      />
    </span>
  );
}
