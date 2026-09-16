import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingView } from "@/components/sections";
import { SERVICES_DATA } from "@/lib/services-data";

const service = SERVICES_DATA["seo"];

export const metadata: Metadata = {
  title: "SEO & Performance // Technical Search Architecture - MECNUN",
  description:
    "Engineering-grade technical search engine optimization, JSON-LD Schema integration, and 100% Core Web Vitals pass rates.",
  openGraph: {
    title: "SEO & Performance // Technical Search Architecture - MECNUN",
    description:
      "Deep technical SEO architecture, structured Schema markup, and sub-second Core Web Vitals for maximum organic search dominance.",
    type: "website",
    url: "https://mecnun.dev/services/seo",
  },
  alternates: {
    canonical: "https://mecnun.dev/services/seo",
  },
};

export default function SeoPage() {
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Technical SEO & Performance Engineering",
    serviceType: "SEO Architecture & Core Web Vitals Optimization",
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
