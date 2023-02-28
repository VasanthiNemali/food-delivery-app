import React,{useState} from 'react'
import './signUp.css'
import axios from 'axios'

function SignUp(){
  // const [fname,setFname]=useState(null);
  // const [lname,setLname]=useState(null);
  // const [email,setEmail]=useState(null);
  // const [password,setPassword]=useState(null);
  // const [confirmPassword,setConfirmPassword]=useState(null);
  const [data,setData]=useState({
    fname:'',
    lname:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const [result,setResult]=useState([])
  const{fname,lname,email,password,confirmPassword}={...data};
  const handleCahnge=(e)=>{
    setData({...data,[e.target.id]:e.target.value})
  }
  // const handleInputChange=(e)=>{
  //   const {id,value}=e.target;
  //   if(id==='fname'){
  //     setFname(value);
  //   }
  //   if(id==='lname'){
  //     setLname(value);
  //   }
  //   if(id==='email'){
  //     setEmail(value);
  //   }
  //   if(id==='password'){
  //     setPassword(value);
  //   }
  //   if(id==='confirmPassword'){
  //     setConfirmPassword(value);
  //   }
  // }

  const handleSubmit=(e)=>{
    e.preventDefault();
    // if(password==confirmPassword){
// axios.post('https://signup-750b6-default-rtdb.firebaseio.com/signup.json',data).then(alert("data submitted"))
    // }
    // else{
    //   console.log("Passwords Not Matching ")
    // }
    const details=[...result,data];
    setResult(details);
   
  }
  return (
    <div className='sign-up-form'>
    
       <form onSubmit={handleSubmit}>
        
       <label >First Name:</label>
      <input id='fname'  className='input-feild' type='text' placeholder='Enter your FirstName' value={fname} onChange={handleCahnge}/>
    
   
      <label>Last Name:</label>
      <input id='lname' className='input-feild' type='text' placeholder='Enter your LastName' value={lname} onChange={handleCahnge}/>
    
      
      <label>Email:</label>
      <input id='email' className='input-feild' type='text' placeholder='Enter your email' value={email} onChange={handleCahnge}/>
     

      <label>Password:</label>
      <input id='password' className='input-feild' type='password'placeholder='Enter your Password' value={password} onChange={handleCahnge}/>
     

      <label>Confirm Password:</label>
      <input id='confirmPassword' className='input-feild' placeholder='Re-type pPassword' type='password'value={confirmPassword} onChange={handleCahnge}/>
     
   
      <button className='btn' type='submit' value='submit'>Sign Up</button>
      <hr/>
      <p>Do you already have account?<a href="#">Sign In</a></p>
    
       </form>
       <div>
       
        {result.map((val)=>{
          return(
            <div>
            <h3>{val.fname}</h3>
            <h3>{val.lname}</h3>
            </div>
          )
        })}
       
         
       </div>
       
    </div>
   
  )
}
export default SignUp
