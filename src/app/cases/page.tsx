import { Cases } from '@/components/website/Cases';

export const metadata = {
  title: 'Cases de Sucesso — Sistemas e Automação no ES',
  description: 'Projetos de desenvolvimento de software e automação de processos entregues para indústria, varejo e logística no Espírito Santo. Resultados reais medidos depois do go-live.',
  keywords: [
    'cases software ES', 'cases automação ES', 'projetos ERP Espírito Santo',
    'resultados desenvolvimento software ES', 'cases TI indústria ES',
  ],
  alternates: { canonical: 'https://brapri.com/cases' },
};

export default function CasesPage() {
  return <Cases />;
}
