// pages\quiz\[domainSlug]\[quizSlug]\index.js

import { formattedDomainSlug } from "@/src/utils/quiz";

const TimerProgress = ({
  formatTimer,
  progress,
  answered,
  questions,
  quizData,
}) => {
  

  return (
    <div className="px-2 pt-5 text-center  lg:pt-0 lg:text-start">
      <div className="flex flex-col px-0 lg:flex-row lg:items-center  lg:justify-between">
        <h2 className="mb-2 text-center text-2xl font-bold">
          {/* {quizData?.quiz_title} */}
          {formattedDomainSlug(quizData)}
        </h2>
        <p className="hidden rounded-lg border border-[#eee] bg-[#fafafa] px-4 text-lg font-semibold lg:block ">
          {formatTimer()}
        </p>
      </div>
      <div className="py-3  lg:hidden">
        <p className="container mx-auto  flex w-20 items-center justify-center rounded-lg border  border-[#eee] bg-[#fafafa] px-4 font-semibold ">
          {formatTimer()}
        </p>
      </div>
      <div className="space-x- mb-4 mt-5 flex items-center justify-between space-x-2">
        <div className="relative h-3 basis-11/12 rounded-2xl bg-gray-200">
          <div
            className="h-full rounded-2xl bg-primary"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="bassi-1/12 rounded-2xl bg-primary px-4 text-lg font-semibold text-white">
          {answered}/{questions?.length}
        </p>
      </div>
    </div>
  );
};

export default TimerProgress