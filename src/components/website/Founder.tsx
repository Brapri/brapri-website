'use client';
import { useRouter } from 'next/navigation';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/layout/Card';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { GoldRule } from '@/components/brand/GoldRule';
import { Eyebrow } from '@/components/brand/Eyebrow';
import { Icon } from '@/components/core/Icon';
import { Button } from '@/components/core/Button';
import { Badge } from '@/components/core/Badge';
import { Tag } from '@/components/core/Tag';
import { Logo } from '@/components/brand/Logo';
import { Reveal, RevealGroup } from './Reveal';

const founder = {
  name: 'Wirys da Cunha Francisco',
  title: 'Fundador & Proprietário',
  company: 'BRAPRI Tecnologia',
  location: 'Iconha, Espírito Santo — Brasil',
  linkedin: 'https://linkedin.com/in/wirys',
  bio: [
    'Empreendedor de tecnologia com experiência em desenvolvimento de sistemas sob medida, automação de processos e infraestrutura para empresas de indústria, varejo e logística.',
    'Fundou a BRAPRI TECNOLOGIA LTDA com a missão de entregar software que trabalha pela operação do cliente — não contra ela. Da descoberta do processo ao deploy em produção, acompanha cada projeto com equipe própria e atendimento direto.',
  ],
  skills: [
    { icon: 'code-2', label: 'Desenvolvimento de software', detail: 'Web, APIs, sistemas sob medida' },
    { icon: 'workflow', label: 'Automação de processos', detail: 'RPA, integrações, rotinas noturnas' },
    { icon: 'git-merge', label: 'Integrações e APIs', detail: 'ERP, e-commerce, fiscal, banco' },
    { icon: 'bar-chart-3', label: 'Dados e indicadores', detail: 'ETL, dashboards, painéis gerenciais' },
    { icon: 'server', label: 'Infraestrutura', detail: 'Cloud, redes, deploy, monitoramento' },
    { icon: 'compass', label: 'Discovery e escopo', detail: 'Mapeamento de processo, proposta técnica' },
  ] as const,
  stack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'n8n', 'REST', 'CI/CD'],
  experience: [
    {
      role: 'Fundador & Proprietário',
      company: 'BRAPRI Tecnologia',
      period: '2024 — presente',
      location: 'Iconha, ES · Remoto',
      bullets: [
        'Fundou e opera a empresa com foco em desenvolvimento de sistemas e automação para PMEs',
        'Lidera projetos de ponta a ponta: discovery, arquitetura, desenvolvimento e sustentação',
        'Atende clientes de indústria, varejo, logística e setor de serviços no ES e em todo o Brasil',
        'Desenvolve contratos modulares com entregas a cada duas semanas e aceite formal por etapa',
      ],
    },
  ],
  highlights: [
    { value: '2 sem', label: 'Ciclo de entrega em produção' },
    { value: '4+', label: 'Projetos entregues' },
    { value: '100%', label: 'Equipe própria — sem terceiros' },
    { value: 'ES', label: 'Base no sul do Espírito Santo' },
  ],
};

