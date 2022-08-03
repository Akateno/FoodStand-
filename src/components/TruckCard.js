import React, { useState } from "react";
import { Card } from "react-bootstrap";

function Body({ name,fooditems, distance  }) {
    const [distanc, setDistanc] = useState(distance);
    

  return (
    <Card className="h-100">
        <Card.Img variant="top" src={"https://www.nottinghammd.com/wp-content/uploads/2020/07/Food-Truck.jpg"} height="200px" style={{objectFit:"cover"}}/>
        <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
        </Card.Title>
         <div className="mt-auto">
            <div >
                <h5>Food: {fooditems}</h5>
                <h2>{distanc} km away</h2>
                </div>
            </div>
        </Card.Body> 
       
    </Card>
   
  );
}
export default Body;