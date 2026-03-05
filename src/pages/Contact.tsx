import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Please fill in required fields", description: "Name, email, and message are required.", variant: "destructive" });
      return;
    }
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-red-accent mb-4 animate-fade-in-up">CONTACT</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Get in touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Have a question or want to learn more about how we can help? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="space-y-8 mb-12">
                {[
                  { icon: Mail, title: "Email Us", desc: "hello@dreyvision.com" },
                  { icon: MapPin, title: "Location", desc: "Remote-first, serving clients globally" },
                  { icon: Clock, title: "Response Time", desc: "We typically respond within 24 hours" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-secondary">
                <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
                <p className="text-muted-foreground mb-6">
                  If you're ready to work with us, skip the contact form and apply directly.
                </p>
                <Button className="bg-red-accent text-red-accent-foreground hover:bg-red-accent/90" asChild>
                  <Link to="/apply">
                    Apply to Work With Us
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-red-accent text-red-accent-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-2 block">Your Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" className="h-12" required />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-2 block">Email Address *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className="h-12" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium mb-2 block">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" className="h-12" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium mb-2 block">Message *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more about your inquiry..." rows={6} required />
                  </div>
                  <Button variant="hero" size="lg" type="submit" className="w-full md:w-auto bg-red-accent text-red-accent-foreground hover:bg-red-accent/90">
                    Send Message
                    <ArrowRight size={18} />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
