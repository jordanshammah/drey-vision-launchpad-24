import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Information We Collect",
    content: "We may collect the following information:",
    list: ["Name", "Email address", "Phone number", "Business information", "Website usage data"],
    footer: "This information may be collected when you:",
    list2: ["Fill out a contact form", "Book a call", "Communicate with us", "Visit our website"],
  },
  {
    title: "2. How We Use Your Information",
    content: "We use collected information to:",
    list: ["Respond to inquiries", "Provide marketing services", "Improve our website", "Communicate with clients", "Schedule consultations"],
  },
  {
    title: "3. Data Protection",
    content: "We take reasonable steps to protect your personal information from unauthorized access or disclosure. However, no method of transmission over the internet is completely secure.",
  },
  {
    title: "4. Third-Party Services",
    content: "Our website may use third-party services including analytics and advertising platforms. These platforms may collect certain data through cookies or tracking technologies.",
  },
  {
    title: "5. Cookies",
    content: "Our website may use cookies to improve user experience and track website activity. You may disable cookies in your browser settings if preferred.",
  },
  {
    title: "6. Your Privacy Rights",
    content: "You may request access to or deletion of your personal information at any time by contacting us.",
  },
  {
    title: "7. Updates to this Policy",
    content: "This Privacy Policy may be updated periodically.",
  },
  {
    title: "8. Contact",
    content: "If you have questions regarding this Privacy Policy, please contact us.",
    cta: true,
  },
];

export const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding py-24">
        <div className="container-narrow">
          <ScrollReveal>
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Effective Date: March 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-16">
              This Privacy Policy explains how DreyVisionMarketing collects, uses, and protects your information.
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="border-l-2 border-border pl-6">
                  <h2 className="text-xl font-bold mb-3">{section.title}</h2>
                  {section.content && (
                    <p className="text-muted-foreground mb-3">{section.content}</p>
                  )}
                  {section.list && (
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
                      {section.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.footer && (
                    <p className="text-muted-foreground mb-3">{section.footer}</p>
                  )}
                  {(section as any).list2 && (
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
                      {(section as any).list2.map((item: string, j: number) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.cta && (
                    <Link
                      to="/contact"
                      className="inline-block mt-2 font-semibold text-red-accent hover:underline"
                    >
                      Contact Us →
                    </Link>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
