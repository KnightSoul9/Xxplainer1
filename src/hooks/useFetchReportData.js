import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_API } from "../config/backend";

const useFetchReportData = (quizSlug, quizAttemptId) => {
  // console.log(quizSlug)
  const [reportData, setReportData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReportData = async () => {
      if (!quizAttemptId || !quizSlug) {
        setLoading(false);
        return;
      }
      const quizId = quizSlug.split("-").pop();
      // console.log(quizId)
      const apiUrl = `${BACKEND_API}/quiz/${quizId}/view-report`;
      // console.log(quizId , userId)

      try {
        const response = await axios.post(apiUrl, {
          quiz_id: quizId,
          attempt_id: quizAttemptId,
        });
        setReportData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("error", error);
        setLoading(false);
      }
    };

    fetchReportData();
  }, [quizSlug]);

  return { reportData, loading };
};

export default useFetchReportData;
