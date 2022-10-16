import React from "react";
import { whatwedo } from "./whatWeDo";

const WhatWeDo = () => {
  return (
    <div className="do">
      <div className="do-texts">
        <div className="do-title">
          <h1>ما چی کاری را انجام میدیم</h1>
        </div>
        <div className="do-para">
          <p>
            براساس سال ها تجربه در بازاریابی آنلاین و دیجیتال مارکتینگ خوب می
            دانیم که چه چیز های برای انجام بازارایابی نتیجه بخش که فروش شمارا
            تضمین کند، ضرورت است و ما درتمام آن موارد را بدون کم وکیر در نظر
            گرفته ایم و انجام می دهیم
          </p>
        </div>
      </div>
      <div className="do-contents center-elements">
        <div className="row">
          {whatwedo.map((w) => {
            return (
              <div className="col-sm-4 col-12" key={w.id}>
                <div className="single-content">
                  <p className="content-text center-elements">{w.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
