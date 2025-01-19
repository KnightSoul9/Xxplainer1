import GoogleLogin from "@/src/components/v1/Shared/GoogleLogin/GoogleLogin";

const CheckoutLogin = () => {
  return (
    <>
      <div className='m-2 min-h-screen'>
        <div className=' mb-8 sm:container sm:mx-auto sm:pt-8'>
          <div className='mx-auto w-full max-w-lg rounded-lg border border-gray-200 bg-white px-4 py-6 pt-8 shadow-lg md:px-10 lg:border-gray-200 lg:py-20'>
            <div className=''>
              <h1 className='mb-8 text-center text-lg font-bold text-black md:text-2xl'>
                Please Login to continue purchase
              </h1>
            </div>
            <div className='flex flex-col space-y-2'>
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutLogin;
