import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import '../styles/Header.css';
import Logo3 from '../images/Logo3.png'
function Header(){
    return(
        <div className='header'>
             <img className='header-logo' src={Logo3}/>
            <div className='header-search'>
                <input className='header-search-feild' input type='text'></input>
                <SearchIcon className='search-icon'></SearchIcon>

            </div>
            <div className='header-nav'>
            <div className='header-options'>
                <span className='header-option2'>Restaurants</span>
            </div>
            <div className='header-options'>
                <span className='header-option1'>Hello Guest</span>
                <span className='header-option2'>Sign In</span>
            </div>
            <div className='header-options'>
                <span className='header-option2'>Sign Up</span>
            </div>
            
           
            <div className='header-basket'>
            <ShoppingBasketIcon className='header-option1'/>
            <span className='header-option2'>0</span>
            
                

            </div>
            
            </div>

        </div>
    )
}
export default Header
