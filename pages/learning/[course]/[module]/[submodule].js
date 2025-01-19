// import NewSidebarLayout from "@/src/layout/NewSidebarLayout";
// import { useRouter } from "next/router";
// import { motion, AnimatePresence } from "framer-motion";
// import { CTA, PersistentCta } from "@/src/components/common";
// import { renderBlock } from "@/src/components/common/notion/renderer";
// import CommonHead from "@/src/components/v1/Shared/CommonHead";
// import UpgradeToPremium from "@/src/components/v1/Shared/UpgradeToPremium";
// import DashQuiz from "@/src/components/v3/course/learning/dash-quiz";
// import { BACKEND_API } from "@/src/config/backend";
// import { ClickedLink } from "@/src/config/course-config";
// import useCourseAccess from "@/src/hooks/auth/useCourseAccess";
// import useScrollHandler from "@/src/hooks/useScrollHandler";
// import { getBlocks } from "@/src/lib/notion";
// import { Fragment, useEffect, useState } from "react";

// // Callout component with more engaging styles and animations
// const Callout = ({ icon, color, title, children }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.6, ease: "easeInOut" }} // Slower transitions
//     className={` p-6 ${color} my-6 rounded-3xl bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg`}
//   >
//     <div className="flex">
//       <span className="mr-4 text-4xl">{icon}</span> {/* Larger icon */}
//       <div>
//         <h4 className="mb-2 text-xl font-extrabold">{title}</h4>{" "}
//         {/* Larger title */}
//         <p className="text-lg text-gray-800">{children}</p> {/* Larger text */}
//       </div>
//     </div>
//   </motion.div>
// );

// const CodeBlock = ({ children }) => (
//   <div className="rounded-2xl">
//     <pre>{children}</pre>
//   </div>
// );

// // Function to render blocks with specific styles for headings, code blocks, etc.
// const renderNotionBlocks = (blocks) => (
//   <AnimatePresence>
//     {blocks.map((block, index) => {
//       switch (block.type) {
//         case "heading_1":
//           return (
//             <motion.h1
//               key={index}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="mb-6 text-4xl font-extrabold text-blue-800"
//             >
//               {renderBlock(block, index)}
//             </motion.h1>
//           );
//         case "heading_2":
//           return (
//             <motion.h2
//               key={index}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="mb-5 text-5xl font-extrabold text-blue-600"
//             >
//               {renderBlock(block, index)}
//             </motion.h2>
//           );
//         case "paragraph":
//           return (
//             <motion.p
//               key={index}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="mb-4 text-sm   leading-relaxed text-gray-900"
//             >
//               {renderBlock(block, index)}
//             </motion.p>
//           );
//           case "image":
//             return (
//               <div key={index} className="">
//                 {renderBlock(block, index)}
//               </div>
//             );
//         case "code":
//           return <CodeBlock key={index}>{renderBlock(block, index)}</CodeBlock>;
//         case "callout":
//           const isWarning = block.callout.icon?.emoji === "⚠️";
//           const color = isWarning
//             ? "bg-red-50 text-red-900"
//             : "bg-blue-50  text-blue-900";
//           const icon = isWarning ? "⚠️" : "💡";
//           return (
//             <Callout
//               key={index}
//               color={color}
//               icon={icon}
//               title={
//                 isWarning
//                   ? "Oh no! Something bad happened!"
//                   : "You should know!"
//               }
//             >
//               {renderBlock(block, index)}
//             </Callout>
//           );
//         default:
//           return <div key={index}>{renderBlock(block, index)}</div>;
//       }
//     })}
//   </AnimatePresence>
// );

// const SubmodulePage = ({ courseData, blocks, singleModule = {} }) => {
//   const router = useRouter();
//   const [cTitle, setCTitle] = useState("");
//   const [sTitle, setSTitle] = useState("");
//   const { isPublic, title, metaDescription } = singleModule;
//   const clickedUrl = ClickedLink.buy_now;
//   const { showCTA, showPersistentCta } = useScrollHandler("banner");
//   const { hasCourseAccess } = useCourseAccess(router?.query?.course);
//   const shouldUnlock = hasCourseAccess || isPublic;

