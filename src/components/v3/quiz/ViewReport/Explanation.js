// pages\quiz\[domainSlug]\[quizSlug]\view-report.js
// src\components\v3\course\learning\dash-quiz.jsx

import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Explanation = ({
  index,
  onTitleClick,
  activeIndex,
  explanation,
  type,
}) => {
  return (
    <div
      key={index}
      className={`mb-1  rounded-md border-t bg-[#FAFAFA] px-2 py-4 ${
        type == "quiz" ? "mt-2" : "mt-8"
      }`}
    >
      <div
        className={`flex cursor-pointer items-center justify-between  text-lg  ${
          type == "quiz" ? "px-0" : "px-4 lg:px-5"
        }`}
        onClick={() => onTitleClick(index)}
      >
        <p className='text-sm font-medium'>Explanation</p>
        <div className=''>
          {activeIndex === index ? (
            <BsChevronUp size={18} />
          ) : (
            <BsChevronDown size={18} />
          )}
        </div>
      </div>
      <div
        className={`mt-3 rounded  text-gray-600  ${
          activeIndex === index ? "block" : "hidden"
        } ${type == "quiz" ? "px-0 text-sm" : "px-4 lg:px-5"}`}
      >
        {explanation}
      </div>
    </div>
  );
};

export default Explanation;
