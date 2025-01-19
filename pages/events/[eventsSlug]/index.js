import {
  EventRegisterForm,
  Info,
  MissedEventCard,
} from "@/src/components/v3/Events/EventDetail";
import TimeTable from "@/src/components/v3/Events/timeTable";
import { SINGLE_EVENT_DETAIL } from "@/src/constants/event";
import PageLayout from "@/src/layout/PageLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const EventDetail = () => {
  const router = useRouter();
  console.log(router);
  const [event, setEvent] = useState(SINGLE_EVENT_DETAIL);
  // console.log(event, "event");

  return (
    <>
      {event && (
        <PageLayout>
          <div className="container mx-auto px-4 pb-16 pt-6 lg:max-w-7xl lg:px-8 lg:py-[56px]">
            {/* Top Part  */}
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="lg:basis-8/12">
                <div>
                  <Image
                    src={event?.image}
                    alt={event?.title}
                    width={286}
                    height={135}
                    className="w-full rounded-lg"
                  />
                </div>
                {/* For mobile part  */}
                <div className=" lg:hidden">
                  <TimeTable event={event} router={router} />
                  <h2 className="text-xl font-medium   ">{event?.title}</h2>
                </div>
              </div>
              <div className="lg:basis-4/12">
                {router?.query?.ref == "past-event" ? (
                  <MissedEventCard event={event} />
                ) : (
                  <EventRegisterForm event={event} />
                )}
              </div>
            </div>

            {/* Details part  */}
            <div>
              <div className="mt-10 hidden  lg:block">
                <TimeTable event={event} router={router} />
              </div>
              {/* event details  */}
              <Info event={event} />
            </div>
          </div>
        </PageLayout>
      )}
    </>
  );
};

export default EventDetail;
