"use server";

import nodemailer from "nodemailer";
import { ContactEmailType } from "@/utils/schema";

type GenerateMessageBodyFn = (input: ContactEmailType) => string;

const generateMessageBody: GenerateMessageBodyFn = ({
  name,
  email,
  message,
}) => `
  NAME: ${name}
  EMAIL: ${email}
  MESSAGE: "${message}"
  `;

export async function sendEmail(input: ContactEmailType) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  // Promise-ify the send action
  return new Promise((resolve, reject) => {
    transport.sendMail(
      {
        to: process.env.NODEMAILER_EMAIL,
        from: process.env.NODEMAILER_EMAIL,
        subject: `Contact form submission: ${input.name} (${input.email})`,
        text: generateMessageBody(input),
      },
      (error) => {
        if (!error) {
          resolve(true);
        } else {
          reject(error.message);
        }
      }
    );
  });
}
