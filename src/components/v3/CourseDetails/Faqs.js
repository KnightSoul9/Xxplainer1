import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Faqs = ({ course }) => {
  // console.log(course);
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="">
      <h2 className="pb-3 pt-5 text-xl font-semibold lg:pt-8 lg:text-2xl">
        Frequently Asked Questions
      </h2>
      <div className=" lg:pb-8">
        {course?.faqData?.map((faq, index) => (
          <div key={index} className="mb-3 rounded-md border-b  pb-2">
            <div
              className="flex cursor-pointer items-center justify-between text-lg"
              onClick={() => onTitleClick(index)}
            >
              <p>{faq.question}</p>
              <div className="">
                {activeIndex === index ? (
                  <BsChevronUp
                    className=" font-extrabold text-primary"
                    size={20}
                  />
                ) : (
                  <BsChevronDown
                    className=" font-extrabold text-primary"
                    size={20}
                  />
                )}
              </div>
            </div>
            <div
              className={`mt-1 rounded text-gray-600 ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
