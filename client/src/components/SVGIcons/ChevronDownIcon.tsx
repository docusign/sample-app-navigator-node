// import React from 'react';
// import './styles.css';

const ChevronDownIcon = ({ color = "#000000", size = 24, className="" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 8.43126L4.70835 7.08325L10 10.8808L15.2917 7.08325L16.25 8.43126L10 12.9166L3.75 8.43126Z"
        fill={"currentColor"}
      />
    </svg>
  );
};

export default ChevronDownIcon;
