import React from "react";
import { Card, Col } from "react-bootstrap";

const NewsEvent = ({ data }) => {
  const {recipeTypes3, newsTitle, eventDate} = data;
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Img
            style={{ height: "250px" }}
            className="img-fluid"
            variant="top"
            src={recipeTypes3[0].foodImage}
            rounded
          />
          <Card.Title className="mt-2 fw-bold">{newsTitle}</Card.Title>
          <Card.Text className="text-muted fw-bold">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex fw-bold">
        <small className="text-warning">{eventDate}</small>
          <small className="text-warning ms-auto">See More</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default NewsEvent;
