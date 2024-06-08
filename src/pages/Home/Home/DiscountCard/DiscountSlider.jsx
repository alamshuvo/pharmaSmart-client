
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../DiscountCard/Discountslide.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../../../../hooks/UseAxiosPublic';
const DiscountSlider = () => {
const axiosPublic=UseAxiosPublic()
  const { data: discount = [], isPending,refetch } = useQuery({
    queryKey: ["discount"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/medicine`);
      return res.data;
    },
  });



  const discountItems = discount.filter(item => item.discount !== "0");
  console.log(discountItems);
   




    return (
        <div> 
             <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper2"
      >
    
        {
          discountItems.map(item=> <SwiperSlide key={item._id}>
            <img src={item.photo} className='object-cover' alt="" />
          </SwiperSlide>)
        }
        
      </Swiper>
      {/* <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper3"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
            
        </div>
    );
};

export default DiscountSlider;