import React, { useState } from 'react';
import log from "../Assets/dubaiii.jpg";
import Icons from './Icons';
import SortInput from './Sortinput';
import Tours from './Tours';
import Baner from './Baner';
import New from './New';
import { toursList } from "../compontent/Date";
import Paingation from './Paingation';

const Homepage = () => {
  const [sort, setSort] = useState(""); // State for sorting

 // Create a copy to avoid mutating the original array
  
  if (sort === "Price - Low to high") {
  toursList.sort((a, b) => a.priceFrom - b.priceFrom);
  } else if (sort === "Price - High to low") {
   toursList.sort((a, b) => b.priceFrom - a.priceFrom);
  }


const[currentPage, setCurrentPage]=useState(1)
const TOUR =6;
const pages=Math.ceil(toursList.length / TOUR) ;
const startindex=(currentPage-1)*TOUR;
const finshindex=currentPage*TOUR;
 const tours=toursList.slice(startindex,finshindex)
  return (
    <div>
      <img src={log} alt='Dubai Desert Safaris' className='homepage'/>
      <h1 className='titlehome'>Dubai</h1>
      <h1 className='titlehome'>Desert Safaris</h1>
      <Icons />
      <SortInput 
        tourLength={toursList.length} 
        onSortChange={setSort} 
        currentSort={sort}
      />
      <Tours tourlist={tours} />
             <div>
      {/* ... باقي الكود */}
      <Paingation 
        pages={pages} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} // عدلت هنا
      />
    </div>
      <Baner />
      <New />
   
    </div>
  );
}

export default Homepage;
