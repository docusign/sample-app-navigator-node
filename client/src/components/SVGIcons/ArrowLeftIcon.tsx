// import React from 'react';
// import './styles.css';

const ArrowLeft = ({ color = "#000000", size = 24 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 6 10" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.333 4.999L4.698 0.333L5.667 1.215L2.126 4.999L5.667 8.785L4.698 9.667L0.333 4.999Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowLeft;
