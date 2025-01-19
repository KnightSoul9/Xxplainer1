/* eslint-disable @next/next/no-img-element */

import { AvatarGroupsData } from "@/src/config/fakeData";
import useLeadInfo from "@/src/hooks/useLeadInfo";
import Image from "next/image";
import { BsBookmarkPlus } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { LuLandmark } from "react-icons/lu";
import LeadEmailModal from "../Shared/Modal/LeadEmailModal";
import { ClickedLink } from "@/src/config/course-config";

const Banner = ({ cTitle, sTitle }) => {
  const clickedUrl = ClickedLink.pm_interview;
  const { showModal, setShowModal, handleClick } = useLeadInfo();
  return (
    <>
      <div className=" lg:py-12 lg:pl-12 lg:pr-0 ">
        {/* Main content section */}
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-center">
          {/* Left section with interview questions */}
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
              <div className="absolute right-8 top-1 flex w-[90%] items-center justify-between rounded-lg border bg-[#fafafa] px-4 pb-28 pt-5 text-xs font-bold shadow-xl lg:-right-5 lg:z-10 lg:w-[80%] lg:px-8 lg:pt-8 lg:text-[17px] xl:right-[80px] xl:top-14 4xl:right-32 4xl:w-[60%]">
                <h3 className="basis-11/12">
                  Youtube watch time is down. Why?
                </h3>
                <BsBookmarkPlus size={24} className="basis-1/12" />
              </div>
              <div className="absolute right-4 top-20 flex w-[90%] items-center justify-between rounded-xl border bg-[#fafafa] px-5 pb-28 pt-5 text-xs font-bold shadow-xl lg:-right-10 lg:z-10 lg:w-[80%] lg:px-8 lg:pt-9 lg:text-[17px] xl:right-[40px] xl:top-32 4xl:right-24 4xl:w-[60%]">
                <h3 className="basis-11/12">
                  Design a real-time payment system (like UPI) for Pakistan.
                </h3>
                <BsBookmarkPlus size={24} className="basis-1/12" />
              </div>
              <div className="absolute -right-1 top-40 w-[90%] rounded-xl border bg-[#fafafa] px-4 pb-8 pt-5 shadow-xl lg:-right-16 lg:z-10 lg:w-[80%] lg:px-8 lg:pt-8 xl:right-[0px] xl:top-52 4xl:right-16 4xl:w-[60%]">
                {/* Third question card with additional details */}
                <div className="flex items-center justify-between text-xs font-bold lg:text-[17px]">
                  <h3 className="basis-11/12">
                    How will you improve the Stripe Checkout experience?
                  </h3>
                  <BsBookmarkPlus size={24} className="basis-1/12" />
                </div>
                <div>
                  <h4 className="pt-6 text-xs text-gray-500 lg:text-sm">
                    Asked by <span className="font-bold">Stripe</span> last week
                  </h4>
                  <hr className="my-5" />
                  {/* Details and metadata of the third question */}
                  <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                    <div className="flex space-x-3 ">
                      <div className="flex items-center justify-between space-x-1 rounded-sm bg-[#f1f1f2] px-2 py-[1px] text-xs lg:text-sm">
                        <FiFilter />
                        <p>Execution</p>
                      </div>
                      <div className="flex items-center justify-between space-x-1 rounded-sm bg-[#f1f1f2] px-2 py-[1px] text-xs lg:text-sm">
                        <LuLandmark />
                        <p>Stripe</p>
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
                        {/* Answer count and views */}
                        <div className="flex items-center space-x-1 pl-2 text-[#A5A5A5]">
                          <p className="text-xs font-semibold xl:text-sm">
                            12 answers{" "}
                          </p>
                          <p> / </p>
                          <div className="flex items-center justify-between space-x-1">
                            <GrView />
                            <p className="text-xs font-semibold xl:text-sm">
                              1k views
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right section with additional information */}
          <div className="relative flex  flex-col items-center justify-center space-y-8  pb-8 lg:basis-1/2 ">
            {/* Content about the mock interview */}

            <div className="flex flex-col space-y-8  px-3 pb-8 pt-5 lg:h-[620px] lg:rounded-l-[100px] lg:px-28">
              <div className="flex flex-col  ">
                <a
                  href="https://www.producthunt.com/posts/pminterview?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-pminterview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:mt-3"
                >
                  <Image
                    src="/images/mock/top-post-badge.svg"
                    alt="PMInterview - Practice&#0032;product&#0032;management&#0032;interview&#0032;questions | Product Hunt"
                    width={250}
                    height={54}
                    className="h-[54px] w-[250px]"
                  />
                </a>
                <h1 className="pb-2 pt-4  text-[28px] font-bold lg:font-semibold xl:text-[42px]">
                  <span class="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                    #1
                  </span>{" "}
                  PM Interview Prep Resource
                </h1>{" "}
                <h2 className="font- text-[22px]">
                  One stop destination to practice product design, RCA, metrics,
                  strategy, execution questions
                </h2>
              </div>
              <div className="flex items-center space-x-5">
                {/* Icon and text about interview questions */}
                <Image
                  src="/svg/home-message-bubble.svg"
                  width={40}
                  height={40}
                  alt="home-message-bubble"
                />
                <p className="text-lg ">50+ most asked interview questions </p>
              </div>
              <div className="flex items-center space-x-5">
                {/* Icon and text about videos and transcripts */}
                <Image
                  src="/svg/home-feedback-bubble.svg"
                  width={40}
                  height={40}
                  alt="home-feedback-bubble"
                />
                <p className="text-lg  ">Answered by experts & seasoned PMs</p>
              </div>
              {/* Call-to-action button */}
              <div className="pt-1 lg:pt-3 ">
                <button
                  className="w-full rounded-md bg-primary py-4 font-medium text-white hover:bg-primary_bold lg:mt-0  lg:w-[220px] lg:px-5"
                  onClick={() => handleClick(clickedUrl)}
                >
                  See Questions (FREE)
                </button>
              </div>
            </div>
            <div className="px-4 text-black md:hidden">
              <h3
                className={`mb-4 text-center text-[26px] font-semibold leading-7`}
              >
                Practise most asked questions in Google, Uber, Amazon, AirBnb,
                Booking.com product interviews
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/************************ Lead Modal  ************************/}
      <LeadEmailModal
        showModal={showModal}
        setShowModal={setShowModal}
        ctaTitle={cTitle}
        subTitle={sTitle}
      />
    </>
  );
};

export default Banner;
