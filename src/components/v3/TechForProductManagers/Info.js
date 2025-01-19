import React from "react";
import { SlCalender } from "react-icons/sl";
import { RiLiveLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";

const Info = () => {
  return (
    <>
      <div className='container mx-auto max-w-7xl px-4 pb-12 pt-7 md:px-8 lg:pb-16 lg:pt-1'>
        <div className='grid grid-cols-1 gap-8 rounded-lg border px-5 py-8 shadow-lg lg:grid-cols-4'>
          <div className='flex space-x-2'>
            <div>
              <SlCalender className='pt-2 text-3xl' />
            </div>
            <div>
              <h4 className='text-lg font-semibold'>1st Mar - 16th Mar</h4>
              <p className='text-sm'>Duration of the course</p>
            </div>
          </div>
          <div className='flex  space-x-2'>
            <div>
              <RiLiveLine className='pt-1 text-3xl' />
            </div>
            <div>
              <h4 className='text-lg font-semibold'>6-live sessions</h4>
              <p className='text-sm'>By Venkatesh Gupta</p>
            </div>
          </div>
          <div className='flex  space-x-2'>
            <div>
              <IoMdTime className='pt-1 text-3xl' />
            </div>
            <div>
              <h4 className='text-lg font-semibold'>12 PM - 2PM (IST)</h4>
              <p className='text-sm'>Saturday and Sunday</p>
            </div>
          </div>
          <div className='flex  space-x-2'>
            <div>
              <MdCurrencyRupee className='pt-1 text-3xl' />
            </div>
            <div>
              {/* ₹39,999 <span>45,999</span> */}
              <h4 className=' ext-[#000000] '>
                <span className='text-lg font-semibold'>8,999</span>{" "}
                <span className='text-sm text-[#7b7b7b] line-through'>
                  ₹15,999
                </span>{" "}
                <span className='rounded-[4px] px-1 text-sm font-semibold text-green-500 '>
                  Save ₹7,000/-
                </span>
              </h4>
              <p className='pb-1 text-sm'>Course Fee</p>
              <span className='rounded-[4px] border border-[#eeb217] bg-[#fffaeb]  px-1.5 py-[3px] text-xs font-medium text-[#945e12] '>
                Valid till 15th Feb
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
