import { About } from '@/components/website/About';

export const metadata = {
  title: 'BRAPRI — Ecossistema de TI em Iconha, ES',
  description: 'A BRAPRI Tecnologia oferece ERP na nuvem, desenvolvimento de sistemas, hardware gerenciado, VoIP corporativo e assessoria de TI para empresas do sul do ES e todo o Brasil. Cada solução contratada de forma independente.',
  keywords: [
    'empresa de TI Iconha ES', 'empresa de sistema Iconha', 'software house Iconha ES',
    'ERP pequenas empresas ES', 'aluguel de computadores ES', 'VoIP PABX nuvem ES',
    'assessoria de TI ES', 'suporte de TI Cachoeiro de Itapemirim',
    'BRAPRI Tecnologia', 'ecossistema TI sul do ES',
  ],
  alternates: { canonical: 'https://brapri.com/empresa' },
};

export default function EmpresaPage() {
  return <About />;
}
