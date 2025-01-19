// src\layout\CardLayout.js

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const CardLayout = ({
  title,
  shortDescription,
  description,
  imageUrl,
  altText,
  ctaText,
  destination,
  children,
  height,
  width,
}) => {
  const [expand, setExpand] = useState(false);
  const router = useRouter();
  // console.log(router.query);

  return (
    <div className='flex flex-col rounded-lg border pb-6'>
      <div>
        <Image
          src={imageUrl}
          width={310}
          height={155}
          alt={altText}
          className={`${width !== "" ? width : ""} ${
            height !== "" ? height : ""
          }`}
        />
      </div>
      <div className='flex flex-1 flex-col justify-between px-3'>
        <div>
          <h4 className='pt-4 text-[17px] font-semibold text-[#333]'>
            {title}
          </h4>
          {children}
          <p className='text-sm text-gray-400'>
            {!expand && shortDescription + "..."}{" "}
            {!expand && description?.length > 150 && (
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
          <Link href={destination}>
            <button
              type='submit'
              className='focus:ring-offset-2focus:ring-indigo-500 border-1 text-indigo   inline-flex w-full items-center justify-center  rounded-md border px-5 py-3 text-base font-medium leading-4 shadow-sm hover:bg-primary_bold hover:text-white focus:outline-none focus:ring-2'
            >
              {ctaText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
