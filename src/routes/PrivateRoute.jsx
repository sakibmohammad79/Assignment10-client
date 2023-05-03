import React, { useContext } from 'react';
import { UserContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(UserContext);
    if(loading){
        return <Spinner animation="border" variant="warning" />
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default PrivateRoute;