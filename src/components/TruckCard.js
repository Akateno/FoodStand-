import React from "react";

function TruckCard({ id, name, latitude, longitude, fooditems }) {

    function determine(e) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((latitude - lat) * p)/2 + 
          c(lat * p) * c(latitude * p) * 
          (1 - c((Math.abs(longitude) - long) * p))/2;

   // return 12742 * Math.asin(Math.sqrt(a)) // 2 * R; R = 6371 k
        alert(12742 * Math.asin(Math.sqrt(a)))
    }

//union square 
const lat = 37.7876
const long=  122.4066

  return (
    <div className="cards">
     <h3>name: {name}</h3>
     <h3>latitude: {latitude}</h3>
     <h3>longitude:{Math.abs(longitude)}</h3>
     <p1>food: {fooditems}</p1>
     <button onClick={determine}>Select</button>
    </div>
  );
}
export default TruckCard;