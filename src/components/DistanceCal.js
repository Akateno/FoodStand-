import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import TruckCard from "./TruckCard"

function DistanceCal({ id, name, latitude, longitude, fooditems, truckData }) {
    const [distance, setDistance] = useState([]);

    //I wanted to add each value into an array using a for loop in order to 
    //use .sort(), and filter all by This would have been triggered by the "filter by distance"
    //button that I have on the page. I couldn't quite get it however. 

    // I know there is some unecessary work here and an extra component but
    // wanted to show my train of thought. 

    //union square 
    const lat = 37.7876
    const long=  122.4066

    function determine() {
        for (let i = 0; i<truckData.length; i++){
            const newArray=[]

            let p = 0.017453292519943295;    // Math.PI / 180
                let c = Math.cos;
                let a = 0.5 - c((latitude - lat) * p)/2 + 
                c(lat * p) * c(latitude * p) * 
                (1 - c((Math.abs(longitude) - long) * p))/2;
                let total = (12742 * Math.asin(Math.sqrt(a))).toFixed(2);

                let items = ([...newArray, total])
                console.log(items) //returns a new array each time instead of adding to the array
               return items;           
        }
    }

  return (
    <>
    <TruckCard id={id} name={name} distance={determine()} fooditems={fooditems}/>
    </>
   
  );
}
export default DistanceCal;