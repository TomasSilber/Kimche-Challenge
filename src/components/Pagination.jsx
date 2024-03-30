import React from 'react';

const Pagination = ({ currentPage, totalPages, goToPrevPage, goToNextPage }) => {
  return (
    <div className="pagination">
      <button onClick={goToPrevPage} disabled={currentPage === 1}>Previous</button>
      <span>{currentPage} of {totalPages}</span>
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
