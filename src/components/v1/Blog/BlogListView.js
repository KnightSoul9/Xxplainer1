import Image from "next/image";
import Link from "next/link";

const BlogListView = ({ posts }) => {
  // console.log(posts);
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="pb-12 pt-12 md:pb-20 ">
          {/* Page header */}
          <div className="max-w-3xl pb-12 text-center md:pb-10 md:text-left">
            <h1 className="mb-2 text-4xl font-bold leading-tight tracking-tighter">
              Latest Blog
            </h1>
            <p className="text-md text-gray-600">
              Quick bytes to learn about API & get started with your technical
              product management career
            </p>
          </div>

          {/* Main content */}
          <div className="md:flex md:justify-between">
            {/* Articles container */}
            <div className="-mt-4 md:grow">
              {posts &&
                posts.map((post, index) => {
                  const date = new Date(post.last_edited_time).toLocaleString(
                    "en-US",
                    {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    }
                  );
                  const slug = post.properties?.Slug?.rich_text[0].text.content;
                  const postAuthor =
                    post?.properties?.Author?.rich_text[0]?.plain_text;
                  const metaDescription =
                    post?.properties?.metaDescription?.rich_text[0]?.plain_text;
                  const postAuthorImage =
                    post?.properties?.AuthorImage?.files[0]?.name;
                  console.log(post, "post");
                  // console.log(slug, 'slug')
                  return (
                    <>
                      <div
                        key={index}
                        className="flex items-center border-b border-gray-200 py-4  "
                      >
                        <div>
                          <header>
                            <h2 className="mb-2 text-2xl font-bold leading-snug tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="hover:underline"
                              >
                                {post.properties.Title.title[0].plain_text}
                              </Link>
                            </h2>
                          </header>
                          <div className="text-md mb-4 text-gray-600">
                            {metaDescription}
                          </div>
                          <footer className="text-sm">
                            <div className="flex items-center">
                              <div className="mr-3 flex shrink-0">
                                <a className="relative" href="#0">
                                  <span
                                    className="absolute inset-0 -m-px"
                                    aria-hidden="true"
                                  >
                                    <span className="absolute inset-0 -m-px rounded-full bg-white"></span>
                                  </span>
                                  <Image
                                    className="relative rounded-full"
                                    src={
                                      postAuthorImage ||
                                      "/images/mentors/deepak.svg"
                                    }
                                    alt={postAuthor || "Deepak Kumar"}
                                    width="32"
                                    height="32"
                                  />
                                </a>
                              </div>
                              <div>
                                <span className="text-gray-600">By </span>
                                <a
                                  className="font-medium hover:underline"
                                  href="#0"
                                >
                                  {postAuthor || "Deepak Kumar"}
                                </a>
                                <span className="text-gray-600">
                                  {" "}
                                  · {date}{" "}
                                </span>
                              </div>
                            </div>
                          </footer>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListView;
