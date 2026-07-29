'use client';
import { useState, type CSSProperties, type SelectHTMLAttributes } from 'react';
import { Icon } from '@/components/core/Icon';

interface SelectOption { value: string; label: string; }

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: (string | SelectOption)[];
  size?: 'sm' | 'md' | 'lg';
  invalid?: boolean;
  style?: CSSProperties;
}

export function Select({ options, size = 'md', invalid = false, style, ...rest }: SelectProps) {
  const [focused, setFocused] = useState(false);
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)';
  return (
    <span style={{
      position: 'relative', display: 'flex', alignItems: 'center', minWidth: 0,
      height: h, borderRadius: 'var(--radius-sm)',
      background: 'rgba(255,255,255,.04)',
      border: `1px solid ${invalid ? 'rgba(198,72,60,.7)' : focused ? 'var(--border-accent)' : 'var(--border-subtle)'}`,
      boxShadow: focused ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'var(--transition-control)',
      ...style,
    }}>
      <select
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          appearance: 'none', WebkitAppearance: 'none',
          flex: 1, minWidth: 0, width: '100%', height: '100%',
          padding: '0 40px 0 16px', background: 'transparent', border: 0, outline: 'none',
          color: 'var(--text-heading)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)',
          textOverflow: 'ellipsis',
        }}
        {...rest}
      >
        {options.map((o) => {
          const value = typeof o === 'string' ? o : o.value;
          const label = typeof o === 'string' ? o : o.label;
          return <option key={value} value={value} style={{ color: '#111' }}>{label}</option>;
        })}
      </select>
      <span style={{ position: 'absolute', right: 14, color: 'var(--text-muted)', pointerEvents: 'none', display: 'inline-flex' }}>
        <Icon name="chevron-down" size={16} />
      </span>
    </span>
  );
}
