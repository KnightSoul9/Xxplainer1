import { useState } from "react";
import { faqData } from "./faqData";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import SectionHeading from "../../Shared/sectionHeading";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='container mx-auto px-4 pb-16 lg:max-w-7xl lg:py-7'>
      <div className='pb-5'>
        <SectionHeading heading={"Frequently Asked Questions"} />
      </div>
      <div className='p-2 '>
        {faqData.map((faq, index) => (
          <div key={index} className='mb-3 rounded-md border-b px-2 pb-4 pt-2'>
            <div
              className='flex cursor-pointer items-center justify-between text-lg'
              onClick={() => onTitleClick(index)}
            >
              <p>{faq.question}</p>
              <div className=''>
                {activeIndex === index ? (
                  <BsChevronUp
                    className=' font-extrabold text-primary'
                    size={20}
                  />
                ) : (
                  <BsChevronDown
                    className=' font-extrabold text-primary'
                    size={20}
                  />
                )}
              </div>
            </div>
            <div
              className={`mt-3 rounded text-gray-600 ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}

        {/* Cta  */}
        {/* <div className="text-center py-10 hidden md:block">
          <button className="bg-[#0070F4] py-5 px-16 rounded-[46px] text-white font-semibold">Unleash the Power of Content Creation for just Rs.2999! ₹7,999</button>
          <p className="text-sm text-[#475467] pt-4 ">Reserve a seat before April 5, 2023 to unlock Bonuses worth ₹25,000</p>
        </div> */}
      </div>
    </div>
  );
};

export default Faqs;
