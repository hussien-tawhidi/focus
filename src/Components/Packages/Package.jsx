import React from "react";
import PackageCard from "./PackageCard";
import { packageData } from "./packageData";
const Package = () => {
  return (
    <div className="packages" id="packages">
      <h3 className="package-title">پکیج ها</h3>
      <div className="package-content center-element">
        <div className="row">
          {packageData.map((post) => {
            return (
              <div className="col-lg-4 col-12 my-2" key={post.id}>
                <div className="single-package">
                  <PackageCard Post={post} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Package;
