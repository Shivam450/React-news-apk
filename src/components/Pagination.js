import React, { useMemo } from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

// Pagination component
function Pagination({ currentPage, totalResults, pageSize, onPageChange }) {
  // Memoize the calculation of total pages
  const totalPages = useMemo(() => Math.ceil(totalResults / pageSize), [totalResults, pageSize]);

  return (
    <BootstrapPagination className="justify-content-center">
       {/* Previous page button */}
      <BootstrapPagination.Prev
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {/* Current page number */}
      <BootstrapPagination.Item active>{currentPage}</BootstrapPagination.Item>
      {/* Next page button */}
      <BootstrapPagination.Next
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      />
    </BootstrapPagination>
  );
}

export default React.memo(Pagination);