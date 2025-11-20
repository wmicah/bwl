"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // TODO: Implement actual form submission (e.g., to an API endpoint or email service)
    // For now, this is a placeholder
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-charcoal mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#E4ECF0] bg-white text-slate-gray focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-charcoal mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#E4ECF0] bg-white text-slate-gray focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-charcoal mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#E4ECF0] bg-white text-slate-gray focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition"
            placeholder="(503) 555-0123"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-charcoal mb-2"
          >
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#E4ECF0] bg-white text-slate-gray focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="pricing">Pricing Question</option>
            <option value="services">Services Information</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#E4ECF0] bg-white text-slate-gray focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition resize-none"
          placeholder="Tell us how we can help..."
        />
      </div>

      {submitStatus === "success" && (
        <div className="bg-sky-tint border border-teal/30 rounded-lg p-4">
          <p className="text-teal font-medium">
            Thank you! Your message has been sent. We&apos;ll get back to you soon.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 font-medium">
            There was an error sending your message. Please try again or contact
            us directly at info@bluewavelaundry.net
          </p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

