import nodemailer from "nodemailer";
import { ApiError } from "./ApiError.js";

const mailSender = async (email, subject, body) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      }
    });
    const info = await transporter.sendMail({
      from: `mailtrap@demomailtrap.com`,
      to: email,
      subject: subject,
      html: `${body}`,
    });
  } catch (error) {
    console.error("Error occurred:", error);
    throw new ApiError(500, "Unable to send Email");
  }
};

export { mailSender };
