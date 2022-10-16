import HomeSlider from "../Components/Hero/HomeSlider";
import WhatWeDo from "../Components/WhatWeDo/WhatWeDo.jsx";
import OurGift from "../Components/Gift/OurGift";
import Package from "../Components/Packages/Package";
import How from "../Components/How/How";
import AccidentlyTopics from "../Components/Topics/AccidentlyTopics";
import AllServices from "../Components/Services/AllServices";
import WhyUsReason from "../Components/WhyUs/WhyUsReason";
import SubMenu from "../Components/MiniMenu/SubMenu";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <SubMenu/>
      <AllServices />
      <WhatWeDo />
      <OurGift />
      <How />
      <Package />
      <WhyUsReason />
      <AccidentlyTopics />
    </div>
  );
};

export default Home;
