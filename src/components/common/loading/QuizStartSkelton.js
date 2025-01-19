const QuizStartSkelton = () => {
  return (
    <div className='relative animate-pulse '>
      <div className='h-[40rem] rounded bg-gray-100'></div>
      <div className='mx-4'>
        <div className='container absolute left-0 right-0 top-[20%]  mx-auto rounded-xl bg-white px-5 pb-1 shadow-xl sm:px-5 sm:pb-12 lg:max-w-2xl lg:px-12 lg:py-[56px]'>
          <div>
            <div className='container mx-auto mb-4 mt-5 h-8  w-3/4 rounded bg-gray-200 lg:mt-0'></div>
            <div className='my-3 flex items-center justify-center space-x-5 text-gray-200'>
              <div className='flex items-center space-x-1'>
                <div className='h-4 w-4 rounded bg-gray-200'></div>
                <div className='h-4 w-20 rounded bg-gray-200'></div>
              </div>
              <div className='flex items-center space-x-1'>
                <div className='h-4 w-4 rounded bg-gray-200'></div>
                <div className='h-4 w-20 rounded bg-gray-200'></div>
              </div>
            </div>
            <div className='relative flex items-center  p-5'>
              <div className='flex-grow border-t border-gray-300'></div>
              <span className='mx-4 h-6 w-2/5 flex-shrink rounded bg-gray-200 text-center lg:w-2/5'></span>
              <div className='flex-grow border-t border-gray-300'></div>
            </div>
            <div className='py-2 pl-4'>
              <ul>
                <li className='h-24 rounded bg-gray-200 pb-1'></li>
              </ul>
            </div>
            <div className='mb-3 mt-3 flex items-center justify-center lg:mb-0'>
              <button className='mr-2 h-10 w-24 rounded-md bg-gray-200 px-4 py-2 '></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStartSkelton;
