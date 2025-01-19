import Image from "next/image";
import Link from "next/link";

const Blog = ({ blog, index }) => {
  // console.log(blog);

  const tag = blog?.frontmatter?.tags;

  return (
    <div className=" blog rounded-[5px] p-2 ">
      <div className="w-full">
        <Link href={`/blog/${blog.slug}`}>
          <Image
            src={blog?.frontmatter?.cover_image}
            className="blog-cover-image"
            alt={blog.frontmatter.title}
            width="362"
            height="180"
          />
        </Link>
      </div>

      <div className="card-bottom">
        <div className="p-2">
          <ul className="-m-1 flex flex-wrap text-xs font-medium">
            {tag && (
              <li className="m-1">
                <a
                  className="inline-flex rounded-full bg-blue-500 px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out hover:bg-blue-600"
                  href="P#0"
                >
                  {tag}{" "}
                </a>
              </li>
            )}

            <li className="m-1">
              <a
                className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-center text-gray-800 transition duration-150 ease-in-out hover:bg-blue-200"
                href="#0"
              >
                Intermediate
              </a>
            </li>
            <li className="m-1">
              {/* <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">4 min read</span> */}
            </li>
          </ul>
        </div>
        <Link href={`/blog/${blog.slug}`}>
          <h3 className="text-md xl:text-md pb-3 text-justify font-semibold">
            {blog.frontmatter.title}
          </h3>
        </Link>
        <p className="text-sm text-[#202020BF]">
          {blog.frontmatter.metaDescription.slice(0, 80) + "..."}
        </p>
      </div>
    </div>
  );
};

export default Blog;
