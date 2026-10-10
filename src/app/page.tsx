import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Audiences } from "@/components/home/Audiences";
import { ProcessPinned } from "@/components/ProcessPinned";
import { Work } from "@/components/home/Work";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { processShort } from "@/data/process";
import { site, videos } from "@/data/site";

type BusinessLd = {
  "@context": "https://schema.org";
  "@type": "HomeAndConstructionBusiness";
  name: string;
  description: string;
  url: string;
  telephone?: string;
  email?: string;
  areaServed?: string;
};

function isKnownContact(value: string) {
  return !value.includes("•") && !value.includes("do uzupełnienia") && !value.includes("do potwierdzenia");
}

function businessLd(): BusinessLd {
  const data: BusinessLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
  };
  if (isKnownContact(site.phone)) data.telephone = site.phone;
  if (isKnownContact(site.email)) data.email = site.email;
  if (isKnownContact(site.region)) data.areaServed = site.region;
  return data;
}

const jsonLd = businessLd();

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main>
        <Hero />
        <Services />

        <Work />

        <Audiences />

        <ProcessPinned
          variant="compact"
          title="Jak pracuję"
          intro="Najwięcej czasu idzie na przygotowanie ściany. Od niego zależy, jak tapeta będzie wyglądać za kilka lat."
          steps={processShort}
          videos={videos.process}
          cta={{ href: "/jak-pracuje", label: "Cały proces krok po kroku" }}
        />

        <Faq />
      </main>
      <Footer />
    </>
  );
}
