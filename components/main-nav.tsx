"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {};

const Navbar = (props: Props) => {
  const { setTheme } = useTheme();

  return (
    <>
      <nav className='z-50 border-b shadow-sm'>
        <div className='container py-4 px-5 lg:px-0'>
          <div className='flex h-12 w-full flex-row items-center justify-between lg:justify-start'>
            <div className='flex flex-row gap-4 items-center'>
              <div className='w-40'>
                <Link href='/'>
                  <Image
                    src='/icons/tinkerpro-icon.png'
                    width={1000}
                    height={1000}
                    alt='TinkerPro'
                    quality={100}
                  />
                </Link>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='outline'
                    size='icon'
                    className='rounded-lg h-10 w-10'>
                    <Sun className='h-6 w-6 rotate-0 !text-black m-1 dark:!text-foreground scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                    <Moon className='absolute h-6 w-6 rotate-90 !text-black scale-0 dark:!text-foreground transition-all dark:rotate-0 dark:scale-100' />
                    <span className='sr-only'>Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className='justify-end flex items-center basis-full'>
              <div className='sm:block hidden'>
                <Navlist />
              </div>
              <div className='block sm:hidden h-full'>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant='outline'
                      size='icon'
                      className='border-none flex p-0 shadow-none'>
                      <Bars3Icon className='h-8 w-8' />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <div className='flex items-center flex-col'>
                      <div className='h-12'></div>
                      <Navlist />
                      <Link href='/contact-us' className='w-full'>
                        <Button
                          variant='outline'
                          size='default'
                          className='border-orange-500 mt-12 w-full border-2 text-orange-500 font-semibold hover:bg-backgroubnd/50 hover:text-orange-600 uppercase rounded-full'>
                          Contact us
                        </Button>
                      </Link>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

function Navlist() {
  const location = usePathname();

  const menuItems = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/features",
      label: "Features",
    },
    {
      path: "/packages",
      label: "Packages",
    },
    {
      path: "/docs",
      label: "Tutorials",
    },
  ];

  return (
    <div className='flex w-full flex-col justify-end sm:flex-row'>
      <ul
        className={`flex flex-grow flex-col list-none m-0 items-start gap-x-8 gap-y-6 px-5 sm:grow-0 sm:flex-row sm:items-center sm:justify-between sm:border-r border-gray-600/30`}>
        {menuItems.map(({ path, label }, key) => (
          <Link href={path} key={key}>
            <li>
              <span
                className={`text-xl sm:text-lg font-bold tracking-tight transition-colors duration-150 ease-in-out hover:text-orange-500 ${
                  location === path ? "text-orange-500" : "text-foreground"
                }`}>
                {label}
              </span>
            </li>
          </Link>
        ))}
      </ul>
      <div className='hidden flex-row items-center gap-4 sm:flex sm:ml-5'>
        <Link href='/contact-us'>
          <Button
            variant='outline'
            size='default'
            className='border-orange-500 border-2 text-orange-500 font-semibold hover:bg-background/50 hover:text-orange-600 uppercase rounded-full'>
            Contact us
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
