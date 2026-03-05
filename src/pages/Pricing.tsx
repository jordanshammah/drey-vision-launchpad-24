import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const pricingPlans = [
  {
    name: "Growth",
    price: "$2,500",
    period: "/month",
    description: "Perfect for businesses ready to start scaling with paid advertising.",
    features: [
      "1 Platform (Facebook OR Instagram)",
      "Up to $5K ad spend management",
      "Campaign setup & optimization",
      "Bi-weekly reporting",
      "Email support",
      "Basic creative guidance",
    ],
    cta: "Apply Now",
    popular: false,
  },
  {
    name: "Scale",
    price: "$5,000",
    period: "/month",
    description: "For brands ready to dominate multiple platforms and scale aggressively.",
    features: [
      "All platforms (FB, IG, TikTok)",
      "Up to $20K ad spend management",
      "Advanced audience targeting",
      "Weekly reporting & calls",
      "Priority support",
      "Creative development included",
      "Retargeting campaigns",
      "Landing page optimization",
    ],
    cta: "Apply Now",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Full-service partnership for established brands with serious growth goals.",
    features: [
      "Unlimited platforms",
      "Unlimited ad spend management",
      "Dedicated account team",
      "Daily reporting & optimization",
      "24/7 priority support",
      "Full creative production",
      "Organic social management",
      "Influencer marketing",
      "Quarterly strategy reviews",
    ],
    cta: "Book a Call",
    popular: false,
  },
];

const addOns = [
  { name: "Social Media Management", price: "From $1,500/mo" },
  { name: "Content Creation Package", price: "From $1,000/mo" },
  { name: "Influencer Marketing", price: "Custom pricing" },
  { name: "Email Marketing Setup", price: "From $2,000 one-time" },
];

export const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-red-accent mb-4 animate-fade-in-up">PRICING</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Transparent pricing, real results
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              No hidden fees. No long-term contracts. Just straightforward pricing 
              for services that deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.name} 
                className={`relative p-8 md:p-10 border-2 ${
                  plan.popular 
                    ? "border-red-accent" 
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-accent text-red-accent-foreground px-4 py-1 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-black">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mb-8">{plan.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={20} className="shrink-0 mt-0.5 text-red-accent" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "hero" : "hero-outline"} 
                  className={`w-full ${plan.popular ? "bg-red-accent text-red-accent-foreground hover:bg-red-accent/90" : ""}`}
                  size="lg"
                  asChild
                >
                  <Link to="/apply">
                    {plan.cta}
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-red-accent mb-4">ADD-ONS</p>
            <h2 className="text-3xl md:text-4xl font-black">Enhance your package</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {addOns.map((addon) => (
              <div key={addon.name} className="flex justify-between items-center p-6 bg-background border border-border">
                <span className="font-semibold">{addon.name}</span>
                <span className="text-muted-foreground">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-medium text-red-accent mb-4">COMMON QUESTIONS</p>
              <h2 className="text-3xl md:text-4xl font-black mb-8">Before you apply</h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  q: "Is there a minimum commitment?",
                  a: "We recommend a minimum 3-month commitment for best results, but we don't lock you into long-term contracts. We earn your business month by month.",
                },
                {
                  q: "What's not included in pricing?",
                  a: "Ad spend is separate from management fees. You pay platforms directly for ad costs, giving you full transparency and control.",
                },
                {
                  q: "How quickly can we start?",
                  a: "Once approved, we can typically launch within 2-3 weeks after our strategy and onboarding process.",
                },
                {
                  q: "Do you work with all businesses?",
                  a: "We're selective about partnerships to ensure we can deliver exceptional results. Apply and we'll let you know if we're a good fit.",
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-border pb-6">
                  <h3 className="text-lg font-bold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to invest in growth?
          </h2>
          <p className="text-background/70 text-lg mb-8 max-w-2xl mx-auto">
            Apply now to see if we're the right fit for your business.
          </p>
          <Button 
            size="xl" 
            className="bg-red-accent text-red-accent-foreground hover:bg-red-accent/90"
            asChild
          >
            <Link to="/apply">
              Apply to Work With Us
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};
