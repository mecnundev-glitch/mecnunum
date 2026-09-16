import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingView } from "@/components/sections";
import { SERVICES_DATA } from "@/lib/services-data";

const service = SERVICES_DATA["ecommerce"];

export const metadata: Metadata = {
  title: "E-Commerce // Headless Storefronts & High-Conversion UX - MECNUN",
  description:
    "Headless Shopify storefronts, custom checkout pipelines, and 3D product previews engineered for maximum conversion velocity.",
  openGraph: {
    title: "E-Commerce // Headless Storefronts - MECNUN",
    description:
      "Bespoke shopping experiences combining Headless Shopify, custom cart mechanics, and sub-second page transitions.",
    type: "website",
    url: "https://mecnun.dev/services/ecommerce",
  },
  alternates: {
    canonical: "https://mecnun.dev/services/ecommerce",
  },
};

export default function EcommercePage() {
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-Commerce Development Services",
    serviceType: "Headless E-Commerce & Storefront Engineering",
    provider: {
      "@type": "Organization",
      name: "MECNUN Studio",
      url: "https://mecnun.dev",
    },
    description: service.heroDescription,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ServiceLandingView service={service} />
    </>
  );
}
