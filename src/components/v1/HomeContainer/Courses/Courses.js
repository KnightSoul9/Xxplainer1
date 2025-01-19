import CardLayout from "@/src/layout/CardLayout";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import SectionHeading from "../../Shared/sectionHeading";

const Courses = ({ heading, ctaText, courses }) => {
  const publishedCourses = courses?.filter(
    (course) => course.isPublished === true
  );

  return (
    <div className='container mx-auto px-4 pb-16 lg:max-w-7xl lg:py-7'>
      <div className='flex flex-col items-center justify-center '>
        <SectionHeading
          heading={heading || "Our Courses "}
          description={"Get better at your job every single day!"}
        />

        {/* single card  */}
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {publishedCourses?.map((el, index) => {
            return (
              <CardLayout
                key={index}
                imageUrl={el?.cover_image}
                title={el?.title}
                description={el?.courseDescription}
                shortDescription={el?.courseDescription?.slice(0, 200)}
                altText={el?.title}
                ctaText={ctaText}
                destination={`/courses/${el?.slug}`}
                width='w-full'
                height='h-[230px]'
              >
                <div className='my-1 mb-4 flex items-center space-x-5  text-sm text-gray-400'>
                  <div className='flex items-center justify-center space-x-1'>
                    <BiCategory />
                    <p> {el?.category}</p>
                  </div>
                </div>
              </CardLayout>
            );
          })}
        </div>

        {/* View ALl  */}
        <Link href='/courses'>
          <button className='button mx-auto mt-9 flex items-center gap-5 px-4  py-2.5'>
            Browse all courses
            <FiArrowRight size={24} className='font-bold' />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Courses;
