"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Docs from "./client";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const currentPath = usePathname();
  const pathPrefix = "/docs";
  const extractedPath = currentPath.startsWith(pathPrefix)
    ? currentPath.substr(pathPrefix.length)
    : currentPath;

  const isRootDocs = extractedPath === "" || extractedPath === "/";

  return (
    <main>
      {isRootDocs ? (
        <Docs />
      ) : (
        <div className='flex gap-8 container section-whitespace'>
          <article className='basis-full md:basis-3/4 xs:border md:p-12 xs:p-8 rounded-lg'>
            {children}
          </article>
          <aside className='hidden md:block top-0 basis-1/4'>
            <div className='sticky top-[5%]'>
              <h3>Suggested topics</h3>
              <ul className='list-none ml-0'>
                {pageLabel.map(({ link, label }, index) =>
                  link === currentPath ? null : (
                    <li key={index}>
                      <Link href={link}>
                        <span className='text-orange-500 text-lg hover:underline underline-offset-2 hover:text-orange-600'>
                          {label}
                        </span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
};

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

export default DocsLayout;
