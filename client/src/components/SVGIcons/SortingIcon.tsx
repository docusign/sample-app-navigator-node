// import React from 'react';
// import './styles.css';

const SortingIcon = ({ color = "#000000", size = 24 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 6 12" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3.07565L6.46332 4L3.5 1.39596L0.536676 4L4.13985e-07 3.07565L3.5 -5.60272e-07L7 3.07565Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.92435L0.536676 6L3.5 8.60404L6.46332 6L7 6.92435L3.5 10L0 6.92435Z"
        fill={color}
      />
    </svg>
  );
};

export default SortingIcon;
