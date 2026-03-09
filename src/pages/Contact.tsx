import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useRateLimit } from "@/hooks/use-rate-limit";
import { contactFormSchema } from "@/lib/validation";
import { sanitizeFormData } from "@/lib/sanitize";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { checkRateLimit, getRemainingCooldown } = useRateLimit({ maxAttempts: 3, windowMs: 60_000, cooldownMs: 60_000 });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", instagram: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Rate limit check
    if (!checkRateLimit()) {
      const cooldown = getRemainingCooldown();
      toast({ title: "Too many submissions", description: `Please wait ${cooldown}s before trying again.`, variant: "destructive" });
      return;
    }

    // Validate
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      toast({ title: "Please fix the errors below", variant: "destructive" });
      return;
    }

    // Sanitize
    const sanitized = sanitizeFormData(result.data);

    const phone = "254712954629";
    const text = `New Contact Form Submission%0A%0AName: ${encodeURIComponent(sanitized.name)}%0AEmail: ${encodeURIComponent(sanitized.email)}%0ASubject: ${encodeURIComponent(sanitized.subject || "N/A")}%0AInstagram: ${encodeURIComponent(sanitized.instagram || "N/A")}%0AMessage: ${encodeURIComponent(sanitized.message)}`;
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-sm font-medium text-red-accent mb-4">CONTACT</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Get in touch
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground">
                Have a question or want to learn more about how we can help? We'd love to hear from you.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <ScrollReveal>
              <div>
                <div className="space-y-8 mb-12">
                  {[
                    { icon: Mail, title: "Email Us", desc: "hello@dreyvision.com" },
                    { icon: MapPin, title: "Location", desc: "Remote-first, serving clients globally" },
                    { icon: Clock, title: "Response Time", desc: "We typically respond within 2-3 business days" },
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
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={0.2}>
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
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium mb-2 block">Your Name *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" className="h-12" maxLength={100} required />
                        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium mb-2 block">Email Address *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className="h-12" maxLength={255} required />
                        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium mb-2 block">Subject</Label>
                      <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" className="h-12" maxLength={200} />
                      {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                      <Label htmlFor="instagram" className="text-sm font-medium mb-2 block">Instagram <span className="text-muted-foreground font-normal">(recommended)</span></Label>
                      <Input id="instagram" name="instagram" value={formData.instagram} onChange={handleChange} placeholder="@yourhandle" className="h-12" maxLength={100} />
                      {errors.instagram && <p className="text-sm text-destructive mt-1">{errors.instagram}</p>}
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium mb-2 block">Message *</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more about your inquiry..." rows={6} maxLength={2000} required />
                      {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                    </div>
                    <Button variant="hero" size="lg" type="submit" className="w-full md:w-auto bg-red-accent text-red-accent-foreground hover:bg-red-accent/90">
                      Send Message
                      <ArrowRight size={18} />
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};
