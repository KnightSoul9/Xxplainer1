import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
import Image from "next/image";
import { useEffect } from "react";

import { BsPatchCheckFill } from "react-icons/bs";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const TechBuyPage = () => {

  const applicantName = localStorage.getItem("applicantName");
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <CommonHead
        title={"Xplainerr | Buy Tech Product Managers"}
        description={"Tech For Product Managers"}
        favIcon={"/favicon.ico"}
      />

      <PageLayout>
        <div className="">
          <div className="mt-12">
            {/* Section header */}
            <div className="relative mx-auto max-w-3xl px-3 pb-12 text-center lg:px-0">
              <div className="flex flex-col items-center lg:space-x-2 lg:flex-row justify-center">
                <IoMdCheckmarkCircle className="text-[44px]" />
                <h2 className="mt-4  text-3xl font-semibold text-[#101828DE] lg:mt-1 ">
                  Congratulations {applicantName},
                </h2>
              </div>
              <h2 className="text-3xl font-semibold text-[#101828DE] lg:mt-1 ">
                you are shortlisted for Tech For PM cohort.
              </h2>
              <p className="py-2">
                Do you know? Tech For PM cohort has only 61% acceptance rate.
                Well done!
              </p>
            </div>
          </div>
          <div className="flex  flex-col-reverse lg:flex-row lg:justify-between   lg:space-x-5">
            <div className="min-h-screen bg-[#030a21] text-white shadow-xl lg:basis-1/2 lg:rounded-r-xl">
              <div className="px-6 py-12 lg:px-12">
                <div className="">
                  <h3 className="text-[32px] font-medium leading-[54px] ">
                    Google, Microsoft, Razorpay, Coinbase,
                    <br className="hidden lg:block" />
                    Uber, Booking, Stripe
                  </h3>
                  <p className="py-3 text-[#ffffffcc]">
                    Have technical round in their Product Management Interview
                  </p>
                </div>

                <div class="mb-2 mt-4 w-36 rounded-md border bg-gradient-to-r from-[#00b85f] to-[#005f91] px-4 py-2 text-center">
                  Do you know?
                </div>
                <ul className="py-2 pl-10">
                  <li style={{ listStyleType: "disc" }} className="pb-1">
                    {" "}
                    Technical knowledge is a must have for Fintech & Platform
                    Product Managers{" "}
                  </li>
                  <li style={{ listStyleType: "disc" }} className="pb-1">
                    PMs with technical knowledge are 37% more likely to
                    transition into leadership role{" "}
                  </li>
                  <li style={{ listStyleType: "disc" }} className="pb-1">
                    New emerging field like Generative Al has huge demand of
                    technical PM
                  </li>
                  <li style={{ listStyleType: "disc" }} className="pb-1">
                    Above all, Sundar Pichai was a tech PM who built Google
                    Chrome browser
                  </li>
                </ul>
                <div className="relative mt-12">
                  <p className="absolute -top-[22px] left-[5%] rounded-md border bg-gradient-to-r from-[#00b85f] to-[#005f91] px-4 py-2 text-white">
                    Instructor
                  </p>
                  <div className=" flex items-center space-x-4 rounded-xl border-2 px-3 pb-5 pt-8 shadow-lg lg:space-x-16 lg:px-6">
                    <Image
                      src="/images/mentors/venky.svg"
                      alt="Venkatesh Gupta"
                      width={100}
                      height={100}
                      className="rounded-[100%] "
                    />
                    <div className="flex flex-col space-y-2">
                      <h4 className="text-lg font-bold leading-[1.4] sm:text-[20px]">
                        Venkatesh Gupta
                      </h4>
                      <p>
                        Product Manager{" "}
                        <span className="text-lg font-semibold">Razorpay</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center  lg:basis-1/2">
              <stripe-buy-button
                buy-button-id="buy_btn_1OShAZSHcC4n6fvXZytJsnUY"
                publishable-key={
                  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_COHORT
                }
              ></stripe-buy-button>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default TechBuyPage;
