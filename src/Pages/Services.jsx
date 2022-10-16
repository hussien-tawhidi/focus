import React from "react";
import { services } from "../FakeData/Services";

const Services = () => {
  return (
    <div className="services">
      <div className="title">
        <h6>خدمات</h6>
      </div>
      <div className="services-content">
        {services.map((service) => {
          return (
            <div className="single-services" key={service.id}>
              <h6 className="single-title">{service.title}</h6>
              <p className="single-desc">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
