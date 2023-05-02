import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const RecipeCard = ({ data }) => {
  const { id, picture, name, yearOfExperience, numberOfRecife, like } = data;
  return (
    <Container>
      <Row  xs={1} md={2} className="g-4 mb-4 d-flex" >
        <Col>
          <Card style={{width: '350px'}}>
            <Card.Img style={{height: '250px'}} className="img-fluid" variant="top" src={picture} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <p>Year OF Experience: {yearOfExperience}</p>
              <p>Types Of Recipe: {numberOfRecife}</p>
              <div className="d-flex justify-content-between align-items-center">
              <p>Likes: {like}</p>
              <Button variant="warning">View Recipes Button</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeCard;
