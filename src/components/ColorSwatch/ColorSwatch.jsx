import React from "react";

const ColorSwatch = ({ colorId, color, handleColorChange }) => {
  return (
    <li key={colorId} className="color-wrapper">
      <input
        className="colorpicker"
        type="color"
        id={colorId}
        value={color}
        onChange={(e) => handleColorChange(e)}
      />
    </li>
  );
};

export default ColorSwatch;
