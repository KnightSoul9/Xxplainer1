import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const CourseCard = ({ item }) => {
  // console.log(item)
  return (
    <div className=" rounded-[9px] border border-[#EAECF0]">
      <div>
        <Image
          src={`/images/courses/${item.coverImage}`}
          className="w-full"
          alt={item.title}
          width={271}
          height={106}
        />
      </div>
      <div className="px-4">
        <h3 className="pb-1 pt-4 text-lg font-bold capitalize leading-[30px]">
          {item.title}
        </h3>
        <button className="rounded-[32px] bg-[#FFFBEC] px-2.5 py-[2px]  text-xs font-medium capitalize leading-[32px] text-[#FFAE00]">
          {item.category}
        </button>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center gap-1">
            <AiFillStar className="text-[#FFAE00]" />
            <p className="text-sm font-medium text-[#666666]">{item.ratings}</p>
          </div>
          <span className="text-[#CAE7FF]">|</span>
          <p className="text-sm font-medium text-[#666666]">
            {item.learners} learners
          </p>
        </div>
        <Link
          href="/courses"
          className=" mb-3 mt-10 flex h-[33px] w-full justify-center rounded-[4px] border border-[#0070F4] bg-[#ECF5FF]"
        >
          <button className="text-sm font-semibold leading-[33px] text-[#0070F4] ">
            View Course
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
