import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=''>
           <img className='text-center w-100 mx-auto' src="https://i.ibb.co/sF66yXs/74g236r-Luo.gif" alt="" /> 

          <div className='text-center'>
          <Link to='/'>
          <button className='btn btn-outline btn-secondary'>Please Go To Home Page</button>
          </Link>
          </div>
        </div>
    );
};

export default ErrorPage;