import React, { useContext } from 'react';
import { UserContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user} = useContext(UserContext);
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default PrivateRoute;