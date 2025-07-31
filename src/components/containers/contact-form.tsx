"use client";

import { ComponentPropsWithoutRef, useCallback } from "react";
import ContactFormUI from "../ui/contact-form";

export function ContactForm() {
  const onSubmitCallback: ComponentPropsWithoutRef<
    typeof ContactFormUI
  >["onSubmit"] = useCallback((formData) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("https://api.treehousetechnology.io/email", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  return <ContactFormUI onSubmit={onSubmitCallback} />;
}

export default ContactForm;
