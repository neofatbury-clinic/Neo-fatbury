import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neofatbury.com';

  const services = [
    // Skin
    '/skin/acne-treatment',
    '/skin/acne-scar-treatment',
    '/skin/laser-hair-reduction',
    '/skin/scar-treatment',
    '/skin/skin-brightening',
    // Hair
    '/hair/hair-loss-treatment',
    '/hair/hair-transplantation',
    '/hair/anti-dandruff-treatment',
    // Slimming
    '/slimming/coolsculpting-fat-freezing',
    '/slimming/weight-loss-treatment',
    '/slimming/inch-loss-treatment',
    '/slimming/coolsculpting',
    '/slimming/weight-loss',
    '/slimming/inch-loss',
  ];

  const routes = ['', '/results', '/our-doctors', '/skin', '/hair', '/slimming'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}${s}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes];
}
