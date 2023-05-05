import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';



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
  const {picture,name,about,like,yearOfExperience,recipeTypes1,recipeTypes2,recipeTypes3, numberOfRecife} = RecipeDetails;
  return (
    <Container>
        <ToastContainer></ToastContainer>
      <div >
        <div style={{ boxShadow: "2px 2px 4px #888888" }} className="bg-dark rounded row align-items-center my-5 ">
          <div className="p-3 col-12 col-md-6">
            <h1 className="text-white">Hi, Discuss More!</h1>
            <h4 className="mb-2 mt-3">
              <span className="text-warning fw-bolder">My name is:</span>{" "}
              <span className="fw-bold text-white fs-5">{name}</span>
            </h4>
            <h4 className="mb-2">
              <span className="text-warning  fw-bolder">About Me:</span>{" "}
              <span className="fw-bold text-white fs-5">{about}</span>
            </h4>
            <h4 className="mb-2">
              <span className="text-warning  fw-bolder">My Experience:</span>{" "}
              <span className="fw-bold text-white fs-5">
                {yearOfExperience} Years
              </span>
            </h4>
            <h4 className="mb-2">
              <span className="text-warning  fw-bolder">Recipe Types:</span>{" "}
              <span className="fw-bold text-white fs-5">{numberOfRecife} Type</span>
            </h4>
            <h4 className="mb-1">
              <span className="text-warning  fw-bolder">People Likes:</span>{" "}
              <span className="fw-bold text-white fs-5">{like}k</span>
            </h4>

             <div className=" mt-4 ">
              <Link className="text-white"><FaFacebook style={{height: '1.8rem', width: '2rem'}}></FaFacebook></Link>
              <Link className="text-white px-3"><FaTwitter style={{height: '1.8rem', width: '2rem'}}></FaTwitter></Link>
              <Link className="text-white"><FaInstagram style={{height: '1.8rem', width: '2rem'}}></FaInstagram></Link>
             </div>
      
          </div>
          <div className="col-12 col-md-6">
            <LazyLoadImage fluid style={{ height: "600px", width: "558px" }} src={picture}></LazyLoadImage>
          </div>
        </div>
       <div className=" row">
       <div style={{ boxShadow: "2px 2px 4px #888888" }} className="d-flex align-items-center my-4 p-2 rounded col-12 col-md-9 mx-auto"
        >
          <LazyLoadImage className="rounded" style={{ height: "280px", width: "230px" }} src={recipeTypes1[0].foodImage} alt=""/>
          <div className="ps-2">
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">Recipe Name:</span>{" "}
              <span className="fw-bold text-muted">{recipeTypes1[0].recipeName}</span>
            </p>
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">Recipe Ingradients:</span>{" "}
              {recipeTypes1[0].ingredients.map((ingra) => (
                <span className="me-2 fw-bold text-muted">{ingra}</span>))}
            </p>
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">Cooking Methods:</span>{" "}
              <span className="fw-bold text-muted">
                {recipeTypes1[0].cookingMethos.slice(0, 250)}.
              </span>
              <p className="fw-bold fs-5 mt-2 mb-1"><span className="text-warning">Likes:</span> <span className="fs-6 text-muted">{like}</span></p>
            </p>
            <div className="d-flex justify-content-between pe-2 align-items-center">
              <small className="d-flex align-items-center">
                <Rating style={{ maxWidth: 120 }} value={recipeTypes1[0].rating} readOnly
                />
                <span className="fw-bold fs-5 ps-1 text-muted">
                  {recipeTypes1[0].rating}
                </span>
              </small>
              <Button onClick={handleToast1} disabled={disabled1} variant="warning">
                <span className="fw-bold text-white">Favourite</span>
              </Button>
            </div>
          </div>
        </div>
        <div style={{ boxShadow: "2px 2px 4px #888888" }}
          className="d-flex align-items-center mb-4 p-2 rounded col-12 col-md-9 mx-auto">
          <LazyLoadImage
            className="rounded"style={{ height: "280px", width: "230px" }}src={recipeTypes2[0].foodImage}alt=""/>
          <div className="ps-2">
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">Recipe Name:</span>{" "}<span className="fw-bold text-muted">{recipeTypes2[0].recipeName}</span>
            </p>
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">Recipe Ingradients:
              </span>{" "}{recipeTypes2[0].ingredients.map((ingra) => (<span className="me-2 fw-bold text-muted">{ingra}</span>))}
            </p>
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">Cooking Methods:</span>{" "}
              <span className="fw-bold text-muted">{recipeTypes2[0].cookingMethos.slice(0, 250)}.
              </span>
              <p className="fw-bold fs-5 mt-2 mb-1"><span className="text-warning">Likes:</span> <span className="fs-6 text-muted">{like}</span></p>
            </p>
            <div className="d-flex justify-content-between pe-2 align-items-center">
              <small className="d-flex align-items-center">
                <Rating style={{ maxWidth: 120 }}value={recipeTypes2[0].rating}readOnly/>
                <span className="fw-bold fs-5 ps-1 text-muted">{recipeTypes2[0].rating}</span>
              </small>
              <Button onClick={handleToast2}disabled={disabled2}variant="warning">
                <span className="fw-bold text-white">Favourite</span>
              </Button>
            </div>
          </div>
        </div>
        <div style={{ boxShadow: "2px 2px 4px #888888" }}className="d-flex align-items-center mb-5 p-2 rounded col-12 col-md-9 mx-auto">
          <LazyLoadImage className="rounded"style={{ height: "280px", width: "230px" }}
            src={recipeTypes3[0].foodImage}alt=""/>
          <div className="ps-2">
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">Recipe Name:</span>{" "}
              <span className="fw-bold text-muted">{recipeTypes3[0].recipeName}</span>
            </p>
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">Recipe Ingradients:</span>{" "}
              {recipeTypes3[0].ingredients.map((ingra) => (<span className="me-2 fw-bold text-muted">{ingra}</span>))}
            </p>
            <p className="mb-2">
              <span className="fw-bolder text-warning fs-5">Cooking Methods:</span>{" "}
              <span className="fw-bold text-muted">{recipeTypes3[0].cookingMethos.slice(0,250)}.
              </span>
              <p className="fw-bold fs-5 mt-2 mb-1"><span className="text-warning">Likes:</span> <span className="fs-6 text-muted ">{like}</span></p>
            </p>
            <div className="d-flex justify-content-between pe-2 align-items-center">
              <small className="d-flex align-items-center">
                <Rating style={{ maxWidth: 120 }}value={recipeTypes3[0].rating}readOnly/>
                <span className="fw-bold fs-5 ps-1 text-muted">
                  {recipeTypes3[0].rating}
                </span>
              </small>
              <Button onClick={handleToast3} disabled={disabled3}variant="warning">
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
