import React from "react";
import "./styles.css";

type LoaderProps = {
  size?: number;
  color?: string;
};

const Loader: React.FC<LoaderProps> = ({ size = 40, color = "#6c6aee4d" }) => {
  return (
    <div className="loader-container">
      <div
        className="loader"
        style={{
          width: size,
          height: size,
          border: `${size / 8}px solid ${color}`,
          borderTop: `${size / 8}px solid transparent`,
        }}
      />
    </div>
  );
};

export default Loader;
