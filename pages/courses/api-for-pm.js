import { getCourseData } from "@/src/api/courses";
import { CTA, PersistentCta } from "@/src/components/common";
import {
  Authors,
  CtaAlternative,
  Faqs,
  FeaturesBlocks,
  HeroHome,
} from "@/src/components/v1/course";
import CourseStats from "@/src/components/v1/course/CourseStats";
import CourseContent from "@/src/components/v1/course/DynamicCourseContent/CourseContent";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { Reviews } from "@/src/components/v3/CourseDetails";
import { keyChapterData } from "@/src/config/constants";
import { ClickedLink, FolderName } from "@/src/config/course-config";
import { GlobalContext } from "@/src/context/GlobalContext";
import useCourseAccess from "@/src/hooks/auth/useCourseAccess";
import useDirectoryContents from "@/src/hooks/useDirectoryContents";
import useScrollHandler from "@/src/hooks/useScrollHandler";
import PageLayout from "@/src/layout/PageLayout";
import { useContext, useEffect, useState } from "react";

const COURSE_SLUG = "api-for-pm";

const seoData = {
  title:
    "Master APIs for Product Management: Drive Growth and Improve User Experience",
  description:
    "The API for Product Managers course teaches product managers about APIs and how to use them to build successful products. With practical exercises and real-world examples, you'll learn how to optimize product performance, improve user experience, and work more effectively with developers.",
  favIcon: "/favicon.ico",
};

const heroPageProps = {
  subFeatures: [
    "✔️ Trusted by 7300+ PMs. Lifelong access. 10+ chapters",
    "✔️ Crack PM interview technical rounds with ease",
    "✔️ Transform your product strategy with API skills",
    "✔️ Elevate your career with API knowledge",
  ],
  title: "API Product Manager course",
  ctaText: "Buy Now",
  slug: COURSE_SLUG,
  hero_image: "https://ik.imagekit.io/zwxa4kttt/courses/api-review.webp",
};

const courseStatsProps = [
  {
    key: "10+",
    data: "Chapters covering API basics - request, response, endpoints, types of API etc.",
  },
  {
    key: "4.8/5",
    data: "Average rating shared by user. Also, ranked #1 on Product Hunt",
  },
  {
    key: "9k+",
    data: "Product Managers have up-skilled through this course",
  },
];

const featureBlockProps = {
  heading: "What will you learn?",
  description:
    "Learn the what, why and how of APIs and terms like - request, response, endpoints, query parameters, error codes, Oauth, webhooks etc in depth.",
  featureBlockData: keyChapterData[COURSE_SLUG],
  slug: COURSE_SLUG,
};

const ApiForPm = ({ course }) => {
  const { updateCourseState } = useContext(GlobalContext);
  const folderName = FolderName.api_for_pm;
  const directoryContents = useDirectoryContents(folderName);

  useEffect(() => {
    updateCourseState(course);
  }, [course, updateCourseState]);

  const clickedUrl = ClickedLink.api_for_pm;
  const { showCTA, showPersistentCta } = useScrollHandler("heroBanner");

  const [cTitle, setCTitle] = useState("");
  const [sTitle, setSTitle] = useState("");

  // Modal Dynamic Content
  useEffect(() => {
    if (COURSE_SLUG === "api-for-pm") {
      setCTitle("Unlock FREE chapters of API For Product Manager course");
      setSTitle(
        "Do you know? Product Managers with technical knowledge are paid 42% more than their counterparts"
      );
    }
  }, []);


  const { hasCourseAccess } = useCourseAccess(COURSE_SLUG);
  
  const CTABtn = hasCourseAccess ? "Access Course " : "Get FREE chapter";

  return (
    <>
      <CommonHead
        title={seoData.title}
        description={seoData.description}
        favIcon={seoData.favIcon}
      />
      <main>
        <PageLayout>
          <HeroHome
            heroPageProps={heroPageProps}
            pricing={true}
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

          <Reviews courseSlug={COURSE_SLUG} />
          {/* Dynamic  Way*/}
          <CourseContent
            courseData={directoryContents}
            slug={"api-for-pm"}
            cTitle={cTitle}
            sTitle={sTitle}
          />

          <Authors data={course?.instructors} />
          <Faqs />
          <CtaAlternative
            clickedUrl={clickedUrl}
            cTitle={cTitle}
            sTitle={sTitle}
            hasCourseAccess={hasCourseAccess}
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
                ctaTitle="Become a API Product Manager"
                subTitle="Crack technical rounds of PM Interview with ease"
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

export default ApiForPm;

export const getStaticProps = async () => {
  const res = await getCourseData(COURSE_SLUG);
  const courseData = res.result;

  return { props: { course: courseData } };
};
