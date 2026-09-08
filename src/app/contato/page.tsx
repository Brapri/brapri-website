import { Contact } from '@/components/website/Contact';

export const metadata = {
  title: 'Solicitar Proposta — ERP e Software sob Medida no ES',
  description: 'Solicite uma proposta de sistema sob medida, integração de ERP ou automação de processos no Espírito Santo. Retornamos em até 1 dia útil com escopo, prazo e investimento.',
  keywords: [
    'proposta ERP ES', 'orçamento software ES', 'contratar desenvolvimento sob demanda ES',
    'empresa de TI ES', 'software house Espírito Santo contato',
  ],
  alternates: { canonical: 'https://brapri.com/contato' },
};

export default function ContatoPage() {
  return <Contact />;
}
