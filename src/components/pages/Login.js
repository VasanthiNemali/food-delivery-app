import { use } from 'express/lib/application';
import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import '../styles/Login.css'


const Login = () => {
    // const [data,setData]=useState({
    //     email:'',
    //     password:''
    // })
    const navigate=useNavigate();
    const userId=localStorage.getItem('email') ? localStorage.getItem('email'):"xxx@gmail.com";
    const passwordId=localStorage.getItem('password') ? localStorage.getItem('password'): "1111";
    // const {email,password}={...data};
    // const handleChange=(e)=>{
    //     setData({...data,[e.target.id]:e.target.value});
    // }
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const submitHandler=(e)=>{
        //e.preventDefault();
        if(email===userId && password===passwordId){
          
           navigate('/signup');
        }
        else{
          alert("Failed")
        }
       
    }
  return (
    <div className='login-form'>
    
    <form >
        <label>Email:</label>
      <input id='email' className='input-feild' type='text' placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
     

      <label>Password:</label>
      <input id='password' className='input-feild' type='password'placeholder='Enter your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button className='btn' type='submit' onClick={submitHandler}>Login</button>
      <hr />
        <p>
          Not on Happliy Fresh yet?<Link to="/signup">Sign UP
            </Link>
        </p>
</form>

    </div>
  )
}

export default Login