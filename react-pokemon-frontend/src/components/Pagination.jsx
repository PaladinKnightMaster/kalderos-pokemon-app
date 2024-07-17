import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ currentPage, setPage, totalItems, pageSize }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      onChange={handleChange}
      shape="rounded"
      color="primary"
    />
  );
};

export default Pagination;
