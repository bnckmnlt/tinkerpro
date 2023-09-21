"use client";

import { Button } from "@/components/ui/button";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Features = (props: Props) => {
  return (
    <main>
      <Hero />
      <SoftwareFeatures />
      <ExtraFeatures />
      <Banner />
    </main>
  );
};

function Hero() {
  return (
    <div className='container section-whitespace mb-32'>
      <div className='flex flex-col'>
        <Link href=''>
          <div className='border rounded-full dark:hover:bg-slate-900/30 hover:bg-gray-50 dark:border-gray-600/30 flex items-center mx-auto mb-6 flex-row gap-2 px-2 py-1.5 border-slate-900/30 w-fit'>
            <div className='px-4 py-0.5 sm:py-1.5 rounded-full bg-orange-500'>
              <span className='text-white text-xs xs:text-sm sm:text-base font-semibold uppercase'>
                New
              </span>
            </div>
            <span className='md:text-base pr-2 font-medium'>
              POS Software is available for purchase
            </span>
          </div>
        </Link>
        <header className='text-center max-w-5xl mx-auto mb-24 sm:mb-48'>
          <h1 className='xs:text-5xl sm:text-6xl md:text-7xl'>
            Designed for different types of businesses
          </h1>
        </header>
        <figure className='relative'>
          <div className='relative mx-auto border-gray-800 xs:max-w-2xl xs:h-full dark:border-gray-800 sm:max-w-3xl bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] sm:h-full md:max-w-5xl'>
            <div className='rounded-xl overflow-hidden h-[230px] xs:h-full'>
              <Image
                height={1000}
                width={1000}
                quality={100}
                src='/software-interface/Main Dashboard.png'
                className='dark:hidden h-[140px] xs:h-full w-full rounded-xl'
                alt=''
              />
              <Image
                height={1000}
                width={1000}
                quality={100}
                src='/software-interface/Main Dashboard.png'
                className='hidden dark:block h-[140px] xs:h-full w-full rounded-xl'
                alt=''
              />
            </div>
          </div>
          <div className='absolute -z-10 -translate-x-1/2 left-1/2 inset-y-0 rounded-full bg-gradient-to-br from-amber-500/30 via-orange-500/30 to-orange-600 dark:opacity-5 dark:from-white dark:via-white dark:to-white opacity-5 blur-3xl h-full w-full' />
          <div className='absolute -z-10 inset-y-0 translate-x-1/2 right-1/2 my-auto rounded-full bg-gradient-to-br from-pink-500/30 via-red-500/30 to-red-600 dark:opacity-5 opacity-10 dark:from-amber-500/10 dark:via-amber-500/20 dark:to-orange-500/30 blur-3xl h-full w-full' />
          <div className='relative mx-auto bg-gray-900 p-3.5 dark:bg-gray-700 flex flex-row gap-2 rounded-b-xl h-[24px] max-w-[301px] xs:max-w-2xl sm:max-w-3xl sm:h-[45px] md:max-w-5xl'>
            <div className='rounded-full bg-slate-900 h-full w-6 inset-0'></div>
            <div className='rounded-full bg-slate-900 h-full w-6 inset-0'></div>
            <div className='rounded-full bg-slate-900 h-full w-6 inset-0'></div>
          </div>
          <div className='relative mx-auto bg-gray-800 h-[40px] max-w-[83px] xs:h-[55px] md:h-[90px] sm:max-w-[10%]'></div>
          <div className='relative mx-auto bg-gray-900 dark:bg-gray-900 rounded-b-xl rounded-l-xl rounded-r-xl h-[25px] max-w-[50%] md:h-[40px] xs:h-[25px] xs:max-w-[40%]'></div>
        </figure>
      </div>
    </div>
  );
}

