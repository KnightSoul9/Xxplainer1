import Image from 'next/image';
import React from 'react'

const GetCertificate = ({ genCertificate }) => {
  const { name, instructor, course } = genCertificate;
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center justify-center  px-3">
      <div className=" relative" id="certificate">
        <h3 className="absolute top-[36%] md:top-[36.5%] lg:top-[37%] left-[33%] md:left-[36%] lg:left-[37%] font-[cursive] text-xs md:text-xl lg:text-2xl font-medium capitalize">
          {name}
        </h3>
        <h3 className="absolute top-[45%] md:top-[46%] left-[46%] font-[cursive] text-[10px] md:text-base lg:text-lg font-medium capitalize">
          {instructor}
        </h3>
        <h3 className="absolute top-[59%] lg:top-[59.3%] left-[49%] font-[cursive] text-[6px] md:text-sm font-medium capitalize">
          {course}
        </h3>
        <Image
          src="/certificate/certificateDemo.png"
          width={800}
          height={500}
          alt="certificate"
          className="rounded-md border"
        />
      </div>
    </div>
  );
};

export default GetCertificate