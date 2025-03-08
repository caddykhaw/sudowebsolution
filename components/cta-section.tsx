// components/cta-section.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact-form";

interface CTASectionProps {
  id?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showContactForm?: boolean;
}

export default function CTASection({
  title = "Ready to Transform Your Online Presence?",
  description = "Take the first step toward digital success. Schedule a free consultation with our team today.",
  primaryButtonText = "Contact Us",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "#services",
  showContactForm = false,
}: CTASectionProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg mb-10 max-w-xl mx-auto">{description}</p>

          {showContactForm ? (
            <ContactForm />
          ) : (
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href={primaryButtonLink}>{primaryButtonText}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}