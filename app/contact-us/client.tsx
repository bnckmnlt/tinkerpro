"use client";

import React, { createElement } from "react";
import {
  ChevronRightIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { MobileIcon } from "@radix-ui/react-icons";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

type Props = {};

const ContactUs = (props: Props) => {
  const { toast } = useToast();

  function handleCopyValue(value: string) {
    const tempInput = document.createElement("textarea");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  return (
    <main>
      <div className='container section-whitespace'>
        <div className='h-full'>
          <header className='text-center mb-12 block max-w-xl mx-auto'>
            <h1>Your questions matter. Fast replies guaranteed!</h1>
            <p className='text-lead'>
              Just send us a message and our team will be in touch.
            </p>
          </header>
          <div className='max-w-xl mx-auto'>
            <div className='flex flex-col gap-4'>
              <div className='basis-full space-y-8 w-full md:basis-1/2'>
                <div>
                  <h3>Office Location</h3>
                </div>
                <div className='gap-4 grid grid-cols-1 xs:grid-cols-2 w-full'>
                  {officeLocations.map(({ city, address, link }, index) => (
                    <div key={index} className='flex flex-row gap-4'>
                      <div className='rounded-lg bg-foreground dark:bg-gray-600/20 p-3 h-fit'>
                        <MapPinIcon className='h-6 w-6 text-background dark:text-foreground' />
                      </div>
                      <div className='space-y-2'>
                        <h4>{city}</h4>
                        <div className='flex flex-nowrap flex-col'>
                          {address.map((item, index) => (
                            <span key={index}>{item}</span>
                          ))}
                        </div>
                        <Button variant='link' className='px-0' asChild>
                          <a href={link} className='!text-base'>
                            View on Google Maps{" "}
                            <ChevronRightIcon className='h-4 w-4 ml-2' />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='basis-full space-y-8 w-full md:basis-1/2'>
                <div>
                  <h3>Contact</h3>
                </div>
                <div className='grid xs:grid-cols-2 gap-3 w-full'>
                  {contactInfo.map(({ label, info, icon, link }, index) => (
                    <div
                      key={index}
                      className='flex flex-row items-center gap-4'>
                      <div className='p-3 rounded-lg bg-foreground dark:bg-gray-600/20 h-fit'>
                        {createElement(icon as any, {
                          className:
                            "h-6 w-6 text-background dark:text-foreground",
                        })}
                      </div>
                      <div>
                        <span className='block text-large'>{label}</span>
                        <Button
                          variant='link'
                          onClick={() => handleCopyValue(info)}
                          className='p-0 text-base'>
                          {index === 3 ? (
                            <a
                              href='https://www.facebook.com/TinkerProHQ'
                              className='flex items-center'>
                              {info}
                              <ChevronRightIcon className='h-4 w-4 ml-2' />
                            </a>
                          ) : (
                            info
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const officeLocations = [
  {
    city: "Cebu",
    address: [
      "2F Elviro Cometa Bldg. Kinalumsan,",
      "Brgy. Gun-ob, Lapu-Lapu City",
      "Cebu, Philippines",
    ],
    link: "https://www.google.com/maps?ll=10.295257,123.946042&z=19&t=h&hl=en-US&gl=US&mapclient=embed&cid=16488982786151789263",
  },
  {
    city: "Pasig",
    address: [
      "Eusebio Avenue, Nagpayong II,",
      "Brgy. Pinagbuhatan, Pasig City",
      "Metro Manila, Philippines",
    ],
    link: "https://www.google.com/maps?ll=10.295257,123.946042&z=19&t=h&hl=en-US&gl=US&mapclient=embed&cid=16488982786151789263",
  },
];

const contactInfo = [
  { label: "Email Address", info: "contact@tinkerpro.ph", icon: EnvelopeIcon },
  { label: "Local Hotline", info: "(032) 384-8586", icon: PhoneIcon },
  { label: "Mobile number", info: "+63 966 822 6024", icon: MobileIcon },
  {
    label: "Social",
    info: "TinkerPro",
    icon: GlobeAltIcon,
    link: "https://www.facebook.com/TinkerProHQ",
  },
];

export default ContactUs;
