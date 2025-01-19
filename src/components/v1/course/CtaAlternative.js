import { APP_CONSTANT } from "@/src/config/constants";
import { GlobalContext } from "@/src/context/GlobalContext";
import useLeadInfo from "@/src/hooks/useLeadInfo";
import { useContext } from "react";
import LeadEmailModal from "../Shared/Modal/LeadEmailModal";
import { useRouter } from "next/router";

const CtaAlternative = ({
  slug,
  courseName = "API",
  clickedUrl,
  cTitle,
  sTitle,
  hasCourseAccess,
}) => {
  const {
    LEAD_MODAL: { handleLeadModalClick },
  } = useContext(GlobalContext);
  const { showModal, setShowModal, handleClick } = useLeadInfo();
  const router = useRouter()

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="rounded bg-gray-900 px-8 py-10 shadow-2xl md:px-12 md:py-10"
            data-aos="zoom-y-out"
          >
            <div className="flex flex-col items-center justify-between lg:flex-row">
              {/* CTA content */}
              <div className="mb-6 text-center lg:mb-0 lg:mr-16 lg:w-1/2 lg:text-left">
                <h3 className="h4 text-white">
                  Want a free chapter of {courseName} course?{" "}
                </h3>
                {slug === "api-for-pm" && (
                  <p className="mt-2 text-[#e1e1e1]">
                    What&apos;s stopping you to crack technical rounds of
                    product management interviews with ease?
                  </p>
                )}

                {slug === "ux-writing" && (
                  <p className="mt-2 text-[#e1e1e1]">
                    What&apos;s you from crafting compelling user experiences
                    with ease?{" "}
                  </p>
                )}

                {
                  (slug = "pricing-for-pm" && (
                    <p className="mt-2 text-[#e1e1e1]">
                      What&apos;s stopping you from being a product leader who
                      creates a strong impact on your organisation&apos;s bottom
                      line?{" "}
                    </p>
                  ))
                }
              </div>

              {/* CTA button */}
              <div>
                {router.asPath == "/courses/ux-writing" ? (
                  <>
                    <button
                      onClick={() => handleClick(clickedUrl)}
                      className="btn bg-primary text-white hover:bg-primary_bold"
                    >
                      {" "}
                      Access Course
                    </button>
                  </>
                ) : (
                  <>
                    {hasCourseAccess || slug == "ux-writing" ? (
                      <button
                        onClick={() => handleClick(clickedUrl)}
                        className="btn bg-primary text-white hover:bg-primary_bold"
                      >
                        {" "}
                        Access Course
                      </button>
                    ) : (
                      <button
                        onClick={() => handleClick(clickedUrl)}
                        className="btn bg-[#ff4545] text-white hover:bg-primary_bold"
                      >
                        {" "}
                        Get free chapter{" "}
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/************************ Lead Modal  ************************/}
      <LeadEmailModal
        showModal={showModal}
        setShowModal={setShowModal}
        ctaTitle={cTitle}
        subTitle={sTitle}
      />
    </section>
  );
};

export default CtaAlternative;
