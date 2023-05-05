import React, { useEffect, useState } from "react";
import { Button, Carousel, Container, Row, Spinner } from "react-bootstrap";
import RecipeCard from "../RecipeCard/RecipeCard";
import People from "../People/People";
import NewsEvent from "../NewsEvent/NewsEvent";
import Record from "../Record/Record";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from '../../assets/logo (1).png'
import Gallery from "../Gallery/Gallery";



const Home = () => {
  const [datas, setDatas] = useState([]);
  console.log(datas);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://assignment10-recipe-hunting-server-sakibmohammad79.vercel.app/recipe"
    )
      .then((res) => res.json())
      .then((data) => setDatas(data));
      setLoading(false);
  }, []);

  const handleLoading = () => {
    return <Spinner animation="border" variant="warning" />;
  };

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <LazyLoadImage
            className="d-block w-100"
            style={{ height: "90vh", filter: 'brightness(60%)' }}
            src="https://i.postimg.cc/XNxGqQtS/pexels-min-an-1482803.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="mb-5">
            <div className="text-center"><img src={logo} alt="" /></div>
            <h1 className="fs-1 fw-bolder text-white">
              Awesome Recipes By The Most Talented Chefs!
            </h1>
            <p className="fw-bold text-white">
              We Have Awesome Recipe And Most Talented Chefs In Town!
            </p>
            <p className="mb-5  mt-4">
            <Button className="fw-bold px-5 py-3" variant="outline-warning">Book A Chef</Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <LazyLoadImage
            className="d-block w-100"
            style={{ height: "90vh", filter: 'brightness(50%)' }}
            src="https://i.postimg.cc/8Cjk72B6/pexels-elevate-1267320.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="mb-5">
          <div className="text-center"><img src={logo} alt="" /></div>
            <h1 className="fs-1 fw-bolder">
              Awesome Recipes By The Most Talented Chefs!
            </h1>
            <p className="fw-bold">
              We Have Awesome Recipe And Most Talented Chefs In Town!
            </p>
            <p className="mb-5  mt-4">
            <Button className="fw-bold px-5 py-3" variant="outline-warning">Book A Chef</Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <LazyLoadImage
            className="d-block w-100"
            style={{ height: "90vh", filter: 'brightness(60%)' }}
            src="https://i.postimg.cc/7LLbmcgH/pexels-rodnae-productions-5779787.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="mb-5">
          <div className="text-center"><img src={logo} alt="" /></div>
            <h1 className="fs-1 fw-bolder">
              Awesome Recipes By The Most Talented Chefs!
            </h1>
            <p className="fw-bold">
              We Have Awesome Recipe And Most Talented Chefs In Town!
            </p>
            <p className="mb-5  mt-4">
            <Button className="fw-bold px-5 py-3" variant="outline-warning">Book A Chef</Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      

      { loading ? handleLoading() :
        <div>
          <div>
          <Container className="mt-5 mb-5">
            <h3 className="text-center text-warning fw-bold">
              Our All Talented Chef
            </h3>
            <p className="text-center">
              <small className=" fw-bold text-muted">
                Awesome Recipes By The Most Talented Chefs! We Have Awesome
                 Recipe <br></br> And Most Talented Chefs In Town!
              </small>
            </p>
            <Row xs={1} md={2} lg={3} className="g-4 mb-4 d-flex">
              {datas.slice(0,6).map((data) => (
                <RecipeCard key={data.id} data={data}></RecipeCard>
              ))}
            </Row>
          <Record></Record>
          </Container>
          </div>
          <Gallery></Gallery>

          <div>
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
              {datas.slice(0,6).map((data) => (
                <People key={data.id} data={data}></People>
              ))}
            </Row>
          </Container>
          </div>

          <div>
          <Container className="my-5">
            <h3 className="text-center text-warning fw-bold">
              Our News & Events
            </h3>
            <p className="text-center">
              <small className=" fw-bold text-muted">
                Follow our latest news updates to know about our offers, recipes
                and events. One cannot think well,<br></br> love well, sleep
                well, if one has not dined well
              </small>
            </p>
            <Row xs={1} md={2} lg={3} className="g-4 mb-4 d-flex">
              {datas.slice(0,6).map((data) => (
                <NewsEvent key={data.id} data={data}></NewsEvent>
              ))}
            </Row>
          </Container>
          </div>
        </div>
      }
    </div>
  );
};

export default Home;
