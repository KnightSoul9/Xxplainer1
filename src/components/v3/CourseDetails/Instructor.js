import Image from "next/image";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { MdReviews } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { SiCoursera } from "react-icons/si";

const Instructor = ({ course }) => {
  return (
    <div>
      {course?.instructors?.map((instructor, index) => (
        <div key={index}>
          <h2 className="pt-5 pb-3 text-xl font-semibold lg:text-2xl">
            Instructor
          </h2>
         
          <div className="flex items-center gap-5 py-4">
            <Image
              src={instructor?.image}
              alt={instructor?.name}
              width={150}
              height={150}
              className="rounded-full"
            />

            <div className="flex flex-col space-y-2 text-sm md:text-base">

            <h2 className="font-medium  text-lg text-[#5624D0]">{instructor?.name}</h2>
            <h3 className="pb-3 text-sm font-medium text-[#6A6F73]">
            {instructor?.designation}
          </h3>


              {instructor?.ratings > 0 && (
                <p className="flex items-center gap-2">
                  <AiTwotoneStar className="text-amber-500 " />
                  {instructor?.ratings} Instructor Rating
                </p>
              )}

              {instructor?.reviews > 0 && (
                <p className="flex items-center gap-2">
                  <MdReviews />
                  {instructor?.reviews} Reviews
                </p>
              )}

              {instructor?.students > 0 && (
                <p className="flex items-center gap-2">
                  <GrGroup />
                   {instructor?.students} Students
                </p>
              )}

              {/* {instructor?.courses && (
                <p className="flex items-center gap-2">
                  <SiCoursera />
                  {instructor?.courses} Courses
                </p>
              )} */}
            </div>
          </div>
          <p>{instructor.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Instructor;
