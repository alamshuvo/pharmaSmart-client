// import React from 'react';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./slide.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import UseAxiosPublic from "../../../../hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Slide = () => {

const axiosPublic=UseAxiosPublic()
  const { data: advertisementb = [], isPending,refetch } = useQuery({
    queryKey: ["advertisementb"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/advertisement`);
      return res.data;
    },
  });

console.log(advertisementb);

const approvedItems = advertisementb.filter(item => item.status === "approve");



  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper1"
      >
        {/* <SwiperSlide>
          <div>
            <img  className="w-full h-full" src="https://i.ibb.co/WysVt19/handsenitaizer.webp" alt="" />
            <div>

            </div>
          </div>
        </SwiperSlide> */}
       
        {
          approvedItems.map(item=><SwiperSlide key={item._id}>
            <div>
              {" "}
              <img className="h-full w-full" src={item.photo} alt="" />
            </div>
          </SwiperSlide>)
        }
      
      </Swiper>
    </div>
  );
};

export default Slide;
