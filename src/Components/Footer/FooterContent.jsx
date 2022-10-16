import { homesocial } from "./footerData";
import { searchcontainer } from "../Header/headerData";
import {Link} from "react-router-dom"
const FooterContent = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <Link to="/" className="footer-logo center-elements">
            <img src="Assets/logo.png" alt="" />
          </Link>
        </div>
        <div className="col-md-4 col-sm-12">
          <p className="links-title">دسترسی سریع</p>
          <div className="footer-fast-links">
            {searchcontainer.map((f) => {
              return (
                <Link to={f.linkTo} key={f.id}>
                  {f.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="subscribe-part">
            <div className="subscribe">
              <form action="">
                <input type="email" placeholder="ایمیل" />
                <button>عضو شویید</button>
              </form>
              <div className="footer-social-icon">
                {homesocial.map((f) => {
                  return (
                    <a href="/" key={f.id}>
                      {f.icon}
                    </a>
                  );
                })}
                <p>ما را دنبال کنید</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>تمام حقوق و کاپی رایت برای فوکس پرودکشن میگردد</p>
      </div>
    </div>
  );
};

export default FooterContent;
