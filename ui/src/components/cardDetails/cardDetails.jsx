import React from "react";
import "./cardDetails.sass";

const CardDetails = ({ header, location, type, aboutTitle, description, images }) => {
  return (
    <div className="card-details-wrapper">
      <div className="card-details-images">{images}</div>
      <div className="card-details-info">
        <h2 className="card-details-info-header">{header}</h2>
        <h5 className="card-details-info-location">{location}</h5>
        <h3 className="card-details-info-type">{type}</h3>
        <span>{aboutTitle}:</span>
        <p className="card-details-description">{description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
