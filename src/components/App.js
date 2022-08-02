import React, { useState, useEffect } from "react";

import '../App.css';
import TruckList from "./TruckList";

function App() {
  const [trucks, setTrucks] = useState([]);
  useEffect(() => {
    fetch("https://data.sfgov.org/resource/rqzj-sfat.json")
      .then((res) => res.json())
      .then((trucks) => setTrucks(trucks));
  }, []);
  //union square coordinates 
  //latitude:38.8978° N
  //longitude: 77.0058° W


  return (
    <div className="App">
     <h1>Hi</h1>
     <TruckList truckData={trucks}/>
    </div>
  );
}

export default App;
