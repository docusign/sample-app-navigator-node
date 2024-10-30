import React, { useState } from "react";
import SearchIcon from "../../../../components/SVGIcons/SearchIcon";
import ChevronDownIcon from "../../../../components/SVGIcons/ChevronDownIcon";
import CrossIcon from "../../../../components/SVGIcons/CrossIcon";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../../../lang/translationKeys";
import { DatePicker, Select } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { DEFAULT_TYPE, TFilterTable } from "..";
import dayjs from "dayjs";
import ChevronUpIcon from "../../../../components/SVGIcons/ChevronUpIcon";
import "./styles.css";

type TableFilterProps = {
  filters: TFilterTable;
  uniqueTypes: string[];
  handleSearch: (event: React.ChangeEvent<HTMLInputElement> | null) => void;
  handleFilterDate: (
    date?: dayjs.Dayjs,
    dateString?: string | string[]
  ) => void;
  handleFilterType: (
    value: string,
    option: DefaultOptionType | DefaultOptionType[]
  ) => void;
};

const TableFilters: React.FC<TableFilterProps> = ({
  filters,
  uniqueTypes,
  handleSearch,
  handleFilterDate,
  handleFilterType,
}) => {
  const { t } = useTranslation();
  const [onSelectDropdownVisible, setOnSelectDropdownVisible] = useState(false);
  const [onDatePickerDropdownVisible, setOnDatePickerDropdownVisible] =
    useState(false);

  const handleTodayButtonClick = () => {
    const today = new Date();
    const todayString = today.toISOString().split("T")[0];
    const event = dayjs();

    handleFilterDate(event, todayString);
  };

  return (
    <div className="filtering-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder={t(translationKeys.SEARCH_PLACEHOLDER)}
          value={filters.searchText}
          onChange={handleSearch}
          className={`search-input ${filters.searchText ? "bold-text" : ""}`}
        />
        {filters.searchText && (
          <button
            className="icon-cross-button"
            disabled={!filters.searchText}
            onClick={() => handleSearch(null)}
          >
            <CrossIcon size={14} className="cross-icon" />
          </button>
        )}
        <SearchIcon
          size={24}
          className={`search-icon ${
            filters.searchText ? "search-icon-bold" : ""
          }`}
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
            showNow={false}
            renderExtraFooter={() => {
              return (
                <div className="date-picker-buttons">
                  <button
                    className="date-picker-button"
                    onClick={() => handleFilterDate()}
                  >
                    {t(translationKeys.CLEAR)}
                  </button>
                  <button
                    className="date-picker-button"
                    onClick={handleTodayButtonClick}
                  >
                    {t(translationKeys.TODAY)}
                  </button>
                </div>
              );
            }}
            inputReadOnly
            onOpenChange={(open) => setOnDatePickerDropdownVisible(open)}
            suffixIcon={
              onDatePickerDropdownVisible ? (
                <ChevronUpIcon
                  className={`search-icon ${
                    filters.expirationDate.event ? "search-icon-bold" : ""
                  }`}
                  size={20}
                />
              ) : (
                <ChevronDownIcon
                  className={`search-icon ${
                    filters.expirationDate.event ? "search-icon-bold" : ""
                  }`}
                  size={20}
                />
              )
            }
            autoFocus={false}
          />
        </div>
        <div className="doc-type-selector-wrapper">
          <Select
            value={filters?.documentType}
            onChange={handleFilterType}
            onDropdownVisibleChange={(open) => setOnSelectDropdownVisible(open)}
            className="doc-type-selector"
            placeholder={t(translationKeys.DOCUMENT_TYPE)}
            dropdownStyle={{
              backgroundColor: "#ffffff",
              borderRadius: "24px",
            }}
            placement="bottomRight"
            autoFocus={false}
            suffixIcon={
              onSelectDropdownVisible ? (
                <ChevronUpIcon
                  className={`search-icon ${
                    filters?.documentType === DEFAULT_TYPE
                      ? "search-icon-bold"
                      : ""
                  }`}
                  size={20}
                />
              ) : (
                <ChevronDownIcon
                  className={`search-icon ${
                    filters?.documentType === DEFAULT_TYPE
                      ? "search-icon-bold"
                      : ""
                  }`}
                  size={20}
                />
              )
            }
          >
            <Select.Option value={DEFAULT_TYPE} key={DEFAULT_TYPE}>
              {DEFAULT_TYPE}
            </Select.Option>
            {uniqueTypes.map((type) => (
              <Select.Option key={type} value={type}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
