'use client';
import { useState, type CSSProperties } from 'react';
import { Icon } from '@/components/core/Icon';

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: CSSProperties;
}

export function Checkbox({ label, checked, defaultChecked = false, onChange, disabled = false, style }: CheckboxProps) {
  const [on, setOn] = useState(defaultChecked);
  const active = checked !== undefined ? checked : on;
  const toggle = () => {
    if (disabled) return;
    const next = !active;
    if (checked === undefined) setOn(next);
    onChange?.(next);
  };
  return (
    <label
      onClick={toggle}
      style={{
        display: 'inline-flex', alignItems: 'flex-start', gap: 'var(--space-3)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .5 : 1,
        ...style,
      }}
    >
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 20, height: 20, marginTop: 1, flex: '0 0 auto',
        borderRadius: 'var(--radius-xs)',
        background: active ? 'var(--accent)' : 'rgba(255,255,255,.04)',
        border: `1px solid ${active ? 'var(--accent)' : 'var(--border-subtle)'}`,
        color: 'var(--text-on-accent)', transition: 'var(--transition-control)',
      }}>
        {active && <Icon name="check" size={13} />}
      </span>
      {label && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)', lineHeight: 1.45, color: 'var(--text-body)' }}>
          {label}
        </span>
      )}
    </label>
  );
}
