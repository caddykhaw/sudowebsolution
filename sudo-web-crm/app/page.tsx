// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Monitor, Zap, Code, Users, Award } from "lucide-react";

export default function Home() {
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative flex-1 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white py-32 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/api/placeholder/1200/600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />

        <div className="container mx-auto text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Elevate Your{" "}
              <span className="text-yellow-300">Digital Presence</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto"
          >
            We craft modern, high-performance websites that convert visitors
            into customers, tailored specifically to your business goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              asChild
              className="bg-white text-indigo-600 hover:bg-indigo-100 transform hover:scale-105 transition-all duration-300 mr-4"
            >
              <Link href="#contact">Start Your Project</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              <Link href="#portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden"
          style={{ height: "80px" }}
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-white"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-white"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Transforming Ideas Into Digital Reality
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive web solutions help businesses of all sizes
              establish a powerful online presence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Monitor className="h-10 w-10 mb-4 text-indigo-600" />,
                title: "Responsive Web Design",
                description:
                  "Websites that look and perform beautifully on any device, from desktops to smartphones.",
              },
              {
                icon: <Code className="h-10 w-10 mb-4 text-indigo-600" />,
                title: "Custom Development",
                description:
                  "Tailor-made solutions designed specifically for your unique business requirements.",
              },
              {
                icon: <Zap className="h-10 w-10 mb-4 text-indigo-600" />,
                title: "Performance Optimization",
                description:
                  "Lightning-fast loading speeds and smooth user experiences that keep visitors engaged.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it — hear from businesses we've
              helped succeed online.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                quote:
                  "Sudo Web Solution transformed our outdated website into a modern, functional platform that's driving real results for our business.",
                author: "Sarah Johnson",
                company: "Bright Ideas Consulting",
              },
              {
                quote:
                  "The team went above and beyond our expectations. Our new e-commerce site has increased our sales by 43% in just three months!",
                author: "Michael Chen",
                company: "Artisan Creations",
              },
              {
                quote:
                  "Professional, responsive, and incredibly talented. They didn't just build us a website — they built us a valuable business asset.",
                author: "Jessica Taylor",
                company: "Taylor & Associates",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8"
              >
                <svg
                  className="h-8 w-8 text-indigo-400 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-6 italic">"{item.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{item.author}</p>
                  <p className="text-gray-500 text-sm">{item.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white" id="process">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Simple Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make creating your perfect website straightforward and
              stress-free.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="max-w-4xl mx-auto"
          >
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business goals, target audience, and what sets you apart from competitors.",
              },
              {
                number: "02",
                title: "Strategy & Design",
                description:
                  "Our team creates a customized plan and visual design that aligns with your brand and objectives.",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "We build your website using the latest technologies, ensuring it's fast, secure, and easy to maintain.",
              },
              {
                number: "04",
                title: "Launch & Support",
                description:
                  "Once approved, we launch your site and provide ongoing support to ensure continued success.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-start mb-12 relative"
              >
                {index < 3 && (
                  <div className="absolute left-6 top-16 w-px h-24 bg-indigo-200"></div>
                )}
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                    {item.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "150+", label: "Websites Launched" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "43%", label: "Avg. Conversion Increase" },
              { number: "24/7", label: "Support & Monitoring" },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {item.number}
                </div>
                <p className="text-indigo-200">{item.label}</p>
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
