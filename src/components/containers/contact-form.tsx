"use client";

import { ComponentPropsWithoutRef, useCallback, useState } from "react";
import ContactFormUI from "../ui/contact-form";
import { sendEmail } from "@/app/actions";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [hasSubmissionError, setHasSubmissionError] = useState(false);

  const onSubmitCallback: ComponentPropsWithoutRef<
    typeof ContactFormUI
  >["onSubmit"] = useCallback((formData) => {
    const submitHandler = async () => {
      setHasSubmissionError(false);

      try {
        setIsPending(true);
        await sendEmail(formData);
        setIsSubmitted(true);
      } catch (error) {
        console.log("There was an error on the submission:", error);
        setHasSubmissionError(true);
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
      hasSubmissionError={hasSubmissionError}
      onSubmit={onSubmitCallback}
    />
  );
}

export default ContactForm;
