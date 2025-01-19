import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
import CheckoutLogin from "./checkoutLogin";
import useAuthService from "@/src/hooks/auth/useAuthService";
import Billing from "./billing";

const Checkout = () => {

  const { currentUser } = useAuthService();

  return (
    <>
      <CommonHead
        title={`Xplainerr | Checkout`}
        description={`Xplainerr | Checkout`}
        favIcon={"/favicon.ico"}
      />
      <PageLayout>
        <div className=''>
          <div className='container  mx-auto h-screen px-4 py-5 pb-16 lg:max-w-7xl lg:py-[56px]'>
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
                      currentUser?.email
                        ? "border border-indigo-600 bg-indigo-50 text-indigo-600"
                        : ""
                    } text-sm  lg:h-10 lg:w-10`}
                  >
                    02
                  </span>
                  <h4
                    className={`text-base text-gray-900 ${
                      currentUser?.email ? "" : ""
                    } `}
                  >
                    Billing Information
                  </h4>
                </a>
              </li>
              <li className=' flex-1'>
                <a className='flex w-full items-center px-4 py-5 font-medium'>
                  <span className='mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-sm  lg:h-10 lg:w-10'>
                    03
                  </span>
                  <h4 className='text-base  text-gray-900'>Summary</h4>
                </a>
              </li>
            </ol>
            {/* Main Content Component*/}
            <div>
              {/* Create Account  */}
              {!currentUser?.email && <CheckoutLogin />}
              {currentUser?.email && <Billing />}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Checkout;
