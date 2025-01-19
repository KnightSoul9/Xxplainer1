// src\components\v3\Events\upcomingEvents.js

const TimeTable = ({ event, router }) => {
  return (
    <div
      className={`my-6 flex h-[40px]  w-[250px] space-x-2 rounded-lg border ${
        router?.pathname == "/events/[eventsSlug]" && "h-[60px] "
      }`}
    >
      <p className="flex items-center justify-center rounded-l-lg bg-primary p-4 text-sm font-semibold uppercase text-white">
        {event?.timeTable?.month}
      </p>
      <p className="text-[ #282828] flex items-center justify-center border-r-2 py-1.5 pl-2 pr-3 text-2xl font-semibold">
        {event?.timeTable?.date}
      </p>
      <p className="flex items-center justify-center text-sm font-semibold text-[#4E4E4E]">
        {event?.timeTable?.time}
      </p>
    </div>
  );
};

export default TimeTable;
