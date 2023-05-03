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
          <Card.Title>{newsTitle}</Card.Title>
          <Card.Text className="text-muted">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex">
          <small className="text-muted">{eventDate}</small>
          <small className="text-muted ms-auto">Guest</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default NewsEvent;
