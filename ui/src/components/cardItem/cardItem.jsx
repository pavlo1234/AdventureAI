import React from "react";
import { useHistory } from "react-router-dom";
import "./cardItem.sass";

const CardItem = ({ card }) => {
  const history = useHistory();

  const handleCardClick = () => {
    history.replace({
      pathname: `/card/${card.id}`,
      state: { cardId: card.id },
    });
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-add-button">+</div>
      <div
        className="card-background"
        style={{
          backgroundImage: `url(${card.images[0].url})`,
        }}
      ></div>
      <div className="card-content">
        <div className="card-data">
          <h2 className="card-title">{card.header}</h2>
          <p className="card-location">{ `${card.location.city}, ${card.location.country}`}</p>
        </div>
        <div className="card-category">
          <div>{card.kind}</div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
