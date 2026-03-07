import { Link } from "react-router-dom";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface Package {
  name: string;
  features: string[];
  cta: string;
  popular?: boolean;
  note?: string;
}

interface ServiceSection {
  title: string;
  description: string;
  packages: Package[];
}

const sections: ServiceSection[] = [
  {
    title: "Social Media Advertising",
    description: "Run high-performing ad campaigns designed to generate leads, sales, and brand growth.",
    packages: [
      {
        name: "Starter Growth",
        features: [
          "Campaign strategy setup",
          "1–2 ad campaigns",
          "Audience targeting",
          "Weekly monitoring",
          "Monthly report",
        ],
        cta: "Book Strategy Call",
      },
      {
        name: "Business Scale",
        popular: true,
        features: [
          "Advanced campaign strategy",
          "3–5 campaigns",
          "Advanced targeting",
          "Weekly optimization",
          "Detailed analytics",
        ],
        cta: "Get Custom Quote",
      },
      {
        name: "Dominator",
        features: [
          "Full funnel ad strategy",
          "Multi campaign structure",
          "Advanced retargeting",
          "Daily monitoring",
          "Scaling & testing",
        ],
        cta: "Schedule Consultation",
      },
    ],
  },
  {
    title: "Web Development",
    description: "Beautiful, fast, and conversion-focused websites built to grow your business.",
    packages: [
      {
        name: "Launch Website",
        features: [
          "Up to 5 pages",
          "Mobile responsive design",
          "Contact forms",
          "Basic SEO setup",
          "Website launch setup",
        ],
        note: "Ongoing website maintenance available through a monthly maintenance plan.",
        cta: "Request Quote",
      },
      {
        name: "Business Website",
        popular: true,
        features: [
          "Up to 10 pages",
          "Custom UI/UX design",
          "SEO optimization",
          "Analytics integration",
          "Speed optimization",
        ],
        note: "Ongoing website maintenance available through a monthly maintenance plan.",
        cta: "Get Pricing",
      },
      {
        name: "Premium Website",
        features: [
          "Fully custom website",
          "Advanced animations",
          "Conversion optimized design",
          "CMS integration",
          "Advanced performance optimization",
        ],
        note: "Ongoing website maintenance available through a monthly maintenance plan.",
        cta: "Schedule Consultation",
      },
    ],
  },
  {
    title: "Growth Packages",
    description: "The ultimate solution for businesses that want both a high-converting website and powerful advertising.",
    packages: [
      {
        name: "Digital Launch",
        features: [
          "Custom 5 page website",
          "Landing page optimization",
          "Ads setup",
          "2 ad campaigns",
          "Monthly reporting",
        ],
        cta: "Book Strategy Call",
      },
      {
        name: "Business Accelerator",
        popular: true,
        features: [
          "Custom 10 page website",
          "Conversion optimized pages",
          "4–5 ad campaigns",
          "Retargeting ads",
          "Monthly optimization",
        ],
        cta: "Get Custom Quote",
      },
      {
        name: "Market Dominator",
        features: [
          "Premium website build",
          "Advanced funnel system",
          "Multi platform ads",
          "Advanced testing",
          "Priority support",
        ],
        cta: "Schedule Consultation",
      },
    ],
  },
];

const PackageCard = ({ pkg, index }: { pkg: Package; index: number }) => (
  <ScrollReveal delay={index * 0.12}>
    <div
      className={`relative h-full flex flex-col p-8 md:p-10 border-2 transition-all duration-500 group ${
        pkg.popular
          ? "border-red-accent shadow-[0_8px_40px_-12px_hsl(var(--red-accent)/0.25)] scale-[1.03] z-10"
          : "border-border hover:border-foreground/30 hover:shadow-[0_8px_30px_-12px_hsl(var(--foreground)/0.1)]"
      } hover:-translate-y-1`}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-accent text-red-accent-foreground px-5 py-1.5 text-xs font-bold tracking-widest flex items-center gap-1.5">
          <Star size={12} fill="currentColor" />
          MOST POPULAR
        </div>
      )}

      <h3 className="text-xl font-black mb-6 tracking-tight">{pkg.name}</h3>

      <ul className="space-y-4 flex-1 mb-8">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              size={18}
              className={`shrink-0 mt-0.5 ${pkg.popular ? "text-red-accent" : "text-muted-foreground"}`}
            />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {pkg.note && (
        <p className="text-xs text-muted-foreground italic border-t border-border pt-4 mb-6">
          {pkg.note}
        </p>
      )}

      <Button
        variant={pkg.popular ? "hero" : "hero-outline"}
        className={`w-full ${pkg.popular ? "bg-red-accent text-red-accent-foreground hover:bg-red-accent/90" : ""}`}
        size="lg"
        asChild
      >
        <Link to="/apply">
          {pkg.cta}
          <ArrowRight size={18} />
        </Link>
      </Button>
    </div>
  </ScrollReveal>
);

const ServiceSectionBlock = ({ section, sectionIndex }: { section: ServiceSection; sectionIndex: number }) => (
  <section className={`section-padding ${sectionIndex % 2 === 1 ? "bg-secondary" : ""}`}>
    <div className="container-narrow">
      <ScrollReveal>
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-red-accent mb-3 tracking-widest uppercase">
            {String(sectionIndex + 1).padStart(2, "0")}
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-4">{section.title}</h2>
          <p className="text-muted-foreground text-lg">{section.description}</p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {section.packages.map((pkg, i) => (
          <PackageCard key={pkg.name} pkg={pkg} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-sm font-medium text-red-accent mb-4 tracking-widest">PACKAGES</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Service Packages
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground">
                Helping brands grow through high-performing websites and paid advertising.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {sections.map((section, i) => (
        <ServiceSectionBlock key={section.title} section={section} sectionIndex={i} />
      ))}

      {/* Note */}
      <section className="px-6 py-12 md:px-12">
        <ScrollReveal>
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto italic">
            Every business is unique. Pricing is determined after a short strategy call so we can
            understand your goals and recommend the best solution.
          </p>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Not sure which package is right for you?
            </h2>
            <p className="text-background/70 text-lg mb-10 max-w-2xl mx-auto">
              Book a free 15-minute strategy call and we'll recommend the best approach for your
              business.
            </p>
            <Button
              size="xl"
              className="bg-red-accent text-red-accent-foreground hover:bg-red-accent/90"
              asChild
            >
              <Link to="/apply">
                Book Free Strategy Call
                <ArrowRight size={20} />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};
