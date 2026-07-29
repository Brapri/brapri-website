import type { CSSProperties, ReactNode } from 'react';

interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export function Field({ label, hint, error, required = false, htmlFor, children, style }: FieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label && (
        <label htmlFor={htmlFor} style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)',
          fontWeight: 600, color: 'var(--text-body)', letterSpacing: '.01em',
        }}>
          {label}
          {required && <span style={{ color: 'var(--text-accent)', marginLeft: 4 }}>*</span>}
        </label>
      )}
      {children}
      {(error || hint) && (
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)',
          color: error ? '#E79289' : 'var(--text-faint)',
        }}>{error || hint}</span>
      )}
    </div>
  );
}
