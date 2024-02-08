import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Link}  from 'react-router-dom'
import './Employe.css'

const Employe = () => {

  const [student,setStudent]= useState([])

 useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res => setStudent(res.data))
    .catch(err => console.log(err));
 },[])


 const handleSubmit = async (id) =>{
  try{
    await axios.delete('http://localhost:8081/student/'+id)
    console.log(id)
    window.location.reload()
  }catch(err){
    console.log(err);
  }
  
 }


  return (
<>

<div>
   <h1 className=' Ep-head3'>DASHBOARD</h1>

<div className='d-flex flex-row'>

   <div className='Ep-card1'>
   <h1 style={{fontSize:"26px",textAlign:"center",fontFamily:"roboto",fontWeight:"bold"}}>APPLICATIONS</h1>
   <h1 className='Ep-head1'>{student.length}</h1>
   </div>

   <div className='Ep-card1'>
   <h1 style={{fontSize:"26px",textAlign:"center",fontFamily:"roboto",fontWeight:"bold"}}>INTERVIEW</h1>
   <h1 className='Ep-head1'>0</h1>
   </div>
   <div className='Ep-card1'>
   <h1 style={{fontSize:"26px",textAlign:"center",fontFamily:"roboto",fontWeight:"bold"}}>OFFER - ACCEPTED</h1>
   <h1 className='Ep-head1'>0</h1>
   </div>
   <div className='Ep-card1'>
   <h1 style={{fontSize:"26px",textAlign:"center",fontFamily:"roboto",fontWeight:"bold"}}>ONBORDING</h1>
   <h1 className='Ep-head1'>0</h1>
   </div>
   </div>
   <div>
   <span className='Ep-span1'><Link to="/Register">ADD +</Link></span>

<ul className='Epul-container'>
    {
      student.map((data)=> (
        
          <li key={data.id} className='Epitem-container'>
            
       <h1 style={{fontSize:"23px",fontWeight:"bold",textAlign:"center",paddingBottom:"10px"}}>APPLICATION</h1>

          <p> <span style={{fontSize:"20px",fontWeight:"bold"}}>Name :</span><span style={{paddingLeft:"145px",fontSize:"20px"}}>{data.Name}</span></p>
          <p> <span style={{fontSize:"20px",fontWeight:"bold"}}>Job-position : :</span> <span style={{paddingLeft:"70px",fontSize:"20px"}}>{data.Jobposition}</span></p>
          <p> <span style={{fontSize:"20px",fontWeight:"bold"}}>Job-Experience: :</span><span style={{paddingLeft:"50px",fontSize:"20px"}}>{data.JobExperience}</span></p>
          <p> <span style={{fontSize:"20px",fontWeight:"bold"}}>Location: :</span><span style={{paddingLeft:"120px",fontSize:"20px"}}>{data.Location}</span></p>
          <p> <span style={{fontSize:"20px",fontWeight:"bold"}}>current-Salary:</span><span style={{paddingLeft:"80px",fontSize:"20px"}}>{data.currentSalary}</span></p>
          <p> <span style={{fontSize:"20px",fontWeight:"bold"}}>country:</span><span style={{paddingLeft:"140px",fontSize:"20px"}}>{data.country}</span></p>
           <p> <span style={{fontSize:"20px",fontWeight:"bold"}}>email:</span><span style={{paddingLeft:"160px",fontSize:"20px"}}>{data.email}</span></p>
          <p> <span style={{fontSize:"20px",fontWeight:"bold"}}>contact-Number:</span><span style={{paddingLeft:"60px",fontSize:"20px"}}>{data.contactNumber}</span></p>
          <p> <span style={{fontSize:"20px",fontWeight:"bold"}}>how know about this:</span><span style={{paddingLeft:"20px",fontSize:"20px"}}>{data.howknow}</span></p>
        <button className='Ep-button1'>SENT MAIL</button>
        <button className='Ep-button1' onClick={ e => handleSubmit (data.id)}>DELETE</button>
          </li>

      
       
      
      
      ))
    }
 
    </ul>
   </div>

</div>
</>

  )
}

export default Employe