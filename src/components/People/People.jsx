import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Card, Col, Image } from "react-bootstrap";


const People = ({ data }) => {
  console.log(data);
  const { userRating, userName, userPicture,time,userComment} = data;
  return (
    <Col>
      <Card>
        <Image  className="mt-3 ms-3 border border-2 border-warning"  style={{height:'50px', width: '50px'}}  src={userPicture} roundedCircle />
        <Card.Body>
          <Rating style={{ maxWidth: 120 }} value={userRating} readOnly />
          <Card.Title className="mt-2 fw-bold">{userName}</Card.Title>
          <Card.Text className="fw-bold text-muted">
            {userComment.slice(0, 147)}.
          </Card.Text>
        </Card.Body>
        <div  className="d-flex px-3 pb-3 fw-bold text-warning">
          <small className="">{time}</small>
          <small className=" ms-auto">Guest</small>
        </div>
      </Card>
    </Col>
  );
};

export default People;
