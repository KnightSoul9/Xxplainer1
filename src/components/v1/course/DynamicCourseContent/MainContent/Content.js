
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaLock } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const Content = ({ content, index, course, courseSlug, hasAccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleView = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    const titleFromURL = router?.query?.module;
    if (titleFromURL === content?.slug) {
      setIsOpen(true);
    }
  }, [router.pathname, content.slug, router?.query?.module]);

  return (
    <div key={index} className="mb-4">
      {/* Module Header */}
   
      <div
  className="flex items-center justify-between px-4 py-3 mb-4 bg-gray-900 hover:bg-gray-800 cursor-pointer"
  onClick={toggleView}
>
  <div className="flex items-center space-x-3">
    <div>
      <h3 className="text-md font-semibold text-white">
        {content?.name}
      </h3>
      <p className="text-sm text-gray-400">
        {content.subModules?.length} lessons
      </p>
    </div>
  </div>
  <div className="w-8 h-8 flex items-center justify-center text-white rounded-full">
    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
  </div>
</div>

      {/* Submodules */}
      {isOpen && (
        <div className="pl-2">
          {content?.subModules.map((subModule, idx) => {
            const isActive = router.query.submodule === subModule.slug;
            return (
              <Link
                href={`/learning/${courseSlug}/${content?.slug}/${subModule?.slug}`}
                key={idx}
                className={`block py-2 px-4 rounded-md mb-1 ${
                  isActive
                    ? "bg-gray-700 bg-opacity-10 shadow-sm text-gray-600"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <IoDocumentTextOutline />
                    <span className="text-sm">{subModule?.title}</span>
                  </div>
                  {!hasAccess && !subModule?.isPublic && (
                    <FaLock className="text-gray-400" />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Content;
