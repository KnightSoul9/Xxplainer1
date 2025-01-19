import { authors } from '@/src/config/constants'
import Image from 'next/image'

const Authors = ({course}) => {

  return (
    <section className='bg-[#CDDAFB]'>
      <div className="container mx-auto py-8 lg:py-20 px-5 lg:px-12 big:px-36 large:px-96">
        <div className="">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10 ">
            <h1 className="text-2xl lg:text-[32px] font-bold leading-tight ">Instructors & Mentors  </h1>
          </div>
        </div>

        {/* Mentors  */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {authors[course] && authors[course].map((author, index) => (
            <div key={index} className="flex justify-center gap-3 bg-[#EAECF0] p-5 rounded-lg ">
              <div>
                <Image src={author.profile} width="84" height="84" className='rounded-full' alt={author.name} />
              </div>
              <div>
                <h3 className='text-lg font-bold text-[#333]'>{author.name}</h3>
                <p className='text-[#9CA3AF] text-sm pt-1 pb-2 md:pb-4'>{author.job}</p>
                <p className='text-[#353535] text-sm md:text-base'>{author.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Authors