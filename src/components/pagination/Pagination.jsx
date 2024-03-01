import React, { memo } from 'react';
import './pagination.css'
import '../../../src/App.css';

const Pagination = ({ currentPage, totalPages, onPrevPage, onNextPage }) => {
  return (
    <div className="pagination">
      <button onClick={onPrevPage} disabled={currentPage === 1} className="paginationButton">
        Previous
      </button>
      <span style={{color:'black',fontSize:'22px'}}>{currentPage}</span>
      <button onClick={onNextPage} disabled={currentPage === totalPages} className="paginationButton">
        Next
      </button>
    </div>
  );
};

export default memo(Pagination);

