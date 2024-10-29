// import React from 'react';
// import './styles.css';

const TwiceChevronRightIcon = ({ color = "#000000", size = 24 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 12 8" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.63481 0.333344L5.99999 5.00001L1.63481 9.66668L0.666656 8.78477L4.2069 5.00001L0.666656 1.21526L1.63481 0.333344ZM6.96814 0.333344L11.3333 5.00001L6.96814 9.66668L5.99999 8.78477L9.54023 5.00001L5.99999 1.21526L6.96814 0.333344Z"
        fill={color}
      />
    </svg>
  );
};

export default TwiceChevronRightIcon;
