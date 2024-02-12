import React, { useState } from 'react'
import './Admin.css'
import {Link}  from 'react-router-dom'
import axios from 'axios';

const Admin = () => {

 const [name,setName]= useState("");
 const [email,setEmail]= useState("");
 const [password,setPassword]= useState("");
 const [company,setCompany]= useState("");


 const submithandler = (event) =>{
   event.preventDefault();
if (name,email,password,company.length <= ""){
  alert("please fill all ")
}else{
   axios.post('http://localhost:8081/hr',{name,email,password,company}).then(res =>{console.log(res);}).catch(err=>console.log(err));
   setName("")
   setEmail("")
   setPassword("")
   setCompany("")
 }}



  return (
    <>
    
    <div className='AD-card1 d-flex flex-row'>
      <form onSubmit={submithandler} >
        <div className='AD-card21'> 
       <h1 className='AD-head1'>HR REGISTRATION</h1> 
      <input type="text" name='name' value={name} className='AD-inputbox' placeholder='   Enter Your User Name' onChange={e =>setName(e.target.value)} /><br/>
     
      <input type="text" name= 'email' value={email} className='AD-inputbox' placeholder='   Enter Your Email' onChange={e =>setEmail(e.target.value)}  /><br/>
      <input type="text" name='password' value={password} className='AD-inputbox' placeholder='   Enter Your Password ' onChange={e =>setPassword(e.target.value)} /><br/>
      <input type="text" name='company' value={company} className='AD-inputbox' placeholder='   Enter Your Company Name' onChange={e =>setCompany(e.target.value)} /><br/>
       <button className='AD-button1'>SUBMIT</button>
       </div>
       </form>
       <div className='AD-card17'>
        <h1 className='AD-head12' id='admin'>DASHBOARD</h1>  
      
<p className='AD-para17' > 
<ul>
    <li>APPLICATIONS</li>
    <li>INTERVIEW</li>
    <li>OFFER - ACCEPTED</li>
    <li>ONBORDING</li>


</ul>
<Link to="/Employe">
<button className='AD-button2'>view more</button>
</Link>
</p>
</div>
       </div>
    
    </>
  )
}

export default Admin