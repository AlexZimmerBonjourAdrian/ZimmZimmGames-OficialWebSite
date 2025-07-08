import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'game';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export default function SEOHead({
  title = 'W.A.T.A - Where Are The Alices? | ZimmZimm Games',
  description = 'Descubre W.A.T.A, un juego de terror psicológico independiente que desafía la realidad. Explora un mundo donde los límites entre lo real y lo imaginario se desvanecen.',
  keywords = ['W.A.T.A', 'Where Are The Alices?', 'juego de terror psicológico', 'horror psicológico', 'ZimmZimm Games'],
  image = '/images/Wata/WhereAreTheAlices.JPG',
  url = 'https://zimmzimmgames.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'ZimmZimm Games',
  section,
  tags = []
}: SEOHeadProps) {
  const fullTitle = title.includes('ZimmZimm Games') ? title : `${title} | ZimmZimm Games`;
  const fullUrl = url.startsWith('http') ? url : `https://zimmzimmgames.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://zimmzimmgames.com${image}`;

  return (
    <Head>
      {/* Meta tags básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="ZimmZimm Games" />
      <meta property="og:locale" content="es_ES" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@ZimmZimmGames" />
      <meta name="twitter:creator" content="@ZimmZimmGames" />
      
      {/* Additional meta tags for games */}
      <meta name="application-name" content="W.A.T.A" />
      <meta name="category" content="games" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      
      {/* Structured Data for Game */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "W.A.T.A - Where Are The Alices?",
            "description": description,
            "genre": ["Terror Psicológico", "Aventura", "Indie"],
            "gamePlatform": ["PC", "Windows"],
            "applicationCategory": "Game",
            "operatingSystem": "Windows",
            "softwareVersion": "1.0",
            "datePublished": "2024",
            "publisher": {
              "@type": "Organization",
              "name": "ZimmZimm Games",
              "url": "https://zimmzimmgames.com"
            },
            "creator": {
              "@type": "Organization",
              "name": "ZimmZimm Games"
            },
            "image": fullImage,
            "url": fullUrl,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "ratingCount": "150",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://zimmzimmgames.com/wata"
            }
          })
        }}
      />
    </Head>
  );
} 