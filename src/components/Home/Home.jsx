import React, { useEffect, useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import "./Home.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import People from "../People/People";
import NewsEvent from "../NewsEvent/NewsEvent";
import Record from "../Record/Record";

const Home = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(
      "https://assignment10-recipe-hunting-server-sakibmohammad79.vercel.app/recipe"
    )
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "80vh" }}
            src="https://i.postimg.cc/15hm963h/pexels-elevate-1267320.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="mb-5">
            <h5 className="fw-bold">Fresh Ingredient, Tasty Meal</h5>
            <h1 className="fs-1 fw-bolder">
              Awesome Recipes By The Most Talented Chefs!
            </h1>
            <p className="fw-bold">
              We Have Awesome Recipe And Most Talented Chefs In Town!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "80vh" }}
            src="https://i.postimg.cc/XNxGqQtS/pexels-min-an-1482803.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="mb-5">
            <h5 className="fw-bold">Fresh Ingredient, Tasty Meal</h5>
            <h1 className="fs-1 fw-bolder">
              Awesome Recipes By The Most Talented Chefs!
            </h1>
            <p className="fw-bold">
              We Have Awesome Recipe And Most Talented Chefs In Town!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "80vh" }}
            src="https://i.postimg.cc/mZdkBhFT/pexels-yente-van-eynde-2403392.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="mb-5">
            <h5 className="fw-bold">Fresh Ingredient, Tasty Meal</h5>
            <h1 className="fs-1 fw-bolder">
              Awesome Recipes By The Most Talented Chefs!
            </h1>
            <p className="fw-bold">
              We Have Awesome Recipe And Most Talented Chefs In Town!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-5 mb-5">
        <h3 className="text-center text-warning fw-bold">
          Our All Talented Chef
        </h3>
        <p className="text-center">
          <small className=" fw-bold text-muted">
            Awesome Recipes By The Most Talented Chefs! We Have Awesome
            <br></br> Recipe And Most Talented Chefs In Town!
          </small>
        </p>
        <Row xs={1} md={2} lg={3} className="g-4 mb-4 d-flex">
          {datas.map((data) => (
            <RecipeCard key={data.id} data={data}></RecipeCard>
          ))}
        </Row>
        <Record></Record>
      </Container>

      <Container className="my-5">
        <h3 className="text-center text-warning fw-bold">
          People Say About Us!
        </h3>
        <p className="text-center">
          <small className=" fw-bold text-muted">
            Awesome Recipes By The Most Talented Chefs! We Have Awesome
            <br></br> Recipe And Most Talented Chefs In Town!
          </small>
        </p>
        <Row xs={1} md={2} lg={3} className="g-4 mb-4 d-flex">
          {datas.map((data) => (
            <People key={data.id} data={data}></People>
          ))}
        </Row>
      </Container>
      <Container className="my-5">
        <h3 className="text-center text-warning fw-bold">
        Our News & Events
        </h3>
        <p className="text-center">
          <small className=" fw-bold text-muted">
          Follow our latest news updates to know about our offers, recipes and events. One cannot think well,<br></br> love well, sleep well, if one has not dined well
          </small>
        </p>
        <Row xs={1} md={2} lg={3} className="g-4 mb-4 d-flex">
          {datas.map((data) => (
            <NewsEvent key={data.id} data={data}></NewsEvent>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
