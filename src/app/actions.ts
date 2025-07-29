"use server";

import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { ContactEmailType } from "@/utils/schema";

type GenerateMailOptionsFn = (input: ContactEmailType) => Mail.Options;

const generateMailOptions: GenerateMailOptionsFn = ({
  name,
  email,
  message,
}) => ({
  to: process.env.NODEMAILER_EMAIL,
  from: process.env.NODEMAILER_EMAIL,
  subject: `Contact form submission: ${name} (${email})`,
  text: `
  NAME: ${name}
  EMAIL: ${email}

  MESSAGE: "${message}"
  `,
});

export async function sendEmail(input: ContactEmailType) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  return new Promise((resolve, reject) => {
    transport.sendMail(generateMailOptions(input), (error) => {
      if (!error) {
        resolve(true);
      } else {
        reject(error.message);
      }
    });
  });
}
