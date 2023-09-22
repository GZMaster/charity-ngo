import React from "react";
import HeroPage from "../pages/HeroPage";
import IntroPage from "../pages/IntroPage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import DonatePage from "./DonatePage";
import GalleryPage from "./GalleryPage";

const MainPage = () => {
  return (
    <>
      <HeroPage />
      <IntroPage />
      <AboutPage />
      <ServicesPage />
      <DonatePage />
      <GalleryPage />
    </>
  );
};

export default MainPage;
