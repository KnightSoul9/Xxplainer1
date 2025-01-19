import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_API } from "../config/backend";

const useAllQuiz = (domainSlug) => {
  // console.log(quizSlug)
  const [allQuiz, setAllQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchQuizData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${BACKEND_API}/quiz/get-quiz-list?domain=${domainSlug}`
      );
      setAllQuiz(response?.data?.response);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  if (domainSlug) {
    fetchQuizData();
  }
}, [domainSlug]);

  return { allQuiz, loading , error };
};

export default useAllQuiz;
