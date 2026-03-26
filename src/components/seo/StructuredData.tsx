/**
 * Structured Data (JSON-LD) Components for SEO
 * Helps search engines understand your content
 */

interface LocalBusinessSchemaProps {
  name?: string;
  url?: string;
  telephone?: string;
  email?: string;
}

export function LocalBusinessSchema({
  name = 'Remigo',
  url = 'https://remigo.co.uk',
  telephone = '+441234567890',
  email = 'hello@remigo.co.uk',
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name,
    url,
    logo: `${url}/logos/remigo-full-dark.png`,
    image: `${url}/og-image.png`,
    telephone,
    email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
    },
    priceRange: '£0',
    description:
      'UK mortgage broker offering expert advice on remortgages, first-time buyer mortgages, self-employed mortgages, and protection. FCA regulated. £0 broker fees.',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    serviceType: [
      'Mortgage Broker',
      'Remortgage Advice',
      'First-Time Buyer Mortgages',
      'Self-Employed Mortgages',
      'Mortgage Protection',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
  url: string;
}

export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  authorName = 'Remigo',
  image = 'https://remigo.co.uk/og-image.png',
  url,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://remigo.co.uk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Remigo',
      logo: {
        '@type': 'ImageObject',
        url: 'https://remigo.co.uk/logos/remigo-full-dark.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebsiteSchemaProps {
  url?: string;
  name?: string;
}

export function WebsiteSchema({
  url = 'https://remigo.co.uk',
  name = 'Remigo',
}: WebsiteSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
