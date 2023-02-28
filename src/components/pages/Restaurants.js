import { Box } from "@mui/system";
import React from "react";
import RestaurantsList from "../jsondata/restaurants.json";
import '../styles/restaurents.css'



const Restaurants = () => {
  return (
    
    <div >
     
        {RestaurantsList.map(list=> {
        return(
          < div >
          

          
            
             
               
            <img style={{width:'50px', height:'50px'}} src={list.image} />
          
       
                <h5 >{list.name}</h5>
             
                <h4 >CUISINE:{list.cuisine}</h4>
                <button >View Restaurant </button>
                <br/>
                <br/>
              
            
            </div>
        )
         
              
             
})}
      </div>
      
    

   
  );
};

export default Restaurants;
