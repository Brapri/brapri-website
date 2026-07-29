'use client';
import type { CSSProperties } from 'react';

interface TabItem { id: string; label: string; }

interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  style?: CSSProperties;
}

export function Tabs({ items, value, onChange, style }: TabsProps) {
  return (
    <div role="tablist" style={{ display: 'flex', gap: 'var(--space-8)', borderBottom: '1px solid var(--border-hairline)', ...style }}>
      {items.map((it) => {
        const active = value === it.id;
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(it.id)}
            style={{
              position: 'relative', padding: '0 0 14px',
              background: 'none', border: 0, cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)', fontWeight: 600,
              color: active ? 'var(--text-heading)' : 'var(--text-muted)',
              transition: 'color var(--dur-fast) var(--ease-standard)',
            }}
          >
            {it.label}
            <span style={{
              position: 'absolute', left: 0, right: 0, bottom: -1, height: 2,
              background: 'var(--accent)', opacity: active ? 1 : 0,
              transition: 'opacity var(--dur-fast) var(--ease-standard)',
            }} />
          </button>
        );
      })}
    </div>
  );
}
