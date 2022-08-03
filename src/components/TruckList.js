import React from "react";
import TruckCard from "./DistanceCal";
import {Col, Row} from "react-bootstrap";
import DistanceCal from "./DistanceCal";
function TruckList({ truckData }) {

    

  return (
    <Row md={2} xs={1} lg={3} className="g-4">

            {truckData.map((location) => (
                <Col>
                <DistanceCal
                id={location.id}
                key={location.id}
                name={location.applicant}
                latitude={location.latitude}
                longitude={location.longitude}

                truckData={truckData}
                fooditems={location.fooditems} 
                />
                </Col>
                
            ))}
    

    </Row>
    
  );
}
export default TruckList;
