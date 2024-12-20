import React, { Children, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import AuthContext from '../context/AuthContext';

export default function PrivateRoute({children}) {
    const { isLogin } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLogin){
            navigate("/login")
        }
    },[isLogin])
    if(!isLogin){
        return "Loading...."  
    }
    return children
}
