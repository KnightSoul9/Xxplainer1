import Error from "@/pages/404";
import Loading from "@/pages/loading";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import ShareWhatsAppModal from "@/src/components/v1/Shared/Modal/ShareWhatsAppModal";
import {
  QuestionOption,
  QuestionReportTitle,
  ReportSummary,
  Steps,
} from "@/src/components/v3/quiz";
import Explanation from "@/src/components/v3/quiz/ViewReport/Explanation";
import RecommendCourses from "@/src/components/v3/quiz/ViewReport/RecommendCourses";
import { BACKEND_API } from "@/src/config/backend";
import { QUIZ_CONSTANT } from "@/src/constants/quiz";
import useAuthService from "@/src/hooks/auth/useAuthService";
import useFetchReportData from "@/src/hooks/useFetchReportData";
import PageLayout from "@/src/layout/PageLayout";
import { callAPI } from "@/src/services/api";
import { getQuizIdFromSlug } from "@/src/utils/quiz";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import ShortUniqueId from "short-unique-id";

const { randomUUID } = new ShortUniqueId({ length: 12 });

const ViewReportPage = () => {
  const router = useRouter();
  const { domainSlug, quizSlug } = router.query;
  const { currentUser } = useAuthService();
  const viewReportPath = router.pathname.split("/").pop();
  const [firstQuestionVisible, setFirstQuestionVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const quiz_id = getQuizIdFromSlug(quizSlug);
  const quizAttemptHistory = localStorage.getItem(
    QUIZ_CONSTANT.QUIZ_ATTEMPT_LS_KEY
  );
  const quizAttemptId =
    quizAttemptHistory && JSON.parse(quizAttemptHistory || {})[quiz_id];

  // src\hooks\useFetchReportData.js
  const { reportData } = useFetchReportData(quizSlug, quizAttemptId);

  const [questions, setQuestions] = useState([]);
  const [quizQuestions, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showQuestions, setShowQuestions] = useState(() => {
    const initialShowQuestions = new Array(questions?.length).fill(false);
    initialShowQuestions[0] = true;
    return initialShowQuestions;
  });
  const [activeIndex, setActiveIndex] = useState(null);
  const [wShared, setWShared] = useState(false);
  // const wSharedQuizId = localStorage.getItem("wSharedQuizId");

  const firstQuestionRef = useRef(null);

  // handle scroll event
  const handleScroll = () => {
    const footerSection = document.getElementById("footer");
    const footerRect = footerSection.getBoundingClientRect();

    if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
      setFirstQuestionVisible(false);
    } else {
      if (window.scrollY >= window.innerHeight / 2) {
        setFirstQuestionVisible(true);
        setShowModal(true);
      } else {
        setFirstQuestionVisible(false);
        setShowModal(false);
      }
    }
  };

  // fetch quiz data
  useEffect(() => {
    const fetchQuizData = async () => {
      setLoading(true);
      try {
        const quizId = quizSlug.split("-").pop();
        const response = await axios.get(`${BACKEND_API}/quiz/${quizId}/info`);
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [quizSlug]);

  // handle WhatsApp sharing
  const handleShareWhatsApp = async () => {
    const referral_id = randomUUID();

    const message = encodeURIComponent(
      `Hi 👋 How are you?\n\nI just checked out this cool Tech for Product Manager quiz on Xplainerr. I thought of sharing with you.\n\nTry it out - https://www.xplainerr.com/quiz/${domainSlug}/${quizSlug}?referral=${referral_id}`
    );

    setTimeout(() => {
      setShowQuestions(new Array(questions.length).fill(true));
      setShowModal(false);
      setWShared(true);
    }, 10000);

    // generate a referral
    await callAPI({
      endpoint: "/quiz/referral",
      method: "POST",
      bodyData: {
        referral_id,
        quiz_id,
        email: currentUser.email,
        attempt_id: quizAttemptId,
      },
    });

    // localStorage.setItem("wSharedQuizId", quizSlug);

    window.open(`https://api.whatsapp.com/send?text=${message}`);
  };

  useEffect(() => {
    if (wShared) {
      setShowModal(false);
    }
  }, [wShared]);

  // handle explanation section
  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!currentUser?.email) return <Loading />;

  return (
    <div>
      <>
        <CommonHead
          title={`Quiz Report | ${quizSlug}`}
          description={`Quiz Report | ${quizSlug}`}
          favIcon={"/favicon.ico"}
        />
        {quizQuestions && (
          <>
            <PageLayout>
              <div className="container mx-auto px-4 pb-16 lg:max-w-6xl lg:py-[56px]">
                {/* Steps  */}
                <Steps
                  currentUser={currentUser}
                  reportData={reportData}
                  viewReportPath={viewReportPath}
                  quizAttemptId={quizAttemptId}
                />
                <h1 className="container mx-auto mb-4 pt-5 text-xl font-bold lg:w-3/4 lg:pt-0 lg:text-start">
                  {quizQuestions.quiz_title}
                </h1>

                {/* Main Body */}
                <div>
                  <div>
                    <div className="container mx-auto  grid grid-cols-1 gap-5 lg:w-3/4 ">
                      <ReportSummary reportData={reportData} />
                      {/* questions and answers section */}
                      {questions?.map((el, index) => {
                        const checkId = reportData?.responses?.find(
                          (option) => option?.question_id === el._id
                        );
                        const userAnswer = checkId?.selected_option_id;
                        const correctOption = checkId?.correct_option_id;
                        const explanation = checkId?.explanation;

                        const isCorrect =
                          userAnswer &&
                          correctOption &&
                          correctOption.every((option) =>
                            userAnswer.includes(option)
                          );

                        const blurEffect =
                          index > 0 && !showQuestions[index]
                            ? "blur(5px)"
                            : "blur(0)";

                        return (
                          <div key={index} className="relative">
                            {wShared == false &&
                              // wSharedQuizId !== quizSlug
                              index > 0 &&
                              firstQuestionVisible && (
                                // <ShareWhatsApp
                                //   handleShareWhatsApp={handleShareWhatsApp}
                                // />
                                <ShareWhatsAppModal
                                  showModal={showModal}
                                  setShowModal={setShowModal}
                                  handleShareWhatsApp={handleShareWhatsApp}
                                />
                              )}

                            <div
                              ref={index === 0 ? firstQuestionRef : null}
                              key={index}
                              className={` rounded-xl  pt-5  ${
                                userAnswer
                                  ? isCorrect
                                    ? "border-2 border-primary"
                                    : "border-2 border-red-500"
                                  : "border-2"
                              }`}
                              //     wSharedQuizId == quizSlug
                              style={{
                                filter: wShared ? "none" : blurEffect,
                              }}
                            >
                              <div className="px-4 lg:px-5">
                                <p className="mb-2 text-xs font-semibold uppercase text-[#616161]">
                                  Question : {index + 1}
                                </p>
                                <p className="mb-3 text-[15px] font-semibold lg:text-[17px]">
                                  {el?.question_text}
                                </p>
                                <QuestionReportTitle
                                  userAnswer={userAnswer}
                                  isCorrect={isCorrect}
                                />
                                <div>
                                  {el?.options.map((option, index) => {
                                    return (
                                      <QuestionOption
                                        key={index}
                                        option={option}
                                        index={index}
                                        userAnswer={userAnswer}
                                        correctOption={correctOption}
                                      />
                                    );
                                  })}
                                </div>
                              </div>
                              {/* Explanation  */}
                              <Explanation
                                index={index}
                                onTitleClick={onTitleClick}
                                activeIndex={activeIndex}
                                explanation={explanation}
                              />
                            </div>
                          </div>
                        );
                      })}

                      {/* Recommend Courses*/}
                      <RecommendCourses
                        title={"Tech For Product Managers"}
                        heading={"Want to learn more?"}
                        description={`Crack tech rounds of PM Interviews with ease!`}
                        recommendedSlug={`/cohorts/tech-for-product-managers`}
                        image={`/quiz/XPS.png`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </PageLayout>
          </>
        )}
      </>
    </div>
  );
};

export default ViewReportPage;
