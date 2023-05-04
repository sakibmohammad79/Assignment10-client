import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsEvent = ({ data }) => {
  const {recipeTypes3, newsTitle, newsAbout, eventDate} = data;
  return (
    <Col>
      <Card style={{boxShadow: '2px 2px 4px #888888'}}>
        <Card.Body >
          <Card.Img
            style={{ height: "250px" }}
            className="img-fluid"
            variant="top"
            src={recipeTypes3[0].foodImage}
            rounded
          />
          <Card.Title className="mt-2 fw-bold text-warning">{newsTitle}</Card.Title>
          <Card.Text className="text-muted fw-bold">
            {newsAbout.slice(0,150)}
          </Card.Text>
          <Link className="text-muted fw-bolder">see more</Link>
        </Card.Body>
        <Card.Footer className="d-flex fw-bold">
        <small className="text-warning">{eventDate}</small>
          <small className="text-warning ms-auto">Available</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default NewsEvent;
