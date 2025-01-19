import React from "react";

const PriceView = () => {
  return (
    <div className="mb-4 mt-2">
      <p className="  ext-[#000000]">
        <span className="text-3xl font-bold">₹ 999</span>{" "}
        <span className="text-[#7b7b7b] line-through">₹1,999</span>{" "}
        <span className="rounded-[4px] bg-[#FF8C00] px-1.5 py-[3px] text-xs font-medium text-[#fff] ">
          50% OFF
        </span>
      </p>
    </div>
  );
};


export default PriceView;