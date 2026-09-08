'use client';
import { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/layout/Card';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { GoldRule } from '@/components/brand/GoldRule';
import { Icon } from '@/components/core/Icon';
import { Button } from '@/components/core/Button';
import { Alert } from '@/components/feedback/Alert';
import { Field } from '@/components/forms/Field';
import { Input } from '@/components/forms/Input';
import { Textarea } from '@/components/forms/Textarea';
import { Select } from '@/components/forms/Select';
import { Checkbox } from '@/components/forms/Checkbox';
import { Reveal } from './Reveal';
import { company, services } from '@/data';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [consent, setConsent] = useState(false);
  const [fields, setFields] = useState({
    nome: '', empresa: '', email: '', telefone: '',
    segmento: 'Indústria', servico: services[0]?.title ?? '',
    mensagem: '',
  });

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  const valid = fields.nome.trim() && fields.email.trim() && fields.mensagem.trim() && consent;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      setStatus(res.ok ? 'ok' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const contactInfo = [
    ['mail', company.email],
    ['phone', company.phone],
    ['map-pin', company.address],
    ['clock', company.hours],
  ] as const;

  return (
    <Section style={{ padding: 'var(--space-24) var(--gutter) var(--section-y)', background: 'var(--gradient-page-veil), var(--surface-page)' }}>
      <div className="g-2-109" style={{ gap: 'var(--space-20)', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <Reveal variant="rise">
            <SectionHeading level="h1" eyebrow="Contato" title="Solicite uma proposta" description="Conte o essencial sobre sua operação. Retornamos com escopo, prazo e investimento em até 1 dia útil." />
          </Reveal>
          <Card padding="var(--space-8)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            {contactInfo.map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--text-accent)', display: 'inline-flex', marginTop: 2 }}><Icon name={icon} size={18} /></span>
                <span style={{ fontSize: 'var(--text-body-md)', lineHeight: 1.5, color: 'var(--text-body)' }}>{text}</span>
              </div>
            ))}
            <GoldRule variant="neutral" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', lineHeight: 1.7, color: 'var(--text-faint)' }}>
              {company.legalName} · CNPJ {company.cnpj}
            </span>
          </Card>
        </div>

        <Reveal variant="blur" delay={120} style={{ display: 'flex', minWidth: 0 }}>
          <Card variant="elevated" padding="var(--space-10)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', minWidth: 0, flex: 1 }}>
            {status === 'ok' && (
              <Alert tone="success" title="Solicitação recebida!">
                Responderemos em até 1 dia útil no e-mail informado.
              </Alert>
            )}
            {status === 'error' && (
              <Alert tone="danger" title="Erro ao enviar">
                Tente novamente ou fale direto pelo WhatsApp.
              </Alert>
            )}

            {status !== 'ok' && (
              <form onSubmit={submit} style={{ display: 'contents' }}>
                <div className="g-fields" style={{ gap: 'var(--space-5)', minWidth: 0 }}>
                  <Field style={{ minWidth: 0 }} label="Nome" required>
                    <Input placeholder="Seu nome" value={fields.nome} onChange={set('nome')} required />
                  </Field>
                  <Field style={{ minWidth: 0 }} label="Empresa">
                    <Input placeholder="Razão social" value={fields.empresa} onChange={set('empresa')} />
                  </Field>
                </div>
                <div className="g-fields" style={{ gap: 'var(--space-5)', minWidth: 0 }}>
                  <Field style={{ minWidth: 0 }} label="E-mail" required>
                    <Input type="email" icon="mail" placeholder="nome@empresa.com.br" value={fields.email} onChange={set('email')} required />
                  </Field>
                  <Field style={{ minWidth: 0 }} label="Telefone">
                    <Input icon="phone" placeholder="(28) 90000-0000" value={fields.telefone} onChange={set('telefone')} />
                  </Field>
                </div>
                <div className="g-fields" style={{ gap: 'var(--space-5)', minWidth: 0 }}>
                  <Field style={{ minWidth: 0 }} label="Segmento">
                    <Select
                      options={['Indústria', 'Varejo', 'Logística', 'Serviços', 'Setor público', 'Outro']}
                      value={fields.segmento}
                      onChange={set('segmento')}
                    />
                  </Field>
                  <Field style={{ minWidth: 0 }} label="Serviço de interesse">
                    <Select
                      options={services.map((s) => s.title)}
                      value={fields.servico}
                      onChange={set('servico')}
                    />
                  </Field>
                </div>
                <Field style={{ minWidth: 0 }} label="Como podemos ajudar?" hint="Ambiente atual, número de usuários e principal dor." required>
                  <Textarea rows={4} placeholder="Descreva o desafio da sua operação" value={fields.mensagem} onChange={set('mensagem')} required />
                </Field>
                <Checkbox
                  label="Autorizo o contato e concordo com a Política de Privacidade."
                  checked={consent}
                  onChange={setConsent}
                />
                <Button fullWidth size="lg" iconRight="send" disabled={!valid || status === 'sending'}>
                  {status === 'sending' ? 'Enviando…' : 'Enviar solicitação'}
                </Button>
              </form>
            )}
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
