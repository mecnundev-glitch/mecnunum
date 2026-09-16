import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingView } from "@/components/sections";
import { SERVICES_DATA } from "@/lib/services-data";

const service = SERVICES_DATA["corporate-websites"];

export const metadata: Metadata = {
  title: "Corporate Websites // Enterprise Digital Flagships - MECNUN",
  description:
    "Authoritative digital flagships built to inspire investor, partner, and enterprise client confidence with global edge infrastructure.",
  openGraph: {
    title: "Corporate Websites // Enterprise Digital Flagships - MECNUN",
    description:
      "Enterprise web presences combining executive-level aesthetics, multi-region scalability, and clear stakeholder messaging.",
    type: "website",
    url: "https://mecnun.dev/services/corporate-websites",
  },
  alternates: {
    canonical: "https://mecnun.dev/services/corporate-websites",
  },
};

export default function CorporateWebsitesPage() {
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate Website Development",
    serviceType: "Enterprise Digital Flagships & CMS Architecture",
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
