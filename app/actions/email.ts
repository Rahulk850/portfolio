"use server";

import nodemailer from "nodemailer";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Validate the form data
    if (!name || !email || !message) {
      return {
        success: false,
        message: "Please fill in all fields",
      };
    }

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      //   host: process.env.EMAIL_SERVER || "smtp.gmail.com",
      service: "gmail",
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER ,
        pass: process.env.EMAIL_PASSWORD ,
      },
    });

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL_FROM || "your-portfolio@example.com",
      to: process.env.EMAIL_TO || "your-email@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4d7eff; border-bottom: 2px solid #000;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border: 2px solid #000;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Email error:", error);
    return {
      success: false,
      message:
        "There was an error sending your message. Please try again later.",
    };
  }
}
