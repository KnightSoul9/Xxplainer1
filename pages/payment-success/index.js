import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const PaymentSuccess = () => {
  const router = useRouter()
  const { session_id = '' } = router.query;

  return (
    <>
      <CommonHead
        title={"Xplainerr | Payment Success"}
        description={" "}
        favIcon={"/favicon.ico"}
      />
      <PageLayout>
        <div className="container mx-auto px-2 py-12 lg:px-12 lg:py-0">
          <div className="flex flex-col items-center justify-center text-center lg:h-screen">
            <div>
              <Image
                src="/images/payment/success.svg"
                alt="icon"
                width={150}
                height={150}
              />
            </div>
            <div>
              <h2 className="pt-8 text-3xl font-semibold lg:pt-10 lg:text-[40px] lg:leading-[48px]">
                Payment successful{" "}
              </h2>
              <p className="pt-4 text-base lg:text-2xl">
                Your payment was successful. Please check your dashboard{" "}
                <br className="hidden lg:block" /> to access registered courses{" "}
              </p>
              {/* Large  */}
              <p className="hidden py-10 text-[#838383] lg:block">
                session_id: {session_id}
              </p>
              {/* Mobile  */}
              <p className="py-5 text-[#838383] lg:hidden">
                session_id : {`${session_id.slice(0, 20)} ` + "..."}
              </p>
              <Link href="/dashboard">
                <button className="w-full rounded-md bg-primary py-4 font-medium text-white hover:bg-primary_bold lg:mt-0  lg:w-[196px] lg:px-9">
                  Go to dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default PaymentSuccess;
