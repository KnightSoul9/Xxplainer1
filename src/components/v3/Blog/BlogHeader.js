import Image from "next/image";

const BlogHeader = ({ category, formattedDate, Title }) => {
  return (
    <>
      <div className="mt-8 flex flex-col space-x-2 lg:mt-16 lg:flex-row lg:items-center">
        <button className="max-content mb-2 hidden rounded-[32px] bg-primary px-3 py-1.5 text-sm text-white lg:mb-0 lg:block">
          {category}
        </button>
        <p> {formattedDate} </p>
      </div>

      <h1 className="mt-6 pb-1 text-3xl font-bold lg:text-5xl">{Title}</h1>
      
      <div className="lg:hidden">
        <p className="text-sm">Posted by</p>
        <div className="flex items-center gap-3 pt-3 lg:pt-4">
          <Image
            src="/images/mentors/deepak.svg"
            alt="Deepak Kumar"
            width={38}
            height={38}
            className="rounded-[50%]"
          />
          <div>
            <h4 className="lg:font-medium">Deepak Kumar</h4>
            <p className="text-sm">Software engineer 2</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader