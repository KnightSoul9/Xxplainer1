import { allCourse, courseCategories } from "@/src/config/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import Course from "./Course";


const AllCoursesView = () => {
  const [category, setCategory] = useState("most-popular");
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
      [...allCourse].filter((course) =>
        category === "most-popular" ? true : course.categorySlug === category
      ).length
    )
  }, [category])

  const handleClick = (slug) => {
    setCategory(slug);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5">
        {/********************************* Left site Category ******************************** */}
        <div className="basis-3/12  category ">
          <h3 className="text-lg font-semibold leading-6 pl-4 pt-2 pb-5">Categories</h3>
          <nav className=" ">
            <ul className="flex flex-col ">
              {courseCategories.map((item, index) => (
                <li
                  key={index}
                  onClick={() => { handleClick(item.slug) }}
                  className={`cursor-pointer capitalize pl-4 mb-4 leading-6 font-medium ${item.slug === category && "bg-[#0070F4] py-3 pl-4 text-white"}`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/********************************* Right site Course ******************************** */}
        <div className="basis-9/12">
          <p className="text-lg font-semibold leading-6 pb-5">Most Popular <span className="text-[#666666] ">({total})</span></p>
          <section className="grid gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 ">
            {[...allCourse]
              .filter((course) =>
                category === "most-popular" ? true : course.categorySlug === category
              )
              .map((item, index) => (
                <Course item={item} key={index} setTotal={setTotal} />
              ))}
          </section>

          {/********************************* View All ******************************** */}
          <div className="text-center mt-16 mb-28">
            <Link href='/courses' className="py-3 px-3 border border-[#008BDC] rounded-md hover:bg-[#008BDC] ">
              <button className="text-[#008BDC] hover:text-white text-sm font-semibold">View more courses</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCoursesView