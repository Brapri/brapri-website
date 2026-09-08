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
import { cases, aprenderConectadoCase } from '@/data';

// ─── Mapa SVG ────────────────────────────────────────────────────────────────
// Projeção simples sobre a região sul do ES
// Bounding box: lat -20.3°S→-21.3°S  |  lon -40.45°W→-41.65°W
const W = 520, H = 380;
const LAT0 = -20.3, LAT1 = -21.3;   // norte → sul
const LON0 = -41.65, LON1 = -40.45; // oeste → leste

function toXY(lat: number, lon: number): [number, number] {
  const x = ((lon - LON0) / (LON1 - LON0)) * W;
  const y = ((lat - LAT0) / (LAT1 - LAT0)) * H;
  return [Math.round(x), Math.round(y)];
}

// Contorno aproximado do sul do ES (polígono simplificado)
const esOutline = [
  toXY(-20.30, -41.20), toXY(-20.30, -40.90), toXY(-20.42, -40.67),
  toXY(-20.50, -40.53), toXY(-20.62, -40.48), toXY(-20.75, -40.49),
  toXY(-20.88, -40.66), toXY(-21.00, -40.83), toXY(-21.15, -40.97),
  toXY(-21.30, -41.10), toXY(-21.30, -41.64), toXY(-21.00, -41.65),
  toXY(-20.60, -41.55), toXY(-20.30, -41.50),
].map(([x, y]) => `${x},${y}`).join(' ');

// Rio (linha do Rio Itapemirim aproximada)
const riverPath = (() => {
  const pts = [toXY(-20.46, -41.50), toXY(-20.55, -41.30), toXY(-20.65, -41.10), toXY(-20.75, -40.90), toXY(-20.86, -40.72)];
  return `M ${pts.map(([x, y]) => `${x},${y}`).join(' L ')}`;
})();

