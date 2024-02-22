import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Hremploye.css'
import {Link}  from 'react-router-dom'

const Hremploye = () => {

  //GET DATA FROM REGISTERFORM

  const [employe,setEmploye]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8081/getemploye')
    .then(res=>{
      setEmploye(res.data)})
    .catch(err=>console.log(err));
  },[])
  console.log(employe);




  return (
   <>

  <div>
  <ul>
  <h1 className='Hre-head1'>EMPLOYEE DATA</h1>

  <div className='Hre-card1'>
  <button className='Hre-button1'>TOTAL - EMPLOYES<p>0</p></button>
  <button className='Hre-button1'>PRESENT - EMPLOYES<p>0</p></button>
  <button className='Hre-button1'>ABSENT - EMPLOYES<p>0</p></button>
  <button className='Hre-button1' >EMPLOYES - DETAILS <p>{employe.length}</p></button>
  </div>
   
  <Link to='/EmployeRegister' className='Hre-head2'>ADD - EMPLOYEE </Link>

  <div  className='Hre-table1'>
  <table>

  <tr>
    <th>NAME</th>
    <th>EMPLOYE ID</th>
    <th>JOBPOSITION</th>
    <th>LOCATION</th>
    <th>DATEOFBIRTH</th>
    <th>EMAIL</th>
    <th>NUMBER</th>
    <th>ADDRESS</th>
    <th>ACTIONS</th>
  </tr>


  {
employe.map((data)=>(

  <tr>
    <td>{data.name}</td>
    <td>{data.userid}</td>
    <td>{data.jobposition}</td>
    <td>{data.location}</td>
    <td>{data.dateofbirth}</td>
    <td>{data.email}</td>
    <td>{data.number}</td>
    <td>{data.address}</td>
     <td><button className='Hre-button3' type='button' onClick={e =>deletHandler(data.id)}  >DELETE</button></td> 

  </tr>

))}
</table>
</div>
</ul>
  </div>

   
   
   </>
  )
}

      // DELETE BUTTON

      const deletHandler = async (id) =>{
        try{
          await axios.delete('http://localhost:8081/employedelet/'+id)
          console.log(id)
          window.location.reload()
        }catch(err){
          console.log(err);
        }}




export default Hremploye