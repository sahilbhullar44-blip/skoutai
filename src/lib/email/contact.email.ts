import nodemailer from "nodemailer";
import {
  teamNotificationTemplate,
  type ContactEmailData,
} from "./templates/team-notification.template";
import { autoReplyTemplate } from "./templates/auto-reply.template";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(data: ContactEmailData) {
  const { name, email, company } = data;

  await Promise.all([
    // 1. Notify team
    transporter.sendMail({
      from: `"Skout AI Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New contact from ${name} · ${company}`,
      html: teamNotificationTemplate(data),
    }),

    // 2. Auto-reply to sender
    transporter.sendMail({
      from: `"Skout AI Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message — Skout AI",
      html: autoReplyTemplate(name),
    }),
  ]);
}
