import type { Metadata } from "next";
import ContactForm from "@/components/contactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Marcel Hudy for your next project.",
};

const Contact = () => {
  return <ContactForm />;
};

export default Contact;
