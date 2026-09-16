import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingView } from "@/components/sections";
import { SERVICES_DATA } from "@/lib/services-data";

const service = SERVICES_DATA["3d-experiences"];

export const metadata: Metadata = {
  title: "3D Interactive Experiences // WebGL & Spatial Engineering - MECNUN",
  description:
    "Immersive Three.js environments, React Three Fiber spatial configurators, and custom GLSL shaders with locked 60fps performance.",
  openGraph: {
    title: "3D Interactive Experiences // WebGL & Spatial Engineering - MECNUN",
    description:
      "Hardware-accelerated 3D WebGL experiences and interactive spatial product configurators running fluidly in modern browsers.",
    type: "website",
    url: "https://mecnun.dev/services/3d-experiences",
  },
  alternates: {
    canonical: "https://mecnun.dev/services/3d-experiences",
  },
};

export default function ThreeDExperiencesPage() {
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "3D Interactive Experience Engineering",
    serviceType: "WebGL & Spatial 3D Development",
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
