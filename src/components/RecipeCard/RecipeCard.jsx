import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";


const RecipeCard = ({ data }) => {
  const { id, picture, newsAbout, name, yearOfExperience, numberOfRecife, like, about } = data;
  return (
    <Col>
    <Card style={{boxShadow: '2px 2px 4px #888888'}} className="p-2">
      <LazyLoadImage style={{height: '250px'}} src={picture}
       className="img-fluid rounded"
        alt="Image Alt"
        
      />
      <Card.Body >
        <Card.Title className="fw-bolder text-warning">{name}</Card.Title>
        <Card.Text className="fw-bold text-muted mb-2">
          {about.slice(0, 140)}.
        </Card.Text>
        <p className="mb-1" ><span className="fw-bolder text-warning">Year OF Experience:</span> <span className="fw-bold text-muted">{yearOfExperience} Year</span></p>
        <p className="mb-1"><span className="fw-bolder text-warning">Types Of Recipe:</span> <span className="fw-bold text-muted">{numberOfRecife} Types</span></p>
    
        <p className="mb-1"><span className="fw-bolder text-warning">Likes:</span><span className="fw-bold text-muted"> {like}</span></p>
        <div className="text-center mt-3">
        <Link style={{width: '100%'}} to={`recipe/${id}`}><Button className="fw-bold text-white px-3 pt-2 pb-2" variant="warning">View Chef And Recipes Details</Button></Link>
        </div>
        
      </Card.Body>
    </Card>
  </Col>
  );
};

export default RecipeCard;
