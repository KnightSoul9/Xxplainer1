import LeadModal from "./LeadModal";
import CouponModal from "./CouponModal";
import LoginModal from "./LoginModal";

const PopupContainer = ({ children }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex  justify-center bg-black bg-opacity-80 pt-[40%] md:items-center md:pt-0">
      <div className="flex w-[99%] flex-col md:w-[50%] lg:w-[30%] 2xl:w-[450px]">
        {children}
      </div>
    </div>
  );
};

export { LeadModal, CouponModal, LoginModal, PopupContainer };
