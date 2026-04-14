"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactEmailType, ContactEmailSchema as schema } from "@/utils/schema";

export type FormData = ContactEmailType;

interface FormLabelProps {
  label: string;
  formKey: keyof FormData;
}

function FormLabel({ label, formKey }: FormLabelProps) {
  return (
    <label
      htmlFor={formKey}
      className="mb-3 block text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400"
    >
      {label}
    </label>
  );
}

interface FieldErrorProps {
  message: string | undefined;
}

function FieldError({ message }: FieldErrorProps) {
  return (
    <p
      role="alert"
      className="mb-3 mt-3 block text-sm font-medium text-red-600 dark:text-red-400"
    >
      {message}
    </p>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="mr-3 -ml-1 size-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

export interface ContactFormProps {
  isPending?: boolean;
  isSubmitted?: boolean;
  hasSubmissionError?: boolean;
  onSubmit: (data: FormData) => void;
}

function ContactForm({
  isPending = false,
  isSubmitted = false,
  hasSubmissionError = false,
  onSubmit,
}: ContactFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return !isSubmitted ? (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FormLabel formKey="name" label="Full Name" />
        <input
          disabled={isPending}
          type="text"
          placeholder="Full Name"
          className="w-full rounded-2xl border border-neutral-200 bg-white/80 px-4 py-3 text-base text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 disabled:cursor-not-allowed disabled:opacity-60 dark:border-neutral-800 dark:bg-neutral-950/80 dark:text-neutral-50 dark:placeholder:text-neutral-500 dark:focus:border-neutral-50 dark:focus:ring-white/5"
          {...register("name", { required: true })}
        />
        {errors.name && <FieldError message={errors.name.message} />}
      </div>
      <div>
        <FormLabel formKey="email" label="Email Address" />
        <input
          disabled={isPending}
          type="email"
          placeholder="example@domain.com"
          className="w-full rounded-2xl border border-neutral-200 bg-white/80 px-4 py-3 text-base text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 disabled:cursor-not-allowed disabled:opacity-60 dark:border-neutral-800 dark:bg-neutral-950/80 dark:text-neutral-50 dark:placeholder:text-neutral-500 dark:focus:border-neutral-50 dark:focus:ring-white/5"
          {...register("email", { required: true })}
        />
        {errors.email && <FieldError message={errors.email.message} />}
      </div>
      <div>
        <FormLabel formKey="message" label="Message" />
        <textarea
          disabled={isPending}
          rows={4}
          placeholder="Type your message"
          className="w-full resize-none rounded-2xl border border-neutral-200 bg-white/80 px-4 py-3 text-base text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 disabled:cursor-not-allowed disabled:opacity-60 dark:border-neutral-800 dark:bg-neutral-950/80 dark:text-neutral-50 dark:placeholder:text-neutral-500 dark:focus:border-neutral-50 dark:focus:ring-white/5"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && <FieldError message={errors.message.message} />}
      </div>
      <div>
        <button
          className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:border-neutral-950 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:border-white dark:hover:bg-white"
          disabled={isPending}
        >
          {isPending && <LoadingSpinner />}
          <span>Submit</span>
        </button>
        {hasSubmissionError && (
          <FieldError message="There was an error processing your submission. Please try again." />
        )}
      </div>
    </form>
  ) : (
    <div className="rounded-3xl border border-neutral-200 bg-white/80 p-6 text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/70 dark:text-neutral-300">
      <h4 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
        Thank you for your submission
      </h4>
      <p className="mt-2 text-sm leading-6">
        We have your message and will follow up as soon as we can.
      </p>
    </div>
  );
}

export default ContactForm;
