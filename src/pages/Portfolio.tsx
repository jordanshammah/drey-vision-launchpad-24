import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import queensFurnitureResults from "@/assets/queens-furniture-results.png";
import urbanEatsResults from "@/assets/urban-eats-results.png";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

const caseStudies = [
{
  id: "luxe-interiors",
  title: "",
  category: "Interior Design",
  service: "Paid Advertising",
  result: "320% increase in qualified leads",
  description: "Transformed a struggling local interior design firm into a booked-out luxury brand through strategic Facebook and Instagram advertising. 500 New message inquiries within their first week working with us.",
  metrics: [
  { label: "ROAS", value: "6.2x" },
  { label: "Lead Cost", value: "-91%" },
  { label: "Revenue", value: "+$120k" }]

},
{
  id: "fitlife-nutrition",
  title: "FitLife Nutrition",
  category: "E-commerce",
  service: "Paid Advertising + Management",
  result: "$500K monthly revenue achieved",
  description: "Scaled a supplement brand from $50K to $500K in monthly revenue through a combination of paid advertising and organic social growth.",
  metrics: [
  { label: "ROAS", value: "4.8x" },
  { label: "Followers", value: "+150K" },
  { label: "Revenue", value: "10x" }]

},
{
  id: "urban-eats",
  title: "",
  category: "E-Commerce Brand",
  service: "Paid Advertising ",
  result: "Generating an extra $89k in revenue? That's our specialty!",
  description: "Developed a well-researched client acquisition funnel for an e-commerce brand, leveraging data-driven strategies to drive measurable sales and real-world results.",
  metrics: [
  { label: "ROAS", value: "12.97x" },
  { label: "Generated", value: "+$89K" },
  { label: "AVG CPR", value: "+$7" }]

},
{
  id: "apex-coaching",
  title: "Apex Business Coaching",
  category: "Professional Services",
  service: "Paid Advertising",
  result: "Fully booked within 90 days",
  description: "Positioned a business coach as an industry authority and filled their high-ticket program through targeted LinkedIn and Facebook campaigns.",
  metrics: [
  { label: "Lead Quality", value: "+200%" },
  { label: "Program Fill", value: "100%" },
  { label: "Revenue", value: "+$800K" }]

}];


export const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-sm font-medium text-red-accent mb-4">PORTFOLIO</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                ​Turning strategy into scalable results
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground">
From increasing engagement to improving ROI, we provide the tools and expertise to help you succeed in a competitive digital landscape.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-16">
            {caseStudies.map((study, index) =>
            <ScrollReveal key={study.id}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[4/3] bg-secondary flex items-center justify-center overflow-hidden">
                      {study.id === "luxe-interiors" ?
                    <img src={queensFurnitureResults} alt="Queens Furniture campaign results" className="w-full h-full object-contain" /> :
                    study.id === "urban-eats" ?
                    <img src={urbanEatsResults} alt="Urban Eats campaign results" className="w-full h-full object-contain" /> :

                    <TrendingUp size={80} strokeWidth={1} className="text-red-accent/30" />
                    }
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-muted-foreground">{study.category}</span>
                      <span className="text-red-accent">•</span>
                      <span className="text-sm font-medium text-muted-foreground">{study.service}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-2">{study.title}</h2>
                    <p className="text-xl font-bold text-red-accent mb-4">{study.result}</p>
                    <p className="text-muted-foreground mb-8">{study.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {study.metrics.map((metric) =>
                    <div key={metric.label} className="text-center p-4 bg-secondary">
                          <p className="text-2xl md:text-3xl font-black">
                            <AnimatedCounter value={metric.value} />
                          </p>
                          <p className="text-sm text-muted-foreground">{metric.label}</p>
                        </div>
                    )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-red-accent mb-4">BY THE NUMBERS</p>
              <h2 className="text-3xl md:text-5xl font-black">Our collective impact</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
            { value: "$2M+", label: "Revenue Generated" },
            { value: "500%", label: "Average ROAS" },
            { value: "50+", label: "Brands Scaled" },
            { value: "96%", label: "Client Retention" }].
            map((stat, i) =>
            <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-black mb-2">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Want results like these?
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-2xl mx-auto">
              Apply to work with us and let's discuss how we can help your business grow.
            </p>
            <Button
              size="xl"
              className="bg-red-accent text-red-accent-foreground hover:bg-red-accent/90"
              asChild>
              
              <Link to="/apply">
                Apply Now
                <ArrowRight size={20} />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>);

};