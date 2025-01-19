// pages\events\[eventsSlug]\index.js

const Info = ({ event }) => {
  return (
    <div className="flex ">
      <div className=" lg:basis-8/12">
        <h2 className="hidden text-2xl font-bold lg:block ">{event?.title}</h2>
        <h2 className="mt-4 text-xl font-semibold lg:hidden ">Event Details</h2>
        <p className="neutral-600 mt-2 text-sm lg:text-lg">
          {event.description}
        </p>
        <div>
          <ul className="py-2 pl-4 ">
            {event?.keyPoints?.map((el, index) => {
              return (
                <li
                  key={index}
                  style={{ listStyleType: "disc" }}
                  className="pb-1 text-sm lg:text-base"
                >
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="my-3 text-xl font-semibold  lg:text-2xl">Speakers</h2>
          <div className="grid grid-cols-1 gap-3">
            {event?.speakers.map((speaker, index) => (
              <div key={index}>
                <h3 className="text-base font-medium text-neutral-600 lg:text-lg">
                  {speaker?.name}
                </h3>
                <h3 className="text-sm lg:text-base">{speaker?.designation}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
