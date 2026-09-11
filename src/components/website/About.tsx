import Link from 'next/link';
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

const PRODUTOS = [
  {
    icon: 'code-2' as const,
    name: 'Software & Dev',
    pitch: 'Sistemas sob medida, automações e APIs.',
    model: 'Por projeto + sustentação',
  },
  {
    icon: 'layout-dashboard' as const,
    name: 'BRAPRI ERP',
    pitch: 'ERP na nuvem — vendas, estoque, financeiro e fiscal.',
    model: 'Assinatura SaaS',
  },
  {
    icon: 'monitor' as const,
    name: 'HaaS',
    pitch: 'Desktops, notebooks e servidores alugados e gerenciados.',
    model: 'Mensalidade / equipamento',
  },
  {
    icon: 'phone' as const,
    name: 'Telecom VoIP',
    pitch: 'PABX na nuvem, ramais móveis e gravação de chamadas.',
    model: 'Mensalidade / ramal',
  },
  {
    icon: 'shield-check' as const,
    name: 'Assessoria & Infra',
    pitch: 'Suporte de TI, gestão de rede e service desk.',
    model: 'Contrato MSP mensal',
  },
];

export function About() {
  return (
    <>
      {/* ── Hero ── */}
      <Section style={{ padding: 'var(--space-24) var(--gutter) var(--space-16)', background: 'var(--gradient-page-veil), var(--surface-page)' }}>
        <div className="g-2-12" style={{ gap: 'var(--space-20)', alignItems: 'center' }}>
          <SectionHeading
            level="h1"
            eyebrow="A empresa"
            title="Ecossistema de TI em Iconha, Espírito Santo"
            description="A BRAPRI TECNOLOGIA LTDA oferece um ecossistema de soluções de TI com sede em Iconha/ES: ERP na nuvem, desenvolvimento sob medida, hardware gerenciado, VoIP corporativo e assessoria de infraestrutura — cada produto contratado de forma independente."
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

      {/* ── Photos ── */}
      <Section style={{ padding: '0 var(--gutter) var(--space-16)' }}>
        <Reveal variant="blur" className="g-photos" style={{ gap: 'var(--space-5)' }}>
          <div className="brapri-photo" style={{ height: 380, position: 'relative' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1800&h=1200&auto=format&fit=crop&q=80"
              alt="Equipe BRAPRI Tecnologia"
            />
          </div>
          <div className="brapri-photo" style={{ height: 380, position: 'relative' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=1500&auto=format&fit=crop&q=80"
              alt="Atendimento e suporte BRAPRI"
            />
          </div>
        </Reveal>
      </Section>

      {/* ── Identidade: 3 cards ── */}
      <Section style={{ padding: '0 var(--gutter) var(--section-y)' }}>
        <RevealGroup step={100} className="g-3" style={{ gap: 'var(--space-5)' }}>
          {([
            ['target', 'Missão', 'Ser o parceiro de TI de referência para pequenas e médias empresas do sul do ES — com soluções que crescem junto com o negócio, sem amarrar o cliente a contratos desnecessários.'],
            ['map-pin', 'Onde atendemos', 'Sede em Iconha/ES, atendimento presencial no sul do Espírito Santo e remoto em todo o Brasil. Cada produto tem suporte por contrato com SLA definido.'],
            ['scale', 'Modelo de negócio', 'Cinco produtos independentes, cada um com seu próprio modelo de cobrança. Sem pacote fechado: você contrata o que precisa e evolui quando faz sentido.'],
          ] as const).map(([icon, title, body]) => (
            <Card key={title} padding="var(--space-8)" interactive style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <span style={{ color: 'var(--text-accent)', display: 'inline-flex' }}><Icon name={icon} size={22} /></span>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h4)', letterSpacing: 'var(--ls-h4)', color: 'var(--text-heading)' }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 'var(--text-body-md)', lineHeight: 'var(--lh-body-md)', color: 'var(--text-muted)' }}>{body}</p>
            </Card>
          ))}
        </RevealGroup>
      </Section>

      {/* ── Produtos ── */}
      <Section tone="veil" style={{ padding: 'var(--space-16) var(--gutter)' }}>
        <Reveal variant="rise" style={{ marginBottom: 'var(--space-10)' }}>
          <SectionHeading
            eyebrow="Nossos produtos"
            title="Cinco soluções. Contrate qualquer uma."
            description="Cada produto funciona de forma independente — e quando você combina mais de um, a BRAPRI integra tudo."
          />
        </Reveal>
        <RevealGroup step={80} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-4)' }}>
          {PRODUTOS.map((p) => (
            <Card key={p.name} variant="quiet" padding="var(--space-6)" interactive style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ display: 'inline-flex', color: 'var(--text-accent)' }}><Icon name={p.icon} size={20} /></span>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-body-lg)', color: 'var(--text-heading)' }}>{p.name}</h3>
              <p style={{ margin: 0, fontSize: 'var(--text-body-sm)', lineHeight: 1.6, color: 'var(--text-muted)', flex: 1 }}>{p.pitch}</p>
              <span style={{ marginTop: 'var(--space-2)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase' as never, color: 'var(--text-faint)' }}>{p.model}</span>
            </Card>
          ))}
        </RevealGroup>
        <Reveal variant="fade" style={{ marginTop: 'var(--space-8)' }}>
          <Link
            href="/contato"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', background: 'var(--surface-card)' }}
          >
            Montar meu pacote de TI
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>
      </Section>

      {/* ── Área de atuação ── */}
      <Section style={{ padding: '0 var(--gutter) var(--space-16)' }}>
        <Reveal variant="rise">
          <Card padding="var(--space-8)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <Eyebrow>Área de atuação</Eyebrow>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h3)', lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', color: 'var(--text-heading)' }}>
              Sul do Espírito Santo e todo o Brasil
            </h2>
            <p style={{ margin: 0, maxWidth: '72ch', fontSize: 'var(--text-body-md)', lineHeight: 'var(--lh-body-md)', color: 'var(--text-muted)' }}>
              Com sede em <strong style={{ color: 'var(--text-body)' }}>Iconha, ES</strong>, a BRAPRI atende presencialmente os municípios do sul do Espírito Santo —
              incluindo <strong style={{ color: 'var(--text-body)' }}>Cachoeiro de Itapemirim</strong>, Marataízes, Presidente Kennedy, Itapemirim,
              Piúma, Anchieta, Alfredo Chaves, Rio Novo do Sul, Atílio Vivácqua, Mimoso do Sul, Guaçuí, Alegre e toda a região.
              Produtos como ERP, desenvolvimento de software e assessoria de TI são entregues com suporte remoto para clientes em qualquer estado do Brasil.
            </p>
          </Card>
        </Reveal>
      </Section>

      {/* ── Stats ── */}
      <Section tone="sunken" style={{ padding: 'var(--space-16) var(--gutter)' }}>
        <Eyebrow>Compromissos de entrega</Eyebrow>
        <div className="g-stats stats-row" style={{ marginTop: 'var(--space-8)' }}>
          {stats.map((s, i) => (
            <div key={s.label} className="stats-item" style={{ padding: '0 var(--space-8)', borderLeft: i === 0 ? 'none' : '1px solid var(--border-hairline)' }}>
              <StatBlock value={s.value} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
