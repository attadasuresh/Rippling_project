import React from 'react'
import Cookies from 'js-cookie'
import { Redirect,Route } from 'react-router-dom/cjs/react-router-dom.min'



const Protect = (props) => {

const token=Cookies.get("token")

   
   if(token === undefined){
    return <Redirect to="/Login" />
   }else{
        return <Route {...props}/>
   }
}

export default Protect