//   useEffect(() => {
//     if (router.query.course === "api-for-pm") {
//       setCTitle("Become an API Product Manager");
//       setSTitle("Crack technical rounds of PM Interview with ease");
//     }
//     if (router.query.course === "pricing-for-pm") {
//       setCTitle("Unlock FREE chapters of Pricing & Monetisation course");
//       setSTitle(
//         "Nothing gives you visibility like working on monetisation problems. Learn strategies from Netflix, Bumble, etc."
//       );
//     }
//     if (router.query.course === "ux-writing") {
//       setCTitle("Master the art of UX writing");
//       setSTitle("How compelling copy can make you win users love & trust?");
//     }
//     if (router.query.course === "pm-interview") {
//       setCTitle(
//         "Unlock 50+ solved interview questions. Learn how to answer the hardest PM interview questions for FREE!"
//       );
//       setSTitle(
//         "Find most asked product design, improvement, metrics, execution, strategy, and behavioral questions at one place."
//       );
//     }
//   }, [router.query.course]);

//   const Module = router?.query?.module
//     .split("-")
//     .join(" ")
//     .replace(/\b\w/g, (l) => l.toUpperCase());

//   return (
//     <div>
//       <CommonHead
//         title={`${title} | ${Module} - Xplainerr`}
//         description={`${metaDescription} - Xplainerr`}
//         favIcon={"/favicon.ico"}
//       />
//       <NewSidebarLayout
//         course={router?.query?.course}
//         courseData={courseData}
//         hasAccess={hasCourseAccess}
//       >
//         {shouldUnlock ? (
//           <div className="mx-auto max-w-4xl px-4">
//             {singleModule?.type === "quiz" ? (
//               <DashQuiz quizId={singleModule?.slug} />
//             ) : (
//               <div className="blog__content text-align-justify mb-5">
//                 {renderNotionBlocks(blocks)}
//               </div>
//             )}
//           </div>
//         ) : (
//           <UpgradeToPremium />
//         )}

//         {!hasCourseAccess && (
//           <div className="hidden lg:block">
//             {showCTA && (
//               <div className="md:hidden">
//                 <CTA clickedUrl={clickedUrl} ctaBtnText="Buy Now" />
//               </div>
//             )}
//           </div>
//         )}
//       </NewSidebarLayout>
//     </div>
//   );
// };

// // Utility function for retrieving submodule info
// const getSubmoduleInfo = (courseData, moduleName, submoduleSlug) => {
//   for (const moduleSlug of courseData.modules) {
//     if (moduleSlug.slug === moduleName) {
//       for (const subModule of moduleSlug.subModules) {
//         if (subModule.slug === submoduleSlug) {
//           return { singleModule: subModule };
//         }
//       }
//     }
//   }
//   return null;
// };

// export const getServerSideProps = async ({
//   params: { course, module, submodule },
// }) => {
//   if (submodule === "favicon.ico") {
//     return { props: {} };
//   }

//   // Fetch course data
//   const response = await fetch(
//     `${BACKEND_API}/cms/get-course-content?c=${course}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   console.log(course, 'COURSE_CONTENT_API');

//   const courseData = await response.json();

//   // Get single lesson data
//   const submoduleInfo = getSubmoduleInfo(courseData, module, submodule);
//   if (submoduleInfo) {
//     const { singleModule } = submoduleInfo;
//     const blocks = await getBlocks(singleModule.id);
//     return {
//       props: {
//         courseData,
//         blocks,
//         singleModule,
//       },
//     };
//   } else {
//     return {
//       props: {
//         courseData,
//         blocks: [],
//       },
//     };
//   }
// };

// export default SubmodulePage;

import { MdOutlineArrowForwardIos } from "react-icons/md";


