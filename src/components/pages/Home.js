import React from 'react'
import Homeimg4 from '../../images/Homeimg4.png'
import '../styles/home.css'
import Perks from '../../images/perks.png'
import { useNavigate } from 'react-router-dom'

import RestaurantIcon from '../../images/RestaurantIcon.png'

function Home(){
  const navigate=useNavigate();
  const handleContact=(e)=>{
    //e.preventDefaults();
    navigate('/contactus')
  }
  const handleOrder=(e)=>{
    //e.preventDefaults();
    navigate('/orderpage')
  }
  
  return (
    <div className='home-container'>
      <img className='home-img' src={Homeimg4}/> 
     <div className='img-content'>
       <h4>Easy Way To make An Order</h4>
     
    <p>Best Service delivering the Flavours of Your Wish on time.</p>
    <center>    <h1 style={{color:'#D6AA17'}}> Delivering Happiness</h1><h3>---Happy Eating---</h3>
</center><hr/>
<div className='home-button-container'>
<button onClick={handleOrder} className='home-order-btn'>Order Now  </button>


<button onClick={handleContact} className='home-order-btn' >Contact Us  </button>

</div>
</div>



    
    <div className='icon-container'>
     <div className='icon-container1'>
     <img className='icons' src={RestaurantIcon}></img>
    <h2> Local favorites</h2>
    <p>
   
Satisfy any craving with delivery from popular neighborhood restaurants and chains. Reorder go-tos or find something new.
    </p>
     </div>
      
    <img className='icons' src={Perks}></img>
    <h2>Exclusive Perks</h2>
    <p> 
Discover more deals and restaurant rewards near you. Cash in on Perks and get $100s in savings.</p>
     
    
    
      
    
    </div>
    </div>
  )
}
export default Home
