import React, { useState, useEffect } from "react";
import "./cardDetails.sass";
import axios from 'axios';
import ImageCarousel from "../imageCarousel/imageCarousel";
import { API_URL } from '../../utils/constants'

const CardDetails = ({ header, location, kind, desc, images }) => {
  return (
    <div className="card-details-wrapper">
      <div className="card-details-images">
        <ImageCarousel images={images?.map(image => image.url)} />
      </div>
      <div className="card-details-info">
        <h2 className="card-details-info-header">{header}</h2>
        <h5 className="card-details-info-location">{ `${location?.city}, ${location?.country}`}</h5>
        <h3 className="card-details-info-type">{kind}</h3>
        <span>About:</span>
        <p className="card-details-description">{desc}</p>
      </div>
    </div>
  );
};

export default CardDetails;
