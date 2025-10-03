"use client";

import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAutoGrowTextarea } from "@/hooks/useAutoGrowTextarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

  const textareaRef = useAutoGrowTextarea(formData.message);

  const [placeholderValues, setPlaceholderValues] = useState({
    subject: "",
    message: "",
  });

  useEffect(() => {
    // Prevent zoom on focus
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1, maximum-scale=1";
    document.head.appendChild(meta);

    // Get URL parameters for placeholders
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get("subject");
    const message = urlParams.get("message");

    if (subject || message) {
      // Store decoded values for placeholders
      setPlaceholderValues({
        subject: subject ? decodeURIComponent(subject) : "",
        message: message ? decodeURIComponent(message) : "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isChecked) {
      setCheckboxError(true);
      return;
    }

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
        setIsChecked(false);
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
          required
          className="bg-background/50 h-12 text-base"
        />
      </div>

      <div className="space-y-2">
        <Input
          name="subject"
          placeholder={placeholderValues.subject || "Subject*"}
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="bg-background/50 h-12 text-base"
        />
      </div>

      <div className="space-y-2">
        <Textarea
          ref={textareaRef}
          name="message"
          placeholder={placeholderValues.message || "Your message*"}
          value={formData.message}
          onChange={handleInputChange}
          required
          className="bg-background/50 min-h-[120px] sm:min-h-[150px] text-base resize-none sm:resize-y w-full overflow-y-auto max-h-[50vh] sm:max-h-[70vh] transition-[height]"
          style={{ fontSize: "16px" }}
        />
      </div>

      <div className="flex items-center gap-3">
        <Checkbox
          id="terms"
          checked={isChecked}
          onCheckedChange={(checked) => {
            setIsChecked(checked === true);
            if (checked) setCheckboxError(false);
          }}
        />
        <Label
          htmlFor="terms"
          className="text-muted-foreground text-sm text-left"
        >
          Accept{" "}
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 hover:text-blue-300 underline transition-colors"
            target="_blank"
          >
            data processing
          </Link>{" "}
          for contacting me*
        </Label>
        {checkboxError && (
          <p className="text-red-500 text-sm mt-1">
            Please accept data processing to continue.
          </p>
        )}
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
