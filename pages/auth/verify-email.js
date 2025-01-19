import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
import Link from "next/link";

const VerifyEmail = () => {
  return (
    <>
      <CommonHead
        title={"Verify Email - Xplainerr"}
        description={" "}
        favIcon={"/favicon.ico"}
      />
      <main>
        <PageLayout>
          <div className="m-2 flex h-screen flex-col items-center justify-center">
            <div className=" mb-8 sm:container sm:mx-auto sm:pt-8">
              <div className="lg: mx-auto w-full max-w-lg rounded-lg border border-gray-200 bg-white px-10 py-6 pt-8 shadow-lg">
                <div className="min-h-[100px] md:text-center">
                  <h1 className="mb-5 text-lg font-medium text-black md:text-center lg:text-xl lg:font-bold">
                    Please check your email to verify !
                  </h1>
                  <h2>
                    If you already verify your email{" "}
                    <Link href="/auth/login" className="text-primary">
                      Login
                    </Link>{" "}
                    with your new account .
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </main>
    </>
  );
};

export default VerifyEmail;
