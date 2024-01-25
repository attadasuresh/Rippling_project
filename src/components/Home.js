import React from 'react'
import './Home.css';
const Home = () => {
  return (
    <>
       
       <div className='card1 d-flex flex-row'>
        <div className='card2'>
       <h1 className='head1'>Magically Simplify <br/>HR, IT, and Finance</h1>
       <p className='para2'>Seamless Staff Hub lets you easily manage your employees’<br/> payroll, benefits, expenses, devices, apps & more—in one place.</p>
      <input type="text" className='inputbox' placeholder='   Enter Your Email Address'/><br/>
       <button className='button1'>Submit</button>
       <p className='para3'>By clicking "Submit" you agree to Seamless Staff Hub Privacy Notice</p>
       </div>
       <img className='img1' src="images\Recruitment.png"/>
       </div>
       
<div className='card5'>
<p className='para5'>THE #1 RATED WORKFORCE PLATFORM</p>
<h1 className='head5'>Explore  Seamless Staff Hub by product</h1>
</div>

<div className='card7'>
    <div className='card8'>
    <img className='img3' src="images\icone-de-nuage-orange.png"/>
<h1 style={{fontSize:"25px",fontWeight:"bold"}}>Hr Cloud</h1>
<p className='para8'>manage and automate employee lifecycle Award-winning HR software built to help</p>

<div className='d-flex flex-row'>

<div className='d-flex flex-row card9' >
    <img className='img5' src="images\dollar-coin-outline-icon.webp"/>
    <p style={{paddingLeft:"10px",fontWeight:"bold"}}>Payroll</p>
</div>
<div className='d-flex flex-row card9' >
    <img className='img5' src="images\dollar-coin-outline-icon.webp"/>
    <p style={{paddingLeft:"10px",fontWeight:"bold"}}>Payroll</p>
</div>
</div>

</div>

</div>
    </>
  )
}

export default Home