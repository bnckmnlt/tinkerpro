import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className='container section-whitespace'>
      <header className='mb-24'>
        <Skeleton className='h-48' />
        <Skeleton className='h-12 mt-4' />
      </header>
      <Skeleton className='max-w-sm mx-auto h-20' />
    </div>
  );
};

export default Loading;
