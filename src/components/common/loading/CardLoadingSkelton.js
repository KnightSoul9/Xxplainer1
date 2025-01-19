import React from "react";

const CardLoadingSkelton = () => {
  return (
    <div className='flex animate-pulse flex-col rounded-lg border pb-6'>
      <div className='h-48 w-full rounded-t-lg bg-gray-300'></div>
      <div className='flex flex-col justify-between px-3'>
        <div>
          <div className='mt-4 h-6 w-3/4 bg-gray-300'></div>
          <div className='mt-2 h-4 w-1/2 bg-gray-300'></div>
          <div className='mt-2 h-12 w-3/4 bg-gray-300'></div>
        </div>
        <div className='mt-4'>
          <div className='h-8 w-full bg-gray-300'></div>
        </div>
      </div>
    </div>
  );
};

const CardLoadingSkeltonContainer = ({itemCount}) => {
  // show the component based on the itemCount
  return (
    <>
      {[...Array(itemCount)].map((_, i) => (
        <CardLoadingSkelton key={i} />
      ))}
    </>
  );
}

export default CardLoadingSkeltonContainer;