function SoftwareFeatures() {
  return (
    <div className='container section-whitespace'>
      <header className='mb-12 text-center max-w-4xl mx-auto'>
        <h2 className='!text-4xl !border-b-0'>
          Get actionable insights on your business
        </h2>
        <p className='text-lead'>
          Gain valuable insights into your business operations with practical,
          easy-to-understand data that can inform your decision-making and
          strategy.
        </p>
      </header>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='basis-full md:basis-1/2'>
          <figure></figure>
        </div>
        <div className='basis-full md:basis-1/2'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
            {featureCard.map(({ img, label, desc }, index) => (
              <div
                key={index}
                className='border flex max-w-sm mx-auto flex-1 flex-nowrap rounded-l-md rounded-lg p-6'>
                <div className='space-y-4'>
                  <div className='w-full flex items-center justify-center h-48'>
                    <Image
                      src={img}
                      alt={label}
                      width={1000}
                      height={1000}
                      quality={100}
                      className='h-full w-full object-contain drop-shadow-2xl'
                    />
                  </div>
                  <div>
                    <h4 className='text-orange-500'>{label}</h4>
                    <p className='text-muted-foreground !mt-2 text-sm md:text-lg'>
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ExtraFeatures() {
  return (
    <div className='container md-20 md:mb-32'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        <div className='basis-full md:basis-1/2'>
          <header className='mb-12'>
            <h2 className='!text-4xl !border-b-0'>
              Many helpful features to boost and support your business.
            </h2>
            <p className='text-lead'>
              Discover a wide range of user-friendly features designed to boost
              and elevate your business towards success.
            </p>
          </header>
          <div className='space-y-2 ml-2'>
            {extraFeatures.map((item, index) => (
              <div key={index} className='flex flex-row items-center'>
                <CheckIcon
                  className='h-4 w-4 text-orange-500 mr-4'
                  strokeWidth={6}
                />
                <p className='!mt-0 text-lg'>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='basis-full md:basis-1/2'></div>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className='pt-20 md:pt-32'>
      <div className='w-full relative h-full py-12 md:py-32'>
        <div className='absolute inset-0 w-full h-full !-z-10 overflow-hidden'>
          <Carousel slideInterval={3000} className='h-full w-full'>
            {carouselImages.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt={"Image " + (index + 1)}
                width={1000}
                height={1000}
                quality={100}
                className='bg-cover h-full object-cover'
              />
            ))}
          </Carousel>
        </div>
        <div className='bg-gradient-to-bl mix-blend-multiply from-black/30 via-black/80 absolute inset-0 -z-10 to-black' />
        <div className='z-50 container section-whitespace'>
          <header className='text-center mb-12'>
            <h1 className='font-thin text-orange-500'>
              Adaptable and Versatile
            </h1>
            <p className='text-lead !text-gray-400'>
              TinkerPro POS is flexible, making it a great fit for businesses of
              different sizes and industries.
            </p>
          </header>
          <div className='w-fit mx-auto'>
            <Button
              variant='outline'
              size='xl'
              className='uppercase text-orange-500 border-orange-500'>
              View POS Packages
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const featureCard = [
  {
    img: "/features_images/card-image-2.png",
    label: "Invoices & Document",
    desc: "Issue regular receipt, generate invoices, ins & outs, transfer stocks, and more!",
  },
  {
    img: "/features_images/card-image-4.png",
    label: "Reporting",
    desc: "Automatically generate insightful reports at the click of a button, saving you time and effort.",
  },
  {
    img: "/features_images/card-image-1.png",
    label: "Inventory Management",
    desc: "Keep your inventory flawlessly organized, so you can focus on what really matters.",
  },
  {
    img: "/features_images/card-image-3.png",
    label: "Low Stock Alert",
    desc: "Never run out of stock again. The POS alerts you when it's time to restock those best-sellers.",
  },
];

const extraFeatures = [
  "Set up loyalty programs and exclusive discounts to keep customers coming.",
  "From cash to digital wallets, credit cards and bank transfers, we've got you covered!",
  "Access essential information, manage contracts, and ensure a smooth supply chain.",
  "Flex your brand with our customizable receipt logo and details.",
];

const carouselImages = [
  "/carousel_images/carousel-image-1.jpg",
  "/carousel_images/carousel-image-2.jpg",
  "/carousel_images/carousel-image-3.jpg",
  "/carousel_images/carousel-image-4.jpg",
  "/carousel_images/carousel-image-5.jpg",
  "/carousel_images/carousel-image-6.jpg",
];

export default Features;
