import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Link}  from 'react-router-dom'
import './Employe.css'

const Employe = () => {

        const [student,setStudent]= useState([])

        const [dataviewstatus,setDataviewstatus] = useState ()

        const [interview,setInterview] = useState ([])

        const [sendinterview,setSendinterview] = useState ()  
      
        const[smbuttonstatus,setSmbuttonstatus] = useState (true)
        
      const [conformdata,setIsCheckedData] = useState({userid:"", isChecked:false,})

    const submittodb = (event) =>{
      if(conformdata.isChecked){
        const { Name,Jobposition,JobExperience,Location,currentSalary,country,email,contactNumber,howknow}=sendinterview
        console.log(howknow);
        axios.post('http://localhost:8081/interviewdata', { Name,Jobposition,JobExperience,Location,currentSalary,country,email,contactNumber,howknow})
        .then(res=> console.log(res.data))
        .catch(err=>console.log(err))
        alert("submitted successfully")
        window.location.reload()

      }else{
        alert("please select data")
      }
   }
                                                                               
  const changedata = (id)=>{
    for(let user of student){
      if(user.id === id){
      setSendinterview((user))
      setSmbuttonstatus(false)      
      } 
    }
  }
  console.log(sendinterview);

  const renderuserdata = ()=>{


    if(dataviewstatus === "APPLICATION"){
      return ( <>
        {
          student.map((data)=> (
            
              <li key={data.id} className='Epitem-container'>
            <button   onClick={e => changedata(data.id)} className='Ep-button12'>  <input className='ep-checkbox1' onChange={e => setIsCheckedData({userid:data.id,isChecked:e.target.checked})} type='checkbox'/></button>  
                 
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
           
            
            <button type='button'  onClick={e => submittodb()} className='Ep-button1'>submit</button>
            <button type='button' className='Ep-button1' onClick={ e => handleSubmit (data.id)}>DELETE</button>
              </li>
          
          ))
        }
      </>)
    }else if(dataviewstatus === "INTERVIEW"){
     return(
      <>
      {interview.map((data)=> (   
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
          { smbuttonstatus ? <button  type='button' onClick={e => changedata(data.id)} className='Ep-button1'>SENT MAIL</button> : 
          <button type='button'  onClick={e => submittodb()} className='Ep-button1'>submit</button>}
          <button type='button' className='Ep-button1' onClick={ e => handleintSubmit (data.id)}>DELETE</button>
            </li>
        ))
      }
    </>


     )
    }
  }


  //GET APPLICATION DATA

 useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res => setStudent(res.data))
    .catch(err => console.log(err));
 },[])

  //GET INTERVIEW DATA

 useEffect(()=>{
  axios.get('http://localhost:8081/interviewdatapath')
  .then(res => setInterview(res.data))
  .catch(err => console.log(err));
},[])


      //DELETE BUTTON

 const handleSubmit = async (id) =>{
  try{
    await axios.delete('http://localhost:8081/student/'+id)
    console.log(id)
    window.location.reload()
  }catch(err){
    console.log(err);
  }
  
 }


      //DELETE INTERVIEW ITEM DATA

 const handleintSubmit = async (id) =>{
  try{
    await axios.delete('http://localhost:8081/deletinterview/'+id)
    console.log(id)
    window.location.reload()
  }catch(err){
    console.log(err);
  }
  
 }


  // ONCLICK BUTTONS OF ALL - APPLICATION,INTERVIEW ,OFFER_ACEPTED,ONBORDING IN BELOW CODE

const button1 =()=>{
 setDataviewstatus('APPLICATION')

}
const button2 =()=>{
  setDataviewstatus('INTERVIEW')
 }
 const button3 =()=>{
  setDataviewstatus('OFFER_ACEPTED')
 }
 const button4 =()=>{
  setDataviewstatus('ONBORDING')
 }
console.log(interview);
  return (
<>

<div>
  <a href='admin'>
   <h1 className=' Ep-head3'>DASHBOARD</h1>
   </a>

<div className='d-flex flex-row'>
   <button onClick={button1} className='Ep-card1'>
   <h1 style={{fontSize:"26px",textAlign:"center",fontFamily:"roboto",fontWeight:"bold"}}>APPLICATIONS</h1>
   <h1 className='Ep-head1'>{student.length}</h1>
   </button>
 
   <button onClick={button2} className='Ep-card1'>
   <h1 style={{fontSize:"26px",textAlign:"center",fontFamily:"roboto",fontWeight:"bold"}}>INTERVIEW</h1>
   <h1 className='Ep-head1'>{interview.length}</h1>

   </button>

   <button onClick={button3} className='Ep-card1'>
   <h1 style={{fontSize:"26px",textAlign:"center",fontFamily:"roboto",fontWeight:"bold"}}>OFFER - ACCEPTED</h1>
   <h1 className='Ep-head1'>0</h1>
   </button>
   
   <button onClick={button4} className='Ep-card1'>
   <h1 style={{fontSize:"26px",textAlign:"center",fontFamily:"roboto",fontWeight:"bold"}}>ONBORDING</h1>
   <h1 className='Ep-head1'>0</h1>
   </button>
   </div>
   <div>
   <span className='Ep-span1'><Link to="/Register">ADD +</Link></span>

<ul className='Epul-container'>

  

{renderuserdata()}

    
 
    </ul>
   </div>

</div>
</>

  )
}

export default Employe