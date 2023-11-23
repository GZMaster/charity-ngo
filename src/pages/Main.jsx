import React from "react";
import HeroPage from "../pages/HeroPage";
import IntroPage from "../pages/IntroPage";
// import { About } from "./AboutPage";
// import { Partnership } from "./PartnershipPage";
// import { History } from "./HistoryPage";
import ServicesPage from "./ServicesPage";
import { Donate } from "./DonatePage";
// import { Gallery } from "./GalleryPage";

const MainPage = () => {
  return (
    <>
      <HeroPage />
      <IntroPage />
      {/* <About /> */}
      {/* <Partnership /> */}
      {/* <History /> */}
      <ServicesPage />
      <Donate />
      {/* <Gallery /> */}
    </>
  );
};

export default MainPage;
