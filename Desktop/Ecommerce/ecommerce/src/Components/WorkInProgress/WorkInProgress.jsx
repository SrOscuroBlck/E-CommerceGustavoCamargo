import React from "react";
import { useState } from "react";
import "./WorkInProgress.css";


function WorkInProgress(props) {
  

  const { currentPageName } = props //Aqui recibe el nombre de la pagina que se le pasa desde App.jsx
  return (
    <div className="background">
      <div className="work-in-progress">
        <h1>Welcome To Our Website</h1>
        <p>This site is under construction</p>
      </div>
    </div>
  );
}

export default WorkInProgress;
