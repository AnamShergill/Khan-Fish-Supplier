'use client';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Khan Fish Supplier",
    "alternateName": "KhanFishSupplier",
    "url": "https://khanfishsupplier.com",
    "logo": "https://khanfishsupplier.com/images/logo2.png",
    "description": "Leading seafood supplier and exporter in Pakistan, specializing in premium quality fish and seafood distribution to international markets.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Suite No.A/21, First Floor, Commercial Center, West Wharf, Dock Yard Road",
      "addressLocality": "Karachi",
      "addressCountry": "Pakistan"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+92-310-2061037",
        "contactType": "sales",
        "areaServed": "PK",
        "availableLanguage": ["English", "Urdu"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+92-322-2666392",
        "contactType": "customer service",
        "areaServed": "PK",
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
    "@type": "LocalBusiness",
    "@id": "https://khanfishsupplier.com",
    "name": "Khan Fish Supplier",
    "image": "https://khanfishsupplier.com/images/logo2.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Suite No.A/21, First Floor, Commercial Center, West Wharf, Dock Yard Road",
      "addressLocality": "Karachi",
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
    ]
  };

  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Premium Seafood Products",
    "description": "Top export quality seafood products from Pakistan",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Ribbon Fish",
        "description": "Premium quality Ribbon Fish exported to Thailand",
        "category": "Seafood"
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Stingray (Ray Fish)",
        "description": "High-quality Stingray exported to Thailand & Malaysia",
        "category": "Seafood"
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Indian Mackerel",
        "description": "Fresh and frozen Indian Mackerel for Middle East & Asia",
        "category": "Seafood"
      },
      {
        "@type": "Product",
        "position": 4,
        "name": "Pomfret",
        "description": "White and Black Pomfret varieties",
        "category": "Seafood"
      },
      {
        "@type": "Product",
        "position": 5,
        "name": "Pangasius Fillets",
        "description": "Frozen Pangasius Fillets imported from Vietnam",
        "category": "Seafood"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
    </>
  );
}
