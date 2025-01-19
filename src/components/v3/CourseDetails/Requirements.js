import { RxDotFilled } from "react-icons/rx";

const Requirements = ({ requiredSkills }) => {
  return (
    <div>
      <h2 className="py-3 text-xl font-semibold lg:text-2xl">Requirements</h2>
      {requiredSkills.map((skill, index) => (
        <div key={index} className="flex items-center space-y-1 text-sm">
          <RxDotFilled className="basis-1/12 lg:basis-[5%]" />
          <span className="basis-11/12 lg:basis-[95%]"> {skill}</span>
        </div>
      ))}
    </div>
  );
};

export default Requirements;
