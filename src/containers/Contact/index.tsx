import React from "react";
import { ContactForm } from "@/containers/ContactForm";

export interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  return <ContactForm />;
};

export default Contact;
