import { APP_CONSTANT } from "@/src/config/constants";
import { GlobalContext } from "@/src/context/GlobalContext";
import Image from "next/image";
import closeSvg from "public/images/icons/close.svg";
import { useContext, useEffect, useState } from "react";

const { PopupContainer } = require(".");

const PaymentModal = ({ onClose, onConfirm }) => {
  const {
    PAYMENT_MODAL: {
      showPaymentModal: isOpen,
      handlePaymentModalClose: handleClose,
      handleCoursePayment
    },
  } = useContext(GlobalContext);


  const [pgName, setPGName] = useState(null);

  const [pgView, setPGView] = useState({
    view1: true,
    view2: false,
  });

  const handleStripeClick = () => {
    setPGName('stripe');
    setPGView({
      view1: false,
      view2: true
    });

    // call stripe api handler
    handleCoursePayment(APP_CONSTANT.PAYMENT_MODE.STRIPE);
  }

  const handleGumroadClick = () => {
    setPGName('gumroad');
    setPGView({
      view1: false,
      view2: true
    });
    handleCoursePayment(APP_CONSTANT.PAYMENT_MODE.GUMROAD);

    setTimeout(() => {
      handleClose();
    }, [3000])

  };

  if (!isOpen) return null;
  return (
    <PopupContainer>
      <div className="relative rounded-md bg-white  px-6 py-12 2xl:p-12 ">
        <button
          className="py-.5 absolute right-4 top-4 mb-2    bg-white px-2 text-lg  text-black"
          onClick={handleClose}
        >
          <Image src={closeSvg} alt="close" width={20} height={20} />
        </button>
        {pgView.view1 && (
          <div className="view-1">
            <h3 className="mb-4  text-center text-2xl">
              {" "}
              Select payment option{" "}
            </h3>

            <button
              className="text-md mt-4 w-full cursor-pointer rounded-md bg-[#000] hover:bg-gray-900 bg-gradient-to-r  px-8 py-2  text-white"
              onClick={handleStripeClick}
            >
              Pay via Stripe
            </button>

            {/* <button
              className="text-md mt-4 w-full cursor-pointer rounded-md bg-[#000] hover:bg-gray-900 bg-gradient-to-r  px-8 py-2  text-white"
              onClick={handleGumroadClick}
            >
              Pay via gumroad
            </button> */}

            {/* <div className="info mt-4">
              <p className="text-xs font-semibold">Note</p>
              <p className="text-ellipsis text-xs">
                1. If you are not an Indian user, please continue via gumroad.
              </p>
              <p className="text-ellipsis text-xs">
                2. If you are using gumroad, please use the same email id at gumroad checkout.  
              </p>
            </div> */}
          </div>
        )}

  

        {pgView.view2 && (
          <div className="redirect-view">
            <h3 className="mb-4  text-center text-xl">
              Redirecting to {pgName}, please wait . . .
            </h3>
          </div>
        )}
      </div>
    </PopupContainer>
  );
};

export default PaymentModal;
