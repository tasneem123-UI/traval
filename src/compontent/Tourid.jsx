import React from 'react'
import { useParams } from "react-router-dom";
import { toursList } from './Date';
import Rating from "../compontent/Rating"
export default function Tourid() {
      const { id } = useParams();
  const tour = toursList.find(b => b.id === parseInt(id));
  return (
<div class="card mb-3">
  <img src={tour.image} class="card-img-top" alt="..."   style={{ height: "500px", objectFit: "cover" }}/>
  <div class="card-body">
       <h2 className="card-title h2">{tour.title}</h2>
    <p class="card-text">
        
               
           < Rating rating={tour.rating}  reviews={tour.reviews}/>
             
              
    </p>
  <h1 className=" mb-2 text-muted">
                  {tour.duration} - Pickup available
                </h1>
                
    <h3 className="text-danger fw-bold">
                  From ${tour.priceFrom} per person
                </h3>
                <h4 className=" mb-2 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt quidem nihil voluptate.
                     Fugiat dolores suscipit necessitatibus doloribus qui accusantium blanditiis et ipsum at dicta. Omnis ipsam reprehenderit eius fuga.</h4>
  </div>
</div>
  )
}
