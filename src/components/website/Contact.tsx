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

export function Contact() {
  const [sent, setSent] = useState(false);

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
            {sent && (
              <Alert tone="success" title="Solicitação recebida">
                Responderemos em até 1 dia útil no e-mail informado.
              </Alert>
            )}
            <div className="g-fields" style={{ gap: 'var(--space-5)', minWidth: 0 }}>
              <Field style={{ minWidth: 0 }} label="Nome" required><Input placeholder="Seu nome" /></Field>
              <Field style={{ minWidth: 0 }} label="Empresa" required><Input placeholder="Razão social" /></Field>
            </div>
            <div className="g-fields" style={{ gap: 'var(--space-5)', minWidth: 0 }}>
              <Field style={{ minWidth: 0 }} label="E-mail corporativo" required><Input type="email" icon="mail" placeholder="nome@empresa.com.br" /></Field>
              <Field style={{ minWidth: 0 }} label="Telefone"><Input icon="phone" placeholder="(28) 90000-0000" /></Field>
            </div>
            <div className="g-fields" style={{ gap: 'var(--space-5)', minWidth: 0 }}>
              <Field style={{ minWidth: 0 }} label="Segmento">
                <Select options={['Indústria', 'Varejo', 'Logística', 'Serviços', 'Setor público', 'Outro']} />
              </Field>
              <Field style={{ minWidth: 0 }} label="Serviço de interesse">
                <Select options={services.map((s) => s.title)} />
              </Field>
            </div>
            <Field style={{ minWidth: 0 }} label="Como podemos ajudar?" hint="Ambiente atual, número de usuários e principal dor.">
              <Textarea rows={4} placeholder="Descreva o desafio da sua operação" />
            </Field>
            <Checkbox label="Autorizo o contato e concordo com a Política de Privacidade." />
            <Button fullWidth size="lg" iconRight="send" onClick={() => setSent(true)}>Enviar solicitação</Button>
            <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-faint)', textAlign: 'center' }}>
              Formulário de demonstração — nenhum dado é enviado.
            </span>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
