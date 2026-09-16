import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingView } from "@/components/sections";
import { SERVICES_DATA } from "@/lib/services-data";

const service = SERVICES_DATA["web-development"];

export const metadata: Metadata = {
  title: "Web Development // Next.js & Full-Stack Engineering - MECNUN",
  description:
    "Ultra-fast Next.js App Router applications, strict TypeScript engineering, and edge-native architecture by MECNUN.",
  openGraph: {
    title: "Web Development // Next.js & Full-Stack Engineering - MECNUN",
    description:
      "Production-ready Next.js applications engineered for rock-solid stability, sub-second load times, and global scale.",
    type: "website",
    url: "https://mecnun.dev/services/web-development",
  },
  alternates: {
    canonical: "https://mecnun.dev/services/web-development",
  },
};

export default function WebDevelopmentPage() {
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development Services",
    serviceType: "Full-Stack Next.js & TypeScript Engineering",
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
