// pages\quiz\[domainSlug]\[quizSlug]\view-report.js

const ReportSummary = ({ reportData }) => {
  const formatScore = (score) => {
    return score < 10 ? `0${score}` : score;
  };

  const totalResponses = reportData?.responses?.length || 0;
  const correctAnswers = reportData?.score || 0;
  const incorrectAnswers = totalResponses - correctAnswers;

  return (
    <div className=" mb-3 flex items-center justify-between gap-5 rounded-xl border p-5 text-center lg:px-10">
      <div>
        <h4 className="text-xl font-bold text-primary">
          {formatScore(reportData?.score)}
        </h4>
        <p className="text-[15px] lg:text-[17px] font-medium text-[#616161]">Correct</p>
      </div>
      <div>
        <h4 className="text-xl font-bold text-red-500">
          {formatScore(incorrectAnswers)}
        </h4>
        <p className="text-[15px] lg:text-[17px] font-medium text-[#616161]">Incorrect</p>
      </div>
      <div>
        <h4 className=" text-xl font-bold">
          {formatScore(reportData?.responses?.length)}
        </h4>
        <p className="text-[15px] lg:text-[17px] font-medium text-[#616161]">Total</p>
      </div>
    </div>
  );
};

export default ReportSummary