import React, { useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
    const {picture,name,about,numberOfRecife,like,yearOfExperience,address,email,phone,recipeTypes1,recipeTypes2,recipeTypes3} = RecipeDetails;
    return (
        <div className='my-5 px-5 d-flex align-items-center gap-5'>
            <div className='w-100'>
             <Image style={{height: '500px', width:'450px',}} src={picture} roundedCircle />
             <p className='mb-1 mt-4'><span className='text-warning fs-4 fw-bolder'>My name is:</span> <span className='fw-bold'>{name}</span></p>
             <p className='mb-1'><span className='text-warning fs-4 fw-bolder'>About Me:</span> <span className='fw-bold'>{about}</span></p>
             <p className='mb-1'><span className='text-warning fs-4 fw-bolder'>My Experience:</span> <span className='fw-bold'>{yearOfExperience} Years</span></p>
             <p className='mb-1'><span className='text-warning fs-4 fw-bolder'>People Likes:</span> <span className='fw-bold'>{like}k</span></p>
             <p className='mb-1'><span className='text-warning fs-4 fw-bolder'>Recipe Types:</span> <span className='fw-bold'>{numberOfRecife}</span></p>
            </div>


            <div >
                <div className='d-flex align-items-center mt-5 mb-5 border border-2 border-warning rounded'>
                    <img  style={{height: '230px', width: '150px'}} src={recipeTypes1[0].foodImage} alt="" />
                    <div className='ps-2'>
                    <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Recipe Name:</span> <span className='fw-bold text-gray'>{recipeTypes1[0].recipeName}</span></p>
                    <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Recipe Ingradients:</span> {recipeTypes1[0].ingredients.map(ingra => <span className='me-2 fw-bold'>{ingra}</span>)}</p>
                    <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Cooking Methods:</span> <span className='fw-bold'>{recipeTypes1[0].cookingMethos.slice(0, 200)}</span></p>
                    <div className='d-flex justify-content-between pe-2 align-items-center'>
                   <small className='d-flex align-items-center'>
                    <Rating style={{ maxWidth: 120 }} value={recipeTypes1[0].rating}    readOnly/>
                    <span className='fw-bold fs-5 ps-1'>{recipeTypes1[0].rating}</span>
                    </small>
                    <Button onClick={handleToast1} disabled={disabled1} variant="warning"><span className='fw-bold text-white'>Favourite</span></Button>
                   </div>
                    </div>
                </div>
                
                <div className='d-flex align-items-center mb-5 border border-2 border-warning rounded'>
                    <img  style={{height: '230px', width: '150px'}} src={recipeTypes2[0].foodImage} alt="" />
                    <div className='ps-2'>
                    <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Recipe Name:</span> <span className='fw-bold text-gray'>{recipeTypes2[0].recipeName}</span></p>
                    <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Recipe Ingradients:</span> {recipeTypes2[0].ingredients.map(ingra => <span className='me-2 fw-bold'>{ingra}</span>)}</p>
                    <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Cooking Methods:</span> <span className='fw-bold'>{recipeTypes2[0].cookingMethos.slice(0, 200)}</span></p>
                    <div className='d-flex justify-content-between pe-2 align-items-center'>
                   <small className='d-flex align-items-center'>
                    <Rating style={{ maxWidth: 120 }} value={recipeTypes2[0].rating}    readOnly/>
                    <span className='fw-bold fs-5 ps-1'>{recipeTypes2[0].rating}</span>
                    </small>
                    <Button onClick={handleToast2} disabled={disabled2} variant="warning"><span className='fw-bold text-white'>Favourite</span></Button>
                   </div>
                    </div>
                </div>

                <div className='d-flex align-items-center mb-5 border border-2 border-warning rounded'>
                    <img  style={{height: '230px', width: '150px'}} src={recipeTypes3[0].foodImage} alt="" />
                    <div className='ps-2'>
                    <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Recipe Namea:</span> <span className='fw-bold text-gray'>{recipeTypes3[0].recipeName}</span></p>
                    <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Recipe Ingradients:</span> {recipeTypes3[0].ingredients.map(ingra => <span className='me-2 fw-bold'>{ingra}</span>)}</p>
                    <p className='mb-2'><span className='fw-bolder text-warning fs-5'>Cooking Methods:</span> <span className='fw-bold'>{recipeTypes3[0].cookingMethos.slice(0, 200)}</span></p>
                    <div className='d-flex justify-content-between pe-2 align-items-center'>
                   <small className='d-flex align-items-center'>
                    <Rating style={{ maxWidth: 120 }} value={recipeTypes3[0].rating}    readOnly/>
                    <span className='fw-bold fs-5 ps-1'>{recipeTypes3[0].rating}</span>
                    </small>
                    <Button onClick={handleToast3} disabled={disabled3} variant="warning"><span className='fw-bold text-white'>Favourite</span></Button>
                   </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RecipeDetails;