function ESMap({ municipalities }: { municipalities: typeof aprenderConectadoCase.municipalities }) {
  const points = municipalities.map((m) => ({ ...m, xy: toXY(m.lat, m.lon) }));

  // Linhas de conexão entre cidades (hub-and-spoke a partir de Cachoeiro)
  const hub = points.find((p) => p.name === 'Cachoeiro de Itapemirim')!;

  return (
    <div style={{ position: 'relative', width: '100%', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--surface-sunken)', border: '1px solid var(--border-hairline)' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: '100%', display: 'block' }}
        aria-label="Mapa dos municípios atendidos no sul do Espírito Santo"
      >
        <defs>
          <radialGradient id="mapglow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C0A854" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#C0A854" stopOpacity="0" />
          </radialGradient>
          <filter id="blur4">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <style>{`
            @keyframes ripple {
              0%   { r: 6;  opacity: 0.7; }
              100% { r: 22; opacity: 0;   }
            }
            .map-ripple { animation: ripple 2.4s ease-out infinite; }
            .map-ripple-2 { animation: ripple 2.4s ease-out infinite; animation-delay: 0.8s; }
          `}</style>
        </defs>

        {/* Fundo */}
        <rect width={W} height={H} fill="var(--surface-sunken)" />
        <ellipse cx={W / 2} cy={H / 2} rx={260} ry={200} fill="url(#mapglow)" />

        {/* Grade de pontos */}
        {Array.from({ length: 14 }, (_, col) =>
          Array.from({ length: 10 }, (_, row) => (
            <circle key={`${col}-${row}`} cx={col * 40 + 10} cy={row * 42 + 10} r={1} fill="var(--border-hairline)" opacity="0.5" />
          ))
        )}

        {/* Contorno do sul do ES */}
        <polygon points={esOutline} fill="rgba(192,168,84,0.06)" stroke="rgba(192,168,84,0.22)" strokeWidth="1.5" />

        {/* Rio */}
        <path d={riverPath} fill="none" stroke="rgba(96,168,220,0.25)" strokeWidth="1.5" strokeLinecap="round" />

        {/* Linhas de conexão */}
        {points.filter((p) => p.name !== 'Cachoeiro de Itapemirim').map((p) => (
          <line
            key={p.name}
            x1={hub.xy[0]} y1={hub.xy[1]}
            x2={p.xy[0]} y2={p.xy[1]}
            stroke="var(--accent)"
            strokeWidth="1"
            strokeDasharray="5,4"
            opacity="0.4"
          />
        ))}

        {/* Marcadores */}
        {points.map((p) => {
          const [x, y] = p.xy;
          const isHub = p.name === 'Cachoeiro de Itapemirim';
          // Label position: avoid going off edges
          const lx = x > W - 110 ? x - 8 : x + 14;
          const anchor = x > W - 110 ? 'end' : 'start';
          return (
            <g key={p.name}>
              {/* Ripple */}
              <circle className="map-ripple"   cx={x} cy={y} r={6} fill="none" stroke="var(--accent)" strokeWidth="1.2" />
              <circle className="map-ripple-2" cx={x} cy={y} r={6} fill="none" stroke="var(--accent)" strokeWidth="1.2" />
              {/* Dot */}
              <circle cx={x} cy={y} r={isHub ? 7 : 5} fill={isHub ? 'var(--accent)' : 'var(--surface-page)'} stroke="var(--accent)" strokeWidth={isHub ? 0 : 2} />
              {isHub && <circle cx={x} cy={y} r={3} fill="var(--surface-page)" />}
              {/* Label */}
              <text x={lx} y={y - 8} textAnchor={anchor as never}
                fill="var(--text-heading)" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600">
                {p.name}
              </text>
            </g>
          );
        })}

        {/* Legenda */}
        <g transform={`translate(12, ${H - 46})`}>
          <rect x={0} y={0} width={170} height={38} rx={6} fill="rgba(0,0,0,0.35)" />
          <circle cx={14} cy={12} r={4} fill="var(--accent)" />
          <text x={24} y={16} fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="10">Hub — Cachoeiro</text>
          <line x1={10} y1={28} x2={22} y2={28} stroke="var(--accent)" strokeWidth="1" strokeDasharray="4,3" />
          <text x={28} y={32} fill="var(--text-muted)" fontFamily="var(--font-mono)" fontSize="10">Conexão de rede</text>
        </g>

        {/* Badge ES */}
        <text x={W - 8} y={H - 8} textAnchor="end" fill="var(--text-faint)" fontFamily="var(--font-mono)" fontSize="10" opacity="0.5">
          Sul do Espírito Santo
        </text>
      </svg>
    </div>
  );
}

// ─── Case Aprender Conectado ──────────────────────────────────────────────────
function CaseAprenderConectado() {
  const c = aprenderConectadoCase;
  return (
    <Reveal variant="rise">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <Badge tone="accent">{c.tag}</Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>CASE · DESTAQUE</span>
        </div>

        {/* Grid: texto + mapa */}
        <div className="g-case-row" style={{ gap: 'var(--space-16)', alignItems: 'start' }}>
          {/* Texto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <h3 style={{ margin: 0, maxWidth: '28ch', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', color: 'var(--text-heading)' }}>
              {c.title}
            </h3>
            <p style={{ margin: 0, maxWidth: '52ch', fontSize: 'var(--text-body-lg)', lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' as never }}>
              {c.summary}
            </p>
            <GoldRule />
            <StatBlock value={c.result} label={c.resultLabel} />

            {/* Cidades */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                Municípios atendidos
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {c.municipalities.map((m) => (
                  <Tag key={m.name}>{m.name}</Tag>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                Tecnologias e materiais
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {c.stack.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>

            {/* Client */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', paddingTop: 'var(--space-2)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://651818aeb03babcd9aeedc490daec497.cdn.bubble.io/cdn-cgi/image/w=192,h=48,f=auto,dpr=2.5,fit=contain/f1745331952171x308140294008352200/LOGO_APRENDER_CONECTADO_CMYK-.png"
                alt="Aprender Conectado"
                style={{ height: 28, width: 'auto', maxWidth: 160, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.55 }}
              />
            </div>
          </div>

          {/* Mapa */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <ESMap municipalities={c.municipalities} />
            <Card variant="quiet" padding="var(--space-5)" style={{ display: 'flex', gap: 'var(--space-8)' }}>
              {([
                ['5', 'Municípios'],
                ['~30', 'Escolas'],
                ['Cat6', 'Padrão'],
              ] as const).map(([v, l]) => (
                <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-h3)', color: 'var(--text-accent)' }}>{v}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</span>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// ─── Case genérico ────────────────────────────────────────────────────────────
function CaseRow({ item, index }: { item: typeof cases[0]; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal variant="rise" className="g-case-row" style={{ gap: 'var(--space-16)', alignItems: 'center' }}>
      <div className="brapri-photo" style={{ height: 360, order: flip ? 2 : 1, position: 'relative' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`https://picsum.photos/seed/${500 + index}/1600/1100`} alt={item.tag} />
      </div>
      <div style={{ order: flip ? 1 : 2, display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <Badge tone="accent">{item.tag}</Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>CASE {String(index + 2).padStart(2, '0')}</span>
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

// ─── Página ───────────────────────────────────────────────────────────────────
export function Cases() {
  const router = useRouter();
  return (
    <>
      <Section style={{ padding: 'var(--space-24) var(--gutter) var(--space-12)', background: 'var(--gradient-page-veil), var(--surface-page)' }}>
        <Reveal variant="rise">
          <SectionHeading level="h1" eyebrow="Cases" title="O que já entregamos" description="Projetos reais de infraestrutura, desenvolvimento e automação — com o resultado medido depois do go-live." />
        </Reveal>
      </Section>

      <Section style={{ padding: '0 var(--gutter) var(--section-y)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
          {/* Case destaque: Aprender Conectado */}
          <CaseAprenderConectado />

          {/* Divisor */}
          <div style={{ height: 1, background: 'var(--border-hairline)' }} />

          {/* Demais cases */}
          {cases.map((c, i) => <CaseRow key={c.id} item={c} index={i} />)}
        </div>
      </Section>

      <Section tone="sunken" style={{ padding: 'var(--space-16) var(--gutter)' }}>
        <Reveal variant="rise">
          <div className="cta-row" style={{ gap: 'var(--space-10)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Eyebrow>Seu processo pode ser o próximo</Eyebrow>
              <h2 style={{ margin: 0, maxWidth: '30ch', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', color: 'var(--text-heading)' }}>
                Conte qual rotina consome o dia da sua equipe.
              </h2>
            </div>
            <Button size="lg" iconRight="arrow-right" onClick={() => router.push('/contato')} style={{ flex: '0 0 auto' }}>Solicitar proposta</Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
