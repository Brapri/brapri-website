'use client';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { Icon } from './Icon';

interface TagProps {
  children: ReactNode;
  selected?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
  style?: CSSProperties;
}

export function Tag({ children, selected = false, onRemove, onClick, style }: TagProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        height: 30, padding: onRemove ? '0 8px 0 12px' : '0 14px',
        borderRadius: 'var(--radius-sm)',
        background: selected ? 'var(--accent-quiet)' : hovered && onClick ? 'rgba(255,255,255,.05)' : 'transparent',
        border: `1px solid ${selected ? 'var(--border-accent)' : 'var(--border-subtle)'}`,
        color: selected ? 'var(--text-accent)' : 'var(--text-body)',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', fontWeight: 500,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'var(--transition-control)',
        ...style,
      }}
    >
      {children}
      {onRemove && (
        <span
          role="button"
          aria-label="Remover"
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          style={{ display: 'inline-flex', opacity: .6, cursor: 'pointer' }}
        >
          <Icon name="x" size={13} />
        </span>
      )}
    </span>
  );
}
