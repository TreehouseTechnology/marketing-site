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

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export async function sendEmail(input: ContactEmailType): Promise<boolean> {
  // Promise-ify the send action
  const result = await new Promise<boolean>((resolve, reject) => {
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
          console.log(
            "There was an error in the sendEmail action:",
            error.message
          );
          reject(error.message);
        }
      }
    );
  });

  return result;
}
