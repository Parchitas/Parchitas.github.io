import React from 'react'
import Login from "../../pages/LoginPage"
import HomePage from '../../pages/HomePage';
const LoginOrHome = (props) => {
    const user = props.user;
    function LogHom(){
        if (user==null){
            return <Login/>
        }else{
            return <HomePage/>
    
        }

    }
     return(
        
        LogHom()
     )
  }

export default LoginOrHome