import React, { useEffect, useState } from 'react'
import './Attendance.css'
import moment from 'moment';
const Attendance = () => {
const [date, setDate] = useState('');
  const [time, setTime] = useState('');
     

useEffect(() => {
  const interval = setInterval(() => {
    const momentNow = moment();
    setDate(momentNow.format('dddd').substring(0, 3).toUpperCase() + ' - ' + momentNow.format('MMMM DD, YYYY'));
    setTime(momentNow.format('hh:mm:ss A'));
  }, 100);
  return () => clearInterval(interval);
  }, []);


  return (
<>

<div  className='At-bg1'>

<h1 className='At-hrad1'>Employee Attendance</h1>

<div className='At-bg2' >
<h1 className='At-hrad2'>Attendance</h1>
<h1  className='At-hrad2'> {date}</h1>
<h1 className='At-hrad2'>{time}</h1>

<div><br/>
<select className='At-input1' >
  <option className='At-span1'>IN TIME</option>
  <option className='At-span1'> <span>OUT TIME</span> </option>
</select></div>
<input className='At-input1' type='text'  /><br/>
<button type='button' className='At-button3'> Submit </button>




</div>


</div>



</> 
 )
}

export default Attendance