import React from 'react'
import Card from './Cart'
import {languages } from "../compontent/Date"
import {currencies} from "../compontent/Date"
export default function Fooder() {
  return (
    <div className='container-fluid bg-primary bg-gradient'>
      <div className='row'>
        <div className='col-lg-3 col-md-12 col-sm-12'>
         <select class="form-select form-select-lg mt-5" aria-label="Large select example">{languages.map((lan)=>
 <option >  {lan.value} </option>
          


          ) }
         
         </select>

<br></br>


       <select class="form-select form-select-lg mb-3" aria-label="Large select example">{currencies.map((lan)=>
 <option >  {lan.value} </option>
          


          ) }
         
         </select>

        </div>
         <div className='col-lg-3 col-md-12 col-sm-12'>
          <h1>Support</h1>
          <br></br>
           <h4>Contact</h4>
            <h4>Legal Notice</h4>
             <h4>Privacy Policy</h4>
              <h4>General Terms</h4>
                 <h4>Sitemap</h4>
        </div>
          <div className='col-lg-3 col-md-12 col-sm-12'>
         <h1>Company</h1>
         <br></br>
           <h4>Abouts us </h4>
            <h4>Careers </h4>
             <h4>Blog</h4>
              <h4>Press</h4>
                 <h4>Gift Cards</h4>
                  <h4>Magazine</h4>
                   <h4>Taraval Guides</h4>
        </div>
          <div className='col-lg-3 col-md-12 col-sm-12'>
          <h1>Work With US</h1>
                  <h4>Become a supplier</h4>
                   <h4>Become an Affliialate Pratner</h4>
                   <Card></Card>
                    <h4>Copy @  2022 Bubai Safari</h4>
        </div>
      </div>
    </div>
  )
}