export function Founder() {
  const router = useRouter();
  return (
    <>
      {/* Hero */}
      <Section style={{ padding: 'var(--space-24) var(--gutter) var(--space-16)', background: 'var(--gradient-page-veil), var(--surface-page)', position: 'relative', overflow: 'hidden' }}>
        <div className="brapri-grid" style={{ position: 'absolute', inset: '-64px', backgroundImage: 'var(--grid-lines)', backgroundSize: 'var(--grid-size)', opacity: .6, pointerEvents: 'none' }} />
        <div className="g-2-12" style={{ gap: 'var(--space-16)', alignItems: 'center', position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <Reveal variant="fade">
              <Eyebrow>{founder.title} · {founder.company}</Eyebrow>
            </Reveal>
            <Reveal variant="rise">
              <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--text-hero)', lineHeight: 'var(--lh-hero)', letterSpacing: 'var(--ls-hero)', color: 'var(--text-heading)' }}>
                {founder.name.split(' ').slice(0, 1).join(' ')}{' '}
                <span style={{ fontWeight: 600, color: 'var(--text-accent)' }}>
                  {founder.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </Reveal>
            <Reveal variant="draw" style={{ width: 220 }}><GoldRule /></Reveal>
            <Reveal variant="rise" delay={120}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {founder.bio.map((p, i) => (
                  <p key={i} style={{ margin: 0, maxWidth: '56ch', fontSize: i === 0 ? 'var(--text-lead)' : 'var(--text-body-lg)', lineHeight: 'var(--lh-lead)', color: i === 0 ? 'var(--text-muted)' : 'var(--text-faint)' }}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal variant="fade" delay={220}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>
                  <Icon name="map-pin" size={14} />{founder.location}
                </span>
                <Badge tone="success" dot>Disponível para parcerias</Badge>
              </div>
            </Reveal>
            <Reveal variant="rise" delay={300}>
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <Button iconRight="external-link" onClick={() => window.open(founder.linkedin, '_blank')}>LinkedIn</Button>
                <Button variant="secondary" iconRight="arrow-right" onClick={() => router.push('/contato')}>Contato BRAPRI</Button>
              </div>
            </Reveal>
          </div>
          <Reveal variant="blur" delay={180} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <div className="brapri-photo" style={{ height: 380, position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://picsum.photos/seed/wirys/800/1000" alt="Wirys da Cunha Francisco" />
            </div>
            <Card variant="glass" padding="var(--space-6)" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
              <Logo height={52} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-body-md)', color: 'var(--text-heading)' }}>BRAPRI Tecnologia</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>brapritecnologia.com.br</span>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Highlights */}
      <Section tone="sunken" style={{ padding: 'var(--space-12) var(--gutter)' }}>
        <div className="g-4" style={{ gap: 'var(--space-1)' }}>
          {founder.highlights.map((h, i) => (
            <Reveal key={h.label} variant="rise" delay={i * 90}>
              <div style={{ padding: 'var(--space-6) var(--space-8)', borderLeft: i === 0 ? 'none' : '1px solid var(--border-hairline)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--text-h2)', letterSpacing: 'var(--ls-h2)', color: 'var(--text-accent)', lineHeight: 1.1 }}>{h.value}</div>
                <div style={{ marginTop: 6, fontSize: 'var(--text-body-sm)', color: 'var(--text-faint)', lineHeight: 1.4 }}>{h.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Expertise */}
      <Section style={{ padding: 'var(--space-section-y, var(--section-y)) var(--gutter)' }}>
        <Reveal variant="rise" style={{ marginBottom: 'var(--space-10)' }}>
          <SectionHeading eyebrow="Expertise" title="Áreas de atuação" description="Tecnologias e disciplinas aplicadas em projetos reais, do escopo ao go-live." />
        </Reveal>
        <RevealGroup step={70} className="g-3" style={{ gap: 'var(--space-5)' }}>
          {founder.skills.map((s) => (
            <Card key={s.label} variant="quiet" interactive padding="var(--space-6)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', height: '100%' }}>
              <span style={{ color: 'var(--text-accent)', display: 'inline-flex' }}><Icon name={s.icon} size={22} /></span>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h4)', letterSpacing: 'var(--ls-h4)', color: 'var(--text-heading)' }}>{s.label}</h3>
              <p style={{ margin: 0, fontSize: 'var(--text-body-sm)', lineHeight: 1.6, color: 'var(--text-muted)' }}>{s.detail}</p>
            </Card>
          ))}
        </RevealGroup>
        <Reveal variant="fade" delay={200} style={{ marginTop: 'var(--space-8)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {founder.stack.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </Reveal>
      </Section>

      {/* Experience */}
      <Section tone="veil" style={{ padding: 'var(--space-16) var(--gutter)' }}>
        <Reveal variant="rise" style={{ marginBottom: 'var(--space-10)' }}>
          <SectionHeading eyebrow="Experiência" title="Trajetória profissional" />
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          {founder.experience.map((e) => (
            <Reveal key={e.role} variant="rise">
              <Card padding="var(--space-8)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h3)', letterSpacing: 'var(--ls-h3)', color: 'var(--text-heading)' }}>{e.role}</h3>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-body-lg)', color: 'var(--text-accent)' }}>{e.company}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>
                      <Icon name="calendar" size={13} />{e.period}
                      <span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--text-faint)', opacity: .5 }} />
                      <Icon name="map-pin" size={13} />{e.location}
                    </span>
                  </div>
                  <Badge tone="accent">Atual</Badge>
                </div>
                <GoldRule variant="neutral" />
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {e.bullets.map((b) => (
                    <li key={b} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start', fontSize: 'var(--text-body-md)', color: 'var(--text-body)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--text-accent)', marginTop: 4, display: 'inline-flex', flexShrink: 0 }}><Icon name="check" size={15} /></span>{b}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section style={{ padding: 'var(--space-20) var(--gutter)' }}>
        <Reveal variant="rise">
          <Card variant="accent" padding="var(--space-10)" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="cta-row" style={{ gap: 'var(--space-12)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <Eyebrow>Vamos conversar</Eyebrow>
                <h2 style={{ margin: 0, maxWidth: '30ch', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', color: 'var(--text-heading)' }}>
                  Tem um processo que pode ser automatizado?
                </h2>
                <p style={{ margin: 0, maxWidth: '52ch', fontSize: 'var(--text-body-lg)', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                  Conta o essencial da sua operação. Respondo pessoalmente em até 1 dia útil com o que faz sentido automatizar.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', flex: '0 0 auto' }}>
                <Button size="lg" iconRight="arrow-right" onClick={() => router.push('/contato')}>Solicitar proposta</Button>
                <Button size="lg" variant="secondary" iconRight="external-link" onClick={() => window.open(founder.linkedin, '_blank')}>Conectar no LinkedIn</Button>
              </div>
            </div>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}
