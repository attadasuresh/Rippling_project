import React, { useState } from 'react'
import './Hrlogin.css';
import axios from 'axios';
import Cookies from 'js-cookie';


const Hrlogin = (props) => {

  const {history} = props
  console.log(history)
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [login,setLogin] =useState({

    email:"",
    password:""
  })

  const submithandler = (event) =>{
    event.preventDefault();
setLogin({email,password})

axios.post('http://localhost:8081/hrlog',{email,password}).then(res =>{ console.log(res.data)
if(res.data){
  history.replace('/Employe')
  Cookies.set("token",`${email}`,{expires:30})
}else{
  alert("user not match")
}
  })
  .catch(err => console.log(err));
  }
  return (

    <>
    
    <form  className='Hl-card1 d-flex flex-row' onSubmit={submithandler}  >
        <div className='Ln-card21' > 
       <h1 className='Ln-head1' style={{paddingLeft:"40px"}}>HR LOGIN</h1> 
      <input type="text" className='Ln-inputbox' placeholder='   Enter Your Email'    onChange={ e => setEmail(e.target.value) } /><br/>
      <input type="password" className='Ln-inputbox' placeholder='   Enter Your Password'   onChange={ e => setPassword(e.target.value) }  /><br/>
       <button type='submit' className='hr-button1'>LOGIN</button>
       </div>
       <img className='Ln-img1' src="images\hr-management.png"/>
       </form>
    
    </>
  )
  
}

export default Hrlogin