import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import moment from "moment";
import { AgreementDocument } from "../../../types";
import { getColumns } from "../helper";
import "./styles.css";
import PaginationTable from "./pagination";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../../lang/translationKeys";
import TableFilters from "./filters";

type AgreementsTableProps = {
  data: AgreementDocument[];
};

const AgreementsTable: React.FC<AgreementsTableProps> = ({ data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const [documentType, setDocumentType] = useState<string | undefined>(
    undefined
  );
  const [expirationDate, setExpirationDate] = useState<string | undefined>(
    undefined
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchText(value);
    const filtered = data.filter((item) =>
      item.data.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleFilterType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setDocumentType(value);
    const filtered = value
      ? data.filter((item) => item.data.agreementType === value)
      : data.filter((item) => item.data.agreementType);
    setFilteredData(filtered);
  };

  const handleFilterDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setExpirationDate(value);
    const filtered = data.filter((item) =>
      moment(item.data.expirationDate).isSame(moment(value), "day")
    );
    setFilteredData(filtered);
  };

  const handleNextPage = () => {
    if (pageNumber < Math.ceil(filteredData.length / pageSize)) {
      setPageNumber((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };

  const handleFirstPage = () => {
    setPageNumber(1);
  };

  const handleLastPage = () => {
    setPageNumber(Math.ceil(filteredData.length / pageSize));
  };

  const handleAction = (record: AgreementDocument) => {
    navigate(`/agreement-details/${record.id}`);
  };

  const columns = getColumns(handleAction);

  return (
    <div className="content-container">
      <div className="content-wrap-container">
        <TableFilters
          searchText={searchText}
          expirationDate={expirationDate}
          documentType={documentType}
          handleSearch={handleSearch}
          handleFilterDate={handleFilterDate}
          handleFilterType={handleFilterType}
        />
        {!!filteredData.length ? (
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  {columns.map((col, index) => (
                    <th scope="col" key={index}>
                      {col.title.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(startIndex, endIndex).map((item) => (
                  <tr key={item.id}>
                    {columns.map((col, index) => (
                      <td key={index} data-label={col.title}>
                        {col.render(undefined, item)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination-table">
              <PaginationTable
                pageSize={pageSize}
                pageNumber={pageNumber}
                setPageSize={setPageSize}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePage={(pageNumber: number) =>
                  setPageNumber(pageNumber ?? 1)
                }
                handleFirstPage={handleFirstPage}
                handleLastPage={handleLastPage}
                filteredData={filteredData}
              />
            </div>
          </div>
        ) : (
          <div className="table-container">
            <div className="empty-data">
              <h2>
                {t(
                  searchText
                    ? translationKeys.SEARCH_NO_DATA_TITLE
                    : translationKeys.NO_DATA_TO_SHOWN,
                  searchText ? { searchTerm: searchText } : undefined
                )}
              </h2>
              <p>
                {t(
                  searchText
                    ? translationKeys.SEARCH_NO_DATA
                    : translationKeys.NO_DATA_TO_SHOWN
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgreementsTable;
