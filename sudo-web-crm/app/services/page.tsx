// app/services/page.tsx
"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Code,
  Brain,
  Workflow,
  Database,
  Video,
  User,
  Check,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

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

  const serviceCategories = [
    {
      id: "web-services",
      title: "Web Services",
      description:
        "Comprehensive web solutions to establish and enhance your online presence",
      services: [
        {
          icon: <Code className="h-8 w-8 text-indigo-600" />,
          title: "Web Design & Development",
          description:
            "Custom, responsive websites built with modern technologies to capture your brand essence and deliver exceptional user experiences.",
          features: [
            "Responsive design for all devices",
            "SEO-friendly architecture",
            "Custom UI/UX design",
            "Content management systems",
            "E-commerce functionality",
          ],
        },
        {
          icon: <Globe className="h-8 w-8 text-indigo-600" />,
          title: "Domain Registration",
          description:
            "Secure the perfect domain name for your business with our hassle-free registration service and expert assistance.",
          features: [
            "Domain name consultation",
            "Wide range of TLDs (.com, .org, .net, etc.)",
            "Domain transfer services",
            "Privacy protection",
            "Auto-renewal options",
          ],
        },
        {
          icon: <Server className="h-8 w-8 text-indigo-600" />,
          title: "Web Hosting",
          description:
            "Fast, secure, and reliable hosting solutions to keep your website running smoothly with maximum uptime.",
          features: [
            "99.9% uptime guarantee",
            "24/7 technical support",
            "Daily backups",
            "SSL certificates",
            "Scalable hosting plans",
          ],
        },
      ],
    },
    {
      id: "ai-services",
      title: "AI Solutions",
      description:
        "Cutting-edge artificial intelligence services to transform your business operations",
      services: [
        {
          icon: <Brain className="h-8 w-8 text-purple-600" />,
          title: "AI Integration",
          description:
            "Incorporate powerful AI capabilities into your existing systems and workflows to enhance productivity and decision-making.",
          features: [
            "Custom AI model implementation",
            "Natural language processing",
            "Predictive analytics",
            "Machine learning solutions",
            "AI strategy consulting",
          ],
        },
        {
          icon: <Database className="h-8 w-8 text-purple-600" />,
          title: "RAG (Retrieval-Augmented Generation)",
          description:
            "Enhance your AI applications with our RAG systems that combine information retrieval with text generation for more accurate and contextual responses.",
          features: [
            "Knowledge base integration",
            "Custom vector databases",
            "Semantic search implementation",
            "Document processing pipelines",
            "AI response enhancement",
          ],
        },
        {
          icon: <User className="h-8 w-8 text-purple-600" />,
          title: "Digital Avatars",
          description:
            "Create photorealistic or stylized digital avatars for your brand, customer service, or marketing campaigns.",
          features: [
            "Customizable 3D avatars",
            "Voice synthesis integration",
            "Animation capabilities",
            "Brand personality alignment",
            "Multi-platform compatibility",
          ],
        },
        {
          icon: <Video className="h-8 w-8 text-purple-600" />,
          title: "AI Video Generation",
          description:
            "Generate high-quality video content with AI to enhance your marketing, training, and communication efforts.",
          features: [
            "Script-to-video conversion",
            "AI-powered video editing",
            "Custom video templates",
            "Multilingual capabilities",
            "Brand consistency automation",
          ],
        },
      ],
    },
    {
      id: "automation",
      title: "Automation",
      description:
        "Streamline your workflows and increase efficiency with our automation solutions",
      services: [
        {
          icon: <Workflow className="h-8 w-8 text-emerald-600" />,
          title: "N8N Workflow Automation",
          description:
            "Build powerful, automated workflows that connect your apps and services without writing code.",
          features: [
            "Visual workflow builder",
            "API integrations",
            "Scheduled automations",
            "Error handling and retries",
            "Webhook triggers and actions",
          ],
        },
      ],
    },
  ];

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
              Our Services
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive solutions to establish your digital presence and
              leverage cutting-edge technology for your business growth.
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

      {/* Services Category Navigation */}
      <section className="py-10 bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="px-4 py-2 bg-gray-100 hover:bg-indigo-50 text-gray-800 hover:text-indigo-600 rounded-lg transition-colors duration-300 font-medium"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <div className="py-16">
        {serviceCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            id={category.id}
            className={`py-16 ${
              categoryIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="space-y-16"
              >
                {category.services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="flex flex-col md:flex-row gap-10 items-start"
                  >
                    <div className="md:w-1/2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-gray-100 rounded-xl">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="md:w-1/2 bg-white rounded-xl p-6 shadow-md">
                      <h4 className="font-semibold text-gray-700 mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Our Approach Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a collaborative and transparent process to ensure your
              complete satisfaction.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "We start by understanding your specific needs, goals, and challenges.",
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "Our team develops a customized plan tailored to your unique requirements.",
              },
              {
                number: "03",
                title: "Implementation",
                description:
                  "We execute the plan with precision, keeping you informed at every step.",
              },
              {
                number: "04",
                title: "Optimization",
                description:
                  "We continuously monitor and refine our solutions to ensure optimal performance.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8">
              Contact us today to discuss your project requirements and discover
              how our services can benefit your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="#web-services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="max-w-3xl mx-auto"
          >
            {[
              {
                question:
                  "How long does it typically take to complete a website project?",
                answer:
                  "The timeline for website projects varies depending on complexity, but most custom websites take 4-8 weeks from initial consultation to launch. We'll provide a detailed timeline during our project kickoff meeting.",
              },
              {
                question:
                  "Do you provide ongoing support after the project is completed?",
                answer:
                  "Yes, we offer various maintenance and support packages to ensure your website or application continues to perform optimally. Our support includes regular updates, security patches, and technical assistance.",
              },
              {
                question:
                  "Can you help migrate my existing website to a new platform?",
                answer:
                  "Absolutely! We specialize in seamless website migrations with minimal downtime. Our team handles all aspects including content transfer, URL redirects, and performance optimization on the new platform.",
              },
              {
                question:
                  "How do you approach AI integration with existing systems?",
                answer:
                  "We start with a thorough assessment of your current systems and business needs. Then we design a custom integration plan that minimizes disruption while maximizing the benefits of AI technology. Our phased implementation approach ensures smooth adoption and clear ROI.",
              },
              {
                question:
                  "What types of businesses can benefit from your automation services?",
                answer:
                  "Businesses of all sizes and industries can benefit from automation. We've helped e-commerce companies streamline order processing, agencies automate client reporting, healthcare providers optimize patient communication, and much more. If you have repetitive tasks in your workflow, automation can likely help.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="mb-6 border-b border-gray-200 pb-6 last:border-0"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection id="contact" showContactForm={true} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
