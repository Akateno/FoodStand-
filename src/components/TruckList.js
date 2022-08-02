import React from "react";
import TruckCard from "./TruckCard";
function TruckList({ truckData }) {
  return (
    <div className="cards">
      {truckData.map((location) => (
        <TruckCard
          id={location.id}
          key={location.id}
          name={location.applicant}
          latitude={location.latitude}
          longitude={location.longitude}
          fooditems={location.fooditems} 
        />
      ))}
    </div>
  );
}
export default TruckList;