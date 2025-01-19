import useLeadInfo from "@/src/hooks/useLeadInfo";
import LeadEmailModal from "../Shared/Modal/LeadEmailModal";
import { ClickedLink } from "@/src/config/course-config";

const GetStarted = ({ cTitle, sTitle }) => {
  const clickedUrl = ClickedLink.pm_interview;
  const { showModal, setShowModal, handleClick } = useLeadInfo();
  return (
    <>
      <div className="container mx-auto -mb-56 bg-gray-50 px-2 lg:-mb-36 lg:flex lg:items-center lg:justify-center">
        <div className="relative flex flex-col items-center justify-center space-y-8 rounded-[30px] bg-[#353535] px-8 py-[60px] text-center lg:px-[160px]">
          <h2 className="text-center text-3xl font-semibold text-white lg:text-[32px]">
            Are you ready to get your dream Product Manager job?{" "}
            <br className="hidden lg:block" /> Nail the craft of cracking
            interviews
          </h2>
          <button
            className="w-full rounded-md bg-primary py-4 font-medium text-white hover:bg-primary_bold lg:mt-0  lg:w-[220px] lg:px-5"
            onClick={() => handleClick(clickedUrl)}
          >
            See Questions (FREE)
          </button>
        </div>
      </div>

      {/************************ Lead Modal  ************************/}
      <LeadEmailModal
        showModal={showModal}
        setShowModal={setShowModal}
        ctaTitle={cTitle}
        subTitle={sTitle}
      />
    </>
  );
};

export default GetStarted;
