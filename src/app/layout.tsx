import type { Metadata } from 'next';
import { Sora, Manrope, Montserrat, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Providers } from './providers';
import { WhatsAppButton } from '@/components/core/WhatsAppButton';
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
  metadataBase: new URL('https://brapri.com'),
  title: {
    default: 'BRAPRI Tecnologia — Software sob medida, ERP e automação no ES',
    template: '%s — BRAPRI Tecnologia',
  },
  description: 'Software house no Espírito Santo. Desenvolvemos sistemas sob medida, integramos ERPs e automatizamos processos para indústria, varejo e logística. Suporte de TI remoto e presencial no sul do ES.',
  keywords: [
    'software sob medida Espírito Santo', 'desenvolvimento de sistemas ES', 'ERP Espírito Santo', 'integração ERP ES',
    'automação de processos ES', 'suporte TI Espírito Santo', 'software house ES', 'desenvolvimento web ES',
    'desenvolvimento sob demanda ES', 'sistema de gestão ES', 'TI para indústria ES', 'BRAPRI', 'Iconha ES',
  ],
  authors: [{ name: 'BRAPRI Tecnologia', url: 'https://brapri.com' }],
  creator: 'BRAPRI Tecnologia',
  publisher: 'BRAPRI Tecnologia',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://brapri.com',
    siteName: 'BRAPRI Tecnologia',
    title: 'BRAPRI Tecnologia — Software sob medida, ERP e automação no ES',
    description: 'Software house no Espírito Santo. Sistemas sob medida, integração de ERP, automação de processos e suporte de TI para indústria, varejo e logística.',
    images: [{ url: '/assets/brapri-logo-stacked.png', width: 720, height: 720, alt: 'BRAPRI Tecnologia' }],
  },
  twitter: {
    card: 'summary',
    title: 'BRAPRI Tecnologia — Software sob medida no ES',
    description: 'Software house no Espírito Santo. Sistemas sob medida, ERP, automação e suporte de TI.',
    images: ['/assets/brapri-logo-stacked.png'],
  },
  alternates: { canonical: 'https://brapri.com' },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
            name: 'BRAPRI Tecnologia',
            legalName: 'BRAPRI TECNOLOGIA LTDA',
            url: 'https://brapri.com',
            logo: 'https://brapri.com/assets/brapri-logo-stacked.png',
            image: 'https://brapri.com/assets/brapri-logo-stacked.png',
            description: 'Software house no Espírito Santo. Desenvolvemos sistemas sob medida, integramos ERPs e automatizamos processos para indústria, varejo e logística.',
            email: company.email,
            telephone: company.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: "Área Rural 1, Pedra D'Água",
              addressLocality: 'Iconha',
              addressRegion: 'ES',
              postalCode: '29280-000',
              addressCountry: 'BR',
            },
            areaServed: [
              { '@type': 'State', name: 'Espírito Santo' },
              { '@type': 'Country', name: 'Brasil' },
            ],
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '18:00',
            },
            knowsAbout: [
              'Desenvolvimento de software sob medida', 'Automação de processos',
              'Integração de ERP', 'Suporte de TI', 'Cloud computing',
              'Desenvolvimento web', 'APIs e integrações',
            ],
          }) }}
        />
        <Providers>
          <div style={{ minHeight: '100%', background: 'var(--surface-page)' }}>
            <Navbar items={nav} />
            <main>{children}</main>
            <Footer legal={legalText} columns={footerColumns} />
            <WhatsAppButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
