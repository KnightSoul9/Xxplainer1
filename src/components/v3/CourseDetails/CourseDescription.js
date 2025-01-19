import React from 'react'

const CourseDescription = ({ description }) => {
  return (
    <div>
      <h2 className='text-xl lg:text-2xl font-semibold pt-5 pb-3'>Description</h2>
      <p className='text-sm text-gray-600'>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      </p>
    </div>
  );
};

export default CourseDescription