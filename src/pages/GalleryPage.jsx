import React from "react";
import "../styles/GalleryPage.scss";
import land from "../assets/gallery/land.png";
import kids from "../assets/gallery/kids.png";
import mother from "../assets/gallery/mother.png";
import baby from "../assets/gallery/baby.png";
import grocery from "../assets/gallery/grocery.png";
import vegetation from "../assets/gallery/plantation.png";
import children from "../assets/gallery/children.png";
import disabled from "../assets/gallery/disabled.png";

const GalleryPage = () => {
  return (
    <section id="our gallery" className="gallerypage_container">
      <div className="gallerypage_wrapper">
        <div className="gallerypage_title">
          <h3>Our Gallery</h3>
        </div>

        <div className="gallerypage_body">
          <img src={land} alt="land" />
          <img src={kids} alt="kids" />
          <img src={mother} alt="mother" />
          <img src={baby} alt="baby" />
          <img src={grocery} alt="grocery" />
          <img src={vegetation} alt="vegetation" />
          <img src={children} alt="children" />
          <img src={disabled} alt="disabled" />
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
