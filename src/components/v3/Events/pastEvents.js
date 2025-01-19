// pages\events\index.js

import Image from "next/image";
import Link from "next/link";

const PastEvents = ({ event }) => {
  return (
    <div className="flex flex-col rounded-lg border px-4 pb-6 pt-4">
      <div>
        <Image
          src={event?.image}
          alt={event?.title}
          width={286}
          height={135}
          className="w-full rounded-lg"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h4 className="py-2 text-2xl font-semibold tracking-[-0.015em] text-[#222222]">
            {event?.title}
          </h4>
          <p className="tracking-[-0.015em] text-[#4E4E4E]">
            {event?.description}
          </p>
        </div>
        <div className="mt-4">
          <Link href={`/events/${event?.slug}?ref=past-event`}>
            <button className="leading-16  flex h-[40px] min-h-[40px] w-full flex-shrink-0 cursor-pointer select-none items-center justify-center rounded-full border border-primary bg-transparent px-14 font-semibold tracking-tighter text-primary shadow-inner outline-none hover:border-[2px]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
