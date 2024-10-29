import React from "react";
import SearchIcon from "../../../../components/SVGIcons/SearchIcon";
import ChevronDownIcon from "../../../../components/SVGIcons/ChevronDownIcon";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../../../lang/translationKeys";
import { documentTypeMapping } from "../../helper";
import { DatePicker, Select } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { DEFAULT_TYPE, TFilterTable } from "..";

import "./styles.css";
import { DEFAULT_PAGE_NUMBER } from "../../../../constants/table";

type TableFilterProps = {
  filters: TFilterTable;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterDate: (
    date: React.ChangeEvent<HTMLInputElement>,
    dateString: string | string[]
  ) => void;
  handleFilterType: (
    value: string,
    option: DefaultOptionType | DefaultOptionType[]
  ) => void;
};

const TableFilters: React.FC<TableFilterProps> = ({
  filters,
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
          value={filters.searchText}
          onChange={handleSearch}
          className="search-input"
        />
        <SearchIcon
          color={filters.searchText ? "#000000" : "#9e9d9f"}
          size={24}
          className="search-icon"
        />
      </div>
      <div className="filters-wrapper">
        <div className="date-input-container">
          <DatePicker
            className="expiration-date-input"
            placeholder={t(translationKeys.EXPIRATION_DATE)}
            value={filters.expirationDate.event as any}
            format="YYYY/MM/DD"
            onChange={handleFilterDate}
            suffixIcon={
              <ChevronDownIcon
                color={filters.expirationDate.event ? "#000000" : "#9e9d9f"}
                size={20}
              />
            }
            onResetCapture={() =>
              handleFilterDate({} as React.ChangeEvent<HTMLInputElement>, "")
            }
            autoFocus={false}
          />
        </div>
        <div className="doc-type-selector-wrapper">
          <Select
            value={filters?.documentType}
            // defaultValue={DEFAULT_TYPE}
            onChange={handleFilterType}
            className="doc-type-selector"
            placeholder={t(translationKeys.DOCUMENT_TYPE)}
            dropdownStyle={{
              backgroundColor: "#ffffff",
              borderRadius: "6px",
              borderColor: "red",
              color: "#ffffff",
            }}
            placement="bottomRight"
            autoFocus={false}
            suffixIcon={
              <ChevronDownIcon
                color={
                  filters?.documentType === DEFAULT_TYPE ? "#000000" : "#9e9d9f"
                }
                size={20}
              />
            }
          >
            <Select.Option value={DEFAULT_TYPE} key={DEFAULT_TYPE}>
              {DEFAULT_TYPE}
            </Select.Option>
            {Object.entries(documentTypeMapping).map(
              ([modelValue, displayValue]) => (
                <Select.Option key={modelValue} value={modelValue}>
                  {displayValue}
                </Select.Option>
              )
            )}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
