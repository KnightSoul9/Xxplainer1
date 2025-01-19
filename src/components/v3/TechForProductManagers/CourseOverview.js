import OverViewContent from "./OverViewContent";

const CourseOverview = ({ course, slug, courseData }) => {
  // const [displayCount, setDisplayCount] = useState(4);

  // console.log(courseData, "courseData");

  if (courseData && courseData?.length > 0) {
    // const showAllButton = displayCount < courseData?.length;

    return (
      <div className={`${course === "courseDetail" ? "" : "bg-[#fafafa]"}`}>
        <div
          className={`container mx-auto   ${
            course === "courseDetail" ? "pt-5" : "py-12 "
          }`}
        >
          <h2
            className={`pb-5 ${
              course === "courseDetail"
                ? "text-2xl"
                : "text-center text-3xl font-semibold text-[#101828DE] lg:text-[36px]  "
            }`}
          >
            Course Overview
          </h2>

          <div
            className={`container mx-auto w-full ${
              course === "courseDetail" ? "" : "lg:w-[793px]"
            }`}
          >
            {/* {courseData?.slice(0, displayCount).map((content, index) => ( */}
            {courseData?.map((content, index) => (
              <OverViewContent
                key={index}
                content={content}
                index={index}
                course={course}
                courseSlug={slug}
              />
            ))}
            {/* {showAllButton && (
              <div className=" flex  items-center justify-center">
                <button
                  onClick={() => setDisplayCount(courseData.length)}
                  className=" rounded-md bg-primary px-[25px] py-2 text-sm font-semibold text-white hover:bg-primary_bold"
                >
                  <span>Show all lessons</span>
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default CourseOverview;
