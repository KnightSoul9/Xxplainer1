import { CTA, PersistentCta } from "@/src/components/common";
import {
  About,
  Banner,
  GetStarted,
  Testimonials,
} from "@/src/components/v1/PmInterview";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import CourseContent from "@/src/components/v1/course/DynamicCourseContent/CourseContent";
import { ClickedLink, FolderName } from "@/src/config/course-config";
import useDirectoryContents from "@/src/hooks/useDirectoryContents";
import useScrollHandler from "@/src/hooks/useScrollHandler";
import PageLayout from "@/src/layout/PageLayout";
import { useEffect, useState } from "react";

const PmInterview = () => {
  const folderName = FolderName.pm_interview;
  const directoryContents = useDirectoryContents(folderName);

  const clickedUrl = ClickedLink.pm_interview;
  const { showCTA, showPersistentCta } = useScrollHandler("banner");

  const [cTitle, setCTitle] = useState("");
  const [sTitle, setSTitle] = useState("");

  // Modal Dynamic Content
  useEffect(() => {
    setCTitle(
      `Unlock 50+ solved interview questions. Learn how to answer the hardest PM interview questions for FREE!`
    );
    setSTitle(
      `Find most asked product design, improvement, metrics, execution, strategy and behavioral questions at one place.`
    );
  }, []);

  return (
    <>
      <CommonHead
        title={"Xplainerr | PM Interview"}
        description={"PM interview"}
        favIcon={"/favicon.ico"}
      />

      <PageLayout>
        <Banner cTitle={cTitle} sTitle={sTitle} />

        {/* Dynamic  Way*/}
        <CourseContent
          courseData={directoryContents}
          slug={"pm-interview"}
          cTitle={cTitle}
          sTitle={sTitle}
        />
        <About />
        <Testimonials />
        <GetStarted cTitle={cTitle} sTitle={sTitle} />

        {showCTA && (
          <div className="md:hidden ">
            <CTA
              clickedUrl={clickedUrl}
              ctaBtnText="Get FREE resources"
              cTitle={cTitle}
              sTitle={sTitle}
            />
          </div>
        )}
        {showPersistentCta && (
          <div className={`hidden lg:block`}>
            <PersistentCta
              clickedUrl={clickedUrl}
              ctaBtnText="Get FREE resources"
              ctaTitle="Practice & crack PM Interview in 50 days"
              subTitle="Start practicing now"
              cTitle={cTitle}
              sTitle={sTitle}
            />
          </div>
        )}
      </PageLayout>
    </>
  );
};

export default PmInterview;
