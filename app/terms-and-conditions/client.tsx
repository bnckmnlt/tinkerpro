"use client";

import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

const TermsAndConditions = (props: Props) => {
  return (
    <main className='max-w-5xl section-whitespace mx-auto px-8'>
      <article className='space-y-4'>
        <header className='text-center mb-12 space-y-4'>
          <div className='text-gray-600 ring-1 ring-gray-900/10 dark:ring-gray-600/20 px-4 rounded-full w-fit mx-auto'>
            <p>Last modified: August 31, 2023</p>
          </div>
          <h1>TERMS AND CONDITIONS</h1>
        </header>
        <p className='text-sentence'>
          By accessing and using our Point of Sale (POS) packages and related
          services, you agree to be bound by the following terms and conditions:
        </p>
        <ul>
          {termsAndConditions.map(({ label, desc }, index) => (
            <li key={index}>
              <p className='text-sentence'>
                <strong>{label}: </strong>
                {desc}
              </p>
            </li>
          ))}
        </ul>
        <p className='text-muted-foreground dark:text-gray-400 text-sm sm:text-base'>
          By using our Services, you acknowledge that you have read, understood,
          and agreed to these terms and conditions.
        </p>
      </article>
    </main>
  );
};

const termsAndConditions = [
  {
    label: "Service Use",
    desc: "The Services provided on this website are intended solely for business use. You may not use the Services for any illegal or unauthorized purpose.",
  },
  {
    label: "Package Selection",
    desc: "Our POS packages are subject to availability. We reserve the right to modify or discontinue any package without notice.",
  },
  {
    label: "Payment Selection",
    desc: "Payment for the selected package is required depending on the agreed payment method. All prices are in Peso, and taxes may apply.",
  },
  {
    label: "Refunds",
    desc: "Refunds are subject to our refund policy. Contact our support team for inquiries regarding refunds.",
  },
  {
    label: "Service Activation",
    desc: "Once payment is confirmed, we will ship the chosen package and provide relevant setup instructions.",
  },
  {
    label: "Data Privacy",
    desc: "We do not collect and store personal information as outlined in our Privacy Policy.",
  },
  {
    label: "Support",
    desc: "Technical support is available according to the terms specified in the chosen package. Additional support may be available for free.",
  },
  {
    label: "Service Changes",
    desc: "We may update, modify, or discontinue any aspect of the Services without notice.",
  },
  {
    label: "Limitation of Liability",
    desc: "We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our Services.",
  },
  {
    label: "Intellectual Property",
    desc: "All content and materials provided as part of the Services are protected by intellectual property laws and remain our property.",
  },
  {
    label: "Third-Party Services",
    desc: "Our Services may integrate with third-party applications. We are not responsible for any issues arising from the use of such third-party services.",
  },
  {
    label: "Termination",
    desc: "We reserve the right to terminate or suspend your access to the Services at our discretion, without notice for any illegal activities or violation.",
  },
  {
    label: "Modification",
    desc: "We may modify these terms and conditions at any time. Your continued use of the Services constitutes acceptance of any changes.",
  },
];

export default TermsAndConditions;
