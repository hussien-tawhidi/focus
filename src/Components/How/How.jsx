import { Link } from "react-router-dom";

const How = () => {
  return (
    <Link to="/how-we-do" className="why center-elements">
      <img src="Assets/why.jpg" alt="" className="why-img" />
      <div className="why-texts center-elements">
        <h2>ما چگونه این برنامه عملی می کنیم؟</h2>
      </div>
    </Link>
  );
};

export default How;
