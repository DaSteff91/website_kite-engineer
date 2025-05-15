import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 circuit-pattern opacity-5" />
      <div className="relative">
        <ContactForm />
      </div>
    </div>
  );
}
