import type { CSSProperties } from 'react';
import { Eyebrow } from '@/components/brand/Eyebrow';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  level?: 'h1' | 'h2' | 'h3';
  maxWidth?: string;
  style?: CSSProperties;
}

export function SectionHeading({ eyebrow, title, description, align = 'left', level = 'h2', maxWidth = '52ch', style }: SectionHeadingProps) {
  const size =
    level === 'h1' ? { fs: 'var(--text-h1)', lh: 'var(--lh-h1)', ls: 'var(--ls-h1)' } :
    level === 'h3' ? { fs: 'var(--text-h3)', lh: 'var(--lh-h3)', ls: 'var(--ls-h3)' } :
    { fs: 'var(--text-h2)', lh: 'var(--lh-h2)', ls: 'var(--ls-h2)' };
  const Tag = level;
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style,
    }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600,
        fontSize: size.fs, lineHeight: size.lh, letterSpacing: size.ls,
        color: 'var(--text-heading)', maxWidth, textWrap: 'balance' as never,
      }}>{title}</Tag>
      {description && (
        <p style={{
          margin: 0, fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-lead)', lineHeight: 'var(--lh-lead)',
          color: 'var(--text-muted)', maxWidth, textWrap: 'pretty' as never,
        }}>{description}</p>
      )}
    </div>
  );
}
