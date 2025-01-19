import PriceView from "@/src/components/v1/course/PriceView";
import { APP_CONSTANT } from "@/src/config/constants";
import { GlobalContext } from "@/src/context/GlobalContext";
import Image from "next/image";
import { useContext } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const HeroTemplateB = ({
  course,
  ctaText,
  heading,
  hasCourseAccess,
  previewImage,
}) => {
  const priceData = {
    amount: course?.priceData?.amount,
    currency: "INR",
    discount: 50,
  };

  const { handleBuyCTAClick } = useContext(GlobalContext);

  return (
    <div className="big:px-36 large:px-96 container mx-auto px-5 py-4 pb-12 lg:px-12">
      <div className="flex flex-col items-center justify-between gap-10 pt-4 lg:flex-row  lg:gap-16 lg:pt-[52px] ">
        {/* Left  */}
        <div className="hidden basis-1/2 scale-125 items-center justify-center md:block lg:flex">
          <Image
            className="rounded-lg"
            src="https://ik.imagekit.io/zwxa4kttt/hero-v2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677394708916"
            alt="Hero Banner"
            width={400}
            height={338}
            priority
          />
        </div>

        <div className="flex basis-1/2 scale-125 items-center justify-center  md:block lg:hidden">
          <Image
            className="rounded-lg"
            src={previewImage}
            alt="Hero Banner"
            width={280}
            height={200}
            priority
          />
        </div>

        {/* Right */}
        <div className="flex basis-1/2 flex-col ">
          {/* Title  */}
          <h2 className="text-3xl font-bold text-[#101828DE] md:text-2xl lg:text-5xl lg:font-extrabold lg:text-[#000] ">
            {heading}
          </h2>

          
          <div className="apiForPm flex gap-8 px-1 py-4 lg:hidden lg:px-3">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/images/courses/i1.svg"
                width={20}
                height={19}
                alt="icon"
              />
              <p className="text-xs text-[#333] lg:text-sm">7.3k+ learners</p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/courses/i2.svg"
                width={20}
                height={19}
                alt="icon"
              />
              <p className="text-xs lg:text-sm">10+ modules</p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/courses/i3.svg"
                width={20}
                height={19}
                alt="icon"
              />
              <p className="text-xs lg:text-sm">10+ hours</p>
            </div>
          </div>

          <div className="mt-4">
            {/* For large */}
            <p className="hidden pb-3.5 text-sm font-medium text-[#9CA3AF] lg:hidden">
              Our product management interview course teaches you the <br />{" "}
              essential skills you need to ace your PM interview, with hours of{" "}
              <br /> example questions, videos, and interview tips.
            </p>

            {/* For Mobile  */}
            <div className="mobileContent mb-4 flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <BsFillCheckCircleFill className="text-primary" />
                <p className="text-sm text-[#475467]">
                  Transform your product strategy with API skill
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BsFillCheckCircleFill className="text-primary" />
                <p className="text-sm text-[#475467]">
                  {" "}
                  Elevate your career with API knowledge
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BsFillCheckCircleFill className="text-primary" />
                <p className="text-sm text-[#475467]">
                  {" "}
                  Certificate of completion available.
                </p>
              </div>
              {/* <div className="flex items-center gap-2">
                <BsFillCheckCircleFill className="text-primary" />
                <p className="text-sm text-[#475467]"> Trusted by 7300+ PMs.</p>
              </div> */}
            </div>

            {hasCourseAccess === false && <PriceView priceData={priceData} />}

            <div className="mt-8 flex cursor-pointer flex-col gap-6 lg:flex-row lg:items-center">
              <div
                onClick={() => handleBuyCTAClick(APP_CONSTANT.BUY_CTA_BUTTON)}
                className="mt-2 rounded-md bg-primary py-4 hover:bg-primary_bold lg:mt-0 lg:px-9"
              >
                <button className="w-full font-medium text-white lg:w-[196px]">
                  {!hasCourseAccess ? ctaText : "Go to course"}
                </button>
              </div>

              {!hasCourseAccess && (
                <div
                  href="/courses/api-for-pm"
                  onClick={() => handleBuyCTAClick("preview-btn")}
                  className="rounded-md  border border-gray-300 p-3 text-sm font-medium text-primary lg:block"
                >
                  <button className="w-full font-medium text-black lg:w-[196px]">
                    Try free preview
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTemplateB;
