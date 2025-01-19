import { APP_CONSTANT } from "@/src/config/constants";
import { GlobalContext } from "@/src/context/GlobalContext";
import { useContext, useEffect, useState } from "react";

const INITIAL_SALES_TEXT ='🎉 Click here to unlock upto 50% discount offer 🎉';
const LEAD_SUBMIT_SALES_TEXT = 'Your coupon code is - XPLAINERR-50. Click to apply. '

const HeaderTopBanner = ({handleBannerClick, hasLead}) => {

    const [bannerText, setBannerText] = useState(INITIAL_SALES_TEXT);
    const [hadLead, setHasLead] = useState(false);

    const {
      LEAD_MODAL: { handleLeadModalClick },
    } = useContext(GlobalContext);


    useEffect(()=> {
        const hasLead = localStorage.getItem('usrData');
        if(hasLead){
            setBannerText(LEAD_SUBMIT_SALES_TEXT);
            setHasLead(true);
        }
    }, []);


  return (
    <div className="flex justify-center p-2  topBannerBg">
      <p
        className="text-center text-[12px] md:text-md font-bold text-white hover:cursor-pointer"
        onClick={() => handleLeadModalClick(APP_CONSTANT.HEADER_BANNER_CLICK)}
      >
        {bannerText || INITIAL_SALES_TEXT}
      </p>
    </div>
  );
};

export default HeaderTopBanner;
