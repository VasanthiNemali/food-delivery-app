import { height } from '@mui/system'
import React from 'react'
import BagelCategory from '../../images/BagelCategory.png'
import CoffeeCategory from '../../images/CoffeeCategory.png'
import PastaCategory from '../../images/PastaCategory.png'
import PizzaCategory from '../../images/PizzaCategory.png'
import SandwichCategory from '../../images/SandwichCategory.png'

import '../styles/Categories.css';


const CategoryData=[
  {
    title:'Bagels',
    imgUrl:BagelCategory
},
{
 title:'Coffee',
  imgUrl:CoffeeCategory
},
{
  title:'Pasta',
  imgUrl:PastaCategory
},
{
  title:'Pizza',
  imgUrl:PizzaCategory
},
{
  title:'Sandwich',
  imgUrl:SandwichCategory
},
]


const Categories = () => {
  
 
  return (
 
    <div className="image-txt-container">
     
      {CategoryData.map(item => (
        <div>

          
           <img  src={item.imgUrl}  />
           
          
            <h6>{item.title}</h6>
         
     </div>
        
          ))}
           </div>
   

    
        
          
            
                
             
       
  )
}

export default Categories