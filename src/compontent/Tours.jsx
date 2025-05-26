import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router';
export default function Tours({ tourlist }) {
  return (
    <div className='container-fluid'>
      <div className='row'>
        {tourlist.map((tour, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src={tour.image} 
                alt={tour.title} 
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h2 className="card-title h2">{tour.title}</h2>
                <h5 className=" mb-2 text-muted">
                  {tour.duration} - Pickup available
                </h5>
                
                {/* Rating would need actual implementation */}
                <div className="mb-2 d-flex justify-content-around text-warning">
               
           < Rating rating={tour.rating}  reviews={tour.reviews}/>
             
                </div>
                
                <h3 className="text-danger fw-bold">
                  From ${tour.priceFrom} per person
                </h3>
          <Link to={`/tour/${tour.id}`} className="btn btn-primary">
  View Details
</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}