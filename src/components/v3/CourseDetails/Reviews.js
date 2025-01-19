import { BACKEND_API } from "@/src/config/backend";
import { courseReviews } from "@/src/config/courseReview";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

const Reviews = ({ courseSlug }) => {
  const router = useRouter();
  // console.log(router,'em')
  // const [singleCourseReview, setSingleCourseReview] = useState([]);

  // useEffect(() => {
  //   const getReviewData = async () => {
  //     try {
  //       if (!courseSlug) return;
  //       const response = await axios.get(
  //         `${BACKEND_API}/reviews/${courseSlug}`
  //       );
  //       setSingleCourseReview(response.data.result, "res");
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getReviewData();
  // }, [courseSlug]);
  // console.log(singleCourseReview);

  const courseReviewData = courseReviews.find(
    (course) => course.courseSlug === courseSlug
  );

  const singleCourseReview = courseReviewData
    ? courseReviewData.result.reviews
    : [];

  return (
    <div className="relative mx-auto max-w-6xl p-4 px-4 sm:px-6 lg:py-12">
      {router.pathname == "/cohorts/tech-for-product-managers" ? (
        <h2 className="pb-8 text-center text-3xl font-semibold text-[#101828DE] lg:text-[36px]">
          Don‘t just take our word for it! <br className="hidden lg:block" />{" "}
          Listen to what learners are saying. ❤️
        </h2>
      ) : (
        <h2 className="pb-8 text-center text-3xl font-semibold text-[#101828DE] lg:text-[36px]">
          Not just testimonials! <br className="hidden lg:block" /> Find love
          letter from our learners ❤️
        </h2>
      )}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {singleCourseReview.map((reviewer, index) => (
          <div key={index} className="rounded-md border p-5">
            <div className="flex items-center gap-3">
              <Image
                src={reviewer?.profile}
                alt={reviewer.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h4 className="font-bold">{reviewer?.name}</h4>
                <p>{reviewer?.company}</p>
              </div>
            </div>
            {/* Ratings  */}
            <div className="flex gap-1 py-3">
              <BsFillStarFill className="text-[#FFB621] " size={20} />
              <BsFillStarFill className="text-[#FFB621] " size={20} />
              <BsFillStarFill className="text-[#FFB621] " size={20} />
              <BsFillStarFill className="text-[#FFB621] " size={20} />
              <BsFillStarFill className="text-[#FFB621] " size={20} />
            </div>
            {/* Review and date */}
            <p className="py-2">{reviewer?.review}</p>
            <p className="text-sm text-gray-500">{reviewer?.reviewDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
