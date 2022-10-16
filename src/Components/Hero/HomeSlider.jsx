import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { homeslider } from "./homeSliderData";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  return (
    <div className="home-slider">
      <Swiper
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {homeslider.map((h) => {
          return (
            <SwiperSlide className="single-home-slider" key={h.id}>
              <div className="home-slider-img">
                <img src={h.img} alt="" />
              </div>
              <Link to={h.linkTo} className="home-slider-text">
                <h1>{h.text}</h1>
                <div className="more">
                  <span >بیشتر بدانید</span>
                  <div className="pointer">
                    <i className="fa-solid fa-hand-point-up"></i>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
