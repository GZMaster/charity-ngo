import React from "react";
import HeroPage from "./HeroPage";
import "../styles/GalleryPage.scss";
import galleryData from "../assets/data/GalleryData";

export const Gallery = () => {
  return (
    <section id="our gallery" className="gallerypage_container">
      <div className="gallerypage_wrapper">
        <div className="gallerypage_title">
          <h1>
            Our <span>Gallery</span>
          </h1>
        </div>

        <div className="gallerypage_body">
          {galleryData.map((gallery) => {
            return (
              <img src={gallery.image} alt={gallery.id} key={gallery.id} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const GalleryPage = () => {
  return (
    <>
      <HeroPage />
      <Gallery />
    </>
  );
};

export default GalleryPage;
