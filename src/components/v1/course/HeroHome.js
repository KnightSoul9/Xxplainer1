import PriceView from "@/src/components/v1/course/PriceView";
import { GlobalContext } from "@/src/context/GlobalContext";
import useCourseAccess from "@/src/hooks/auth/useCourseAccess";
import useLeadInfo from "@/src/hooks/useLeadInfo";
import useStripePayment from "@/src/hooks/useStripePayment";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import LeadEmailModal from "../Shared/Modal/LeadEmailModal";

const HeroTemplateA = ({
  heroPageProps,
  pricing,
  courseSlug,
  clickedUrl,
  cTitle,
  sTitle,
}) => {
  const priceData = {
    amount: 999,
    currency: "INR",
  };

  const { hasCourseAccess, courseId } = useCourseAccess(courseSlug);
  const { showModal, setShowModal, handleClick } = useLeadInfo();
  // console.log(courseSlug, "courseSlug ");

  const {
    LEAD_MODAL: { handleLeadModalClick },
  } = useContext(GlobalContext);

  const isPricing =
    heroPageProps?.slug === "pricing-for-pm" ||
    heroPageProps?.slug === "api-for-pm" ||
    heroPageProps?.slug === "ux-writing";

  const { handleStripeClick } = useStripePayment(courseSlug, clickedUrl);
  // console.log(courseSlug, "clickedUrl");

  return (
    <div>
      <div className='section__padding container relative mx-auto'>
        <div className='flex flex-col justify-between gap-5 md:flex-row lg:px-12 2xl:items-center 2xl:gap-0'>
          {/* Review Image  */}
          <div className='hidden basis-1/2 md:block lg:basis-6/12 '>
            <Image
              src={heroPageProps?.hero_image}
              width={450}
              height={300}
              alt='pm pricing webp'
              className={isPricing ? "custom-hero-img" : ""}
            />
          </div>

          {/* Hero content */}
          <div className='basis-1/2 lg:basis-7/12'>
            <div>
              <div className='md:items-starts flex items-center justify-center md:justify-start'>
                <BadgeEmbded slug={heroPageProps?.slug} />
              </div>

              <h1 className='mb-4 mt-3 text-4xl  font-bold lg:font-extrabold'>
                {heroPageProps?.title}
              </h1>

              {heroPageProps?.keyFeature && (
                <p className='pb-3 text-sm font-semibold text-primary'>
                  {heroPageProps?.keyFeature}
                </p>
              )}

              <div>
                {heroPageProps?.subFeatures?.length > 0 &&
                  heroPageProps.subFeatures.map((item, index) => {
                    return (
                      <p
                        key={item}
                        className='lg:text-md pb-4 text-lg font-[400]'
                      >
                        {item}
                      </p>
                    );
                  })}
              </div>

              {courseSlug == "ux-writing" ? (
                <></>
              ) : (
                <>
                  {hasCourseAccess === false && (
                    <PriceView priceData={priceData} />
                  )}
                </>
              )}

              <div className='flex  cursor-pointer flex-row gap-6 lg:flex-row lg:items-center'>
                <div className='w-full' id='heroBanner'>
                  {/* this is the buy now button  */}
                  {courseSlug == "ux-writing" ? (
                    <>
                      <button
                        onClick={() => handleClick(clickedUrl)}
                        className='w-full rounded-md bg-primary py-4 font-medium text-white hover:bg-primary_bold lg:mt-0  lg:w-[196px] lg:px-9'
                      >
                        Access course
                      </button>
                    </>
                  ) : (
                    <>
                      {/* {hasCourseAccess === false ? (
                        <button
                          onClick={handleStripeClick}
                          className='w-full rounded-md bg-primary py-4 font-medium text-white hover:bg-primary_bold lg:mt-0  lg:w-[196px] lg:px-9'
                        >
                          {heroPageProps?.ctaText}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleClick(clickedUrl)}
                          className='w-full rounded-md bg-primary py-4 font-medium text-white hover:bg-primary_bold lg:mt-0  lg:w-[196px] lg:px-9'
                        >
                          Access course
                        </button>
                      )} */}
                      {hasCourseAccess === false ? (
                        <Link href={`/u/checkout?courseId=${courseSlug}`}>
                          <button
                            // onClick={handleStripeClick}
                            className='w-full rounded-md bg-primary py-4 font-medium text-white hover:bg-primary_bold lg:mt-0  lg:w-[196px] lg:px-9'
                          >
                            {heroPageProps?.ctaText}
                          </button>
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleClick(clickedUrl)}
                          className='w-full rounded-md bg-primary py-4 font-medium text-white hover:bg-primary_bold lg:mt-0  lg:w-[196px] lg:px-9'
                        >
                          Access course
                        </button>
                      )}
                    </>
                  )}

                  {courseSlug == "ux-writing" ? (
                    <></>
                  ) : (
                    <>
                      {hasCourseAccess === false && (
                        <p className='mt-2'>
                          Interested in a free chapter?
                          <span
                            className='text-blue-600 '
                            onClick={() => handleClick(clickedUrl)}
                          >
                            {" "}
                            Get it now
                          </span>
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Hero content end*/}
        </div>
      </div>

      {/************************ Lead Modal  ************************/}
      <LeadEmailModal
        showModal={showModal}
        setShowModal={setShowModal}
        ctaTitle={cTitle}
        subTitle={sTitle}
      />
    </div>
  );
};

const BadgeEmbded = ({ slug }) => {
  const ENABLED_COURSES = ["api-for-pm", "pricing-for-pm"];

  const badges = {
    "api-for-pm": {
      url: "https://www.producthunt.com/posts/api-for-product-managers?utm_source=badge-top-post-badge",
      image: "https://ik.imagekit.io/zwxa4kttt/courses/api-badge.svg",
      alt: "API For Product Manager | Product Hunt",
    },
    "pricing-for-pm": {
      url: "https://www.producthunt.com/posts/a-to-z-of-pricing-and-monetisation?utm_sourece=xplainerr",
      image: "https://ik.imagekit.io/zwxa4kttt/courses/featured.svg",
      alt: "Pricing For PM | Featured | Product Hunt",
    },
  };

  const isEnabled = ENABLED_COURSES.includes(slug) || false;

  if (!isEnabled) return null;

  return (
    <Link href={badges[slug].url} target='_blank'>
      <Image
        src={badges[slug].image}
        width={250}
        height={54}
        alt={badges[slug].alt}
      />
    </Link>
  );
};

export default HeroTemplateA;
