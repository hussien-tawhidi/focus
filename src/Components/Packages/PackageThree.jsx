import { packageThreeData } from "./packageData";
const PackageThree = () => {
  return (
    <div className="package-post">
      {packageThreeData.map((Post) => {
        return (
          <div key={Post.id}>
            <h6 className="single-name">{Post.title}</h6>
            <h6 className="single-desc">{Post.desc}</h6>
            <div className="contents">
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
                <p className="part">{Post.marketing13}</p>
              </div>
            </div>
            <div className="price">
              <p>قیمت :</p>
              <h6> {Post.price}$</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PackageThree;
