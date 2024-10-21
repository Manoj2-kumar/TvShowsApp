import React, { useState, useEffect } from "react";
import ShowDetail from "./components/ShowDetail";

const App = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    // Fetch shows airing in the US
    fetch('https://api.tvmaze.com/schedule?country=US')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error("Error fetching shows:", error));
  }, []);

  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  const handleBack = () => {
    setSelectedShow(null);
  };

  return (
    <div className="App">
      <h1>TV Shows Airing in the US</h1>
      {selectedShow ? (
        <ShowDetail show={selectedShow} onBack={handleBack} />
      ) : (
        <div className="show-list">
          {shows.map((show) => (
            <div key={show.id} className="show-item" onClick={() => handleShowClick(show.show)}>
              <img src={show.show.image?.medium} alt={show.show.name} />
              <h2>{show.show.name}</h2>
              <p>{show.show.network?.name} - {show.airtime}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
