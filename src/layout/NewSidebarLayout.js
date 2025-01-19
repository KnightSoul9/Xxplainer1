import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import LeadEmailModal from "../components/v1/Shared/Modal/LeadEmailModal";
import LoginModal from "../components/v1/Shared/Modal/LoginModal";
import CourseMobileMenu from "../components/v1/Shared/Navbar/CourseMobileMenu";
import CourseContent from "../components/v1/course/DynamicCourseContent/MainContent/CourseContent";
import Navbar from "../components/v3/Shared/Navbar/Navbar";

const NewSidebarLayout = ({
  posts,
  course,
  children,
  courseData,
  hasAccess,
}) => {
  // console.log(posts, "posts");
  const [open, setToggle] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const router = useRouter();
  // console.log(courseData, "courseData");

  // lead email modal
  const [showModal, setShowModal] = useState(false);
  const hasLeadEmail = localStorage.getItem("leadInfo");
  const [courseLesson, setCourseLesson] = useState(true);
  const [cTitle, setCTitle] = useState("");
  const [sTitle, setSTitle] = useState("");

  useEffect(() => {
    if (!hasLeadEmail) {
      const clickedUrl = router?.asPath;
      localStorage.setItem("clickedUrl", clickedUrl);

      if (courseLesson) {
        setTimeout(() => {
          setShowModal(true);
        }, 7000);
      } else {
        setShowModal(true);
      }
    } else {
      setShowModal(false);
    }
  }, [courseLesson, hasLeadEmail, router]);

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

  useEffect(() => {
    if (router.query.course == "api-for-pm") {
        setCTitle("Unlock FREE chapters of API For Product Manager course");
        setSTitle(
          "Do you know? Product Managers with technical knowledge are paid 42% more than their counterparts"
        );
    }
    if (router.query.course == "pricing-for-pm") {
      setCTitle("Unlock FREE chapters of Pricing & Monetisation course");
      setSTitle(
        "Nothing gives you visibility like working on monetisation problems. Learn strategies from Netflix, Bumble, Netflix etc. "
      );
    }
    if (router.query.course == "ux-writing") {
    setCTitle("Unlock FREE chapters of UX writing course");
    setSTitle("Master the art of creating delightful copies for your users");
    }
  }, [router.query.course]);

  return (
    <>
      {/********************** Header Top  **********************/}
      <header className='fixed top-0 z-10 w-full border-b border-gray-200 bg-gray-100 px-3 shadow-md md:px-12 lg:px-1'>
        {/*********************** For Desktop ********************* */}
        <div className='hidden lg:block'>
          <Navbar />
        </div>
        <div className='flex items-center justify-between'>
          <div className='lg:hidden'>
            <div className='flex items-center justify-center py-2'>
              <Image
                src='https://ik.imagekit.io/zwxa4kttt/xplainer-logo.png'
                width={30}
                height={30}
                alt='Company Logo'
              />
              <Link href='/'>
                <h2 className='ml-2 text-2xl font-[700] text-[#101828DE]'>
                  Xplainerr
                </h2>
              </Link>
            </div>
          </div>

          {/*********************** For Mobile Menu ********************* */}
          <div className={`block lg:hidden `}>
            <AiOutlineMenu
              className='cursor-pointer'
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
            courseData={courseData.modules}
            slug={`${course}`}
            hasAccess={hasAccess}
          />

          {/*********************** For Mobile Menu ********************* */}
        </div>
      </header>

      {/********************** Main Body **********************/}
      <div className='relative hidden lg:block'>
        <div className='flex'>
          {/********************* Left Side  **********************/}
          <div className='fixed  flex h-screen w-[25%] flex-col overflow-y-auto bg-gray-100 pr-1  pt-[60px] text-left shadow-2xl '>
            {/* Dynamic  Way*/}
            <CourseContent
              courseData={courseData.modules}
              slug={`${course}`}
              hasAccess={hasAccess}
            />
          </div>

          {/********************** Content  **********************/}
          <div className='ml-[25%]  flex-1 px-1 pt-16 lg:mt-4'>{children}</div>
        </div>
      </div>

      {/********************** Content Mobile **********************/}
      <div className=' block pt-16 md:px-12 lg:hidden'>{children}</div>

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
        ctaTitle={cTitle}
        subTitle={sTitle}
        hasAccess={hasAccess}
      />
    </>
  );
};

export default NewSidebarLayout;
