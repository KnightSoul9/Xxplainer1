import { getCourseData } from "@/src/api/courses";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { Authors } from "@/src/components/v1/course";
import { Reviews } from "@/src/components/v3/CourseDetails";
import {
  Application,
  Banner,
  CourseOverview,
  Info,
  Questions,
} from "@/src/components/v3/TechForProductManagers";
import { CohortData } from "@/src/config/cohort";
import useScrollHandler from "@/src/hooks/useScrollHandler";
import PageLayout from "@/src/layout/PageLayout";
import styles from "@/styles/PersistentCta.module.css";
import { useEffect, useState } from "react";

const TechForProductManagers = ({ course }) => {
  const { showCTA, showPersistentCta } = useScrollHandler("banner");

  const [scrolledToApplication, setScrolledToApplication] = useState(false);

  const transitionDelay = 2000;

  const handleApplyNowClick = () => {
    localStorage.setItem("source", "CTA");
    localStorage.setItem("application", true);
  };

  const clicked = localStorage.getItem("application");

  useEffect(() => {
    const handleScroll = () => {
      const applicationSection = document.getElementById("applicationForm");
      const scrolled =
        window.scrollY >= applicationSection.offsetTop - window.innerHeight / 2;
      setScrolledToApplication(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(scrolledToApplication, "abc");

  return (
    <>
      <CommonHead
        title={"Xplainerr | Tech For Product Managers"}
        description={"Tech For Product Managers"}
        favIcon={"/favicon.ico"}
      />

      <PageLayout>
        <Banner />
        <Info />
        <CourseOverview
          courseData={CohortData}
          slug={"tech-for-product-managers"}
        />
        <Questions />
        <Reviews courseSlug={"tech-for-product-managers"} />
        <Authors
          data={course?.instructors}
          courseSlug={"/cohorts/tech-for-product-managers"}
        />
        <Application />

        {!scrolledToApplication && showCTA && (
          <div className={`md:hidden `}>
            <div className="fixed bottom-0 w-full px-2 pb-1.5">
              <button
                className="w-full rounded-xl bg-blue-600 py-5 text-center font-bold text-white shadow-lg"
                onClick={() => {
                  handleApplyNowClick();
                  window.location.href = "#applicationForm";
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        )}

        {!scrolledToApplication && showPersistentCta && (
          <div className={`hidden lg:block`}>
            <div>
              <div
                className={`${styles.persistent_ctA}`}
                style={{ transition: `opacity 0.5s ease ${transitionDelay}ms` }}
              >
                <div className=" text-white">
                  <div>
                    <strong>
                      Crack tech rounds of Uber, Razorpay, Google PM Interviews
                      with ease
                    </strong>{" "}
                    <br />
                    <p>Start 2024 with a learning commitment. Enroll now</p>
                  </div>
                </div>
                <div className="mr-8 flex justify-between space-x-5">
                  <div>
                    <a
                      href="#applicationForm"
                      className="w-[100%] rounded-md bg-primary px-12 py-4 text-xl font-medium text-white hover:bg-primary_bold lg:mt-0"
                      onClick={handleApplyNowClick}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </PageLayout>
    </>
  );
};

export default TechForProductManagers;

export const getStaticProps = async () => {
  const res = await getCourseData("pricing-for-pm");
  const courseData = res.result;

  return { props: { course: courseData } };
};
