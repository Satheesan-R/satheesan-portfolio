import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Rajasekar Satheesan. Built with <Heart size={14} className="text-primary" />
          </p>
          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex items-center gap-4 text-sm">
              <Link to="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Refund Policy
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:rajasekarsatheesan2003@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/Satheesan-R"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/Satheesan-R"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
