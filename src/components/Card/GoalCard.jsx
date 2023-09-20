import React from "react";
import PropTypes from "prop-types";
import "../../styles/GoalCard.scss";

const GoalCard = ({ items, cardClassWrapper, cardClass }) => {
  return (
    <div className={cardClassWrapper ? cardClassWrapper : "GoalCard_Wrapper"}>
      {items.map((cardData) => {
        const { image, title, text, id } = cardData;
        return (
          <article className={cardClass ? cardClass : "Card"} key={id}>
            <div className="Card_Image">
              {image ? <img src={image} alt={title} /> : null}
            </div>
            <div className="Card_Details">
              <h6>{title}</h6>
              <p>{text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

GoalCard.propTypes = {
  items: PropTypes.any,
  cardClassWrapper: PropTypes.string,
  cardClass: PropTypes.string,
};

export default GoalCard;
