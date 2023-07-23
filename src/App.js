// App.js
import React, { useState } from "react";
import Form from "./Form.js";
import VehicleList from "./VehicleList.js";
import dummyVehicles from "./dummyData.js";
import "./App.css";

const App = () => {
  const [pointA, setPointA] = useState("");
  const [pointB, setPointB] = useState("");
  const [date, setDate] = useState("");
  const [vehicles, setVehicles] = useState([]);

  const handleSearch = () => {
    setVehicles(dummyVehicles);
  };

  return (
    <div className="bg">
      <Form
        pointA={pointA}
        setPointA={setPointA}
        pointB={pointB}
        setPointB={setPointB}
        date={date}
        setDate={setDate}
        handleSearch={handleSearch}
      />
      <VehicleList vehicles={vehicles} />
    </div>
  );
};

export default App;
