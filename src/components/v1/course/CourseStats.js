const CourseStats = ({ courseSlug, courseStatsProps }) => {
  return (
    <section>
      <div className=" mx-auto mt-1">
        <div
          style={{ background: "#030a21" }}
          className="border-t border-gray-200 text-white"
        >
          {/* Items */}
          <div className="mx-auto grid max-w-sm items-start gap-8 pb-12 pt-8 md:max-w-2xl md:grid-cols-2 md:gap-16 md:pt-12 lg:max-w-5xl lg:grid-cols-3">
            {courseStatsProps?.length > 0 &&
              courseStatsProps.map((item, index) => {
                return (
                  <div key={index} className="text-center">
                    <div className="h3 mb-1 text-base"> {item?.key} </div>
                    <div className="text-md text-gray-400">{item?.data}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseStats;
