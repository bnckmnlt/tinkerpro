import { Badge } from "@/components/ui/badge";
import React from "react";

type Props = {};

const Operating = (props: Props) => {
  return (
    <>
      <header className='space-y-4 mb-12'>
        <h2 className='border-b'>
          Operating the Point of Sale Software
          <div className='space-y-1 mt-4 mb-2'>
            <span className='text-base font-semibold'>Tags</span>
            <div className='flex items-center gap-2'>
              <Badge className='text-sm'>Software</Badge>
              <Badge variant='secondary' className='text-sm'>
                Point of Sale
              </Badge>
              <Badge variant='secondary' className='text-sm'>
                Guide
              </Badge>
            </div>
          </div>
        </h2>
      </header>
      <p className='text-sentence'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut
        minima, alias dicta rerum aliquam facere odio provident, voluptas,
        expedita atque quo dolorum? Repellendus quae similique ipsum, libero
        inventore quidem error beatae totam necessitatibus, architecto quas.
        Voluptas voluptatem nam, aut, laudantium beatae deserunt natus ab enim
        eius velit itaque architecto.
      </p>
    </>
  );
};

export default Operating;
