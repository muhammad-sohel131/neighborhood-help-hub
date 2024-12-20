import React from 'react'
import AuthContext from './AuthContext';
import { useState } from 'react';

export default function AuthProvider({children}) {
    const [isLogin, setLogin] = useState(false);
    const handleLogin = () => {
      setLogin(!isLogin)
      console.log(isLogin)
    }
    const authInfo = {
        isLogin,
        handleLogin
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
