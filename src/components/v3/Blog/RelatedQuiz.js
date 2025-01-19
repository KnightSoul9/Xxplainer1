import { AllQuiz } from "../quiz";

const RelatedQuiz = ({ uniqueRelatedData, domainSlug }) => {
  return (
    <div className='py-12'>
      <h3 className='pb-2 text-lg font-semibold'>Related Quiz</h3>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
        {uniqueRelatedData?.slice(0, 4)?.map((quiz, index) => {
          return <AllQuiz key={index} quiz={quiz} domainSlug={domainSlug} />;
        })}
      </div>
    </div>
  );
};

export default RelatedQuiz