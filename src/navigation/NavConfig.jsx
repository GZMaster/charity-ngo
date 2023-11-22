/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/Main";
import AboutPage from "../pages/AboutPage";
import PartnershipPage from "../pages/PartnershipPage";
import HistoryPage from "../pages/HistoryPage";
import DonatePage from "../pages/DonatePage";
import GalleryPage from "../pages/GalleryPage";
import _404Page from "../pages/404Page";

const NavConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/*" element={<_404Page />} />
      </Route>
    </Routes>
  );
};

export default NavConfig;
