import { freeCourses } from "@/src/config/course-config";
import CommonHead from "../CommonHead";
import Footer2 from "../Footer/Footer";

const { default: SidebarLayout } = require("@/src/layout/SidebarLayout");
// const { default: Footer2 } = require("../Footer/Footer");
const { default: UpgradeToPremium } = require("../UpgradeToPremium");
const { default: ContentLayout } = require("./ContentLayout");
const CourseLearningView = ({
  courseNavigationData,
  course,
  slug,
  hasAccess,
  isFreeChapter,
  frontmatter,
  content,
}) => {
  const shouldUnlock = hasAccess || isFreeChapter || freeCourses.includes(course);

  console.log(content , 'hhhhhhhhhhhhh')

  return (
    <div>
      
      <CommonHead
        title={`${frontmatter?.title} - Xplainerr`}
        description={`${frontmatter?.title} - Xplainerr`}
        favIcon={"/favicon.ico"}
      />

      <SidebarLayout
        posts={courseNavigationData}
        isPaid={shouldUnlock}
        course={course}
        slug={slug}
      >
        {shouldUnlock ? (
          <div className="p-4">
            <div>
              <h1 className="post-heading pb-3">{frontmatter?.title}</h1>
              <hr className="pb-3" />
            </div>
            <div className="blog__content text-align-justify mb-5">
            </div>
          </div>
        ) : (
          <>
            <UpgradeToPremium posts={courseNavigationData} course={course} />
          </>
        )}
        <Footer2 />
      </SidebarLayout>
    </div>
  );
};

export default CourseLearningView;
