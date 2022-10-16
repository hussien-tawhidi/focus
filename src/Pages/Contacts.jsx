import React from "react";

const Contacts = () => {
  return (
    <div className="contact">
      <div className="contact-content center-element">
        <div className="row">
          <div className="col-md-3  col-6">
            <div className="single-contact">
              <div className="contact-icon">
                <i class="fa-solid fa-location-pin"></i>
              </div>
              <div className="contact-text">
                <p>ایران-تهران</p>
              </div>
            </div>
          </div>
          <div className="col-md-3  col-6">
            <div className="single-contact">
              <div className="contact-icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="contact-text">
                <p>(+98) 0936 2092 706</p>
              </div>
            </div>
          </div>
          <div className="col-md-3  col-6">
            <div className="single-contact">
              <div className="contact-icon">
                <i class="fa-brands fa-whatsapp"></i>
              </div>
              <div className="contact-text">
                <p>(+98) 0936 2092 706</p>
              </div>
            </div>
          </div>
          <div className="col-md-3  col-6">
            <div className="single-contact">
              <div className="contact-icon">
                <i class="fa-regular fa-envelope"></i>
              </div>
              <div className="contact-text">
                <p>focus-com@info.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <div className="title">
          <p>فرم تماس </p>
        </div>
        <form action="" className="form">
          <input
            type="text"
            className="form-control my-2"
            placeholder="نام/اسم کامل"
          />
          <input type="email" className="form-control my-2" placeholder="ایمیل" />
          <textarea
            name="form-text"
            id="form-text"
            className="form-control my-2"
          ></textarea>
          <br />
          <button type="button" className="submit btn btn-light">
            ارسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
