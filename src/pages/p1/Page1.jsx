import './Page1.css';
import React from "react";

export function Page1() {
  return (
    <div className="Page1">
      <header className="Page1-header">
        <div className="vertical-line"></div>
        <h1>
          Make your <span style={{ color: 'green' }}>house</span><br /> your own
        </h1>
        <button className="green-button">Start Designing</button> {/* Add the green button */}
        <p>This is a demo sentence.</p>
      </header>
    </div>
  );
}

