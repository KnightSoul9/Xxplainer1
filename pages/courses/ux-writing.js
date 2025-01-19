import { getCourseData } from "@/src/api/courses";
import { CTA, PersistentCta } from "@/src/components/common";
import {
  Authors,
  CourseStats,
  CtaAlternative,
  Faqs,
  FeaturesBlocks,
  HeroHome,
} from "@/src/components/v1/course";
import CourseContent from "@/src/components/v1/course/DynamicCourseContent/CourseContent";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { keyChapterData } from "@/src/config/constants";
import { ClickedLink, FolderName } from "@/src/config/course-config";
import { GlobalContext } from "@/src/context/GlobalContext";
import useCourseAccess from "@/src/hooks/auth/useCourseAccess";
import useDirectoryContents from "@/src/hooks/useDirectoryContents";
import useScrollHandler from "@/src/hooks/useScrollHandler";
import PageLayout from "@/src/layout/PageLayout";
import { useContext, useEffect, useState } from "react";

const COURSE_SLUG = "ux-writing";

const heroPageProps = {
  keyFeature: "Read by 120+ UI/UX designers, product managers & UX writers",
  subFeatures: [
    `✔️ Craft compelling user experiences with words & phrases.`,
    `✔️  Transform your product's messaging with UX writing skills`,
    `✔️  Elevate your career with impactful UX writing knowledge`,
  ],
  title: "UX Writing course",
  ctaText: "Buy now",
  slug: COURSE_SLUG,
  hero_image: "https://ik.imagekit.io/zwxa4kttt/hero-v2.png",
};

const courseStatsProps = [
  {
    key: "7+",
    data: "chapters covering basics of UX writing, examples, microcopies etc.",
  },
  {
    key: "4.4/5",
    data: "Average rating shared by users",
  },
  {
    key: "120+",
    data: "learners have learnt UX writing from this course",
  },
];

const featureBlockProps = {
  heading: "What will you learn?",
  description:
    "Learn the what, why, and how of UX Writing and terms like - microcopy, error messaging, tone of voice, information architecture, usability testing, wireframing, prototyping, and content strategy in depth.",
  featureBlockData: keyChapterData[COURSE_SLUG],
  slug: COURSE_SLUG,
};

const CourseLandingPage = ({ course }) => {
  const { updateCourseState } = useContext(GlobalContext);

  useEffect(() => {
    updateCourseState(course);
  }, [course, updateCourseState]);

const folderName = FolderName.ux_writing;
const directoryContents = useDirectoryContents(folderName);
  const clickedUrl = ClickedLink.ux_writing;
  const { showCTA, showPersistentCta } = useScrollHandler("heroBanner");
  const [cTitle, setCTitle] = useState("");
  const [sTitle, setSTitle] = useState("");

  // Modal Dynamic Content
  useEffect(() => {
    if (COURSE_SLUG === "ux-writing") {
      setCTitle("Unlock FREE chapters of UX writing course");
      setSTitle("Master the art of creating delightful copies for your users");
    }
  }, []);

    const { hasCourseAccess } = useCourseAccess(COURSE_SLUG);

    // const CTABtn = hasCourseAccess ? "Access Course " : "Get FREE chapter";
    const CTABtn = "Access Course ";

  return (
    <>
      <CommonHead
        title={"Learn UX Writing |  Xplainerr"}
        description={`Unlock the power of pricing and monetization with our in-depth course designed for Product Managers, Marketers, and Growth Managers. Learn the latest strategies, techniques, and tools to drive business success and revenue growth`}
        favIcon={"/favicon.ico"}
      />
      <main>
        <PageLayout>
          {/* <HeroHome
              heading={"Learn UX Writing"}
              ctaText="Buy now"
              hasCourseAccess={hasCourseAccess}
              course={course}
              previewImage={course?.cover_image}
            /> */}

          <HeroHome
            heroPageProps={heroPageProps}
            courseSlug={COURSE_SLUG}
            clickedUrl={clickedUrl}
            cTitle={cTitle}
            sTitle={sTitle}
          />

          <CourseStats
            courseSlug={COURSE_SLUG}
            courseStatsProps={courseStatsProps}
          />

          <FeaturesBlocks featureBlockProps={featureBlockProps} />

          {/* <Reviews courseSlug={COURSE_SLUG} /> */}
          {/* Dynamic  Way*/}
          <CourseContent
            courseData={directoryContents}
            slug={"ux-writing"}
            cTitle={cTitle}
            sTitle={sTitle}
          />

          <Authors data={course?.instructors} />

          <Faqs />
          <CtaAlternative
            courseName="UX Writing"
            cTitle={cTitle}
            sTitle={sTitle}
            hasCourseAccess={hasCourseAccess}
            slug={COURSE_SLUG}
          />
          {showCTA && (
            <div className="md:hidden ">
              <CTA
                clickedUrl={clickedUrl}
                ctaBtnText={CTABtn}
                cTitle={cTitle}
                sTitle={sTitle}
              />
            </div>
          )}
          {showPersistentCta && (
            <div className={`hidden lg:block`}>
              <PersistentCta
                clickedUrl={clickedUrl}
                ctaBtnText={CTABtn}
                ctaTitle="Master the art of UX writing"
                subTitle="How can a compelling copy make you win user love & trust?"
                cTitle={cTitle}
                sTitle={sTitle}
              />
            </div>
          )}
        </PageLayout>
      </main>
    </>
  );
};

export default CourseLandingPage;

export const getStaticProps = async () => {
  const res = await getCourseData(COURSE_SLUG);
  const courseData = res.result;

  return { props: { course: courseData } };
};
