import { auth } from "@/src/auth/firebase/Firebase.init";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Reset = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleReset = (e) => {
    e.preventDefault();

    try {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          router.push("/auth/login");
          setEmail("");
          toast.success("Password reset email sent successfully.");
        })
        .catch((error) => {
          // console.log(error);
        });
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      <CommonHead
        title={"Reset Password - Xplainerr"}
        description={" "}
        favIcon={"/favicon.ico"}
      />
      <main>
        <PageLayout disableNav={true}>
          <div className="m-2 min-h-screen">
            <div className=" mb-8 sm:container sm:mx-auto sm:pt-8">
              <div className="lg: mx-auto w-full max-w-lg rounded-lg border-gray-200 bg-white px-10 py-6 pt-8 shadow-lg sm:border">
                <div className="">
                  <h1 className="mb-5 text-center text-2xl font-bold text-black">
                    Reset Password
                  </h1>
                </div>
                <div>
                  {/***************************** Reset Password */}
                  <form onSubmit={handleReset} className="mb-4 flex flex-col">
                    <div className="">
                      {/*****************************  Email  address */}
                      <div className="mb-4 flex w-full flex-col">
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
                      {/*****************************  Reset Button    */}
                      <div className="">
                        <button
                          type="submit"
                          className="focus:ring-offset-2focus:ring-indigo-500 my-3 inline-flex  w-full  items-center justify-center rounded-md border border-transparent  bg-indigo-600 px-5 py-3 text-base font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </main>
    </>
  );
};

export default Reset;
