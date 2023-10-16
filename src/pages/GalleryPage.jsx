import React from "react";
import "../styles/GalleryPage.scss";
import galleryData from "../assets/data/GalleryData";

const GalleryPage = () => {
  return (
    <section id="our gallery" className="gallerypage_container">
      <div className="gallerypage_wrapper">
        <div className="gallerypage_title">
          <h3>Our Gallery</h3>
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

export default GalleryPage;
