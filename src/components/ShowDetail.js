import React from "react";

const ShowDetail = ({ show, onBack }) => {
  return (
    <div className="show-detail">
      <button onClick={onBack}>Back to Schedule</button>
      <h1>{show.name}</h1>
      <img src={show.image?.original} alt={show.name} />
      <p>
        <strong>Summary:</strong> {show.summary.replace(/(<([^>]+)>)/gi, "")}
      </p>
      <p>
        <strong>Genres:</strong> {show.genres.join(", ")}
      </p>
      <p>
        <strong>Runtime:</strong> {show.runtime} minutes
      </p>
      <p>
        <strong>Premiered:</strong> {show.premiered}
      </p>
    </div>
  );
};

export default ShowDetail;
