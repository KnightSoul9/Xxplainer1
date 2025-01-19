import { logout } from "@/src/store/features/auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import DashMobileNav from "./DashMobileNav";

const DashNav = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isSticky, setSticky] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [open, setToggle] = useState(false);
  const dispatch = useDispatch();

  //********************** Handle Sticky
  useEffect(() => {
    const body = document.querySelector("body");
    // console.log(body);
    if (!body) return;

    if (open) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }

    const handleScroll = () => {
      if (window.pageYOffset > 50) {
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

  // Logout
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("customerEmail");
    window.location.href = "/";
  };
  const linkStyle =
    "block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]";

  return (
    <div
      className={` ${
        isSticky
          ? "fixed top-0 z-10 w-full border-b border-gray-200 bg-white shadow-md"
          : "border-b border-gray-200"
      }`}
    >
      <div className="container mx-auto px-3 lg:px-16">
        <div
          className={`relative flex items-center justify-between ${
            isSticky ? "py-2" : "py-2.5"
          }`}
        >
          <Link href="/dashboard">
            <h3 className="text-[26px] font-bold">Xplainerr</h3>
          </Link>
          {/*********************** For Desktop ********************* */}
          <div className="hidden lg:block">
            {currentUser?.email && (
              <>
                {/************************ Profile   ************************/}
                <div
                  className="cursor-pointer"
                  onMouseOver={() => {
                    setProfileOpen(true);
                  }}
                >
                  {currentUser?.photoURL ? (
                    <Image
                      className="rounded-full"
                      src={currentUser?.photoURL}
                      width={38}
                      height={38}
                      alt="user photo"
                    />
                  ) : (
                    <Image
                      className="rounded-full"
                      src="/images/shared/demoProfile.png"
                      width={38}
                      height={38}
                      alt="user photo"
                    />
                  )}
                </div>

                {/* Profile Submenu  */}
                {profileOpen && (
                  <div
                    onMouseLeave={() => setProfileOpen(false)}
                    className="z-80 absolute right-0 top-12 rounded-b-xl bg-white py-2 shadow-xl"
                  >
                    <div className={` ${linkStyle}`}>
                      <h4 className="font-semibold ">
                        {currentUser?.displayName}
                      </h4>
                      <span className="text-sm text-gray-400">
                        {currentUser?.email}
                      </span>
                    </div>
                    <hr />

                    <Link href="/dashboard/" className={linkStyle}>
                      Dashboard
                    </Link>

                    {/* <Link href='/dashboard' className={linkStyle}>
                      My Courses
                    </Link>  */}

                    <span
                      className={`cursor-pointer ${linkStyle}`}
                      onClick={handleLogout}
                    >
                      Log Out
                    </span>
                  </div>
                )}
              </>
            )}
          </div>

          {/*********************** For Mobile Menu ********************* */}
          <div className={`block lg:hidden `}>
            <AiOutlineMenu
              className="cursor-pointer"
              size={27}
              onClick={() => setToggle(true)}
            />
          </div>

          <DashMobileNav
            open={open}
            setToggle={setToggle}
            user={currentUser}
            logOut={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default DashNav;
