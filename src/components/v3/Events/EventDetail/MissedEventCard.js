// pages\events\[eventsSlug]\index.js

import Link from "next/link";

const MissedEventCard = () => {
  return (
    <div className="rounded-lg border bg-gray-50 p-5 lg:p-6">
      <h2 className="text-xl font-semibold lg:text-2xl ">
        Missed this event? Don&apos;t miss the next one
      </h2>
      <p className="my-4 text-neutral-600">
        Attend our live events to interact directly with industry leaders. Our
        events are packed with actionable insights and answers to tough career
        questions, so don&apos;t miss the next one.
      </p>
      <Link href="/events#upcoming">
        <button className=" mt-2 w-full rounded-3xl bg-primary px-2 py-3 font-semibold text-white hover:bg-primary_bold">
          See Upcoming Events
        </button>
      </Link>
    </div>
  );
};

export default MissedEventCard;
