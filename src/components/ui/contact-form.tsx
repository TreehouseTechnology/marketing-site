"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactEmailType, ContactEmailSchema as schema } from "@/utils/schema";

export type FormData = ContactEmailType;

interface FormLabelProps {
  label: string;
  key: keyof FormData;
}

function FormLabel({ label, key }: FormLabelProps) {
  return (
    <label htmlFor={key} className="mb-3 block text-base font-medium">
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
      className="mb-3 mt-3 block text-base font-medium text-red-500"
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
        stroke-width="4"
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
  onSubmit: (data: FormData) => void;
}

function ContactForm({
  isPending = true,
  isSubmitted = false,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <FormLabel key="name" label="Full Name" />
        <input
          disabled={isPending}
          type="text"
          placeholder="Full Name"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("name", { required: true })}
        />
        {errors.name && <FieldError message={errors.name.message} />}
      </div>
      <div className="mb-5">
        <FormLabel key="email" label="Email Address" />
        <input
          disabled={isPending}
          type="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("email", { required: true })}
        />
        {errors.email && <FieldError message={errors.email.message} />}
      </div>
      <div className="mb-5">
        <FormLabel key="message" label="Message" />
        <textarea
          disabled={isPending}
          rows={4}
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && <FieldError message={errors.message.message} />}
      </div>
      <div>
        <button
          className="hover:shadow-form rounded-md bg-purple-500 py-3 px-5 text-base font-semibold text-white outline-none inline-flex items-center"
          disabled={isPending}
        >
          {isPending && <LoadingSpinner />}
          Submit
        </button>
      </div>
    </form>
  ) : (
    <h4>Thank you for your submission</h4>
  );
}

export default ContactForm;
