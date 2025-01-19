// src\layout\NotionCourseSidebar.js

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import NotionContent from "./NotionContent";

const NotionCourseContent = ({
  course,
  courseSlug,
  courseData,
  hasAccess,
  Module,
}) => {
  console.log(courseData, courseSlug, hasAccess, "abc");

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleView = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  


  useEffect(() => {
    const titleFromURL = router?.query?.module;

    if (titleFromURL === Module) {
      setIsOpen(true);
    }
  }, [router.pathname, Module, router?.query?.module]);

  if (courseData && courseData?.length > 0) {
    return (
      <div className={`bg-[#fafafa]`}>
        <div className={`container mx-auto px-2 py-3 lg:px-0`}>
          <h3
            className={`hidden pb-3 pl-3 text-2xl font-medium leading-7 lg:block `}
          >
            Course Content
          </h3>

          <div
            className={`container mx-auto w-full ${
              course === "courseDetail" ? "" : ``
            }`}
          >
            {/* Module  */}
            <div className='mb-2 rounded-md pt-2 lg:px-2'>
              {/* *************************** Module *************************** */}

              <div
                className={` flex cursor-pointer items-center justify-between rounded-t-xl border border-[#E5E7EB] bg-primary px-3 py-2 font-semibold text-white hover:bg-primary_bold  ${
                  course === "" ? "" : "md:text-md text-xs lg:text-base"
                }`}
                onClick={toggleView}
              >
                <p className={``}>
                  {Module.replace(/-/g, " ").replace(
                    /\w\S*/g,
                    (txt) =>
                      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                  )}
                </p>

                <div className=''>
                  {isOpen ? (
                    <div
                      className={`flex items-center justify-center space-x-2 rounded-[10px] bg-[#6394f8] px-2 py-2`}
                    >
                      <span className='text-sm'>
                        {courseData?.length} lessons
                      </span>
                      <FaChevronUp size={14} />
                    </div>
                  ) : (
                    <div
                      className={`flex items-center justify-center space-x-2 rounded-[10px] bg-[#6394f8] px-2 py-2`}
                    >
                      <span className='text-sm'>
                        {courseData?.length} lessons
                      </span>
                      <FaChevronDown size={14} />
                    </div>
                  )}
                </div>
              </div>
              {/* *************************** Content *************************** */}
              <div
                className={`border border-[#fff] text-gray-600  ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {courseData
                  .slice()
                  .reverse()
                  .map((content, index) => (
                    <NotionContent
                      key={index}
                      content={content}
                      index={index}
                      course={course}
                      courseSlug={courseSlug}
                      hasAccess={hasAccess}
                      courseData={courseData}
                    />
                  ))}
              </div>
              {/* *************************** Content End*************************** */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default NotionCourseContent;
