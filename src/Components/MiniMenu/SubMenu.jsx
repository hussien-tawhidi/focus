import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { dataMore } from "./subMenuData";
import Cart from "./Cart";

const SubMenu = () => {
  return (
    <div className="sub-menu">
      <Swiper
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="row">
            {dataMore.map((post) => (
              <div
                className="col-4 single-sub center-elements"
                key={post.id}
              >
                <Cart post={post} />
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SubMenu;
