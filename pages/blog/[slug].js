import { renderBlock } from "@/src/components/common/notion/renderer";
import BackButton from "@/src/components/v1/Blog/BackButton";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import BlogHeader from "@/src/components/v3/Blog/BlogHeader";
import RelatedBlog from "@/src/components/v3/Blog/RelatedBlog";
import RelatedQuiz from "@/src/components/v3/Blog/RelatedQuiz";
import { AllQuiz } from "@/src/components/v3/quiz";
import useAllQuiz from "@/src/hooks/useAllQuiz";
import PageLayout from "@/src/layout/PageLayout";
import { formatDate } from "@/src/lib/formateDate";
import { getBlocks, getDatabase, getPageFromSlug } from "@/src/lib/notion";
import { Fragment } from "react";

const category = "Blog";

const SinglePost = ({ blocks, page, posts }) => {
  const Title = page?.properties?.Title?.title[0]?.plain_text;
  const formattedDate = formatDate(page?.last_edited_time);

  const domainSlug = "product-management";

  const { allQuiz } = useAllQuiz(domainSlug);

  // Filter By Tags Start
  const Tags = page?.properties?.Tags?.rich_text[0]?.plain_text;
  const blogTags = Tags ? Tags.split(",").map((tag) => tag.trim()) : [];
  // console.log(Tags, blogTags, "Tags");

  const relatedData = blogTags.reduce((tag, currentTag) => {
    // Find quizzes with the current tag
    const quizzesWithTag = allQuiz?.filter((quiz) => {
      const quizTags = quiz?.quiz_tag?.split(",").map((tag) => tag.trim());
      return quizTags?.includes(currentTag);
    });

    if (quizzesWithTag?.length > 0) {
      tag.push(...quizzesWithTag);
    }
    return tag;
  }, []);

  // Filter out duplicate entries
  const uniqueRelatedData = relatedData.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.quiz_title === item.quiz_title)
  );

  console.log(uniqueRelatedData, "uniqueRelatedData");
  // Filter By Tags End

  // console.log(allQuiz, "all");

  return (
    <div>
      <CommonHead
        title={`${Title} - Blog | Xplainerr.com`}
        description={`${Title}`}
      />
      <main>
        <PageLayout>
          <div className='container mx-auto my-2 max-w-7xl px-5 '>
            <div className=' pt-5  lg:pt-1 '>
              <BackButton />

              <BlogHeader
                category={category}
                formattedDate={formattedDate}
                Title={Title}
              />

              {/* Main Content Here  */}
              <div className='flex flex-col gap-20 lg:flex-row'>
                <section className='lg:basis-8/12'>
                  {blocks.map((block) => (
                    <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                  ))}
                  <BackButton />
                </section>
                <div className='border-l px-10 pb-10 pl-5 lg:basis-4/12'>
                  <RelatedBlog
                    posts={posts}
                    page={page}
                    domainSlug={domainSlug}
                    uniqueRelatedData={uniqueRelatedData}
                  />
                </div>
              </div>
            </div>
            {/* Related Quiz  */}
            {uniqueRelatedData?.length > 0 && (
              <RelatedQuiz
                domainSlug={domainSlug}
                uniqueRelatedData={uniqueRelatedData}
              />
            )}
          </div>
        </PageLayout>
      </main>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;
  const page = await getPageFromSlug(slug);
  console.log(page.id, slug, "console");
  const blocks = await getBlocks(page.id);
  const posts = await getDatabase();

  return {
    props: {
      blocks,
      page,
      posts,
    },
  };
};

export default SinglePost;
