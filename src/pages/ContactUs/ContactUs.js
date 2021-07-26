import React from 'react';
import { Link } from 'react-router-dom';
import '../ContactUs/ContactUs.css';




function ContactUs(){
    
      
    return (

 <div class="" style={{marginLeft:"9%",marginRight:"7%"}}>

<div> 
    <h1  style={{textAlign:"center"}}>Contact us</h1>
</div>


 <div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid " style={{marginTop:"5%"}}>

 {/* card left  */}

  <div class="uk-card uk-card-default uk-card-body uk-width-1-3@l uk-width-1-3@m uk-width-1-1@s uk-padding-remove" style={{backgroundColor:"#0081d6",marginBottom:"5%"}}>
    <p class="uk-card-title"style={{color:"white",fontSize:"25px",fontWeight:"700",padding:"5% 0% 0% 5%"}}>Our address</p>
    <p class="uk-child-width-1-2 uk-grid uk-grid-collapse" >
        
<p class="uk-width-1-4"  style={{color:"white" ,paddingLeft:"5%"}}><span class="uk-paddng-remove"uk-icon="icon: location"></span></p>
<p class="uk-width-3-4"  style={{color:"white"}}>12,25/2 Bagyamma nivas,<br/>
Ground Floor, 1st A main,<br/>
Chinapanahalli Anantarama Reddy<br/>
Layout,<br/><br/>

Behind Skoda Showroom,<br/>
Near Jeevika Hospital.Anand Nagar,<br/>
Aswath Nagar,Marathahalli,<br/><br/>

Bengaluru , Karnataka 560037  <br/><br/>
</p> 
<hr class="uk-width-1-1"/><br/>
<p class="uk-width-1-4" style={{color:"white",paddingLeft:"5%"}}><span uk-icon="icon: receiver"></span></p><br/><br/>
<p class="uk-width-3-4" style={{color:"white"}}>8050341139</p><br/><br/>
<hr class="uk-width-1-1"/><br/>
<p class="uk-width-1-4" style={{color:"white",paddingLeft:"5%"}}><span uk-icon="icon: mail"></span></p><br/><br/>
<p class="uk-width-3-4" style={{color:"white"}}>contact@racco.in</p><br/><br/>
    </p>
</div>  

 {/* end card left  */}

{/* form */}

<div class="uk-width-2-3@l uk-width-2-3@m uk-width-1-1@s ">
    <form>
<p class=""style={{color:"black",fontSize:"30px",fontWeight:"700",fontStretch:"condensed"}}>Send us a message</p>

<div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid">

        <div class="">
        <label class="uk-form-label"  style={{fontWeight:"700"}} for="form-stacked-text">Your Name*</label>
            <input class="uk-input"  style={{border:"1px solid gray",borderRadius:"5px"}} type="text" placeholder=""/><br/><br/>
        </div>
        
        <div class="">
        <label class="uk-form-label"  style={{fontWeight:"700"}} for="form-stacked-text">Your Email*</label>
            <input class="uk-input" style={{border:"1px solid gray",borderRadius:"5px"}}  type="text" placeholder=""/><br/><br/>
        </div>
        
        <div >
        <label class="uk-form-label"  style={{fontWeight:"700"}} for="form-stacked-text">Contact Number*</label>
            <input class="uk-input" style={{border:"1px solid gray",borderRadius:"5px"}} type="text" placeholder=""/><br/><br/>
        </div>
        <div class="">
        <label class="uk-form-label" style={{fontWeight:"700"}} for="form-stacked-text">Subject*</label>
            <input class="uk-input"  style={{border:"1px solid gray",borderRadius:"5px"}} type="text" placeholder=""/><br/><br/>
        </div>


</div>
<div class="" style={{border:"1px solid lightgray",marginTop:"20px"}} >

<div class="" style={{margin:"2% 2% 2% 2%"}}>
<label class="uk-form-label"  style={{fontWeight:"700"}} for="form-stacked-text">Your Message*</label>
<textarea class="uk-textarea"  style={{border:"1px solid gray",borderRadius:"5px"}} rows="3" placeholder=""  ></textarea>
</div> 

</div>
<button class=" uk-button uk-button-primary" style={{borderRadius:"5px",paddingRight:"20px",paddingLeft:"20px",marginTop:"5%"}}>send</button>
</form>
</div>


{/* form end */}




</div>
</div>
        );
}


export default ContactUs;