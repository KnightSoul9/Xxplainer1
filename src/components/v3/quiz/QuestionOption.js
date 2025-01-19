// pages\quiz\[domainSlug]\[quizSlug]\view-report.js

import { QUIZ_OPTION_STATE } from "@/src/config/quiz";
import { getOptionState } from "@/src/utils/quiz";
import { FaRegRectangleXmark } from "react-icons/fa6";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

const QuestionOption = ({ option, index, correctOption, userAnswer }) => {
  const optionState = getOptionState({
    userAnswer,
    correctOption,
    optionIndex: index,
  });

  const correctColor = "bg-[#edf2fa]  text-primary";
  const inCorrectColor = "bg-[#fff4f4] text-red-500";
  const neutralColor = "text-black";

  let colorOption;

  if (optionState === QUIZ_OPTION_STATE.CORRECT) {
    colorOption = correctColor;
  } else if (optionState === QUIZ_OPTION_STATE.INCORRECT) {
    colorOption = inCorrectColor;
  } else {
    colorOption = neutralColor;
  }

  return (
    <div key={index} className={`mb-3  flex items-center`}>
      <div>
        <OptionSymbol optionState={optionState} />
      </div>
      <p
        htmlFor={option?.text}
        className={`ml-2 w-full rounded-lg border  px-3 py-2 text-sm lg:text-[16.5px] ${colorOption}`}
      >
        {option?.text}
      </p>
    </div>
  );
};

const OptionSymbol = ({ optionState }) => {
  if (optionState === QUIZ_OPTION_STATE.CORRECT) {
    return <MdOutlineCheckBox size={22} className="basis-1/12 text-primary" />;
  }

  if (optionState === QUIZ_OPTION_STATE.INCORRECT) {
    return (
      <FaRegRectangleXmark
        size={18}
        className="ml-[2px] basis-1/12 text-red-400"
      />
    );
  }

  return (
    <MdOutlineCheckBoxOutlineBlank
      size={22}
      className="basis-1/12 text-gray-300"
    />
  );
};

export default QuestionOption;
