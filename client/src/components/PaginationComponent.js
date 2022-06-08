import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({
  postsPerPage,
  totalPosts,
  handlePagination,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  return (
    <Pagination className="pagination" size="sm">
      {pageNumbers.map((pageNumber) => (
        <Pagination.Item
          onClick={() => handlePagination(pageNumber)}
          className="m-1"
          key={pageNumber}
        >
          {pageNumber}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;
