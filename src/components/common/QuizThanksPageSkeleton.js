// pages\quiz\[domainSlug]\[quizSlug]\thank-you.js

const QuizThanksPageSkeleton = () => (
  <div className="flex flex-col items-center justify-center text-center">
    {/* Placeholder for score message */}
    <div className="w-full max-w-xl animate-pulse rounded-md py-10">
      <div className="flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 rounded bg-gray-300"></div>
          <div className="space-y-3">
            <div className="h-2 rounded bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
    {/* Placeholder for score */}
    <div className="h-32 w-32 rounded-full bg-gray-300"></div>
    <div className="py-5 text-lg font-semibold text-gray-300 lg:text-xl"></div>
    <div className="h-10 w-40 rounded-lg bg-gray-300"></div>
  </div>
);

export default QuizThanksPageSkeleton;
