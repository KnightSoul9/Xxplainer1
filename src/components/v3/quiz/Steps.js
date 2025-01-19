// pages\quiz\[domainSlug]\[quizSlug]\view-report.js
// pages\quiz\[domainSlug]\[quizSlug]\thank-you.js


import { FaCheckCircle } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";

const Steps = ({ reportData, currentUser, viewReportPath, quizAttemptId }) => {
  console.log(quizAttemptId);
  return (
    <div className="hidden sm:block ">
      <div className="container mx-auto rounded-xl  shadow-sm lg:mb-8 lg:w-3/4 ">
        <div className="pt-5 md:pt-0">
          <ol
            className={`grid grid-cols-1 divide-x divide-[#b2ffb6] overflow-hidden rounded-lg border-b border-t  text-sm text-gray-500 sm:grid-cols-3 `}
          >
            <li
              className={`relative flex items-center justify-center gap-2 pl-4 ${
                quizAttemptId ? `bg-[#b2ffb6]` : ""
              }`}
            >
              {quizAttemptId ? (
                <FaCheckCircle className="text-sm text-primary md:text-lg" />
              ) : (
                <RiErrorWarningLine className="text-base text-[#fda256] md:text-xl" />
              )}

              <p className="text-xs leading-none md:text-lg">
                <strong className="block font-medium"> Quiz attempted </strong>
              </p>
              {quizAttemptId && (
                <>
                  <span
                    className={`absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border ltr:border-b-0 ltr:border-s-0 ltr:bg-[#b2ffb6] rtl:border-e-0 rtl:border-t-0 rtl:bg-[#b2ffb6] sm:block`}
                    style={{ background: `#b2ffb6` }}
                  ></span>
                </>
              )}
            </li>

            <li
              className={`relative flex items-center justify-center gap-2  p-4 ${
                currentUser?.email && reportData?.score > -1 && `bg-[#b2ffb6]`
              }`}
            >
              {currentUser?.email && reportData?.score > -1 ? (
                <FaCheckCircle className="text-sm text-primary md:text-lg" />
              ) : (
                <RiErrorWarningLine className="text-base text-[#fda256] md:text-xl" />
              )}

              <p className="text-xs leading-none md:text-lg">
                <strong className="block font-medium"> View score </strong>
              </p>
              {currentUser?.email && reportData?.score > -1 && (
                <>
                  <span
                    className={`absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45  ltr:border-b-0 ltr:border-s-0  rtl:border-e-0 rtl:border-t-0  sm:block`}
                    style={{ background: `#b2ffb6` }}
                  ></span>
                </>
              )}
            </li>

            <li
              className={`flex items-center justify-center gap-2 p-4 ${
                viewReportPath === "view-report" &&
                reportData?.responses?.length > 0
                  ? `bg-[#b2ffb6]`
                  : ""
              }`}
            >
              {viewReportPath === "view-report" &&
              reportData?.responses?.length > 0 ? (
                <FaCheckCircle className="text-sm text-primary md:text-lg" />
              ) : (
                <RiErrorWarningLine className="text-base text-[#fda256] md:text-xl" />
              )}

              <p className="text-xs leading-none md:text-lg">
                <strong className="block font-medium"> View report </strong>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Steps;
