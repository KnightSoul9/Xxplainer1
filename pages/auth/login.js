import CommonHead from "@/src/components/v1/Shared/CommonHead";
import GoogleLogin from "@/src/components/v1/Shared/GoogleLogin/GoogleLogin";
import PageLayout from "@/src/layout/PageLayout";
import { auth } from "@/src/auth/firebase/Firebase.init";
import {
  loginFailed,
  loginStart,
  loginSuccess,
} from "@/src/store/features/auth/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { setUserData } from "@/src/utils/firebase";
import { GlobalContext } from "@/src/context/GlobalContext";
import { APP_CONSTANT } from "@/src/config/constants";
import Image from "next/image";
import { callLeadAPI } from "@/src/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["user"]);
  const dispatch = useDispatch();
  const { PAYMENT_MODAL } = useContext(GlobalContext);

  const redirectPath = router?.query?.redirect;
  console.log(router,'login route')

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Signup successful
      if (user?.emailVerified) {
        dispatch(loginStart());
        toast.success(`Welcome ${user.displayName}`);
        const body = {
          uid: user?.uid,
          displayName: user.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
          creationTime: user?.metadata.creationTime,
          lastSignInTime: user?.metadata.lastSignInTime,
          emailVerified: user?.emailVerified,
        };

        dispatch(loginSuccess(body));
        localStorage.setItem("customerEmail", user?.email);

        const payload = {
          email: user?.email,
          interest_section: '',
          url: router?.asPath,
          trigger_source: '',
          device: "WEB",
        };

        console.log(payload);
        await callLeadAPI(payload);

        // Checking if redirectPath contains '/quiz'
        if (redirectPath && redirectPath.includes("/quiz")) {
          router.push(redirectPath);
        } else if (
          redirectPath === "api-for-pm" ||
          redirectPath === "pricing-for-pm" ||
          redirectPath === "ux-writing"
        ) {
          PAYMENT_MODAL.handleCoursePayment(APP_CONSTANT.PAYMENT_MODE.STRIPE);
        } else {
          router.push("/dashboard");
        }

        const expireDate = new Date();
        expireDate.setTime(expireDate.getDate() + 365);

        setCookie("user", JSON.stringify(body), {
          path: "/",
          maxAge: 10000000,
          sameSite: true,
          expires : expireDate
        });
        // update the firestore
        setUserData(body);
      } else {
        toast.error("Sorry , You are not verified user !");
        router.push("/auth/verify-email");
        // console.log("User logged in not verify:", user);
        dispatch(loginFailed());
      }
    } catch (error) {
      // Handle login error
      if (error.code === "auth/user-not-found") {
        toast.error("User not found");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Password does not match");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
      // console.log(error);
    }
  };
  const redirectURL = redirectPath && redirectPath.split("/").slice(0, 2).join("/");
  // console.log(newPath); // Output: "/quiz"

  return (
    <>
      <CommonHead
        title={"Login - Xplainerr"}
        description={" "}
        favIcon={"/favicon.ico"}
      />
      <main>
        <PageLayout>
          {router?.query?.redirect ? (
            <div className="container relative mx-auto px-2 lg:px-28">
              <div className="flex flex-col gap-5 lg:flex-row">
                <div className="flex w-full flex-col items-center lg:mt-16 lg:basis-1/2">
                  <div className="m-2 hidden lg:block">
                    <h1 className="mb-8 text-center text-2xl font-semibold text-black">
                      {redirectURL == "/quiz"
                        ? "You are just one step away to view quiz score & report card "
                        : "One more step to access the course"}
                    </h1>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/login.png"
                        alt="image"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="m-2 ">
                    <div className=" mb-8 sm:container sm:mx-auto sm:pt-8">
                      <div className="mx-auto w-full max-w-lg rounded-lg border border-gray-200 bg-white px-5 py-6 pt-8 shadow-lg lg:border-gray-200 lg:px-10 ">
                        <div className="">
                          <h1 className="mb-5 text-center text-2xl font-bold text-black">
                            Log in to Xplainerr
                          </h1>
                        </div>
                        <div>
                          {/****************************  Social Login *************************** */}
                          <div className="flex flex-col space-y-2">
                            {/***************************** Google  *****************************/}
                            <GoogleLogin />
                          </div>
                          {/***************************** Or  *****************************/}
                          <div className="relative flex items-center py-5">
                            <div className="flex-grow border-t border-[#bdbdbd]"></div>
                            <span className="mx-4 flex-shrink text-[#cecdcd]">
                              Or
                            </span>
                            <div className="flex-grow border-t border-[#bdbdbd]"></div>
                          </div>

                          {/***************************** Login with Email and password  */}
                          <form
                            onSubmit={handleLogin}
                            className="mb-4 flex flex-col"
                          >
                            <div className="">
                              {/*****************************  Email   */}
                              <div className="mb-4 flex w-full flex-col">
                                <label
                                  htmlFor="email"
                                  className="text-base text-gray-800"
                                >
                                  Email address
                                  <span
                                    className="text-red-600"
                                    aria-label="Required"
                                  >
                                    {" "}
                                    *
                                  </span>
                                </label>
                                <input
                                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-200 focus:outline-none"
                                  name="email"
                                  label="Email address"
                                  type="email"
                                  placeholder="Your email address"
                                  required
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                              {/*****************************  Password    */}
                              <div className="mb-4 flex w-full flex-col">
                                <label
                                  htmlFor="password"
                                  className="text-base text-gray-800"
                                >
                                  Password
                                  <span
                                    className="text-red-600"
                                    aria-label="Required"
                                  >
                                    {" "}
                                    *
                                  </span>
                                </label>
                                <input
                                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-200 focus:outline-none"
                                  name="password"
                                  label="Password"
                                  type="password"
                                  placeholder="Password"
                                  required
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                              </div>
                              {/*****************************  Login    */}
                              <div className="">
                                <button
                                  type="submit"
                                  className="focus:ring-offset-2focus:ring-indigo-500 my-3 inline-flex  w-full  items-center justify-center rounded-md border border-transparent  bg-indigo-600 px-5 py-3 text-base font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2"
                                >
                                  Log in
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>

                        {/****************************** Other ***************** */}
                        <div className="space-y-1 text-center font-medium text-gray-600">
                          <p className="text-sm ">
                            Don’t have an account?{" "}
                            {router?.query?.redirect ? (
                              <Link
                                className="font-semibold text-indigo-500"
                                href={`/auth/signup?redirect=${router?.query?.redirect}`}
                              >
                                Sign up here
                              </Link>
                            ) : (
                              <Link
                                className="font-semibold text-indigo-500"
                                href="/auth/signup"
                              >
                                Sign up here
                              </Link>
                            )}
                            .
                          </p>

                          <p className="text-sm ">
                            Forgot your password?{" "}
                            <Link
                              className="font-semibold text-indigo-500"
                              href="/auth/reset"
                            >
                              Reset here .
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="m-2 min-h-screen">
              <div className=" mb-8 sm:container sm:mx-auto sm:pt-8">
                <div className="mx-auto w-full max-w-lg rounded-lg border border-gray-200 bg-white px-10 py-6 pt-8 shadow-lg lg:border-gray-200 ">
                  <div className="">
                    <h1 className="mb-5 text-center text-2xl font-bold text-black">
                      Log in to Xplainerr
                    </h1>
                  </div>
                  <div>
                    {/****************************  Social Login *************************** */}
                    <div className="flex flex-col space-y-2">
                      {/***************************** Google  *****************************/}
                      <GoogleLogin />
                    </div>
                    {/***************************** Or  *****************************/}
                    <div className="relative flex items-center py-5">
                      <div className="flex-grow border-t border-[#bdbdbd]"></div>
                      <span className="mx-4 flex-shrink text-[#cecdcd]">
                        Or
                      </span>
                      <div className="flex-grow border-t border-[#bdbdbd]"></div>
                    </div>

                    {/***************************** Login with Email and password  */}
                    <form onSubmit={handleLogin} className="mb-4 flex flex-col">
                      <div className="">
                        {/*****************************  Email   */}
                        <div className="mb-4 flex w-full flex-col">
                          <label
                            htmlFor="email"
                            className="text-base text-gray-800"
                          >
                            Email address
                            <span
                              className="text-red-600"
                              aria-label="Required"
                            >
                              {" "}
                              *
                            </span>
                          </label>
                          <input
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-200 focus:outline-none"
                            name="email"
                            label="Email address"
                            type="email"
                            placeholder="Your email address"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        {/*****************************  Password    */}
                        <div className="mb-4 flex w-full flex-col">
                          <label
                            htmlFor="password"
                            className="text-base text-gray-800"
                          >
                            Password
                            <span
                              className="text-red-600"
                              aria-label="Required"
                            >
                              {" "}
                              *
                            </span>
                          </label>
                          <input
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-200 focus:outline-none"
                            name="password"
                            label="Password"
                            type="password"
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        {/*****************************  Login    */}
                        <div className="">
                          <button
                            type="submit"
                            className="focus:ring-offset-2focus:ring-indigo-500 my-3 inline-flex  w-full  items-center justify-center rounded-md border border-transparent  bg-indigo-600 px-5 py-3 text-base font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2"
                          >
                            Log in
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/****************************** Other ***************** */}
                  <div className="space-y-1 text-center font-medium text-gray-600">
                    <p className="text-sm ">
                      Don’t have an account?{" "}
                      {router?.query?.redirect ? (
                        <Link
                          className="font-semibold text-indigo-500"
                          href={`/auth/signup?redirect=${router?.query?.redirect}`}
                        >
                          Sign up here
                        </Link>
                      ) : (
                        <Link
                          className="font-semibold text-indigo-500"
                          href="/auth/signup"
                        >
                          Sign up here
                        </Link>
                      )}
                      .
                    </p>

                    <p className="text-sm ">
                      Forgot your password?{" "}
                      <Link
                        className="font-semibold text-indigo-500"
                        href="/auth/reset"
                      >
                        Reset here .
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </PageLayout>
      </main>
    </>
  );
};

export default Login;

