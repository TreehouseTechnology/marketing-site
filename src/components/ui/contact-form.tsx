"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactEmailType, ContactEmailSchema as schema } from "@/utils/schema";

export type FormData = ContactEmailType;

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
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  return !isSubmitted ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-black"
        >
          Full Name
        </label>
        <input
          disabled={isPending}
          type="text"
          placeholder="Full Name"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-black"
        >
          Email Address
        </label>
        <input
          disabled={isPending}
          type="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-black"
        >
          Message
        </label>
        <textarea
          disabled={isPending}
          rows={4}
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div>
        <button
          className="hover:shadow-form rounded-md bg-purple-500 py-3 px-5 text-base font-semibold text-white outline-none inline-flex items-center"
          disabled={isPending}
        >
          {isPending && (
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
          )}
          Submit
        </button>
      </div>
    </form>
  ) : (
    <h4>Thank you for your submission</h4>
  );
}

export default ContactForm;
