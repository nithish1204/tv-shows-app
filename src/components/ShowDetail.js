import React from "react";

const ShowDetail = ({ show }) => {
  return (
    <div>
      <h2>Show Detail</h2>
      <div className="ShowDetail">
        <h3>{show.name}</h3>
        <p>{show.summary}</p>
      </div>
    </div>
  );
};

export default ShowDetail;
