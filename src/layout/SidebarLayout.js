import { logout } from "@/src/store/features/auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { LeadModal } from "../components/v1/Shared/Modal";
import LoginModal from "../components/v1/Shared/Modal/LoginModal";
import CourseMobileMenu from "../components/v1/Shared/Navbar/CourseMobileMenu";
import { APP_CONSTANT } from "../config/constants";
import { freeCourses } from "../config/course-config";
import { GlobalContext } from "../context/GlobalContext";
import CourseContent from "../components/v1/course/DynamicCourseContent/MainContent/CourseContent";
import useDirectoryContents from "../hooks/useDirectoryContents";
import Navbar from "../components/v3/Shared/Navbar/Navbar";
import LeadEmailModal from "../components/v1/Shared/Modal/LeadEmailModal";

const SidebarLayout = ({ posts, course, children, slug }) => {
  // console.log(posts, "posts");
  const [open, setToggle] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  // console.log(router);

  // lead email modal
  const [showModal, setShowModal] = useState(false);
  const hasLeadEmail = localStorage.getItem("leadInfo");
  const [courseLesson, setCourseLesson] = useState(true);

  useEffect(() => {
    if (!hasLeadEmail) {
      const clickedUrl = router?.asPath;
      localStorage.setItem("clickedUrl", clickedUrl);

      // show the modal after 7 seconds if courseLesson is true
      if (courseLesson) {
        setTimeout(() => {
          setShowModal(true);
        }, 7000);
      } else {
        setShowModal(true); // show the modal instantly if courseLesson is false
      }
    } else {
      setShowModal(false);
    }
  }, [courseLesson, hasLeadEmail, router]);

  //fetch the directory content
  const folderName = `_${router.query.courseSlug}`;
  const directoryContents = useDirectoryContents(folderName);

  const {
    LEAD_MODAL: { handleLeadModalClick },
    user: { userCourses },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (APP_CONSTANT.LEAD_COLLECTION_CHAPTERS?.includes(slug)) {
      // console.log("SUCCESS_PAGE_MATCH");
    }

    let timeout;
    setTimeout(() => {
      timeout = handleLeadModalClick(APP_CONSTANT.FREE_READ_PREVIEW, {
        disableClose: true,
      });

      return () => {
        timeout && clearTimeout(timeout);
      };
    }, 5000);
  }, [handleLeadModalClick, slug]);

  useEffect(() => {
    const body = document.querySelector("body");
    // console.log(body);
    if (!body) return;

    if (open) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [open]);

  const [isPaid, setCourseUnlock] = useState(false);

  useEffect(() => {
    const isCourseAvailable = userCourses?.some((item) => item.slug === course);
    const isUserLoggedIn = Boolean(currentUser?.email);

    if (isCourseAvailable && isUserLoggedIn) {
      setCourseUnlock(true);
    }

    if (freeCourses.includes(course)) {
      setCourseUnlock(true);
    }
  }, [course, currentUser?.email, slug, userCourses]);

  // Logout
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("customerEmail");
    window.location.href = "/";
  };

  const handleBackToCourse = () => {
    router.push(`/courses/${course}`);
  };

  const linkStyle =
    "block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]";
  const courseLink =
    "flex justify-between items-center text-sm  hover:bg-primary hover:text-white py-1 px-2";

  return (
    <>
      {/********************** Header Top  **********************/}
      <header className="fixed top-0 z-10 w-full border-b border-gray-200 bg-gray-100 px-3 shadow-md md:px-12 lg:px-1">
        {/*********************** For Desktop ********************* */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="flex items-center justify-between">
          <div className="lg:hidden">
            <div className="flex items-center justify-center py-2">
              <Image
                src="https://ik.imagekit.io/zwxa4kttt/xplainer-logo.png"
                width={30}
                height={30}
                alt="Company Logo"
              />
              <Link href="/">
                <h2 className="ml-2 text-2xl font-[700] text-[#101828DE]">
                  Xplainerr
                </h2>
              </Link>
            </div>
          </div>

          {/*********************** For Mobile Menu ********************* */}
          <div className={`block lg:hidden `}>
            <AiOutlineMenu
              className="cursor-pointer"
              size={27}
              onClick={() => setToggle(true)}
            />
          </div>
          <CourseMobileMenu
            open={open}
            setToggle={setToggle}
            setLoginModal={setLoginModal}
            currentUser={currentUser}
            posts={posts}
            course={course}
          />

          {/*********************** For Mobile Menu ********************* */}
        </div>
      </header>

      {/********************** Main Body **********************/}
      <div className="relative hidden lg:block">
        <div className="flex">
          {/********************* Left Side  **********************/}
          <div className="fixed  flex h-screen w-[25%] flex-col overflow-y-auto bg-gray-100 pr-1  pt-[60px] text-left shadow-2xl ">
            {/* <div>
              <p onClick={handleBackToCourse}>
                <button className="flex w-full items-center  gap-3 bg-[#DADADA] px-2 py-3 font-medium">
                  <BsArrowLeft size={24} />
                  Back to course
                </button>
              </p>
            </div> */}

            {/********************************** Paid Chapter  **********************************/}
            {/* Dynamic  Way*/}
            <CourseContent
              courseData={directoryContents}
              slug={`${router.query.courseSlug}`}
            />
          </div>

          {/********************** Content  **********************/}
          <div className="ml-[25%]  flex-1 px-1 pt-16 lg:mt-4">{children}</div>
        </div>
      </div>

      {/********************** Content Mobile **********************/}
      <div className=" block pt-16 md:px-12 lg:hidden">{children}</div>

      {/* Login Modal  */}
      <LoginModal
        isVisible={loginModal}
        setLoginModal={setLoginModal}
        onClose={() => setLoginModal(false)}
      />

      {/* <LeadModal /> */}

      {/************************ Lead Modal  ************************/}
      <LeadEmailModal
        showModal={showModal}
        setShowModal={setShowModal}
        courseLesson={courseLesson}
      />
    </>
  );
};

export default SidebarLayout;
