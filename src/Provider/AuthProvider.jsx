import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
// eslint-disable-next-line react-refresh/only-export-components

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
  
    const[loading,setLoading]=useState(false)
    const[user,setUser]=useState(null)
    console.log(user,loading)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn=(email,password)=>{
        return signInWithEmailAndPassword(auth ,email,password)
    }
    const updateUser=updatedData=>{
       return updateProfile(auth.currentUser,updatedData)
    }
    const logOut=()=>{
       return signOut(auth)
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
            
          });
          return(()=>{
            unsubscribe()
          })
    })
    const authData={
        user,
        setUser,
        createUser,
        logOut,
        singIn,
        loading,
        setLoading,
        updateUser

    }
    
    return (
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    );
 
   
  
};


export default AuthProvider;