import type { MetadataRoute } from 'next';
import { cases, aprenderConectadoCase } from '@/data';

const BASE = 'https://brapri.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const casePages = [aprenderConectadoCase, ...cases].map((c) => ({
    url: `${BASE}/cases/${c.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [
    { url: BASE,                  lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/servicos`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contato`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/cases`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...casePages,
    { url: `${BASE}/empresa`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wirys`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/legal`,       lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2 },
  ];
}
