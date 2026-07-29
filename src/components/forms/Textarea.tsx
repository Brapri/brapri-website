'use client';
import { useState, type CSSProperties, type TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  style?: CSSProperties;
}

export function Textarea({ invalid = false, style, ...rest }: TextareaProps) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        width: '100%', padding: '14px 16px', borderRadius: 'var(--radius-sm)',
        background: 'rgba(255,255,255,.04)',
        border: `1px solid ${invalid ? 'rgba(198,72,60,.7)' : focused ? 'var(--border-accent)' : 'var(--border-subtle)'}`,
        boxShadow: focused ? '0 0 0 3px var(--focus-ring)' : 'none',
        outline: 'none', color: 'var(--text-heading)',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)', lineHeight: 'var(--lh-body-md)',
        resize: 'vertical', transition: 'var(--transition-control)',
        ...style,
      }}
      {...rest}
    />
  );
}
