import { Button } from "@/components/ui/button";
import {
  ChevronRightIcon,
  ClipboardDocumentIcon,
  ClockIcon,
  ComputerDesktopIcon,
  CubeIcon,
  InboxStackIcon,
  PresentationChartLineIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { createElement } from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <Hero />
      <FeaturesCard />
      <CardBanner />
      <Clients />
    </main>
  );
};

function Hero() {
  return (
    <div className='container section-whitespace'>
      <header className='text-center max-w-6xl mx-auto mb-24'>
        <h1 className='xs:text-5xl sm:text-6xl md:text-7xl'>
          Revolutionize Your Business with TinkerPro POS
        </h1>
        <p className='text-lead'>
          Experience a new level of operational efficiency, customer
          satisfaction, and growth potential. Transform your business today with
          TinkerPro Point of Sale
        </p>
        <Button
          size='xl'
          className='mt-12 uppercase text-base mx-auto rounded-lg'>
          <Link href='/packages' className='flex items-center'>
            <CubeIcon className='h-5 w-5 mr-2' />
            view pos packages
          </Link>
        </Button>
      </header>
      <div className='max-w-6xl mx-auto overflow-hidden'>
        <video
          className='h-full w-full rounded-xl shadow-2xl drop-shadow-2xl'
          controls
          muted>
          <source src='/pos-video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

function FeaturesCard() {
  return (
    <div className='container section-whitespace'>
      <header className='space-y-1 max-w-4xl text-center sm:text-left mb-12'>
        <div>
          <h1>Explore and discover some of its features</h1>
          <p className='text-muted-foreground text-base sm:text-lg md:text-xl mt-4'>
            Experience a variety of features offered by our POS Machine
            Solutions, designed to simplify your business management efforts.
          </p>
        </div>
      </header>
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-x-8 md:gap-8'>
          {cardItems.map(({ label, icon, desc }, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center sm:text-left sm:items-start gap-3 sm:gap-0 sm:flex-row sm:border sm:rounded-lg sm:py-6 sm:px-5'>
              <div className='mb-auto sm:mr-4 w-fit rounded-lg bg-slate-100 dark:bg-gray-600/20 p-3 shadow-sm'>
                {icon}
              </div>
              <div className='space-y-2'>
                <h4 className='leading-none'>{label}</h4>
                <p className='text-base sm:text-lg tracking-tight text-gray-700 dark:text-slate-100'>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CardBanner() {
  return (
    <div className='container sectin-whitespace'>
      <header className='text-center mb-12'>
        <h1 className='font-normal'>Start today and choose your package</h1>
        <p className='text-lead'>
          Choose from our packages that suits your business needs.
        </p>
      </header>
      <div className='sm:mt-24 mx-auto max-w-5xl flex flex-col border overflow-hidden rounded-lg shadow-sm sm:flex-row'>
        <div className='basis-full sm:basis-1/2 shrink-0 relative h-auto w-full'>
          <Image
            src='/card-image.jpg'
            alt='TinkerPro POS'
            width={1000}
            height={1000}
            quality={100}
            className='h-full'
          />
          <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tl from-black/60 via-black/50'></div>
        </div>
        <div className='p-6 xs:p-10 sm:p-16 basis-full sm:basis-1/2'>
          <div className='space-y-4 mb-10 text-center sm:text-left'>
            <div className='space-y-1'>
              <h4 className='text-muted-foreground'>TinkerPro POS</h4>
              <h1>The POS Solution for your growing business</h1>
            </div>
            <p className='text-lead text-base xs:text-lg sm:text-xl'>
              Explore how TinkerPro POS enhances your business, providing
              solutions for sellers across the spectrum.
            </p>
          </div>
          <Button
            variant='outline'
            size='xl'
            className='border-orange-500 text-orange-500 hover:border-orange-600 hover:bg-background/30 hover:text-orange-600'
            asChild>
            <Link href='/packages' className='flex items-center'>
              View POS Packages <ChevronRightIcon className='h-4 w-4 ml-2' />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function Clients() {
  return (
    <div className='container section-whitespace'>
      <header className='text-center mb-12'>
        <h4>Trusted by these businesses</h4>
      </header>
      <div className='flex flex-1 gap-6 flex-wrap items-center justify-center max-w-5xl mx-auto'>
        {imagePaths.map(({ label, path }, index) => (
          <div
            key={index}
            className='hover:scale-110 transition duration-150 delay-75 flex sm:h-28 grayscale hover:grayscale-0 contrast-75 hover:contrast-100 grow-0 sm:w-28 w-20 h-20 shrink ease-in-out'>
            <Image
              src={path}
              alt={label}
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const cardItems = [
  {
    label: "Convenient Interface",
    icon: createElement(ComputerDesktopIcon, {
      className: "h-8 w-8",
      strokeWidth: 1,
    }),
    desc: "Efficiently navigate and process transactions through a user-friendly interface.",
  },
  {
    label: "Manage Inventory",
    icon: createElement(InboxStackIcon, {
      className: "h-8 w-8",
      strokeWidth: 1,
    }),
    desc: "Track stock, set reorder points, and make informed decisions easily.",
  },
  {
    label: "Generate Reports",
    icon: createElement(ClipboardDocumentIcon, {
      className: "h-8 w-8",
      strokeWidth: 1,
    }),
    desc: "Monitor business performance with clear, detailed reports on sales and inventory.",
  },
  {
    label: "Product Expiry",
    icon: createElement(ClockIcon, {
      className: "h-8 w-8",
      strokeWidth: 1,
    }),
    desc: "Manage product expiry dates with our advanced POS system's integrated feature.",
  },
  {
    label: "Multiple Users",
    icon: createElement(UserIcon, {
      className: "h-8 w-8",
      strokeWidth: 1,
    }),
    desc: "Enable various users to access and utilize POS system functionalities seamlessly.",
  },
  {
    label: "Record Sales",
    icon: createElement(PresentationChartLineIcon, {
      className: "h-8 w-8",
      strokeWidth: 1,
    }),
    desc: "Efficiently manage and track sales data with advanced POS system features.",
  },
];

const imagePaths = [
  {
    label: "Tapawarma",
    path: "/clients_logo/tapawarma.png",
  },
  {
    label: "Ole Music Bar",
    path: "/clients_logo/Ole1.png",
  },
  {
    label: "Crystal Cup",
    path: "/clients_logo/cupcafe.png",
  },
  {
    label: "Soul Sierra",
    path: "/clients_logo/soulsierra.png",
  },
  {
    label: "Sugbowings",
    path: "/clients_logo/sugbowings.png",
  },
  {
    label: "Durhan White Beach Resort",
    path: "/clients_logo/durhan1.png",
  },
  {
    label: "Tong dak",
    path: "/clients_logo/tongdak.png",
  },
  {
    label: "Megs Cafe",
    path: "/clients_logo/megscafe.png",
  },
  {
    label: "Ouback Servo",
    path: "/clients_logo/outback.png",
  },
  {
    label: "Prime Pharma",
    path: "/clients_logo/primepharma.png",
  },
  {
    label: "Verified Lounge",
    path: "/clients_logo/lounge.png",
  },
];

export default Home;
