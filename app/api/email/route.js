import { NextResponse } from "next/server";
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "key-yourkeyhere",
});

const mailgunDomain = process.env.MAILGUN_DOMAIN;

export async function POST(request) {
  const { from, info } = await request.json();
  console.log(from);
  console.log(info);

  try {
    const emailData = {
      from: from,
      to: `nodedevelopment.test@gmail.com`,
      subject: `Purchase of ${info.pospackage}`,
      html: `<div>
      <header><h1>Purchase of ${info.pospackage}</h1>
      <p>This is to notify that ${info.firstname} ${info.lastname} wants to order a ${info.pospackage} for its business "${info?.businessname}".</p>
      </header>
      <p className='text-lg text-orange-500 block'>First name: ${info.firstname}</p>
      <p className='text-lg text-orange-500 block'>Last name: ${info.lastname}</p>
      <p className='text-lg text-orange-500 block'>POS Package: ${info.pospackage}</p>
      <p className='text-lg text-orange-500 block'>Business name: ${info?.businessname}</p>
      <p className='text-lg text-orange-500 block'>Unit/s to be purchased: ${info?.posunits}</p>
      <p className='text-lg text-orange-500 block'>Additional note: ${info?.note}</p>
      </div>`,
    };

    await mg.messages.create(mailgunDomain, emailData);

    return NextResponse.json({
      message: "Email sent successfully",
    });
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
