import React, { useEffect, useState } from "react";
import { Carousel, Container, Row, Spinner } from "react-bootstrap";
import "./Home.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import People from "../People/People";
import NewsEvent from "../NewsEvent/NewsEvent";
import Record from "../Record/Record";


const Home = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(
      "https://assignment10-recipe-hunting-server-sakibmohammad79.vercel.app/recipe"
    )
      .then((res) => res.json())
      .then((data) => setDatas(data));
      setLoading(false)
  }, []);

  const handleLoading = () =>{
    return <Spinner animation="border" variant="warning" />
  }

  return (
      <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "80vh" }}
            src="https://i.postimg.cc/XNxGqQtS/pexels-min-an-1482803.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="mb-5">
            <h5 className="fw-bold text-white">Fresh Ingredient, Tasty Meal</h5>
            <h1 className="fs-1 fw-bolder text-white">
              Awesome Recipes By The Most Talented Chefs!
            </h1>
            <p className="fw-bold text-white">
              We Have Awesome Recipe And Most Talented Chefs In Town!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "80vh" }}
            src="https://i.postimg.cc/8Cjk72B6/pexels-elevate-1267320.jpg"
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
            src="https://i.postimg.cc/KYJcjZMF/pexels-umut-da-li-13087600.jpg"
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
      
      { loading? handleLoading() :
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
}
      {
        loading ? handleLoading() : 
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
      }
      {
        loading ? handleLoading():
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
      }
    </div>
  );
};

export default Home;
