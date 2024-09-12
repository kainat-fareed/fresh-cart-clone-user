import { Box} from "@mui/material";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { shopByCategoryData } from "./dummyData/product-svg-path";

const ShopByCategorySection = () => {
  return (
    <>
      <Box className="px-10 my-10">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mt-1"
            style={{
              color: "#099309",
            }}
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          <span class="ms-3 font-bold text-2xl">Shop by Categories</span>
        </div>

        <Box className="my-10 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
            }}
            className="mySwiper"
          >
            {shopByCategoryData?.map((item) => {
              return (
                <SwiperSlide className="mb-10">
                  <div className="border rounded-lg py-6 flex items-center flex-col hover:shadow-2xl hover:text-green-500 cursor-pointer">
                    <div className="my-5">
                      <svg
                        width="56"
                        height="56"
                        fill="#3d4f58"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hover:text-green-500"
                      >
                        <path d={item?.path} fill-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h1>{item?.productName}</h1>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default ShopByCategorySection;
