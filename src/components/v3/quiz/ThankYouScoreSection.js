// pages\quiz\[domainSlug]\[quizSlug]\thank-you.js

const ThankYouScoreSection = ({
  reportData,
  currentUser,
  router,
  domainSlug,
  quizSlug,
}) => {
  const navigateToReportPage = async () => {
    router.push(`/quiz/${domainSlug}/${quizSlug}/view-report`);
  };

  const formatScore = (score) => {
    return score < 10 ? `0${score}` : score;
  };

  // get a number from 30 to 40 
  const randomNumber = Math.floor(Math.random() * 10) + 30;


  const scoreMessage = (score) => {
    if (!currentUser?.email) {
      return (
        <>
          <h3 className="text-2xl font-bold md:text-4xl ">
            Umm! How well did you perform?
          </h3>
          <p className="py-3 text-lg">
            Get a detailed report card & identify your improvement areas
          </p>
        </>
      );
    }
    if (score <= 5) {
      return (
        <>
          <h3 className="text-2xl font-bold md:text-4xl ">Poor show!</h3>
          <p className="py-3 text-lg">
          You have miles to go before you ace this interview as a Product Manager
          </p>
        </>
      );
    } else if (score >= 6 && score <= 8) {
      return (
        <>
          <h3 className="text-2xl font-bold md:text-4xl ">Average show!</h3>
          <p className="py-3 text-lg">
            {randomNumber}% Product Managers have score higher than you
          </p>
        </>
      );
    } else {
      return (
        <>
          <h3 className="text-2xl font-bold md:text-4xl ">
            You just nailed it!
          </h3>
          <p className="py-3 text-lg">
            Congratulations! You are in the top 5% percentile!
          </p>
        </>
      );
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <div>{scoreMessage(reportData?.score)}</div>

        <div>
          <h2
            className={`rounded-[100%]  p-5 text-5xl font-bold ${
              reportData?.score <= 8
                ? "bg-[#FAF0F0] text-red-500"
                : "bg-[#d7f4d3] text-green-500"
            } ${!currentUser?.email && "blur"}`}
          >
            {formatScore(reportData?.score)}
          </h2>
        </div>
        <h4 className="py-5 text-lg font-semibold text-[#9e9e9e] lg:text-xl">
          out of {` `}
          {reportData?.responses?.length}
        </h4>
        <button
          onClick={() => {
            if (!currentUser?.email) {
              router.push(
                `/auth/login?redirect=${`/quiz/${domainSlug}/${quizSlug}/thank-you`}`
              );
            } else {
              navigateToReportPage();
            }
          }}
          className={`m-1 rounded-lg border bg-primary px-4 py-2 text-white hover:bg-primary_bold`}
        >
          {currentUser && currentUser?.email
            ? "View Report"
            : "Login to check score"}
        </button>
      </div>
    </>
  );
};

export default ThankYouScoreSection;
