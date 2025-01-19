/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import useDirectoryContents from "@/src/hooks/useDirectoryContents";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  const folderName = `_${course?.slug}`;
  const directoryContents = useDirectoryContents(folderName);
  const firstModule = directoryContents[0]?.title;
  const firstSubModuleSlug = directoryContents[0]?.subModules[0]?.slug;

  // console.log(course, "cc");

  return (
    <div className="relative  rounded-md border border-[#EAECF0] pb-2">
      <div className="w-full">
        <img
          src={`${course?.cover_image}`}
          className="h-[180px] w-full "
          alt={course?.title}
          // width={271}
          // height={106}
        />
      </div>
      <div className="px-3.5">
        <h3 className="pt-4 text-lg font-bold capitalize leading-[30px]">
          {course.title}
        </h3>
        <p className="pb-2 text-sm font-medium capitalize leading-[33px] text-[#363636]">
          Instructor : {course?.instructor}
        </p>
        {course?.slug == "tech-for-product-managers" ? (
          <>
            <Link
              href={`/cohorts/tech-for-product-managers/course-content`}
              className="absolute bottom-2 left-2 flex h-[33px] w-[95%] justify-center rounded-[4px] border border-[#0070F4] bg-[#ECF5FF]"
            >
              <button  className="disabled:cursor-not-allowed text-sm font-semibold leading-[33px] text-[#0070F4]">
                Resume learning
              </button>
            </Link>
          </>
        ) : (
          <Link
            href={`learning/${course?.slug}/${firstModule}/${firstSubModuleSlug}`}
            className="absolute bottom-2  left-2 flex h-[33px] w-[95%] justify-center rounded-[4px] border border-[#0070F4] bg-[#ECF5FF]"
          >
            <button className="text-sm font-semibold leading-[33px] text-[#0070F4]">
              Start Course
            </button>
          </Link>
          
        )}
      </div>
    </div>
  );
};

const MyCourses = ({ allCourses }) => {
  // console.log(allCourses,'all')
  return (
    <div>
      <div className="grid grid-cols-1 gap-8  md:grid-cols-2 lg:mb-56 lg:grid-cols-3 xl:grid-cols-4 ">
        {allCourses &&
          allCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        {allCourses && allCourses.length === 0 && (
          <div className="flex min-h-[50vh] items-center justify-center pb-16">
            <h2 className="text-2xl  font-medium"> No courses found </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
