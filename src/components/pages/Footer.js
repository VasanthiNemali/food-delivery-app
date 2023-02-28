import '../styles/Footer.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div >
   <div className='footer-content1'>
       
     <h1>Why Happily Fresh?</h1>
   <li>Fresh Food</li>
   <li>Quality as </li>
    <li>Fresh Food</li>
     <li>Quality as</li>
     


    </div>
     <div className='social-container'>
       <a className='youtube' href='https://www.facebook.com/'><FacebookIcon/></a>
   <a className='twitter-icon' href='https://twitter.com/?lang=en'><TwitterIcon/></a>
     <a className='instagram-icon' href='https://www.instagram.com/'><InstagramIcon/></a>
     </div>
     
      
      
    </div>
  )
}
export default Footer
