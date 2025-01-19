import {
  allCourses,
  allCohort,
  BASE_URL,
  allQuiz,
} from "@/src/config/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
const PUBLIC_IMAGE_PATH = BASE_URL + "images/shared";

const MobileMenu2 = ({ open, setToggle, setLoginModal, user, logOut }) => {
  const router = useRouter();
  useEffect(() => {
    setToggle(false);
  }, [router, setToggle]);

  const [courseOpen, setCourseOpen] = useState(true);
  const [cohortOpen, setCohortOpen] = useState(true);
  const [quizOpen, setQuizOpen] = useState(false);

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
        className={`absolute h-screen w-[75%]  max-w-[375px] bg-white pb-20 transition-[left] ${
          open ? "left-0" : "-left-full"
        }`}
      >
        <div className="item-center flex flex-col justify-start">
          <div className="flex justify-between p-2 shadow-sm">
            <h3 className="text-xl font-bold">Xplainerr</h3>
            <button onClick={() => setToggle(false)}>
              <AiOutlineCloseCircle size={28} />
            </button>
          </div>

          {/***************************** Nav Items  *****************************/}
          <div>
            <div className={`relative flex flex-col gap-4 pt-4`}>
              <MenuItem
                title="Courses"
                isOpen={courseOpen}
                setOpen={setCourseOpen}
                menuItems={allCourses}
                iconKey="icon"
                linkKey="slug"
                toggle={setToggle}
                prefixPath="/courses/"
              />
              <MenuItem
                title="Cohort"
                isOpen={cohortOpen}
                setOpen={setCohortOpen}
                menuItems={allCohort}
                iconKey="icon"
                linkKey="slug"
                toggle={setToggle}
                prefixPath="/cohorts/"
              />
              <MenuItem
                title="Quiz"
                isOpen={quizOpen}
                setOpen={setQuizOpen}
                menuItems={allQuiz}
                linkKey="slug"
                toggle={setToggle}
                prefixPath="/quiz/"
              />
              <p
                className={`text-md px-3 font-semibold ${
                  courseOpen ? "pt-0" : ""
                }`}
              >
                <Link href="/pm-interview" className="">
                  PM Interview Prep{" "}
                  <span className="rounded-[4px] bg-[#FF8C00] px-1.5 py-[1px] text-xs font-medium text-[#fff] ">
                    New
                  </span>
                </Link>
              </p>
              <p className="text-md mb-5 px-3 font-semibold">
                <Link href="/blog" className="">
                  Blog
                </Link>
              </p>
            </div>
            {/* ****************************Check login user ****************************** */}
            <div className={`px-3 `}>
              {/* ****************************If user ****************************** */}
              {user?.email ? (
                <div>
                  <hr className="mb-2 border-t-[1.5px]" />
                  <p className="text-md mb-5 font-semibold">
                    <Link href="/dashboard" className="">
                      Dashboard
                    </Link>
                  </p>
                  <p className="text-md mb-5 font-semibold " onClick={logOut}>
                    <span className="flex cursor-pointer items-center gap-2">
                      <BiLogOut size={20} />
                      Logout
                    </span>
                  </p>
                </div>
              ) : (
                //********************************** No user ********************************/
                <button
                  onClick={() => router.push("/auth/login")}
                  className="text-md rounded-md bg-[#0070F4] px-[51px] py-[10px] font-semibold text-white"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({
  title,
  isOpen,
  setOpen,
  menuItems,
  iconKey,
  linkKey,
  toggle,
  prefixPath,
}) => {
  const handleToggle = () => {
    setOpen(!isOpen);
  };
  // console.log(menuItems);

  return (
    <div className="text-md px-3 font-semibold">
      <div
        onClick={handleToggle}
        className={`flex cursor-pointer items-center gap-x-2 `}
      >
        {title}
        <div className="flex items-center justify-between  gap-x-1">
          {title == "Cohort" && (
            <>
              <button className="flex h-[16px] w-[40px] items-center justify-center rounded-sm bg-[#E7E1FF] px-[2px] text-[8px] font-bold text-[#9868FF]">
                New
              </button>
            </>
          )}
          {isOpen ? (
            <FiChevronUp size={22} className="font-bold" />
          ) : (
            <FiChevronDown size={22} className="font-bold" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="border-b border-gray-200 bg-white">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={`${prefixPath}${item[linkKey]}`}
              className="block py-2 pl-3 pr-8 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"
            >
              <div className="imgIcon flex items-center gap-x-2">
                {iconKey && (
                  <Image
                    src={`${PUBLIC_IMAGE_PATH}/${item[iconKey]}`}
                    alt="icon"
                    width={20}
                    height={20}
                  />
                )}
                <div className="">
                  <h4 className="text-[12px] font-medium">{item.title}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu2;
