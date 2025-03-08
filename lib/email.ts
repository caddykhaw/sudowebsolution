// lib/email.ts
import nodemailer from "nodemailer";

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

// Configure the email transporter
// For production, use an actual SMTP service like SendGrid, Mailgun, etc.
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER || "smtp.example.com",
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendEmail(payload: EmailPayload) {
  const { to, subject, html } = payload;

  try {
    console.log("Attempting to send email with config:", {
      host: process.env.EMAIL_SERVER,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === "true",
      user: process.env.EMAIL_USER ? "****" : "not set",
      from: process.env.EMAIL_FROM || "default",
      to: to,
    });

    const info = await transporter.sendMail({
      from:
        process.env.EMAIL_FROM || "Your Business <no-reply@yourbusiness.com>",
      to,
      subject,
      html,
    });

    console.log(`Email sent to ${to}`);
    console.log("Email response:", info);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    throw new Error("Failed to send email");
  }
}
