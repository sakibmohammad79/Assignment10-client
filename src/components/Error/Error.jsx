import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='mt-5'>
            <h3 className='text-4xl text-gray-500 text-center'><span className=' font-bold'>Oops;</span> Sorry,but the page you were trying to<br></br> view does not exist.</h3>
            <p className='text-9xl text-center font-extrabold text-gray-600'>404</p>
            <p className='text-center'><Link to='/'><button className='text-2xl bg-gray-200 py-3 px-6 rounded mt-8 text-gray-500'>Back To Home</button></Link></p>
        </div>
    )
};

export default Error;