import React from 'react';

export default function SortInput({ tourLength, onSortChange,  currentSort}) {
  return (
<div className='container-fluid d-flex align-items-center sort'>
  <div className='align-left'>  {/* سيتم محاذاته لليسار */}
    <h2> {tourLength} tours found <i className="bi bi-info-circle"></i></h2>
  </div>
  <select className='form-select ms-auto' style={{ width: '200px' }} value={ currentSort} onChange={(e)=> onSortChange(e.target.value)}>
    <option>Recommended</option>
    <option>Price - Low to high</option>
    <option>Price - High to low</option>
  </select>
</div>
  );
}