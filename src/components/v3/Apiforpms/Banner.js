import Image from "next/image";
import TypeWriter from "./TypeWriter";
import Link from "next/link";
import TechForPmsImage from "./assets/Banner2.png";

const Names = [
  {
    name: "Aspiring product managers",
  },
  {
    name: `Associate product managers`,
  },
  {
    name: `Sales, Marketing, Customer Ops`,
  },
  { name: `Freshers & MBA folks` },
];

const Banner = () => {
  const companyNames = Names?.map((r) =>
    r?.name
      ?.split(" ")
      ?.map((r) => {
        return r?.[0] + r?.slice(1);
      })
      ?.join(" ")
  );

  const handleApplyNowClick = () => {
    localStorage.setItem("source", "FIRST_FOLD");
    localStorage.setItem("application", true);
  };

  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 pb-12 pt-7 md:px-8 lg:pb-16 lg:pt-12">
        <div className="flex flex-col  justify-between gap-12 lg:flex-row">
          <div className="lg:basis-1/2">
            <div>
              <div className="shadow-rgba(98, 51, 200, 0.25)_0px_8px_20px_0px relative flex w-60 items-center space-x-2 rounded-[52px] border-2 border-[#673fbe] px-5 py-3 text-sm font-semibold">
                <div className="blink-dot relative h-5 w-5 rounded-[100%] bg-[#C7373766]">
                  <div className="absolute left-[51.5%] top-[4px] h-3 w-3 -translate-x-1/2 transform rounded-[100%] bg-[#C73737]"></div>
                </div>
                <p className="">2-DAY LIVE SESSIONS</p>
              </div>
              <h2 className="mb-4 py-5 text-3xl font-bold lg:text-[42px] lg:leading-[48px]">
                Confused by APIs as a Product Manager? In meetings or while
                defining requirements?
              </h2>
              <p className="text-xl ">
                Join{" "}
                <span className="font-semibold">API for Product Manager</span>{" "}
                course exclusively designed for{" "}
                <br className="hidden lg:block" />{" "}
                <TypeWriter line={companyNames} />
              </p>

              <div className="w-full py-5">
                <div className="hidden lg:block">
                  <a
                    href="#applicationform"
                    className="w-[100%] rounded-md bg-primary px-12 py-4 text-xl font-medium text-white hover:bg-primary_bold lg:mt-0"
                    onClick={handleApplyNowClick}
                  >
                    Apply Now
                  </a>
                </div>
                <div className="block lg:hidden">
                  <a
                    href="#applicationForm"
                    className="w-[100%] rounded-md bg-primary px-12 py-4 text-xl font-medium text-white hover:bg-primary_bold lg:mt-0"
                    onClick={handleApplyNowClick}
                  >
                    Apply Now
                  </a>
                </div>
                {/* <p className="mt-6">
                  Not yet sure? Test your tech skill as a Product Manager.
                  <Link
                    href="/quiz/product-management/tech-for-pm-65cfd2f9e6995e2215ae07e5?source=tech-for-pm"
                    className="text-blue-600 "
                  >
                    {" "}
                    Attempt Quiz
                  </Link>
                </p> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8 lg:basis-1/2">
            <div>
              {/* <Image
                src="https://ik.imagekit.io/zwxa4kttt/courses/tech-for-pm-cohort-preview.webp?updatedAt=1708340487061"
                alt="api-for-pms"
                width={500}
                height={500}
                className="w-full rounded-xl border"
              /> */}
              <Image
                src={TechForPmsImage}
                alt="api-for-pms"
                width={500}
                height={500}
                className="w-full rounded-xl border"
              />
            </div>

            <div className="relative">
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
      </div>
    </>
  );
};

export default Banner;
