import { Services } from '@/components/website/Services';

export const metadata = {
  title: 'Serviços de TI no ES — Desenvolvimento, ERP e Automação',
  description: 'Desenvolvimento de software sob demanda, integração de ERP, automação de processos e suporte de TI no Espírito Santo. Contratos modulares para todos os tamanhos de operação.',
  keywords: [
    'desenvolvimento sob demanda ES', 'integração ERP Espírito Santo', 'automação de processos ES',
    'suporte TI ES', 'software house ES', 'cloud computing ES', 'APIs e integrações ES',
  ],
  alternates: { canonical: 'https://brapri.com/servicos' },
};

export default function ServicosPage() {
  return <Services />;
}
