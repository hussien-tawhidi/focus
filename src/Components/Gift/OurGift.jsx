import React from "react";

const OurGift = () => {
  return (
    <div className="gift">
      <img src="/Assets/gift.jpg" alt="" className="gift-img" />
      <div className="gift-content">
        <h4 className="title">هدیه ما به شما</h4>
        <div className="gift-desc">
          <p>
             هدیه ما به شما سه بسته آموزشی فوق العاده مفید و ارزشمند است که اگر
            ندانید در بازار دیجیتال نمی توانید درست عمل کنید
          </p>
        </div>
        <p className="gift-sub-title">
          آموزش ارتباط با مشتری و تکنیک های فروش{" "}
          <span>
            <i className="fa-solid fa-check"></i>
          </span>{" "}
        </p>
        <p className="gift-sub-title">
          آموزش واتساپ مارکتینگ
          <span>
            <i className="fa-solid fa-check"></i>
          </span>{" "}
        </p>
        <p className="gift-sub-title">
          آموزش ایمیل مارکتینگ
          <span>
            <i className="fa-solid fa-check"></i>
          </span>{" "}
        </p>
        <p className="gift-sub-title">
          آموزش نحوه ایجاد و مدیریت باشگاه مشتریان
          <span>
            <i className="fa-solid fa-check"></i>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default OurGift;
