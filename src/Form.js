import React from "react";
import "./App.css";

const Form = ({
  pointA,
  setPointA,
  pointB,
  setPointB,
  date,
  setDate,
  handleSearch,
}) => {
  return (
    <div className="formData">
      <div className="inputs">
        <input
          type="text"
          value={pointA}
          placeholder="Depature"
          className="depature"
          onChange={(e) => setPointA(e.target.value)}
        />
        <input
          type="text"
          value={pointB}
          className="Arival"
          placeholder="Destination"
          onChange={(e) => setPointB(e.target.value)}
        />
        <input
          type="date"
          value={date}
          className="Date"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button onClick={handleSearch} className="search">
        Search
      </button>
    </div>
  );
};

export default Form;
