import React, { useState } from "react";
import PreferenceItem from "../preferenceItem";
import "./preferenceList.sass";

const PreferenceList = ({ preferenceData }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handlePreferenceClick = (id) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter(itemId => itemId !== id); 
      } else {
        return [...prevSelectedItems, id];
      }
    });
  };

  console.log("Selected Items:", selectedItems);

  return (
    <div className="preference-list">
      <h2 className="preference-list-header">{preferenceData.header}</h2>{" "}
      <div className="preference-items">
        {preferenceData.preferences.map((preference) => (
          <PreferenceItem
            key={preference.id}
            id={preference.id}
            icon={preference.icon}
            label={preference.label}
            onClick={handlePreferenceClick}
            isSelected={selectedItems.includes(preference.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default PreferenceList;
