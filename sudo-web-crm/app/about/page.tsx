"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Award, Clock, Globe, Lightbulb, Heart } from "lucide-react";

export default function About() {
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
              Our <span className="text-yellow-300">Story</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto"
          >
            We're passionate web developers on a mission to help businesses
            succeed in the digital world.
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

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
              Who We Are
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Founded in 2018, Sudo Web Solution began with a simple mission:
                to help businesses establish a powerful online presence through
                thoughtful design and cutting-edge technology.
              </p>

              <p>
                What started as a small team of passionate developers has grown
                into a full-service web development agency with expertise
                spanning responsive design, e-commerce, content management
                systems, and custom web applications.
              </p>

              <p>
                We believe that a great website is more than just attractive
                design – it's a powerful business tool that should drive real
                results. Our approach combines creative thinking with technical
                excellence and a deep understanding of digital marketing
                principles.
              </p>

              <p>
                Today, we're proud to have helped over 150 businesses across
                various industries transform their digital presence and achieve
                meaningful growth through strategic web solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define how we work
              with our clients.
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
                icon: <Award className="h-10 w-10 mb-4 text-indigo-600" />,
                title: "Excellence",
                description:
                  "We hold ourselves to the highest standards in everything we create, from design to code quality to client communication.",
              },
              {
                icon: <Lightbulb className="h-10 w-10 mb-4 text-indigo-600" />,
                title: "Innovation",
                description:
                  "We continuously explore new technologies and approaches to deliver the most effective solutions for our clients.",
              },
              {
                icon: <Heart className="h-10 w-10 mb-4 text-indigo-600" />,
                title: "Client Partnership",
                description:
                  "We see our clients as partners, working collaboratively to achieve their business goals through thoughtful digital strategies.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center"
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

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented individuals who bring your digital vision to life.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: "Alex Chen",
                role: "Founder & Lead Developer",
                bio: "10+ years of experience building scalable web applications and leading development teams.",
                image: "/api/placeholder/300/300",
              },
              {
                name: "Sarah Johnson",
                role: "Creative Director",
                bio: "Award-winning designer with a passion for creating intuitive, beautiful user experiences.",
                image: "/api/placeholder/300/300",
              },
              {
                name: "Marcus Rivera",
                role: "Full-Stack Developer",
                bio: "Specializes in React, Node.js, and serverless architectures for high-performance applications.",
                image: "/api/placeholder/300/300",
              },
              {
                name: "Priya Patel",
                role: "Project Manager",
                bio: "Certified Scrum Master ensuring projects are delivered on time, on budget, and to specification.",
                image: "/api/placeholder/300/300",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
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
              {
                icon: (
                  <Users className="h-8 w-8 mx-auto mb-3 text-indigo-300" />
                ),
                number: "150+",
                label: "Clients Served",
              },
              {
                icon: (
                  <Clock className="h-8 w-8 mx-auto mb-3 text-indigo-300" />
                ),
                number: "5+",
                label: "Years in Business",
              },
              {
                icon: (
                  <Globe className="h-8 w-8 mx-auto mb-3 text-indigo-300" />
                ),
                number: "12",
                label: "Countries Reached",
              },
              {
                icon: (
                  <Award className="h-8 w-8 mx-auto mb-3 text-indigo-300" />
                ),
                number: "8",
                label: "Industry Awards",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="p-6">
                {item.icon}
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
      <CTASection id="contact" showContactForm={false} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
