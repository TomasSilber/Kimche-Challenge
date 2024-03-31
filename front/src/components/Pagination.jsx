import React from 'react';

const Paginado = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
      <span className="text-white text-lg font-semibold">{`Page ${currentPage} of ${totalPages}`}</span>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Paginado;

