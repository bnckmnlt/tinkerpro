"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <main>
      <div className='container section-whitespace'>
        <div className='max-w-5xl mx-auto rounded-lg md:border md:p-12'>
          <header className='text-center'>
            <div className='w-24 mb-8 h-24 mx-auto flex items-center justify-center'>
              <Image
                src='/icons/error-icon.png'
                alt='Page not found'
                width={1000}
                height={1000}
                quality={100}
              />
            </div>
            <h2>Page not found</h2>
            <p className='text-sentence !leading-tight !mt-4'>
              The page you are trying to access either does not exist or has
              been removed. <br />
              Return to{" "}
              <Button variant='link' className='p-0 text-sentence' asChild>
                <Link href='/' className='text-orange-500'>
                  homepage
                </Link>
              </Button>
            </p>
          </header>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
