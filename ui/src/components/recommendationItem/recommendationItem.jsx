import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./recommendationItem.sass";
import CardList from "../cardList";
import axios from 'axios';
import { API_URL } from '../../utils/constants'

const RecommendationItem = ({ isAdventureAIrecommendation = false }) => {
   const location = useLocation();

  const recommendations = location.state?.recommendations;

  return (
    <div className="recomendation-item">
      <div className={`recomendation-item-header ${isAdventureAIrecommendation ? 'header-bold' : ''}`}>{recommendations.header}</div>
{/*         <div className="recomendation-item-description">{description}</div> */}
      <CardList mockCardData={recommendations.activities} />
    </div>
  );
};


export default RecommendationItem;
