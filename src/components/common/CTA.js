import useLeadInfo from "@/src/hooks/useLeadInfo";
import LeadEmailModal from "../v1/Shared/Modal/LeadEmailModal";
import { useRouter } from "next/router";

const CTA = ({ clickedUrl, ctaBtnText, cTitle, sTitle }) => {
  const { showModal, setShowModal, handleClick } = useLeadInfo();
  const router = useRouter();
  // console.log(router);

  const handleRedirect = () => {
    router.push(`/courses/${router?.query?.course}`);
  };
  return (
    <>
      <div className="fixed bottom-0 w-full  px-2 pb-1.5">
        {ctaBtnText == "Buy Now" ? (
          <>
            <button
              className="w-full rounded-xl bg-blue-600 py-5 text-center font-bold text-white shadow-lg "
              onClick={handleRedirect}
            >
              {ctaBtnText}
            </button>
          </>
        ) : (
          <>
            <button
              className="w-full rounded-xl bg-blue-600 py-5 text-center font-bold text-white shadow-lg "
              onClick={() => handleClick(clickedUrl)}
            >
              {ctaBtnText}
            </button>
          </>
        )}
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

export default CTA;
