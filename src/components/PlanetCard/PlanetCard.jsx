import React, { memo } from "react";
import ResidentTable from "../ResidentTable/ResidentTable";
import "../../../src/App.css";
import "./planetCard.css";

const PlanetCard = ({ planet }) => {
  return (
    <div className="planetCard">
      <div className="PlanetName">{planet.name}</div>
      <div className="PlanetDesc">
        <p className="PlanetDescText">Climate - {planet.climate}</p>
        <p className="PlanetDescText">Population - {planet.population}</p>
        <p className="PlanetDescText">Terrain - {planet.terrain}</p>
      </div>
      <ResidentTable residents={planet.residents} planet={planet} />
    </div>
  );
};

export default memo(PlanetCard);
