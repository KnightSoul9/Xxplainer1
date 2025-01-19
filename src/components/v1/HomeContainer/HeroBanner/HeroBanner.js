import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const allDomainsText = ["tech", "marketing", "design", "product", "data"];

const HeroBanner = () => {
  const [domainText, setDomainText] = useState("tech");
  const [index, setIndex] = useState(0);

  // toggle domain text every 1 sec in circular manner
  useEffect(() => {
    const interval = setInterval(() => {
      setDomainText(allDomainsText[index]);
      setIndex((index + 1) % allDomainsText.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  // linear-gradient(90deg,var(--start-color),var(--end-color))

  return (
    <div className='container mx-auto px-4 pb-16 lg:max-w-7xl lg:py-7'>
      <div className='mt-7 flex flex-col items-center justify-between gap-5 lg:mt-12 lg:flex-row'>
        {/* Left  */}
        <div className='basis-1/2 '>
          <h2 className='pb-5 text-4xl font-bold text-[#101828DE] md:py-5 lg:text-6xl'>
            Accelerate your <br />{" "}
            <span className='domainText'> {domainText} </span> career
          </h2>
          <p className='text-lg text-[#475467] lg:text-xl '>
            We provide niche up-skilling courses to help your accelerate and
            succeed in your career
          </p>
          <div className='pt-8 lg:pt-12 '>
            <Link
              href='/courses'
              className='w-full button py-3 md:px-[5px] md:py-5 '
            >
              <button className='w-full text-base font-semibold text-white md:text-xl lg:w-[222px]'>
                Explore Courses
              </button>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className='hidden basis-1/2 scale-125 items-center justify-center md:block lg:flex'>
          <Image
            src='https://ik.imagekit.io/zwxa4kttt/hero-v2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677394708916'
            alt='Hero Banner'
            width={450}
            height={600}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
