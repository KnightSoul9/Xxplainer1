import Ratings from "../Shared/Navbar/Ratings";

const HeroBanner = ({ course }) => {
  return (
    <div className={`lg:bg-[#263793]`}>
      <div className="mx-auto max-w-7xl px-5 py-4 lg:py-7 lg:px-16 lg:text-white">
        <div className="flex gap-8">
          <div className="lg:basis-8/12">
            <h2 className="text-2xl font-bold lg:text-4xl">{course?.title}</h2>
            <p className="py-3 text-sm lg:text-lg">{course?.metaTitle}</p>
            <div>
              <div className="flex items-center gap-3">
                {course?.is_best_seller > 0 && (
                  <button className="hidden rounded-sm bg-[#ECEB98] py-1.5 px-3 text-xs font-bold text-[#3D3C0A] lg:block ">
                    Best Seller
                  </button>
                )}

                {course?.reviewData?.ratings > 0 && (
                  <>
                    <div className="flex items-center justify-center gap-1 text-[#FFD700]">
                      <span className="font-semibold ">
                        {course?.reviewData?.ratings}
                      </span>
                      <span className="flex items-center">
                        {course?.reviewData?.ratings && (
                          <Ratings
                            ratings={course?.reviewData?.ratings}
                          />
                        )}
                      </span>
                    </div>

                    <span className="hidden text-sm lg:block lg:text-[#CEC0FC]">
                      ({course?.reviewData?.ratings} ratings)
                    </span>
                    <span className="hidden text-sm lg:block">
                      {course?.reviewData?.enrollmentCount} students
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row ">
              <p className="pt-2 text-sm">
                Created by {' '}
                <span className="lg:text-[#CEC0FC]">
                  {course?.instructors?.map((instructor, index) => (
                    <span key={index}>{instructor?.name}</span>
                  ))}
                </span>
              </p>
              <p className="pt-2 text-sm">
                Last update :{" "}
                <span className="lg:text-[#CEC0FC]">
                  {course?.updatedAt?.slice(0, 10)}
                </span>
              </p>
            </div>
          </div>
          <div className="lg:basis-4/12"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
