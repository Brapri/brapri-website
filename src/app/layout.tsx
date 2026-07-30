import type { Metadata } from 'next';
import { Sora, Manrope, Montserrat, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Providers } from './providers';
import { company, nav, services } from '@/data';

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BRAPRI Tecnologia — Software sob medida e automação',
  description: 'A BRAPRI TECNOLOGIA desenvolve sistemas sob medida e automatiza processos para empresas que perderam tempo demais com planilha, digitação dupla e retrabalho.',
  keywords: ['software sob medida', 'automação de processos', 'desenvolvimento de sistemas', 'integração ERP', 'Espírito Santo'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const legalText = `${company.legalName}\nCNPJ ${company.cnpj}\n${company.address}\n${company.email} · ${company.phone}`;

  const footerColumns = [
    { title: 'Serviços', links: services.slice(0, 4).map((s) => ({ label: s.title, href: `/servicos` })) },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre a BRAPRI', href: '/empresa' },
        { label: 'Cases', href: '/cases' },
        { label: 'Infraestrutura e manutenção', href: '/servicos' },
        { label: 'Contato', href: '/contato' },
      ],
    },
    {
      title: 'Políticas',
      links: [
        { label: 'Termos de uso', href: '/legal' },
        { label: 'Política de privacidade', href: '/legal' },
        { label: 'Reembolso e cancelamento', href: '/legal' },
        { label: 'Entrega de serviço', href: '/legal' },
      ],
    },
  ];

  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${manrope.variable} ${montserrat.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Providers>
          <div style={{ minHeight: '100%', background: 'var(--surface-page)' }}>
            <Navbar items={nav} />
            <main>{children}</main>
            <Footer legal={legalText} columns={footerColumns} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
