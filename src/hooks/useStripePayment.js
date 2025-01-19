import { useContext } from "react";
import { GlobalContext } from "@/src/context/GlobalContext";
import { APP_CONSTANT } from "@/src/config/constants";
import useAuthService from "./auth/useAuthService";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const useStripePayment = (courseSlug, clickedUrl) => {
  const { PAYMENT_MODAL } = useContext(GlobalContext);
  const { isAuthenticated } = useAuthService();
  const router = useRouter();

  const handleStripeClick = () => {
    // redirect to login page
    if (!isAuthenticated) {
      toast.error("Please login to continue purchase");
      router.push(`/auth/login?redirect=${courseSlug}`);
      return;
    } else {
      localStorage.setItem("clickedUrl", clickedUrl);
      PAYMENT_MODAL.handleCoursePayment(APP_CONSTANT.PAYMENT_MODE.STRIPE);
    }
  };

  return {
    handleStripeClick,
  };
};

export default useStripePayment;
