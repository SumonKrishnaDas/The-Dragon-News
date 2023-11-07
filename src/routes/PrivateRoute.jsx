import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

const {user} = useContext(Authcontext);
if(user){
return children;

}



    return  <Navigate  to="/login">  </Navigate>
};

export default PrivateRoute;