import React from "react";
import { Route, Routes } from "react-router";
import HeaderMenu from "./Components/Header/HeaderMenu";
import TopAd from "./Components/TopAd/TopAd";
import Contacts from "./Pages/Contacts";
import FooterContent from "./Components/Footer/FooterContent";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Topics from "./Pages/Topics";
import Services from "./Pages/Services";
import AllServicesPage from "./Pages/AllServicesPage";
import Post from "./Components/MiniMenu/Post";
import HowWeDo from "./Pages/How";
import PackageThree from "./Components/Packages/PackageThree";
import PackageTow from "./Components/Packages/PackageTow";
import PackageOne from "./Components/Packages/PackageOne";
import WhyUsPage from "./Pages/WhyUsPage";
import OnlineMarketing from "./Pages/OnlineMarketing";
import EnglishPro from "./Pages/EnglishPro";
import GoogleAd from "./Pages/GoogleAd";
import SocialNetWorking from "./Pages/SocialNetWorking";
import OutSiderCustomer from "./Components/Hero/OutSiderCustomer";
import OutSiderMarketing from "./Components/Hero/OutSiderMarketing";
import OutSilderAd from "./Components/Hero/OutSilderAd";
import EnglishContent from "./Components/Hero/EnglishContent";
const RoutTo = () => {
  return (
    <>
      <TopAd />
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/services" element={<Services />} />
        <Route path="/all-services" element={<AllServicesPage />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="/package-three" element={<PackageThree />} />
        <Route path="/package-one" element={<PackageOne />} />
        <Route path="/package-tow" element={<PackageTow />} />
        <Route path="/how-we-do" element={<HowWeDo />} />
        <Route path="/why-us-reason" element={<WhyUsPage />} />
        <Route path="/online-marketing" element={<OnlineMarketing />} />
        <Route path="/english-content" element={<EnglishPro />} />
        <Route path="/google-add" element={<GoogleAd />} />
        <Route path="/social-networking" element={<SocialNetWorking />} />
        <Route path="/outslider-customer" element={<OutSiderCustomer />} />
        <Route path="/outslider-marketing" element={<OutSiderMarketing/>}/>
        <Route path="/outslider-ad" element={<OutSilderAd/>}/>
        <Route path="/english-content" element={<EnglishContent/>}/>
      </Routes>
      <FooterContent />
    </>
  );
};

export default RoutTo;
