import React from 'react'
import './Register.css';

const Register = () => {
  return (
   
    < >
    
    <div id='register' className='Rt-bg2'>


    
    <div className='Rt-bg1'>
        <h1 className='Rt-head1'>EnpConcor Register</h1>
        <div className='Rt-card1'>
        <input className='Rt-input1' type="text" placeholder='   Enter Your Mail' /><br/>
        <input className='Rt-input1' type="text" placeholder='   Enter Your Full Name' /><br/>
        <input className='Rt-input1' type="text" placeholder='   Enter Your  Company Name' /><br/>
        <input className='Rt-input1' type="text" placeholder='   Enter Your Country' /><br/>
        <input className='Rt-input1' type="text" placeholder='   Enter Your Phone Number' /><br/>
        <input className='Rt-input1' type="text" placeholder='   Enter Your How Did You Here About Us' /><br/>
        <button  className='Rt-button1'>Submit</button>
        <p className='Rt-para1'>By clicking "Submit" Register your Data In our Website</p>

        </div>
    </div>
    
    </div>
    
    </>
  )
}

export default Register