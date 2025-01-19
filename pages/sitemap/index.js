import { useState } from "react";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
import { SITEMAP } from "@/src/constants/sitemap";

const Sitemap = () => {
  const [activeHeader, setActiveHeader] = useState("Courses");

  // set active header
  const handleSetActiveHeader = (header) => {
    setActiveHeader(header);
  };

  return (
    <>
      <CommonHead
        title={`Xplainerr | Sitemap`}
        description={`Xplainerr | Sitemap`}
        favIcon={"/favicon.ico"}
      />
      <PageLayout>
        <div className="container mx-auto px-3 pb-20 pt-5 lg:max-w-7xl">
          <h3 className="mb-4 mt-8  font-bold text-[#333] lg:mt-12 ">
            Sitemap
          </h3>

          {/* display all headers */}
          <nav
            className="flex max-w-full items-center gap-5 overflow-auto whitespace-nowrap border border-gray-200 px-1 pt-2 shadow-md"
            style={{ scrollbarWidth: "none" }}
          >
            {SITEMAP?.header?.map((headerItem, index) => (
              <p
                key={index}
                onClick={() => handleSetActiveHeader(headerItem)}
                className={`cursor-pointer border-b-[3px] pb-2 text-sm lg:px-2 lg:text-base  ${
                  activeHeader === headerItem
                    ? "border-primary font-semibold text-blue-500"
                    : "border-transparent text-gray-500"
                }`}
              >
                {headerItem}
              </p>
            ))}
          </nav>
          {/* display categories for active header */}
          <div className="mt-10">
            {activeHeader && (
              <div className="rounded-sm bg-[#fbfbfb] p-5 shadow-md">
                <h3 className="mb-4 font-semibold">Browse by {activeHeader}</h3>
                <div class=" mb-4 h-[2px] rounded-lg bg-[#DDD]"></div>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                  {SITEMAP[activeHeader]?.map((item) => (
                    <div key={item.title} className="text-sm text-[#212121]">
                      <a href={item.link}>{item.title}</a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Sitemap;
