import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import {topad} from "./topData.js"
const TopAd = () => {
  return (
    <div className="top-ad">
      <Swiper
        spaceBetween={30}
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
        {topad.map((t) => {
          return (
            <div key={t.id}>
              <SwiperSlide key={t.id}><p className="ad-text">{t.title}</p></SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TopAd;
