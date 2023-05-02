import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import './Home.css'
import RecipeCard from "../RecipeCard/RecipeCard";

const Home = () => {
    const [datas, setDatas] = useState([]);

    useEffect(()=>{
        fetch('https://assignment10-recipe-hunting-server-sakibmohammad79.vercel.app/recipe')
        .then((res) => res.json())
        .then((data) => setDatas(data));
    },[])

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
          <h5  className="fw-bold">Fresh Ingredient, Tasty Meal</h5>
          <h1 className="fs-1 fw-bolder">Awesome Recipes By The Most Talented Chefs!</h1>
          <p  className="fw-bold">We Have Awesome Recipe And Most Talented Chefs In Town!</p>
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
          <h5  className="fw-bold">Fresh Ingredient, Tasty Meal</h5>
          <h1 className="fs-1 fw-bolder">Awesome Recipes By The Most Talented Chefs!</h1>
          <p  className="fw-bold">We Have Awesome Recipe And Most Talented Chefs In Town!</p>
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
          <h1 className="fs-1 fw-bolder">Awesome Recipes By The Most Talented Chefs!</h1>
          <p  className="fw-bold">We Have Awesome Recipe And Most Talented Chefs In Town!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="mt-5">
    {
        datas.map(data => <RecipeCard 
        key={data.id}
        data={data}>
        </RecipeCard>)
    }
    </div>
    </div>
  );
};

export default Home;
