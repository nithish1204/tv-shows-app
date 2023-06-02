import React, { useState, useEffect } from "react";
import ShowList from "./components/ShowList";
import ShowDetail from "./components/ShowDetail";

const App = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        setShows(data.map((entry) => entry.show));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleShowClick = (showId) => {
    const selected = shows.find((show) => show.id === showId);
    setSelectedShow(selected);
  };

  return (
    <div className="container">
      {!selectedShow ? (
        <ShowList shows={shows} onShowClick={handleShowClick} />
      ) : (
        <ShowDetail show={selectedShow} />
      )}
    </div>
  );
};

export default App;
