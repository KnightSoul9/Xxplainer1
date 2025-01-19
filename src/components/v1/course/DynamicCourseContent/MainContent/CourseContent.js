import Content from "./Content";

// This component used in the learning page
// src\layout\NewSidebarLayout.js

const CourseContent = ({
  course,
  slug,
  courseData,
  hasAccess,
}) => {
  // console.log(courseData, "cc courseData");
  if (courseData && courseData?.length > 0) {
    return (
      <div className={`bg-[#fafafa]`}>
        <div className={`container mx-auto px-2 py-3 lg:px-0`}>
          {/* <h3
            className={`hidden pb-3 pl-3 text-2xl font-medium leading-7 lg:block `}
          >
            Course Content
          </h3> */}

          <div
            className={`container mx-auto w-full ${
              course === "courseDetail" ? "" : ``
            }`}
          >
            {courseData?.map((content, index) => (
              <Content
                key={index}
                content={content}
                index={index}
                course={course}
                courseSlug={slug}
                hasAccess={hasAccess}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default CourseContent;
