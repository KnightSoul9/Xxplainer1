// InterviewExperience.js

import Image from "next/image";
import React from "react";

const InterviewExperience = () => {
  return (
    <div className="interview-experience container mx-auto max-w-7xl px-4 pb-12 pt-7 md:px-8 lg:pb-16 lg:pt-12">
      <div className="">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center ">
          <h2 className="text-center text-3xl font-semibold text-[#101828DE] lg:text-[36px] ">
            A PM tryst with technical round in Google Product Interview
          </h2>
        </div>
      </div>
      <div className="flex flex-col space-y-5">
        <p>
          It was a sunny day in 2018, and I had flown to Hyderabad for my Google
          PM interview. Google usually does screening rounds before inviting for
          onsite interviews. I had terrific feedback in the screening rounds.
        </p>
        <p>
          In the onsite interviews, Google tests various hats of PMs -
          analytical, product design, business, strategy, and tech. I had
          prepared well for all, or at least I thought I had 🙂
        </p>
        <p>
          The first onsite interview happened to be the technical round. I come
          from a chemical engineering background and don’t have coding
          experience. At various times, I had tried to learn Javascript, HTML,
          Python, etc., rather unsuccessfully because there was never enough
          incentive to do so. In preparation for Google’s technical round, I had
          covered the data structure and algorithm basics plus the system design
          questions.
        </p>
        <p>
          The interviewer gave me one algorithm problem and one system design. I
          solved the algorithm problem. In the system design question, I mumbled
          a few things for the next 5 mins — sharding, database, table
          structures, etc. The interview got over quicker than expected, and I
          knew that my chances of cracking Google were over.
        </p>
        <div className="flex items-center space-x-4 pt-5">
          <Image
            src="https://i.ibb.co/s2gFs8t/1661920078881.jpg"
            alt="deepak"
            width={100}
            height={100}
            className=" rounded-[100%] border"
          />
          <p>
            <strong>Deepak Singh</strong> (Author, `Tech Simplified for PMs` |
            Product Leadership at Flipkart, upGrad, Unacademy)
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterviewExperience;
