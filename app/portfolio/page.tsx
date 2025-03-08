// app/portfolio/page.tsx
"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Code, Bookmark, Users, ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI Solutions" },
    { id: "automation", label: "Automation" },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "TechGrow E-commerce Platform",
      description:
        "A high-performance e-commerce platform with real-time inventory management and AI-powered product recommendations.",
      image: "/api/placeholder/600/400",
      category: "web",
      tags: ["Next.js", "Stripe", "MongoDB", "AI Integration"],
    },
    {
      id: 2,
      title: "HealthTrack Patient Portal",
      description:
        "A secure patient portal allowing users to manage appointments, view medical records, and communicate with healthcare providers.",
      image: "/api/placeholder/600/400",
      category: "web",
      tags: ["React", "Node.js", "HIPAA Compliant", "Authentication"],
    },
    {
      id: 3,
      title: "Smart Home Automation System",
      description:
        "An IoT-based home automation system with custom dashboards and voice control capabilities.",
      image: "/api/placeholder/600/400",
      category: "automation",
      tags: ["N8N", "IoT", "Voice Recognition", "Dashboard"],
    },
    {
      id: 4,
      title: "Virtual Shopping Assistant",
      description:
        "Digital avatar assistant that helps online shoppers find products, answer questions, and provide personalized recommendations.",
      image: "/api/placeholder/600/400",
      category: "ai",
      tags: ["Digital Avatar", "NLP", "E-commerce", "Customer Service"],
    },
    {
      id: 5,
      title: "Educational Course Platform",
      description:
        "Feature-rich learning management system with video courses, progress tracking, and certification functionality.",
      image: "/api/placeholder/600/400",
      category: "web",
      tags: ["TypeScript", "Video Streaming", "Authentication", "Payments"],
    },
    {
      id: 6,
      title: "AI-Generated Training Videos",
      description:
        "Customizable AI video generation system for creating corporate training and onboarding content at scale.",
      image: "/api/placeholder/600/400",
      category: "ai",
      tags: ["AI Video", "Corporate Training", "Customization", "Scalable"],
    },
    {
      id: 7,
      title: "Business Process Automation",
      description:
        "End-to-end workflow automation for a financial services company, reducing manual tasks by 70%.",
      image: "/api/placeholder/600/400",
      category: "automation",
      tags: ["N8N", "API Integration", "Financial Services", "Data Processing"],
    },
    {
      id: 8,
      title: "Real Estate Virtual Tours",
      description:
        "Interactive 3D virtual tours for real estate listings with digital avatars as property guides.",
      image: "/api/placeholder/600/400",
      category: "ai",
      tags: [
        "3D Visualization",
        "Digital Avatars",
        "Real Estate",
        "Interactive",
      ],
    },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Discover our successful projects and how we've helped businesses
              transform their digital presence.
            </p>
          </motion.div>

          {/* Floating elements background */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-white"></div>
            <div className="absolute top-40 right-40 w-12 h-12 rounded-full bg-white"></div>
            <div className="absolute top-60 right-20 w-16 h-16 rounded-full bg-white"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-10 bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${
                  filter === category.id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeIn}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        item.category === "web"
                          ? "bg-blue-100 text-blue-800"
                          : item.category === "ai"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {item.category === "web"
                        ? "Web Development"
                        : item.category === "ai"
                        ? "AI Solution"
                        : "Automation"}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                No projects found in this category
              </h3>
              <p className="text-gray-600 mb-6">
                Try selecting a different category or check back later for new
                projects.
              </p>
              <Button
                onClick={() => setFilter("all")}
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's what our clients have to say about their experiences
              working with us.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                quote:
                  "The team at Sudo Web Solution transformed our outdated e-commerce platform into a modern, user-friendly site that has increased our conversion rate by 45%.",
                author: "Alex Rodriguez",
                position: "CEO, TechGrow",
                company: "TechGrow E-commerce Platform",
              },
              {
                quote:
                  "Implementing the AI-powered virtual shopping assistant has reduced our customer service inquiries by 30% while improving overall customer satisfaction.",
                author: "Sarah Chen",
                position: "Marketing Director",
                company: "Virtual Shopping Assistant",
              },
              {
                quote:
                  "The workflow automation system has saved our team countless hours on repetitive tasks, allowing us to focus on strategic initiatives and growing our business.",
                author: "Michael Johnson",
                position: "Operations Manager",
                company: "Business Process Automation",
              },
              {
                quote:
                  "Our real estate listings with virtual tours have seen 3x more engagement than traditional listings, giving us a significant edge in a competitive market.",
                author: "Jessica Parker",
                position: "Lead Agent",
                company: "Real Estate Virtual Tours",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 rounded-xl p-8 shadow-sm"
              >
                <svg
                  className="h-8 w-8 text-indigo-400 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.position}
                  </p>
                  <p className="text-indigo-600 text-sm mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Next Digital Project?"
        description="Let's discuss how we can create a tailored solution that meets your specific business needs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
        showContactForm={false}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
