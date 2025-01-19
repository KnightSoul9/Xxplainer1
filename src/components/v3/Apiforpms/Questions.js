import React from 'react'
import { GrView } from "react-icons/gr";
import { LuLandmark } from "react-icons/lu";
import { FiFilter } from "react-icons/fi";
import { BsBookmarkPlus } from "react-icons/bs";
import { AvatarGroupsData } from "@/src/config/fakeData";
import Image from 'next/image';

const Questions = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 pb-12 lg:pb-1 pt-7 md:px-8  lg:pt-1">
      <div className="">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-1 text-center lg:pt-5">
          <h2 className="mt-8 text-center text-3xl font-semibold text-[#101828DE] lg:mt-1 lg:text-[36px] ">
            Learn to answer PM tech interview questions
          </h2>
        </div>
      </div>
      <div id="banner">
        <div className="relative mb-40 sm:mb-32 smd:mb-28 md:mb-0 lg:basis-1/2">
          {/* Background image */}
          <Image
            src="/images/mock/interview-questions-bg.png"
            alt="interview-questions-bg"
            width={811}
            height={556}
          />

          {/* Mock interview questions cards */}
          <div className="absolute right-8 top-1 flex w-[90%] items-center justify-between rounded-lg border bg-[#fafafa] px-4 pb-28 pt-5 text-xs font-bold shadow-xl lg:-right-8 lg:z-10 lg:w-[80%] lg:px-8 lg:pt-8 lg:text-[17px] xl:right-[120px] xl:top-14 4xl:right-60 4xl:w-[70%]">
            <h3 className="basis-11/12">
             Design a RESTful API for Stripe with at least two entities
            </h3>
            <BsBookmarkPlus size={24} className="basis-1/12" />
          </div>
          <div className="absolute right-4 top-20 flex w-[90%] items-center justify-between rounded-xl border bg-[#fafafa] px-5 pb-28 pt-5 text-xs font-bold shadow-xl lg:-right-10 lg:z-10 lg:w-[80%] lg:px-8 lg:pt-9 lg:text-[17px] xl:right-[80px] xl:top-36 4xl:right-48 4xl:w-[70%]">
            <h3 className="basis-11/12">
             As a Product Manager at Google Maps, how would you build authorization for end customers?
            </h3>
            <BsBookmarkPlus size={24} className="basis-1/12" />
          </div>
          <div className="absolute -right-1 top-40 w-[90%] rounded-xl border bg-[#fafafa] px-4 pb-8 pt-5 shadow-xl lg:-right-16 lg:z-10 lg:w-[80%] lg:px-8 lg:pt-8 xl:right-[40px] xl:top-60 4xl:right-28 4xl:w-[70%]">
            {/* Third question card with additional details */}
            <div className="flex items-center justify-between text-xs font-bold lg:text-[17px]">
              <h3 className="basis-11/12">
                Mention three endpoints Spotify has
              </h3>
              <BsBookmarkPlus size={24} className="basis-1/12" />
            </div>
            <div>
              <h4 className="pt-6 text-xs text-gray-500 lg:text-sm">
                Asked by <span className="font-bold">Meta</span> last week
              </h4>
              <hr className="my-5" />
              {/* Details and metadata of the third question */}
              <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <div className="flex space-x-3 ">
                  <div className="flex items-center justify-between space-x-1 rounded-sm bg-[#f1f1f2] px-2 py-[1px] text-xs lg:text-sm">
                    <FiFilter />
                    <p>Tech</p>
                  </div>
                  <div className="flex items-center justify-between space-x-1 rounded-sm bg-[#f1f1f2] px-2 py-[1px] text-xs lg:text-sm">
                    <LuLandmark />
                    <p>Meta</p>
                  </div>
                </div>
                {/* Answer count, views, and avatars */}
                <div>
                  <div className="flex lg:items-center lg:justify-center ">
                    {/* Displaying avatars of users who answered */}
                    {AvatarGroupsData.slice(0, 3).map((el, index) => (
                      <Image
                        key={index}
                        src={el.image}
                        width={35}
                        height={35}
                        alt="icon"
                        className={`w-[28px] rounded-[9999px] xl:w-[35px] ${
                          index === 0 ? "" : "-ml-2"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions