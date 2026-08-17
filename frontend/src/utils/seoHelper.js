// SEO Helper for dynamic Document Head Title, Meta, Open Graph, Canonical, and JSON-LD Structured Data

export const updateSeoMetadata = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  articleData = null,
  breadcrumbs = [],
  faqs = [],
}) => {
  if (typeof document === 'undefined') return;

  const siteName = 'CivicTrack';
  const defaultTitle = `${siteName} Insights — Civic Technology & Community Resources`;
  const defaultDescription =
    'Practical insights on civic technology, community engagement, municipal services, public infrastructure, and building better communities.';
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://civictrack.example';

  // 1. Update Title
  const finalTitle = title ? `${title} | ${siteName}` : defaultTitle;
  document.title = finalTitle;

  // Helper for setting meta tags
  const setMetaTag = (nameAttr, attrValue, content) => {
    if (!content) return;
    let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(nameAttr, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Helper for setting link tags
  const setLinkTag = (rel, href) => {
    if (!href) return;
    let element = document.querySelector(`link[rel="${rel}"]`);
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', rel);
      document.head.appendChild(element);
    }
    element.setAttribute('href', href);
  };

  // 2. Standard Meta Tags
  const finalDescription = description || defaultDescription;
  setMetaTag('name', 'description', finalDescription);

  // 3. Canonical URL
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : baseUrl);
  setLinkTag('canonical', currentUrl);

  // 4. Open Graph Meta Tags
  setMetaTag('property', 'og:site_name', siteName);
  setMetaTag('property', 'og:title', finalTitle);
  setMetaTag('property', 'og:description', finalDescription);
  setMetaTag('property', 'og:url', currentUrl);
  setMetaTag('property', 'og:type', ogType);
  if (ogImage) {
    setMetaTag('property', 'og:image', ogImage);
  }

  // 5. Twitter Card Meta Tags
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', finalTitle);
  setMetaTag('name', 'twitter:description', finalDescription);
  if (ogImage) {
    setMetaTag('name', 'twitter:image', ogImage);
  }

  // 6. JSON-LD Structured Data
  let jsonLdScript = document.getElementById('civictrack-jsonld');
  if (!jsonLdScript) {
    jsonLdScript = document.createElement('script');
    jsonLdScript.id = 'civictrack-jsonld';
    jsonLdScript.type = 'application/ld+json';
    document.head.appendChild(jsonLdScript);
  }

  const structuredDataList = [];

  // WebSite Schema
  structuredDataList.push({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: baseUrl,
    description: defaultDescription,
  });

  // Article / BlogPosting Schema
  if (articleData) {
    structuredDataList.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: articleData.title,
      description: articleData.metaDescription || articleData.excerpt,
      image: [articleData.image],
      datePublished: articleData.publishedAt,
      dateModified: articleData.updatedAt || articleData.publishedAt,
      author: {
        '@type': 'Person',
        name: articleData.author?.name || 'Darshan Rajgor',
        jobTitle: articleData.author?.role || 'Solo Developer & Creator of CivicTrack',
      },
      publisher: {
        '@type': 'Organization',
        name: siteName,
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/vite.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': currentUrl,
      },
    });
  }

  // BreadcrumbList Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    structuredDataList.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.label,
        item: crumb.href ? (crumb.href.startsWith('http') ? crumb.href : `${baseUrl}${crumb.href}`) : currentUrl,
      })),
    });
  }

  // FAQPage Schema
  if (faqs && faqs.length > 0) {
    structuredDataList.push({
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
    });
  }

  jsonLdScript.textContent = JSON.stringify(structuredDataList, null, 2);
};
