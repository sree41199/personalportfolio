import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css';
import slide1 from "../../assets/s1.jpg"
import slide2 from "../../assets/s2.jpg"
import slide3 from "../../assets/s3.jpg"
import card1 from "../../assets/c1.png"
import card2 from "../../assets/c2.png"
import card3 from "../../assets/c3.jpg"
import slide4 from "../../assets/profile.jpg"
import slide5 from "../../assets/d1.webp"

function Header(){
    
      
    return (

        <div>
{/* slideshow1 */}
<div class=""> 
        <div uk-slideshow="autoplay: true; autoplay-interval: 3000; max-height: 800 ; animation: fade " class="" >
        <div class="uk-position-relative uk-visible-toggle uk-light  uk-padding-remove ">
               <ul class="uk-slideshow-items   ">
                <li>
                <div class="uk-child-width-1-1">
                <img src={slide1} class=" " alt="" uk-cover/>
                               
                </div>
                </li>
               
                <li>
                <div class="uk-child-width-1-1">
                <img src={slide2} class=" " alt="" uk-cover/>
                              </div>
                </li>

                <li>
                <div class="uk-child-width-1-1">
                <img src={slide1} class=" " alt="" uk-cover/>
                               </div>
                </li>

                <li>
                <div class="uk-child-width-1-1">
                <img src={slide3} class=" " alt="" uk-cover/>
                               </div>
                </li>

                <li>
                <div class="uk-child-width-1-1">
                <img src={slide1} class=" " alt="" uk-cover/>
                               </div>
                </li>
            </ul>
        </div>
      <br/>
      
    </div>
    </div>
        {/* slideshow1 end */}
        <div class="" style={{marginLeft:"7%",marginRight:"5%"}}>
        <h1 style={{color:""}}>welcome</h1>
<div class="uk-child-width-1-2 uk-grid" style={{backgroundImage:"linear-gradient(white, #a4b3eb)"}}>
    <div class="uk-width-2-3" style={{fontSize:"20px"}}>
        <p>
        Recognized as a leader in the Georgia psychiatric community, 
        Brad Johns, M.D. has over 25 years experience in treating psychiatric
        illness with all modalities – including the use of counseling 
        and psychotherapy,group psychotherapy, and psychopharmacology.
        Dr. Johns has an extensive history of treating schizophrenia,
        bipolar disorder, depression, anxiety disorder, PTSD, panic disorder,
        personality disorders, and substance abuse. He practices general
        adult psychiatry specializing in psychotherapy and psychopharmacology.
        Dr. Johns received his psychiatry training at Emory University
        where he continues to serve as Adjunct Assistant Clinical Professor 
        of Psychiatry. He is a certified Diplomate of the American Board of 
        Psychiatry & Neurology, a Fellow of the American Psychiatric Association, 
        and a Member of both the the American College of Psychiatrists 
        and the Georgia Psychiatric Physicians Association.
        </p>
    </div>
    <div class="uk-width-1-3">
    <img src={slide4} class=" " alt="" uk-cover/>
    <p  class="" style={{fontSize:"25px",textAlign:"center"}}>Dr. Johns</p>
    </div>
</div>
<div class="uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s uk-grid">
<div class="" style={{paddingLeft:""}}>
        <div class="uk-card uk-card-default" style={{borderRadius:"10px"}} >
        <div class="uk-card-media-top">
        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
        <img  class="uk-transition-scale-up uk-transition-opaque" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px" }} src={card1} alt=""/>
        <div class="" style={{padding:"15px"}}>
        <a class="" style={{fontSize:"20px",color:"black",fontWeight:"bold"}}>Dental services </a>
        <br/>
        <p class="" style={{color:"black"}}>If you’ve always dreamt of a destination wedding but never found the motivation, it’s time you checked out our Destination wedding packages that will make your dream wedding a reality.</p>
        <hr class="uk-divider-large"></hr>
        <p uk-margin>
        <a class="uk-button uk-button-default" style={{backgroundColor:"blue",fontWeight:"bold",fontSize:"17px",color:"white"}} href="/#">More</a>
         </p>
        
        </div>
        </div>
        </div>
        </div>
        </div>

        <div class="" style={{paddingLeft:""}}>
        <div class="uk-card uk-card-default" style={{borderRadius:"10px"}} >
        <div class="uk-card-media-top">
        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
        <img  class="uk-transition-scale-up uk-transition-opaque" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px" }} src={card2} alt=""/>
        <div class="" style={{padding:"15px"}}>
        <a class="" style={{fontSize:"20px",color:"black",fontWeight:"bold"}}>Dental services </a>
        <br/>
        <p class="" style={{color:"black"}}>If you’ve always dreamt of a destination wedding but never found the motivation, it’s time you checked out our Destination wedding packages that will make your dream wedding a reality.</p>
        <hr class="uk-divider-large"></hr>
        <p uk-margin>
        <a class="uk-button uk-button-default" style={{backgroundColor:"blue",fontWeight:"bold",fontSize:"17px",color:"white"}} href="/#">More</a>
         </p>
        
        </div>
        </div>
        </div>
        </div>
        </div>


        <div class="" style={{paddingLeft:""}}>
        <div class="uk-card uk-card-default" style={{borderRadius:"10px"}} >
        <div class="uk-card-media-top">
        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
        <img  class="uk-transition-scale-up uk-transition-opaque" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px" }} src={card3} alt=""/>
        <div class="" style={{padding:"15px"}}>
        <a class="" style={{fontSize:"20px",color:"black",fontWeight:"bold"}}>Dental services </a>
        <br/>
        <p class="" style={{color:"black"}}>If you’ve always dreamt of a destination wedding but never found the motivation, it’s time you checked out our Destination wedding packages that will make your dream wedding a reality.</p>
        <hr class="uk-divider-large"></hr>
        <p uk-margin>
        <a class="uk-button uk-button-default" style={{backgroundColor:"blue",fontWeight:"bold",fontSize:"17px",color:"white"}} href="/#">More</a>
         </p>
        
        </div>
        </div>
        </div>
        </div>
        </div>
</div>





</div>


<br/><br/>




        <div class=" uk-text-center" style={{backgroundColor:"",backgroundImage:"linear-gradient(blue, #a4b3eb)"}}>
                <p class="uk-margin-remove" style={{color:"white",fontSize:"30px"}}>Providing medical care for infants, children, and teens<br/> in Northern Virginia, Maryland & the Washington, D.C. <br/>area for over 50 years</p>
                </div>

<br/><br/>




                <div class="uk-container"> 
        <div uk-slideshow="autoplay: true; autoplay-interval: 5000; max-height: 350 " class=" ">
        <div class="uk-position-relative uk-visible-toggle uk-light  uk-margin-remove-bottom ">
            <ul class="uk-slideshow-items   ">
                <li>
                <div class="uk-child-width-1-3 uk-grid">
                <div class="uk-card">
                    <img src={slide5} class=""  alt="" uk-cover/>
                  
                </div>

                
                <div class="uk-card">
                    <img src={slide5} class=""  alt="" uk-cover/>
                  
                </div>

                <div class="uk-card">
                    <img src={slide5} class=""  alt="" uk-cover/>
                  
                </div>
                </div>
                
                </li>
                <li>
                <div class="uk-child-width-1-3 uk-grid">
                <div class="uk-card">
                    <img src={slide5} class=""  alt="" uk-cover/>
                  
                </div>
  
                <div class="uk-card">
                    <img src={slide5} class=""  alt="" uk-cover/>
                  
                </div>

                <div class="uk-card">
                    <img src={slide5} class=""  alt="" uk-cover/>
                  
                </div>

                </div>
                </li>
                <li>
                <div class="uk-child-width-1-3 uk-grid">
                <div class="uk-card">
                    <img src={slide5} class=""  alt="" uk-cover/>
                  
                </div>

                <div class="uk-card">
                    <img src={slide5} class=""  alt="" uk-cover/>
                  
                </div>

                <div class="uk-card">
                    <img src={slide5} class=""  alt="" uk-cover/>
                  
                </div>

                </div>
                </li>
                <li>
                <div class="uk-child-width-1-3 uk-grid">
                <div class="uk-card">
                    <img src={slide5} class=""  alt="" uk-cover/>
                  
                </div>

                <div class="uk-card">
                    <img src={slide5} class=""  alt="" uk-cover/>
                  
                </div>

                <div class="uk-card">
                    <img src={slide5} class=""  alt="" uk-cover/>
                  
                </div>

                </div>
                </li>
            </ul>
        </div>
      <br/>
      
    </div>
    </div><br/>
        {/* slideshow1 end */}
             
        </div>
        );
}


export default Header;