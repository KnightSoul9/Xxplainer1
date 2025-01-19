import Image from "next/image";

const testimonialsData = [
  {
    img: "/images/mock/nilesh.jpeg",
    name: "Niesh Anand",
    job: "Product Manager @ Zfunds ",
    ratings: 5,
    description: `Trust me, this is an awesome resource. I practiced all these 50 PM Interview questions by setting up a challenge to solve 1 question per day, and this helped me to secure a role in just 90 days.
`,
  },
  {
    img: "/images/mock/jaishil.jpeg",
    name: "Jaishil",
    job: "Senior Product Manager @ Hike",
    ratings: 5,
    description: `This resource by Xplainerr covers an exhaustive list of all types of PM Interview questions. This is my go-to place for PM interview prep.`,
  },
  {
    img: "/images/mock/abhishek.jpeg",
    name: "Abhishek Raj",
    job: "Project Manager  @ Noise",
    ratings: 5,
    description: `As I am looking to transition into a product role, this is my Bible that I go through each and every day. Thanks, Xplainerr team. 
`,
  },
];

const generateRatingStars = (rating) => {
  const starElements = [];
  for (let i = 0; i < rating; i++) {
    starElements.push(
      <svg
        key={i}
        className="h-6 w-6 text-yellow-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    );
  }
  return starElements;
};

const Testimonials = () => {
  return (
    <div className="flex w-full justify-center bg-gray-50 py-5 lg:pt-16">
      <div className="flex max-w-7xl flex-col px-2  pb-16 md:px-16">
        <h3 className="mb-2 text-center text-2xl font-semibold text-gray-900 lg:text-4xl">
          Don&lsquo;t just take our word for it! <br /> Listen to what learners
          are saying.
        </h3>
        <div className="flex justify-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            ></path>
          </svg>
          <span className="ml-2 ">4.27k+ people took this course</span>
        </div>
        <div className="mt-8 flex flex-col items-stretch gap-4 lg:flex-row">
          {testimonialsData?.map((el, index) => {
            return (
              <div className="flex flex-1" key={index}>
                <div className="flex flex-col rounded-xl border border-gray-100 bg-white px-6 py-6 shadow">
                  <div className="flex items-center">
                    <Image
                      className="mr-4 h-12 w-12 flex-shrink-0 rounded-full object-cover"
                      src={el.img}
                      alt={el?.name}
                      width={48}
                      height={48}
                    />
                    <div className="flex flex-col justify-center">
                      <div className="text-base font-bold">{el?.name}</div>
                      <div className="text-sm font-medium text-gray-400">
                        {el?.job}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="-ml-0.5 mb-1 mt-4 flex flex-row">
                      <div className="space-2 flex flex-wrap justify-center md:items-center md:justify-start">
                        {generateRatingStars(el?.ratings)}
                        <span className="ml-2 font-semibold text-gray-500"></span>
                      </div>
                    </div>
                    <div className="font-regular text-sm leading-relaxed text-gray-500">
                      {el?.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
