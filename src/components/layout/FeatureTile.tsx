import type { CSSProperties, ReactNode } from 'react';
import { Card } from './Card';
import { Icon } from '@/components/core/Icon';

interface FeatureTileProps {
  icon?: string;
  title: string;
  children: ReactNode;
  footnote?: string;
  interactive?: boolean;
  style?: CSSProperties;
}

export function FeatureTile({ icon, title, children, footnote, interactive = true, style }: FeatureTileProps) {
  return (
    <Card variant="default" interactive={interactive} padding="var(--space-8)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', ...style }}>
      {icon && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 44, height: 44, borderRadius: 'var(--radius-md)',
          background: 'var(--accent-quiet)', border: '1px solid rgba(192,168,84,.28)',
          color: 'var(--text-accent)',
        }}>
          <Icon name={icon} size={20} />
        </span>
      )}
      <h3 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600,
        fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)',
        color: 'var(--text-heading)',
      }}>{title}</h3>
      <p style={{
        margin: 0, fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body-md)', lineHeight: 'var(--lh-body-md)',
        color: 'var(--text-muted)', textWrap: 'pretty' as never,
      }}>{children}</p>
      {footnote && (
        <span style={{
          marginTop: 'auto', paddingTop: 'var(--space-4)',
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-faint)',
        }}>{footnote}</span>
      )}
    </Card>
  );
}
