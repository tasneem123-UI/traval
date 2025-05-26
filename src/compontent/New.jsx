import React, { useState } from 'react';
import log from "../Assets/newsletterimage.jpg";

export default function New() {
 

  return (
    <div className='container' style={{ marginTop: '-460px' }}>
      <div className='row align-items-center'>
        {/* Image Column */}
        <div className='col-lg-6 col-md-6 col-sm-12 mb-4'>
          <img 
            src={log}  
            alt='Dubai landscape'  
            className='homepage img-fluid rounded'
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>

        {/* Content Column */}
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <h1 className='display-5 fw-bold mb-4'>Your Dubai itinerary is waiting.</h1>
          <p className=''>
            Receive a curated 48-hour itinerary for the most iconic experiences in Dubai,
            straight to your inbox.
          </p>
          
          <form >
            <div className="input-group input-group-lg mb-3">
              <input 
                type="email" 
                className="form-control" 
                aria-label="Your email address"
                aria-describedby="email-input" 
                placeholder='Your Email'
                
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-lg px-5 py-3"
             
            >
              Get My Itinerary
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
