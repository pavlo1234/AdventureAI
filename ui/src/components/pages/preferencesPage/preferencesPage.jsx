import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../../header";
import PreferenceList from "../../PreferenceList";
import Button from "@mui/material/Button";
import axios from 'axios';
import { API_URL } from '../../../utils/constants'

import "./preferencesPage.sass";

const PreferencesPage = () => {
  const [preferenceData, setPreferenceData] = useState([]);
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const location = useLocation();
  const history = useHistory();

  const city = location.state?.city;
  const country = location.state?.country;

  const handleNext = () => {
    const token = sessionStorage.getItem("token");

    const requestBody = {
      location: {
        city, country
      },
      tags: selectedPreferences,
    };

    const headers = {
      "ngrok-skip-browser-warning": "true",
      Authorization: `Bearer ${token}`,
    };

    axios
      .post(`${API_URL}recommendations/`, requestBody, { headers })
      .then((response) => {
         history.replace({
            pathname: '/results',
            state: { recommendations: response.data },
         });
      })
      .catch((error) => {
        console.error("Error making the request:", error);
      });
   }

  const handleSelectionChange = (newSelectedItems) => {
    setSelectedPreferences(newSelectedItems);
  };

  useEffect(()=> {
    const token = sessionStorage.getItem("token");
     axios
      .get(`${API_URL}preferences/`, {
    headers: {
      "ngrok-skip-browser-warning": "true",
      Authorization: `Bearer ${token}`, // Add the Authorization header
    },
   }).then(response => {
    setPreferenceData(response.data)
   })
  }, [])

  return (
    <div className="preferences-page">
      <Header />
      <div className="preferences-page-wrapper">
        <PreferenceList preferenceData={preferenceData} preferenceHeader="What types of activities would you like to explore?"  onSelectionChange={handleSelectionChange} />
        <div className="preferences-page-action">
        <Button
          onClick={handleNext}
          variant="contained"
          size={"large"}
          style={{ backgroundColor: "var(--black)",  color: !selectedPreferences.length ? "grey" : "white", }}
          disabled={!selectedPreferences.length}
        >
          Next
        </Button>
      </div>
      </div>
    </div>
  );
};

export default PreferencesPage;
