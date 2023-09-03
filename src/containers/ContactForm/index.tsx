import React from "react";
import {
  ContactForm as ContactFormUI,
  ContactFormProps as ContactFormUIProps,
} from "@/components/ContactForm";
import useUpdateSpreadsheet from "@/hooks/useUpdateSpreadsheet";

export interface ContactFormProps
  extends Omit<ContactFormUIProps, "onSubmit"> {}

export const ContactForm: React.FC<ContactFormProps> = (props) => {
  const addContact = useUpdateSpreadsheet();
  return <ContactFormUI {...props} onSubmit={addContact} />;
};

export default ContactForm;
