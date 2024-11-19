// import React from 'react';
// import './styles.css';

const CrossIcon = ({ color = "#000000", size = 24, className="" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className={className}>
      <path
        // fillRule="evenodd"
        // clipRule="evenodd"
        d="M13 1L1 13M1 1L13 13"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={"currentColor"}
        fill={"none"}
      />
    </svg>
  );
};

export default CrossIcon;
