import React from "react";
import "./WorkInProgress.css";


function WorkInProgress(props) {
  const { currentPageName } = props //Aqui recibe el nombre de la pagina que se le pasa desde App.jsx
  return (
    <div className="background">
      <div className="work-in-progress">
        <h1>Work in progress</h1>
        <p>Sorry, the {currentPageName} page is not yet available.</p>
      </div>
    </div>
  );
}

export default WorkInProgress;
