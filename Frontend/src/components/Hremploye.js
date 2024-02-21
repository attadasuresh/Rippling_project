import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Hremploye = () => {

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
   {

employe.map((data)=>(
<li key={data.id} >
<h1>employee data</h1>

<p>name:{data.name}</p>
<p>{data.userid}</p>
<p>{data.jobposition}</p>
<p>{data.location}</p>
<p>{data.dateofbirth}</p>
<p>{data.email}</p>
<p>{data.number}</p>
<p>{data.address}</p>

</li>
)






)
   }



</ul>



  </div>
   
   
   </>
  )
}

export default Hremploye