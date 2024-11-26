import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../header";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import "./homePage.sass";

const HomePage = () => {
  const history = useHistory();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isUnsure, setIsUnsure] = useState(false); // Track the "unsure" state

  const handleNext = () => {
    history.replace({
      pathname: "/preferences",
      state: { city: isUnsure ? "" : city, country: isUnsure ? "" : country },
    });
  };

  return (
    <div className="home-page">
      <Header />
      <div className="home-page-wrapper">
        <header className="home-header">
          <h1 className="home-title">Looking for your next adventure?</h1>
          <p className="home-description">
            adventures.ai will help you! <br /> Start searching for your ideal
            destination and discover amazing places!
          </p>
        </header>
        <div className="home-search">
          <TextField
            className="home-input"
            label="Enter the city you want to visit"
            variant="outlined"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={isUnsure}
          />
          <TextField
            className="home-input"
            label="Enter the country you want to visit"
            variant="outlined"
            fullWidth
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            disabled={isUnsure}
          />
          <FormControlLabel
              control={
                <Checkbox
                  checked={isUnsure}
                  onChange={(e) => setIsUnsure(e.target.checked)}
                  color="primary"
                />
              }
              label="I don't know my preferred destination"
              className="home-checkbox"
          />
        </div>
        <div className="home-page-action">
          <Button
            onClick={handleNext}
            variant="contained"
            size={"large"}
            style={{
              backgroundColor: "var(--black)",
              color: !isUnsure && (!city || !country) ? "grey" : "white",
            }}
            disabled={!isUnsure && (!city || !country)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;