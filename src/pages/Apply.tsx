import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const budgetRanges = [
  "$1,000 - $2,500/month",
  "$2,500 - $5,000/month",
  "$5,000 - $10,000/month",
  "$10,000 - $25,000/month",
  "$25,000+/month",
];

const businessTypes = [
  "E-commerce",
  "Local Business",
  "SaaS / Tech",
  "Professional Services",
  "Health & Wellness",
  "Education / Coaching",
  "Real Estate",
  "Other",
];

export const Apply = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    businessType: "",
    website: "",
    instagram: "",
    facebook: "",
    tiktok: "",
    linkedin: "",
    budgetRange: "",
    challenges: "",
    goals: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.businessName || !formData.businessType || !formData.budgetRange) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, business name, type, and budget are required.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="section-padding min-h-[80vh] flex items-center">
          <div className="container-narrow">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-6">Application Received!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your interest in working with Drey Vision Marketing. 
                Our team will review your application and get back to you within 2-3 business days.
              </p>
              <p className="text-muted-foreground">
                In the meantime, follow us on social media for tips and insights on digital marketing.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground mb-4 animate-fade-in-up">APPLY NOW</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Let's grow together
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              We're selective about who we work with to ensure exceptional results. 
              Fill out the form below and we'll be in touch within 2-3 business days.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding">
        <div className="container-narrow">
          <form onSubmit={handleSubmit} className="max-w-3xl">
            {/* Basic Info */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="businessName" className="text-sm font-medium mb-2 block">
                    Business Name *
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="businessType" className="text-sm font-medium mb-2 block">
                    Business Type *
                  </Label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full h-12 px-3 border border-input bg-background text-foreground rounded-md"
                    required
                  >
                    <option value="">Select type...</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Online Presence */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Online Presence</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="website" className="text-sm font-medium mb-2 block">
                    Website URL
                  </Label>
                  <Input
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="instagram" className="text-sm font-medium mb-2 block">
                    Instagram Handle
                  </Label>
                  <Input
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    placeholder="@yourbrand"
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="facebook" className="text-sm font-medium mb-2 block">
                    Facebook Page
                  </Label>
                  <Input
                    id="facebook"
                    name="facebook"
                    value={formData.facebook}
                    onChange={handleChange}
                    placeholder="facebook.com/yourbrand"
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="tiktok" className="text-sm font-medium mb-2 block">
                    TikTok Handle
                  </Label>
                  <Input
                    id="tiktok"
                    name="tiktok"
                    value={formData.tiktok}
                    onChange={handleChange}
                    placeholder="@yourbrand"
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin" className="text-sm font-medium mb-2 block">
                    LinkedIn
                  </Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="linkedin.com/company/yourbrand"
                    className="h-12"
                  />
                </div>
              </div>
            </div>

            {/* Budget */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Budget & Goals</h2>
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-medium mb-4 block">
                    Monthly Marketing Budget *
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {budgetRanges.map((range) => (
                      <label
                        key={range}
                        className={`p-4 border-2 cursor-pointer text-center text-sm transition-colors ${
                          formData.budgetRange === range
                            ? "border-foreground bg-foreground text-background"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        <input
                          type="radio"
                          name="budgetRange"
                          value={range}
                          checked={formData.budgetRange === range}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        {range}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="challenges" className="text-sm font-medium mb-2 block">
                    What are your current marketing challenges?
                  </Label>
                  <Textarea
                    id="challenges"
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleChange}
                    placeholder="Tell us about the obstacles you're facing..."
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="goals" className="text-sm font-medium mb-2 block">
                    What are your goals for the next 6-12 months?
                  </Label>
                  <Textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    placeholder="Revenue targets, customer acquisition, brand awareness..."
                    rows={4}
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="border-t border-border pt-8">
              <Button variant="hero" size="xl" type="submit">
                Submit Application
                <ArrowRight size={20} />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                By submitting this form, you agree to be contacted by our team regarding your application.
              </p>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};
