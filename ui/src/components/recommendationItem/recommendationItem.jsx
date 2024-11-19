import React from "react";
import "./recommendationItem.sass";
import CardList from "../cardList";

const RecommendationItem = ({ header, description, isAdventureAIrecommendation, mockCardData }) => {
  return (
    <div className="recomendation-item">
      <div className={`recomendation-item-header ${isAdventureAIrecommendation ? 'header-bold' : ''}`}>{header}</div>
      <div className="recomendation-item-description">{description}</div>
      <CardList mockCardData={mockCardData} />
    </div>
  );
};


export default RecommendationItem;
