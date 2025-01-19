import Link from "next/link"
import Blog from "./Blog"

const Blogs = ({posts}) => {
  return (
    <div className="xl:container xl:mx-auto section__padding">
      <div className="text-center">
        <button className="customBtn">Blogs</button>
        <h2 className="customTitle">Read Our Trending Articles </h2>
      </div>
      <div className="flex justify-between items-center font-[500] pb-5">
        <p className="text-[#202020] text-lg md:text-[26px]">Latest articles</p>
        <Link href='/blog' className="text-[#626A72] ">
          <button className="bg-[#F5F6F7] py-2 md:py-[10px] px-3 md:px-[28px]">See All Articles</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.slice(0,6)?.map((blog, index) => (
          <Blog blog={blog} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Blogs
