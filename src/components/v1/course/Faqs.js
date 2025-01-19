import { apiForPmFaq } from "@/src/config/constants";
import { useState } from "react";
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai'

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 ">
        <div className="border-gray-200  py-12">
          {/* Faq header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="text-center text-3xl font-semibold text-[#101828DE] lg:text-[36px] ">
              Frequently asked questions
            </h2>
          </div>

          <div className="md:p-5 lg:px-32">
            {apiForPmFaq.map((faq, index) => (
              <div
                key={index}
                className="mb-3 border-t px-3 py-4 last:border-b"
              >
                <div
                  className="flex cursor-pointer items-center gap-x-4 text-lg"
                  onClick={() => onTitleClick(index)}
                >
                  <div className="">
                    {activeIndex === index ? (
                      <AiOutlineMinus
                        className=" font-bold text-[#0070F4]"
                        size={24}
                      />
                    ) : (
                      <AiOutlinePlus
                        className=" font-bold text-[#0070F4]"
                        size={24}
                      />
                    )}
                  </div>
                  <p className="text-md font-medium">{faq.question}</p>
                </div>
                <div
                  className={`mt-3  ${
                    activeIndex === index
                      ? "block pl-10 text-gray-600"
                      : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs