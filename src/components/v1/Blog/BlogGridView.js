import Link from "next/link";
import SectionHeading from "../Shared/sectionHeading";
import CardLayout from "@/src/layout/CardLayout";
import { FiArrowRight } from "react-icons/fi";

const BlogGridView = ({ posts, disableHeader }) => {
  // console.log(posts);
  return (
    <div className='container  mx-auto px-4 pb-16 lg:max-w-7xl lg:py-7'>
      <SectionHeading heading={"Trending Blogs"} />
      <div className=''>
        <div className='pb-12 pt-12 lg:py-7'>
          {/* Page header */}
          {!disableHeader && (
            <div className='max-w-3xl pb-12 text-center md:pb-20 md:text-left'>
              <h1 className='text-2xl font-bold md:text-3xl lg:text-5xl'>
                All Blogs
              </h1>
            </div>
          )}

          {/* Articles list */}
          {/* single card  */}
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {posts.slice(0, 4)?.map((el, index) => {
              return (
                <CardLayout
                  key={index}
                  imageUrl={el?.frontmatter?.cover_image}
                  title={el?.frontmatter?.title}
                  description={el?.frontmatter?.metaDescription}
                  shortDescription={el?.frontmatter.metaDescription.slice(
                    0,
                    150
                  )}
                  altText={el?.frontmatter?.title}
                  ctaText='Read More'
                  destination={`/blog/${el.slug}`}
                  width='w-full'
                  height='h-[230px]'
                ></CardLayout>
              );
            })}
          </div>

          <div className='mt-5 text-center'>
            <Link href='/blog'>
              <button className='button mx-auto mt-9 flex items-center gap-5 px-4  py-2.5 '>
                See All Articles
                <FiArrowRight size={24} className='font-bold' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGridView;
