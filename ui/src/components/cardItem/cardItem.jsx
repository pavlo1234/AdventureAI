import React from "react";
import { useHistory } from "react-router-dom";
import "./cardItem.sass";

const CardItem = ({ card }) => {
  const history = useHistory();

  const handleCardClick = () => {
    history.push(`/card/${card.id}`); 
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-add-button">+</div>
      <div
        className="card-background"
        style={{
          backgroundImage: `url(${card.image})`,
        }}
      ></div>
      <div className="card-content">
        <div className="card-data">
          <h2 className="card-title">{card.title}</h2>
          <p className="card-location">{card.location}</p>
        </div>
        <div className="card-category">
          <div>{card.category}</div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
