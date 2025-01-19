import { LoginModal } from "@/src/components/v1/Shared/Modal";
import CourseMobileMenu from "@/src/components/v1/Shared/Navbar/CourseMobileMenu";
import MobileMenu2 from "@/src/components/v1/Shared/Navbar/MobileMenu2";
import { logout } from "@/src/store/features/auth/authSlice";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import noCode from "/public/images/shared/noCode.svg";
import { allQuiz } from "@/src/config/constants";

const timeoutDuration = 0;

const linkStyle = "block pl-4 pr-5 py-2 hover:bg-[#EAFCFF]  hover:text-primary";

const Navbar = ({ pageName, posts, course }) => {
  const [isSticky, setSticky] = useState(false);
  const [open, setToggle] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const router = useRouter();
  const triggerRef = useRef();
  const timeOutRef = useRef();
  const cohortRef = useRef();
  const cohortOutRef = useRef();
  const quizRef = useRef();
  const quizOutRef = useRef();
  const profileRef = useRef();
  const profileOutRef = useRef();

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser);

  const [showModal, setShowModal] = useState(false);
  // console.log(router?.pathname);

  // course logic
  const handleCourseEnter = (isOpen) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleCourseLeave = (isOpen) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, timeoutDuration);
  };

  // cohort logic
  const handleCohortEnter = (isOpen) => {
    clearTimeout(cohortOutRef.current);
    !isOpen && cohortRef.current?.click();
  };

  const handleCohortLeave = (isOpen) => {
    cohortOutRef.current = setTimeout(() => {
      isOpen && cohortRef.current?.click();
    }, timeoutDuration);
  };

  // quiz logic
  const handleQuizEnter = (isOpen) => {
    clearTimeout(quizOutRef.current);
    !isOpen && quizRef.current?.click();
  };

  const handleQuizLeave = (isOpen) => {
    quizOutRef.current = setTimeout(() => {
      isOpen && quizRef.current?.click();
    }, timeoutDuration);
  };

  // Profile logic
  const handleProfileEnter = (isOpen) => {
    clearTimeout(profileOutRef.current);
    !isOpen && profileRef.current?.click();
  };

  const handleProfileLeave = (isOpen) => {
    profileOutRef.current = setTimeout(() => {
      isOpen && profileRef.current?.click();
    }, timeoutDuration);
  };

  // Handle sticky
  useEffect(() => {
    const body = document.querySelector("body");
    // console.log(body);
    if (!body) return;

    if (open) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }

    // Handle scroll
    const handleScroll = () => {
      if (
        router?.pathname === "/quiz/[domainSlug]/[quizSlug]" ||
        router?.pathname === "/quiz/[domainSlug]/[quizSlug]/thank-you" ||
        router?.pathname === "/quiz/[domainSlug]/[quizSlug]/view-report"
      ) {
        setSticky(false);
      } else if (window.pageYOffset > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  // const handleBannerClick = (hasLead) => {
  //   if (hasLead) {
  //     router.push("/courses");
  //     return;
  //   }
  //   setShowModal((state) => !state);
  // };
  const topCtaClicked = JSON.parse(localStorage.getItem("topCtaClicked"));
  const handleBannerClick = () => {
    localStorage.setItem("topCtaClicked", true);
    router.push("/cohorts/tech-for-product-managers");
  };

  // Logout
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("customerEmail");
    window.location.href = "/";
  };

  return (
    <>
      <header
        className={`border-b border-[#EAECF0] ${
          isSticky ? "fixed top-0 z-50 w-full bg-white shadow-md " : ""
        }`}
      >
        {/* {false && <HeaderTopBanner handleBannerClick={handleBannerClick} />} */}
        {/* {<HeaderTopBanner handleBannerClick={handleBannerClick} />} */}
       
        {/* {!topCtaClicked && (
          <div className="topBannerBg flex justify-center  p-2">
            <p
              className="md:text-md text-center text-[12px] font-bold text-white hover:cursor-pointer"
              onClick={() => handleBannerClick()}
            >
              {`🎉 Get additional discount of 10% on Tech For Product Manager cohort. Promo code: XPHP 🎉`}
            </p>
          </div>
        )} */}

        <div className="container mx-auto hidden px-[63px] py-[px] pb-1 lg:block">
          <div className=" flex items-center justify-between gap-12">
            {/****************** Left Side ******************/}
            <div className="flex items-center justify-center">
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

            {/* For Quiz page center menu hide  */}
            {router?.pathname === "/auth/login" ||
            router?.pathname === "/u/checkout"  ||
            router?.pathname === "/auth/signup" ||
            router?.pathname === "/quiz/[domainSlug]/[quizSlug]" ||
            router?.pathname === "/quiz/[domainSlug]/[quizSlug]/thank-you"  ? (
              <></>
            ) : (
              <>
                <div className="flex gap-5 space-x-2">
                  {/****************** Course  ******************/}
                  <div>
                    <Popover className="hover:border-none">
                      {({ open }) => (
                        <div
                          onMouseEnter={() => handleCourseEnter(open)}
                          onMouseLeave={() => handleCourseLeave(open)}
                        >
                          <Popover.Button
                            ref={triggerRef}
                            className={`flex items-center gap-x-1 py-3 outline-none  ${
                              open ? " text-primary_bold" : ""
                            }  ${
                              router.asPath.startsWith("/courses")
                                ? `border-b-2 border-primary  text-primary`
                                : ""
                            } `}
                          >
                            Courses{" "}
                            {open ? (
                              <FiChevronUp size={20} />
                            ) : (
                              <FiChevronDown size={20} />
                            )}
                          </Popover.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="left-50 absolute z-50 mt-[2px] border bg-white shadow-xl">
                              <NavLink
                                courseName={"API for Product Manager"}
                                courseSlug={"api-for-pm"}
                              />

                              <NavLink
                                courseName={"A to Z of Pricing & Monetization"}
                                courseSlug={"pricing-for-pm"}
                              />

                              <NavLink
                                courseName={"UX Writing"}
                                courseSlug={"ux-writing"}
                              />
                            </Popover.Panel>
                          </Transition>
                        </div>
                      )}
                    </Popover>
                  </div>

                  {/****************** Cohort  ******************/}
                  <div>
                    <Popover className="hover:border-none">
                      {({ open }) => (
                        <div
                          onMouseEnter={() => handleCohortEnter(open)}
                          onMouseLeave={() => handleCohortLeave(open)}
                        >
                          <Popover.Button
                            ref={cohortRef}
                            className={`flex items-center gap-x-1 py-3 outline-none ${
                              open ? "text-primary_bold" : ""
                            }  ${
                              router.asPath.startsWith("/cohorts")
                                ? `border-b-2 border-primary  text-primary`
                                : ""
                            } `}
                          >
                            Cohort
                            {open ? (
                              <FiChevronUp size={20} />
                            ) : (
                              <FiChevronDown size={20} />
                            )}
                          </Popover.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="left-50 absolute z-50 mt-[2px] border bg-white shadow-xl">
                              <Link
                                href="/cohorts/tech-for-product-managers"
                                className="block py-2 pl-4 pr-16 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"
                              >
                                <div className="flex gap-x-3 ">
                                  <Image
                                    src={noCode}
                                    alt="noCode"
                                    width={30}
                                    height={27}
                                  />
                                  <div className="">
                                    <h4 className="">
                                      Tech for Product Managers
                                    </h4>
                                    <button className="h-[20px] rounded-sm bg-[#E0EBFF] px-2  text-[12px] font-bold text-[#4B73FF]">
                                      Save ₹7,000
                                    </button>
                                  </div>
                                </div>
                              </Link>
                              {/* New Button: API for PMs */}
                              <Link
                                href="/cohorts/api-for-pms"
                                className="block py-2 pl-4 pr-16 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"
                              >
                                <div className="flex gap-x-3">
                                  <Image
                                    src={noCode} 
                                    alt="API for PMs"
                                    width={30}
                                    height={27}
                                  />
                                  <div>
                                    <h4>API for PMs</h4>
                                    <button className="h-[20px] rounded-sm bg-[#E0EBFF] px-2 text-[12px] font-bold text-[#4B73FF]">
                                      Save ₹2,600
                                    </button>
                                  </div>
                                </div>
                              </Link>
                            </Popover.Panel>
                          </Transition>
                        </div>
                      )}
                    </Popover>
                  </div>

                  {/****************** Quiz  ******************/}
                  <div>
                    <Popover className="hover:border-none">
                      {({ open }) => (
                        <div
                          onMouseEnter={() => handleQuizEnter(open)}
                          onMouseLeave={() => handleQuizLeave(open)}
                        >
                          <Popover.Button
                            ref={quizRef}
                            className={`flex items-center gap-x-1 py-3 outline-none ${
                              open ? "text-primary_bold" : ""
                            }  ${
                              router.asPath.startsWith("/quiz")
                                ? `border-b-2 border-primary  text-primary`
                                : ""
                            } `}
                          >
                            Quiz
                            {open ? (
                              <FiChevronUp size={20} />
                            ) : (
                              <FiChevronDown size={20} />
                            )}
                          </Popover.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="left-50 absolute z-50 mt-[2px] border bg-white shadow-xl">
                              {allQuiz?.map((quiz, index) => (
                                <Link
                                  key={index}
                                  href={`/quiz/${quiz?.slug}`}
                                  className="block py-2 pl-4 pr-16 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"
                                >
                                  <h4 className="">{ quiz?.title}</h4>
                                </Link>
                              ))}
                            </Popover.Panel>
                          </Transition>
                        </div>
                      )}
                    </Popover>
                  </div>

                  <Link
                    href="/pm-interview"
                    className={`py-3    hover:text-primary_bold ${
                      router.pathname.startsWith("/pm-interview")
                        ? `border-b-2 border-primary  text-primary`
                        : ""
                    }`}
                  >
                    PM Interview Prep{" "}
                    <span className="rounded-[4px] bg-[#FF8C00] px-1.5 py-[1px] text-xs font-medium text-[#fff] ">
                      New
                    </span>
                  </Link>
                  <Link
                    href="/blog"
                    className={`py-3   hover:text-primary_bold ${
                      router.pathname.startsWith("/blog")
                        ? `border-b-2 border-primary  text-primary`
                        : ""
                    }`}
                  >
                    Blog
                  </Link>
                </div>
              </>
            )}

            {/* Right  Side*/}
            <div>
              {currentUser?.email && currentUser?.emailVerified ? (
                <div>
                  {/************************ If user   ************************/}
                  <Popover className="z-50 hover:border-none">
                    {({ open }) => (
                      <div
                        onMouseEnter={() => handleProfileEnter(open)}
                        onMouseLeave={() => handleProfileLeave(open)}
                      >
                        <Popover.Button
                          ref={profileRef}
                          className={`rounded-full py-2  outline-none`}
                        >
                          {currentUser?.photoURL ? (
                            <Image
                              className={`hover:ring-3 rounded-full ring hover:ring-primary  hover:ring-offset-1 ${
                                open ? "ring-3 ring-primary ring-offset-1" : ""
                              } `}
                              src={currentUser?.photoURL}
                              width={38}
                              height={38}
                              alt="user photo"
                            />
                          ) : (
                            <Image
                              className={`hover:ring-3 rounded-full ring hover:ring-primary  hover:ring-offset-1 ${
                                open ? "ring-3 ring-primary ring-offset-1" : ""
                              } `}
                              src="/images/shared/demoProfile.png"
                              width={38}
                              height={38}
                              alt="user photo"
                            />
                          )}
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute right-16 z-50 mt-[2px] rounded-b-lg border bg-white shadow-2xl">
                            <Link
                              href="/dashboard"
                              className="my-2 block py-2 pl-4 pr-20 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"
                            >
                              Dashboard
                            </Link>

                            <span
                              className={`cursor-pointer ${linkStyle}`}
                              onClick={handleLogout}
                            >
                              {" "}
                              Log Out
                            </span>
                          </Popover.Panel>
                        </Transition>
                      </div>
                    )}
                  </Popover>
                </div>
              ) : (
                <div className="space-x-5">
                  <button
                    // onClick={() => setLoginModal(true)}
                    onClick={() => router.push("/auth/signup")}
                    className={`py-3  text-primary hover:text-primary_bold `}
                  >
                    Signup
                  </button>
                  <button
                    onClick={() => router.push("/auth/login")}
                    className="button px-[25px] py-2 text-sm font-semibold "
                  >
                    <span>Login</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/*********************** For Mobile ********************* */}
        <div className={`block lg:hidden `}>
          <div className="my-2 flex justify-between px-5">
            <Link href="/" className="text-xl font-semibold">
              Xplainerr
            </Link>
            <AiOutlineMenu
              className="cursor-pointer"
              size={27}
              onClick={() => setToggle(true)}
            />
          </div>
        </div>

        {pageName === "courseDetail" ? (
          <CourseMobileMenu
            open={open}
            setToggle={setToggle}
            setLoginModal={setLoginModal}
            currentUser={currentUser}
            posts={posts}
            course={course}
          />
        ) : (
          <MobileMenu2
            open={open}
            setToggle={setToggle}
            setLoginModal={setLoginModal}
            user={currentUser}
            logOut={handleLogout}
          />
        )}

        {/*********************** For Mobile ********************* */}
      </header>

      {/************************ Login Modal  ************************/}
      <LoginModal
        isVisible={loginModal}
        setLoginModal={setLoginModal}
        onClose={() => setLoginModal(false)}
      />
    </>
  );
};

const NavLink = ({ courseSlug, courseName, tag }) => {
  return (
    <Link href={`/courses/${courseSlug}`} className={linkStyle}>
      <div className="flex gap-x-3 ">
        {/* <Image src={users} alt="user icon" width={30} height={27} /> */}
        <div className="">
          <div className="flex items-center gap-x-2">
            <h4 className="">{courseName}</h4>

            {tag && (
              <button className="h-[20px] rounded-sm bg-[#E0EBFF] px-2  text-[12px] font-bold text-[#4B73FF]">
                Coming Soon
              </button>
            )}
          </div>
        </div>
      </div>
      <hr />
    </Link>
  );
};

export default Navbar;
