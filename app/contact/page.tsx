"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically handle the form submission with an API call
    // For demonstration, we'll just set the form as submitted
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white py-24 overflow-hidden">
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
              Get in <span className="text-yellow-300">Touch</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear from you. Reach out to us
            and let's create something amazing together.
          </motion.p>
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
      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-10">
                  We're here to help with any questions about your project. Feel
                  free to reach out through any of these channels.
                </p>
              </div>

              {[
                {
                  icon: <MapPin className="h-6 w-6 text-indigo-600" />,
                  title: "Our Office",
                  details: [
                    "123 Web Development Street",
                    "San Francisco, CA 94105",
                    "United States",
                  ],
                },
                {
                  icon: <Phone className="h-6 w-6 text-indigo-600" />,
                  title: "Phone",
                  details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
                },
                {
                  icon: <Mail className="h-6 w-6 text-indigo-600" />,
                  title: "Email",
                  details: [
                    "info@sudowebsolution.com",
                    "support@sudowebsolution.com",
                  ],
                },
                {
                  icon: <Clock className="h-6 w-6 text-indigo-600" />,
                  title: "Working Hours",
                  details: [
                    "Monday - Friday: 9:00 AM - 6:00 PM",
                    "Saturday - Sunday: Closed",
                  ],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="bg-gray-50 rounded-xl shadow-md p-8"
            >
              <div className="max-w-xl mx-auto">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section 
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office to meet the team and discuss your project in
              person.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="rounded-xl overflow-hidden shadow-md max-w-5xl mx-auto h-96 bg-gray-200"
          >
            { Replace this div with an actual map component if you have one, 
                or keep it as a placeholder image }
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <img
                src="/api/placeholder/1200/600"
                alt="Office Location Map"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
              */}
      {/* Footer */}
      <Footer />
    </div>
  );
}
