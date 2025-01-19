// src\components\v1\course\DynamicCourseContent\NotionContent\NotionCourseContent.js

import Link from "next/link";
import { useRouter } from "next/router";
import { FaLock } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";


const NotionContent = ({
  content,
  index,
  courseSlug,
  hasAccess,
}) => {
  const router = useRouter();
  const LessonSlug = content.properties?.Slug?.rich_text[0].text.content;
  const Title = content?.properties?.Title?.title[0]?.plain_text;
  const Module = content?.properties?.module?.rich_text[0]?.plain_text;
  const LessonUnlocked =
    content?.properties?.lessonUnlocked?.rich_text[0]?.plain_text;

  return (
    <Link
      href={`/learning-v2/${courseSlug}/${Module}/${LessonSlug}`}
      key={index}
      className='md:text-md flex items-center justify-between  border-[#fff] bg-[#fff]  text-xs font-medium text-[#333333] shadow-lg md:text-sm  '
    >
      <div
        className={`flex w-full justify-between px-2 py-3.5 hover:rounded-md  ${
          router.query.submodule == LessonSlug
            ? "bg-[#e1e1e1]"
            : "hover:bg-[#e6e6e6]"
        }`}
      >
        <div className='flex items-center justify-center gap-2 '>
          <IoDocumentTextOutline size={24} />
          <p
            className={`text-xs font-medium md:text-sm  lg:text-base ${
              router.query.submodule == LessonSlug ? "" : "text-[#5f5f60]"
            }`}
          >
            {Title}
          </p>
        </div>
        {/* {LessonUnlocked == "false" && <FaLock />} */}
        {!hasAccess && LessonUnlocked == "false" && <FaLock />}
      </div>
    </Link>
  );
};

export default NotionContent;
