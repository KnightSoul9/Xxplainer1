import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const OverViewContent = ({ content, index, course }) => {
  const [isOpen, setIsOpen] = useState(index === 0 || index === 1);

  // Function to get sorted submodules based on title parts
  const getSortedSubmodules = () => {
    return content?.subModules
      .map((subModule) => {
        const [firstPart, secondPart] = subModule?.title
          .split(".")[1]
          .split(" ");

        return {
          ...subModule,
          firstPart: parseInt(firstPart, 10),
          secondPart,
        };
      })
      .sort((a, b) => {
        if (a.firstPart === b.firstPart) {
          return a?.secondPart?.localeCompare(b.secondPart);
        }
        return a?.firstPart - b?.firstPart;
      });
  };

  const toggleView = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div key={index} className="mb-5 rounded-md pt-2 lg:px-2">
        {/* *************************** Module *************************** */}
        <div
          className={`space-x- flex cursor-pointer items-center justify-between rounded-t-xl border border-[#E5E7EB] bg-primary px-3 py-4 font-semibold text-white hover:bg-primary_bold  lg:py-[21px] lg:pl-6 lg:pr-5 ${
            course === "courseDetail" ? "" : "md:text-md text-base"
          }`}
          onClick={toggleView}
        >
          <p className="text-[17px] font-semibold lg:text-[22px]">
            {content?.title
              .split("-")
              .map((word) => word?.charAt(0)?.toUpperCase() + word.slice(1))
              .join(" ")}
          </p>

          <div className="">
            {isOpen ? (
              <div className="flex items-center justify-center space-x-2 rounded-[10px] bg-[#6394f8] px-2 py-3 text-sm lg:text-lg">
                <span>{getSortedSubmodules()?.length} lessons</span>
                <FaChevronUp />
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2 rounded-[10px] bg-[#6394f8] px-2 py-3 text-sm lg:text-lg">
                <span>{getSortedSubmodules()?.length} lessons</span>
                <FaChevronDown />
              </div>
            )}
          </div>
        </div>

        {/* *************************** Submodule *************************** */}
        <div
          className={`border border-[#fff] text-gray-600  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {getSortedSubmodules().map((sortedSubModule, index) => (
            <div
              key={index}
              className="md:text-md flex items-center justify-between rounded-md  border-[#fff] bg-[#fff]  pl-3 pr-3 text-xs font-medium text-[#333333] shadow-lg md:text-sm"
            >
              <div
                className="flex w-full cursor-pointer justify-between px-2 py-3.5 hover:rounded-md hover:bg-[#F5F7F7]"
              >
                <div className="flex items-center justify-center gap-2 ">
                  <Image
                    src="/images/mock/Docicon.svg"
                    width={24}
                    height={24}
                    alt="doc icon"
                  />
                  <p className="text-sm font-medium text-[#5f5f60] lg:text-base">
                    {sortedSubModule.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* *************************** Submodule End*************************** */}
      </div>
      
    </>
  );
};

export default OverViewContent;
