import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://remigo.co.uk';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/thank-you',
          '/get/*', // Ad landing pages - noindex
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
