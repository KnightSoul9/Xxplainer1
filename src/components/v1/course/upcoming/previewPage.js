import Link from "next/link";

const PreviewPage = () => {
  return (
    <div className="container mx-auto px-5 pt-5 lg:pt-12 pb-20 lg:px-40 big:px-60 large:px-80">
      <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
        {/* Left Side  */}
        <div className="">
          <div className="hidden lg:block">
            <h1 className="text-5xl font-bold leading-[60px] lg:text-6xl">
              Ace user{" "}
            </h1>
            <h1 className="bg-gradient-to-r from-[#C7D2FE] to-[#22D3EE] bg-clip-text text-5xl font-bold text-transparent lg:text-6xl">
              Interview
            </h1>
          </div>
          <p className="pt-12 lg:pt-7 pb-5 text-lg lg:text-xl leading-7 text-[#454545]">
            Build projects, practice and learn to code{" "}
            <br className="hidden lg:block " /> from scratch - without leaving
            your <br className="hidden lg:block" /> browser.
          </p>
          <h4 className="text-base lg:text-xl font-bold leading-7 text-[#4f4f4f]">
            Launching on 30th April, 2023
          </h4>
          <div className="mt-8 ">
            <Link href="/">
              <button className="rounded-md bg-gradient-to-r from-[#6366F1] to-[#0891B2] py-3 px-28  font-medium text-white lg:text-xl">
                Notify Me
              </button>
            </Link>
          </div>
        </div>
        {/* Right Side  */}
        <div className="rounded-lg border py-8 px-4 lg:p-8 shadow-md lg:shadow-lg">
          {/* For Mobile Title  */}
          <div className="pb-4 lg:hidden">
            <h1 className="text-3xl font-bold ">
              Ace user{" "}
            </h1>
            <h1 className="bg-gradient-to-r from-[#C7D2FE] to-[#22D3EE] bg-clip-text text-3xl font-bold text-transparent ">
              Interview
            </h1>
          </div>

          {/* Form  */}
          <form>
            <div className="flex flex-col space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm "
                />
              </div>
              <div>
                <input
                  type="number"
                  name="number"
                  required
                  placeholder="Enter phone number"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm "
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="mt-2 flex h-[40px] w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary_bold"
                >
                  Register Now
                </button>
              </div>

              <div>
                <p className="text-xs text-[#71717A] ">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy <br className="hidden lg:block" /> and Terms of Service
                  apply.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
