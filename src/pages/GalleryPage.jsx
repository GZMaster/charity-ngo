import React from "react";
import "../styles/GalleryPage.scss";

const GalleryPage = () => {
  return (
    <div className="gallerypage_container">
      <div className="gallerypage_wrapper">
        <div className="gallerypage_title">
          <h3>Our Gallery</h3>
        </div>

        <div className="gallerypage_body">{/* Component card */}</div>
      </div>
    </div>
  );
};

export default GalleryPage;
