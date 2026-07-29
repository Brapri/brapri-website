'use client';
import { useState, type CSSProperties, type ReactNode, type MouseEvent } from 'react';
import { Icon } from './Icon';

const HEIGHT = { sm: 'var(--control-h-sm)', md: 'var(--control-h-md)', lg: 'var(--control-h-lg)' };
const PAD   = { sm: '0 16px', md: '0 24px', lg: '0 32px' };
const FONT  = { sm: 13, md: 15, lg: 16 };

function look(variant: string, hovered: boolean, disabled: boolean): CSSProperties {
  if (disabled) return { background: 'var(--accent-quiet)', color: 'var(--text-faint)', border: '1px solid var(--border-hairline)', boxShadow: 'none' };
  switch (variant) {
    case 'primary':   return { background: hovered ? 'var(--accent-hover)' : 'var(--accent)', color: 'var(--text-on-accent)', border: '1px solid transparent', boxShadow: hovered ? 'var(--shadow-glow-gold)' : 'var(--shadow-xs)' };
    case 'secondary': return { background: hovered ? 'var(--accent-quiet)' : 'transparent', color: 'var(--text-heading)', border: `1px solid ${hovered ? 'var(--border-accent)' : 'var(--border-subtle)'}`, boxShadow: 'none' };
    case 'ghost':     return { background: hovered ? 'var(--accent-quiet)' : 'transparent', color: hovered ? 'var(--text-accent)' : 'var(--text-body)', border: '1px solid transparent', boxShadow: 'none' };
    case 'inverse':   return { background: hovered ? 'var(--ink-900)' : 'var(--ink-white)', color: 'var(--text-on-inverse)', border: '1px solid transparent', boxShadow: 'var(--shadow-sm)' };
    default:          return {};
  }
}

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconRight?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ children, variant = 'primary', size = 'md', icon, iconRight, disabled = false, fullWidth = false, onClick, style, type = 'button' }: ButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : 'auto',
        alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
        height: HEIGHT[size], padding: PAD[size], borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)', fontSize: FONT[size], fontWeight: 600, letterSpacing: '0.01em',
        cursor: disabled ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap',
        transform: pressed && !disabled ? 'scale(.98)' : 'scale(1)',
        transition: 'var(--transition-control)',
        ...look(variant, hovered, disabled),
        ...style,
      }}
    >
      {icon && <Icon name={icon} size={size === 'lg' ? 18 : 16} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === 'lg' ? 18 : 16} />}
    </button>
  );
}
