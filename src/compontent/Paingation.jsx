import React from 'react';


export default function Pagination({ pages, currentPage, setCurrentPage }) {
  const pageNumbers = [];
  
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-wrapper">
      <ul className="pagination">
        {pageNumbers.map(page => (
          <li key={page} className="page-item">
            <button
              className={`page-btn ${page === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}