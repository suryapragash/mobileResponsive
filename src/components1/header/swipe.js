import { Swiper, SwiperSlide } from "swiper/react";
import { FaTwitter, FaFacebook, FaGooglePlay } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

import { Pagination } from "swiper";

export default function Swipe() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper container "
      >
        <SwiperSlide className="swip text-center bor">
          The Chef Lane is the best for any chef. Lorem ipsum dummy text lorem
          ipsum dummy text Lorem ipsum dummy text lorem ipsum
        </SwiperSlide>
        <SwiperSlide className="swip text-center bor">
          The Chef Lane is the best for any chef. Lorem ipsum dummy text lorem
          ipsum dummy text Lorem ipsum dummy text lorem ipsum
        </SwiperSlide>
        <SwiperSlide className="swip text-center bor">
          The Chef Lane is the best for any chef. Lorem ipsum dummy text lorem
          ipsum dummy text Lorem ipsum dummy text lorem ipsum
        </SwiperSlide>
        <SwiperSlide className="swip text-center bor">
          The Chef Lane is the best for any chef. Lorem ipsum dummy text lorem
          ipsum dummy text Lorem ipsum dummy text lorem ipsum
        </SwiperSlide>
      </Swiper>
      <br></br>
      <br></br>
      <br></br>
      <div className=" container text-end">
        <p>
          <FaTwitter className="text-success " /> VEG
          <FaFacebook className="text-danger" /> NON-VEG
          <FaGooglePlay className="text-warning" /> EGG
        </p>
      </div>
    </>
  );
}
