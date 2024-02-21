import React, { useState } from 'react'
import './Register.css';
import axios from 'axios';

const Register = (props) => {
  const { history = { replace: () => {} } } = props;

  
  const [Name,setName]= useState('')
  const [Jobposition,seJobposition]= useState('')
  const [JobExperience,setJobExperience]= useState('')
  const [Location,setLocation]= useState('')
  const [currentSalary,setCurrentSalary]= useState('')
  const [country,setCountry]= useState('')
  const [email,setEmail]= useState('')
  const [Contactnumber,setContactnumber]= useState('')
  const [Howknow,setHowknow]= useState('')


  const handleSubmit = (event) =>{
  event.preventDefault();
  if (Name,Jobposition,JobExperience,Location,currentSalary,country,email,Contactnumber,Howknow.length <= ""){
    alert("please fill all ")
  }else{
  axios.post('http://localhost:8081/create', { Name,Jobposition,JobExperience,Location,currentSalary,country,email,Contactnumber,Howknow})
  .then(res =>{
    console.log(res);
  }).catch(err => console.log(err));

  //null data in after register in frontpage

  setName("")
  seJobposition("")
  setJobExperience("")
  setLocation("")
  setCurrentSalary("") 
  setCountry("")
  setCountry("")
  setEmail("")
  setContactnumber("")
  setHowknow("")



}
}
  return (
   
    < >
    
    <div id='register' className='Rt-bg2'>


    
    <div className='Rt-bg1'>
        <h1 className='Rt-head1'>EnpConcor Register</h1>
        <form onSubmit={handleSubmit}>
        <div className='Rt-card1'>
        <input className='Rt-input1' value={Name} type="text" placeholder='   Enter Your Name' onChange={e =>setName(e.target.value)}/><br/>
        <input className='Rt-input1' value={Jobposition} type="text" placeholder='   Enter Your Job-position' onChange={e =>seJobposition(e.target.value)} /><br/>
        <input className='Rt-input1' value={JobExperience} type="text" placeholder='   Enter Your  Job-Experience' onChange={e =>setJobExperience(e.target.value)}/><br/>
        <input className='Rt-input1' value={Location} type="text" placeholder='   Enter Your Location' onChange={e =>setLocation(e.target.value)}/><br/>
        <input className='Rt-input1' value={currentSalary} type="text" placeholder='   Enter Your current-Salary' onChange={e =>setCurrentSalary(e.target.value)}/><br/>
        <input className='Rt-input1' value={country} type="text" placeholder='   Enter Your country' onChange={e =>setCountry(e.target.value)}/><br/>
        <input className='Rt-input1' value={email} type="text" placeholder='   Enter Your email' onChange={e =>setEmail(e.target.value)}/><br/>
        <input className='Rt-input1' value={Contactnumber} type="text" placeholder='   Enter Your contact-number'onChange={e =>setContactnumber(e.target.value)}/><br/>
        <input className='Rt-input1' value={Howknow} type="text" placeholder='   Enter Your How Did You Here About Us' onChange={e =>setHowknow(e.target.value)}/><br/>
        <button  className='Rt-button1'>Submit</button>
        <p className='Rt-para1'>By clicking "Submit" Register your Data In our Website</p>
        </div>
        </form>

    </div>
    
    </div>
    
    </>
  )
}

export default Register