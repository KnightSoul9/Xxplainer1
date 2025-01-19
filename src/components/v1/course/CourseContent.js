import { useState } from "react";
import Content from "../course/Content";

const CourseContent = ({ course, slug, courseData }) => {
  const [displayCount, setDisplayCount] = useState(4);
  // console.log(courseData, "courseData");

  if (courseData && courseData?.length > 0) {
    const showAllButton = displayCount < courseData.length;

    return (
      <div className={`${course === "courseDetail" ? "" : "bg-[#fafafa]"}`}>
        <div
          className={`container mx-auto   ${
            course === "courseDetail" ? "pt-5" : "py-[60px] "
          }`}
        >
          <h3
            className={`mb-4 font-semibold leading-7  ${
              course === "courseDetail" ? "text-2xl" : "text-center text-[26px]"
            }`}
          >
            Course Content
          </h3>

          <div
            className={`container mx-auto w-full ${
              course === "courseDetail" ? "" : "lg:w-[793px]"
            }`}
          >
            {courseData?.slice(0, displayCount).map((content, index) => (
              <Content
                key={index}
                content={content}
                index={index}
                course={course}
                courseSlug={slug}
              />
            ))}
            {showAllButton && (
              <div
                className="cursor-pointer pt-8 text-center text-sm font-semibold leading-[21px] text-primary"
                onClick={() => setDisplayCount(courseData.length)}
              >
                <p>Show all lessons</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default CourseContent;
