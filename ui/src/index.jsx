import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SigninPage from "./components/pages/signinPage";
import SignupPage from "./components/pages/signupPage";
import HomePage from "./components/pages/homePage";
import ResultsPage from "./components/pages/resultsPage";
import PreferencesPage from "./components/pages/preferencesPage";

import "./index.sass";

const root = ReactDOM.createRoot(document.getElementById("adventure_ai"));
root.render(
  <div className="adventure-ai-app">
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/">
            <SigninPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/results">
            <ResultsPage />
          </Route>
          <Route path="/preferences">
            <PreferencesPage />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  </div>
);
