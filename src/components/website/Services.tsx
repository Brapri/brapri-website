'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/layout/Card';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { GoldRule } from '@/components/brand/GoldRule';
import { Icon } from '@/components/core/Icon';
import { Badge } from '@/components/core/Badge';
import { Tag } from '@/components/core/Tag';
import { Button } from '@/components/core/Button';
import { Tabs } from '@/components/navigation/Tabs';
import { Reveal, RevealGroup } from './Reveal';
import { services, support } from '@/data';

export function Services() {
  const router = useRouter();
  const [tab, setTab] = useState(services[0].id);
  const active = services.find((s) => s.id === tab)!;

  return (
    <>
      <Section style={{ padding: 'var(--space-24) var(--gutter) var(--space-12)', background: 'var(--gradient-page-veil), var(--surface-page)' }}>
        <Reveal variant="rise">
          <SectionHeading level="h1" eyebrow="Serviços" title="Desenvolvimento, automação e sustentação" description="Contratos modulares: um projeto pontual, uma frente contínua ou as seis em um único acordo de nível de serviço." />
        </Reveal>
      </Section>
      <Section style={{ padding: '0 var(--gutter) var(--section-y)' }}>
        <div className="tabs-wrap">
          <Tabs items={services.map((s) => ({ id: s.id, label: s.title }))} value={tab} onChange={setTab} style={{ marginBottom: 'var(--space-10)' }} />
        </div>
        <div className="g-2-108" style={{ gap: 'var(--space-12)', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'var(--accent-quiet)', border: '1px solid rgba(192,168,84,.28)', color: 'var(--text-accent)' }}>
              <Icon name={active.icon} size={26} />
            </span>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h2)', letterSpacing: 'var(--ls-h2)', color: 'var(--text-heading)' }}>{active.title}</h2>
            <p style={{ margin: 0, maxWidth: '58ch', fontSize: 'var(--text-lead)', lineHeight: 'var(--lh-lead)', color: 'var(--text-muted)' }}>{active.summary}</p>
            <GoldRule />
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {active.detail.map((d) => (
                <li key={d} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start', fontSize: 'var(--text-body-lg)', color: 'var(--text-body)' }}>
                  <span style={{ color: 'var(--text-accent)', marginTop: 3, display: 'inline-flex' }}><Icon name="check" size={16} /></span>{d}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-2)', flexWrap: 'wrap' }}>
              <Button onClick={() => router.push('/contato')} iconRight="arrow-right">Solicitar proposta</Button>
              <Badge tone="accent">{active.footnote}</Badge>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <div className="brapri-photo" style={{ height: 240, position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://picsum.photos/seed/400/1600/1000" alt="Time em desenvolvimento" />
            </div>
            <Card variant="elevated" padding="var(--space-8)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-accent)' }}>Incluído em todo contrato</span>
              {([['file-check', 'Escopo, telas e prazo por escrito'], ['git-branch', 'Código-fonte entregue ao cliente'], ['flask-conical', 'Homologação com aceite por etapa'], ['activity', 'Monitoramento da aplicação'], ['refresh-cw', 'Sustentação e evolução contínua']] as const).map(([icon, label]) => (
                <div key={label} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', fontSize: 'var(--text-body-md)', color: 'var(--text-body)' }}>
                  <span style={{ color: 'var(--text-accent)', display: 'inline-flex' }}><Icon name={icon} size={17} /></span>{label}
                </div>
              ))}
              <GoldRule variant="neutral" />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Docker', 'n8n', 'AWS'].map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>Plataformas citadas são referências técnicas de mercado, não endossos.</span>
            </Card>
          </div>
        </div>
      </Section>
      <Section tone="sunken" style={{ padding: 'var(--space-16) var(--gutter)' }}>
        <RevealGroup step={70} className="g-3" style={{ gap: 'var(--space-5)' }}>
          {services.map((s) => (
            <Card key={s.id} variant="quiet" interactive padding="var(--space-6)" onClick={() => setTab(s.id)} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start', height: '100%', borderColor: s.id === tab ? 'rgba(192,168,84,.38)' : undefined }}>
              <span style={{ color: 'var(--text-accent)', display: 'inline-flex', marginTop: 2 }}><Icon name={s.icon} size={18} /></span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-body-lg)', color: 'var(--text-heading)' }}>{s.title}</div>
                <div style={{ marginTop: 4, fontSize: 'var(--text-body-sm)', lineHeight: 1.55, color: 'var(--text-muted)' }}>{s.footnote}</div>
              </div>
            </Card>
          ))}
        </RevealGroup>
      </Section>
      <Section style={{ padding: 'var(--section-y-compact) var(--gutter)' }}>
        <Reveal variant="fade" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
          <SectionHeading level="h3" eyebrow="Frentes de apoio" title="Infraestrutura e manutenção de equipamentos" description="Não são o foco da BRAPRI. Entram no contrato quando o software precisa de um ambiente confiável — ou quando o cliente prefere um fornecedor único." />
        </Reveal>
        <RevealGroup step={80} className="g-3" style={{ gap: 'var(--space-5)' }}>
          {support.map((sv) => (
            <Card key={sv.id} variant="quiet" padding="var(--space-6)" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ color: 'var(--text-muted)', display: 'inline-flex' }}><Icon name={sv.icon} size={18} /></span>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-body-lg)', color: 'var(--text-heading)' }}>{sv.title}</h3>
              <p style={{ margin: 0, fontSize: 'var(--text-body-sm)', lineHeight: 1.6, color: 'var(--text-muted)' }}>{sv.summary}</p>
              <span style={{ marginTop: 'auto', paddingTop: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>{sv.footnote}</span>
            </Card>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
