import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import { I18n } from "@aws-amplify/core";
import "@aws-amplify/ui-react/styles.css";
import "./amplifyConfig";

import App from "./App";
import Status from "./pages/Status";

I18n.putVocabularies({
  en: {
    "Confirm TOTP Code": "MFA Verification",
    "Code": "MFA Code",
    "Confirm": "Verify",
    "Back to Sign In": "Back to Login"
  }
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <Authenticator>
    {({ signOut }) => (
      <>
        {/* HEADER */}
        <div className="app-header">
          <h2 className="header-title">File Dashboard</h2>

          <div className="user-menu">
            <button className="user-icon">👤</button>

            <div className="dropdown">
              <button onClick={signOut}>Sign Out</button>
            </div>
          </div>
        </div>


      
  
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/status" element={<Status />} />
          </Routes>
        </BrowserRouter>
      
      </>
    )}
  </Authenticator>
);
