import './Page2.css';
import React from "react";
import furniture_img from "./20221129_BeccaInteriors_edits-22-2f9dc19915194fde9c2eb395e3534204.jpeg"

export function Page2() {
  return(
  <div className="Page2">
  <header className="Page2-header">
    <div className="vertical-line"></div>
    <h1>Working with a grid</h1>
    <img src={furniture_img} alt=""/>
  </header>
</div>
);
}