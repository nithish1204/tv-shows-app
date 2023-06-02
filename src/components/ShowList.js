import React from "react";

const ShowList = ({ shows, onShowClick }) => {
  return (
    <div className="ShowList">
      <h2>Show List</h2>
      <ul className="show-list ">
        {shows.map((show) => (
          <li key={show.id}>
            <h3>{show.name}</h3>
            <p>Language: {show.language}</p>
            <p>Genre: {show.genres.join(", ")}</p>
            <button onClick={() => onShowClick(show.id)}>View Summary</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
