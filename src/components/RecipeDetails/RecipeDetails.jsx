import React, { useState } from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';




const RecipeDetails = () => {
    
    const [disabled1, setDisabled1] = useState(false);
    const [disabled2, setDisabled2] = useState(false);
    const [disabled3, setDisabled3] = useState(false);

    const handleToast1= ()=>{
        toast('Your Favourite Recipe Are Added!');
        setDisabled1(true);
    }
    const handleToast2= ()=>{
        toast('Your Favourite Recipe Are Added!');
        setDisabled2(true);
    }
    const handleToast3= ()=>{
        toast('Your Favourite Recipe Are Added!');
        setDisabled3(true);
    }
    const RecipeDetails = useLoaderData();
    console.log(RecipeDetails);
    const {picture,name,about,numberOfRecife,like,yearOfExperience,recipeTypes1,recipeTypes2,recipeTypes3} = RecipeDetails;
    return (
    <Container>
        <div className='row my-5 '>
        <div className=' mt-5 col-12 col-md-4 '>
         <Card className='px-3 pt-3 pb-4 mx-auto'  style={{ height: '600px', width: '450px', boxShadow: '2px 2px 4px #888888'}}>
         <LazyLoadImage style={{height: '300px'}} src={picture} className='rounded'/>
         <p className='mb-1 mt-3'><span className='text-warning fs-5 fw-bolder'>My name is:</span> <span className='fw-bold text-muted'>{name}</span></p>
         <p className='mb-1'><span className='text-warning fs-5 fw-bolder'>About Me:</span> <span className='fw-bold text-muted'>{about}</span></p>
         <p className='mb-1'><span className='text-warning fs-5 fw-bolder'>My Experience:</span> <span className='fw-bold text-muted'>{yearOfExperience} Years</span></p>
         <p className='mb-1'><span className='text-warning fs-5 fw-bolder'>People Likes:</span> <span className='fw-bold text-muted'>{like}k</span></p>
         <p className='mb-1'><span className='text-warning fs-5 fw-bolder'>Recipe Types:</span> <span className='fw-bold text-muted'>{numberOfRecife}</span></p>
         </Card>
        </div>

     <div className='col-12 col-md-7 ms-auto '>
            <div style={{boxShadow: '2px 2px 4px #888888'}} className='d-flex align-items-center mt-5 mb-5 p-2 rounded'>
                <LazyLoadImage className='rounded' style={{height: '230px', width: '150px'}} src={recipeTypes1[0].foodImage} alt="" />
                <div className='ps-2'>
                <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Recipe Name:</span> <span className='fw-bold text-muted'>{recipeTypes1[0].recipeName}</span></p>
                <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Recipe Ingradients:</span> {recipeTypes1[0].ingredients.map(ingra => <span className='me-2 fw-bold text-muted'>{ingra}</span>)}</p>
                <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Cooking Methods:</span> <span className='fw-bold text-muted'>{recipeTypes1[0].cookingMethos.slice(0, 200)}</span></p>
                <div className='d-flex justify-content-between pe-2 align-items-center'>
               <small className='d-flex align-items-center'>
                <Rating style={{ maxWidth: 120 }} value={recipeTypes1[0].rating}    readOnly/>
                <span className='fw-bold fs-5 ps-1 text-muted'>{recipeTypes1[0].rating}</span>
                </small>
                <Button onClick={handleToast1} disabled={disabled1} variant="warning"><span className='fw-bold text-white'>Favourite</span></Button>
               </div>
                </div>
            </div>
            
            <div style={{boxShadow: '2px 2px 4px #888888'}} className='d-flex align-items-center mb-5 p-2 rounded'>
                <LazyLoadImage className='rounded'  style={{height: '230px', width: '150px'}} src={recipeTypes2[0].foodImage} alt="" />
                <div className='ps-2'>
                <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Recipe Name:</span> <span className='fw-bold text-muted'>{recipeTypes2[0].recipeName}</span></p>
                <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Recipe Ingradients:</span> {recipeTypes2[0].ingredients.map(ingra => <span className='me-2 fw-bold text-muted'>{ingra}</span>)}</p>
                <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Cooking Methods:</span> <span className='fw-bold text-muted'>{recipeTypes2[0].cookingMethos.slice(0, 200)}</span></p>
                <div className='d-flex justify-content-between pe-2 align-items-center'>
               <small className='d-flex align-items-center'>
                <Rating style={{ maxWidth: 120 }} value={recipeTypes2[0].rating}    readOnly/>
                <span className='fw-bold fs-5 ps-1 text-muted'>{recipeTypes2[0].rating}</span>
                </small>
                <Button onClick={handleToast2} disabled={disabled2} variant="warning"><span className='fw-bold text-white'>Favourite</span></Button>
               </div>
                </div>
            </div>

            <div style={{boxShadow: '2px 2px 4px #888888'}} className='d-flex align-items-center mb-5 rounded p-2'>
                <img className='rounded'  style={{height: '230px', width: '150px'}} src={recipeTypes3[0].foodImage} alt="" />
                <div className='ps-2'>
                <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Recipe Namea:</span> <span className='fw-bold text-muted'>{recipeTypes1[0].recipeName}</span></p>
                <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Recipe Ingradients:</span> {recipeTypes2[0].ingredients.map(ingra => <span className='me-2 fw-bold text-muted'>{ingra}</span>)}</p>
                <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Cooking Methods:</span> <span className='fw-bold text-muted'>{recipeTypes3[0].cookingMethos.slice(0, 200)}</span></p>
                <div className='d-flex justify-content-between pe-2 align-items-center'>
               <small className='d-flex align-items-center'>
                <Rating style={{ maxWidth: 120 }} value={recipeTypes3[0].rating}    readOnly/>
                <span className='fw-bold fs-5 ps-1 text-muted'>{recipeTypes3[0].rating}</span>
                </small>
                <Button onClick={handleToast3} disabled={disabled3} variant="warning"><span className='fw-bold text-white'>Favourite</span></Button>
               </div>
            </div>
            </div>
        </div> 
    </div>   
    </Container>       
    );
};

export default RecipeDetails;