import React from "react";
import HeroPage from "../pages/HeroPage";
import IntroPage from "../pages/IntroPage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import TeamsPage from "./TeamsPage";
import DonatePage from "./DonatePage";
import GalleryPage from "./GalleryPage";

const MainPage = () => {
  return (
    <>
      <HeroPage />
      <IntroPage />
      <AboutPage />
      <ServicesPage />
      <TeamsPage />
      <DonatePage />
      <GalleryPage />
    </>
  );
};

export default MainPage;
