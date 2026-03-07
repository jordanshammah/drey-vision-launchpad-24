import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Services",
    content: "DreyVisionMarketing provides digital marketing services including but not limited to:",
    list: [
      "Paid advertising management",
      "Social media marketing",
      "Marketing strategy and consulting",
      "Website design and development",
      "Brand growth and digital strategy",
    ],
    footer: "All services are provided based on the agreement between DreyVisionMarketing and the client.",
  },
  {
    title: "2. Client Responsibilities",
    content: "Clients agree to:",
    list: [
      "Provide accurate business information",
      "Provide required access to platforms such as advertising accounts or websites",
      "Respond to requests for information in a timely manner",
      "Maintain their own advertising budgets when running paid ads",
    ],
    footer: "Failure to provide necessary access or communication may affect service delivery.",
  },
  {
    title: "3. Payments",
    content: "All service fees must be paid in advance unless otherwise agreed in writing. Payments may include:",
    list: ["Monthly retainers", "Project-based fees", "Setup fees"],
    footer: "Failure to make payment may result in suspension or termination of services.",
  },
  {
    title: "4. Advertising Spend",
    content: null,
    list: [
      "Advertising budgets used on third-party platforms are separate from service fees.",
      "Clients are responsible for paying advertising costs directly to the advertising platforms.",
    ],
  },
  {
    title: "5. No Guarantee of Results",
    content: "While DreyVisionMarketing works to achieve the best possible results, we do not guarantee specific outcomes such as:",
    list: ["Sales", "Leads", "Revenue", "Return on advertising spend"],
    footer: "Marketing results depend on many factors outside our control.",
  },
  {
    title: "6. Intellectual Property",
    content: null,
    list: [
      "All strategies, designs, campaigns, and marketing materials created by DreyVisionMarketing remain the property of the agency until full payment has been received.",
      "Once payment is completed, clients may use the delivered work for their business.",
    ],
  },
  {
    title: "7. Termination",
    content: null,
    list: [
      "Either party may terminate services with written notice.",
      "Any outstanding payments must be settled before termination is finalized.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: "DreyVisionMarketing shall not be held liable for any indirect, incidental, or consequential damages resulting from the use of our services.",
  },
  {
    title: "9. Changes to Terms",
    content: "We reserve the right to update or modify these Terms of Service at any time.",
  },
  {
    title: "10. Contact",
    content: "If you have questions regarding these Terms, please contact us.",
    cta: true,
  },
];

export const Terms = () => {
  return (
    <Layout>
      <section className="section-padding py-24">
        <div className="container-narrow">
          <ScrollReveal>
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Effective Date: March 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-16">
              Welcome to DreyVisionMarketing. By accessing this website or using our services, you agree to the following Terms of Service. If you do not agree with these terms, please do not use our services.
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
                    <p className="text-muted-foreground">{section.footer}</p>
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
