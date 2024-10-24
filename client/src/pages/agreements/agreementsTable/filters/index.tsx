import React from "react";
import searchIcon from "../../../../assets/img/search.svg";
import chevronDownIcon from "../../../../assets/img/chevron-down.svg";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../../../lang/translationKeys";
import { documentTypeMapping } from "../../helper";
import "./styles.css";

type TableFilterProps = {
  searchText?: string;
  documentType?: string;
  expirationDate?: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterType: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const TableFilters: React.FC<TableFilterProps> = ({
  searchText,
  expirationDate,
  documentType,
  handleSearch,
  handleFilterDate,
  handleFilterType,
}) => {
  const { t } = useTranslation();

  return (
    <div className="filtering-container">
      <div className="search-input-wrapper">
        <input
          type="search"
          placeholder={t(translationKeys.SEARCH_PLACEHOLDER)}
          value={searchText}
          onChange={handleSearch}
          className="search-input"
        />
        <img className="search-icon" src={searchIcon} alt="icon" />
      </div>
      <div className="date-input-container">
        <input
          type="date"
          placeholder="expirationDate"
          value={expirationDate}
          onChange={handleFilterDate}
          className="expiration-date-input"
        />
        <img className="chevron-down" src={chevronDownIcon} alt="icon" />
      </div>
      <div className="doc-type-selector-wrapper">
        <select
          value={documentType}
          onChange={handleFilterType}
          className="doc-type-selector"
        >
          <option value="">Document Type</option>
          {Object.entries(documentTypeMapping).map(
            ([modelValue, displayValue]) => (
              <option key={modelValue} value={modelValue}>
                {displayValue}
              </option>
            )
          )}
        </select>
        <img className="chevron-down" src={chevronDownIcon} alt="icon" />
      </div>
    </div>
  );
};

export default TableFilters;
