import { topCompanies } from "@/src/config/constants";
import Image from "next/image";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Brand = ({ disableHeader }) => {
  return (
    <div className='container mx-auto px-4 pb-16 lg:max-w-7xl lg:py-7'>
      <div className='flex flex-col items-center justify-center pb-4 '>
        {!disableHeader && (
          <h2 className='text-center text-xl font-semibold text-[#101828DE] lg:hidden '>
            Learners From Top <br />{" "}
            <span className='text-[#0070F4]'>Companies</span>{" "}
          </h2>
        )}
        <div className='mt-6'> </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          freeMode={false}
          breakpoints={{
            300: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 10,
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode]}
          className='mySwiper'
        >
          {topCompanies.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`/images/brand/${item.logo}`}
                alt='Top companies logo'
                style={{ width: "48px", height: "47px" }}
                width={48}
                height={47}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
