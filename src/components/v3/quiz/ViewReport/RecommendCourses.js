// pages\quiz\[domainSlug]\[quizSlug]\view-report.js

import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const RecommendCourses = ({
  heading,
  title,
  description,
  recommendedSlug,
  image,
}) => {
  return (
    <div className=" my-8  gap-5 rounded-xl border p-2 text-center md:p-5 lg:px-10">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-center text-3xl font-semibold text-[#101828DE] lg:text-[36px] ">
          {" "}
          {heading || "Want to learn more?"}
        </h2>
        <p className="pb-8 pt-2.5 text-center text-base font-medium text-[#475467] md:text-lg ">
          {description}
        </p>
        <div className=" flex flex-col gap-10  lg:flex-row lg:gap-5">
          <Link
            href={recommendedSlug}
            className=" hover:shadow:xl  m-3 flex flex-initial flex-shrink-0 transform flex-col overflow-hidden  bg-white text-black shadow-md transition duration-500 hover:-translate-y-1.5"
          >
            <div>
              <Image
                src={image}
                width={310}
                height={155}
                alt={title}
                className="w-full"
              />
            </div>

            <div className="flex flex-col p-2 ">
              <div className="m-2 flex items-center justify-between">
                <div className="flex w-full items-center">
                  <div className=" flex  overflow-hidden rounded-md bg-[#08313c] text-white">
                    <span className="overflow-hidden  text-ellipsis whitespace-nowrap px-2 py-1 text-sm leading-[22px]">
                      4.8/5
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-2"></div>
              </div>
              <p className="m-1 mb-5 text-left text-xl font-bold leading-[28px] lg:mb-8 lg:mt-3">
                {title}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div className="m-2 flex flex-col items-start">
                  <span>
                    <svg
                      width="38"
                      height="10"
                      viewBox="0 0 38 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 4h6v2H9z" fill="#8887FF"></path>
                      <path d="M23 4h6v2h-6z" fill="#E5E5E5"></path>
                      <circle cx="5" cy="5" r="5" fill="#8887FF"></circle>
                      <circle cx="19" cy="5" r="5" fill="#8887FF"></circle>
                      <circle fill="#E5E5E5" cx="33" cy="5" r="5"></circle>
                    </svg>
                  </span>
                  <p className="caption-text mt-1 font-semibold capitalize tracking-wider ">
                    Filling fast
                  </p>
                </div>
                <Link href={recommendedSlug}>
                  <button className="min-w-8 mb-2 ml-auto mr-2 flex items-center rounded-sm border border-[#9c9b9b] p-3 font-bold tracking-wide transition duration-200 hover:border-black">
                    <span className="navigation-text pr-2">Preview</span>
                    <AiOutlineArrowRight size={20} className="text-primary" />
                  </button>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendCourses;
