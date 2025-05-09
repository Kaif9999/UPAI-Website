import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing name, email, or message" },
      { status: 400 }
    );
  }

  const USER = process.env.EMAIL_USER;
  const PASS = process.env.EMAIL_PASS;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: { user: USER, pass: PASS },
  });

  try {
    await transporter.verify();
    console.log("SMTP Config OK");
  } catch (err) {
    console.error("SMTP verification failed:", err);
    return NextResponse.json(
      { error: "SMTP configuration error" },
      { status: 500 }
    );
  }

  try {
    const info = await transporter.sendMail({
      from: USER,
      to: email,
      subject: "Thanks for contacting UP AI Labs!",
      html: `
        <p>Hi ${name},</p>
        <p>We received your message:</p>
        <blockquote>${message}</blockquote>
        <p>We’ll get back to you shortly.</p>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (err) {
    console.error("Error sending mail:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
