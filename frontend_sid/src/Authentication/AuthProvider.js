/*import React from 'react'
import { useState } from 'react';
import {AuthContext} from './AuthContext'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const AUTH_URL = "http://localhost:8080/SID/server/authentication";


export default function AuthProvider({children}) {

  
    let isLoggedIn = false
    const navigate= useNavigate();
    let result=''
    //const [token, setToken] = useState('');
    //let token = ''
    //const [currentUser, setCurrentUser] = useState({})
    //const [currentUserInfo, setCurrentUserInfo] = useState({})

//const [isLoggedIn, setIsLoggedIn]= useState()

    const authentication= async (loginRequest) => {
 
         return await axios.post(AUTH_URL,loginRequest)
         
          /*.then(response => {
            if (response.data.jwttoken != "failed") {
                localStorage.clear()
                console.log(response.data.jwttoken)
                //console.log(response.data)
                localStorage.setItem("user", JSON.stringify(response.data)); 
                localStorage.setItem("password", loginRequest.password); 
                //navigate("/Menu");
                
                
                
                 isLoggedIn=true
                 console.log(isLoggedIn)
               
                 
                
                
              } else {
                
                isLoggedIn = false
                console.log(isLoggedIn)
                console.log( "can't log in") 
                alert('wrong credentials')
                
                //result =  'wrong credentials'
                   
            };
           
        })
        .catch(error => {
            console.log(error.response.data)
          
        });
        return isLoggedIn    }   
  


    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("password");
        localStorage.removeItem("dashboard");

    }

    
   
    const value = {authentication, handleLogout} ; 
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider> 
  )
}*/
