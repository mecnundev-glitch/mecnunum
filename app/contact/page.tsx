import { Metadata } from "next";
import { ContactSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact // Have a project in mind?",
  description:
    "Initiate your digital project transmission. We engineer bespoke Next.js platforms, 3D WebGL experiences, and high-performance websites for forward-thinking brands.",
  openGraph: {
    title: "Contact // Have a project in mind? - MECNUN",
    description:
      "Initiate your digital project transmission. We engineer bespoke Next.js platforms, 3D WebGL experiences, and high-performance websites.",
    type: "website",
    url: "https://mecnun.dev/contact",
  },
  alternates: {
    canonical: "https://mecnun.dev/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Mecnun Studio",
    description: "Initiate your digital project transmission with Mecnun creative engineering studio.",
    url: "https://mecnun.dev/contact",
    mainEntity: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@mecnunum.com",
      areaServed: "Global",
      availableLanguage: ["English", "Turkish"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-8">
        <ContactSection />
      </div>
    </>
  );
}
