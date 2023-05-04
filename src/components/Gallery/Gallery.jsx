import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../../assets/gallery.jpg'
import img2 from '../../assets/testimonials.jpg'
import img3 from '../../assets/menu-detail.jpg'
import './Gallery.css'

const Gallery = () => {
    return (
        <Container>
            <div className='row align-items-center'>
                <div className='text-center col-md-4'>
                    <img className='img' style={{height: '390px', width: '350px', boxShadow: '2px 2px 4px #888888'}} src={img3} alt="" />
                    <p className='text-center pt-2 fw-bold fs-5'>Menu Detail</p>
                </div>
                <div className='text-center col-md-4'>
                    <img  className=' img' style={{height: '390px', width: '350px', boxShadow: '2px 2px 4px #888888'}} src={img1} alt="" />
                <p className='text-center pt-2 fw-bold fs-5'>Gerllery</p>
                </div>
                <div className='text-center col-md-4'>
                    <img className='img' style={{height: '390px', width: '350px', boxShadow: '2px 2px 4px #888888'}} src={img2} alt="" />
                <p className='text-center pt-2 fw-bold fs-5'>Testimonials</p>

                </div>
            </div>
        </Container>
    );
};

export default Gallery;