import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cases, aprenderConectadoCase } from '@/data';

type Params = { id: string };

const allCases = [aprenderConectadoCase, ...cases] as Array<
  | typeof aprenderConectadoCase
  | (typeof cases)[0]
>;

function findCase(id: string) {
  return allCases.find((c) => c.id === id) ?? null;
}

export function generateStaticParams(): Params[] {
  return allCases.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const c = findCase(id);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    alternates: { canonical: `https://brapri.com/cases/${id}` },
  };
}

export default async function CaseDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const c = findCase(id);
  if (!c) notFound();

  const hasDetail = 'challenge' in c && c.challenge;
  const outcomes = 'outcomes' in c ? c.outcomes : [];

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* ── Back nav ── */}
      <div style={{ padding: 'var(--space-6) var(--gutter)', borderBottom: '1px solid var(--border-hairline)', background: 'var(--surface-sunken)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
          <Link href="/cases" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.05em' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            TODOS OS CASES
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <div style={{ position: 'relative', background: 'var(--gradient-page-veil), var(--surface-page)', padding: 'var(--space-16) var(--gutter) var(--space-12)', borderBottom: '1px solid var(--border-hairline)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <span style={{ padding: '3px 10px', borderRadius: 999, background: 'rgba(192,168,84,0.12)', border: '1px solid rgba(192,168,84,0.3)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-accent)' }}>{c.tag}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>CASE · BRAPRI TECNOLOGIA</span>
          </div>
          <h1 style={{ margin: 0, maxWidth: '24ch', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h1)', lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)', color: 'var(--text-heading)' }}>
            {c.title}
          </h1>
          <p style={{ margin: 0, maxWidth: '60ch', fontSize: 'var(--text-lead)', lineHeight: 'var(--lh-lead)', color: 'var(--text-muted)' }}>
            {c.summary}
          </p>
        </div>
      </div>

      {/* ── Hero image ── */}
      {'imageUrl' in c && c.imageUrl && (
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-hairline)', marginTop: 'calc(-1 * var(--space-8))', position: 'relative', zIndex: 1 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.imageUrl}
              alt={c.title}
              style={{ width: '100%', display: 'block', maxHeight: 480, objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>
      )}

      {/* ── Challenge ── */}
      {hasDetail && (
        <section style={{ padding: 'var(--space-20) var(--gutter)' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>O Desafio</span>
              <h2 style={{ margin: 0, maxWidth: '36ch', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', color: 'var(--text-heading)' }}>
                O problema antes de nos chamar
              </h2>
              <p style={{ margin: 0, maxWidth: '64ch', fontSize: 'var(--text-body-lg)', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                {(c as typeof cases[0]).challenge}
              </p>
            </div>
            {'challengePoints' in c && c.challengePoints && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
                {(c as typeof cases[0]).challengePoints.map((pt) => (
                  <div key={pt} style={{ display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-5)', borderRadius: 'var(--radius-md)', background: 'rgba(200,60,60,0.06)', border: '1px solid rgba(200,60,60,0.15)' }}>
                    <span style={{ flexShrink: 0, marginTop: 2, color: '#c84040' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span style={{ fontSize: 'var(--text-body-md)', lineHeight: 1.6, color: 'var(--text-muted)' }}>{pt}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Solution ── */}
      {hasDetail && 'solutionHeadline' in c && (
        <section style={{ padding: 'var(--space-20) var(--gutter)', background: 'var(--surface-sunken)', borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>A Solução</span>
            <h2 style={{ margin: 0, maxWidth: '36ch', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', color: 'var(--text-heading)' }}>
              {(c as typeof cases[0]).solutionHeadline}
            </h2>
            <p style={{ margin: 0, maxWidth: '64ch', fontSize: 'var(--text-body-lg)', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              {(c as typeof cases[0]).solutionBody}
            </p>
          </div>
        </section>
      )}

      {/* ── Outcomes ── */}
      {outcomes.length > 0 && (
        <section style={{ padding: 'var(--space-20) var(--gutter)' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Os Resultados</span>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', color: 'var(--text-heading)' }}>
                O que mudou depois do go-live
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-5)' }}>
              {outcomes.map((o) => (
                <div key={o.label} style={{ padding: 'var(--space-8)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-hairline)', background: 'var(--surface-card)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-hero)', lineHeight: 1, color: 'var(--text-accent)' }}>{o.metric}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h4)', color: 'var(--text-heading)' }}>{o.label}</span>
                  <span style={{ fontSize: 'var(--text-body-sm)', lineHeight: 1.6, color: 'var(--text-muted)' }}>{o.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section style={{ padding: 'var(--space-20) var(--gutter)', background: 'var(--surface-sunken)', borderTop: '1px solid var(--border-hairline)' }}>
        <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Seu processo pode ser o próximo</span>
          <h2 style={{ margin: 0, maxWidth: '30ch', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', color: 'var(--text-heading)' }}>
            Conte qual rotina consome o dia da sua equipe.
          </h2>
          <p style={{ margin: 0, maxWidth: '56ch', fontSize: 'var(--text-body-lg)', lineHeight: 1.65, color: 'var(--text-muted)' }}>
            Discovery inicial gratuito — mapeamos o processo e mostramos o que pode ser resolvido antes de qualquer proposta.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/contato" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 'var(--radius-sm)', background: 'var(--accent)', color: 'var(--ink-900)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-body-md)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Solicitar proposta
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/cases" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)', color: 'var(--text-muted)', textDecoration: 'none' }}>
              Ver outros cases →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
