import { useLocation } from "react-router";
import { dataMore } from "./subMenuData";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const post = dataMore.find((p) => p.id.toString() === path);
  return (
    <div className="post">
      <img src={post.img} alt="" />
      <div className="post-content">
        <h4 className="title">{post.title}</h4>
        <p className="post-text">{post.desc}</p>
        <p className="sub-title">{post.listTitle}</p>
        <div className="row">
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list1}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list2}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list3}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list4}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list5}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list6}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list7}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list8}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list9}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list10}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list11}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list12}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list13}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list14}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list15}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list16}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list17}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list18}</p>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <p className="post-link">{post.list19}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
