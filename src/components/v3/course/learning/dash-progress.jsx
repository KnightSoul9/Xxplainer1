import { formattedDomainSlug } from '@/src/utils/quiz';
import React from 'react'

const DashProgress = ({ quizData, progress, answered,questions }) => {
  return (
    <div className=' text-center lg:text-start'>
      <div className='flex flex-col px-0 lg:flex-row lg:items-center  lg:justify-between'>
        <h2 className='mb-2 text-center text-2xl font-bold'>
          {formattedDomainSlug(quizData)}
        </h2>
      </div>
      <div className=' mb-4 flex items-center justify-between space-x-2'>
        <div className='relative h-3 basis-11/12 rounded-2xl bg-gray-200'>
          <div
            className='h-full rounded-2xl bg-primary'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className='bassi-1/12 rounded-2xl bg-primary px-4 text-lg font-semibold text-white'>
          {answered}/{questions?.length}
        </p>
      </div>
    </div>
  );
};

export default DashProgress