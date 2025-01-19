import Link from "next/link";
import { BsFillCheckCircleFill } from "react-icons/bs";

const FeaturesBlocks = ({ featureBlockProps }) => {
  return (
    <section className={`relative bg-[#F5F5F7]`}>
      {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-6 pb-16 ">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:py-6 md:pb-8">
            <h2 className="text-center text-3xl font-semibold text-[#101828DE] lg:text-[36px] ">
              {" "}
              {featureBlockProps?.heading || "Explore new domains"}{" "}
            </h2>
            <p className="pb-8 pt-2.5 text-center text-base font-medium text-[#475467] md:text-lg ">
              {featureBlockProps?.description}
            </p>
          </div>

          <div className="mx-auto grid max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {featureBlockProps?.featureBlockData &&
              featureBlockProps.featureBlockData.map((item, index) => {
                return (
                  <CardFeatureLayout
                    key={index}
                    item={item}
                    index={index}
                    courseSlug={featureBlockProps.slug}
                  />
                );
              })}
          </div>

          {/* {featureBlockProps?.slug === "" && (
            <div className="mx-auto grid max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
              {featureBlockProps?.featureBlockData &&
                featureBlockProps.featureBlockData.map((item, index) => {
                  return (
                    <CardFeatureLayout key={index} item={item} index={index} />
                  );
                })}
            </div>
          )}

          {featureBlockProps?.slug === "ux-writing" && (
            <div className="mx-auto grid max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
              {featureBlockProps?.featureBlockData &&
                featureBlockProps.featureBlockData.map((item, index) => {
                  return (
                    <CardFeatureLayout key={index} item={item} index={index} />
                  );
                })}
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

const CardFeatureLayout = ({ item, index, courseSlug }) => {
  let chapterURL = "#";
  chapterURL = item.slug && `/learn/${courseSlug}/${item.slug}`;

  if (chapterURL === "#") {
    return (
      <div
        key={index}
        style={{ background: item.color }}
        className="relative mt-2  flex cursor-pointer flex-col items-center rounded border bg-white p-8 text-center shadow-xl transition duration-700 ease-out hover:-translate-y-1"
      >
        <h4 className="text-md mb-1 font-bold leading-snug tracking-tight">
          {item.title}
        </h4>
        <p className="text-black-600 text-center">{item.description}</p>
      </div>
    );
  } else {
    return (
      <Link href={chapterURL}>
        <div
          key={index}
          style={{ background: item.color }}
          className="relative mt-2  flex cursor-pointer flex-col items-center rounded border bg-white p-8 text-center shadow-xl transition duration-700 ease-out hover:-translate-y-1"
        >
          <h4 className="text-md mb-1 font-bold leading-snug tracking-tight">
            {item.title}
          </h4>
          <p className="text-black-600 text-center">{item.description}</p>
        </div>
      </Link>
    );
  }
};

const PointerFeatureLayout = ({ item, index }) => {
  return (
    <div key={index} className="courseCard flex items-center gap-5 ">
      <p>
        <BsFillCheckCircleFill size={24} className="text-[#5454d4]" />
      </p>
      <p className="text-black-600 ">{item}</p>
    </div>
  );
};

export default FeaturesBlocks;
