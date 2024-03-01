import React, { useState, useEffect, memo } from "react";
import PlanetCard from "./components/PlanetCard/PlanetCard";
import Pagination from "./components/pagination/Pagination";
import Header from "./components/Header/Header";
import "./App.css";
import Loading from "./components/Loader/loading";
import axios from "axios";

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const NoOfPlanetsPerPage = 5;

  const GetPlanets = async () => {
    axios
      .get(`https://swapi.dev/api/planets/?format=json`)
      .then((response) => {
        setPlanets(response.data.results);
        setTotalPages(
          Math.ceil(response.data.results.length / NoOfPlanetsPerPage)
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log("error occured in planetFeatching", err);
      });
  };

  useEffect(() => {
    GetPlanets();
  }, []);

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="PageBody">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="PlanetsContainer">
              {planets
                .slice(
                  (currentPage - 1) * NoOfPlanetsPerPage,
                  currentPage * NoOfPlanetsPerPage
                )
                .map((planet) => (
                  <PlanetCard key={planet.name} planet={planet} />
                ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onNextPage={() =>
                setCurrentPage(Math.min(currentPage + 1, totalPages))
              }
              onPrevPage={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default memo(App);
