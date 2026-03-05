import { Link } from "react-router-dom";
import dvmLogo from "@/assets/dvm-logo.jpeg";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={dvmLogo} alt="Drey Vision Marketing" className="h-12 w-auto mb-4" />
            <p className="text-background/70 max-w-md">
              Where digital strategy meets real growth. We help ambitious brands 
              scale through strategic social media advertising and management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Portfolio", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-background/70">
              <li>hello@dreyvision.com</li>
              <li>
                <Link 
                  to="/apply" 
                  className="text-red-accent font-semibold hover:underline"
                >
                  Apply to Work With Us →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Drey Vision Marketing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link to="/privacy" className="hover:text-background">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-background">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
