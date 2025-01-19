import { withRouter } from "next/router";
import { useState } from "react";
import Footer2 from "../components/v1/Shared/Footer/Footer";
import { CouponModal, LeadModal } from "../components/v1/Shared/Modal";
import PaymentModal from "../components/v1/Shared/Modal/PaymentModal";
import Navbar from "../components/v3/Shared/Navbar/Navbar";

const PageLayout = ({ children, router, disableNav }) => {
  const [couponModal, setCouponModal] = useState(false);

  return (
    <>
      <Navbar router={router} disableNav={disableNav} />
      {children}
      <Footer2 />

      {/* <LeadModal setCouponModal={setCouponModal} /> */}

      <PaymentModal />

      <CouponModal
        isVisible={couponModal}
        onClose={() => setCouponModal(false)}
      />
    </>
  );
};

export default withRouter(PageLayout);
