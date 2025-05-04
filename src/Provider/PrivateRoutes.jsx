import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading/Loading';

const PrivateRoutes = ({children}) => {
    const location=useLocation()
    const{loading,user}=useContext(AuthContext)
    console.log(user)
    if(loading){
return <Loading></Loading>
    }

   if(user&&user?.email){
    return children
   }
   return <Navigate state={location.pathname} to='/auth/login'></Navigate>
   }
export default PrivateRoutes;