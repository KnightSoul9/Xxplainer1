import { BACKEND_API } from "@/src/config/backend";
import axios from "axios";
import { useEffect, useState } from "react";
import CardLoadingSkeltonContainer from "../../common/loading/CardLoadingSkelton";
import { AllQuiz } from "../../v3/quiz";
import SectionHeading from "../Shared/sectionHeading";

const HomeQuiz = () => {
  const domainSlug = "product-management";
  const [allQuiz, setAllQuiz] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BACKEND_API}/quiz/get-quiz-list?domain=${domainSlug}`
        );
        setAllQuiz(response?.data?.response);
        setLoading(false);

        console.log(response, "RESPONSE");
      } catch (error) {
        setLoading(false);
      }
    };

    if (domainSlug) {
      fetchQuizData();
    }
  }, [domainSlug]);

  const formattedDomainSlug = domainSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  return (
    <div className='container mx-auto px-4 pb-16 lg:max-w-7xl lg:py-7'>
      <div className='pb-5'>
        <SectionHeading heading={formattedDomainSlug} />
      </div>
      <div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
          {loading ? (
              <CardLoadingSkeltonContainer itemCount={4} />
          ) : (
            <>
              {allQuiz?.slice(0, 4)?.map((quiz, index) => {
                return (
                  <AllQuiz key={index} quiz={quiz} domainSlug={domainSlug} />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeQuiz;
