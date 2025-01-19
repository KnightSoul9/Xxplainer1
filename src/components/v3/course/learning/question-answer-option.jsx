import { FaRegRectangleXmark } from "react-icons/fa6";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

const QuestionAnswerOption = ({ option, index, correctOption, userAnswer }) => {
  const correctColor = "bg-[#edf2fa] text-primary";
  const inCorrectColor = "bg-[#fff4f4] text-red-500";
  const neutralColor = "text-black";

  let colorOption;
  if (option?.option_id === correctOption) {
    colorOption = correctColor;
  } else if (option?.option_id === userAnswer) {
    colorOption = inCorrectColor;
  } else {
    colorOption = neutralColor;
  }

  return (
    <div key={index} className={`mb-3  flex items-center`}>
      <div>
        <OptionSymbol
          option={option?.option_id}
          correctOption={correctOption}
          userAnswer={userAnswer}
        />
      </div>
      <p
        className={`ml-2 w-full rounded-lg border px-3 py-2 text-base  md:text-lg ${colorOption}`}
      >
        {option.text}
      </p>
    </div>
  );
};

const OptionSymbol = ({ option, correctOption, userAnswer }) => {
  if (option === correctOption) {
    return <MdOutlineCheckBox size={22} className='basis-1/12 text-primary' />;
  } else if (option === userAnswer) {
    return (
      <FaRegRectangleXmark
        size={18}
        className='ml-[2px] basis-1/12 text-red-400'
      />
    );
  } else {
    return (
      <MdOutlineCheckBoxOutlineBlank
        size={22}
        className='basis-1/12 text-gray-300'
      />
    );
  }
};

export default QuestionAnswerOption;
