import { useEffect, useState } from "react";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
import { IoMdCheckmarkCircle } from "react-icons/io";

const TechBuyPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("stripe"); // default to "stripe"
  const applicantName = localStorage.getItem("applicantName");

  useEffect(() => {
    if (paymentMethod === "paypal") {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=BAAxuZalqzBqpXf8JNh3AbCHQPv3BJIcoyxyyUZD-zkq-nw3R1FXYObyWZ7S1zGssaYQntFKrYiqiP6yjU&components=hosted-buttons&disable-funding=venmo&currency=USD";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (window.paypal && paypal.HostedButtons) {
          paypal.HostedButtons({
            hostedButtonId: "CZXGNVD3ZGBWA",
          }).render("#paypal-container-CZXGNVD3ZGBWA");
        } else {
          console.error("PayPal SDK or HostedButtons is not loaded correctly.");
        }
      };

      return () => {
        document.head.removeChild(script);
      };
    } else {
      // Load Stripe script
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/buy-button.js";
      script.async = true;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [paymentMethod]);

  return (
    <>
      <CommonHead
        title={"Xplainerr | Buy APIs For Product Managers"}
        description={"APIs For Product Managers"}
        favIcon={"/favicon.ico"}
      />
      <PageLayout>
        <div className="mt-12">
          <div className="relative mx-auto max-w-3xl px-3 pb-12 text-center lg:px-0">
            <div className="flex flex-col items-center lg:space-x-2 lg:flex-row justify-center">
              <IoMdCheckmarkCircle className="text-[44px]" />
              <h2 className="mt-4 text-3xl font-semibold text-[#101828DE] lg:mt-1 ">
                Congratulations {applicantName},
              </h2>
            </div>
            <h2 className="text-3xl font-semibold text-[#101828DE] lg:mt-1 ">
              you are shortlisted for APIs For PM cohort.
            </h2>
            <p className="py-2">
              Do you know? APIs For PM cohort has only 61% acceptance rate.
              Well done!
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:space-x-5">
          <div className="min-h-screen bg-[#030a21] text-white shadow-xl lg:basis-1/2 lg:rounded-r-xl">
            <div className="px-6 py-12 lg:px-12">
              <div className="">
                <h3 className="text-[32px] font-medium leading-[54px] ">
                  Google, Microsoft, Razorpay, Coinbase,
                  <br className="hidden lg:block" />
                  Uber, Booking, Stripe
                </h3>
                <p className="py-3 text-[#ffffffcc]">
                  Have technical round in their Product Management Interview
                </p>
              </div>

              <div className="mb-2 mt-4 w-36 rounded-md border bg-gradient-to-r from-[#00b85f] to-[#005f91] px-4 py-2 text-center">
                Do you know?
              </div>
              <ul className="py-2 pl-10">
                <li style={{ listStyleType: "disc" }} className="pb-1">
                  {" "}API knowledge is a must have for Fintech, Platform Product & FAANG Product Managers{" "}
                </li>
                <li style={{ listStyleType: "disc" }} className="pb-1">
                  PMs with technical knowledge are 37% more likely to
                  transition into leadership role{" "}
                </li>
                <li style={{ listStyleType: "disc" }} className="pb-1">
                  APIs are the bread and butter of modern software development
                </li>
                <li style={{ listStyleType: "disc" }} className="pb-1">
                  Above all, Sundar Pichai was a tech PM who built Google
                  Chrome browser
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="flex flex-col items-center lg:basis-1/2">
            <h3 className="text-2xl font-semibold mb-6">Select Payment Mode</h3>
            <div className="flex flex-col space-y-4 mb-6">
              <label
                onClick={() => setPaymentMethod("stripe")}
                className={`cursor-pointer w-full p-3 text-center text-lg font-semibold rounded-md border-2 ${
                  paymentMethod === "stripe"
                    ? "bg-blue-500 text-white shadow-xl"
                    : "border-gray-300 bg-white text-black"
                } hover:bg-blue-400 hover:shadow-lg transition-all duration-300`}
              >
                Indian Users (Stripe)
              </label>
              <label
                onClick={() => setPaymentMethod("paypal")}
                className={`cursor-pointer w-full p-3 text-center text-lg font-semibold rounded-md border-2 ${
                  paymentMethod === "paypal"
                    ? "bg-yellow-500 text-white shadow-xl"
                    : "border-gray-300 bg-white text-black"
                } hover:bg-yellow-400 hover:shadow-lg transition-all duration-300`}
              >
                Outside India (PayPal)
              </label>
            </div>

            {/* Stripe Button */}
            {paymentMethod === "stripe" && (
              <div className="mt-4">
                <stripe-buy-button
                  buy-button-id="buy_btn_1QhmzlSHcC4n6fvXSWz59MGu"
                  publishable-key="pk_live_51J1XSYSHcC4n6fvXzPVbeGNlXIUvt3OG10so5eJG0WqCf9v0GUnQxQnOEKc3EcqycXwsgOVZouvRalvzKp9zwnqu00oqyhImcC"
                  className="rounded-md border-2 border-black shadow-lg hover:font-bold transition duration-200"
                ></stripe-buy-button>
              </div>
            )}

            {/* PayPal Button */}
            {paymentMethod === "paypal" && (
              <div id="paypal-container-CZXGNVD3ZGBWA" className="mt-4">
                <div className="rounded-md border-2 border-black shadow-lg hover:font-bold transition duration-200">
                  {/* PayPal button will render here */}
                </div>
              </div>
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default TechBuyPage;
