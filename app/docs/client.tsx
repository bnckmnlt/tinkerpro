"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {};

const Docs = (props: Props) => {
  return (
    <>
      <Header />
      <ArticleLinks />
    </>
  );
};

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleInputChange = (e: any) => setSearchTerm(e.target.value);
  const handleInputFocus = () => setIsDropdownVisible(true);
  const handleInputBlur = () =>
    setTimeout(function () {
      setIsDropdownVisible(false);
    }, 500);

  const filteredPageLabel = pageLabel.filter(({ label }) =>
    label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const noItemsFound = filteredPageLabel.length === 0;

  return (
    <div className='w-full relative md:bg-foreground dark:md:bg-black/30 dark:md:text-foreground md:text-background section-whitespace'>
      <div className='bg-gradient-to-tr mix-blend-overlay hidden md:block from-black via-black/30 absolute inset-0 z-0 to-white' />
      <div className='px-6 md:px-0'>
        <header className='mb-12 text-center'>
          <h1>Tutorials and Documentations</h1>
          <p className='text-lead'>
            Guides and procedures in setting up your Point of Sale Package
          </p>
        </header>
        <div className='relative max-w-[500px] mx-auto'>
          <Input
            placeholder='Search for guides..'
            type='text'
            className='z-20 px-6 md:bg-gray-500/20 md:!border-gray-500 rounded-full md:text-lg text-base h-12 md:h-14'
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {isDropdownVisible && (
            <div className='mt-4 rounded-lg z-50 border-gray-500 py-2 px-6 border bg-gray-500/20'>
              <ul className='list-inside list-none ml-0'>
                {noItemsFound ? (
                  <li className='text-gray-500 text-base'>No items found</li>
                ) : (
                  filteredPageLabel.map(({ label, link, desc }, index) => (
                    <li key={index} className='group'>
                      <Link href={link}>
                        <p className='text-large group-hover:underline underline-offset-2 group-hover:text-orange-500'>
                          {label}
                        </p>
                        <span className='block truncate'>{desc}</span>
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ArticleLinks() {
  return (
    <div className='container section-whitespace'>
      <div className='flex flex-col md:flex-row justify-between md:gap-0 gap-8'>
        <div className='basis-full md:basis-1/2'>
          <header className='text-center md:text-left'>
            <h1>Start with TinkerPro</h1>
            <hr className='h-2 mt-4 w-24 rounded-full mx-auto md:mx-0 bg-orange-500' />
            <p className='text-lead'>
              Start using your POS Hardware or Software with these guides
            </p>
          </header>
        </div>
        <div className='basis-full md:basis-1/2 self-center'>
          <div className='gri-cols-1 xs:grid-cols-2 max-w-2xl text-center mx-auto grid gap-6'>
            {pageLabel.map(({ link, label, desc }, index) => (
              <Button
                key={index}
                variant='outline'
                className='p-10 rounded-lg'
                asChild>
                <Link
                  href={link}
                  className='flex flex-col justify-center items-center gap-4 h-full'>
                  <figure className='h-36'></figure>
                  <h4>{label}</h4>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const pageLabel = [
  {
    link: "/docs/installing-the-pos-hardware",
    label: "Installing the POS Hardware",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptas.",
  },
  {
    link: "/docs/operating-the-pos-software",
    label: "Operating the POS Software",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, expedita!",
  },
  {
    link: "/docs/troubleshooting",
    label: "Troubleshooting",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, consequuntur?",
  },
];

export default Docs;
