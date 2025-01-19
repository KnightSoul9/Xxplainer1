import CommonHead from "@/src/components/v1/Shared/CommonHead";
import useCourseAccess from "@/src/hooks/auth/useCourseAccess";
import PageLayout from "@/src/layout/PageLayout";
import { CiStreamOn } from "react-icons/ci";
import { FaRegCopy } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { FaCalendarDays, FaHand } from "react-icons/fa6";
import { LuCopyCheck } from "react-icons/lu";
import { CohortCourseContent } from "@/src/config/cohort";
import { getAuthUserFromCookie } from "@/src/lib/auth";

const CourseContent = ({ user }) => {
  const { hasCourseAccess } = useCourseAccess("tech-for-product-managers");
  const firstName = user?.displayName.split(" ")[0];

  return (
    <>
      <CommonHead
        title={"Xplainerr | Tech Course Content | Tech For Product Managers"}
        description={"Tech For Product Managers"}
        favIcon={"/favicon.ico"}
      />

      <PageLayout>
        <div className="container mx-auto space-y-8 px-3 py-12">
          <div className="flex flex-col items-center space-y-5">
            <div className="w-full rounded-lg border p-5 shadow md:w-3/4 xl:w-2/5">
              <div className="flex items-center space-x-3">
                <h2 className="text-3xl">
                  Welcome back, <strong>{firstName}</strong>
                </h2>
                <FaHand size={24} />
              </div>
              <p>Be a super PM. Master technology as a Product Manager.</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-5">
            {CohortCourseContent.map((el, index) => (
              <div
                key={index}
                className="w-full rounded-lg border p-5 shadow-md md:w-3/4 xl:w-2/5"
              >
                <div className="flex flex-col space-y-5 md:flex-row md:space-x-6 md:space-y-0">
                  <div>
                    <CiStreamOn
                      size={56}
                      className="rounded-lg border-[8px] border-[#E1D8F2] bg-[#ECE6F6] p-1 font-bold text-primary"
                    />
                  </div>
                  <div className="flex w-full flex-col space-y-3">
                    <div className="flex justify-between">
                      <h1 className="text-lg font-bold">{el.title}</h1>
                      <button
                        className={`rounded-lg  ${
                          el.status === "Completed"
                            ? "bg-[#E3FCEF]"
                            : "bg-[#e1e1e1]"
                        }  px-3 py-1  text-xs font-medium uppercase`}
                      >
                        {el?.status}
                      </button>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center space-x-1`}>
                        <span>
                          <FaCalendarDays />
                        </span>
                        <p className="text-sm">{el.date} (IST)</p>
                      </div>
                      <div className="hidden items-center space-x-1 lg:flex">
                        <span>
                          <LuCopyCheck className="text-white" />
                        </span>
                        <p className="text-sm text-white">Core Session</p>
                      </div>
                    </div>
                    <div>
                      <p>
                        By <strong>{el.author}</strong>
                      </p>
                    </div>

                    <hr className="my-3" />
                    <div className="flex items-center space-x-5 text-primary">
                      <div className={`flex items-center space-x-1`}>
                        <span>
                          <SlSocialYoutube
                            className={`${
                              el.recordingURL == "" ? "text-[#9d9c9c]" : ""
                            }`}
                          />
                        </span>
                        <p className="text-sm font-medium">
                          {el.recordingURL == "" ? (
                            <span className="cursor-not-allowed text-[#9d9c9c]">
                              Recordings
                            </span>
                          ) : (
                            <a href={el.recordingURL} target="__blank">
                              Recordings
                            </a>
                          )}
                        </p>
                      </div>
                      <div className={`flex items-center space-x-1`}>
                        <span>
                          <FaRegCopy
                            className={`${
                              el.slideURL == "" ? "text-[#9d9c9c]" : ""
                            }`}
                          />
                        </span>
                        <p className="text-sm font-medium">
                          {el.slideURL == "" ? (
                            <span className="cursor-not-allowed text-[#9d9c9c]">
                              Slides
                            </span>
                          ) : (
                            <a href={el.slideURL} target="__blank">
                              Slides
                            </a>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default CourseContent;

export const getServerSideProps = async ({ req, res }) => {
  let user = null;
  let unlockedCourses = [];
  user = getAuthUserFromCookie(req);

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { user } };
};
