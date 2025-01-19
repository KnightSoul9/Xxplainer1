import { GoCheck } from "react-icons/go";

const Opportunity = ({ keyPoints }) => {
  return (
    <div>
      <div>
        <div className="mb-12 border p-5">
          <h2 className="pb-4  text-2xl font-bold text-[#1C1D1F]">
            What you&apos;ll learn
          </h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {keyPoints?.map((item, index) => (
              <div key={index} className="flex justify-center">
                <GoCheck className="basis-1/12 pt-1 " size={20} />
                <p className="basis-11/12">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
