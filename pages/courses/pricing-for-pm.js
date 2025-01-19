import { getCourseData } from "@/src/api/courses";
import { CTA, PersistentCta } from "@/src/components/common";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import {
  Authors,
  // CourseContent,
  CourseStats,
  CtaAlternative,
  Faqs,
  FeaturesBlocks,
  HeroHome
} from "@/src/components/v1/course";
import CourseContent from "@/src/components/v1/course/DynamicCourseContent/CourseContent";
import { Reviews } from "@/src/components/v3/CourseDetails";
import { keyChapterData } from "@/src/config/constants";
import { ClickedLink, FolderName } from "@/src/config/course-config";
// import { courseContent } from "@/src/config/pricingForPmModule";
import { GlobalContext } from "@/src/context/GlobalContext";
import useCourseAccess from "@/src/hooks/auth/useCourseAccess";
import useDirectoryContents from "@/src/hooks/useDirectoryContents";
import useScrollHandler from "@/src/hooks/useScrollHandler";
import PageLayout from "@/src/layout/PageLayout";
import { useContext, useEffect, useState } from "react";

const COURSE_SLUG = "pricing-for-pm";

const heroPageProps = {
  keyFeature:
    "Ideal for all passionate operators & builders - Product Managers, Founders, VCs, analysts etc.",
  subFeatures: [
    "✔️ Trusted by 850+ learners. Life-long access. 12+ chapters.",
    "✔️ Learn case studies of Bumble, LinkedIn, Swiggy, Jio, Unacademy etc",
  ],
  title: "A to Z of Pricing and Monetisation",
  ctaText: "Buy now",
  slug: COURSE_SLUG,
  hero_image:
    "https://ik.imagekit.io/zwxa4kttt/courses/pricing-review?updatedAt=1688929666702",
};

const courseStatsProps = [
  {
    key: "10+",
    data: "Chapters covering pricing models (freemium, subscription,decoy pricing etc.)",
  },
  {
    key: "4.7/5",
    data: "Average rating by users. Also, top-rated product on Product Hunt.",
  },
  {
    key: "876+",
    data: "Product Managers, Founders, and Marketers have upskilled through this course",
  },
];

const featureBlockProps = {
  heading: "What will you learn?",
  description:
    "Learn everything about pricing & monetisation - from cost-based pricing to competitor-based pricing, decoy pricing, subscription, etc.",
  featureBlockData: keyChapterData[COURSE_SLUG],
  slug: COURSE_SLUG,
};

const PricingForPM = ({ course }) => {
  const { updateCourseState } = useContext(GlobalContext);
  const folderName = FolderName.pricing_for_pm;
  const directoryContents = useDirectoryContents(folderName);

  useEffect(() => {
    updateCourseState(course);
  }, [course, updateCourseState]);

  const clickedUrl = ClickedLink.pricing_for_pm;
  const { showCTA, showPersistentCta } = useScrollHandler("heroBanner");

  const [cTitle, setCTitle] = useState("");
  const [sTitle, setSTitle] = useState("");

  // Modal Dynamic Content
  useEffect(() => {
    if (COURSE_SLUG === "pricing-for-pm") {
      setCTitle("Unlock FREE chapters of Pricing & Monetisation course");
      setSTitle(
        "Nothing gives you visibility like working on monetisation problems. Learn strategies from Netflix, Bumble, Netflix etc. "
      );
    }
  }, []);

  const { hasCourseAccess } = useCourseAccess(COURSE_SLUG);

  const CTABtn = hasCourseAccess ? "Access Course " : "Get FREE chapter";

  return (
    <>
      <CommonHead
        title={
          "Pricing and Monetization: Unlock Business Success with in-depth strategies to master for Product Managers, Marketers, and Growth Managers"
        }
        description={`Unlock the power of pricing and monetization with our in-depth course designed for Product Managers, Marketers, and Growth Managers. Learn the latest strategies, techniques, and tools to drive business success and revenue growth`}
        favIcon={"/favicon.ico"}
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

          {/* <TestimonialsCarousel slug={COURSE_SLUG} /> */}
          <Reviews courseSlug={COURSE_SLUG} />
          {/* Dynamic  Way*/}
          <CourseContent
            courseData={directoryContents}
            slug={"pricing-for-pm"}
            cTitle={cTitle}
            sTitle={sTitle}
          />

          <Authors data={course?.instructors} />

          <Faqs />
          <CtaAlternative
            courseName={"pricing & monetisation"}
            slug={COURSE_SLUG}
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
                ctaTitle=" Become a Pricing & Monetisation Expert"
                subTitle="Learn strategies from Uber, Bumble, Unacademy, Netflix etc."
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

export default PricingForPM;

export const getStaticProps = async () => {
  const res = await getCourseData("pricing-for-pm");
  const courseData = res.result;

  return { props: { course: courseData } };
};
