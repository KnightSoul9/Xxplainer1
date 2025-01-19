import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { APP_CONSTANT } from "../config/constants";
import useAuthService from "../hooks/auth/useAuthService";
import useCourseAccess from "../hooks/auth/useCourseAccess";
import { checkout } from "../utils/checkout";

export const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadTriggerType, setLeadTriggerType] = useState(null);
  const [course, setCourse] = useState({});
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [userCourses, setUserCourses] = useState([]);

  const router = useRouter();
  const courseSlug = router.route.split("/")[2];
  const { hasCourseAccess, courseId } = useCourseAccess(courseSlug);
  const { isAuthenticated, currentUser } = useAuthService();

  const updateCourseState = (course) => {
    setCourse(course);
  };

  const updateUserPurchasedCourses = (courses) => {
    setUserCourses(courses);
  };

  const handleCoursePayment = (paymentMode) => {
    if (paymentMode === APP_CONSTANT.PAYMENT_MODE.STRIPE) {
      const priceId =
        process.env.NEXT_PUBLIC_ENV === "dev"
          ? course?.priceData?.test?.priceId
          : course?.priceData?.livePrice;

      checkout({
        customerEmail: localStorage.getItem("customerEmail"),
        userId: currentUser?.uid,
        courseId,
        lineItems: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
      });
    }

    if (paymentMode === APP_CONSTANT.PAYMENT_MODE.GUMROAD) {
      window.open(course?.priceData?.gumroadURL, "_blank");
    }
  };

  const handleBuyCTAClick = (target) => {
    // redirect to login page
    if (target === APP_CONSTANT.BUY_CTA_BTN && !isAuthenticated) {
      toast.error("Please login to continue purchase");
      router.push(`/auth/login?redirect=courses/${courseSlug}`);
      return;
    }

    // check if user has access to course
    if (hasCourseAccess) {
      router.push(`/learning/${courseSlug}/introduction`);
      return;
    } else if (target === APP_CONSTANT.PREVIEW_CTA_BTN) {
      router.push(
        `/learning/${courseSlug}/introduction?utm_source=internal&utm_medium=link&utm_campaign=course_preview`
      );
    } else {
      setShowPaymentModal(true);
    }
  };

  const handleLeadModalClick = (triggerSource) => {
    if (isAuthenticated) {
      handlePostLeadRedirect(triggerSource);
      return;
    }

    const leadInfo = localStorage.getItem(APP_CONSTANT.LOCAL_STORAGE.LEAD_INFO);
    if (leadInfo) {
      handlePostLeadRedirect(triggerSource);
      return;
    }
    setShowLeadModal(true);
    // lock scroll
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = "hidden";
    }

    setLeadTriggerType(triggerSource);
  };

  const handlePaymentModalClose = () => {
    setShowPaymentModal(false);
  };

  const handleLeadModalClose = () => {
    setShowLeadModal(false);
    setLeadTriggerType(null);
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = "auto";
    }
  };

  const handlePostLeadRedirect = (source) => {
    // console.log("handlePostLeadRedirect", source);

    if (source === APP_CONSTANT.BUY_CTA_BTN) {
      handleBuyCTAClick(APP_CONSTANT.BUY_CTA_BTN);
      return;
    }

    if (source === APP_CONSTANT.TRY_FREE_PREVIEW_BTN) {
      handleBuyCTAClick(APP_CONSTANT.PREVIEW_CTA_BTN);
      return;
    }
  };

  const contextValue = {
    LEAD_MODAL: {
      handleLeadModalClick,
      handleLeadModalClose,
      showLeadModal,
      leadTriggerType,
      handlePostLeadRedirect,
    },
    PAYMENT_MODAL: {
      showPaymentModal,
      handlePaymentModalClose,
      handleCoursePayment,
    },
    updateCourseState,
    handleBuyCTAClick,
    user: {
      userCourses,
      updateUserPurchasedCourses,
    },
    authUser: {
      isAuthenticated,
      currentUser,
    },
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
