import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ post }) => {
  return (
    <Link to={`post/${post.id}`} className="center-elements center-element">
      <img src={post.img} alt="" className="img-fluid" />
      <p className="post-title">{post.title}</p>
      <p className="card-link">جزئیات</p>
    </Link>
  );
};

export default Cart;
