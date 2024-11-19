import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../header";
import PreferenceList from "../../PreferenceList";
import Button from "@mui/material/Button";

import "./preferencesPage.sass";

const PreferencesPage = () => {
  const history = useHistory();

  const handleNext = () => {
    history.replace("/results");
  };

  const preferenceData = {
    "header": "What types of activities would you like to explore?",
    "preferences": [
      {
        "id": 1,
        "icon": "SpaIcon",
        "label": "Relaxation"
      },
      {
        "id": 2,
        "icon": "FitnessCenterIcon",
        "label": "Fitness"
      },
      {
        "id": 3,
        "icon": "BeachAccessIcon",
        "label": "Beach"
      }
    ]
  };

  return (
    <div className="preferences-page">
      <Header />
      <div className="preferences-page-wrapper">
        <PreferenceList preferenceData={preferenceData} />
        <div className="preferences-page-action">
        <Button
          onClick={handleNext}
          variant="contained"
          size={"large"}
          style={{ backgroundColor: "var(--black)" }}
        >
          Next
        </Button>
      </div>
      </div>
    </div>
  );
};

export default PreferencesPage;
