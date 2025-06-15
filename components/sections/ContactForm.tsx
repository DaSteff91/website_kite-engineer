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
  const [prefilledFields, setPrefilledFields] = useState({
    subject: false,
    message: false,
  });
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
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
      
      // Mark fields as prefilled
      setPrefilledFields({
        subject: !!subject,
        message: !!message,
      });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName: string) => {
    setTouchedFields(prev => ({
      ...prev,
      [fieldName]: true
    }));
  };

  const getFieldClassName = (fieldName: keyof typeof prefilledFields, baseClassName: string) => {
    const isPrefilled = prefilledFields[fieldName];
    const isTouched = touchedFields[fieldName];
    
    if (isPrefilled && !isTouched) {
      return `${baseClassName} text-muted-foreground italic`;
    }
    return baseClassName;
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
        setPrefilledFields({
          subject: false,
          message: false,
        });
        setTouchedFields({
          name: false,
          email: false,
          subject: false,
          message: false,
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
          onFocus={() => handleFocus('name')}
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
          onFocus={() => handleFocus('email')}
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
          onFocus={() => handleFocus('subject')}
          required
          className={getFieldClassName('subject', "bg-background/50")}
        />
      </div>

      <div className="space-y-2">
        <Textarea
          name="message"
          placeholder="Your message*"
          value={formData.message}
          onChange={handleInputChange}
          onFocus={() => handleFocus('message')}
          required
          className={getFieldClassName('message', "bg-background/50 min-h-[150px]")}
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