import React from "react";
import { Link } from "react-router-dom";
const PackageCard = ({ Post }) => {
  return (
    <>
      <h6 className="single-name">{Post.title}</h6>
      <h6 className="single-desc">{Post.desc}</h6>
      <h6 className="single-price">{Post.price}</h6>
      <Link to={Post.linkTo}>
        <p className="detials-link">جزئیات</p>
      </Link>
    </>
  );
};

export default PackageCard;
