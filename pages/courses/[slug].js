import ComingSoon from "@/src/components/v1/Shared/CustomComponent/ComingSoon";
import { LoginModal } from "@/src/components/v1/Shared/Modal";
import CourseContent from "@/src/components/v1/course/CourseContent";
import {
  CourseDescription,
  Faqs,
  HeroBanner,
  Instructor,
  Opportunity,
  PurchaseSection,
  Requirements,
  Reviews,
  TopCompanies,
} from "@/src/components/v3/CourseDetails";
import { BACKEND_API } from "@/src/config/backend";
import useAuthService from "@/src/hooks/auth/useAuthService";
import useCourseAccess from "@/src/hooks/auth/useCourseAccess";
import PageLayout from "@/src/layout/PageLayout";
import { checkout } from "@/src/utils/checkout";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const publishedCourses = ["api-for-pm", "pricing-for-pm"];
const BASE_URL = "https://www.xplainerr.com";

const CourseDetails = ({ course }) => {
  // console.log("course", course);
  const router = useRouter();
  const { currentUser } = useAuthService();
  const courseSlug = course?.slug;
  const { hasCourseAccess, courseId } = useCourseAccess(courseSlug);
  // console.log("first", hasCourseAccess);
  const [loginModal, setLoginModal] = useState(false);

  const ctaText = hasCourseAccess ? "Resume Learning" : "Buy Now ";

  const handlePurchaseCTA = () => {
    // console.log("Handle Purchase CTA");
    if (hasCourseAccess) {
      router.push(`/learn/${router.query.slug}/introduction`);
      return;
    }

    const clientReferenceId = `${currentUser?.uid}-${courseId}`;

    if (router.pathname) {
      if (currentUser?.email) {
        checkout({
          lineItems: [
            {
              // price: priceId,
              price: course?.priceData.livePrice,
              quantity: 1,
            },
          ],
          customerEmail: currentUser.email,
          clientReferenceId: clientReferenceId,
          courseRoute: router.asPath,
        });
      } else {
        router.push(`/auth/login`);
      }
    }
  };

  // console.log(course?.title, "title");
  // console.log(course?.metaTitle, "metaTitle");
  // console.log(course?.cover_image, "cover_image");
  const currentPath = `${BASE_URL}${router.asPath}`;
  const path = new URL(currentPath);
  const currentCanonicalURL = path.origin + path.pathname;

  return (
    <>
      {course?.isPublished ? (
        <div>
          <Head>
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />
            <link rel='icon' href='favicon.ico' />

            {/* Primary Meta Tags */}
            <title>{course?.title}</title>
            <meta name='title' content={course?.title} />
            <meta name='description' content={course?.metaTitle} />

            {/* Open Graph */}
            <meta property='og:type' content='website' />
            <meta
              property='og:url'
              content={"https://xplainerr.com/courses/ux-writing"}
            />
            <meta property='og:title' content={course?.title} />
            <meta property='og:description' content={course?.metaTitle} />
            <meta
              property='og:image'
              itemProp='image'
              content={course?.cover_image}
            />

            <meta
              name='keywords'
              content='xplainerr, product managment, learn api, learn pricing, learn chatGPT, learn system design'
            />
            <link rel='canonical' href={currentCanonicalURL}></link>
          </Head>

          <main>
            <PageLayout>
              <div className=''>
                {/* For mobile course banner image  */}
                <div className='px-5 pt-3 lg:hidden'>
                  <Image
                    src={course?.cover_image}
                    width={350}
                    height={195}
                    alt={course?.title}
                  />
                </div>
                {/* Hero Section  */}
                <HeroBanner course={course} />
                <div className='lg:hidden'>
                  <PurchaseSection
                    course={course}
                    handleBuyNowClick={handlePurchaseCTA}
                    ctaText={ctaText}
                    hasCourseAccess={hasCourseAccess}
                  />
                </div>

                {/* Main Content  */}
                <div className='mx-auto max-w-7xl px-5 lg:px-16'>
                  <div className='flex gap-8'>
                    {/*******************************  Left Side  **************************** */}
                    <div className='left my-8 lg:my-12 lg:basis-8/12'>
                      {/* Learning Opportunity */}
                      <Opportunity keyPoints={course?.keyPoints} />

                      {/* Top companies offer this course to their employees */}

                      {publishedCourses.includes(course?.slug) && (
                        <TopCompanies topCompanies={course?.alumniOrgs} />
                      )}

                      {/* Course Content  */}
                      <CourseContent
                        course={`courseDetail`}
                        slug={course?.slug}
                      />

                      {/* Requirements */}
                      <Requirements requiredSkills={course.requiredSkills} />

                      {/* CourseDescription */}
                      <CourseDescription
                        description={course.courseDescription}
                      />

                      {/* Instructor */}
                      <Instructor course={course} />

                      {/* Faq  */}
                      <Faqs course={course} />

                      {/* Review  */}
                      <Reviews />
                    </div>

                    {/************************ Right Side PurchaseSection **************************/}
                    <div className='right hidden lg:block lg:basis-4/12'>
                      <PurchaseSection
                        course={course}
                        handleBuyNowClick={handlePurchaseCTA}
                        ctaText={ctaText}
                        hasCourseAccess={hasCourseAccess}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </PageLayout>

            {/************************ Login Modal  ************************/}
            <LoginModal
              isVisible={loginModal}
              setLoginModal={setLoginModal}
              onClose={() => setLoginModal(false)}
            />
          </main>
        </div>
      ) : (
        <ComingSoon />
      )}
    </>
  );
};

export default CourseDetails;

// Get Single Course
export const getStaticPaths = async () => {
  const res = await fetch(`${BACKEND_API}/courses`);
  const courses = await res.json();
  // console.log(courses);

  return { paths: [], fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${BACKEND_API}/courses/${params.slug}`);
  const singleCourse = await res.json();
  const course = singleCourse.result;

  return { props: { course } };
};
