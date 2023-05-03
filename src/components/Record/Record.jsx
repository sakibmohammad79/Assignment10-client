import React from 'react';
import { Container } from 'react-bootstrap';
import logo1 from '../../assets/client1.png'
import logo2 from '../../assets/client2.png'
import logo3 from '../../assets/client3.png'
import logo4 from '../../assets/client4.png'
import logo5 from '../../assets/client5.png'
import logo6 from '../../assets/client6.png'

const Record = () => {
    return (
       <div>
        <h3 className='mb-3 mt-5 text-center text-warning fw-bold'>A recognized track-record</h3>
        <Container className='text-center'>
            <img src={logo1} alt="" />
            <img className='px-5' src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img className='px-5' src={logo4} alt="" />
            <img src={logo5} alt="" />
            <img className='ps-5' src={logo6} alt="" />
        </Container>
       </div>
    );
};

export default Record;