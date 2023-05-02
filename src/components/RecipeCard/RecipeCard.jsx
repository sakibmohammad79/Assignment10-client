import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeCard = ({ data }) => {
  const { id, picture, name, yearOfExperience, numberOfRecife, like } = data;
  return (
    <Col>
    <Card>
      <Card.Img style={{height: '250px'}} className="img-fluid" variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </Card.Text>
        <p>Year OF Experience: {yearOfExperience} Year</p>
        <p>Types Of Recipe: {numberOfRecife} Types</p>
        <div className="d-flex justify-content-between align-items-center">
        <p>Likes: {like}</p>
        <Link to={`recipe/${id}`}><Button variant="warning">View Recipes Button</Button></Link>
        </div>
      </Card.Body>
    </Card>
  </Col>
  );
};

export default RecipeCard;
