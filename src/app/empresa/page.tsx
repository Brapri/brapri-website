import { About } from '@/components/website/About';

export const metadata = {
  title: 'Sobre a BRAPRI — Software House no Espírito Santo',
  description: 'BRAPRI Tecnologia: software house no interior do ES especializada em desenvolvimento sob medida, integração de ERP e automação de processos. Equipe própria, atendimento remoto e presencial.',
  keywords: [
    'BRAPRI Tecnologia', 'software house Iconha ES', 'empresa de software ES',
    'desenvolvimento sob demanda Espírito Santo', 'TI sul do ES', 'quem somos BRAPRI',
  ],
  alternates: { canonical: 'https://brapri.com/empresa' },
};

export default function EmpresaPage() {
  return <About />;
}
