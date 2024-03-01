import React, { useState, useEffect } from "react";
import "../../../src/App.css";
import "./residentTable.css";
import Loading from "../Loader/loading";
import axios from "axios";

const ResidentTable = ({ residents, planet }) => {
  const [residentData, setResidentData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const data = await Promise.all(
        residents.map(async (residentURL) => {
          const response = await axios.get(residentURL);
          return response.data;
        })
      );
      setResidentData(data);
      setLoading(false);
    })();
  }, [residents]);
  console.log(residentData);
  return (
    <div className="tableContainer">
      <h2 style={{ textAlign: "center" }}>{planet.name} Residents:</h2>
      {loading ? (
        <Loading />
      ) : residentData.length ? (
        <table className="detailsTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Height</th>
              <th>Eye color</th>
            </tr>
          </thead>
          <tbody>
            {residentData.map((resident) => (
              <tr key={resident.name}>
                <td data-cell="Name">{resident.name}</td>
                <td data-cell="Gender">{resident.gender}</td>
                <td data-cell="Height">{resident.height}</td>
                <td data-cell="Eye color">{resident.eye_color}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div style={{ textAlign: "center", color: "red ", fontSize: "22px" }}>
          Residents Data Not Present
        </div>
      )}
    </div>
  );
};

export default ResidentTable;
