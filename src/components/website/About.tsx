import { Section } from '@/components/layout/Section';
import { Card } from '@/components/layout/Card';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { StatBlock } from '@/components/layout/StatBlock';
import { GoldRule } from '@/components/brand/GoldRule';
import { Logo } from '@/components/brand/Logo';
import { Eyebrow } from '@/components/brand/Eyebrow';
import { Icon } from '@/components/core/Icon';
import { Reveal, RevealGroup } from './Reveal';
import { company, stats } from '@/data';

export function About() {
  return (
    <>
      <Section style={{ padding: 'var(--space-24) var(--gutter) var(--space-16)', background: 'var(--gradient-page-veil), var(--surface-page)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,.8fr)', gap: 'var(--space-20)', alignItems: 'center' }}>
          <SectionHeading
            level="h1"
            eyebrow="Empresa"
            title="Uma software house do interior do Espírito Santo"
            description="A BRAPRI TECNOLOGIA LTDA desenvolve sistemas e automatiza processos para empresas de indústria, varejo e logística — com equipe própria de desenvolvimento e atendimento remoto e presencial."
          />
          <Card variant="glass" padding="var(--space-8)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
            <Logo height={110} />
            <GoldRule />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-sm)', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--text-body)' }}>{company.legalName}</span>
              <span>CNPJ {company.cnpj}</span>
              <span>{company.address}</span>
            </div>
          </Card>
        </div>
      </Section>
      <Section style={{ padding: '0 var(--gutter) var(--space-16)' }}>
        <Reveal variant="blur" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--space-5)' }}>
          <div className="brapri-photo" style={{ height: 380, position: 'relative' }}>
            <div className="photo-placeholder">Foto da equipe de desenvolvimento (paisagem, 1800×1200)</div>
          </div>
          <div className="brapri-photo" style={{ height: 380, position: 'relative' }}>
            <div className="photo-placeholder">Foto de reunião de discovery com cliente (retrato, 1200×1500)</div>
          </div>
        </Reveal>
      </Section>
      <Section style={{ padding: '0 var(--gutter) var(--section-y)' }}>
        <RevealGroup step={100} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 'var(--space-5)' }}>
          {([
            ['target', 'O que fazemos', 'Desenvolvemos sistemas sob medida, integramos os sistemas que você já usa e automatizamos as rotinas manuais da operação.'],
            ['map-pin', 'Onde atendemos', 'Base em Iconha/ES, com atendimento presencial no sul do estado e remoto em todo o Brasil.'],
            ['scale', 'Como cobramos', 'Projetos por escopo fechado e sustentação mensal por contrato, com nota fiscal de serviço e reajuste anual previsto.'],
          ] as const).map(([icon, title, body]) => (
            <Card key={title} padding="var(--space-8)" interactive style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <span style={{ color: 'var(--text-accent)', display: 'inline-flex' }}><Icon name={icon} size={22} /></span>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h4)', letterSpacing: 'var(--ls-h4)', color: 'var(--text-heading)' }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 'var(--text-body-md)', lineHeight: 'var(--lh-body-md)', color: 'var(--text-muted)' }}>{body}</p>
            </Card>
          ))}
        </RevealGroup>
      </Section>
      <Section tone="sunken" style={{ padding: 'var(--space-16) var(--gutter)' }}>
        <Eyebrow>Compromissos de entrega</Eyebrow>
        <div style={{ marginTop: 'var(--space-8)', display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))' }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ padding: '0 var(--space-8)', borderLeft: i === 0 ? 'none' : '1px solid var(--border-hairline)' }}>
              <StatBlock value={s.value} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
