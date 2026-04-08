import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LegalPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <header className="space-y-3">
            <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
            <p className="text-sm text-muted-foreground">Last updated: April 6, 2026</p>
          </header>

          <article className="space-y-6 text-sm leading-7 md:text-base">{children}</article>

          <div className="border-t border-border pt-6">
            <Link to="/" className="text-primary underline-offset-4 hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPageLayout;
