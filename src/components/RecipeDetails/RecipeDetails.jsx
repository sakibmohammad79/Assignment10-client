import React, { useState } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RecipeDetails = () => {
  const [disabled1, setDisabled1] = useState(false);
  const [disabled2, setDisabled2] = useState(false);
  const [disabled3, setDisabled3] = useState(false);

  const handleToast1 = () => {
    toast("Your Favourite Recipe Are Added!");
    setDisabled1(true);
  };
  const handleToast2 = () => {
    toast("Your Favourite Recipe Are Added!");
    setDisabled2(true);
  };
  const handleToast3 = () => {
    toast("Your Favourite Recipe Are Added!");
    setDisabled3(true);
  };
  const RecipeDetails = useLoaderData();
  console.log(RecipeDetails);
  const {
    picture,
    name,
    about,
    numberOfRecife,
    like,
    yearOfExperience,
    recipeTypes1,
    recipeTypes2,
    recipeTypes3,
  } = RecipeDetails;
  return (
    <Container>
        <ToastContainer></ToastContainer>
      <div>
        <div className="bg-dark d-flex justify-content-center align-items-center my-5 ">
          <div className="p-3">
            <h1 className="text-white">Hi, Discuss More!</h1>
            <h3 className="mb-1 mt-3">
              <span className="text-warning fw-bolder">My name is:</span>{" "}
              <span className="fw-bold text-white fs-5">{name}</span>
            </h3>
            <h3 className="mb-1">
              <span className="text-warning  fw-bolder">About Me:</span>{" "}
              <span className="fw-bold text-white fs-5">{about}</span>
            </h3>
            <h3 className="mb-1">
              <span className="text-warning  fw-bolder">My Experience:</span>{" "}
              <span className="fw-bold text-white fs-5">
                {yearOfExperience} Years
              </span>
            </h3>
            <h3 className="mb-1">
              <span className="text-warning  fw-bolder">People Likes:</span>{" "}
              <span className="fw-bold text-white fs-5">{like}k</span>
            </h3>
          </div>
          <div>
            <LazyLoadImage
              style={{ height: "600px", width: "500px" }}
              src={picture}
            ></LazyLoadImage>
          </div>
        </div>

       <div className="w-75 mx-auto">


       <div
          style={{ boxShadow: "2px 2px 4px #888888" }}
          className="d-flex align-items-center mb-2 p-2 rounded"
        >
          <LazyLoadImage
            className="rounded"
            style={{ height: "230px", width: "150px" }}
            src={recipeTypes1[0].foodImage}
            alt=""
          />
          <div className="ps-2">
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">Recipe Name:</span>{" "}
              <span className="fw-bold text-muted">
                {recipeTypes1[0].recipeName}
              </span>
            </p>
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">
                Recipe Ingradients:
              </span>{" "}
              {recipeTypes1[0].ingredients.map((ingra) => (
                <span className="me-2 fw-bold text-muted">{ingra}</span>
              ))}
            </p>
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">
                Cooking Methods:
              </span>{" "}
              <span className="fw-bold text-muted">
                {recipeTypes1[0].cookingMethos.slice(0, 200)}
              </span>
            </p>
            <div className="d-flex justify-content-between pe-2 align-items-center">
              <small className="d-flex align-items-center">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={recipeTypes1[0].rating}
                  readOnly
                />
                <span className="fw-bold fs-5 ps-1 text-muted">
                  {recipeTypes1[0].rating}
                </span>
              </small>
              <Button
                onClick={handleToast1}
                disabled={disabled1}
                variant="warning"
              >
                <span className="fw-bold text-white">Favourite</span>
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{ boxShadow: "2px 2px 4px #888888" }}
          className="d-flex align-items-center mb-2 p-2 rounded"
        >
          <LazyLoadImage
            className="rounded"
            style={{ height: "230px", width: "150px" }}
            src={recipeTypes2[0].foodImage}
            alt=""
          />
          <div className="ps-2">
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">Recipe Name:</span>{" "}
              <span className="fw-bold text-muted">
                {recipeTypes2[0].recipeName}
              </span>
            </p>
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">
                Recipe Ingradients:
              </span>{" "}
              {recipeTypes2[0].ingredients.map((ingra) => (
                <span className="me-2 fw-bold text-muted">{ingra}</span>
              ))}
            </p>
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">
                Cooking Methods:
              </span>{" "}
              <span className="fw-bold text-muted">
                {recipeTypes2[0].cookingMethos.slice(0, 200)}
              </span>
            </p>
            <div className="d-flex justify-content-between pe-2 align-items-center">
              <small className="d-flex align-items-center">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={recipeTypes2[0].rating}
                  readOnly
                />
                <span className="fw-bold fs-5 ps-1 text-muted">
                  {recipeTypes2[0].rating}
                </span>
              </small>
              <Button
                onClick={handleToast2}
                disabled={disabled2}
                variant="warning"
              >
                <span className="fw-bold text-white">Favourite</span>
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{ boxShadow: "2px 2px 4px #888888" }}
          className="d-flex align-items-center mb-5 p-2 rounded"
        >
          <LazyLoadImage
            className="rounded"
            style={{ height: "230px", width: "150px" }}
            src={recipeTypes3[0].foodImage}
            alt=""
          />
          <div className="ps-2">
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">Recipe Name:</span>{" "}
              <span className="fw-bold text-muted">
                {recipeTypes3[0].recipeName}
              </span>
            </p>
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">
                Recipe Ingradients:
              </span>{" "}
              {recipeTypes3[0].ingredients.map((ingra) => (
                <span className="me-2 fw-bold text-muted">{ingra}</span>
              ))}
            </p>
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">
                Cooking Methods:
              </span>{" "}
              <span className="fw-bold text-muted">
                {recipeTypes3[0].cookingMethos.slice(0, 200)}
              </span>
            </p>
            <div className="d-flex justify-content-between pe-2 align-items-center">
              <small className="d-flex align-items-center">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={recipeTypes3[0].rating}
                  readOnly
                />
                <span className="fw-bold fs-5 ps-1 text-muted">
                  {recipeTypes3[0].rating}
                </span>
              </small>
              <Button
                onClick={handleToast3}
                disabled={disabled3}
                variant="warning"
              >
                <span className="fw-bold text-white">Favourite</span>
              </Button>
            </div>
          </div>
        </div>

       </div>
      </div>
    </Container>
  );
};

export default RecipeDetails;
