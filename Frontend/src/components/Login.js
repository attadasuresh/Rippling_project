import React,{useState} from 'react'
import './Login.css';
import axios from 'axios';
import Cookies from 'js-cookie'



const Login = (props) => {

  const {history} = props
  console.log(history)
  const [email,setEmail] = useState ("");
  const [password,setPassword] = useState ("");
  const [logindetails,setLogindetails]= useState ({
    email:"",
    password:""
  })

const submithandler = (event)=> {
event.preventDefault();
setLogindetails({email,password})

axios.post('http://localhost:8081/login/',{email,password})
.then(res => {
  console.log(res.data)
if(res.data){
  history.replace("/Admin")
  Cookies.set("token", `${email}`,{expires:30})
}else{
  alert("user not match")
}

})
.catch(err => console.log(err));

}




  return (
    <>
    
    <form onSubmit={submithandler} className='Ln-card1 d-flex flex-row'>
        <div className='Ln-card21'> 
       <h1 className='Ln-head1'>ADMIN LOGIN</h1> 
      <input type="text" className='Ln-inputbox' placeholder='   Enter Your User Name' onChange={ e => setEmail(e.target.value) } /><br/>
      <input type="password" className='Ln-inputbox' placeholder='   Enter Your Password'  onChange={ e => setPassword(e.target.value) } /><br/>
       <button type='submit' className='hr-button1'>LOGIN</button>
       </div>
       <img className='Ln-img1' src="images\8-2-web-security-png-hd.png"/>
       </form>
    
    </>
  )
}

export default Login