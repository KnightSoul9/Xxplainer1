// pages\quiz\[domainSlug]\index.js

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoQuestion } from "react-icons/go";
import { MdOutlineAccessTime } from "react-icons/md";

const AllQuiz = ({ quiz, domainSlug }) => {
  const [expand, setExpand] = useState(false);
  // console.log(quiz?.seoMetaData, "quiz");
  const description = quiz?.seoMetaData?.meta_description;
  return (
    <div className='flex flex-col rounded-lg border  pb-6 '>
      <div>
        <Image
          // src={quiz?.seoMetaData?.preview_image}
          src={quiz?.seoMetaData?.preview_image || "/quiz/fsd-min.png"}
          alt={quiz?.quiz_title}
          width={286}
          height={135}
          className='h-[200px] w-full border-b'
        />
      </div>
      <div className='flex flex-1 flex-col justify-between px-3'>
        <div>
          <h4 className='pt-4 text-[17px] font-semibold text-[#333]'>
            {quiz?.quiz_title}
          </h4>
          <div className='my-1 mb-4 flex items-center space-x-5  text-sm text-gray-400'>
            <div className='flex items-center space-x-1'>
              <GoQuestion />
              <p> 10 Questions</p>
            </div>
            <div className='flex items-center space-x-1'>
              <MdOutlineAccessTime />
              <p>10 Mins</p>
            </div>
          </div>
          <p className='text-sm text-gray-400'>
            {!expand && description?.slice(0, 100) + "..."}{" "}
            {!expand && (
              <button
                className='text-xs text-primary underline'
                onClick={() => setExpand(true)}
              >
                Read more
              </button>
            )}
            {expand && description}{" "}
            {expand && (
              <button
                className='text-sm text-primary underline'
                onClick={() => setExpand(false)}
              >
                Show less
              </button>
            )}
          </p>
        </div>
        <div className='mt-4'>
          <Link href={`/quiz/${domainSlug}/${quiz?.metaData?.quiz_slug}`}>
            <button
              type='submit'
              className='focus:ring-offset-2focus:ring-indigo-500 border-1 text-indigo   inline-flex w-full items-center justify-center  rounded-md border px-5 py-3 text-base font-medium leading-4 shadow-sm hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2'
            >
              Attempt Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllQuiz;
