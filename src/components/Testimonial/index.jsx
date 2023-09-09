import React from "react";
import star from "../../assets/review/review.svg";
import "../../styles/Review.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial({ testimonials }) {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div className="myCarousel" key={index}>
          <div className="stars">{renderStars(testimonial.stars)}</div>
          <p>{testimonial.review}</p>
          <div className="reviewer">
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
}
function renderStars(numStars) {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<img src={star} key={i} alt="star" />);
  }
  return stars;
}
