import { MyCourses, Settings } from "@/src/components/v1/Dashboard";
import Certificates from "@/src/components/v1/Dashboard/Certificates";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { GlobalContext } from "@/src/context/GlobalContext";
import useAuthService from "@/src/hooks/auth/useAuthService";
import ProtectedLayout from "@/src/layout/ProtectedLayout";
import { getAuthUserFromCookie } from "@/src/lib/auth";
import { fetchCourseDetail, getAllCoursesByUserId } from "@/src/utils/firebase";
import { useContext, useEffect, useState } from "react";

const Dashboard = ({ allCourses }) => {
  const { currentUser } = useAuthService();

  const [active, setActive] = useState(0);
  const [clicked, setClicked] = useState(0);

  const {
    user: { updateUserPurchasedCourses },
  } = useContext(GlobalContext);

  useEffect(() => {
    updateUserPurchasedCourses(allCourses);
  }, [allCourses, updateUserPurchasedCourses]);

  const menus = [
    { id: 0, name: "My Courses" },
    { id: 1, name: "Certificate" },
    { id: 2, name: "Settings" },
  ];

  const handleActive = (index) => {
    setActive(index);
    setClicked(index);
  };

  return (
    <>
      <CommonHead
        title={"Xplainerr | Dashboard"}
        description={" "}
        favIcon={"/favicon.ico"}
      />
      <ProtectedLayout>
        <div className="bg-black">
          <div className="big:px-[130px] container mx-auto px-5 lg:px-16">
            <h2 className="big:pb-16 pt-9 pb-7  text-lg font-medium text-white lg:text-[26px] lg:font-bold lg:leading-[48px] ">
              Welcome back,{" "}
              <span className="pb-1 lg:hidden">
                <br />
              </span>
              {currentUser?.displayName}
            </h2>

            {/* Menus  */}
            <nav className="flex items-center gap-5 border-gray-200 ">
              {menus.map((menu, index) => (
                <p
                  key={index}
                  onClick={() => handleActive(index)}
                  className={`cursor-pointer border-b-[6px] pb-2 text-sm lg:px-2 lg:text-base  ${
                    index === clicked
                      ? "font-semibold text-white "
                      : "border-transparent text-white"
                  }`}
                >
                  {menu.name}
                </p>
              ))}
            </nav>
            {/* Menus  */}
          </div>
        </div>

        {/* Child  */}
        <div className="big:px-[130px] container mx-auto px-5 py-16 lg:px-16 ">
          {active === 0 && <MyCourses allCourses={allCourses} />}
          {active === 1 && (
            <Certificates currentUser={currentUser} allCourses={allCourses} />
          )}
          {active === 2 && <Settings currentUser={currentUser} />}
        </div>
      </ProtectedLayout>
    </>
  );
};

export default Dashboard;

export const getServerSideProps = async ({ req, res }) => {
  // fetch cookie
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

  const allCourseData = await getAllCoursesByUserId(user.uid);

  if (allCourseData) {
    await Promise.all(
      allCourseData.map(async (course, index) => {
        const courseId = course.course_id;
        //courseID
        const courseDetail = await fetchCourseDetail({ courseId });
        if (courseDetail?.courseID) {
          unlockedCourses.push(courseDetail);
        }
      })
    );
  }

  return {
    props: {
      user: user,
      allCourses: unlockedCourses,
    },
  };
};
