// src/App.jsx
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">ResQNet</h1>
          <p className="hero-tagline">
            Linking Those In Need With Those Who Lead
          </p>
          <div className="cta-buttons">
            <button className="cta-button volunteer">Volunteer</button>
            <button className="cta-button victim">Victim</button>
            <button className="cta-button organization">Organization</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
