import { auth } from "@/src/auth/firebase/Firebase.init";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import GoogleLogin from "@/src/components/v1/Shared/GoogleLogin/GoogleLogin";
import { BACKEND_API } from "@/src/config/backend";
import PageLayout from "@/src/layout/PageLayout";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Signup successful
      // Set the display name
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      // console.log("User signed up:", user);
      sendVerificationEmail();
      // Send welcome email
      axios
        .post(`${BACKEND_API}/email/welcome-email`, {
          displayName: name,
          email,
        })
        .then(() => {
          console.log("Welcome email sent to the user");
        })
        .catch((err) => {
          console.error("Error sending welcome email:", err);

        });
      router.push("/auth/verify-email");
      await signOut(auth);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email already used ! Try another one");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
      // console.log(error);
    }
  };

  const sendVerificationEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        toast.success("Verification email sent to your email !");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const redirectURL = router?.query?.redirect?.split("/").slice(0, 2).join("/");

  return (
    <>
      <CommonHead
        title={"Signup - Xplainerr"}
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
                      <div className="lg: mx-auto w-full max-w-lg rounded-lg border border-gray-200 bg-white px-5 py-6 pt-8 shadow-lg lg:px-10">
                        <div className="">
                          <h1 className="mb-5 text-center text-2xl font-bold text-black">
                            Sign up for Xplainerr
                          </h1>
                        </div>
                        <div>
                          {/****************************  Social Signup *************************** */}
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

                          {/***************************** Signup with Email and password  */}
                          <form
                            onSubmit={handleSignup}
                            className="mb-4 flex flex-col"
                          >
                            <div className="">
                              {/*****************************  Display Name   */}
                              <div className="mb-4 flex w-full flex-col">
                                <label
                                  htmlFor="name"
                                  className="text-base text-gray-800"
                                >
                                  Your name
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
                                  name="name"
                                  label="Your Name"
                                  type="text"
                                  placeholder="Enter your full name"
                                  required
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </div>
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
                                  placeholder="Choose a password"
                                  required
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                              </div>
                              {/*****************************  Signup    */}
                              <div className="">
                                <button
                                  type="submit"
                                  className="focus:ring-offset-2focus:ring-indigo-500 my-3 inline-flex  w-full  items-center justify-center rounded-md border border-transparent  bg-indigo-600 px-5 py-3 text-base font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2"
                                >
                                  Get Started
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>

                        {/****************************** Other ***************** */}
                        <div className="space-y-1 text-center font-medium text-gray-600">
                          <p className="text-sm ">
                            Already have an account ?{" "}
                            {router?.query?.redirect ? (
                              <Link
                                className="font-semibold text-indigo-500"
                                href={`/auth/login?redirect=${router?.query?.redirect}`}
                              >
                                Login
                              </Link>
                            ) : (
                              <Link
                                className="font-semibold text-indigo-500"
                                href="/auth/login"
                              >
                                Login
                              </Link>
                            )}
                          </p>

                          <p className="text-sm ">
                            By creating an account,you agree to our{" "}
                            <Link
                              className="font-semibold text-indigo-500"
                              href="/terms-of-service"
                            >
                              terms and service
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
                <div className="lg: mx-auto w-full max-w-lg rounded-lg border border-gray-200 bg-white px-10 py-6 pt-8 shadow-lg">
                  <div className="">
                    <h1 className="mb-5 text-center text-2xl font-bold text-black">
                      Sign up for Xplainerr
                    </h1>
                  </div>
                  <div>
                    {/****************************  Social Signup *************************** */}
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

                    {/***************************** Signup with Email and password  */}
                    <form
                      onSubmit={handleSignup}
                      className="mb-4 flex flex-col"
                    >
                      <div className="">
                        {/*****************************  Display Name   */}
                        <div className="mb-4 flex w-full flex-col">
                          <label
                            htmlFor="name"
                            className="text-base text-gray-800"
                          >
                            Your name
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
                            name="name"
                            label="Your Name"
                            type="text"
                            placeholder="Enter your full name"
                            required
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
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
                            placeholder="Choose a password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        {/*****************************  Signup    */}
                        <div className="">
                          <button
                            type="submit"
                            className="focus:ring-offset-2focus:ring-indigo-500 my-3 inline-flex  w-full  items-center justify-center rounded-md border border-transparent  bg-indigo-600 px-5 py-3 text-base font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2"
                          >
                            Get Started
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/****************************** Other ***************** */}
                  <div className="space-y-1 text-center font-medium text-gray-600">
                    <p className="text-sm ">
                      Already have an account ?{" "}
                      {router?.query?.redirect ? (
                        <Link
                          className="font-semibold text-indigo-500"
                          href={`/auth/login?redirect=${router?.query?.redirect}`}
                        >
                          Login
                        </Link>
                      ) : (
                        <Link
                          className="font-semibold text-indigo-500"
                          href="/auth/login"
                        >
                          Login
                        </Link>
                      )}
                    </p>

                    <p className="text-sm ">
                      By creating an account,you agree to our{" "}
                      <Link
                        className="font-semibold text-indigo-500"
                        href="/terms-of-service"
                      >
                        terms and service
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

export default Signup;
