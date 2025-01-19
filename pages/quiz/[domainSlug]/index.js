import Error from "@/pages/404";
import CardLoadingSkeltonContainer from "@/src/components/common/loading/CardLoadingSkelton";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { AllQuiz } from "@/src/components/v3/quiz";
import useAllQuiz from "@/src/hooks/useAllQuiz";
import PageLayout from "@/src/layout/PageLayout";
import Link from "next/link";
import { useRouter } from "next/router";

const DEFAULT_DESC = `Test your tech skills as a Product Manager. Can
you crack technical rounds of PM Interview at
Google, Amazon, Stripe etc. with ease?`;

const ListOfQuiz = () => {
  const router = useRouter();
  const { domainSlug } = router.query;
  
  const { allQuiz, loading , error } = useAllQuiz(domainSlug)

  if (error) return <Error />;
  // console.log(allQuiz, "all");

  const formattedDomainSlug = domainSlug
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <>
      <CommonHead
        title={`Xplainerr | List Of Quiz | ${formattedDomainSlug}`}
        description={`Xplainerr | List Of Quiz`}
        favIcon={"/favicon.ico"}
      />
      <PageLayout>
        {loading ? (
          <div className='container mx-auto px-4 pb-16 lg:max-w-7xl lg:py-[56px]'>
            <h3 className='mb-[32px] mt-8 px-4 text-center text-2xl font-bold text-[#333] lg:mt-0'>
              {formattedDomainSlug}
            </h3>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
              <CardLoadingSkeltonContainer itemCount={8} />
            </div>
          </div>
        ) : (
          <>
            {allQuiz?.length ? (
              <>
                <div className='container mx-auto px-4 pb-16 lg:max-w-7xl lg:py-[56px]'>
                  <h3 className='mb-[32px] mt-8 px-4 text-center text-2xl font-bold text-[#333] lg:mt-0'>
                    {formattedDomainSlug}
                  </h3>
                  <div>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
                      {allQuiz?.map((quiz, index) => {
                        return (
                          <AllQuiz
                            key={index}
                            quiz={quiz}
                            domainSlug={domainSlug}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='flex h-[80vh] flex-col items-center justify-center'>
                  <h2 className='text-3xl font-bold lg:text-4xl 2xl:text-5xl'>
                    Coming Soon
                  </h2>
                  <Link href={"/"}>
                    <h2 className='mt-6 cursor-pointer text-xl font-bold text-blue-600'>
                      Back to Home
                    </h2>
                  </Link>
                </div>
              </>
            )}
          </>
        )}
      </PageLayout>
    </>
  );
};

export default ListOfQuiz;
