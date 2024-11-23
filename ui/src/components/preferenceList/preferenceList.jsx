import React, { useState } from "react";
import PreferenceItem from "../preferenceItem";
import "./preferenceList.sass";

const PreferenceList = ({ preferenceData, preferenceHeader, onSelectionChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);

   const handlePreferenceClick = (label) => {
      setSelectedItems((prevSelectedItems) => {
        const updatedSelectedItems = prevSelectedItems.includes(label)
          ? prevSelectedItems.filter((itemLabel) => itemLabel !== label)  // Remove label if already selected
          : [...prevSelectedItems, label];  // Add label if not already selected

        onSelectionChange(updatedSelectedItems);  // Pass updated labels to parent
        return updatedSelectedItems;  // Return updated state
      });
    };

  return (
    <div className="preference-list">
      <h2 className="preference-list-header">{preferenceHeader}</h2>{" "}
      <div className="preference-items">
        {preferenceData?.map((preference) => (
          <PreferenceItem
            key={preference.id}
            id={preference.id}
            icon={preference.icon}
            label={preference.label}
            onClick={() => handlePreferenceClick(preference.label)}
            isSelected={selectedItems.includes(preference.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default PreferenceList;
