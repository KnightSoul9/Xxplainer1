// pages\events\index.js

import Image from "next/image";
import Link from "next/link";
import TimeTable from "./timeTable";

const UpcomingEvents = ({ event }) => {
  // console.log(event);
  return (
    <div className="mt:6 flex flex-col gap-6 rounded-md border p-6 lg:flex-row">
      <div className="basis-1/2">
        <div>
          <Image
            src={event?.image}
            width={500}
            height={500}
            alt={event?.title}
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <div className="basis-1/2">
        <div>
          <h2 className="text-3xl font-semibold lg:text-4xl ">
            {event?.title}
          </h2>
          <p className="mt-2 text-lg text-[#4E4E4E]">{event.description}</p>
          <TimeTable event={event}/>
          <div className="">
            <Link href={`/events/${event?.slug}`}>
              <button className="leading-16  flex h-[40px] min-h-[40px] w-[292px] flex-shrink-0 cursor-pointer select-none items-center justify-center rounded-full border border-primary bg-primary px-14 font-semibold tracking-tighter text-white shadow-inner outline-none hover:border-[2px]">
                Register for free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
