import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
import { useRouter } from "next/router";
import useAuthService from "@/src/hooks/auth/useAuthService";
import Link from "next/link";
import Image from "next/image";
import Error from "@/pages/404";

const Success = () => {
  const router = useRouter();
  const { session_id } = router.query;

  const firstLesson = localStorage.getItem("clickedUrl");

  const { currentUser } = useAuthService();

  return (
    <>
      <CommonHead
        title={`Xplainerr | Payment Success`}
        description={`Xplainerr | Payment Success`}
        favIcon={"/favicon.ico"}
      />
      {currentUser?.email && session_id ? (
        <PageLayout>
          <div className='container mx-auto px-4 py-5 pb-16 lg:max-w-7xl lg:py-[56px]'>
            {/* Tabs  */}
            <ol className='w-full items-center gap-2 space-y-4 lg:flex lg:space-y-0 '>
              <li className='  flex-1 '>
                <a
                  className={`flex w-full items-center rounded-lg border ${
                    currentUser?.email ? "bg-indigo-50" : ""
                  } px-4 py-5 font-medium`}
                >
                  <span
                    className={`mr-3 flex h-8 w-8 items-center justify-center rounded-full border ${
                      currentUser?.email
                        ? "bg-indigo-600 text-white"
                        : " border-indigo-600 bg-indigo-50 text-indigo-600"
                    }  text-sm  lg:h-10 lg:w-10`}
                  >
                    01
                  </span>
                  <h4
                    className={`text-base ${
                      currentUser?.email ? "text-indigo-600" : ""
                    } `}
                  >
                    Create Account
                  </h4>
                </a>
              </li>
              <li className='  flex-1 '>
                <a
                  className={`flex w-full items-center rounded-lg  px-4 py-5 font-medium ${
                    currentUser?.email ? "border bg-indigo-50" : ""
                  } `}
                >
                  <span
                    className={`mr-3 flex h-8 w-8 items-center justify-center rounded-full border ${
                      currentUser?.email &&
                      router.asPath == "/u/checkout/payment-success"
                        ? "border border-indigo-600  bg-indigo-600  text-white"
                        : "bg-indigo-600 text-white"
                    } text-sm  lg:h-10 lg:w-10`}
                  >
                    02
                  </span>
                  <h4
                    className={`text-base ${
                      currentUser?.email ? "text-indigo-600" : ""
                    } `}
                  >
                    Complete Payment
                  </h4>
                </a>
              </li>
              <li className='  flex-1 '>
                <a
                  className={`flex w-full items-center rounded-lg  px-4 py-5 font-medium ${
                    currentUser?.email ? "border bg-indigo-50" : ""
                  } `}
                >
                  <span
                    className={`mr-3 flex h-8 w-8 items-center justify-center rounded-full border ${
                      currentUser?.email &&
                      router.asPath == "/u/checkout/payment-success"
                        ? "border border-indigo-600  bg-indigo-600  text-white"
                        : "bg-indigo-600 text-white"
                    } text-sm  lg:h-10 lg:w-10`}
                  >
                    03
                  </span>
                  <h4
                    className={`text-base ${
                      currentUser?.email ? "text-indigo-600" : ""
                    } `}
                  >
                    Summary
                  </h4>
                </a>
              </li>
            </ol>
            {/* Main Content Component*/}
            <div>
              {/* Payment Success  */}
              <div className='container mx-auto px-2 lg:px-12 lg:py-0'>
                <div className='flex flex-col items-center pt-8 text-center lg:h-screen'>
                  <div>
                    <Image
                      src='/images/payment/success.svg'
                      alt='icon'
                      width={150}
                      height={150}
                    />
                  </div>
                  <div>
                    <h2 className='pt-8 text-3xl font-semibold lg:pt-6 lg:text-[40px] lg:leading-[48px]'>
                      Payment successful{" "}
                    </h2>
                    <p className='pt-4 text-base lg:text-2xl'>
                      Your payment was successful. Please check your dashboard{" "}
                      <br className='hidden lg:block' /> to access registered
                      courses{" "}
                    </p>
                    {/* Large  */}
                    <p className='hidden py-10 text-[#838383] lg:block'>
                      session_id: {session_id}
                    </p>
                    {/* Mobile  */}
                    <p className='py-5 text-[#838383] lg:hidden'>
                      session_id : {`${session_id?.slice(0, 20)} ` + "..."}
                    </p>
                    <Link href={firstLesson}>
                      <button className='w-full rounded-md bg-primary py-4 font-medium text-white hover:bg-primary_bold lg:mt-0  lg:w-[196px] lg:px-9'>
                        Start learning
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      ) : (
        <>
          <Error />
        </>
      )}
    </>
  );
};

export default Success;
