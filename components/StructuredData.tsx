'use client';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Khan Fish Supplier",
    "alternateName": ["KhanFishSupplier", "Khan Fish", "Khan Seafood Supplier"],
    "url": "https://khanfishsupplier.com",
    "logo": "https://khanfishsupplier.com/images/fish.png",
    "image": "https://khanfishsupplier.com/images/fish.png",
    "description": "Leading fish supplier in Karachi, Pakistan. Wholesale and retail seafood distributor serving restaurants, hotels, and markets. Fresh and frozen fish delivery across Karachi.",
    "foundingDate": "2010",
    "slogan": "Your Trusted Partner in Premium Seafood Distribution",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Suite No.A/21, First Floor, Commercial Center, West Wharf, Dock Yard Road",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "postalCode": "74000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.844489,
      "longitude": 66.981810
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+92-310-2061037",
        "contactType": "sales",
        "areaServed": ["PK", "Karachi", "Sindh"],
        "availableLanguage": ["English", "Urdu"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+92-322-2666392",
        "contactType": "customer service",
        "areaServed": ["PK", "Karachi", "Sindh"],
        "availableLanguage": ["English", "Urdu"]
      }
    ],
    "email": "info@khanfishsupplier.com",
    "sameAs": [
      "https://www.facebook.com/khanfishsupplier",
      "https://www.linkedin.com/company/khanfishsupplier"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FishStore", "Wholesaler"],
    "@id": "https://khanfishsupplier.com",
    "name": "Khan Fish Supplier",
    "image": "https://khanfishsupplier.com/images/fish.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Suite No.A/21, First Floor, Commercial Center, West Wharf, Dock Yard Road",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "postalCode": "74000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.844489,
      "longitude": 66.981810
    },
    "url": "https://khanfishsupplier.com",
    "telephone": "+92-310-2061037",
    "email": "info@khanfishsupplier.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "paymentAccepted": "Cash, Bank Transfer",
    "currenciesAccepted": "PKR",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://khanfishsupplier.com"
      }
    ]
  };

  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Premium Seafood Products - Khan Fish Supplier Karachi",
    "description": "Top quality seafood products available for wholesale and retail in Karachi, Pakistan",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Pomfret Fish",
        "description": "White and Black Pomfret - Premium quality",
        "category": "Seafood",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "PKR"
        }
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Shrimp and Prawns",
        "description": "Fresh and frozen shrimp - Various sizes available",
        "category": "Seafood",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "PKR"
        }
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Lobster",
        "description": "Live and frozen lobster - Premium quality",
        "category": "Seafood",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "PKR"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
    </>
  );
}
