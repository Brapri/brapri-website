'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Reveal, RevealGroup, RevealWords } from './Reveal';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/layout/Card';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { FeatureTile } from '@/components/layout/FeatureTile';
import { StatBlock } from '@/components/layout/StatBlock';
import { Button } from '@/components/core/Button';
import { Badge } from '@/components/core/Badge';
import { Tag } from '@/components/core/Tag';
import { Icon } from '@/components/core/Icon';
import { Eyebrow } from '@/components/brand/Eyebrow';
import { GoldRule } from '@/components/brand/GoldRule';
import { services, support, cases, stats, steps } from '@/data';

function Hero() {
  const router = useRouter();
  return (
    <section className="hero-pad" style={{ position: 'relative', background: 'var(--gradient-page-veil), var(--surface-page)', overflow: 'hidden' }}>
      <div className="brapri-grid" style={{ position: 'absolute', inset: '-64px', backgroundImage: 'var(--grid-lines)', backgroundSize: 'var(--grid-size)', opacity: .8, pointerEvents: 'none' }} />
      <div className="brapri-breathe" style={{ position: 'absolute', top: '-32%', left: '50%', width: 1100, height: 1100, marginLeft: -550, borderRadius: '50%', background: 'radial-gradient(circle, rgba(192,168,84,.20) 0%, rgba(192,168,84,0) 62%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
      <div className="brapri-scanline" style={{ top: 0 }} />
      <div className="g-hero" style={{ position: 'relative', maxWidth: 'var(--content-max)', margin: '0 auto', gap: 'var(--space-16)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <Reveal variant="fade"><Eyebrow>Software e automação · Espírito Santo</Eyebrow></Reveal>
          <h1 style={{ margin: 0, maxWidth: '20ch', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--text-hero)', lineHeight: 'var(--lh-hero)', letterSpacing: 'var(--ls-hero)', color: 'var(--text-heading)' }}>
            <RevealWords text="Software que trabalha por você." accentFrom={1} accentStyle={{ fontWeight: 600, color: 'var(--text-accent)' }} />
          </h1>
          <Reveal variant="draw" style={{ width: 220 }}><GoldRule /></Reveal>
          <Reveal variant="rise" delay={160}>
            <p style={{ margin: 0, maxWidth: '52ch', fontSize: 'var(--text-lead)', lineHeight: 'var(--lh-lead)', color: 'var(--text-muted)', textWrap: 'pretty' as never }}>
              A BRAPRI TECNOLOGIA desenvolve sistemas sob medida e automatiza processos para empresas que perderam tempo demais com planilha, digitação dupla e retrabalho.
            </p>
          </Reveal>
          <Reveal variant="rise" delay={260}>
            <div className="hero-btns">
              <Button size="lg" iconRight="arrow-right" onClick={() => router.push('/contato')}>Solicitar proposta</Button>
              <Button size="lg" variant="secondary" onClick={() => router.push('/servicos')}>Ver serviços</Button>
            </div>
          </Reveal>
          <Reveal variant="fade" delay={380}>
            <div className="hero-badges">
              <Badge tone="success" dot>Entrega a cada 2 semanas</Badge>
              <Badge tone="accent" icon="workflow">Automação de processos</Badge>
            </div>
          </Reveal>
        </div>
        <Reveal variant="blur" delay={200} style={{ position: 'relative', paddingTop: 150 }}>
          <Card variant="glass" padding="var(--space-8)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-faint)', letterSpacing: '.08em', whiteSpace: 'nowrap' }}>
              <span className="brapri-live-dot" style={{ width: 7, height: 7, borderRadius: 999, background: '#3FA97A' }} />PIPELINE DE ENTREGA · EXEMPLO
            </span>
            {([['Build', 'git-commit-horizontal', 'passou em 2m14s', 'success'], ['Testes', 'flask-conical', '148/148 ok', 'success'], ['Deploy', 'rocket', 'produção · há 3h', 'success'], ['Automações', 'workflow', '412 execuções hoje', 'warning']] as const).map(([label, icon, value, tone], i) => (
              <Reveal key={label} variant="rise" delay={300 + i * 90} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                <span style={{ display: 'inline-flex', color: 'var(--text-accent)' }}><Icon name={icon} size={18} /></span>
                <span style={{ fontSize: 'var(--text-body-md)', color: 'var(--text-body)', whiteSpace: 'nowrap' }}>{label}</span>
                <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{value}</span>
                  <span style={{ width: 7, height: 7, borderRadius: 999, background: tone === 'success' ? '#3FA97A' : '#D9A420' }} />
                </span>
              </Reveal>
            ))}
            <GoldRule variant="neutral" />
            <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>Cada release passa por homologação e aceite antes de ir a produção.</span>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function PhotoBand() {
  return (
    <section className="photo-band" style={{ position: 'relative', height: 520, overflow: 'hidden', background: 'var(--ink-200)' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://picsum.photos/seed/100/2400/1000" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-bottom)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'var(--space-16) var(--gutter)', pointerEvents: 'none' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
          <Reveal variant="rise">
            <h2 style={{ margin: 0, maxWidth: '26ch', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--text-h1)', lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)', color: '#fff' }}>
              Equipe própria, do discovery ao deploy.
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatsRow() {
  return (
    <Section tone="sunken" style={{ padding: 'var(--space-16) var(--gutter)' }}>
      <div className="g-stats stats-row">
        {stats.map((s, i) => (
          <Reveal key={s.label} variant="rise" delay={i * 110} className="stats-item" style={{ padding: '0 var(--space-8)', borderLeft: i === 0 ? 'none' : '1px solid var(--border-hairline)' }}>
            <StatBlock value={s.value} suffix={s.suffix} label={s.label} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function DevelopmentFocus() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const stack = ['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Docker', 'REST', 'GraphQL', 'n8n', 'CI/CD', 'AWS', 'Azure'];
  const phases = [
    { label: 'Descoberta', body: 'Mapeamos o processo atual, os sistemas envolvidos e o resultado esperado. Sai um escopo com telas, integrações e prazo.' },
    { label: 'Arquitetura', body: 'Definimos modelo de dados, integrações com o ERP e ambiente de execução — com custo mensal previsto antes da primeira linha de código.' },
    { label: 'Sprints', body: 'Entregas a cada duas semanas em ambiente de homologação, com aceite formal por etapa e nada de surpresa no fim.' },
    { label: 'Sustentação', body: 'Depois do go-live, monitoramos, corrigimos e evoluímos o sistema sob o mesmo contrato de SLA.' },
  ];
  return (
    <Section>
      <div className="g-2" style={{ gap: 'var(--space-20)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <Reveal variant="fade"><Eyebrow>Foco principal · Desenvolvimento e automação</Eyebrow></Reveal>
          <Reveal variant="rise">
            <h2 style={{ margin: 0, maxWidth: '26ch', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h1)', lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)', color: 'var(--text-heading)' }}>
              Sistemas e automações sob medida para a sua operação
            </h2>
          </Reveal>
          <Reveal variant="rise" delay={120}>
            <p style={{ margin: 0, maxWidth: '54ch', fontSize: 'var(--text-lead)', lineHeight: 'var(--lh-lead)', color: 'var(--text-muted)', textWrap: 'pretty' as never }}>
              Aplicações web, integrações e rotinas automáticas que eliminam planilha, retrabalho e digitação dupla — construídas com a sua equipe, não sobre ela.
            </p>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'var(--space-4)' }}>
            {phases.map((p, i) => {
              const open = step === i;
              return (
                <div key={p.label} onMouseEnter={() => setStep(i)} onClick={() => setStep(i)}
                  style={{ borderTop: '1px solid var(--border-hairline)', padding: 'var(--space-5) 0', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: open ? 'var(--text-accent)' : 'var(--text-faint)', transition: 'color var(--dur-fast) var(--ease-standard)' }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h4)', letterSpacing: 'var(--ls-h4)', color: open ? 'var(--text-heading)' : 'var(--text-muted)', transition: 'color var(--dur-fast) var(--ease-standard)' }}>{p.label}</span>
                    <span style={{ marginLeft: 'auto', color: open ? 'var(--text-accent)' : 'var(--text-faint)', display: 'inline-flex', transform: open ? 'rotate(90deg)' : 'none', transition: 'transform var(--dur-base) var(--ease-out-soft)' }}><Icon name="chevron-right" size={16} /></span>
                  </div>
                  <div style={{ maxHeight: open ? 120 : 0, opacity: open ? 1 : 0, overflow: 'hidden', transition: 'max-height var(--dur-slow) var(--ease-out-soft), opacity var(--dur-base) var(--ease-standard)' }}>
                    <p style={{ margin: 'var(--space-3) 0 0 34px', maxWidth: '48ch', fontSize: 'var(--text-body-md)', lineHeight: 'var(--lh-body-md)', color: 'var(--text-muted)' }}>{p.body}</p>
                  </div>
                </div>
              );
            })}
            <div style={{ borderTop: '1px solid var(--border-hairline)' }} />
          </div>
          <Reveal variant="fade" delay={200} style={{ marginTop: 'var(--space-2)' }}>
            <Button variant="secondary" iconRight="arrow-right" onClick={() => router.push('/contato')}>Discutir um projeto</Button>
          </Reveal>
        </div>
        <Reveal variant="blur" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <div className="brapri-photo" style={{ height: 300, position: 'relative' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://picsum.photos/seed/180/1600/1000" alt="Time de desenvolvimento" />
          </div>
          <Card variant="elevated" padding="var(--space-6)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-accent)' }}>Stack de trabalho</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{stack.map((t) => <Tag key={t}>{t}</Tag>)}</div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

function ServicesGrid() {
  const router = useRouter();
  return (
    <Section tone="sunken">
      <div className="section-hdr" style={{ gap: 'var(--space-10)', marginBottom: 'var(--space-12)' }}>
        <Reveal variant="rise">
          <SectionHeading eyebrow="Serviços" title="Do processo mapeado ao sistema rodando" description="Seis frentes que cobrem o ciclo completo: discovery, construção, integração e sustentação." />
        </Reveal>
        <Reveal variant="fade" delay={150}>
          <Button variant="ghost" iconRight="arrow-right" onClick={() => router.push('/servicos')}>Todos os serviços</Button>
        </Reveal>
      </div>
      <RevealGroup step={80} className="g-3" style={{ gap: 'var(--space-5)' }}>
        {services.map((s) => (
          <FeatureTile key={s.id} icon={s.icon} title={s.title} footnote={s.footnote} style={{ height: '100%' }}>{s.summary}</FeatureTile>
        ))}
      </RevealGroup>
    </Section>
  );
}

function Process() {
  return (
    <Section tone="veil">
      <Reveal variant="rise" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 'var(--space-12)' }}>
        <SectionHeading align="center" eyebrow="Como trabalhamos" title="Quatro etapas, do discovery à sustentação" style={{ alignItems: 'center', textAlign: 'center' }} />
      </Reveal>
      <Reveal variant="draw" style={{ height: 1, marginBottom: 'var(--space-10)' }}><GoldRule /></Reveal>
      <RevealGroup step={110} className="g-4" style={{ gap: 'var(--space-5)' }}>
        {steps.map((s) => (
          <Card key={s.n} variant="quiet" interactive padding="var(--space-6)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', height: '100%' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-accent)' }}>{s.n}</span>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h4)', letterSpacing: 'var(--ls-h4)', color: 'var(--text-heading)' }}>{s.title}</h3>
            <p style={{ margin: 0, fontSize: 'var(--text-body-sm)', lineHeight: 1.6, color: 'var(--text-muted)' }}>{s.body}</p>
          </Card>
        ))}
      </RevealGroup>
    </Section>
  );
}

function Marquee() {
  const items = ['Sistemas web sob medida', 'Automação de processos', 'Integração com ERP', 'APIs documentadas', 'Painéis de indicadores', 'Robôs de conciliação', 'Deploy automatizado', 'Sustentação com SLA'];
  const loop = [...items, ...items];
  return (
    <div style={{ position: 'relative', padding: 'var(--space-8) 0', borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)', background: 'var(--surface-page)', overflow: 'hidden' }}>
      <div className="brapri-marquee">
        {loop.map((t, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-6)', padding: '0 var(--space-8)', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--text-h3)', letterSpacing: 'var(--ls-h3)', color: 'var(--text-faint)', whiteSpace: 'nowrap' }}>
            {t}<span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--accent)', opacity: .7 }} />
          </span>
        ))}
      </div>
    </div>
  );
}

function CasesTeaser() {
  const router = useRouter();
  return (
    <Section>
      <div className="section-hdr" style={{ gap: 'var(--space-10)', marginBottom: 'var(--space-12)' }}>
        <Reveal variant="rise">
          <SectionHeading eyebrow="Cases" title="Resultado medido depois do go-live" description="Projetos de desenvolvimento e automação entregues para indústria, varejo, logística e serviços." />
        </Reveal>
        <Reveal variant="fade" delay={150}>
          <Button variant="ghost" iconRight="arrow-right" onClick={() => router.push('/cases')}>Ver todos os cases</Button>
        </Reveal>
      </div>
      <RevealGroup step={90} className="g-4-1" style={{ gap: 'var(--space-5)' }}>
        {cases.map((c) => (
          <Card key={c.id} variant="default" interactive padding="0" onClick={() => router.push('/cases')} style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
            <div className="brapri-photo" style={{ height: 150, borderRadius: 0, border: 0, position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://picsum.photos/seed/${200 + cases.indexOf(c)}/800/600`} alt={c.tag} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: 'var(--space-6)' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-accent)' }}>{c.tag}</span>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-body-lg)', lineHeight: 1.35, color: 'var(--text-heading)' }}>{c.title}</h3>
              <span style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 'auto', minWidth: 0, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--text-h3)', color: 'var(--text-heading)' }}>
                {c.result}<span style={{ minWidth: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', fontWeight: 500, lineHeight: 1.4, color: 'var(--text-muted)' }}>{c.resultLabel}</span>
              </span>
            </div>
          </Card>
        ))}
      </RevealGroup>
    </Section>
  );
}

function SupportServices() {
  return (
    <Section tone="sunken" style={{ padding: 'var(--space-16) var(--gutter)' }}>
      <div className="g-aside" style={{ gap: 'var(--space-16)', alignItems: 'start' }}>
        <Reveal variant="fade" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Eyebrow>Também cuidamos</Eyebrow>
          <p style={{ margin: 0, fontSize: 'var(--text-body-md)', lineHeight: 'var(--lh-body-md)', color: 'var(--text-muted)' }}>
            Infraestrutura e manutenção não são o foco da BRAPRI, mas entram no contrato quando o software precisa de um ambiente confiável para rodar.
          </p>
        </Reveal>
        <RevealGroup step={80} className="g-3" style={{ gap: 'var(--space-5)' }}>
          {support.map((s) => (
            <Card key={s.id} variant="quiet" padding="var(--space-6)" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ color: 'var(--text-muted)', display: 'inline-flex' }}><Icon name={s.icon} size={18} /></span>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-body-lg)', color: 'var(--text-heading)' }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 'var(--text-body-sm)', lineHeight: 1.6, color: 'var(--text-muted)' }}>{s.summary}</p>
              <span style={{ marginTop: 'auto', paddingTop: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>{s.footnote}</span>
            </Card>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}

function CtaBand() {
  const router = useRouter();
  return (
    <Section style={{ padding: 'var(--space-20) var(--gutter)' }}>
      <Reveal variant="rise">
        <Card variant="accent" padding="var(--space-10)" style={{ position: 'relative', background: 'var(--gradient-page-veil), var(--surface-card)', overflow: 'hidden' }}>
          <div className="cta-row" style={{ gap: 'var(--space-12)' }}>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <h2 style={{ margin: 0, maxWidth: '30ch', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', color: 'var(--text-heading)' }}>Vamos mapear seu processo sem custo.</h2>
              <p style={{ margin: 0, maxWidth: '52ch', fontSize: 'var(--text-body-lg)', lineHeight: 1.6, color: 'var(--text-muted)' }}>Discovery inicial gratuito: mapeamos um processo e mostramos o que pode ser automatizado em até 15 dias.</p>
            </div>
            <Button size="lg" iconRight="arrow-right" onClick={() => router.push('/contato')} style={{ flex: '0 0 auto', position: 'relative' }}>Solicitar proposta</Button>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <DevelopmentFocus />
      <PhotoBand />
      <StatsRow />
      <ServicesGrid />
      <CasesTeaser />
      <Process />
      <SupportServices />
      <CtaBand />
    </>
  );
}
