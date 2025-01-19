import { useRouter } from "next/router";
import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import PageLayout from "@/src/layout/PageLayout";
import toast from "react-hot-toast";
import useAuthService from "@/src/hooks/auth/useAuthService";
import Loading from "@/pages/loading";
import Error from "@/pages/404";
import { BACKEND_API } from "@/src/config/backend";
import { QuizStartPage, TimerProgress } from "@/src/components/v3/quiz";
import { QUIZ_CONSTANT, QUIZ_TECH_PM_DATA } from "@/src/constants/quiz";
import QuizStartSkelton from "@/src/components/common/loading/QuizStartSkelton";
// import { LoginModal } from "@/src/components/v1/Shared/Modal";

const QuizPage = () => {
  const router = useRouter();
  const { domainSlug, quizSlug } = router.query;
  const { currentUser } = useAuthService();

  const [isProcessing, setIsProcessing] = useState(false);
  const [answered, setAnswered] = useState(0);

  const [quizData, setQuizData] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [timer, setTimer] = useState(
    quizData?.metaData?.quiz_duration * 60 || 600
  );

  const [progress, setProgress] = useState(0);
  // For start quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const handleStartQuiz = () => {
    setQuizStarted(true);
  };
  // console.log(timer, quizData, "timer,quizData");

  const [attemptData, setAttemptData] = useState(null);

  // get attemptData from local storage
  useEffect(() => {
    const storedAttemptData = JSON.parse(
      localStorage.getItem(QUIZ_CONSTANT.QUIZ_ATTEMPT_LS_KEY)
    );
    setAttemptData(storedAttemptData);
  }, []);

  // checking if quiz has been attempted before
  const isQuizAttempted = () => {
    return attemptData && attemptData.hasOwnProperty(quizData?._id);
  };

  // handle start quiz or view quiz report action
  const handleQuizAction = () => {
    if (isQuizAttempted()) {
      router.push(`/quiz/${domainSlug}/${quizSlug}/view-report`);
    } else {
      setQuizStarted(true);
    }
  };

  useEffect(() => {
    if (quizData && quizData?.metaData && quizData?.metaData?.quiz_duration) {
      setTimer(quizData?.metaData?.quiz_duration * 60);
    }
    // Fetch quiz data when quizSlug changes
    const fetchQuizData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://xplainerr-api-2be9e1965d8f.herokuapp.com/api/v1/quiz/${quizSlug
            .split("-")
            .pop()}/info`
        );
        setQuizData(response?.data);
        setQuestions(response?.data?.questions);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (quizSlug) {
      fetchQuizData();
    }
  }, [quizSlug]);

  // decrement timer every second
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          handleSubmitQuiz();
          clearInterval(timerInterval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  // update selectedOptions when user answers a question
  const handleAnswerOption = (answer) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = {
      question_id: questions[currentQuestion]._id,
      selected_option_id: answer,
    };
    setSelectedOptions(updatedSelectedOptions);
  };

  // handle saving and navigating  next question
  const handleSaveAndNext = () => {
    const currentAnswer = selectedOptions[currentQuestion]?.selected_option_id;
    if (!currentAnswer) {
      toast.error("Please select an answer.", {
        position: "top-center",
      });
      return;
    }

    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = {
      question_id: questions[currentQuestion]._id,
      selected_option_id: currentAnswer,
    };

    const answeredQuestions = updatedSelectedOptions.filter(
      (option) => option?.selected_option_id !== undefined
    ).length;
    const totalQuestions = questions.length;
    const percentage = (answeredQuestions / totalQuestions) * 100;
    setProgress(percentage);
    setAnswered(answeredQuestions);

    setSelectedOptions(updatedSelectedOptions);
    localStorage.setItem(
      "selectedOptions",
      JSON.stringify(updatedSelectedOptions)
    );

    if (currentQuestion === questions.length - 1) {
      handleSubmitQuiz();
    } else {
      handleNext();
      window.scrollTo({ top: 0 });
    }
  };

  // handle navigation to previous question
  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
    window.scrollTo({ top: 0 });
  };

  // handle navigation to next question
  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  // handle submit the quiz and call the submit api
  const handleSubmitQuiz = async () => {
    const storedOptions = JSON.parse(localStorage.getItem("selectedOptions"));

    const totalTimeTaken = quizData?.metaData?.quiz_duration * 60 - timer;
    setIsProcessing(true);

    const unansweredIndex = storedOptions?.findIndex(
      (option) => option === null
    );
    if (unansweredIndex !== -1) {
      setCurrentQuestion(unansweredIndex);

      toast.error("Please answer this before submitting.", {
        position: "top-center",
      });
      return;
    }

    let referral = router?.query?.referral || "";

    try {
      const response = await axios.post(
        `${BACKEND_API}/quiz/${quizData._id}/submit-quiz`,
        {
          quiz_id: quizData._id,
          responses: storedOptions,
          total_time_taken: totalTimeTaken,
          referral_id: referral,
        }
      );
      console.log("Quiz submitted successfully:", response, response.data.doc);
      const attemptPayload = {
        [quizData._id]: response.data.doc,
      };
      localStorage.setItem(
        QUIZ_CONSTANT.QUIZ_ATTEMPT_LS_KEY,
        JSON.stringify(attemptPayload)
      );

      localStorage.removeItem("selectedOptions");
      router.push(`/quiz/${domainSlug}/${quizSlug}/thank-you`);
    } catch (error) {
      console.error("Error submitting quiz", error);
    }
  };

  // format timer into minutes and seconds
  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // handle clicking on question buttons for navigation
  const handleQuestionButtonClick = (index) => {
    setCurrentQuestion(index);
    window.scrollTo({ top: 0 });
  };

  // check if a question is answered
  const isQuestionAnswered = (questionId) => {
    const storedOptions = JSON.parse(localStorage.getItem("selectedOptions"));
    return (
      storedOptions &&
      storedOptions.some((option) => option?.question_id === questionId)
    );
  };

  // if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <PageLayout>
        {/* Start Page  */}
        {loading ? (
          <QuizStartSkelton />
        ) : (
          <>
            {!quizStarted && (
              <QuizStartPage
                onStartQuiz={handleStartQuiz}
                quizData={quizData}
                domainSlug={domainSlug}
                quizSlug={quizSlug}
                handleQuizAction={handleQuizAction}
                isQuizAttempted={isQuizAttempted}
                quizTechPmData={QUIZ_TECH_PM_DATA}
                instruction={`Why this Quiz?`}
              />
            )}
          </>
        )}

        {/* Main Page  */}
        {quizStarted && (
          <>
            <div className='container mx-auto px-2 pb-16 sm:px-3 lg:max-w-4xl lg:py-[56px]'>
              <TimerProgress
                formatTimer={formatTimer}
                progress={progress}
                answered={answered}
                questions={questions}
                quizData={quizData}
              />

              <div className='flex flex-col space-x-5 lg:flex-row'>
                <div className='w-full rounded-md border p-4 shadow  lg:p-8'>
                  <div className='mb-4'>
                    <div>
                      <p className='mb-2 text-xs font-semibold uppercase text-[#616161]'>
                        Question {currentQuestion + 1}
                      </p>
                    </div>
                    <p className='mb-4 text-lg font-semibold'>
                      {questions[currentQuestion]?.question_text}
                    </p>
                    {questions[currentQuestion]?.options.map(
                      (option, index) => (
                        <div
                          key={index}
                          className={`mb-3 flex cursor-pointer items-center rounded-lg border px-3 py-3 ${
                            selectedOptions[currentQuestion]
                              ?.selected_option_id === option.option_id
                              ? " bg-[#EDE8F7] font-medium text-primary"
                              : ""
                          }`}
                          onClick={() => handleAnswerOption(option.option_id)}
                          // onMouseEnter={(e) =>
                          //   e.target.classList.add("bg-[#ededed]")
                          // }
                          // onMouseLeave={(e) =>
                          //   e.target.classList.remove("bg-[#ededed]")
                          // }
                        >
                          <input
                            type='radio'
                            id={option?.option_id}
                            name='option'
                            value={option?.option_id}
                            onChange={() =>
                              handleAnswerOption(option?.option_id)
                            }
                            checked={
                              option?.option_id ===
                              selectedOptions[currentQuestion]
                                ?.selected_option_id
                            }
                          />
                          <label
                            htmlFor={option?.text}
                            className='ml-2 text-base md:text-lg '
                          >
                            {option?.text}
                          </label>
                        </div>
                      )
                    )}
                  </div>
                  <div className='flex justify-between'>
                    <button
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      className='mr-2 rounded-lg border border-black px-4 py-2 font-semibold '
                    >
                      Previous
                    </button>
                    {/* <button
                          onClick={handleSaveAndNext}
                          className="rounded-lg border border-black px-4 py-2 font-semibold "
                        >
                          {currentQuestion === questions?.length - 1
                            ? "Submit"
                            : "Save & Next"}
                        </button> */}
                    <button
                      // {isProcessing ? 'disabled' : ''}
                      disabled={isProcessing}
                      onClick={handleSaveAndNext}
                      className='rounded-lg border border-black px-4 py-2 font-semibold'
                    >
                      {isProcessing && (
                        <svg
                          aria-hidden='true'
                          role='status'
                          class='mr-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600'
                          viewBox='0 0 100 101'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                            fill='currentColor'
                          />
                          <path
                            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                            fill='#1C64F2'
                          />
                        </svg>
                      )}
                      {isProcessing ? (
                        "Submitting..."
                      ) : (
                        <>
                          {currentQuestion === questions?.length - 1
                            ? "Submit"
                            : "Save & Next"}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </PageLayout>
    </div>
  );
};

// const QuizNavigatorContainer = () => {
//   return (
//     <div className="hidden rounded-md border p-8 shadow lg:block lg:w-1/4">
//     <div className="mb-4 flex justify-between ">
//       <p className="flex items-center justify-center rounded-lg border  border-[#eee] bg-[#fafafa] px-4 font-semibold ">
//         {/* 15.00 */}
//         {formatTimer()}
//       </p>
//       <button
//         onClick={handleSaveAndNext}
//         className="rounded-lg border border-black px-4 py-2 font-semibold "
//       >
//         {currentQuestion === questions?.length - 1
//           ? "Submit"
//           : "Save & Next"}
//       </button>
//     </div>
//     <hr />
//     <div>
//       <h2 className="py-3 text-2xl font-bold">Questions</h2>
//       <div className="mb-4 flex items-center">
//         <div className="mr-6 flex items-center text-sm leading-normal">
//           <span className="mr-2 h-3 w-3 rounded-full bg-blue-500"></span>
//           Answered
//         </div>
//         <div className="flex items-center text-sm leading-normal">
//           <span className="mr-2 h-3 w-3 rounded-full border border-gray-300 bg-white"></span>
//           Unanswered
//         </div>
//       </div>

//       <div className="grid grid-cols-3 gap-4">
//         {questions.map((q, index) => (
//           <button
//             key={index}
//             onClick={() => handleQuestionButtonClick(index)}
//             className={`m-1 rounded-lg px-4 py-2 ${
//               isQuestionAnswered(q._id)
//                 ? currentQuestion === index
//                   ? "border border-[#4d5e54] bg-[#EDE8F7] font-semibold "
//                   : "bg-[#EDE8F7] font-semibold "
//                 : currentQuestion === index
//                 ? "border border-[#212121] font-semibold"
//                 : "border border-[#eee]"
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   </div>
//   )
// }

export default QuizPage;
