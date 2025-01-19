import Link from 'next/link'
import { useContext, useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { LoginModal } from './Modal'
import { useRouter } from 'next/router'
import useAuthService from '@/src/hooks/auth/useAuthService'
import { GlobalContext } from '@/src/context/GlobalContext'
import { APP_CONSTANT } from '@/src/config/constants'
import toast from 'react-hot-toast'

const UpgradeToPremium = ({ posts, course }) => {
  const [loginModal, setLoginModal] = useState(false);
  const router = useRouter()
  
  const { isAuthenticated } = useAuthService();
  const { PAYMENT_MODAL } = useContext(GlobalContext);
  // console.log(router)

  const handleRedirect = () => {
    router.push(`/u/checkout?courseId=${router?.query?.course}`);
    // if (!isAuthenticated) {
    //   toast.error("Please login to continue purchase");
    //   router.push(`/auth/login?redirect=${router?.query?.course}`);
    //   return;
    // } else {
    //   PAYMENT_MODAL.handleCoursePayment(APP_CONSTANT.PAYMENT_MODE.STRIPE);
    // }
  };
  return (
    <div>
      <div className="flex h-screen w-full flex-col items-center  justify-center rounded-lg border border-gray-200 bg-white p-8">
        <FaLock size={24} className="mb-3" />
        <h2 className="text-center text-xl font-extrabold text-black md:text-2xl">
          {" "}
          Upgrade to continue learning
        </h2>

        <div className="flex flex-row flex-wrap justify-center">
          <button className='' onClick={handleRedirect}>
            {" "}
            <button className=" my-4 rounded-lg bg-red-900 px-10 py-2.5 font-semibold text-white">
              {" "}
              Unlock chapter{" "}
            </button>
          </button>
        </div>

        {posts &&
          Object.keys(posts)
            .slice(0, 1)
            .map((chapter, index) => {
              const frontmatter = posts[chapter].frontmatter;
              const slug = posts[chapter].slug;

              return (
                <span key={index} className="font-medium text-gray-400">
                  {" "}
                  Not sure yet ?
                  <Link
                    className="font-semibold text-gray-600"
                    href={`/learn/${course}/${slug}`}
                  >
                    Try the free lesson
                  </Link>
                </span>
              );
            })}
      </div>

      {/* Login Modal  */}
      <LoginModal
        isVisible={loginModal}
        setLoginModal={setLoginModal}
        onClose={() => setLoginModal(false)}
      />
    </div>
  );
}

export default UpgradeToPremium