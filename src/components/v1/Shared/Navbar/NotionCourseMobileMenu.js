// src\layout\NotionCourseSidebar.js

import { logout } from "@/src/store/features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";
import { BASE_URL, allCourses } from "@/src/config/constants";
import NotionCourseContent from "../../course/DynamicCourseContent/NotionContent/NotionCourseContent";
const PUBLIC_IMAGE_PATH = BASE_URL + "images/shared";

const NotionCourseMobileMenu = ({
  open,
  setToggle,
  currentUser,
  hasAccess,
  courseData,
  courseSlug,
  Module,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [courseOpen, setCourseOpen] = useState(false);


  useEffect(() => {
    setToggle(false);
  }, [router, setToggle]);

  // Logout
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("customerEmail");
    window.location.href = "/";
  };


  return (
    <div
      onClick={(e) => {
        const target = e.target;
        if (target.classList.contains("overlay")) {
          setToggle(!open);
        }
      }}
      className={`overlay fixed  left-0 top-0 z-20 h-screen w-full transition-all duration-500  ${
        open ? "bg-black/75" : "pointer-events-none bg-transparent"
      }`}
    >
      <div
        className={`absolute h-screen w-[75%] max-w-[375px] bg-white pb-20 text-black transition-[left] ${
          open ? "left-0 overflow-y-auto" : "-left-full"
        }`}
      >
        <div className='item-center flex flex-col justify-start'>
          <div className='flex justify-between p-2 shadow-sm'>
            <h3 className='text-xl font-bold'>Xplainerr</h3>
            <button onClick={() => setToggle(false)}>
              <AiOutlineCloseCircle size={28} />
            </button>
          </div>
          <hr />

          {/*Course Nav Items  */}
          <div>
            <NotionCourseContent
              courseData={courseData}
              courseSlug={courseSlug}
              hasAccess={hasAccess}
              Module={Module}
            />
            {/********************************** Free Chapter  ***************************************/}

            {/********************************** Paid Chapter  **********************************/}
            <div className='relative '>
              <div className='text-md px-3 font-semibold '>
                <div
                  onClick={() => {
                    setCourseOpen(!courseOpen);
                  }}
                  className={`flex cursor-pointer items-center gap-x-2 `}
                >
                  Courses
                  <div className='flex items-center justify-between  gap-x-1'>
                    {courseOpen ? (
                      <FiChevronUp size={22} className='font-bold' />
                    ) : (
                      <FiChevronDown size={22} className='font-bold' />
                    )}
                  </div>
                </div>
              </div>
              {courseOpen && (
                <div
                  onClick={() => setCourseOpen(false)}
                  className='absolute  left-0 top-5 z-10 mt-2 w-full border-b border-gray-200 bg-white  py-2'
                >
                  {allCourses.map((item, index) => {
                    return (
                      <Link
                        key={`course-${index}`}
                        href={`/courses/${item.slug}`}
                        className='block py-2 pl-4 pr-8 hover:bg-[#EAFCFF]  hover:text-[#006BC2]'
                      >
                        <div className='imgIcon flex items-center gap-x-2'>
                          <Image
                            src={`${PUBLIC_IMAGE_PATH}/${item.icon}`}
                            alt='icon'
                            width={20}
                            height={20}
                          />
                          <div className=''>
                            <h4 className='text-[12px] font-medium'>
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
              <div className='text-md px-3 pt-3 font-semibold'>
                <Link
                  href='/pm-interview'
                  className={`py-3    hover:text-primary_bold ${
                    router.pathname.startsWith("/pm-interview")
                      ? `border-b-2 border-primary  text-primary`
                      : ""
                  }`}
                >
                  PM Interview Prep
                </Link>
              </div>

              <hr className='mt-2' />
              <div className='mt-5 flex items-center gap-5 px-3'>
                {currentUser?.email ? (
                  <>
                    <Link
                      href='/dashboard'
                      className='cursor-pointer rounded-md bg-primary px-4 py-1.5 font-semibold text-white hover:border-b-2 hover:bg-primary_bold '
                    >
                      Dashboard
                    </Link>
                    <h4
                      onClick={handleLogout}
                      className='cursor-pointer rounded-md bg-primary px-4 py-1.5 font-semibold text-white hover:border-b-2 hover:bg-primary_bold '
                    >
                      Log out
                    </h4>
                  </>
                ) : (
                  <h4
                    // onClick={() => setLoginModal(true)}
                    onClick={() => router.push("/auth/login")}
                    className='cursor-pointer rounded-md bg-primary px-4 py-1.5 font-semibold text-white hover:border-b-2 hover:bg-primary_bold '
                  >
                    Login
                  </h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotionCourseMobileMenu;
