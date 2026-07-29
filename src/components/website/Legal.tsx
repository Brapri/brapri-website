'use client';
import { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/layout/Card';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { GoldRule } from '@/components/brand/GoldRule';
import { Icon } from '@/components/core/Icon';
import { Tabs } from '@/components/navigation/Tabs';
import { legalDocs, company } from '@/data';

export function Legal() {
  const [tab, setTab] = useState(legalDocs[0].id);
  const doc = legalDocs.find((d) => d.id === tab)!;

  return (
    <Section style={{ padding: 'var(--space-24) var(--gutter) var(--section-y)' }}>
      <SectionHeading level="h1" eyebrow="Políticas" title="Termos, privacidade e condições comerciais" description="Documentos públicos que regem a contratação, o pagamento e o tratamento de dados." style={{ marginBottom: 'var(--space-10)' }} />
      <Tabs items={legalDocs.map((d) => ({ id: d.id, label: d.label }))} value={tab} onChange={setTab} style={{ marginBottom: 'var(--space-10)' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,.32fr) minmax(0,1fr)', gap: 'var(--space-12)', alignItems: 'start' }}>
        <Card variant="quiet" padding="var(--space-6)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>{doc.updated}</span>
          <GoldRule variant="neutral" />
          {doc.blocks.map((b, i) => (
            <span key={b[0]} style={{ display: 'flex', gap: 10, fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-accent)' }}>{String(i + 1).padStart(2, '0')}</span>{b[0]}
            </span>
          ))}
          <GoldRule variant="neutral" />
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>
            <Icon name="download" size={14} />Versão em PDF sob solicitação
          </div>
        </Card>
        <article style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', maxWidth: 'var(--measure)' }}>
          {doc.blocks.map((b, i) => (
            <div key={b[0]} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h4)', letterSpacing: 'var(--ls-h4)', color: 'var(--text-heading)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-sm)', color: 'var(--text-accent)', marginRight: 12 }}>{String(i + 1).padStart(2, '0')}</span>{b[0]}
              </h3>
              <p style={{ margin: 0, fontSize: 'var(--text-body-lg)', lineHeight: 1.7, color: 'var(--text-muted)', textWrap: 'pretty' as never }}>{b[1]}</p>
            </div>
          ))}
          <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', lineHeight: 1.7, color: 'var(--text-faint)' }}>
            {company.legalName} · CNPJ {company.cnpj} · {company.address}
          </p>
        </article>
      </div>
    </Section>
  );
}
