import React from "react";
import { howData } from "../FakeData/Data";

const How = () => {
  return (
    <div className="how">
      <div className="how-head">
        <h5 className="how-title my-4">ما چگونه این برنامه عملی می کنیم؟</h5>
        <p className="para">
          ما در اجرای موفق یک برنامه تبلیغاتی آنلاین از استراتژی ای کار می گیریم
          که بدون درد سر زیاد شما به هدف می رساند. روش این صد در صد نتیجه بخش
          هست و یک روش تست شده می باشد.
        </p>
        <p>روش چگونه؟</p>
      </div>
      <div className="row">
        {howData.map((how) => {
          return (
            <div className="col-md-6 col-12 my-3" key={how.id}>
              <div className="single-how">
                <p className="step">{how.step}</p>
                <p className="para">{how.para1}</p>
                <p className="para">{how.para2}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default How;
