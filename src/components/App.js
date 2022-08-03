import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";


import '../App.css';
import TruckList from "./TruckList";
import Search from "./Search"

function App() {
  const [trucks, setTrucks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://data.sfgov.org/resource/rqzj-sfat.json")
      .then((res) => res.json())
      .then((trucks) => setTrucks(trucks));
  }, []);
 
  const displayedtrucks = trucks.filter((rec) =>
    rec.fooditems?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App" >
     <h1 className="title">Food Trucks Near Union Square</h1>
     
      <Button className="sortButton">Filter by distance</Button>
     
     
     <Search searchTerm={search} onChangeSearch={setSearch} />
     <h5 className="message">Type japan to find the truck nearest to union square</h5>
     <TruckList truckData={displayedtrucks}/>
    </div>
  );
}

export default App;
