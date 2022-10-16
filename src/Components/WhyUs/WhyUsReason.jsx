import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const WhyUsReason = () => {
  return (
    <div to="/why-us-reason" className="reason">
      <div className="reason-img"></div>
      <Link to="/why-us-reason" className="slider">
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
          <SwiperSlide className="single-home-slider">
            <h5 className="title center-element">چرا باید با ما کار کنید؟</h5>
          </SwiperSlide>
          <SwiperSlide className="single-home-slider">
            <h5 className="title center-element">چرا باید با ما کار کنید؟</h5>
          </SwiperSlide>
          <SwiperSlide className="single-home-slider">
            <h5 className="title center-element">چرا باید با ما کار کنید؟</h5>
          </SwiperSlide>
        </Swiper>
      </Link>
    </div>
  );
};

export default WhyUsReason;
