import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, CheckCircle, BarChart3, MessageCircle, Calendar, Megaphone, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const advertisingFeatures = [
"Facebook & Instagram Ads",
"TikTok Advertising",
"Audience Research & Targeting",
"Creative Strategy & Testing",
"Conversion Tracking Setup",
"Weekly Performance Reports",
"Retargeting Campaigns",
"Scaling Strategies"];


const webDevFeatures = [
"Custom website design tailored to your brand",
"Mobile-optimized and fast-loading pages",
"Conversion-focused layout to turn visitors into leads",
"Integration with booking systems, WhatsApp, or forms",
"SEO-friendly site structure",
"Monthly website maintenance and updates",
"Security monitoring and backups",
"Performance optimization"];


export const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-sm font-medium text-red-accent mb-4">OUR SERVICES</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Comprehensive digital growth solutions
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground">
                We offer two core services designed to drive real, measurable results 
                for your business. Each service can be tailored to your specific needs and goals.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Media Advertising */}
      <section className="section-padding" id="advertising">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-red-accent text-red-accent-foreground flex items-center justify-center">
                    <TrendingUp size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black">Social Media Advertising</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  Turn your ad spend into predictable revenue. Our data-driven approach to paid social media advertising ensures every penny works hard for your business.
                
                </p>
                <p className="text-muted-foreground mb-8">
                  We don't just run ads—we build conversion machines. From creative 
                  development to audience targeting to scaling strategies, we handle 
                  everything so you can focus on running your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="bg-red-accent text-red-accent-foreground hover:bg-red-accent/90" asChild>
                    <Link to="/apply">
                      Get Started
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-secondary p-8 md:p-12">
                <h3 className="text-xl font-bold mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {advertisingFeatures.map((feature) =>
                  <li key={feature} className="flex items-center gap-3">
                      <CheckCircle size={20} className="shrink-0 text-red-accent" />
                      <span>{feature}</span>
                    </li>
                  )}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-narrow">
        <div className="border-t border-border"></div>
      </div>

      {/* Web Development */}
      <section className="section-padding" id="web-development">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal delay={0.2}>
              <div className="order-2 lg:order-1 bg-secondary p-8 md:p-12">
                <h3 className="text-xl font-bold mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {webDevFeatures.map((feature) =>
                  <li key={feature} className="flex items-center gap-3">
                      <CheckCircle size={20} className="shrink-0 text-red-accent" />
                      <span>{feature}</span>
                    </li>
                  )}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-red-accent text-red-accent-foreground flex items-center justify-center">
                    <Users size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black">Web Development</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  We design and build high-converting websites that make your brand look 
                  premium, build trust with customers, and turn visitors into paying clients.
                </p>
                <p className="text-muted-foreground mb-8">
                  Your website is your digital storefront. We craft fast, modern, and 
                  conversion-focused sites that work seamlessly across all devices and 
                  help you stand out from the competition.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="bg-red-accent text-red-accent-foreground hover:bg-red-accent/90" asChild>
                    <Link to="/apply">
                      Get Started
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-medium text-red-accent mb-4">OUR PROCESS</p>
              <h2 className="text-3xl md:text-5xl font-black">How we work</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
            { icon: MessageCircle, title: "Discovery Call", description: "We learn about your business, goals, and challenges." },
            { icon: Target, title: "Strategy", description: "Custom strategy developed for your specific needs." },
            { icon: Megaphone, title: "Execution", description: "We launch and manage everything for you." },
            { icon: BarChart3, title: "Optimize", description: "Continuous testing and improvement for maximum ROI." }].
            map((step, index) =>
            <ScrollReveal key={step.title} delay={index * 0.1}>
                <div className="relative">
                  <div className="text-6xl font-black text-red-accent/20 mb-4">0{index + 1}</div>
                  <step.icon size={32} className="mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
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
              Ready to accelerate your growth?
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-2xl mx-auto">
              Book a free strategy call to discuss how we can help your business achieve its goals.
            </p>
            <Button
              size="xl"
              className="bg-red-accent text-red-accent-foreground hover:bg-red-accent/90"
              asChild>
              
              <Link to="/apply">
                Apply to Work With Us
                <ArrowRight size={20} />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>);

};