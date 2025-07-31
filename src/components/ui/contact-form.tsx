"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactEmailType, ContactEmailSchema as schema } from "@/utils/schema";

export type FormData = ContactEmailType;

export interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

function ContactForm({ onSubmit }: ContactFormProps) {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form action="mailto:justin@treehousetechnology.io" method="POST">
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block text-base font-medium">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          placeholder="subject"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          // {...register("subject", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="mb-3 block text-base font-medium ">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="type your message"
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("body", { required: true })}
        ></textarea>
      </div>
      <div>
        <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
