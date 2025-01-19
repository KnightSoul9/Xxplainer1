import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { PastEvents, UpcomingEvents } from "@/src/components/v3/Events";
import { PAST_EVENTS, UPCOMING_EVENTS } from "@/src/constants/event";
import PageLayout from "@/src/layout/PageLayout";

const Events = () => {
  return (
    <>
      <CommonHead
        title={`Xplainerr | Events`}
        description={`Xplainerr | Events`}
        favIcon={"/favicon.ico"}
      />
      <PageLayout>
        <div className="container mx-auto px-3 pb-16 lg:max-w-7xl lg:py-[56px]">
          {/* Past Events */}
          <h3 className="mb-[32px] mt-8 text-2xl font-bold text-[#333] lg:mt-12 lg:text-4xl">
            Past Events
          </h3>
          <div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {PAST_EVENTS.map((event, index) => (
                <PastEvents key={index} event={event} />
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <h3
            className="my-[32px] mt-8 text-2xl font-bold text-[#333]  lg:text-4xl"
            id="upcoming"
          >
            Upcoming Events
          </h3>
          <div>
            <div className="grid grid-cols-1 gap-5 ">
              {UPCOMING_EVENTS.map((event, index) => (
                <UpcomingEvents key={index} event={event} />
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Events;
