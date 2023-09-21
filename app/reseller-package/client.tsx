"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";
import {
  ArrowRightIcon,
  MinusSmallIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const ResellerPackage = (props: Props) => {
  function handleCopyValue(value: string) {
    const tempInput = document.createElement("textarea");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    toast({ description: "Text copied successfully" });
  }

  const emailFormat =
    "Good day, I'm interested to know more about the reseller package for your BIR-accredited POS software. My business Facebook Page is [Insert your business’ Facebook Page / link here], and I have attached a photo of my Business Permit as a proof of business and my capability to offer POS/CRM/Computer Parts/I.T. services to my clients. I'm looking forward to your kind response. Best regards, [Your Name]";

  return (
    <main>
      <div className='section-whitespace container'>
        <div className='text-gray-600 ring-1 mb-4 ring-gray-900/10 dark:ring-gray-600/20 py-2 px-4 rounded-full w-fit mr-auto'>
          <p className='text-xs sm:text-sm font-medium leading-none'>
            Last modified: August 31, 2023
          </p>
        </div>
        <div className='flex gap-8 text-base md:text-lg'>
          <article className='basis-full md:basis-3/4 gap-4 xs:border md:p-12 xs:p-8 rounded-lg'>
            <header className='space-y-4 mb-12'>
              <h2 className='border-b'>
                Do you currently operate as a NON-BIR Accredited POS provider?
                <div className='space-y-1 mt-4 mb-2'>
                  <span className='text-base font-semibold'>Tags</span>
                  <div className='flex items-center gap-2'>
                    <Badge className='text-sm'>Reseller Package</Badge>
                  </div>
                </div>
              </h2>
            </header>
            <p>
              Are you looking to{" "}
              <span className='font-semibold text-blue-gray-900'>BOOST</span>{" "}
              your POS hardware sales with our BIR-accredited POS software?
              <span className='h-4 sm:h-2 block'></span>Look no further – we
              have the solution for you!
              <span className='h-4 sm:h-2 block'></span>At TinkerPro, we&apos;re
              committed to delivering the finest products and services to our
              valued clients. That&apos;s why we require the following from our
              software resellers:
            </p>
            <ul className='list-inside list-decimal space-y-4'>
              <li className=''>
                <span className='font-bold text-blue-gray-900'>
                  A Business Facebook Page or link:
                </span>{" "}
                This helps us understand your business and reach out more
                effectively. And we want to see your happy customers!
              </li>
              <li>
                <span className='font-bold'>
                  A Business Permit for supplying POS/CRM Machines, Computer
                  Accessories, I.T. Services, and other related fields:
                </span>{" "}
                This demonstrates your credibility and commitment to our
                industry. It&apos;s a mark of your professionalism and gives us
                the confidence that we&apos;re collaborating with a trusted
                partner.
              </li>
            </ul>
            <figure className='flex w-full flex-col  justify-center md:mx-auto md:max-w-4xl'>
              <div className='h-4'></div>
              <div className='rounded-lg border dark:border-gray-600/20 shadow-sm'>
                <div className='inline-flex w-full dark:border-b-gray-600/20 dark:border-b flex-row items-center rounded-t-lg text-background dark:bg-black/50 dark:text-white bg-foreground'>
                  <div className='ml-4 w-full grow py-2.5'>
                    <span className='text-sm font-semibold leading-none text-blue-gray-800'>
                      New Message
                    </span>
                  </div>
                  <div className='ml-1 mr-3 flex flex-row text-muted-foreground gap-1'>
                    <MinusSmallIcon className='h-4 w-4' />
                    <ArrowRightIcon className='-rotate-45 h-4 w-4' />
                    <XMarkIcon className='h-4 w-4' />
                  </div>
                </div>
                <div className='h-auto rounded-b-lg bg-white dark:bg-black/30'>
                  <div className='border-b dark:border-b-gray-600/20 py-2.5 px-4'>
                    <div className='text-sm text-muted-foreground'>
                      To:{" "}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant='link'
                              className='p-0'
                              onClick={() =>
                                handleCopyValue("contact@tinkerpro.ph")
                              }>
                              <span>contact@tinkerpro.ph</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Copy text</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  <div className='border-b dark:border-b-gray-600/20 py-2.5 px-4'>
                    <span className='text-sm text-muted-foreground'>
                      Subject:{" "}
                      <span className='text-foreground font-medium'>
                        Reseller Package Inquiry
                      </span>
                    </span>
                  </div>
                  <div className='overflow-y-auto pb-16 pt-2.5 px-4'>
                    <span>Good day,</span>
                    <p>
                      I&apos;m interested to know more about the reseller
                      package for your BIR-accredited POS software. My business
                      Facebook Page is{" "}
                      <span className='font-medium tracking-tight text-orange-500'>
                        [Insert your business’ Facebook Page / link here]
                      </span>
                      , and I have attached a photo of my Business Permit as a
                      proof of business and my capability to offer
                      POS/CRM/Computer Parts/I.T. services to my clients.
                      I&apos;m looking forward to your kind response.
                    </p>
                    <div className='h-6'></div>
                    <span>Best regards,</span>
                    <div className=''></div>
                    <span className='font-medium tracking-tight text-orange-500'>
                      [Your Name]
                    </span>
                  </div>
                  <div className='border-t dark:border-t-gray-600/20'>
                    <div className='ml-auto w-fit border-l border-gray-600/20'>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant='outline'
                              className='border-none shadow-none'
                              onClick={() => handleCopyValue(emailFormat)}>
                              Copy
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Copy body text</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </div>
              <span className='mt-2.5 text-center sm:text-base'>
                Suggested email template
              </span>
            </figure>
            <div className='text-sm text-muted-foreground mt-4 md:mt-8'>
              <p>
                We have special packages and offers for those who comply with
                these requirements. Email us at{" "}
                <Button variant='link' className='p-0 m-0 h-auto'>
                  <a
                    href={`https://mail.google.com/mail/u/0/?fs=1&to=contact@tinkerpro.ph&su=Reseller%20Package&body=${emailFormat}&tf=cm`}>
                    contact@tinkerpro.ph
                  </a>
                </Button>{" "}
                and expect a swift reply!{" "}
              </p>
            </div>
          </article>
          <aside className='hidden md:block top-0 basis-1/4'>
            <div className='h-96 w-full rounded-lg border sticky top-[5%]'></div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ResellerPackage;
