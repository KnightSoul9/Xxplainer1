import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ListOfResource = () => {
  const router = useRouter();
  const { resourceSlug } = router.query;

  const formattedSlug = resourceSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <>
      <>
        <CommonHead
          title={`Xplainerr | List Of Resource`}
          description={`Xplainerr | List Of Resource`}
          favIcon={"/favicon.ico"}
        />
        <>
          <PageLayout>
            <div className="container mx-auto px-4 pb-16 lg:max-w-7xl lg:py-[56px]">
              <h3 className="mb-[32px] mt-8 px-4 text-center text-2xl font-bold text-[#333] lg:mt-0">
                Resource of {formattedSlug}
              </h3>
              <div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-md border">
                    <div className="">
                      <Image
                        src="/quiz/fsd-min.png"
                        alt="quiz"
                        width={286}
                        height={135}
                        className="w-full"
                      />
                    </div>
                    <div className="py-4 pl-[15px] pr-[23px]">
                      <h4 className="text-[17px] font-semibold text-[#333]">
                        Resource Title
                      </h4>
                      <ul className="py-2 pl-4 text-sm text-[#484848]">
                        <li style={{ listStyleType: "disc" }} className="pb-1">
                          {" "}
                          Tech 101{" "}
                        </li>
                        <li style={{ listStyleType: "disc" }} className="pb-1">
                          Everything about databases{" "}
                        </li>
                        <li style={{ listStyleType: "disc" }} className="pb-1">
                          AI & LLM
                        </li>
                      </ul>
                      <Link href={`/resource/${resourceSlug}/1`}>
                        <button
                          type="submit"
                          className="focus:ring-offset-2focus:ring-indigo-500 border-1 text-indigo  my-3  inline-flex w-full items-center justify-center    rounded-md border px-5 py-3 text-base font-medium leading-4 shadow-sm hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2"
                        >
                          View resource
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-md border">
                    <div className="">
                      <Image
                        src="/quiz/fsd-min.png"
                        alt="quiz"
                        width={286}
                        height={135}
                        className="w-full"
                      />
                    </div>
                    <div className="py-4 pl-[15px] pr-[23px]">
                      <h4 className="text-[17px] font-semibold text-[#333]">
                        Resource Title
                      </h4>
                      <ul className="py-2 pl-4 text-sm text-[#484848]">
                        <li style={{ listStyleType: "disc" }} className="pb-1">
                          {" "}
                          Tech 101{" "}
                        </li>
                        <li style={{ listStyleType: "disc" }} className="pb-1">
                          Everything about databases{" "}
                        </li>
                        <li style={{ listStyleType: "disc" }} className="pb-1">
                          AI & LLM
                        </li>
                      </ul>
                      <Link href={`/resource/${resourceSlug}/1`}>
                        <button
                          type="submit"
                          className="focus:ring-offset-2focus:ring-indigo-500 border-1 text-indigo  my-3  inline-flex w-full items-center justify-center    rounded-md border px-5 py-3 text-base font-medium leading-4 shadow-sm hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2"
                        >
                          View resource
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-md border">
                    <div className="">
                      <Image
                        src="/quiz/fsd-min.png"
                        alt="quiz"
                        width={286}
                        height={135}
                        className="w-full"
                      />
                    </div>
                    <div className="py-4 pl-[15px] pr-[23px]">
                      <h4 className="text-[17px] font-semibold text-[#333]">
                        Resource Title
                      </h4>
                      <ul className="py-2 pl-4 text-sm text-[#484848]">
                        <li style={{ listStyleType: "disc" }} className="pb-1">
                          {" "}
                          Tech 101{" "}
                        </li>
                        <li style={{ listStyleType: "disc" }} className="pb-1">
                          Everything about databases{" "}
                        </li>
                        <li style={{ listStyleType: "disc" }} className="pb-1">
                          AI & LLM
                        </li>
                      </ul>
                      <Link href={`/resource/${resourceSlug}/1`}>
                        <button
                          type="submit"
                          className="focus:ring-offset-2focus:ring-indigo-500 border-1 text-indigo  my-3  inline-flex w-full items-center justify-center    rounded-md border px-5 py-3 text-base font-medium leading-4 shadow-sm hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2"
                        >
                          View resource
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-md border">
                    <div className="">
                      <Image
                        src="/quiz/fsd-min.png"
                        alt="quiz"
                        width={286}
                        height={135}
                        className="w-full"
                      />
                    </div>
                    <div className="py-4 pl-[15px] pr-[23px]">
                      <h4 className="text-[17px] font-semibold text-[#333]">
                        Resource Title
                      </h4>
                      <ul className="py-2 pl-4 text-sm text-[#484848]">
                        <li style={{ listStyleType: "disc" }} className="pb-1">
                          {" "}
                          Tech 101{" "}
                        </li>
                        <li style={{ listStyleType: "disc" }} className="pb-1">
                          Everything about databases{" "}
                        </li>
                        <li style={{ listStyleType: "disc" }} className="pb-1">
                          AI & LLM
                        </li>
                      </ul>
                      <Link href={`/resource/${resourceSlug}/1`}>
                        <button
                          type="submit"
                          className="focus:ring-offset-2focus:ring-indigo-500 border-1 text-indigo  my-3  inline-flex w-full items-center justify-center    rounded-md border px-5 py-3 text-base font-medium leading-4 shadow-sm hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2"
                        >
                          View resource
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageLayout>
        </>
      </>
    </>
  );
};

export default ListOfResource;
