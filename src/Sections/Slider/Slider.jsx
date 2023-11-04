// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Slider.css";
// TODO : 2 more slider pictures are to be added
// import required modules
import { Navigation } from "swiper";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";

export default function Slider() {
  const { loading } = useContext(AuthContext);
  return (
    <Fade duration={2000}>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div style={{ height: "70vh" }}>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide className="relative">
              <img
                src="https://i.ibb.co/XZp1jkB/Music-Banner-1.jpg"
                alt="banner"
              />
              <div className="absolute flex justify-center items-center text-left">
                <div className="text-container w-1/2 ps-10 pr-8 flex flex-col gap-4">
                  {" "}
                  <h1
                    style={{ fontSize: "36px" }}
                    className="text-white font-extrabold"
                  >
                    <span className="heading">
                      <span style={{ color: "#FFD700" }}>Golden</span> Tunes
                      towards Remedy
                    </span>
                  </h1>
                  <h1
                    className="text-white font-extrabold"
                    style={{ fontSize: "18px" }}
                  >
                    Welcome to the harmonious realm of our music website, where
                    melodies transcend boundaries and rhythms ignite your soul
                  </h1>
                  <Link to="/class">
                    {" "}
                    <button className="w-1/2 btn glass font-extrabold text-white">
                      View Classes
                    </button>
                  </Link>
                </div>
                <div className="extra w-1/2"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/dpqb9MS/b-2.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/Mk0p00h/b-3.jpg" alt="banner" />
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </Fade>
  );
}
