import { packageOneData } from "./packageData";
const PackageOne = () => {
  return (
    <div className="package-post">
      {packageOneData.map((Post) => {
        return (
          <div key={Post.id}>
            <h6 className="single-name">{Post.title}</h6>
            <h6 className="single-desc">{Post.desc}</h6>
            <div className="contents">
              <div className="sub-title">
                <p>{Post.services}</p>

                <p>{Post.linkTo}</p>
              </div>
              <div className="main-parts">
                <p className="part">{Post.section1}</p>
                <p className="part">{Post.section1D}</p>
                <p className="part">{Post.section2}</p>
                <p className="part">{Post.section2D}</p>
                <p className="part">{Post.section3}</p>
                <p className="part">{Post.section3D}</p>
                <p className="part">{Post.section4}</p>
                <p className="part">{Post.section4D}</p>
                <p className="part">{Post.section5}</p>
                <p className="part">{Post.section5D}</p>
                <p className="part">{Post.section6}</p>
                <p className="part">{Post.section6D}</p>
                <p className="part">{Post.section7}</p>
                <p className="part">{Post.section7D}</p>
                <p className="part">{Post.section8}</p>
                <p className="part">{Post.section8D}</p>
                <p className="part">{Post.section9}</p>
                <p className="part">{Post.section9D}</p>
                <p className="part">{Post.section10}</p>
                <p className="part">{Post.section10}</p>
              </div>
              <div className="production-parts">
                <h5 className="production-title">{Post.productionTitle}</h5>
                <p className="part">{Post.pr1}</p>
                <p className="part">{Post.pr1D}</p>
                <p className="part">{Post.pr2}</p>
                <p className="part">{Post.pr2D}</p>
                <p className="part">{Post.pr3}</p>
                <p className="part">{Post.pr3D}</p>
                <p className="part">{Post.pr4}</p>
                <p className="part">{Post.pr4D}</p>
                <p className="part">{Post.pr5}</p>
                <p className="part">{Post.pr5D}</p>
                <p className="part">{Post.pr6}</p>
                <p className="part">{Post.pr6D}</p>
                <p className="part">{Post.pr7}</p>
                <p className="part">{Post.pr7D}</p>
                <p className="part">{Post.pr8}</p>
                <p className="part">{Post.pr8D}</p>
                <p className="part">{Post.pr9}</p>
                <p className="part">{Post.pr9D}</p>
                <p className="part">{Post.pr10}</p>
                <p className="part">{Post.pr10D}</p>
                <p className="part">{Post.pr11}</p>
                <p className="part">{Post.pr11D}</p>
                <p className="part">{Post.pr12}</p>
                <p className="part">{Post.pr12D}</p>
                <p className="part">{Post.pr13}</p>
                <p className="part">{Post.pr13D}</p>
                <p className="part">{Post.pr14}</p>
                <p className="part">{Post.pr14D}</p>
                <p className="part">{Post.pr15}</p>
                <p className="part">{Post.pr15D}</p>
                <p className="part">{Post.pr16}</p>
                <p className="part">{Post.pr16D}</p>
                <p className="part">{Post.pr17}</p>
                <p className="part">{Post.pr17D}</p>
              </div>
              <div className="marketing-parts">
                <h5>{Post.marketingTitle}</h5>
                <p className="part">{Post.marketing1}</p>
                <p className="part">{Post.marketing2}</p>
                <p className="part">{Post.marketing3}</p>
                <p className="part">{Post.marketing4}</p>
                <p className="part">{Post.marketing5}</p>
                <p className="part">{Post.marketing6}</p>
                <p className="part">{Post.marketing7}</p>
                <p className="part">{Post.marketing8}</p>
                <p className="part">{Post.marketing9}</p>
                <p className="part">{Post.marketing10}</p>
                <p className="part">{Post.marketing11}</p>
                <p className="part">{Post.marketing12}</p>
                <p className="part">{Post.marketing14}</p>
              </div>
            </div>
            <div className="price">
              <p>???????? :</p>
              <h6> {Post.price}$</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PackageOne;
