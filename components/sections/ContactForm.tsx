"use client";

import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAutoGrowTextarea } from "@/hooks/useAutoGrowTextarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const textareaRef = useAutoGrowTextarea(formData.message);
  const [prefilledFields, setPrefilledFields] = useState<{
    subject: boolean;
    message: boolean;
  }>({ subject: false, message: false });
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  useEffect(() => {
    // Prevent zoom on focus
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1, maximum-scale=1";
    document.head.appendChild(meta);

    // Get URL parameters for prefilling
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get("subject");
    const message = urlParams.get("message");

    if (subject || message) {
      setFormData((prev) => ({
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
    return () => {
      const existingMeta = document.querySelector(
        'meta[name="viewport"][content="width=device-width, initial-scale=1, maximum-scale=1"]'
      );
      if (existingMeta && document.head.contains(existingMeta)) {
        document.head.removeChild(existingMeta);
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (fieldName: string) => {
    setTouchedFields((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  const getFieldClassName = (
    fieldName: keyof typeof prefilledFields,
    baseClassName: string
  ) => {
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
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto space-y-4 sm:space-y-6"
    >
      <div className="space-y-2">
        <Input
          name="name"
          placeholder="Your name*"
          value={formData.name}
          onChange={handleInputChange}
          onFocus={() => handleFocus("name")}
          required
          className="bg-background/50 h-12 text-base"
        />
      </div>

      <div className="space-y-2">
        <Input
          type="email"
          name="email"
          placeholder="Your email*"
          value={formData.email}
          onChange={handleInputChange}
          onFocus={() => handleFocus("email")}
          required
          className="bg-background/50 h-12 text-base"
        />
      </div>

      <div className="space-y-2">
        <Input
          name="subject"
          placeholder="Subject*"
          value={formData.subject}
          onChange={handleInputChange}
          onFocus={() => handleFocus("subject")}
          required
          className={getFieldClassName(
            "subject",
            "bg-background/50 h-12 text-base"
          )}
        />
      </div>

      <div className="space-y-2">
        <Textarea
          ref={textareaRef}
          name="message"
          placeholder="Your message*"
          value={formData.message}
          onChange={handleInputChange}
          onFocus={() => handleFocus("message")}
          required
          className={getFieldClassName(
            "message",
            "bg-background/50 min-h-[120px] sm:min-h-[150px] text-base resize-none sm:resize-y w-full overflow-hidden max-h-[50vh] sm:max-h-[70vh] transition-[height]"
          )}
          style={{ fontSize: "16px" }}
        />
      </div>

      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label
          htmlFor="terms"
          className="text-muted-foreground text-sm text-left"
        >
          Accept data processing for contacting me*
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full group h-12 text-base font-medium"
        disabled={isSubmitting}
      >
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
        <p className="text-green-600 text-left mt-4 text-base">
          {successMessage}
        </p>
      )}
      <p className="text-muted-foreground text-sm text-left">
        * Mandatory fields. <br></br> Please give me some time to respond. I try
        keeping it lower then 2 days.
      </p>
    </form>
  );
}
