import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';
import logo from "../../assets/logo.png"

function Footer(){
    
      
    return (
        <div>
<div class="footer" >
{/* <p class="btn2" style={{fontSize:"50px"}}>Email Address  <a class="uk-button uk-button-default btn1">Go</a></p>
<p>Email must be filled out.</p>
<hr class="uk-divider-large" ></hr>

<a class="d12">To receive news, updates and tour packages via email.</a><br/> */}

<div class="uk-child-width-1-5@l uk-child-width-1-5@m uk-child-width-1-1@s uk-grid " style={{paddingTop:"60px"}} >
    <div class="">
           
    <ul class="uk-list " style={{padding:"10%"}}>
    <h4>LINKS:</h4>
    <li>HOME</li>
    <li>ABOUT US</li>
    <li>PORTFOLIO</li>
    <li>GALLERY</li>
    <li>CONTACT US</li>
    </ul>
    </div>

          <div class="">
           
           <ul class="uk-list " style={{padding:"10%"}}>
           <h4>ADDRESS</h4>
        
           <li>#80, 8th cross,</li>
           <li> Lower Palace Orchards,</li>
           <li>Sadashivnagar,</li>
           <li>Bangalore – 560080</li>
           </ul>
           </div>

        
           <div class="">
           
           <ul class="uk-list " style={{padding:"10%"}}>
           <h4>CONTACT US</h4>
           <li>+91 9449935053</li>
           <li>+91 9886744991</li>
           <li>info@houseofdentistry.in</li>
           </ul>
           </div>

           <div class="">
           
           <ul class="uk-list " style={{padding:"10%"}}>
           <h4>TIMING</h4>
           <li>Mon– Sat : 10am – 9pm</li>
           <li>Sun : 10am – 2pm</li>
           
           </ul>
           </div>

           <div>
        
           <ul class="uk-list " style={{padding:"10%"}}>
           <h4>FOLLOW US</h4>
           <li><a class="" uk-icon="icon: facebook" style={{color:"gray"}}></a>&nbsp;
          <a class="" uk-icon="icon:  twitter" style={{color:"gray"}}></a>&nbsp;
          <a class="" uk-icon="icon:  google" style={{color:"gray"}}></a>&nbsp;
         
          <a class="" uk-icon="icon: pinterest" style={{color:"gray"}}></a>&nbsp;
          <a class="" uk-icon="icon: instagram" style={{color:"gray"}}></a> &nbsp;
          <a class="" uk-icon="icon:  youtube" style={{color:"gray"}}></a> &nbsp; </li><br/>
          <li>   <button class="uk-button uk-button-primary" style={{borderRadius:"50px",lineHeight:"25px"}}>make an appointment</button></li>
           
           </ul>
          
                   
      
           </div>

</div>


<br/>



           


           
</div>

         
        </div>


        );
}


export default Footer;