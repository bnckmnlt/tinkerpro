import { NextResponse } from "next/server";
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

const mailgunDomain = process.env.MAILGUN_DOMAIN;

export async function POST(request) {
  const { email, info } = await request.json();

  try {
    const emailData = {
      from: email,
      to: `nodedevelopment.test@gmail.com`,
      subject: `Request quotation for ${info.pospackage}`,
      template: "package quotation",
      "h:X-Mailgun-Variables": JSON.stringify({
        email: email,
        pospackage: info.pospackage,
        firstname: info.firstname,
        lastname: info.lastname,
        businessname: info?.businessname,
        posunits: info?.posunits,
        note: info?.note,
      }),
    };

    await mg.messages.create(mailgunDomain, emailData);

    return NextResponse.json(
      {
        message: "Email sent successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in sending email:", error);
    return NextResponse.json(
      {
        error: "Error in sending email. Please try again.",
      },
      { status: 400 }
    );
  }
}
