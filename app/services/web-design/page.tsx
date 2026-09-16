import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingView } from "@/components/sections";
import { SERVICES_DATA } from "@/lib/services-data";

const service = SERVICES_DATA["web-design"];

export const metadata: Metadata = {
  title: "Web Design // Editorial Visual Systems & UI/UX - MECNUN",
  description:
    "Bespoke digital design systems, high-fashion editorial UI/UX, and interactive Figma prototypes by MECNUN creative engineering studio.",
  openGraph: {
    title: "Web Design // Editorial Visual Systems - MECNUN",
    description:
      "Distinctive digital design systems and high-fashion editorial layouts that elevate your brand narrative.",
    type: "website",
    url: "https://mecnun.dev/services/web-design",
  },
  alternates: {
    canonical: "https://mecnun.dev/services/web-design",
  },
};

export default function WebDesignPage() {
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design Services",
    serviceType: "Digital Design & UI/UX Systems",
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
