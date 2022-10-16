import React from "react";
import { agenda, servicesText, subPara } from "../FakeData/ServicesTex";

const AllServicesPage = () => {
  return (
    <div className="allServices-page">
      <div className="all-services-content">
        <div className="services-img">
          <img src="/Assets/digitalMarketing.jpg" alt="digital marketing" />
        </div>
        <h5 className="title">
          خدمات کلی ما در قسمت دیجیتال مارکتینگ برای فروش محصولات در خارج
        </h5>
        <div className="services-content">
          {servicesText.map((service) => {
            return (
              <div className="services-text" key={service.id}>
                <p className="para">{service.para}</p>
              </div>
            );
          })}
          {subPara.map((para) => {
            return <p key={para.id}>{para.text}</p>;
          })}
          <p>
            و غیره محصولاتی از نگاه کیفیت و یا از نگاه تولید مربوط به کشور شما
            می شود را می توان در خارج از کشور به فروش رساند.
          </p>
          <p>
            پس در این بخش ها فعالیت دارید یا م خواهید فعالیت را شروع کنید در
            ادامه با ما همراه باشید.
          </p>
        </div>
        <div className="agenda">
          <div className="agenda-img">
            <img src="/Assets/agenda.jpg" alt="" />
          </div>
          <h6 className="title my-4">برنامه :</h6>
          <div className="agenda-content">
            {agenda.map((a) => {
              return <p key={a.id}>{a.text}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServicesPage;
