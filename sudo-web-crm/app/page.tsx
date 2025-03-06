// app/page.tsx
import Header from "@/components/header";
import { Button } from "@/components/ui/button"; // Add this line
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Build Your Dream Website with Sudo Web Solution
          </h2>
          <p className="text-lg md:text-xl mb-6">
            We create fast, modern, and affordable websites tailored to your
            needs.
          </p>
          <Button size="lg" asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Custom Websites</h4>
              <p className="text-gray-600">
                Tailored designs and functionality to suit your business.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Client Portal</h4>
              <p className="text-gray-600">
                Manage payments, invoices, and account details easily.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
              <p className="text-gray-600">
                Get your website up and running in no time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-900 text-white text-center">
        <p>© 2025 Sudo Web Solution. All rights reserved.</p>
        <p>Contact: info@sudowebsolution.com</p>
      </footer>
    </div>
  );
}
