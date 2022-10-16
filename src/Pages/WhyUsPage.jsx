import React from "react";
import { whyUsData } from "../FakeData/Data";

const WhyUsPage = () => {
  return (
    <div className="reason-why">
      <p className="why-title">چرا باید با ما کار کنید؟</p>
      <p className="because">چون ما :</p>
      <div className="why-contents">
        <div className="row">
          {whyUsData.map((why) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2">
                <div className="single-content " key={why.id}>
                  <p>{why.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;
