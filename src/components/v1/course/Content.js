import Link from "next/link";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Content = ({
  content,
  index,
  course,
  courseSlug,
}) => {
  // const [childState,setChildState] = useState(true)
  const [isOpen, setIsOpen] = useState(true);

  const toggleView = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div key={index} className="mb-3 rounded-md pt-2 lg:px-2">
      {/* *************************** Module *************************** */}
      <div
        className={`flex cursor-pointer items-center justify-between  border border-[#E5E7EB] bg-[#E5E7EB] py-2.5 pl-3 pr-3 font-semibold text-[#333333] lg:pl-6  ${
          course === "courseDetail" ? "" : "md:text-md text-base"
        }`}
        onClick={toggleView}
      >
        <p>{content.title}</p>
        <div className="">
          {isOpen === index ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>

      {/* *************************** Submodule *************************** */}
      <div className={`border  text-gray-600 ${isOpen ? "block" : "hidden"}`}>
        {content.subModules.map((subModule, index) => (
          <Link
            href={`/learn/${courseSlug}/${subModule.slug}?source=course_content&course=${courseSlug}`}
            key={index}
            className="md:text-md flex items-center justify-between rounded-md  border-[#E5E7EB] bg-[#F5F5F5]  py-1 pl-3 pr-3 text-xs font-medium text-[#333333] md:text-sm lg:py-1.5  lg:pl-6"
          >
            <div className="flex justify-between py-1">
              <div className="flex gap-2">
                {/* <Image
                  src="/images/shared/playBtn.svg"
                  width={19}
                  height={19}
                  alt="play icon"
                /> */}
                <p className="text-blue-500">{subModule.title}</p>
              </div>
            </div>
            {/* <div className="text-primary ">
              {subModule.isPaid === true ? <p>Free</p> : <FaLock />}
            </div> */}
          </Link>
        ))}
      </div>
      {/* *************************** Submodule End*************************** */}
    </div>
  );
};

export default Content;
