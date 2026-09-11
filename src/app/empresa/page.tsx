import { About } from '@/components/website/About';

export const metadata = {
  title: 'BRAPRI — Empresa de Software em Iconha, ES',
  description: 'Software house em Iconha, Espírito Santo. BRAPRI Tecnologia desenvolve sistemas sob medida, integra ERPs e automatiza processos para o sul do ES e todo o Brasil. Atendimento presencial e remoto.',
  keywords: [
    'empresa de software Iconha', 'empresa de TI Iconha ES', 'software house Iconha ES',
    'BRAPRI Tecnologia', 'TI sul do ES', 'empresa de sistema Iconha',
    'desenvolvimento sob demanda Espírito Santo', 'empresa de tecnologia Cachoeiro',
  ],
  alternates: { canonical: 'https://brapri.com/empresa' },
};

export default function EmpresaPage() {
  return <About />;
}
