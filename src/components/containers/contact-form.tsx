"use client";

import { ComponentPropsWithoutRef, useCallback, useState } from "react";
import ContactFormUI from "../ui/contact-form";
import { sendEmail } from "@/app/actions";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const onSubmitCallback: ComponentPropsWithoutRef<
    typeof ContactFormUI
  >["onSubmit"] = useCallback((formData) => {
    const submitHandler = async () => {
      try {
        setIsPending(true);
        await sendEmail(formData);
        setIsSubmitted(true);
      } catch (error) {
      } finally {
        setIsPending(false);
      }
    };

    submitHandler();
  }, []);

  return (
    <ContactFormUI
      isPending={isPending}
      isSubmitted={isSubmitted}
      onSubmit={onSubmitCallback}
    />
  );
}

export default ContactForm;
