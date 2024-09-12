// React Imports
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

// Mui Imports
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// Custom Imports
import adBanner1 from "../../../assets/images/banner/ad-banner-4.jpg";
import adBanner2 from "../../../assets/images/banner/ad-banner-5.jpg";
import adBanner3 from "../../../assets/images/banner/ad-banner-6.jpg";

const banners = [
  {
    banner: adBanner1,
    heading: "Offer",
  },
  {
    banner: adBanner2,
    heading: "Fresh Food & Bakery",
  },
  {
    banner: adBanner3,
    heading: "Mixed and Assorted fruits",
  },
];

const BannerImages = () => {
  return (
    <>
      <div
        style={{ maxWidth: "", overflowX: "scroll" }}
        className=" mx-10 my-10 "
      >

        <div className="flex">
          {banners?.map((item) => {
            return (
              <div
                style={{
                  minWidth: "450px",
                }}
                className="px-2"
              >
                <img

                  className="w-full rounded-t-lg hover:cursor-pointer"
                  src={item?.banner}
                  alt=""
                />

                <div className="py-2 px-4 bg-blue-950 rounded-b-lg w-50 hover:cursor-pointer">
                  <span className="text-white">
                    {item?.heading}
                    <NavigateNextIcon />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BannerImages;
