"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage("Thank you for contacting us!");
        form.reset();
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
    <section className="min-h-screen py-24 px-4 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-lg text-muted-foreground">
            Whether it's about code, kiteboarding, or anything in between
          </p>
        </div>

        <Card className="backdrop-blur-sm bg-card/50">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Input
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Input
                  name="subject"
                  placeholder="Subject"
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Your message"
                  required
                  className="bg-background/50 min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full group"
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
                <p className="text-green-600 text-center mt-4">
                  {successMessage}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
