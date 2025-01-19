import { Courses } from "@/src/components/v1/HomeContainer";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { BACKEND_API } from "@/src/config/backend";
import PageLayout from "@/src/layout/PageLayout";
import { withRouter } from "next/router";

const AllCoursesPage = ({ courses }) => {
  // console.log("first ", courses);
  return (
    <>
      <CommonHead
        title={"Xplainerr - Courses"}
        description={"description"}
        favIcon={"/favicon.ico"}
      />
      <main>
        <PageLayout>
          {/* V2 New Design  */}

          {/* <div className=''>
            <div className="container mx-auto px-5 lg:px-12 big:px-28 large:px-96">
              <div className='flex justify-center pt-[70px] pb-16'>
                <Image src='/images/courses/banner.png' width={1200} height={180} alt='banner' />
              </div>
              <div>
                <AllCourse />
              </div>
            </div>
          </div> */}

          {/* V1 Old Design  */}
          <div className="flex min-h-screen flex-col overflow-hidden">
            <div className="grow lg:mb-12">
              <Courses
                heading={"All Courses"}
                ctaText={"View course detail"}
                courses={courses}
              />
            </div>
          </div>
        </PageLayout>
      </main>
    </>
  );
};

export default withRouter(AllCoursesPage);

export const getStaticProps = async () => {
  const res = await fetch(`${BACKEND_API}/courses`);
  const data = await res.json();

  return {
    props: {
      courses: data.result,
    },
  };
};
