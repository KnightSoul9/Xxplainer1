/* eslint-disable @next/next/no-img-element */
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { ClickedLink, CourseData } from "@/src/config/course-config";
import useCourseAccess from "@/src/hooks/auth/useCourseAccess";
import useStripePayment from "@/src/hooks/useStripePayment";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Billing = () => {
  const router = useRouter();
  const courseSlug = router?.query?.courseId;
  const [clickedUrl, setClickUrl] = useState("");

  const Course = CourseData.find((c) => c.slug === courseSlug);

  useEffect(() => {
    if (courseSlug == "api-for-pm") {
      setClickUrl(ClickedLink.api_for_pm);
    } else if (courseSlug == "pricing-for-pm") {
      setClickUrl(ClickedLink.pricing_for_pm);
    }
  }, [courseSlug]);


  const { hasCourseAccess } = useCourseAccess(courseSlug);
  const { handleStripeClick } = useStripePayment(courseSlug, clickedUrl);

  return (
    <>
      <CommonHead
        title={`Xplainerr | Billing`}
        description={`Xplainerr | Billing`}
        favIcon={"/favicon.ico"}
      />
      <>

        <div className='m-2 min-h-screen'>
          <div className=' mb-8 sm:container sm:mx-auto sm:pt-8'>
            <div className='mx-auto w-full max-w-lg rounded-lg  border-gray-200 bg-white px-10 py-6 pt-8  lg:border-gray-200 '>
              <div className='flex flex-col rounded-lg border pb-6'>
                <div>
                  <img
                    src={Course?.cover_image}
                    width={310}
                    height={155}
                    alt={Course?.title}
                    className='w-full'
                  />
                </div>
                <div className='flex flex-1 flex-col justify-between px-3'>
                  <div>
                    <h4 className='pt-4 text-[17px] font-semibold text-[#333]'>
                      {Course?.title}
                    </h4>
                    <p className='pt-1 font-bold'>
                      Rs. {Course?.priceData?.amount}
                    </p>
                  </div>
                  <div className='mt-4'>
                    {hasCourseAccess === false ? (
                      <button
                        onClick={handleStripeClick}
                        className='border-1 text-indigo inline-flex w-full   items-center justify-center rounded-md border  bg-primary px-5 py-3 text-base font-medium leading-4 text-white shadow-sm hover:bg-primary_bold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      >
                        Pay Now via Stripe
                      </button>
                    ) : (
                      <Link href={clickedUrl}>
                        <button
                          className='border-1 text-indigo inline-flex w-full   items-center justify-center rounded-md border  bg-primary px-5 py-3 text-base font-medium leading-4 text-white shadow-sm hover:bg-primary_bold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                        >
                          Access course
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Billing;
