import { BACKEND_API } from "@/src/config/backend";
import { APP_CONSTANT } from "@/src/config/constants";
import { GlobalContext } from "@/src/context/GlobalContext";
import Image from "next/image";
import { useRouter } from "next/router";

const { callLeadAPI } = require("@/src/api");
const { useState, useContext } = require("react");

const LeadEmailModal = ({
  showModal,
  setShowModal,
  courseLesson,
  ctaTitle,
  subTitle,
  hasAccess,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const hasClicked = localStorage.getItem("clickedUrl");
  const router = useRouter();

  const {
    LEAD_MODAL: { leadTriggerType = null },
  } = useContext(GlobalContext);

  const currentURL = router.asPath;

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const email = e.target.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == "") {
      setError("Uhh! Email is required ");
      setIsProcessing(false);
      return;
    } else if (!emailRegex.test(email)) {
      setError("Uhh! This doesn’t seem like the right email");
      setIsProcessing(false);
      return;
    } else if (email.slice(-1) === ".") {
      setError("Uhh! Email should not end with a full stop");
      setIsProcessing(false);
      return;
    }

    // function to extract and format course name from the URL
    const extractAndFormatCourseName = (url) => {
      const match = url.match(/\/learning\/([^\/]+)\/.*/);
      if (match) {
        const courseNameWithHyphens = match[1];
        const courseNameWords = courseNameWithHyphens.split("-");
        const formattedCourseName = courseNameWords
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        return formattedCourseName;
      }
      return null;
    };

    const courseName = extractAndFormatCourseName(hasClicked);

    const payload = {
      email,
      interest_section: courseName,
      url: currentURL,
      trigger_source: leadTriggerType,
      device: "WEB",
    };

    console.log(payload, courseName);
    await callLeadAPI(payload);

    const leadData = payload;
    localStorage.setItem(
      APP_CONSTANT.LOCAL_STORAGE.LEAD_INFO,
      JSON.stringify(leadData)
    );
    handleCloseModal();

    window.location.href = hasClicked;

    setIsProcessing(false);
  };

  if (showModal && !hasAccess) {
    return (
      <div className=" fixed inset-0 z-[9999]  flex justify-center bg-black bg-opacity-80 pt-[8%] md:items-center md:pt-0">
        <div className="flex w-[99%]  flex-col md:w-[50%] lg:w-[550px] ">
          <div className="relative rounded-[14px] bg-white shadow-lg ">
            <div>
              <button
                className={`py-.5  ${
                  courseLesson ? "hidden" : "block"
                } absolute right-3 top-[13px]  mb-2 text-lg font-semibold text-black`}
                onClick={() => handleCloseModal()}
              >
                <Image
                  src="/svg/Shape.svg"
                  width="31"
                  height={100}
                  data-w-id="7c2a7a0b-ad0f-d296-1196-e6eb27d0ed85"
                  alt=""
                  class="image-82"
                />
              </button>
            </div>
            <div className="px-6  pb-6 pt-8 ">
              <div className=" flex flex-col-reverse items-center justify-center lg:flex-row">
                <div className="lg:basis-7/12">
                  <h3 className="pt-2.5 text-center text-2xl font-bold text-[#041c33] lg:pt-0 lg:text-left ">
                    {/* Unlock 50+ solved interview questions. Learn how to answer
                    the hardest PM interview questions for FREE! */}
                    {ctaTitle}
                  </h3>
                </div>
                <div className="flex items-center justify-center lg:basis-5/12 ">
                  <Image
                    src="/images/mock/modal.jpg"
                    loading="lazy"
                    width={208}
                    height={115}
                    sizes="100vw"
                    alt=""
                    className="image-93"
                  />
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-[#838a92] lg:text-start lg:text-[17px]">
                {/* Find most asked product design, improvement, metrics, execution,
                strategy and behavioral questions at one place. */}
                {subTitle}
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="rounded-b-[14px] bg-[#f5f7f7] py-6"
            >
              <div className="flex flex-col items-center justify-center space-y-3 lg:flex-row lg:space-x-2 lg:space-y-0 lg:py-3">
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    onChange={handleEmailChange}
                    className=" w-[280px] rounded-lg border  bg-white py-3 pl-4 pr-5 shadow-sm"
                  />
                </div>
                <p className=" text-xs font-medium text-red-500 lg:hidden">
                  {error}
                </p>

                <button
                  disabled={isProcessing}
                  className="rounded-md  bg-primary  px-8 py-3  font-medium text-white  hover:bg-primary_bold"
                >
                  {isProcessing && (
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="mr-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600"
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
                  {isProcessing ? "Loading" : "Start learning"}
                </button>
              </div>
              <p className="hidden pl-[52px] text-xs font-medium text-red-500 lg:block">
                {error}
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default LeadEmailModal;
