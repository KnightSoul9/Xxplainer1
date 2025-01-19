import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/src/lib/formateDate";

const RelatedBlog = ({ posts, page, domainSlug, uniqueRelatedData }) => {
  // console.log(posts, "posts");
  // console.log(page, "page");
  const authorName = page?.properties?.Author?.rich_text[0]?.plain_text;

  const authorImage = page?.properties?.AuthorImage?.files[0]?.name;
  const filteredPosts = posts.filter((post) => post.id !== page.id);

  // console.log(uniqueRelatedData, "uniqueRelatedData");

  return (
    <>
      <div className='hidden lg:block'>
        {/* <p>Posted by</p>
        <div className='flex items-center gap-3 pt-4'>
          <Image
            src={authorImage || "/images/mentors/deepak.svg"}
            alt={authorName || "Deepak Kumar"}
            width={40}
            height={40}
            className='rounded-[50%]'
          />
          <div>
            <h4 className='font-bold'>{authorName || "Deepak Kumar"}</h4>
            <p>Software engineer 2</p>
            <p className='text-xs'>{formatDate(page?.last_edited_time)}</p>
          </div>
        </div> */}
      </div>
      <div className='flex flex-col py-2 lg:py-16'>
        <h4 className='pb-3 text-lg font-semibold'>Related reading</h4>
        <div className='grid grid-cols-1 gap-5'>
          {filteredPosts.slice(0, 3).map((post) => {
            const slug = post.properties?.Slug?.rich_text[0].text.content;
            const postAuthor =
              post?.properties?.Author?.rich_text[0]?.plain_text;
            const postAuthorImage =
              post?.properties?.AuthorImage?.files[0]?.name;

            return (
              <div key={post.id} className=''>
                <Link
                  href={`/blog/${slug}`}
                  className='font-semibold leading-[1.5rem] hover:underline'
                >
                  <h3>{post.properties.Title.title[0].plain_text}</h3>
                </Link>
                <div className='mt-2 flex items-center gap-3'>
                  <Image
                    src={postAuthorImage || "/images/mentors/deepak.svg"}
                    alt={postAuthor || "Deepak Kumar"}
                    width={38}
                    height={38}
                    className='rounded-[50%]'
                  />
                  <div className='text-[#2e2e2e]'>
                    <h4 className='font-sm '>{postAuthor || "Deepak Kumar"}</h4>
                    <p className='text-xs'>
                      {formatDate(post?.last_edited_time)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </>
  );
};

export default RelatedBlog;
