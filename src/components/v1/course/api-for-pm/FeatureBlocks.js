import { pricingCardText } from "@/src/config/constants";
import { BsFillCheckCircleFill } from "react-icons/bs";

const FeaturesBlocks = ({ heading, course }) => {
  return (
    <section className={`relative bg-[#030a21]`}>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-6 md:py-12">
          
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-8">
            <h3 className="mb-4 p-4 text-2xl font-bold leading-4 text-[#f6f6f6de] lg:text-4xl">
              {heading || "Explore new domains"}
            </h3>
            <p className="text-sm text-[#f6f6f6de] lg:text-lg ">
              As Product Managers, it is often not easy to understand technology
              and for those getting started it might even be a little over
              whelming. If not anything you should at least be really
              comfortable with the world of APIs.
            </p>
          </div>

          <div className="mx-auto grid max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {pricingCardText[course] &&
              pricingCardText[course].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="courseCard flex items-center gap-5 "
                  >
                    <p>
                      <BsFillCheckCircleFill
                        size={24}
                        className="text-[#91744d]"
                      />
                    </p>
                    <p className="text-[#bababa] ">{item.des}</p>
                  </div>
                );
              })}
          </div>


        </div>
      </div>
    </section>
  );
};

export default FeaturesBlocks;
