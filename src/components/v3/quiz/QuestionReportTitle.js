// pages\quiz\[domainSlug]\[quizSlug]\view-report.js

const QuestionReportTitle = ({ userAnswer, isCorrect }) => {
  return (
    <div className="mb-5 text-[#616161]">
      {userAnswer ? (
        <p
          className={`font-semibold ${
            isCorrect ? "text-primary" : "text-red-500"
          }`}
        >
          {isCorrect ? "Correct" : "Incorrect"}
        </p>
      ) : (
        <p className="font-semibold">No answer</p>
      )}
    </div>
  );
};

export default QuestionReportTitle