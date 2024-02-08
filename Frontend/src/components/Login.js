import React from 'react'
import './Login.css';


const Login = () => {
  return (
    <>
    

           
    <div className='Ln-card1 d-flex flex-row'>
        <div className='Ln-card21'> 

       <h1 className='Ln-head1'>ADMIN LOGIN</h1> 
      <input type="text" className='Ln-inputbox' placeholder='   Enter Your User Name'/><br/>
      <input type="text" className='Ln-inputbox' placeholder='   Enter Your Password'/><br/>
       <button className='hr-button1'>LOGIN</button>
       </div>
       <img className='Ln-img1' src="images\8-2-web-security-png-hd.png"/>
       </div>
    
    
    </>
  )
}

export default Login