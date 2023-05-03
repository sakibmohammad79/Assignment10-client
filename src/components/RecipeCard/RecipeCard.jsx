import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeCard = ({ data }) => {
  const { id, picture, name, yearOfExperience, numberOfRecife, like, about } = data;
  return (
    <Col>
    <Card>
      <Card.Img style={{height: '250px'}} className="img-fluid" variant="top" src={picture} />
      <Card.Body>
        <Card.Title className="fw-bolder">{name}</Card.Title>
        <Card.Text className="fw-bold text-muted mb-2">
          {about.slice(0, 150)}.
        </Card.Text>
        <p className="mb-1" ><span className="fw-bolder">Year OF Experience:</span> <span className="fw-bold text-muted">{yearOfExperience} Year</span></p>
        <p className="mb-1"><span className="fw-bolder">Types Of Recipe:</span> <span className="fw-bold text-muted">{numberOfRecife} Types</span></p>
    
        <p className="mb-1"><span className="fw-bolder">Likes:</span><span className="fw-bold text-muted"> {like}</span></p>
        <div className="text-center mt-2">
        <Link style={{width: '100%'}} to={`recipe/${id}`}><Button className="fw-bold text-white pt-2 pb-2" variant="warning">View Recipes Details</Button></Link>
        </div>
        
      </Card.Body>
    </Card>
  </Col>
  );
};

export default RecipeCard;
