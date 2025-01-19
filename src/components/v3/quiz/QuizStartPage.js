// pages\quiz\[domainSlug]\[quizSlug]\index.js
import useAuthService from "@/src/hooks/auth/useAuthService";
import { formattedDomainSlug } from "@/src/utils/quiz";
import { GoQuestion } from "react-icons/go";
import { MdOutlineAccessTime } from "react-icons/md";

const QuizStartPage = ({
  onStartQuiz,
  quizData,
  instruction,
}) => {
  const { currentUser } = useAuthService();
  console.log(quizData, "quizStart page");

  return (
    <>
      
      <div className="relative ">
        {/* bg gradient  */}
        <div className="h-[96px] bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% lg:h-60 "></div>
        {/* Card  */}
        <div className="container absolute left-0 right-0 top-1/2  mx-auto rounded-xl bg-white px-5 pb-1 shadow-xl sm:px-5 sm:pb-12 lg:max-w-2xl lg:px-12 lg:py-[56px]">
          <div>
            <h3 className="mb-4 mt-5 text-center text-xl font-bold text-black lg:mt-0 lg:text-[28px]">
              {formattedDomainSlug(quizData)}
              {/* Test your tech skills as a Product Manager */}
            </h3>
            <div className="my-3 flex items-center justify-center space-x-5 text-gray-600">
              <div className="flex items-center space-x-1">
                <GoQuestion />
                <p>{quizData?.questions?.length} Questions</p>
              </div>
              <div className="flex items-center space-x-1">
                <MdOutlineAccessTime />
                <p>{quizData?.metaData?.quiz_duration} Mins</p>
              </div>
            </div>
            {/***************************** Summary *****************************/}

            {/***************************** Instructions *****************************/}
            <div className="relative flex items-center  py-5">
              <div className="flex-grow border-t border-[#bdbdbd]"></div>
              <span className="mx-4 flex-shrink font-semibold">
                {instruction}
              </span>
              <div className="flex-grow border-t border-[#bdbdbd]"></div>
            </div>

            <ul className="py-2 pl-4 ">
              {quizData?.seoMetaData?.feature_info?.map((el, index) => {
                return (
                  <li
                    key={index}
                    style={{ listStyleType: "disc" }}
                    className="pb-1"
                  >
                    {el}
                  </li>
                );
              })}
            </ul>
            {/***************************** button  *****************************/}
            <div className="mt-3 flex items-center justify-center">
              <button
                onClick={() => {
                  onStartQuiz();
                }}
                className={`mr-2 rounded-md border bg-primary px-4 py-2 font-semibold text-white `}
              >
                {currentUser && currentUser?.email
                  ? "Start quiz"
                  : "Start quiz"}
              </button>
            </div>
          </div>
        </div>
        <div className="mb-[500px]"></div>
      </div>
    </>
  );
};

export default QuizStartPage;
