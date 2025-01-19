import useLeadInfo from "@/src/hooks/useLeadInfo";
import styles from "@/styles/PersistentCta.module.css";
import LeadEmailModal from "../v1/Shared/Modal/LeadEmailModal";
import useStripePayment from "@/src/hooks/useStripePayment";
import { useRouter } from "next/router";
import useAuthService from "@/src/hooks/auth/useAuthService";
import { useContext } from "react";
import { GlobalContext } from "@/src/context/GlobalContext";
import { APP_CONSTANT } from "@/src/config/constants";
import toast from "react-hot-toast";

const PersistentCta = ({ clickedUrl, ctaBtnText, ctaTitle, subTitle,cTitle,sTitle }) => {
  const transitionDelay = 2000;

  const { showModal, setShowModal, handleClick } = useLeadInfo();
  const router = useRouter();
  const { isAuthenticated } = useAuthService();
  const { PAYMENT_MODAL } = useContext(GlobalContext);
  // console.log(router)

  const handleRedirect = () => {
    if (!isAuthenticated) {
      toast.error("Please login to continue purchase");
      router.push(`/auth/login?redirect=${router?.query?.course}`);
      return;
    } else {
      PAYMENT_MODAL.handleCoursePayment(APP_CONSTANT.PAYMENT_MODE.STRIPE);
    }
  };

  return (
    <div>
      <div
        className={`${styles.persistent_cta}`}
        style={{ transition: `opacity 0.5s ease ${transitionDelay}ms` }}
      >
        <div className=" text-white">
          <div>
            <strong>{ctaTitle}</strong> <br />
            <p>{subTitle}</p>
          </div>
        </div>
        <div className="mr-8 flex justify-between space-x-5">
          {ctaBtnText == "Buy Now" ? (
            <>
              <button
                className="w-full rounded-md bg-primary py-4 font-medium text-white hover:bg-primary_bold lg:mt-0  lg:w-[220px] lg:px-5"
                onClick={handleRedirect}
              >
                {ctaBtnText}
              </button>
            </>
          ) : (
            <>
              <button
                className="w-full rounded-md bg-primary py-4 font-medium text-white hover:bg-primary_bold lg:mt-0  lg:w-[220px] lg:px-5"
                onClick={() => handleClick(clickedUrl)}
              >
                {ctaBtnText}
              </button>
            </>
          )}
        </div>
      </div>
      {/************************ Lead Modal  ************************/}
      <LeadEmailModal
        showModal={showModal}
        setShowModal={setShowModal}
        ctaTitle={cTitle}
        subTitle={sTitle}
      />
    </div>
  );
};

export default PersistentCta;
