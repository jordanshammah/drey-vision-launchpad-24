import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every decision we make is backed by data and aimed at driving measurable growth for your business.",
  },
  {
    icon: Users,
    title: "Partnership First",
    description: "We're not just a vendor—we're an extension of your team, invested in your long-term success.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Innovation",
    description: "We stay ahead of trends and continuously optimize our strategies to maximize your ROI.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description: "We hold ourselves to the highest standards in everything we do, from strategy to execution.",
  },
];

export const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground mb-4 animate-fade-in-up">ABOUT US</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We build brands that dominate
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Drey Vision Marketing was founded with a simple mission: help ambitious 
              businesses achieve explosive growth through strategic digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-secondary aspect-square flex items-center justify-center">
              <p className="text-6xl font-black">DVM</p>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We started DVM because we saw a gap in the market. Too many agencies 
                  were focused on vanity metrics while their clients' businesses struggled 
                  to grow.
                </p>
                <p>
                  We built something different—an agency obsessed with real business 
                  outcomes. Revenue. Profit. Sustainable growth. These are the only 
                  metrics that matter.
                </p>
                <p>
                  Today, we work with a select group of clients who share our ambition 
                  for growth. We're picky about who we partner with because we invest 
                  everything into every relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium text-muted-foreground mb-4">OUR VALUES</p>
            <h2 className="text-3xl md:text-5xl font-black">
              What drives us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-background p-8 md:p-12">
                <value.icon size={40} className="mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-4">OUR APPROACH</p>
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Strategy first, always
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  We don't believe in cookie-cutter solutions. Every brand is unique, 
                  and every strategy should be too.
                </p>
                <p>
                  Our process starts with deep research into your business, your 
                  customers, and your competitive landscape. Only then do we craft 
                  a custom strategy designed to achieve your specific goals.
                </p>
              </div>
              <Button variant="hero" size="lg" asChild>
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              {["Discovery & Research", "Strategy Development", "Execution & Optimization", "Reporting & Scaling"].map((step, index) => (
                <div key={step} className="flex items-center gap-6 p-6 border-2 border-border hover:border-foreground transition-colors">
                  <span className="text-4xl font-black text-muted-foreground">0{index + 1}</span>
                  <span className="text-xl font-bold">{step}</span>
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
            Let's build something great together
          </h2>
          <p className="text-background/70 text-lg mb-8 max-w-2xl mx-auto">
            Ready to partner with a team that's as invested in your success as you are?
          </p>
          <Button 
            variant="outline" 
            size="xl" 
            className="border-background text-background hover:bg-background hover:text-foreground"
            asChild
          >
            <Link to="/apply">
              Apply Now
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};
