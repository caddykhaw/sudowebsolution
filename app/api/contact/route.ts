// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate the data
    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Log the received data (for development)
    console.log("Form submission received:", data);

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store the message in a database
    // 3. Integrate with a service like SendGrid, Mailchimp, etc.

    // Example with email sending (you would need to set up an email service)
    /*
    await sendEmail({
      to: "your-business-email@example.com",
      subject: `New contact form submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `
    });
    */

    // For development/testing, return immediately and process email in background
    // This prevents connection timeouts while debugging

    // Queue the email sending to run after response is sent
    Promise.resolve().then(async () => {
      try {
        // Import directly from the file path
        const emailModule = await import("@/lib/email");

        await emailModule.sendEmail({
          to: process.env.CONTACT_EMAIL || "your-business-email@example.com",
          subject: `New contact form submission from ${data.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Message:</strong> ${data.message}</p>
          `,
        });
        console.log("Email sending completed");
      } catch (error) {
        console.error("Email sending failed:", error);
      }
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been received. We will contact you soon!",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
