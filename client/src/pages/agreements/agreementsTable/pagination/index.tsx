import React from "react";
import arrowLeft from "../../../../assets/img/arrowLeft.svg";
import arrowRight from "../../../../assets/img/arrowRight.svg";
import twiceArrowLeft from "../../../../assets/img/twiceArrowLeft.svg";
import twiceArrowRight from "../../../../assets/img/twiceArrowRight.svg";
import { AgreementDocument } from "../../../../types";
import "./styles.css";

type PaginationTableProps = {
  pageSize: number;
  pageNumber: number;
  setPageSize: (size: number) => void;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePage: (pageNumber: number) => void;
  handleFirstPage: () => void;
  handleLastPage: () => void;
  filteredData: AgreementDocument[];
};

const PaginationTable: React.FC<PaginationTableProps> = ({
  pageSize,
  pageNumber,
  setPageSize,
  handleNextPage,
  handlePreviousPage,
  handlePage,
  handleFirstPage,
  handleLastPage,
  filteredData,
}) => {
  const totalPages = Math.ceil(filteredData.length / pageSize);

  var startPage = Math.max(1, pageNumber - 2);
  const endPage = Math.min(totalPages, startPage + 4);
  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <div>
        {" "}
        <span>
          Showing 1-{Math.min(pageSize, filteredData.length)} of{" "}
          {filteredData.length}
        </span>
      </div>
      <div className="page-clicker-container">
        <img src={twiceArrowLeft} alt="icon" onClick={handleFirstPage} />
        <img src={arrowLeft} alt="icon" onClick={handlePreviousPage} />
        {pageNumbers.map((page) => (
          <p
            key={page}
            onClick={() => handlePage(page)}
            className={page === pageNumber ? "current-page" : ""}
          >
            {page}
          </p>
        ))}

        <img src={arrowRight} alt="icon" onClick={handleNextPage} />
        <img src={twiceArrowRight} alt="icon" onClick={handleLastPage} />
      </div>
      <div className="page-selector-container">
        <p>{"Rows per page: "}</p>
        <select
          className="page-selector" 
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    </div>
  );
};

export default PaginationTable;
