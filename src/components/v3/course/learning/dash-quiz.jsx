import Error from "@/pages/404";
import axios from "axios";
import { useEffect, useState } from "react";
import { Explanation } from "../../quiz";
import DashProgress from "./dash-progress";
import QuestionAnswerOption from "./question-answer-option";
import { BACKEND_API } from "@/src/config/backend";
import Loading from "@/pages/loading";

const DashQuiz = ({ quizId }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizData, setQuizData] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [progress, setProgress] = useState(0);
  const [answered, setAnswered] = useState(0);

  // For Quiz
  useEffect(() => {
    // Fetch quiz data when quizId changes
    const fetchQuizData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BACKEND_API}/quiz/${quizId}/info`);
        setQuizData(response?.data);
        setQuestions(response?.data?.questions);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (quizId) {
      fetchQuizData();
    }
  }, [quizId]);

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

  // handle saving and navigating next question
  const handleSaveAndNext = () => {
    if (selectedOptions[currentQuestion]) {
      handleNext();
      window.scrollTo({ top: 0 });
    }
  };

  // user answers a question
  const handleAnswerOption = (answer) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = {
      question_id: questions[currentQuestion]._id,
      selected_option_id: answer,
      selected_option_text: questions[currentQuestion].options.find(
        (option) => option.option_id === answer
      ).text,
    };

    const answeredQuestions = updatedSelectedOptions.filter(
      (option) => option?.selected_option_id !== undefined
    ).length;
    const totalQuestions = questions.length;
    const percentage = (answeredQuestions / totalQuestions) * 100;
    setProgress(percentage);
    setSelectedOptions(updatedSelectedOptions);
    setAnswered(answeredQuestions);
  };

  // handle explanation section
  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  if (loading)
    return (
      <div className='flex h-screen items-center justify-center'>
        <div className='h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900'></div>
      </div>
    );
  if (error) return <Error />;

  return (
    <div className='container mx-auto px-2 pb-16 sm:px-3 lg:max-w-4xl lg:py-[56px]'>
      <DashProgress
        quizData={quizData}
        progress={progress}
        answered={answered}
        questions={questions}
      />

      <div className='flex flex-col space-x-5 lg:flex-row'>
        <div className='w-full rounded-md border p-4 shadow lg:p-8'>
          <div className='mb-4'>
            <div>
              <p className='mb-2 text-xs font-semibold uppercase text-[#616161]'>
                Question {currentQuestion + 1}
              </p>
            </div>
            <p className='mb-4 text-lg font-semibold'>
              {questions[currentQuestion]?.question_text}
            </p>
            <div>
              {/* {selectedOptions[currentQuestion] && (
                <div className='my-4 flex flex-col '>
                  {selectedOptions[currentQuestion]?.selected_option_id ===
                  questions[currentQuestion]?.correct_option_id[0] ? (
                    <h4 className='text-primary'>Correct</h4>
                  ) : (
                    <h4 className='text-red-500'>Wrong</h4>
                  )}
                </div>
              )} */}
            </div>
            {questions[currentQuestion]?.options.map((option, index) => (
              <div key={index}>
                {selectedOptions[currentQuestion] == undefined ? (
                  <div
                    className={`mb-3 flex cursor-pointer items-center rounded-lg border px-3 py-3 ${
                      selectedOptions[currentQuestion]?.selected_option_id ===
                      option.option_id
                        ? "bg-[#EDE8F7] font-medium text-primary"
                        : ""
                    }`}
                    onClick={() => handleAnswerOption(option.option_id)}
                  >
                    <input
                      type='radio'
                      id={option?.option_id}
                      name='option'
                      value={option?.option_id}
                      onChange={() => handleAnswerOption(option?.option_id)}
                      checked={
                        option?.option_id ===
                        selectedOptions[currentQuestion]?.selected_option_id
                      }
                    />
                    <label
                      htmlFor={option?.text}
                      className='ml-2 text-base md:text-lg '
                    >
                      {option?.text}
                    </label>
                  </div>
                ) : (
                  <QuestionAnswerOption
                    key={index}
                    option={option}
                    index={index}
                    userAnswer={
                      selectedOptions[currentQuestion]?.selected_option_id
                    }
                    correctOption={
                      questions[currentQuestion]?.correct_option_id[0]
                    }
                  />
                )}
              </div>
            ))}
          </div>

          {selectedOptions[currentQuestion] && (
            <div className='my-4 flex flex-col '>
              <Explanation
                onTitleClick={onTitleClick}
                activeIndex={activeIndex}
                explanation={questions[currentQuestion]?.explanation}
                type='quiz'
              />
            </div>
          )}

          <div className='flex justify-between'>
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className='mr-2 rounded-lg border border-black px-4 py-2 font-semibold '
            >
              Previous
            </button>
            <button
              onClick={handleSaveAndNext}
              disabled={!selectedOptions[currentQuestion]}
              className='rounded-lg border border-black px-4 py-2 font-semibold'
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashQuiz;
