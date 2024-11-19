import React from "react";
import SpaIcon from "@mui/icons-material/Spa";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

import "./preferenceItem.sass";

const PreferenceItem = ({ id, icon, label, onClick, isSelected }) => {
  const IconComponent =
    icon === "SpaIcon"
      ? SpaIcon
      : icon === "FitnessCenterIcon"
      ? FitnessCenterIcon
      : icon === "BeachAccessIcon"
      ? BeachAccessIcon
      : null;

  return (
    <div
      className={`preference ${isSelected ? "selected" : ""}`}
      onClick={() => onClick(id)}
    >
      {IconComponent && <IconComponent />}
      <span>{label}</span>
    </div>
  );
};

export default PreferenceItem;
