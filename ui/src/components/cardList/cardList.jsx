import React from "react";
import CardItem from '../cardItem'
import "./cardList.sass";

const CardList = ({mockCardData}) => {
  return (
    <div className="card-list">
      {mockCardData?.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
