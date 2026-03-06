import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

const stats = [
  { value: "500%", label: "Average ROAS" },
  { value: "50+", label: "Brands Scaled" },
  { value: "$10M+", label: "Revenue Generated" },
  { value: "24/7", label: "Support" },
];

const services = [
  {
    icon: TrendingUp,
    title: "Social Media Advertising",
    description: "Data-driven paid campaigns that convert. Facebook, Instagram, TikTok, and beyond.",
  },
  {
    icon: Users,
    title: "Web Development",
    description: "High-converting, mobile-optimized websites that build trust and turn visitors into clients.",
  },
];

const testimonials = [
  {
    quote: "DVM transformed our online presence. We went from struggling to get leads to having more clients than we can handle.",
    author: "Sarah Chen",
    role: "Founder, Luxe Interiors",
  },
  {
    quote: "Professional, results-driven, and genuinely invested in our success. The best decision we made for our brand.",
    author: "Marcus Johnson",
    role: "CEO, FitLife Nutrition",
  },
];

export const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding min-h-[90vh] flex items-center">
        <div className="container-narrow">
          <div className="max-w-4xl">
            <ScrollReveal>
              <p className="text-sm md:text-base font-medium text-muted-foreground mb-4">
                DREY VISION MARKETING
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                Where digital strategy meets{" "}
                <span className="text-red-accent">real growth</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                We help ambitious brands scale through strategic social media 
                advertising and management. No fluff. Just results.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="bg-red-accent text-red-accent-foreground hover:bg-red-accent/90" asChild>
                  <Link to="/apply">
                    Apply to Work With Us
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-foreground text-background section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <p className="text-3xl md:text-5xl font-black mb-2">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="text-background/60 text-sm md:text-base">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-medium text-red-accent mb-4">WHAT WE DO</p>
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Strategic growth, executed flawlessly
              </h2>
              <p className="text-lg text-muted-foreground">
                We specialize in two core services that drive real, measurable results for your business.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.15}>
                <div className="group p-8 md:p-12 border-2 border-border hover:border-foreground transition-colors h-full">
                  <service.icon size={40} className="mb-6 text-red-accent" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-2 font-semibold group-hover:gap-4 transition-all"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm font-medium text-red-accent mb-4">WHY DVM</p>
                <h2 className="text-3xl md:text-5xl font-black mb-6">
                  We're not your average agency
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're selective about who we work with because we invest deeply in every 
                  partnership. When you work with us, you get a dedicated team obsessed 
                  with your growth.
                </p>
                <ul className="space-y-4">
                  {[
                    "Transparent reporting & communication",
                    "Proven frameworks that deliver ROI",
                    "Dedicated strategist for your account",
                    "No long-term contracts required",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-accent"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-foreground text-background p-8 flex flex-col justify-end aspect-square">
                  <Zap size={32} className="mb-4 text-red-accent" />
                  <p className="font-bold">Fast Execution</p>
                </div>
                <div className="bg-foreground text-background p-8 flex flex-col justify-end aspect-square mt-8">
                  <Target size={32} className="mb-4 text-red-accent" />
                  <p className="font-bold">Precision Targeting</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-narrow">
          <ScrollReveal>
            <p className="text-sm font-medium text-red-accent mb-4 text-center">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">
              What our clients say
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={testimonial.author} delay={i * 0.15}>
                <div className="p-8 md:p-12 border-2 border-border h-full">
                  <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Ready to scale your brand?
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-2xl mx-auto">
              We work with a limited number of clients to ensure exceptional results. 
              Apply today to see if we're a good fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};
