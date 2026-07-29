'use client';
import { useRouter } from 'next/navigation';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/layout/Card';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { StatBlock } from '@/components/layout/StatBlock';
import { GoldRule } from '@/components/brand/GoldRule';
import { Eyebrow } from '@/components/brand/Eyebrow';
import { Badge } from '@/components/core/Badge';
import { Tag } from '@/components/core/Tag';
import { Button } from '@/components/core/Button';
import { Reveal } from './Reveal';
import { cases } from '@/data';

function CaseRow({ item, index }: { item: typeof cases[0]; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal variant="rise" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-16)', alignItems: 'center' }}>
      <div className="brapri-photo" style={{ height: 360, order: flip ? 2 : 1, position: 'relative' }}>
        <div className="photo-placeholder">{item.photoHint}</div>
      </div>
      <div style={{ order: flip ? 1 : 2, display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <Badge tone="accent">{item.tag}</Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>CASE {String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 style={{ margin: 0, maxWidth: '26ch', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', color: 'var(--text-heading)' }}>{item.title}</h3>
        <p style={{ margin: 0, maxWidth: '52ch', fontSize: 'var(--text-body-lg)', lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' as never }}>{item.summary}</p>
        <GoldRule />
        <StatBlock value={item.result} label={item.resultLabel} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{item.stack.map((t) => <Tag key={t}>{t}</Tag>)}</div>
      </div>
    </Reveal>
  );
}

export function Cases() {
  const router = useRouter();
  return (
    <>
      <Section style={{ padding: 'var(--space-24) var(--gutter) var(--space-12)', background: 'var(--gradient-page-veil), var(--surface-page)' }}>
        <Reveal variant="rise">
          <SectionHeading level="h1" eyebrow="Cases" title="O que já entregamos" description="Quatro projetos de desenvolvimento e automação, com o resultado que o cliente mediu depois do go-live." />
        </Reveal>
      </Section>
      <Section style={{ padding: '0 var(--gutter) var(--section-y)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
          {cases.map((c, i) => <CaseRow key={c.id} item={c} index={i} />)}
        </div>
      </Section>
      <Section tone="sunken" style={{ padding: 'var(--space-16) var(--gutter)' }}>
        <Reveal variant="rise" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-10)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <Eyebrow>Seu processo pode ser o próximo</Eyebrow>
            <h2 style={{ margin: 0, maxWidth: '30ch', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', color: 'var(--text-heading)' }}>
              Conte qual rotina consome o dia da sua equipe.
            </h2>
          </div>
          <Button size="lg" iconRight="arrow-right" onClick={() => router.push('/contato')} style={{ marginLeft: 'auto', flex: '0 0 auto' }}>Solicitar proposta</Button>
        </Reveal>
        <p style={{ marginTop: 'var(--space-8)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>
          Cases ilustrativos, redigidos como rascunho — substitua por projetos reais e resultados verificáveis antes de publicar.
        </p>
      </Section>
    </>
  );
}
