import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi'

const DashMobileNav = ({ open, setToggle, user, logOut }) => {
  const router = useRouter()
  useEffect(() => {
    setToggle(false)
  }, [router, setToggle])

  return (
    <div
      onClick={(e) => {
        const target = e.target
        if (target.classList.contains("overlay")) {
          setToggle(!open);
        }
      }}
      className={`overlay fixed  top-0 left-0 z-20 h-screen w-full transition-all duration-500  ${open ? "bg-black/75" : "bg-transparent pointer-events-none"
        }`}
    >
      <div className={`absolute transition-[left] bg-white  h-screen w-[75%] max-w-[375px] pb-20 ${open ? "left-0" : "-left-full"
        }`}>
        <div className="flex flex-col justify-start item-center">
          <div className="flex justify-between shadow-sm p-2">
            <h3 className="font-bold text-xl">Xplainerr</h3>
            <button onClick={() => setToggle(false)}><AiOutlineCloseCircle size={28} /></button>
          </div>

          {/***************************** Nav Items  *****************************/}
          <div className={`px-3 `}>
            {user?.email && (
              <div>
                <hr className='border-t-[1.5px] mb-2' />
                <p className='text-md font-semibold mb-5' ><Link href='/dashboard' className=''>Dashboard</Link></p>
                {/* <p className='text-md font-semibold mb-5' ><Link href='/dashboard' className=''>My Courses</Link></p> */}
                <p className='text-md font-semibold mb-5' onClick={logOut}>
                  <span className='flex items-center gap-2 cursor-pointer'>
                    <BiLogOut size={20} />
                    Logout
                  </span>
                </p>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  )
}

export default DashMobileNav