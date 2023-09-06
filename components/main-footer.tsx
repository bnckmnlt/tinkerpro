import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='pb-12 pt-20 dark:border-t bg-foreground dark:bg-black/30 text-background dark:text-foreground'>
      <div className='container'>
        <div className='px-5'>
          <div className='grid grid-cols-1 gap-7 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:gap-4 sm:gap-6'>
            <div className='xs:col-span-2 sm:col-span-2 md:col-span-1'>
              <div>
                <div className='w-60'>
                  <Image
                    src='/icons/tinkerpro-icon.png'
                    alt='TinkerPro'
                    width={1000}
                    height={1000}
                    quality={100}
                  />
                </div>
                <p className='text-base tracking-tight'>
                  TinkerPro - Simple. Easy. Modern POS
                </p>
              </div>
              <div className='mt-3 flex items-center space-x-2 md:mt-6'>
                <a href='https://www.facebook.com/TinkerProHQ'>
                  <p className='opacity-80 transition-opacity hover:opacity-100'>
                    <svg
                      className='h-5 w-5'
                      fill='#ff6900'
                      viewBox='0 0 24 24'
                      aria-hidden='true'>
                      <path
                        fillRule='evenodd'
                        d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </p>
                </a>
                <a href='https://www.youtube.com/@TinkerProHQ'>
                  <p className='opacity-80 transition-opacity hover:opacity-100'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='#ff6900'
                      viewBox='0 0 16 16'>
                      <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z' />
                    </svg>
                  </p>
                </a>
              </div>
            </div>
            {itemList.map(({ title, items }, key) => (
              <div key={key}>
                <span className='text-lg font-bold text-blue-gray-900'>
                  {title}
                </span>
                {items.map(({ label, ref }, key) => (
                  <ul key={key} className='list-none m-0'>
                    <li className='my-4'>
                      <Link
                        href={ref}
                        className='text-sm tracking-tight sm:text-base md:text-lg dark:text-gray-300 underline-offset-2 transition-colors duration-150 ease-in-out hover:text-orange-600 hover:underline'>
                        {label}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
          <hr className='my-12 sm:my-16 md:my-12 bg-background' />
          <div className='flex flex-col items-start sm:mb-12 sm:flex-row gap-8 md:mb-0'>
            <div className='space-y-2'>
              <h5 className='text-base font-semibold'>TinkerPro</h5>
              <div className='w-max'>
                <span className='block'>2nd floor Cometa Bldg.</span>
                <span className='block'>
                  Kinalumsan, Gun-ob, Lapu-Lapu City
                </span>
                <span>Cebu, Philippines</span>
              </div>
            </div>
            <div className='space-y-2'>
              <h5 className='text-base font-semibold'>BIR Accredited</h5>
              <div className='flex flex-col items-start sm:justify-center gap-4 xs:flex-row'>
                <Avatar>
                  <AvatarImage
                    src='/icons/bir-icon.png'
                    alt='Bureau of Internal Revenue'
                    className='w-max h-max'
                  />
                  <AvatarFallback>BIR Accredited</AvatarFallback>
                </Avatar>
                <div className='w-max'>
                  <span className='block'>Our company holds official</span>
                  <span className='block'>accreditation and certification</span>
                  <span>
                    from{" "}
                    <span className='font-semibold text-blue-gray-900'>
                      Bureau of Internal Revenue
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='my-5 text-xs sm:text-sm md:my-12'>
            <ul className='flex flex-col !list-none !ml-0 flex-wrap gap-y-2 md:flex-row md:divide-x md:divide-background dark:divide-gray-600/20'>
              <li className='md:px-2'>
                <Link href='/privacy-policy'>
                  <span className='underline-offset-2 hover:text-orange-500 hover:underline'>
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li className='md:px-2'>
                <Link href='/terms-and-conditions'>
                  <span className='underline-offset-2 hover:text-orange-500 hover:underline'>
                    Terms and Conditions
                  </span>
                </Link>
              </li>
              <li className='md:px-2'>
                <span>&copy; 2023 TinkerPro PH. All rights reserved</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const itemList = [
  {
    title: "Products",
    items: [
      { label: "POS Packages", ref: "/packages" },
      { label: "Reseller Package", ref: "/reseller-package" },
    ],
  },
  {
    title: "Resources",
    items: [{ label: "Tutorials", ref: "/docs" }],
  },
  {
    title: "Company",
    items: [{ label: "About us", ref: "/about-us" }],
  },
  {
    title: "Connect",
    items: [{ label: "Contact us", ref: "/contact-us" }],
  },
];

export default Footer;
