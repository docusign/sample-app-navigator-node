// import React from 'react';
// import './styles.css';

const SearchIcon = ({ color = "red", size = 28, className="" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke={color}
        fill={"none"}
      />
    </svg>
  );
};

export default SearchIcon;