import NewSidebarLayout from "@/src/layout/NewSidebarLayout";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { CTA, PersistentCta } from "@/src/components/common";
import { renderBlock } from "@/src/components/common/notion/renderer";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import UpgradeToPremium from "@/src/components/v1/Shared/UpgradeToPremium";
import DashQuiz from "@/src/components/v3/course/learning/dash-quiz";
import { BACKEND_API } from "@/src/config/backend";
import { ClickedLink } from "@/src/config/course-config";
import useCourseAccess from "@/src/hooks/auth/useCourseAccess";
import useScrollHandler from "@/src/hooks/useScrollHandler";
import { getBlocks } from "@/src/lib/notion";
import { Fragment, useEffect, useState } from "react";
import Link from 'next/link';
import { MdArrowBackIos } from "react-icons/md";


// Callout component with more engaging styles and animations
const Callout = ({ icon, color, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6, ease: "easeInOut" }} // Slower transitions
    className={` p-6 ${color} my-6 rounded-3xl bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg`}
  >
    <div className="flex">
      <span className="mr-4 text-4xl">{icon}</span> {/* Larger icon */}
      <div>
        <h4 className="mb-2 text-xl font-extrabold">{title}</h4>{" "}
        {/* Larger title */}
        <p className="text-lg text-gray-800">{children}</p> {/* Larger text */}
      </div>
    </div>
  </motion.div>
);

const CodeBlock = ({ children }) => (
  <div className="rounded-2xl">
    <pre>{children}</pre>
  </div>
);

// Function to render blocks with specific styles for headings, code blocks, etc.
const renderNotionBlocks = (blocks) => (
  <AnimatePresence>
    {blocks.map((block, index) => {
      switch (block.type) {
        case "heading_1":
          return (
            <motion.h1
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-6 text-4xl font-extrabold text-blue-800"
            >
              {renderBlock(block, index)}
            </motion.h1>
          );
        case "heading_2":
          return (
            <motion.h2
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-5 text-5xl font-extrabold text-blue-600"
            >
              {renderBlock(block, index)}
            </motion.h2>
          );
        case "paragraph":
          return (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-4 text-sm   leading-relaxed text-gray-900"
            >
              {renderBlock(block, index)}
            </motion.p>
          );
          case "image":
            return (
              <div key={index} className="">
                {renderBlock(block, index)}
              </div>
            );
        case "code":
          return <CodeBlock key={index}>{renderBlock(block, index)}</CodeBlock>;
        case "callout":
          const isWarning = block.callout.icon?.emoji === "⚠️";
          const color = isWarning
            ? "bg-red-50 text-red-900"
            : "bg-blue-50  text-blue-900";
          const icon = isWarning ? "⚠️" : "💡";
          return (
            <Callout
              key={index}
              color={color}
              icon={icon}
              title={
                isWarning
                  ? "Oh no! Something bad happened!"
                  : "You should know!"
              }
            >
              {renderBlock(block, index)}
            </Callout>
          );
        default:
          return <div key={index}>{renderBlock(block, index)}</div>;
      }
    })}
  </AnimatePresence>
);

