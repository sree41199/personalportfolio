import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import logo from "../../assets/logo.png"

function Header(){
    
      
    return (


<div>

<nav class="uk-navbar-container uk-visible@l" uk-navbar data-uk-sticky  >
    <div class="uk-navbar-left ">
        


<div class="uk-panel" style={{backgroundColor:"white" ,height:"10%",width:"100%"}}>
        <img  class=" l1"  style={{}} src={logo} alt=""/>
      
            <p class="uk-align-right uk-margin-remove-bottom" style={{paddingTop:"3%",paddingRight:"3%",fontSize:"14px"}}>
                <a class=""  href="/#" style={{paddingRight:"30px",color:"black"}}>HOME</a>
                <a class=""  href="/#"style={{paddingRight:"30px",color:"black"}}>ABOUT US</a>
                <a class="" style={{paddingRight:"30px",color:"black"}}>PORTFOLIO</a>
                <a class="" href="/gallery"style={{paddingRight:"30px",color:"black"}}>GALLERY</a>
                <a class=""   href="/contactus" style={{paddingRight:"30px",color:"black"}}>CONTACT US</a>

                {/* <a><div class="uk-inline">
                 <button class="uk-button " type="button" style={{backgroundColor:"white",color:"black",paddingLeft:"0px"}}>BOOKINGS<span uk-icon="chevron-down"></span></button>
                 <div uk-drop="pos: bottom-justify">
                 <div class="uk-card uk-card-body uk-card-default uk-padding-remove">
                 <ul class="uk-list">
                 <li> <a class=""href="/#"style={{paddingRight:"30px",color:"black",backgroundColor:""}}>Check out</a></li>
                 <li>List item 2</li>
                 <li>List item 3</li>
                 </ul>
                 </div>
                 </div>
                 </div>
                 </a> */}

<button class=" uk-button-primary" style={{borderRadius:"50px",padding:"10px",marginBottom:"5px"}}>make an appointment</button>


               
              
                
               
               
                
            </p>
</div>



  </div>
</nav>

{/* visible@s */}


<nav class="uk-navbar-container uk-hidden@l  uk-hidden@m" uk-navbar data-uk-sticky  >
    <div class="uk-navbar-left ">
        


<div class="uk-panel" style={{backgroundColor:"white" ,height:"10%",width:"100%"}}>
        <img  class=" l2"  style={{}} src={logo} alt=""/>
      
            <p class="uk-align-right uk-margin-remove-bottom" style={{paddingTop:"3%",paddingRight:"3%"}}>
           
                <button class="uk-button uk-padding-remove" type="button" uk-toggle="target: #offcanvas-flip"  style={{backgroundColor:"white"}}> <span uk-icon="menu"></span> </button>
                <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
                <div class="uk-offcanvas-bar" style={{backgroundColor:"white"}}>
            <button class="uk-offcanvas-close" type="button" uk-close> <span uk-icon="close"></span></button>
         
            
            <div class="uk-card uk-card-default uk-card-body uk-margin">
           
           <ul class="uk-list " style={{padding:"10%"}}>
           <li>HOME</li>
           <li>ABOUT US</li>
           <li>PORTFOLIO</li>
           <li>GALLERY</li>
           <li>CONTACT US</li>
       
           </ul>
           <button class=" uk-button-primary" style={{borderRadius:"50px",padding:"10px",backgroundColor:"#0968e3",color:"white"}}>make an appointment</button>
           </div>
                </div>
                </div>
                
            </p>
            


        </div>



  </div>


 


</nav> 





    </div>  




  

        );
}


export default Header;