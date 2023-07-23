import React from "react";
import "./App.css";

const VehicleList = ({ vehicles }) => {
  return (
    <div className="vehicles">
      <h2 className="vehicle-head">Available Vehicles</h2>
      <ul className="ul">
        {vehicles.map((vehicle) => (
          <li key={vehicle.id} className="list-item">
            <div>
              <img src={vehicle.imgUrl} alt={vehicle.name} className="img-el" />
              <div className="list-data">
                <div className="car-details">
                  <p className="vehicle-name">{vehicle.name}</p>
                  <p className="type">Type: {vehicle.type}</p>
                </div>
                <div className="car-details">
                  <p>Price: {vehicle.price}/-</p>
                  <p>Capacity: {vehicle.capacity}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
