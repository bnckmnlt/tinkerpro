"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BanknotesIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  LightBulbIcon,
  MinusIcon,
  PhoneIcon,
  PlusIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { createElement, useState } from "react";

type Props = {};

const Packages = (props: Props) => {
  return (
    <main>
      <PriceCard />
      <OrderingDetails />
      <PackageDetails />
      <Testimonials />
      <FAQ />
      <Banner />
    </main>
  );
};

function PriceCard() {
  const [inclusionsOpen, setinclusionsOpen] = useState(null);

  const toggleinclusions = (value: any) =>
    setinclusionsOpen(inclusionsOpen === value ? null : value);

  return (
    <div className='container section-whitespace'>
      <header className='mb-24 text-center'>
        <h1 className='font-thin'>
          Simplify business management with{" "}
          <span className='bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 bg-clip-text font-normal text-transparent'>
            TinkerPro POS
          </span>
        </h1>
      </header>
      <div className='w-fit mx-auto text-center mb-4'>
        <p className='text-sentence'>
          Have your own hardware? <span className='block'></span>Our
          BIR-Accredited software is only{" "}
          <span className='custom-underline grayscale text-base font-bold md:text-xl'>
            ₱10,000!
          </span>
        </p>
      </div>
      <Tabs defaultValue='birpackages' className=''>
        <TabsList className='grid w-full grid-cols-2 max-w-lg mx-auto'>
          <TabsTrigger value='birpackages'>BIR Packages</TabsTrigger>
          <TabsTrigger value='nonbirpackages'>Non BIR Packages</TabsTrigger>
        </TabsList>
        <TabsContent value='birpackages'>
          <div className='grid grid-cols-1 max-w-xl mt-24 md:max-w-7xl mx-auto md:grid-cols-3 items-center gap-8 md:gap-0'>
            {cardItems.map(({ label, desc, price, items }, index) => (
              <div
                key={index}
                className={`h-full ${
                  label === "Touch POS"
                    ? "bg-black dark:bg-black/30 text-white"
                    : "bg-white dark:bg-background"
                } first:bg-gradient-to-b md:first:order-2 md:last:order-3 h-full shadow-sm first:drop-shadow-lg first:h-fit from-amber-500 via-orange-500 to-orange-600 p-1.5 first:md:scale-110 border rounded-lg`}>
                <div
                  className={`flex flex-col h-full px-4 md:px-10 py-8 ${
                    label === "Touch POS"
                      ? "bg-black dark:bg-black/30 text-white"
                      : "bg-white dark:bg-background"
                  } first:rounded-lg`}>
                  <header className='space-y-6'>
                    <h3>{label}</h3>
                    <div>
                      <span className='text-large block !font-normal text-gray-600 dark:text-gray-400'>
                        Price start at
                      </span>
                      <span className='text-4xl tracking-tight lining-nums font-extrabold'>
                        ₱ {price.php}
                      </span>
                    </div>
                    <p className='text-base leading-relaxed'>{desc}</p>
                  </header>
                  {label === "Touch POS" ? (
                    <Button
                      size='xl'
                      className='uppercase font-semibold mt-10 !text-base bg-gradient-to-r from-amber-500 via-orange-500 to-orange-500'>
                      Get a quote
                    </Button>
                  ) : index === 0 ? (
                    <Button
                      size='xl'
                      className='mt-10 font-semibold uppercase !text-base'>
                      Get a quote
                    </Button>
                  ) : (
                    <Button
                      variant='outline'
                      size='xl'
                      className='mt-10 border-gray-500 dark:border-gray-400 font-semibold uppercase !text-base'>
                      Get a quote
                    </Button>
                  )}
                  <Button
                    onClick={() => toggleinclusions(index)}
                    variant='outline'
                    className='flex mt-8 md:hidden text-base justify-between rounded-full items-center'>
                    Show package inclusions{" "}
                    {inclusionsOpen === index ? (
                      <MinusIcon className='h-5 w-5' />
                    ) : (
                      <PlusIcon className='h-5 w-5' />
                    )}
                  </Button>
                  {inclusionsOpen === index && (
                    <div className='w-full block md:hidden'>
                      <ul className='ml-2 mb-0'>
                        {items.map((item, index) => (
                          <ol key={index}>
                            <div className='flex py-2 items-center tracking-tight'>
                              <CheckCircleIcon className='mr-4 inline-block h-6 w-6 flex-shrink-0 text-amber-500' />
                              {label !== "Touch POS" ? (
                                <span className='block text-sentence !font-normal'>
                                  {item}
                                </span>
                              ) : (
                                <span className='block bg-gradient-to-tr bg-clip-text text-transparent from-amber-400 via-amber-500 to-orange-500 text-sentence'>
                                  {item}
                                </span>
                              )}
                            </div>
                          </ol>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className='w-full hidden md:block'>
                    <ul className='ml-2 mb-0'>
                      {items.map((item, index) => (
                        <ol key={index}>
                          <div className='flex py-2 items-center tracking-tight'>
                            <CheckCircleIcon className='mr-4 inline-block h-6 w-6 flex-shrink-0 text-amber-500' />
                            {label !== "Touch POS" ? (
                              <span className='block text-sentence !font-normal'>
                                {item}
                              </span>
                            ) : (
                              <span className='block bg-gradient-to-tr bg-clip-text text-transparent from-amber-400 via-amber-500 to-orange-500 text-sentence'>
                                {item}
                              </span>
                            )}
                          </div>
                        </ol>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value='nonbirpackages'></TabsContent>
      </Tabs>
      <div className='my-16 rounded-lg border px-12 py-10 max-w-xl md:max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row'>
          <div className='hidden border-r h-36 w-36 md:flex items-center justify-center pr-8'>
            <Image
              src='/icons/warranty-icon.png'
              alt='1 Year Hardware Warranty'
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
          <div className='w-fit shrink md:ml-8'>
            <div className='mb-8'>
              <span className='pr-8 text-sm font-semibold lg:pr-0 md:text-base'>
                Enjoy these additional perks across all the available packages
              </span>
            </div>
            <div className='grid gap-3 text-sm tracking-tight text-gray-700 dark:text-gray-300 sm:grid-cols-2 md:grid-cols-4'>
              {addons.map((item, index) => (
                <div key={index} className='inline-flex items-center'>
                  <CheckIcon className='h-4 w-4 text-green-500 mr-2' />
                  <span className='text-sm'>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderingDetails() {
  return (
    <div className='section-whitespace container'>
      <div className='flex flex-col justify-center gap-14 md:gap-0 md:justify-start md:items-center md:flex-row'>
        <section className='md:pr-8 text-center md:text-left md:max-w-2xl'>
          <h1 className='font-normal leading-snug'>
            Ordering &amp; Shipment details outside NCR, Rizal, &amp; Cebu
          </h1>
          <p className='text-lead md:pr-4'>
            Just follow these easy steps to order your selected Point-of-sale
            package from the items listed above
          </p>
        </section>
        <section className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 max-w-4xl sm:mx-auto'>
          {orderingInfoItems.map(({ icon, label, desc }, index) => (
            <div key={index} className='relative h-full w-full'>
              <div className='absolute hidden sm:block right-0 top-[50%] md:top-[40%] -z-10 opacity-50'>
                <span className='text-[250px] text-slate-600/10 font-extrabold'>
                  {index + 1}
                </span>
              </div>
              <div className='sm:space-y-4 border-l-8 border sm:border-none !border-l-foreground border-slate-900/10 dark:border-gray-600/20 p-4 rounded-r-2xl'>
                <div className='bg-orange-100 hidden sm:block text-orange-600 border border-orange-600 w-fit p-3 rounded-lg'>
                  {icon}
                </div>
                <div className='space-y-1 tracking-tight'>
                  <Badge className='text-base bg-foreground dark:bg-gray-600/20 text-white'>
                    {label}
                  </Badge>
                  <p className='text-muted-foreground !mt-2 text-base sm:text-lg'>
                    {desc}
                  </p>
                  {index === 5 && (
                    <Button variant='outline' asChild>
                      <Link
                        href='/docs'
                        className='flex !mt-4 flex-row items-center'>
                        Read Tutorials{" "}
                        <ChevronRightIcon className='h-4 w-4 ml-2' />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function PackageDetails() {
  return (
    <div className='bg-foreground md:bg-inherit relative dark:bg-black/30 dark:md:bg-inherit my-32 overflow-hidden'>
      <div className='absolute inset-0 z-10 mix-blend-overlay bg-gradient-to-tr from-black/90 via-black/50 md:hidden to-white/50' />
      <div className='section-whitespace container rounded-xl bg-foreground dark:bg-black/30 relative'>
        <div className='absolute inset-0 z-0 mix-blend-overlay bg-gradient-to-bl from-black via-black/50 md:block hidden to-white/90' />
        <header className='mb-12 text-center text-white'>
          <h1 className='font-normal z-50 '>
            Choosing the most suitable package for your business
          </h1>
        </header>
        <div className='relative w-full h-full'>
          <div className='absolute top-0 hidden xs:flex z-20 inset-x-0 text-gray-300 flex-nowrap items-center ring-1 ring-gray-300 bg-gray-500/20 py-2 px-4 rounded-full w-fit mx-auto'>
            <InformationCircleIcon className='h-5 w-5 mr-2' />
            <p className='text-xs !mt-0 sm:text-sm font-medium leading-none'>
              Monitors and peripherals brand may vary depending on available
              stock
            </p>
          </div>
          {/* Semi carousel */}
          <div className='flex flex-row snap-mandatory snap-x flex-nowrap z-20 overflow-hidden hover:overflow-x-auto'>
            {packageItems.map(({ label, desc, ref, items }, index) => (
              <div
                key={index}
                className='flex flex-col md:flex-row snap-center justify-center relative gap-8 px-8 shrink-0 grow basis-full w-full'>
                <figure className='relative md:basis-1/2 w-full shrink z-10'>
                  <Image
                    src={ref}
                    alt={label}
                    width={1000}
                    height={1000}
                    quality={100}
                  />
                </figure>
                <div className='basis-full relative md:basis-1/2 w-full max-w-xl mx-auto md:self-center md:h-auto grow z-10'>
                  <header className='text-white text-center mb-12'>
                    <h1 className='font-normal !text-4xl'>{label}</h1>
                    <p className='text-gray-300 text-sm xs:text-base'>{desc}</p>
                  </header>
                  <div className='text-white'>
                    <div className='-mt-1 flex items-center justify-center rounded-t-lg bg-amber-500 pt-1'>
                      <h4>Suitable for:</h4>
                    </div>
                    <div className='rounded-b-lg bg-gradient-to-b from-amber-500 via-orange-500 to-orange-600 p-1 md:rounded-t-none'>
                      <div className='rounded-b-lg bg-foreground dark:bg-background px-2 text-left xs:px-6'>
                        <ol className='place grid text-xs xs:grid-cols-2 font-medium tracking-tight sm:text-base'>
                          {items.map((item, index) => (
                            <li
                              key={index}
                              className='flex flex-row items-center border-b-2 border-dashed border-orange-100 px-2 py-4 last:border-b-0'>
                              <CheckIcon className='mr-2 h-4 w-4 text-green-500 xs:h-5 xs:w-5' />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
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

function Testimonials() {
  return (
    <div className='container section-whitespace'>
      <header className='text-center mb-24'>
        <h1 className='font-normal'>Catering to business needs seamlessly</h1>
        <hr className='h-2 mt-4 w-24 mx-auto rounded-full bg-orange-500' />
      </header>
      <div className='grid grid-cols-1 sm:grid-cols-2 grid-flow-dense grid-rows-[masonry] md:grid-cols-4 gap-4 max-w-2xl md:max-w-none mx-auto'>
        {testomonials.map(({ name, pospackage, src, desc }, index) => (
          <div
            key={index}
            className='rounded-lg group/card w-full first:sm:col-span-2 justify-center flex flex-col hover:translate-y-1 transition duration-200 ease-in-out delay-75 first:bg-foreground dark:first:text-white dark:first:bg-black/30 first:text-background first:rounded-xl first:md:col-start-2 border bg-background p-8'>
            <p className='mb-6 group-first/card:font-medium font-normal text-sm xs:text-base md:text-lg'>
              {desc}
            </p>
            <div className='flex flex-nowrap items-center'>
              <Avatar>
                <AvatarImage src={src} alt={name} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <div className='ml-4'>
                <span className='md:text-large block text-base xs:text-lg'>
                  {name}
                </span>
                <span className='text-sm xs:text-base group-first/card:text-orange-500 text-muted-foreground group-first:!text-base'>
                  {pospackage}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div className='container section-whitespace my-32'>
      <div className='flex flex-col gap-7 md:gap-14 justify-center max-w-4xl mx-auto'>
        <header className='basis-full md:basis-2/5 text-center'>
          <h1 className='font-normal'>Frequently Asked Questions</h1>
        </header>
        <div className='basis-full md:basis-1/2'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='faq_1' className='py-2'>
              <AccordionTrigger>
                <h3>
                  How do I choose the right Point of Sale Package for my
                  business?
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className='text-sentence mt-4'>
                  Selecting the ideal POS package for your business involves
                  assessing your unique needs:
                </p>
                <ul className='text-sentence md:list-inside list-decimal'>
                  <li>
                    <strong>Business Type:</strong> Consider whether you&apos;re
                    a retail store, restaurant, or service provider.
                  </li>
                  <li>
                    <strong> Features:</strong> Review package features, such as
                    inventory management, sales reporting, and payment
                    processing.
                  </li>
                  <li>
                    <strong>Scalability:</strong> Think about future growth and
                    whether the package can scale with your business.
                  </li>
                  <li>
                    <strong>Budget:</strong> Determine your budget, keeping in
                    mind any additional hardware costs.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='faq_2' className='py-2'>
              <AccordionTrigger>
                <h3>What are the system requirements for the POS Software?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className='space-y-4 mt-4'>
                  <p className='text-sentence'>
                    Our POS software are designed to be flexible and compatible
                    with various systems. However, to ensure smooth operation,
                    we recommend the following minimum requirements:
                  </p>
                  <Table className='max-w-md border text-sm sm:text-base'>
                    <TableBody>
                      <TableRow>
                        <TableCell className='font-semibold'>
                          Operating System
                        </TableCell>
                        <TableCell>Windows 7 above</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='font-semibold'>
                          Processor
                        </TableCell>
                        <TableCell>Intel Dual Core</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='font-semibold'>RAM</TableCell>
                        <TableCell>4 - 8 GB of RAM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='font-semibold'>
                          Disk Space
                        </TableCell>
                        <TableCell>50GB of free space</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='font-semibold'>Display</TableCell>
                        <TableCell>
                          768px≥ or width | 15&quot;≥ Monitor
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='faq_3' className='py-2'>
              <AccordionTrigger>
                <h3>What payment options are available for purchasing?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className='text-sentence mt-4'>
                  At the meantime, we only accept bank transfers for the down
                  payment and Cash on Delivery (COD) for the remaining balance.
                  See ordering details for the procedure or contact us for a
                  more convenient payment method.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className='bg-gray-50 dark:bg-gray-600/20'>
      <div className='container section-whitespace'>
        <header className='text-foreground text-center mb-6'>
          <p className='text-lead !text-orange-400'>
            On-site installation and training is available upon request.
          </p>
          <h1 className='font-normal leading-snug'>
            Don’t hesitate to contact us if you need help
          </h1>
        </header>
        <div className='w-fit mx-auto'>
          <Button
            variant='outline'
            className='text-lg h-12 border-gray-500 bg-transparent px-10 py-6 rounded-full'
            asChild>
            <Link href='/contact-us' className='flex items-center flex-row'>
              <ChatBubbleLeftRightIcon className='w-5 h-5 mr-2' />
              Talk to us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

const cardItems = [
  {
    label: "All-in-One POS",
    desc: "Compact yet powerful, the All-in-One POS optimizes space and efficiency for your business.",
    price: { usd: 879, php: "49,499" },
    items: [
      '19" All in One PC',
      "Cash Drawer",
      "58mm Thermal Printer",
      "Barcode Scanner",
      "Keyboard and Mouse",
      "Mousepad",
      "Thermal Papers",
    ],
  },
  {
    label: "Standard POS",
    desc: "Designed for small businesses, the Standard POS offers cost-effective solutions for streamlined operations.",
    price: { usd: 589, php: "33,499" },
    items: [
      '19" Monitor',
      "HP System Unit",
      "Cash Drawer",
      "58mm Thermal Printer",
      "Barcode Scanner",
      "Keyboard and Mouse",
      "Mousepad",
      "Thermal Papers",
    ],
  },
  {
    label: "Touch POS",
    desc: "Compact, powerful functionality with a precise touchscreen for quick transactions.",
    price: { usd: 1049, php: "59,499" },
    items: [
      '15" All-in-One Touch POS',
      "Cash Drawer",
      "58mm Thermal Printer",
      "Barcode Scanner",
      "Keyboard and Mouse",
      "Mousepad",
      "Thermal Papers",
    ],
  },
];

const addons = [
  "Free shipping within NCR and Cebu",
  "Free installation and training",
  "Complete Hardware",
  "Complete POS Packages",
  "1-Year Hardware Warranty",
  "Lifetime POS Support",
  "Perfect for various types of businesses",
  "Priority support",
];

const packageItems = [
  {
    label: "All-in-One POS",
    desc: "The All-in-One POS provides a compact yet powerful solution for your business, saving space while being perfect for the job",
    ref: "/package_images/aio-pos.png",
    items: [
      "Retail-based Businesses",
      "Versatile for other business types",
      "Ideal for High Volume Operations",
      "Heavy Duty Commercial Use",
      "Lots of features included",
    ],
  },
  {
    label: "Touch POS",
    desc: "The Touch POS provides versatile functionality, takes up less space, and boasts a precise touchscreen for swift transaction handling",
    ref: "/package_images/aio-touch-pos.png",
    items: [
      "Food and Beverage Business",
      "Intuitive Touch Interface",
      "Ideal for High Volume Operations",
      "Heavy Duty Commercial Use",
      "Lots of features included",
    ],
  },
  {
    label: "Standard POS",
    desc: "The Standard POS is designed for small businesses, providing an affordable choice that works well for efficient operations",
    ref: "/package_images/standard-pos.png",
    items: [
      "Tailored for small businesses",
      "Cost-effective option",
      "Great mileage for small operations",
    ],
  },
];

const orderingInfoItems = [
  {
    icon: createElement(PhoneIcon, {
      className: "h-8 w-8 text-orange-500",
      strokeWidth: 1,
    }),
    label: "Step 1",
    desc: "Contact us on Facebook to confirm your order.",
  },
  {
    icon: createElement(EnvelopeIcon, {
      className: "h-8 w-8 text-orange-500",
      strokeWidth: 1,
    }),
    label: "Step 2",
    desc: "Receive the official Invoice by email.",
  },
  {
    icon: createElement(CurrencyDollarIcon, {
      className: "h-8 w-8 text-orange-500",
      strokeWidth: 1,
    }),
    label: "Step 3",
    desc: "Pay 50% down payment via Bank Transfer.",
  },
  {
    icon: createElement(TruckIcon, {
      className: "h-8 w-8 text-orange-500",
      strokeWidth: 1,
    }),
    label: "Step 4",
    desc: "We'll ship the items ASAP after payment.",
  },
  {
    icon: createElement(BanknotesIcon, {
      className: "h-8 w-8 text-orange-500",
      strokeWidth: 1,
    }),
    label: "Step 5",
    desc: "Pay the remaining 50% balance upon delivery.",
  },
  {
    icon: createElement(LightBulbIcon, {
      className: "h-8 w-8 text-orange-500",
      strokeWidth: 1,
    }),
    label: "Step 6",
    desc: " Visit our website for simple POS setup tutorials.",
  },
];

const testomonials = [
  {
    name: "Samgyup ni Bry",
    pospackage: "Touch POS",
    src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    desc: "Using the Touch POS package has transformed the way we handle transactions, making every sale smooth and efficient.",
  },
  {
    name: "Samgyup ni Bry",
    pospackage: "Touch POS",
    src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur dignissimos harum quasi hic magnam doloremque explicabo voluptatibus id quaerat",
  },
  {
    name: "Samgyup ni Bry",
    pospackage: "Touch POS",
    src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur dignissimos harum quasi hic magnam doloremque explicabo voluptatibus id quaerat",
  },
];

export default Packages;
