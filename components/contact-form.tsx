// components/contact-form.tsx
"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Form status states
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Reset form on success
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
      {submitStatus === "success" ? (
        <div className="text-center p-6">
          <div className="text-green-600 text-xl mb-4">
            Thank you for your message!
          </div>
          <p className="text-gray-700 mb-6">
            We'll get back to you as soon as possible.
          </p>
          <Button
            onClick={() => setSubmitStatus("idle")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form
          className="space-y-6 flex flex-col h-full"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex-grow flex flex-col">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-900`}
                placeholder="John Smith"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-900`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-900`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
          <div></div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 flex-grow min-h-[120px] h-full`}
              placeholder="Tell us about your project..."
              style={{ flexGrow: 1 }}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          {submitStatus === "error" && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md">
              Something went wrong. Please try again later.
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  );
}
