"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Updated handleSubmit to call API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.msg);

      if (data.success) {
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "parthojotyroychowdhury@gmail.com",
      link: "mailto:parthojotyroychowdhury@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "9432860768",
      link: "tel:+919432860768",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "West Bengal, Kolkata",
      link: "https://www.google.com/maps/place/Kolkata,+West+Bengal",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-8 px-2 md:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 hover:border-white transition-colors duration-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-slate-300 text-sm hover:text-white transition-colors duration-300">
              Let's Connect
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-2 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2 font-medium">Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="bg-white/10 border-white/20 hover:border-white text-white placeholder-slate-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2 font-medium">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="bg-white/10 border-white/20 hover:border-white text-white placeholder-slate-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-medium">Subject</label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className="bg-white/10 border-white/20 hover:border-white text-white placeholder-slate-400 focus:bg-white/15 transition-all duration-300"
                      placeholder="Project discussion"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-medium">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="bg-white/10 border-white/20 hover:border-white text-white placeholder-slate-400 focus:bg-white/15 transition-all duration-300 h-32 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold py-3 hover:shadow-lg hover:shadow-amber-400/25 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <Card
                key={info.title}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-2 md:p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-400 hover:text-white transition-colors duration-300"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-slate-400 break-all">{info.details}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Static bottom card */}
        <div className="w-full mt-8">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <CardContent className="p-6">
              <h3 className="text-white font-semibold mb-3">Let's create something amazing together</h3>
              <p className="text-slate-400 leading-relaxed hover:text-white transition-colors duration-300">
                I'm always open to discussing new opportunities, creative projects,
                or just having a conversation about design and technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
