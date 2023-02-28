import React, { useState } from 'react'
import './signUp.css'

const Login = () => {
    const [data,setData]=useState({
        email:'',
        password:''
    })
    const {email,password}=data;
    const handleChange=(e)=>{
        setData({...data,[e.target.id]:e.target.value});
    }
    const submitHandler=(e)=>{
        e.preventDefaults();
        console.log(data);
    }
  return (
    <div className='sign-up-form'>
    
    <form onClick={submitHandler}>
        <label>Email:</label>
      <input id='email' className='input-feild' type='text' placeholder='Enter your email' value={email} onChange={handleChange}/>
     

      <label>Password:</label>
      <input id='password' className='input-feild' type='password'placeholder='Enter your Password' value={password} onChange={handleChange}/>
      <button className='btn' type='submit'>Login</button>
</form>

    </div>
  )
}

export default Login