const  Rating = ({rating,reviews}) =>{
return(

<div className="mb-2 d-flex align-items-center gap-2  fs-4">
    <div className="ooo">
    {rating >=1 ? <i className="bi bi-star-fill"></i>
: rating >=0.5 ?<i className="bi bi-star-half"></i>
: <i className="bi bi-star"></i>
}


{rating >=2 ? <i className="bi bi-star-fill"></i>
: rating >=1.5 ?<i className="bi bi-star-half"></i>
: <i className="bi bi-star"></i>
}



{rating >=3 ? <i className="bi bi-star-fill"></i>
: rating >=2.5 ?<i className="bi bi-star-half"></i>
: <i className="bi bi-star"></i>
}
{rating >=4 ? <i className="bi bi-star-fill"></i>
: rating >=3.5 ?<i className="bi bi-star-half"></i>
: <i className="bi bi-star"></i>
}

{rating >=5 ? <i className="bi bi-star-fill"></i>
: rating >=4.5 ?<i className="bi bi-star-half"></i>
: <i className="bi bi-star"></i>
}
    </div>

<h4 className=" mt-2 " style={{color:"blue"}}>{rating} </h4>
<span className="reviwes">({(reviews)} reviwes)</span>
</div>



);
}
export default Rating;