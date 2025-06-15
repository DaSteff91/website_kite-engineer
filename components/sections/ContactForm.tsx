"use client";

import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    // Get URL parameters for prefilling
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    const message = urlParams.get('message');
    
    if (subject || message) {
      setFormData(prev => ({
        ...prev,
        subject: subject ? decodeURIComponent(subject) : prev.subject,
        message: message ? decodeURIComponent(message) : prev.message,
      }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Thank you for contacting us!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const result = await response.json();
        alert(result.message || "An error occurred.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Input
          name="name"
          placeholder="Your name*"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="bg-background/50"
        />
      </div>

      <div className="space-y-2">
        <Input
          type="email"
          name="email"
          placeholder="Your email*"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="bg-background/50"
        />
      </div>

      <div className="space-y-2">
        <Input
          name="subject"
          placeholder="Subject*"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="bg-background/50"
        />
      </div>

      <div className="space-y-2">
        <Textarea
          name="message"
          placeholder="Your message*"
          value={formData.message}
          onChange={handleInputChange}
          required
          className="bg-background/50 min-h-[150px]"
        />
      </div>

      <Button type="submit" className="w-full group" disabled={isSubmitting}>
        <span className="flex items-center justify-center">
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </span>
      </Button>
      {successMessage && (
        <p className="text-green-600 text-center mt-4">{successMessage}</p>
      )}
      <p className="text-muted-foreground text-sm">* Mandatory fields</p>
    </form>
  );
}