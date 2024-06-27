import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h2 className='logo'>Foodie</h2>
                <p>Say goodbye to the hassle of meal planning and cooking, and hello to effortless dining satisfaction. With our user-friendly interface, secure payment options, and lightning-fast delivery, indulgence is just a few clicks away.</p>
         <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="https://www.facebook.com" />
            <img src={assets.linkedin_icon} alt="https://www.linkedin.com/in" />
            <img src={assets.twitter_icon} alt="https://x.com/?lang=en" />
           </div>
            </div> 
            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                  <li>+1-212-456-7890</li>
                  <li>vaibhavpan02@gmail.com</li>
                </ul>
            </div>
           
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 © FoodiePoint.com - All Right Reserved</p>
    </div>
  )
}
//1:50 hour
export default Footer