const SubmodulePage = ({
  courseData,
  blocks,
  singleModule = {},
  previousSubmodule,
  nextSubmodule,
}) => {
  const router = useRouter();
  const [cTitle, setCTitle] = useState("");
  const [sTitle, setSTitle] = useState("");
  const { isPublic, title, metaDescription } = singleModule;
  const clickedUrl = ClickedLink.buy_now;
  const { showCTA, showPersistentCta } = useScrollHandler("banner");
  const { hasCourseAccess } = useCourseAccess(router?.query?.course);
  const shouldUnlock = hasCourseAccess || isPublic;

  useEffect(() => {
    if (router.query.course === "api-for-pm") {
      setCTitle("Become an API Product Manager");
      setSTitle("Crack technical rounds of PM Interview with ease");
    }
    if (router.query.course === "pricing-for-pm") {
      setCTitle("Unlock FREE chapters of Pricing & Monetisation course");
      setSTitle(
        "Nothing gives you visibility like working on monetisation problems. Learn strategies from Netflix, Bumble, etc."
      );
    }
    if (router.query.course === "ux-writing") {
      setCTitle("Master the art of UX writing");
      setSTitle("How compelling copy can make you win users love & trust?");
    }
    if (router.query.course === "pm-interview") {
      setCTitle(
        "Unlock 50+ solved interview questions. Learn how to answer the hardest PM interview questions for FREE!"
      );
      setSTitle(
        "Find most asked product design, improvement, metrics, execution, strategy, and behavioral questions at one place."
      );
    }
  }, [router.query.course]);

  const Module = router?.query?.module
    .split("-")
    .join(" ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div>
      <CommonHead
        title={`${title} | ${Module} - Xplainerr`}
        description={`${metaDescription} - Xplainerr`}
        favIcon={"/favicon.ico"}
      />
      <NewSidebarLayout
        course={router?.query?.course}
        courseData={courseData}
        hasAccess={hasCourseAccess}
      >
        {shouldUnlock ? (
          <div className="mx-auto max-w-4xl px-4">
            {singleModule?.type === "quiz" ? (
              <DashQuiz quizId={singleModule?.slug} />
            ) : (
              <div className="blog__content text-align-justify mb-5">
                {renderNotionBlocks(blocks)}
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between py-4 my-2">
              {previousSubmodule ? (
                <Link
                  href={`/learning/${router.query.course}/${router.query.module}/${previousSubmodule.slug}`}
                  className="flex items-center text-gray-900 hover:underline font-semibold"

                >
                    <span className="mr-2 "><MdArrowBackIos />
                    </span>
                    <span>Prev</span>
                </Link>
              ) : (
                <div></div> 
              )}
              {nextSubmodule ? (
                <Link
                  href={`/learning/${router.query.course}/${router.query.module}/${nextSubmodule.slug}`}
                  className="flex items-center text-gray-900 hover:underline font-semibold"
>
                    <span>Next</span>
                    <span className="ml-2"><MdOutlineArrowForwardIos />
                    </span>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ) : (
          <UpgradeToPremium />
        )}

        {!hasCourseAccess && (
          <div className="hidden lg:block">
            {showCTA && (
              <div className="md:hidden">
                <CTA clickedUrl={clickedUrl} ctaBtnText="Buy Now" />
              </div>
            )}
          </div>
        )}
      </NewSidebarLayout>
    </div>
  );
};

// Utility function for retrieving submodule info
const getSubmoduleInfo = (courseData, moduleName, submoduleSlug) => {
  for (const moduleSlug of courseData.modules) {
    if (moduleSlug.slug === moduleName) {
      for (const subModule of moduleSlug.subModules) {
        if (subModule.slug === submoduleSlug) {
          return { singleModule: subModule };
        }
      }
    }
  }
  return null;
};

export const getServerSideProps = async ({
  params: { course, module, submodule },
}) => {
  if (submodule === "favicon.ico") {
    return { props: {} };
  }

  // Fetch course data
  const response = await fetch(
    `${BACKEND_API}/cms/get-course-content?c=${course}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(course, "COURSE_CONTENT_API");

  const courseData = await response.json();

  const moduleName = module; // from params
  const submoduleSlug = submodule; // from params

  let currentModule = null;
  let currentSubmodule = null;
  let previousSubmodule = null;
  let nextSubmodule = null;

  for (const mod of courseData.modules) {
    if (mod.slug === moduleName) {
      currentModule = mod;
      const submodules = mod.subModules;
      for (let i = 0; i < submodules.length; i++) {
        if (submodules[i].slug === submoduleSlug) {
          currentSubmodule = submodules[i];
          // Get previous and next submodules if they exist
          if (i > 0) {
            previousSubmodule = submodules[i - 1];
          }
          if (i < submodules.length - 1) {
            nextSubmodule = submodules[i + 1];
          }
          break;
        }
      }
      break;
    }
  }

  if (currentSubmodule) {
    const blocks = await getBlocks(currentSubmodule.id);
    return {
      props: {
        courseData,
        blocks,
        singleModule: currentSubmodule,
        previousSubmodule,
        nextSubmodule,
      },
    };
  } else {
    return {
      props: {
        courseData,
        blocks: [],
      },
    };
  }
};

export default SubmodulePage;







