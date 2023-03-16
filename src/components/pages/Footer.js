import "../styles/Footer.css";
import Logo3 from "../../images/Logo3.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer=()=> {
  return (
    <div className="footer-head">
 
         
              <div className="footer-logo-display">
              <img className="header-logo" src={Logo3} />
               
              </div>
           

      <div className="box-2">

      
     
      <h5>Delivery time</h5>
      <span>Monday - Friday</span>
      <p>10:00am - 8:00pm</p>

      
      
      </div>
   
      
      <div className="box-3">
      <p>Location: Vindhu, Halsted Road, USA</p>
      <span>Phone: 1234567890</span>
      <span>Email: abc@gmail.com</span>
      
      </div>

      <div className="box-4">
      <h1>Why Happily Fresh?</h1>
      <li>Fresh Food</li>
      <li>Quality as </li>
     
      </div>
     
      <div className="social-container">
        <a className="youtube" href="https://www.facebook.com/">
          <FacebookIcon />
        </a>
        <a className="twitter-icon" href="https://twitter.com/?lang=en">
          <TwitterIcon />
        </a>
        <a className="instagram-icon" href="https://www.instagram.com/">
          <InstagramIcon />
        </a>
      </div>
     
    </div>
  );
}
export default Footer;
