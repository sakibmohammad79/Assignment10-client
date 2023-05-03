import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Card, Col, Image } from "react-bootstrap";

const People = ({ data }) => {
  console.log(data);
  const { userRating, userName, userPicture,time} = data;
  return (
    <Col>
      <Card>
        <Image  className="mt-3 ms-3 border border-2 border-warning"  style={{height:'50px', width: '50px'}}  src={userPicture} roundedCircle />
        <Card.Body>
          <Rating style={{ maxWidth: 120 }} value={userRating} readOnly />
          <Card.Title className="mt-2">{userName}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex">
          <small className="text-muted">{time}</small>
          <small className="text-muted ms-auto">Guest</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default People;
