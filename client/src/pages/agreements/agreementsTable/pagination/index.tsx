import React from "react";
import ChevronLeftIcon from "../../../../components/SVGIcons/ChevronLeftIcon";
import ChevronRightIcon from "../../../../components/SVGIcons/ChevronRightIcon";
import TwiceChevronLeftIcon from "../../../../components/SVGIcons/TwiceChevronLeftIcon";
import TwiceChevronRightIcon from "../../../../components/SVGIcons/TwiceChevronRightIcon";
import { AgreementDocument } from "../../../../types";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../../../lang/translationKeys";
import Select from "antd/es/select";
import { DEFAULT_PAGE_SIZE } from "../../../../constants";
import ChevronDownIcon from "../../../../components/SVGIcons/ChevronDownIcon";
import "./styles.css";

type PaginationTableProps = {
  pageSize: number;
  currentPageNumber: number;
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
  currentPageNumber,
  setPageSize,
  handleNextPage,
  handlePreviousPage,
  handlePage,
  handleFirstPage,
  handleLastPage,
  filteredData,
}) => {
  const { t } = useTranslation();

  const totalPages = Math.ceil(filteredData.length / pageSize);

  let startPage = Math.max(1, currentPageNumber - 2);
  const endPage = Math.min(totalPages, startPage + 4);
  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const isFirstPageAllowed = currentPageNumber > startPage;
  const isPreviousPageAllowed = currentPageNumber > startPage;
  const isLastPageAllowed = currentPageNumber < endPage;
  const isNextPageAllowed = currentPageNumber < endPage;

  return (
    <div className="pagination-container">
      <div>
        <span>
          {`${t(translationKeys.SHOWING)} ${Math.min(
            pageSize,
            filteredData.length
          )} ${t(translationKeys.OF)} ${filteredData.length}`}
        </span>
      </div>
      <div className="page-clicker-container">
        <button
          className="icon-button"
          disabled={!isFirstPageAllowed}
          onClick={handleFirstPage}
        >
          <TwiceChevronLeftIcon
            className={
              isFirstPageAllowed
                ? "pagination-icon"
                : "pagination-icon-disabled"
            }
            size={12}
          />
        </button>
        <button
          className="icon-button"
          disabled={!isPreviousPageAllowed}
          onClick={handlePreviousPage}
        >
          <ChevronLeftIcon
            className={
              isFirstPageAllowed
                ? "pagination-icon"
                : "pagination-icon-disabled"
            }
            size={10}
          />
        </button>

        {pageNumbers.map((page) => (
          <button
            className="icon-button"
            key={page}
            onClick={() => handlePage(page)}
          >
            <p className={page === currentPageNumber ? "current-page" : ""}>
              {page}
            </p>
          </button>
        ))}

        <button
          className="icon-button"
          disabled={!isNextPageAllowed}
          onClick={handleNextPage}
        >
          <ChevronRightIcon
            className={
              isNextPageAllowed
                ? "pagination-icon"
                : "pagination-icon-disabled"
            }
            size={10}
          />
        </button>
        <button
          className="icon-button"
          disabled={!isLastPageAllowed}
          onClick={handleLastPage}
        >
          <TwiceChevronRightIcon
            className={
              isLastPageAllowed
                ? "pagination-icon"
                : "pagination-icon-disabled"
            }
            size={12}
          />
        </button>
      </div>
      <div className="page-selector-container">
        <p>{t(translationKeys.ROWS_PER_PAGE)}</p>
        <Select
          onChange={setPageSize}
          defaultValue={DEFAULT_PAGE_SIZE}
          dropdownStyle={{
            backgroundColor: "#ffffff",
            borderRadius: "6px",
            width: "60px",
          }}
          placement="bottomRight"
          className="pagination-page-select"
          suffixIcon={
            <ChevronDownIcon size={20} className="pagination-chevron-down" />
          }
        >
          <Select.Option value="10">10</Select.Option>
          <Select.Option value="15">15</Select.Option>
          <Select.Option value="20">20</Select.Option>
          <Select.Option value="25">25</Select.Option>
          <Select.Option value="50">50</Select.Option>
          <Select.Option value="100">100</Select.Option>
        </Select>
      </div>
    </div>
  );
};

export default PaginationTable;
