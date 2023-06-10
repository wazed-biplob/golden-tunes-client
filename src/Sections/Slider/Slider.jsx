// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Slider.css";
// TODO : 2 more slider pictures are to be added
// import required modules
import { Navigation } from "swiper";

export default function Slider() {
  return (
    <div style={{ height: "70vh" }}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="relative">
          <img src="https://i.ibb.co/XZp1jkB/Music-Banner-1.jpg" alt="banner" />
          <div className="absolute">
            <h1 style={{ fontSize: "23px" }}>Hello</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
}
