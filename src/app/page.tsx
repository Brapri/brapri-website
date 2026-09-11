import type { Metadata } from 'next';
import { Home } from '@/components/website/Home';

export const metadata: Metadata = {
  title: 'Software sob medida em Iconha, ES — ERP e automação no Espírito Santo',
  description: 'A BRAPRI Tecnologia, em Iconha/ES, desenvolve sistemas sob medida, integra ERPs e automatiza processos para indústria, varejo e logística. Atendimento presencial no sul do ES e remoto no Brasil.',
  keywords: [
    'empresa de sistema Iconha', 'empresa de TI Iconha ES', 'software sob medida Iconha',
    'ERP Espírito Santo', 'ERP ES', 'desenvolvimento sob demanda ES', 'suporte TI ES',
    'software sob medida ES', 'automação de processos ES', 'integração ERP ES',
    'sistema de gestão ES', 'software house Iconha', 'TI para indústria ES',
    'empresa de tecnologia sul do ES',
  ],
  alternates: { canonical: 'https://brapri.com' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'A BRAPRI implementa ERP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Integramos com os principais ERPs do mercado via API e desenvolvemos módulos complementares sob medida para indústria, varejo e logística no Espírito Santo.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é desenvolvimento sob demanda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'É o modelo em que o sistema é construído exatamente para o seu processo, sem custo de licença por usuário. Você paga pelo desenvolvimento e pela sustentação, não por uma solução genérica.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vocês oferecem suporte de TI no Espírito Santo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, tanto remoto quanto presencial no sul do ES. Atendemos com SLA definido em contrato para os sistemas que desenvolvemos e para infraestrutura de terceiros.',
      },
    },
    {
      '@type': 'Question',
      name: 'A BRAPRI atende fora do Espírito Santo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O atendimento remoto cobre todo o Brasil. Já entregamos projetos de automação e integração para clientes em outros estados sem necessidade de visita presencial.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo leva para desenvolver um sistema?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende da complexidade. Módulos simples de automação saem em 2 a 4 semanas. Sistemas maiores com integrações são planejados em sprints de duas semanas, com entregas intermediárias para aceite.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona a automação de processos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mapeamos o processo atual, identificamos gargalos e construímos robôs ou integrações que eliminam digitação dupla, planilhas e retrabalho. Usamos n8n, Python e APIs REST conforme cada caso.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Home />
    </>
  );
}
