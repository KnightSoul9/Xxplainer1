import { callLeadAPI } from "@/src/api";
import { APP_CONSTANT } from "@/src/config/constants";
import { GlobalContext } from "@/src/context/GlobalContext";
import Image from "next/image";
import { useRouter } from "next/router";
import closeSvg from "public/images/icons/close.svg";
import { useContext, useState } from "react";
import { PopupContainer } from ".";

const leadData = {
  [APP_CONSTANT.TRY_FREE_PREVIEW_BTN]: {
    title: "Interested in checking out the free preview?",
    btnText: "Claim My Free Chapter Now",
  },
  [APP_CONSTANT.BUY_CTA_BTN]: {
    title: "Enter your email to continue login",
    btnText: "Get started",
  },
  [APP_CONSTANT.FREE_READ_PREVIEW]: {
    title: "Want to get full access to pricing & monetisation for FREE ?",
  },
};

const LeadModal = ({ setCouponModal }) => {
  const {
    LEAD_MODAL: {
      showLeadModal: isVisible,
      handleLeadModalClose,
      leadTriggerType = null,
      handlePostLeadRedirect,
    },
  } = useContext(GlobalContext);

  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClose = () => {
    localStorage.setItem("leadPopupClosed", true);
    handleLeadModalClose();
  };

  // lead modal content
  const heading =
    leadData[leadTriggerType]?.title || "Claim up to 50% off on the program!";
  const btnText = leadData[leadTriggerType]?.btnText || "Submit";

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const currentURL = origin + router.asPath;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const email = e.target.email.value;
    if (email) {
      const payload = {
        email,
        course: router.route.split("/")[2],
        url: currentURL,
        source: leadTriggerType,
        device: "WEB",
      };

      await callLeadAPI(payload);

      const leadData = payload;
      localStorage.setItem(
        APP_CONSTANT.LOCAL_STORAGE.LEAD_INFO,
        JSON.stringify(leadData)
      );
      handleLeadModalClose();
      await handlePostLeadRedirect(leadTriggerType);
      setIsProcessing(false);
    }
  };

  if (isVisible) {
    return (
      <PopupContainer>
        <div className="relative rounded-md bg-white  px-6 py-12 2xl:p-12 ">
          {leadTriggerType !== APP_CONSTANT.FREE_READ_PREVIEW && (
            <button
              className="py-.5 absolute right-4 top-4 mb-2 rounded-full border border-[#e6e5e5] bg-white px-2 text-lg  text-black"
              onClick={handleClose}
            >
              <Image src={closeSvg} alt="close" width={20} height={20} />
            </button>
          )}

          <div>
            <h4 className="text-md md:text-md mb-8  text-center md:font-bold lg:text-xl">
              {heading}
            </h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="mb-[5px] text-sm ">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                // placeholder="Enter your email"
                required
                className="placeholder:[#505050] mb-4 rounded-lg border border-[#ccc] bg-[#f1f1f1] py-3 pl-4 pr-5 "
              />

              <button
                disabled={isProcessing}
                className="mt-4 rounded-md  bg-[#000] bg-gradient-to-r px-8 py-2  text-sm text-white  hover:bg-[#000011da]"
              >
                {isProcessing && (
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="mr-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="#1C64F2"
                    />
                  </svg>
                )}
                {isProcessing ? "Loading" : btnText}
              </button>
            </div>
          </form>
        </div>
      </PopupContainer>
    );
  } else {
    return null;
  }
};

export default LeadModal;
