import React from "react";

const SectionHeading = ({ heading, description, }) => {
  return (
    <>
      <div className='text-center'>
        <h2 className='customTitle'> {heading} </h2>
        {description && (
          <p className='pb-8 text-center text-base font-medium text-[#475467] md:text-lg '>
            {description}
          </p>
        )}
      </div>
    </>
  );
};

export default SectionHeading;
