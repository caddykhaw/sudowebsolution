import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative text-center py-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Powerful CRM for Web Hosting Management
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Manage clients, automate billing, and handle support with ease.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
