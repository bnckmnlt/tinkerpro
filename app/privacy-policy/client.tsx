"use client";

import { Metadata } from "next";
import Link from "next/link";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const PrivacyPolicy = (props: Props) => {
  return (
    <main className='max-w-5xl section-whitespace mx-auto px-8'>
      <article className='space-y-4'>
        <header className='text-center mb-12 space-y-4'>
          <div className='text-gray-600 ring-1 ring-gray-900/10 dark:ring-gray-600/20 px-4 rounded-full w-fit mx-auto'>
            <p>Last modified: August 31, 2023</p>
          </div>
          <h1>DATA AND PRIVACY POLICY</h1>
        </header>
        <p className='text-sentence'>
          This Privacy Policy outlines how TinkerPro collects, uses, discloses,
          and safeguards your personal information when you access and use our
          Point of Sale (POS) packages and related services.
        </p>
        <div>
          {privacyPolicy.map(({ title, desc, items }, index) => (
            <ul key={index} className='list-inside'>
              <h4>
                {index + 1}. {title}
              </h4>
              <p className='text-sentence'>{desc}</p>
              {items.map((item, index) => (
                <li key={index} className='inline-block'>
                  <p className='text-sm sm:text-base'>• {item}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <p className='text-muted-foreground dark:text-gray-400 text-sm sm:text-base'>
          By using our Services, you consent to the terms of this Privacy
          Policy. If you have any questions or concerns regarding these terms,
          please contact us using the following information provided in the{" "}
          <Link
            href='/contact-us'
            className='underline underline-offset-2 hover:text-orange-500'>
            contact
          </Link>{" "}
          page.
        </p>
      </article>
    </main>
  );
};

const privacyPolicy = [
  {
    title: "Information We Collect",
    desc: "We may collect various types of information when you interact with our Services, including but not limited to:",
    items: [
      "Contact Information: Name, email address, phone number, business details",
      "Transaction Data: Details of transactions conducted through our POS system.",
      "Usage Information: Information about how you use our Services, including log data, device information, and analytics.",
      "Communications: Correspondence you send to us, such as inquiries or feedback",
    ],
  },
  {
    title: "How We Use Your Information",
    desc: "We use the collected information for various purposes, including but not limited to:",
    items: [
      "Providing and improving our Services.",
      "Processing transactions and delivering products.",
      "Responding to your inquiries and providing customer support.",
      "Analyzing usage patterns to enhance user experience.",
      "Sending you important updates, newsletters, and marketing communications.",
    ],
  },
  {
    title: "Data Sharing",
    desc: "We may share your personal information in the following circumstances:",
    items: [
      "With service providers and partners who assist in delivering our Services.",
      "In response to legal requests or to comply with applicable laws.",
      "To protect the rights, safety, and security of our users and the public.",
    ],
  },
  {
    title: "Data Security",
    desc: "We implement industry-standard security measures to protect your personal information from unauthorized access and disclosure. However, no data transmission over the internet is guaranteed to be completely secure.",
    items: [],
  },
  {
    title: "Third-Party Links",
    desc: "Our Services may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites. Please review the privacy policies of those sites.",
    items: [],
  },
  {
    title: "Children's Policy",
    desc: "Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.",
    items: [],
  },
  {
    title: "Changes to this Policy",
    desc: "We may update this Privacy Policy from time to time. We will notify you of any material changes through the Services or by other means.",
    items: [],
  },
];

export default PrivacyPolicy;
