import Image from "next/image";
import ApplicationForm from "./ApplicationForm";

const Application = () => {
  return (
    <>
      <div className=" pb-12 pt-7 lg:pb-16 lg:pt-12 " id="applicationform">
        <div className="">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center ">
            <h2 className="mt-8 text-center text-3xl font-semibold text-[#101828DE] lg:mt-1 lg:text-[36px] ">
              Application Form
            </h2>
          </div>
        </div>
        <div className="flex  flex-col lg:space-x-5 lg:flex-row  lg:items-center lg:justify-between">
          <div className="min-h-screen bg-[#030a21] text-white shadow-xl lg:basis-1/2 lg:rounded-r-xl">
            <div className="px-4 py-12 lg:px-16">
              <div className="">
                <h3 className="text-[40px] font-medium leading-[54px] ">
                  You are just{" "}
                  <span className="bg-gradient-to-r from-[#00b85f] to-[#005f91] bg-clip-text text-transparent">
                    1 step{" "}
                  </span>
                  away to crack any tech round in your PM Interview!
                </h3>
                <p className="py-3 text-[#ffffffcc]">
                  3 week live cohort with assignments, live demos, case studies
                  and real life use cases.
                </p>
              </div>

              <div class="mb-2 mt-4 w-36 rounded-md border bg-gradient-to-r from-[#00b85f] to-[#005f91] px-4 py-2 text-center">
                Topic Covered
              </div>
              <ul className="py-2 pl-10">
                <li style={{ listStyleType: "disc" }} className="pb-1">
                  {" "}
                  Tech 101{" "}
                </li>
                <li style={{ listStyleType: "disc" }} className="pb-1">
                  Everything about databases{" "}
                </li>
                <li style={{ listStyleType: "disc" }} className="pb-1">
                  AI & LLM
                </li>
                <li style={{ listStyleType: "disc" }} className="pb-1">
                  APIs & Webhooks
                </li>
                <li style={{ listStyleType: "disc" }} className="pb-1">
                  System Design
                </li>
                <li style={{ listStyleType: "disc" }} className="pb-1">
                  Working with engineering team
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
          <div className="min-h-screen lg:basis-1/2 " id="applicationForm">
            {/* Form will be here  */}
            <ApplicationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;

